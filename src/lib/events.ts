import { work } from "./work-picks";

export type EventItem = {
  slug: string;
  name: string;
  local: string;
  summary: string;
  story: string;
  image: string;
  guests: string;
  includes: string[];
};

export const events: EventItem[] = [
  {
    slug: "birthdays",
    name: "Birthdays",
    local: "Kids, milestones, 50, 60, 75",
    summary: "Theme, cake stage, games, and a room that feels like a gift.",
    story:
      "From first-year birthdays in Nanded City homes to golden jubilees in Sinhgad Road banquets, the birthday team builds a world around the person being celebrated — décor, food, music, and games that keep every age in the room.",
    image: work.birthdayUnicorn,
    guests: "30–120",
    includes: ["Theme décor", "Cake & dessert staging", "Kids games & anchor", "Music", "F&B coordination"],
  },
  {
    slug: "naming-ceremony",
    name: "Naming ceremony",
    local: "Namkaran · Barsa",
    summary: "Cradle, ritual corner, and a gentle gathering of family.",
    story:
      "A namkaran is intimate and exact. We set the cradle, the ritual corner, the seating for elders, and a meal that respects the family’s custom — Maharashtrian, North Indian, or South Indian.",
    image: work.namingPrincess,
    guests: "40–150",
    includes: ["Ritual layout", "Cradle & floral", "Guest flow", "Satvik / family menu", "Invites"],
  },
  {
    slug: "engagements",
    name: "Engagements",
    local: "Sakhar pud · Ring ceremony",
    summary: "Stage, floral, host, and a night with wedding-level staging.",
    story:
      "Engagements near Sinhgad Road now carry wedding-level production. The team designs the stage, the walk-in, the ring moment, and the dance floor so the evening has a clear peak — not a blur of vendors.",
    image: work.roka,
    guests: "80–250",
    includes: ["Stage & floral", "Entry & host", "DJ / live music", "Invitations", "F&B"],
  },
  {
    slug: "marriages",
    name: "Marriages",
    local: "Lagna and related functions",
    summary: "Multi-day venue, ritual map, and a dedicated wedding team.",
    story:
      "A wedding desk runs mehendi, sangeet, ceremony, and reception as one file — venue, décor, food, music, dance, and show-calling — so the family greets guests, not vendors.",
    image: work.banquetDoor,
    guests: "150–400",
    includes: [
      "Venue lock",
      "Multi-day décor",
      "Ritual map",
      "Catering",
      "Music & sangeet",
      "Guest flow",
    ],
  },
  {
    slug: "housewarming",
    name: "Housewarming",
    local: "Gruha pravesh",
    summary: "Home or venue décor, puja flow, and a meal for the new address.",
    story:
      "A gruha pravesh should feel like the house taking a first breath. We dress the threshold, sequence the puja, and feed the people who will become this home’s regulars.",
    image: work.houseGarlands,
    guests: "40–120",
    includes: ["Threshold décor", "Puja staging", "Home or hall setup", "Catering", "Music"],
  },
  {
    slug: "thread-ceremony",
    name: "Thread ceremony",
    local: "Munj · Upanayana",
    summary: "Mandap, ritual seating, and a day paced for elders and the boy.",
    story:
      "Munj asks for precision: mandap, fire, seating for priests and grandparents, and a meal that holds a long morning.",
    image: work.namingPalna,
    guests: "80–200",
    includes: ["Mandap", "Ritual map", "Elder seating", "Traditional meal", "Invites"],
  },
  {
    slug: "office-parties",
    name: "Office parties",
    local: "Annual day · offsite night",
    summary: "Venue, branding, entertainment, and a night the team will actually remember.",
    story:
      "Office annual days and offsite nights in a Sinhgad Road banquet or nearby hall: stage, lights, food, games, and an anchor.",
    image: work.birthdayAyaan,
    guests: "40–200",
    includes: ["Venue", "Stage & lights", "Entertainment", "Games", "F&B"],
  },
  {
    slug: "celebration-parties",
    name: "Celebration parties",
    local: "Anniversary, baby shower, success",
    summary: "A styled party with a reason — and a run-of-show to match.",
    story:
      "Anniversaries, baby showers, promotions, house-full evenings. Same house desk as a wedding, scaled to the room you actually have.",
    image: work.birthdaySixteen,
    guests: "40–150",
    includes: ["Styled décor", "Host & games", "Music", "Invites", "Food"],
  },
];

export function getEvent(slug: string) {
  return events.find((item) => item.slug === slug);
}
