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
  relatedThemes?: string[];
  relatedEvents?: string[];
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
    relatedEvents: ["celebration-parties", "naming-ceremony"],
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
    relatedThemes: ["maharashtrian", "south-indian"],
    relatedEvents: ["housewarming", "thread-ceremony"],
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
    metaTitle: "Engagement planner in Nanded City & Sinhgad Road",
    detail: [
      "A sakhar pud in Nanded City often stays in the flat or on the society lawn: a floral pocket for the exchange, seating that puts both families in the photograph, and a meal the passage can actually hold. We measure the room before we promise a stage.",
      "When the list leaves the society, the same team moves the night to a Sinhgad Road banquet. Ring ceremonies on this corridor now ask for wedding-level staging — walk-in, ring moment, host, and a dance floor with a clear peak — without a new set of vendors.",
      "Maharashtrian sakhar pud and North Indian ring or roka evenings use the same file. Tell us the date, the guest count, and whether it is home, lawn, or hall. We hold décor, food, invitations, music, and the host.",
    ],
    faqs: [
      {
        q: "Do you hold sakhar pud in Nanded City homes?",
        a: "Yes. Smaller engagements and sakhar pud evenings often stay in a Nanded City flat or society lawn. We scale the floral, the seating, and the meal to the rooms you actually have.",
      },
      {
        q: "Can a ring ceremony sit in a Sinhgad Road banquet?",
        a: "Yes. Larger ring ceremonies typically move to a Sinhgad Road hall when the guest list outgrows the society. If you already have a hall, we still hold the stage, host, music, and food.",
      },
      {
        q: "What does the engagement plan usually include?",
        a: "Stage and floral, entry and host, DJ or live music, invitations, and food. Typical gatherings are 80–250 guests. Final scale follows the home, lawn, or hall you book.",
      },
    ],
    relatedThemes: ["maharashtrian", "north-indian"],
    relatedEvents: ["marriages", "celebration-parties"],
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
    relatedThemes: ["maharashtrian", "north-indian", "south-indian"],
    relatedEvents: ["engagements", "thread-ceremony"],
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
    metaTitle: "Housewarming planner in Nanded City, Pune",
    detail: [
      "Most gruha pravesh days we hold are in new Nanded City flats: a dressed threshold, a puja corner the priest can reach without crossing the meal, and seating that puts elders first. This is a home taking a first breath — not a banquet dropped into a living room.",
      "When the guest list will not fit the passage, we use the society lawn or move the meal to a Sinhgad Road hall and keep the same ritual map. You do not start again with a new decorator because cousins confirmed late.",
      "Maharashtrian and South Indian houses ask for different objects and a different meal. We do not overwrite the puja with a theme. Tell us the date, the custom, and the rooms you have. We hold décor, food, and the sequence.",
    ],
    faqs: [
      {
        q: "Do you plan gruha pravesh inside Nanded City homes?",
        a: "Yes. Housewarming days we hold are usually in new Nanded City flats. We dress the threshold, set the puja, and scale the meal to the kitchen and passage you actually have.",
      },
      {
        q: "Can a housewarming use a Sinhgad Road hall?",
        a: "Yes, when the list leaves the flat. Some families keep the puja at home and the meal in a society lawn or a Sinhgad Road banquet. The same team runs both floors.",
      },
      {
        q: "What does the housewarming plan usually include?",
        a: "Threshold décor, puja staging, home or hall setup, catering, and music. Typical gatherings are 40–120 guests. Satvik and family menus follow the custom you name on the first WhatsApp.",
      },
    ],
    relatedThemes: ["maharashtrian", "south-indian"],
    relatedEvents: ["naming-ceremony", "thread-ceremony"],
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
    metaTitle: "Thread ceremony planner in Nanded City & Sinhgad Road",
    detail: [
      "Munj in the Nanded City township usually sits on a society lawn: a mandap, fire the priest can hold, chairs for grandparents, and a morning that does not rush the boy. We ask the society’s curfew and power point before we promise a dhol.",
      "When the list needs a larger floor, the same ritual map moves to a Sinhgad Road banquet. The wedding-week crew is not borrowed for this day. Thread ceremony has its own team — mandap, meal, invites, and elder seating as one file.",
      "Maharashtrian munj and South Indian upanayana ask for different objects and a different pace. We do not dress a temple cliché over the priest’s work. WhatsApp the date and the custom. We reply in Marathi, Hindi, or English.",
    ],
    faqs: [
      {
        q: "Can munj be held on a Nanded City society lawn?",
        a: "Yes. Many thread ceremonies we hold are on Nanded City society lawns or in a clubhouse. We set the mandap, the fire, and seating for priests and grandparents around the rules of that society.",
      },
      {
        q: "Do you hold thread ceremonies in Sinhgad Road halls?",
        a: "Yes, when the guest list leaves the lawn. A Sinhgad Road banquet keeps the same ritual map — we do not rebuild the day because the floor changed.",
      },
      {
        q: "What size of thread ceremony do you hold?",
        a: "Typical gatherings are 80–200 guests. The plan includes mandap, ritual map, elder seating, a traditional meal, and invites. Final scale follows the lawn or hall you book.",
      },
    ],
    relatedThemes: ["maharashtrian", "south-indian"],
    relatedEvents: ["naming-ceremony", "marriages"],
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
    metaTitle: "Office party planner Sinhgad Road, Pune",
    detail: [
      "Office annual days and offsite nights on this corridor usually sit in a Sinhgad Road banquet: a stage the speeches can use, lights the camera phones can live with, food that lands between awards, and an anchor who can hold a room of colleagues.",
      "Smaller team nights can stay in a Nanded City clubhouse or society hall when the headcount does not need a banquet. We still give the hall manager one name, a load-in time, and a load-out time — the HR group chat should watch the night, not run it.",
      "Tell us the date, the headcount, the branding you must show, and the hour the room must be empty. We hold venue, stage, entertainment, games, and food so the office is not collecting vendors from four chats.",
    ],
    faqs: [
      {
        q: "Do you plan office annual days on Sinhgad Road?",
        a: "Yes. Most office nights we hold are in a Sinhgad Road banquet or a nearby hall. Stage, lights, food, games, and an anchor sit in one file.",
      },
      {
        q: "Can a smaller team night stay in Nanded City?",
        a: "Yes. A clubhouse or society hall in the Nanded City township works when the list is closer to 40 than 200. We still run the floor so one person answers the manager.",
      },
      {
        q: "What does the office party plan usually include?",
        a: "Venue, stage and lights, entertainment, games, and food. Typical gatherings are 40–200. Send the date, headcount, and any branding that must appear on the night.",
      },
    ],
    relatedEvents: ["celebration-parties", "marriages"],
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
    metaTitle: "Celebration party planner in Nanded City & Sinhgad Road",
    detail: [
      "Anniversaries, baby showers, and quieter success evenings often stay in a Nanded City home or society lawn: styled décor the photographs can use, a host when games need one, and a meal that fits the rooms you have.",
      "House-full nights and larger promotions move to a Sinhgad Road banquet. The crew is the same one that runs a wedding week, scaled to the hall you actually booked — not a catalogue evening dropped onto the floor.",
      "Maharashtrian and North Indian houses ask for different colours and a different meal. Tell us the reason, the date, and whether it is home, lawn, or hall. We hold décor, music, invites, and food.",
    ],
    faqs: [
      {
        q: "Do you hold baby showers and anniversaries at home in Nanded City?",
        a: "Yes. Many celebration parties we hold are in Nanded City flats or society lawns — baby showers, anniversaries, and smaller success evenings. Décor and food follow the rooms you have.",
      },
      {
        q: "Can a celebration party use a Sinhgad Road banquet?",
        a: "Yes. Larger house-full nights and promotions typically sit in a Sinhgad Road hall. The same team runs both floors so you do not collect a new set of vendors.",
      },
      {
        q: "What kinds of celebration parties do you plan?",
        a: "Anniversaries, baby showers, promotions, and other evenings with a clear reason. Typical gatherings are 40–150 guests. The plan includes styled décor, host and games, music, invites, and food.",
      },
    ],
    relatedThemes: ["maharashtrian", "north-indian"],
    relatedEvents: ["birthdays", "engagements", "housewarming"],
  },
];

export function getEvent(slug: string) {
  return events.find((item) => item.slug === slug);
}
