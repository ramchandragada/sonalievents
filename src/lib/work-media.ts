import { copyFileSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "fs";
import { extname, join } from "path";
import bundled from "./work-manifest.json";

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);
const VIDEO_EXT = new Set([".mp4", ".webm", ".mov", ".m4v"]);

export type WorkItem = {
  src: string;
  kind: "photo" | "video";
  label: string;
  mtime: number;
  poster?: string;
};

function posterFor(src: string, kind: WorkItem["kind"]) {
  if (kind !== "video") return undefined;
  const file = src.split("/").pop() ?? "";
  const base = file.replace(/\.[^.]+$/, "");
  return `/posters/${base}.jpg`;
}

function withPoster(item: WorkItem): WorkItem {
  return { ...item, poster: item.poster ?? posterFor(item.src, item.kind) };
}

function slugifyFilename(name: string) {
  const ext = extname(name).toLowerCase();
  const base = ext ? name.slice(0, -ext.length) : name;
  const slug = base
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `${slug || "file"}${ext}`;
}

function dropFolders(cwd: string) {
  const names = new Set<string>();
  for (const name of readdirSync(cwd, { withFileTypes: true })) {
    if (!name.isDirectory()) continue;
    const lower = name.name.toLowerCase();
    if (
      lower.includes("photo") ||
      lower.includes("inage") ||
      (lower.includes("video") && !lower.startsWith("."))
    ) {
      names.add(name.name);
    }
  }
  names.add("photos and videos");
  return [...names].map((name) => join(cwd, name));
}

export function syncWorkMedia() {
  const cwd = process.cwd();
  const dest = join(cwd, "public", "photos-and-videos");
  mkdirSync(dest, { recursive: true });

  const seen = new Map<string, WorkItem>();

  for (const folder of dropFolders(cwd)) {
    if (folder === dest) continue;
    let entries: string[] = [];
    try {
      entries = readdirSync(folder);
    } catch {
      continue;
    }
    for (const entry of entries) {
      if (entry.startsWith(".")) continue;
      const ext = extname(entry).toLowerCase();
      if (!IMAGE_EXT.has(ext) && !VIDEO_EXT.has(ext)) continue;
      const from = join(folder, entry);
      try {
        if (!statSync(from).isFile()) continue;
      } catch {
        continue;
      }
      const slug = slugifyFilename(entry);
      const to = join(dest, slug);
      const fromStat = statSync(from);
      let shouldCopy = true;
      try {
        shouldCopy = fromStat.mtimeMs > statSync(to).mtimeMs;
      } catch {
        shouldCopy = true;
      }
      if (shouldCopy) copyFileSync(from, to);
      const kind = IMAGE_EXT.has(ext) ? "photo" : "video";
      const current = seen.get(slug);
      if (!current || fromStat.mtimeMs > current.mtime) {
        seen.set(slug, {
          src: `/photos-and-videos/${slug}`,
          kind,
          label: kind === "photo" ? "Photograph" : "Film",
          mtime: fromStat.mtimeMs,
          poster: posterFor(`/photos-and-videos/${slug}`, kind),
        });
      }
    }
  }

  const items = [...seen.values()].sort((a, b) => b.mtime - a.mtime);
  writeFileSync(
    join(cwd, "src", "lib", "work-manifest.json"),
    `${JSON.stringify(items, null, 2)}\n`,
  );
  return items;
}

function sortMedia(items: WorkItem[]) {
  return items.map(withPoster).sort((a, b) => b.mtime - a.mtime);
}

export function getWorkMedia(): WorkItem[] {
  if (process.env.VERCEL !== "1") {
    try {
      const items = syncWorkMedia();
      if (items.length > 0) return items;
    } catch {
      // Drop folder may be missing during a first clone.
    }
    try {
      const fresh = JSON.parse(
        readFileSync(join(process.cwd(), "src", "lib", "work-manifest.json"), "utf8"),
      ) as WorkItem[];
      if (fresh.length > 0) return sortMedia(fresh);
    } catch {
      // Fall through to the bundled list from the last build.
    }
  }

  return sortMedia(bundled as WorkItem[]);
}

export function getWorkPhotos() {
  return getWorkMedia().filter((item) => item.kind === "photo");
}

export function getWorkVideos() {
  return getWorkMedia().filter((item) => item.kind === "video");
}

export function firstWorkPhoto(fallback: string) {
  return getWorkPhotos()[0]?.src ?? fallback;
}
