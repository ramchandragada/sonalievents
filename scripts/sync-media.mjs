import { copyFileSync, mkdirSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { extname, join } from "node:path";

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);
const VIDEO_EXT = new Set([".mp4", ".webm", ".mov", ".m4v"]);
const cwd = process.cwd();
const dest = join(cwd, "public", "photos-and-videos");
const drop = join(cwd, "photos and videos");

mkdirSync(drop, { recursive: true });
mkdirSync(dest, { recursive: true });

function slugify(name) {
  const ext = extname(name).toLowerCase();
  const base = ext ? name.slice(0, -ext.length) : name;
  const slug = base
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `${slug || "file"}${ext}`;
}

const seen = new Map();

for (const entry of readdirSync(cwd, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const lower = entry.name.toLowerCase();
  if (
    !lower.includes("photo") &&
    !lower.includes("inage") &&
    !lower.includes("video")
  ) {
    continue;
  }
  const folder = join(cwd, entry.name);
  if (folder === dest) continue;
  for (const file of readdirSync(folder)) {
    if (file.startsWith(".")) continue;
    const ext = extname(file).toLowerCase();
    if (!IMAGE_EXT.has(ext) && !VIDEO_EXT.has(ext)) continue;
    const from = join(folder, file);
    if (!statSync(from).isFile()) continue;
    const slug = slugify(file);
    const to = join(dest, slug);
    copyFileSync(from, to);
    const kind = IMAGE_EXT.has(ext) ? "photo" : "video";
    const mtime = statSync(from).mtimeMs;
    const current = seen.get(slug);
    if (!current || mtime > current.mtime) {
      seen.set(slug, {
        src: `/photos-and-videos/${slug}`,
        kind,
        label: kind === "photo" ? "Photograph" : "Film",
        mtime,
      });
    }
  }
}

const items = [...seen.values()].sort((a, b) => b.mtime - a.mtime);
writeFileSync(
  join(cwd, "src", "lib", "work-manifest.json"),
  `${JSON.stringify(items, null, 2)}\n`,
);

console.log(
  `Synced ${items.filter((item) => item.kind === "photo").length} photos and ${items.filter((item) => item.kind === "video").length} films → public/photos-and-videos`,
);
