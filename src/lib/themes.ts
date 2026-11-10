import { work } from "./work-picks";

export type ThemeItem = {
  slug: string;
  name: string;
  kicker: string;
  summary: string;
  story: string;
  placeLine: string;
  essay: string[];
  metaTitle: string;
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
    placeLine: "Nanded City, Sinhgad Road, Pune",
    metaTitle: "Maharashtrian Wedding & Event Theme in Pune | Sonali Events",
    essay: [
      "Nanded City and Sinhgad Road — Sinhagad Road on many maps — ask for this look on munj mornings, namkaran afternoons, sakhar pud evenings, lagna, and gruha pravesh. The township is mixed, and a Maharashtrian house here still wants mundavalya that sit right, paithani colour, marigold, brass, and a meal elders trust. We scale that to a flat, a society lawn, or a banquet on the same road, without turning the day into a stage set that ignores the priest.",
      "Haldi stays close to the family. A ritual corner is drawn around the people who must sit, not around a photograph from somewhere else. Dhol-tasha is optional, and only when the society or the hall allows it. Tell us the function and the rooms. The theme sits under the ritual. The same house holds naming ceremonies, thread ceremonies, engagements, weddings, and housewarmings along this corridor, in Marathi, Hindi, or English.",
    ],
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
    placeLine: "Nanded City, Sinhgad Road, Pune",
    metaTitle: "North Indian Wedding & Event Theme in Pune | Sonali Events",
    essay: [
      "Families along Sinhgad Road, and in Nanded City on the same road, host North Indian weeks that need one design across mehendi, sangeet, pheras, and reception. A dense floral mandap, a mehendi floor people can sit on, and a sangeet stage with a clear peak — that is the brief. Sinhagad Road halls and township homes take different scales of the same idea. We do not copy a ballroom from another city into a Nanded City flat.",
      "The floral is sized to the ceiling and the guest flow. Pheras keep a path the priest can use. An engagement or roka can carry the same language at a smaller size. Weddings here often split: a function at home in the township, ceremony and reception in a banquet. One theme file covers both floors, so the family is not briefing a new decorator every morning. WhatsApp the dates and which functions share the week.",
    ],
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
      "Naming, wedding, housewarming, thread ceremony — South Indian families near Nanded City and Sinhgad Road get a team that understands jasmine, silk, banana stem, and a satvik meal, without turning the hall into a cliché.",
    placeLine: "Nanded City, Sinhgad Road, Pune",
    metaTitle: "South Indian Wedding & Event Theme in Pune | Sonali Events",
    essay: [
      "South Indian families in Nanded City and on Sinhgad Road ask for jasmine, silk, banana leaf, and a pace the priest can hold. Naming, wedding, housewarming, and thread ceremony each need those materials in a different room. A flat in the township cannot take a temple hall. A banquet on Sinhagad Road can, if we still leave the ceremony its own time and do not dress the room as a costume.",
      "Temple lines and gopuram motifs stay drawing, not a cliché dropped on the hall. The meal stays satvik when the family asks for satvik. Seating puts elders and the priest where the ritual needs them. The same team works the home and the hall, so a namkaran the week after a wedding does not start with a new decorator. Tell us the custom on the first WhatsApp. We reply in Marathi, Hindi, or English. The phone is +91 89757 60707.",
    ],
    cues: ["Jasmine & silk", "Temple motifs", "Banana leaf dining", "Priest-led pacing"],
    image: work.lotusStage,
    accent: "#1e3d32",
  },
];

export function getTheme(slug: string) {
  return themes.find((item) => item.slug === slug);
}
