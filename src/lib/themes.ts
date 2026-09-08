import { work } from "./work-picks";

export type ThemeItem = {
  slug: string;
  name: string;
  kicker: string;
  summary: string;
  story: string;
  cues: string[];
  image: string;
  accent: string;
};

export const themes: ThemeItem[] = [
  {
    slug: "maharashtrian",
    name: "Maharashtrian",
    kicker: "Paithani, brass, marigold",
    summary: "Mundavalya, naivedya, and the warmth of a Pune wada — made for a modern hall.",
    story:
      "Haldi that smells like home, a mundavalya that sits right, brass that catches the lights, and a meal elders trust. This is the language Sonali Events was built in — munj, namkaran, sakhar pud, lagna, gruha pravesh.",
    cues: ["Mundavalya & haldi", "Paithani & marigold", "Brass & naivedya", "Dhol-tasha optional"],
    image: work.houseGarlands,
    accent: "#9a3412",
  },
  {
    slug: "north-indian",
    name: "North Indian",
    kicker: "Mandap, mehendi, sangeet",
    summary: "Phoolon ki chaadar, a dense floral mandap, and a sangeet that actually dances.",
    story:
      "Families near Sinhgad Road host many North Indian wedding weeks. We build the mandap, the mehendi floor, the sangeet stage, and the pheras as one design — rich floral, clear guest flow, music that holds a long night.",
    cues: ["Floral mandap", "Mehendi floor", "Sangeet production", "Pheras & reception"],
    image: work.roka,
    accent: "#6b1d2a",
  },
  {
    slug: "south-indian",
    name: "South Indian",
    kicker: "Jasmine, silk, temple rhythm",
    summary: "Banana leaf, gopuram lines, and a ceremony paced for priests and family.",
    story:
      "Naming, wedding, housewarming, thread ceremony — South Indian families on this corridor get a team that understands jasmine, silk, banana stem, and a satvik meal, without turning the hall into a cliché.",
    cues: ["Jasmine & silk", "Temple motifs", "Banana leaf dining", "Priest-led pacing"],
    image: work.lotusStage,
    accent: "#1e3d32",
  },
];

export function getTheme(slug: string) {
  return themes.find((item) => item.slug === slug);
}
