import type { FaqItem } from "./seo";
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
  metaTitle?: string;
  detail?: string[];
  faqs?: FaqItem[];
};

export const events: EventItem[] = [
  {
    slug: "birthdays",
    name: "Birthdays",
    local: "Kids, milestones, 50, 60, 75",
    summary: "Theme, cake stage, games, and a celebration that feels like a gift.",
    story:
      "From first-year birthdays in Nanded City homes to golden jubilees in Sinhgad Road banquet halls, the birthday team builds a world around the person being celebrated — décor, food, music, and games that keep every age on the floor.",
    image: work.birthdayUnicorn,
    guests: "30–120",
    includes: ["Theme décor", "Cake & dessert staging", "Kids games & anchor", "Music", "F&B coordination"],
    metaTitle: "Birthday planner in Nanded City & Sinhgad Road",
    detail: [
      "In the Nanded City township a birthday usually starts in the flat or on the society lawn: a unicorn first year, a car theme for a five-year-old, a quiet 60th with elders at the table. We measure the room, set the cake stage where photographs will actually happen, and keep games in a pocket that does not block the meal.",
      "When the list outgrows the society, the same team moves the night to a Sinhgad Road banquet — including halls we already know, such as Serenova — without changing the brief. Theme, cake, music, and an anchor who can hold both children and uncles.",
      "Tell us the date, the age, and whether it is home, lawn, or hall. We hold décor, food, invitations, music, dance, and games so the family can watch the person being celebrated.",
    ],
    faqs: [
      {
        q: "Do you plan birthdays inside Nanded City homes?",
        a: "Yes. Most first-year and kids’ birthdays we hold are in Nanded City flats or society lawns. We scale décor and food to the rooms you actually have, including society curfews.",
      },
      {
        q: "Can a larger birthday move to Sinhgad Road?",
        a: "Yes. Milestone birthdays — 50, 60, 75 — often sit in a Sinhgad Road banquet when the guest list leaves the society. The same birthday team runs both floors.",
      },
      {
        q: "What does the birthday plan usually include?",
        a: "Theme décor, cake and dessert staging, kids’ games and an anchor when the room needs one, music, and food coordination. Typical gatherings are 30–120 guests.",
      },
    ],
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
    metaTitle: "Namkaran planner in Nanded City, Pune",
    detail: [
      "Naming ceremonies in Nanded City are often at home: a palna in the hall, a ritual corner the priest can reach without crossing the cake, seating that puts grandparents first. Barsa and namkaran ask for quiet precision more than a stage.",
      "South Indian families on this road ask for jasmine, silk, and a satvik meal. Maharashtrian houses ask for a custom the elders already know. We do not overwrite the ritual with a theme. The floral and the cradle sit around it.",
      "If the guest list needs a clubhouse or a Sinhgad Road hall, we keep the same layout logic — ritual first, meal second, photographs where the light actually is. WhatsApp the date and the custom. We reply in Marathi, Hindi, or English.",
    ],
    faqs: [
      {
        q: "Do you hold namkaran at home in Nanded City?",
        a: "Yes. Many naming ceremonies we hold are in Nanded City homes or society halls. We set the cradle, the ritual corner, and elder seating before we talk about décor themes.",
      },
      {
        q: "Can the meal follow Maharashtrian, North Indian, or South Indian custom?",
        a: "Yes. Satvik and family menus are part of the plan. Tell us the custom on the first WhatsApp — the house works all three on this road.",
      },
      {
        q: "Is a naming ceremony only for small gatherings?",
        a: "Typical namkaran gatherings are 40–150. When the list is larger we use a society lawn or a Sinhgad Road hall and keep the ritual map the same.",
      },
    ],
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
      "A wedding team runs mehendi, sangeet, ceremony, and reception as one file — venue, décor, food, music, dance, and show-calling — so the family greets guests, not vendors.",
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
    metaTitle: "Wedding planner Sinhgad Road & Nanded City Pune",
    detail: [
      "Wedding weeks on this corridor usually split across floors: a haldi or mehendi in a Nanded City home or society lawn, ceremony and reception in a Sinhgad Road banquet. We lock the venues as one map so the family does not run two productions.",
      "The banquet stretch — Sinhgad Road, also written Sinhagad Road — is where larger lists sit. We have already dressed halls such as Serenova Banquet. We do not publish a venue catalogue we have not stood on. If you already have a hall, we still hold décor, food, music, dance, and show-calling.",
      "Maharashtrian lagna, North Indian pheras, South Indian ceremonies: the wedding team sequences priests, elders, and the dance floor so each function has a start and a close. Tell us the dates and the guest count. We return a clear estimate and a dedicated crew.",
    ],
    faqs: [
      {
        q: "Do you plan weddings on Sinhgad Road?",
        a: "Yes. Ceremony and reception days typically sit in a Sinhgad Road banquet. Related functions — mehendi, haldi, a quieter lunch — often stay in Nanded City homes or lawns, under the same wedding file.",
      },
      {
        q: "Have you worked Serenova Banquet?",
        a: "Yes. Serenova Banquet is a Sinhgad Road hall we have already dressed. If your date is in another hall on the corridor, we still run the production — we only name venues we have stood on.",
      },
      {
        q: "What size of wedding do you hold?",
        a: "Typical wedding gatherings are 150–400 guests. Final scale follows the rooms you book. A dedicated wedding team holds venue, multi-day décor, ritual map, catering, music, and guest flow.",
      },
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
      "Anniversaries, baby showers, promotions, house-full evenings. Same team as a wedding, scaled to the home or hall you actually have.",
    image: work.birthdaySixteen,
    guests: "40–150",
    includes: ["Styled décor", "Host & games", "Music", "Invites", "Food"],
  },
];

export function getEvent(slug: string) {
  return events.find((item) => item.slug === slug);
}
