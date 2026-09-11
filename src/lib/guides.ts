import type { FaqItem } from "./seo";
import { work } from "./work-picks";

export type GuideSection = {
  heading: string;
  paragraphs: string[];
};

export type GuidePage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  kicker: string;
  navLabel: string;
  lede: string;
  image: string;
  imageAlt: string;
  published: string;
  whatsappMessage: string;
  related: { href: string; label: string }[];
  faqs: FaqItem[];
  sections: GuideSection[];
};

export const guides: GuidePage[] = [
  {
    slug: "birthday-nanded-city-society-lawn",
    title:
      "Birthday at a Nanded City Home or Society Lawn, Pune | Sonali Events",
    description:
      "How to plan a birthday in a Nanded City (Pune township) home or society lawn — guest ranges, décor, food, music, and what Sonali Events holds. WhatsApp +91 89757 60707.",
    h1: "Planning a birthday at a Nanded City home or society lawn",
    kicker: "Guide · Nanded City, Pune",
    navLabel: "Birthday, Nanded City",
    lede:
      "A first year in a 3BHK, a five-year-old on the lawn, a quiet 60th with elders at the table. What the house holds — and what the society will actually allow.",
    image: work.birthdayUnicorn,
    imageAlt: "Birthday décor held at a Nanded City home",
    published: "2026-09-11",
    whatsappMessage:
      "Hello Sonali Events, I would like to plan a birthday at a Nanded City home or society lawn.",
    related: [
      { href: "/events/birthdays", label: "Birthdays" },
      { href: "/locations/nanded-city-pune", label: "Nanded City, Pune" },
    ],
    faqs: [
      {
        q: "Can Sonali Events plan a birthday inside a Nanded City flat?",
        a: "Yes. Most first-year and kids’ birthdays we hold are in Nanded City homes. We measure the rooms, set the cake where photographs will actually happen, and scale food and décor to the kitchen, passage, and society rules you have.",
      },
      {
        q: "How many guests fit a home versus a society lawn?",
        a: "Typical birthday gatherings we hold are 30–120 people. A 3BHK often sits closer to 30–50 if people will eat and sit. A society lawn or clubhouse holds the middle of that range. When the list leaves the lawn, the same birthday team moves the night to a Sinhgad Road banquet.",
      },
      {
        q: "What does the house actually hold on the day?",
        a: "Theme décor, cake and dessert staging, kids’ games and an anchor when the room needs one, music, food coordination, invitations, and show-calling. You greet guests. We run the floor.",
      },
      {
        q: "Is this Nanded City in Pune, or Nanded district?",
        a: "Pune. Nanded City is the township on Sinhgad Road, postal code 411068 — not Nanded district in Marathwada. Sonali Events is based in the township.",
      },
    ],
    sections: [
      {
        heading: "This Nanded City — the Pune township",
        paragraphs: [
          "Nanded City is a gated township on Sinhgad Road in Pune: flats, bungalows, society lawns, and clubhouses in postal code 411068. It is not Nanded district in Marathwada. Families who search “birthday planner Nanded” often land on the wrong city. This guide is for the Pune township — visitor parking, the lift that will carry the cake, and the lawn that must be clear by a published hour.",
          "A birthday here rarely begins as a banquet brief. It begins as a living room, a passage, cousins in cars that need a slot, and a neighbour who will hear the music whether the society permits a dhol or not. That is a different floor from a hall on Sinhgad Road. It needs a different plan.",
          "Sonali Events is based at Nanded City, Sinhgad Road, Pune. The website is English. On the floor the team speaks Marathi, Hindi, and English. Read the [[/locations/nanded-city-pune|Nanded City location page]] for the wider map of days we hold here. This note is only about the birthday.",
        ],
      },
      {
        heading: "What the house holds",
        paragraphs: [
          "The house does not send you a decorator, a caterer, a DJ, and a host in four group chats. Venue, decoration, food, invitations, music, dance, party games, and show-calling sit in one window. For a birthday that usually means theme décor, a cake stage, a meal the kitchen can actually release, music scaled to the room, games for children when they are on the list, and one person calling the sequence so you are not holding a vendor list at the door.",
          "Photographs on this site are from days we held. We do not invent reviews, awards, or social pages. The short service page is [[/events/birthdays|birthdays]] — kids, milestones, 50, 60, 75. Typical gatherings are 30–120 guests. Final scale follows the room you have, not a catalogue number.",
          "We do not promise that every society will allow the same night. Some Nanded City societies stop loud music at eight. Some want a deposit, a named coordinator, and the lawn empty by a written time. We ask those questions before we promise a stage.",
        ],
      },
      {
        heading: "Guest ranges, and which floor",
        paragraphs: [
          "Start with the honest headcount — adults who will sit, children who will run, elders who need a chair in the shade. A Nanded City 3BHK can hold a first year if the meal is sequenced and the cake is not fighting the front door. Thirty to fifty people in a flat is common when the family wants the day at home. Past that, the society lawn or clubhouse is usually the kinder room: a small stage, a serving line that does not block the lift lobby, and a pocket for games that does not sit on the food.",
          "Sixty to a hundred on a lawn is the range many milestone birthdays use here — a 60th under string lights, a tenth birthday with a theme the child chose, a mixed-age evening where uncles want a mic and children want a race. The lawn has a curfew, a power point, and a manager who wants one name. That person is the house, not six vendors.",
          "When the list will not fit the home or the lawn, we look along Sinhgad Road for a banquet and keep the same birthday team on both floors. You do not start again because cousins confirmed late. The [[/locations/sinhgad-road-pune|Sinhgad Road page]] covers that corridor.",
        ],
      },
      {
        heading: "Décor that fits the rooms you have",
        paragraphs: [
          "We measure before we promise. A unicorn first year in a living room is not the same build as a car theme on a lawn, or a quiet floral pocket for a 75th. Balloon density that looks generous in a photograph can make a 3BHK feel like a shop. The cake stage has to sit where people will actually stand with a phone — not where a catalogue put it.",
          "At home, décor is built to the flat: the wall that can take a frame, the corner that cannot, the shoe rack that will still be there. On a society lawn, décor has to survive wind, a sprinkler line, and a load-out that respects the next booking. We do not drop a banquet set into a living room and call it intimate.",
          "Themes follow the family. A Maharashtrian house may want marigold and brass around a simple cake. A North Indian family may want denser floral. A kids’ night may want a character the child already loves. Tell us the person being celebrated. The theme sits under that, not on top of it.",
        ],
      },
      {
        heading: "Food, music, and the neighbour",
        paragraphs: [
          "Food in a Nanded City home has to move through a real kitchen and a real passage. Live counters that work in a hall will jam a flat. We sequence the meal window, the cake, and dessert. Jain, satvik, Maharashtrian, North Indian, South Indian — the menu follows the house, including elders who will not eat after a certain hour. On a lawn, the serving line still needs shade, power, and a path that does not cross the cake.",
          "Music is the item societies argue about. A speaker in a living room is a different brief from a DJ on a lawn. We ask the hour the music must drop, whether a dhol is even a question, and whether the clubhouse has a system we should use. Games sit in a pocket that does not block the meal. An anchor is useful when children and uncles share a floor; a first-year with twenty family members often does not need one.",
          "Invitations can be digital, printed, or both. In this township a WhatsApp invite still has to carry the building name, the visitor-parking note, and the time the lawn closes.",
        ],
      },
      {
        heading: "How a Nanded City birthday brief becomes a day",
        paragraphs: [
          "WhatsApp or the plan form. Someone from the house replies — in Marathi, Hindi, or English. We take the date, the age, the guest count, and where the function is: home, society lawn, or already a hall. Then a short discovery for budget, the look you want, and the rules of the society. You get a theme board and a clear estimate. You lock it. The birthday team takes the file.",
          "On the day, show-calling. You greet guests. We run the floor: the cake, the meal, the uncle who wants the mic, the lawn lights at dusk, the load-out before the society’s hour. The work is measured simply — professional execution, clear communication, on-time delivery.",
          "If you already know the date, send it to +91 89757 60707. Say whether it is a home or a lawn, roughly how many people, and the age. We will tell you whether the rooms you have are enough, or whether a Sinhgad Road hall is the honest room. The [[/events/birthdays|birthday page]] lists what sits in the plan. The [[/locations/nanded-city-pune|Nanded City page]] is the township this day belongs to.",
        ],
      },
    ],
  },
  {
    slug: "office-party-sinhgad-road",
    title:
      "Office Party & Annual Day on Sinhgad Road, Pune | Sonali Events",
    description:
      "How to plan an office party or annual day on Sinhgad Road, Pune — banquet versus clubhouse, stage, food, load-out, and what Sonali Events holds. WhatsApp +91 89757 60707.",
    h1: "Planning an office or annual-day party on Sinhgad Road",
    kicker: "Guide · Sinhgad Road, Pune",
    navLabel: "Office party, Sinhgad Road",
    lede:
      "Banquet hall or Nanded City clubhouse, stage or no stage, the hour the room must be empty. What to decide before the HR group chat starts collecting vendors.",
    image: work.banquetDoor,
    imageAlt: "Banquet entrance on Sinhgad Road dressed by Sonali Events",
    published: "2026-09-11",
    whatsappMessage:
      "Hello Sonali Events, I would like to plan an office party or annual day on Sinhgad Road.",
    related: [
      { href: "/events/office-parties", label: "Office parties" },
      { href: "/locations/sinhgad-road-pune", label: "Sinhgad Road, Pune" },
    ],
    faqs: [
      {
        q: "Should an office annual day sit in a Sinhgad Road banquet or a clubhouse?",
        a: "A banquet on Sinhgad Road is the usual floor when you need a stage, a meal for 80–200, and a night the whole company will share. A Nanded City clubhouse or society hall works when the list is closer to 40 and you do not need banquet production. We will say which is honest once we have the headcount and the hour you must leave.",
      },
      {
        q: "What should we send on the first WhatsApp?",
        a: "Date, headcount, whether you already have a hall, any branding that must appear, and the hour the room must be empty. We reply with venue options if you need them, a clear estimate, and one name for the hall manager.",
      },
      {
        q: "Do you handle the stage, the anchor, and the food together?",
        a: "Yes. Venue, stage and lights, entertainment, games, and food sit in one file. The HR group chat should watch the night, not run four vendors.",
      },
      {
        q: "Is Sinhagad Road the same corridor?",
        a: "Yes. Sinhgad Road and Sinhagad Road are the same Pune stretch. Nanded City is the township on that road — not Nanded district in Marathwada.",
      },
    ],
    sections: [
      {
        heading: "Sinhgad Road, also written Sinhagad Road",
        paragraphs: [
          "Sinhgad Road — Sinhagad Road on many maps, invites, and hall listings — is the Pune corridor where Nanded City families and nearby offices go when a guest list leaves a society. Banquet halls, marriage halls, and hotel floors sit along this stretch. An office annual day books the same kind of room on a Friday that a reception will take on Sunday. The production problem is the same: one name for the manager, a load-in time, a load-out time, and a night that has a shape.",
          "Sonali Events is based at Nanded City, Sinhgad Road, Pune. We hold office nights on this road so the company does not collect a decorator, a caterer, a DJ, and an anchor from four chats. The service page is [[/events/office-parties|office parties]] — annual day and offsite night, typical gatherings 40–200. The geography page is [[/locations/sinhgad-road-pune|event planner on Sinhgad Road]]. This guide is the planning note in between: banquet versus clubhouse, and what to lock before you pay a hall deposit.",
          "We mention halls only when we have already worked them. Serenova Banquet is one such floor on this corridor. If your date needs a different hall, we still run the production. We do not publish a venue catalogue we have not stood on.",
        ],
      },
      {
        heading: "Banquet versus clubhouse",
        paragraphs: [
          "A Sinhgad Road banquet is the honest room when the night needs a stage the speeches can use, lights the camera phones can live with, a meal that lands between awards, and an anchor who can hold a room of colleagues. Headcounts in the 80–200 range usually belong here. So do annual days with a brand film, a leadership address, and a dance floor that has to survive both.",
          "A Nanded City clubhouse or society hall is the honest room when the team is closer to forty than two hundred, when the brief is dinner and a few games, and when a banquet would be empty space you pay for. Smaller offsites, a skip-level dinner, a launch for one department — those can stay in the township. We still give the manager one name. The HR group chat should not become the production office.",
          "The mistake is booking the hall first and the plan second. A clubhouse with a low ceiling will not hold a stage you already promised in the invite. A banquet with a four-hour slot will not hold a seven-hour programme you have not timed. Tell us the headcount, the must-show branding, and the hour the room must be empty. We will say banquet or clubhouse in plain language, including when a hall is waste.",
        ],
      },
      {
        heading: "What to plan before the deposit",
        paragraphs: [
          "Date and backup date. Headcount that includes vendors and the leadership row, not only RSVPs from a form. The hour guests arrive, the hour speeches start, the hour food is actually eaten, the hour the DJ is allowed to rise, and the hour the hall must be empty — including the time it takes to strike a stage. Societies and halls on this corridor are strict about load-out. A plan that ends at 11 p.m. on a slide and 12:30 a.m. on the floor is how deposits disappear.",
          "Branding is not decoration. If the logo must sit on the step-and-repeat, the screen, and the menu card, that is a file we need before we print. If there is a film, we need the length and the playback format the hall can actually run. If there are awards, we need names, the order, and who hands them. Office nights fail in the gaps between “we have a DJ” and “who is holding the trophy.”",
          "Food has to survive speeches that run long. Live counters that look generous on a site visit will queue if two hundred people stand up at once. We sequence a welcome, a meal window that can slide twenty minutes, and a dessert that does not fight the cake or the awards. Vegetarian, Jain, and mixed menus are ordinary on this road. Alcohol is a hall rule, not a wish on a WhatsApp. We ask the venue before we put a bar on the estimate.",
        ],
      },
      {
        heading: "Stage, games, and the person on the mic",
        paragraphs: [
          "A stage on Sinhgad Road is a working surface: speeches, a brand film, a prize, maybe a performance from the team. It has to be the right height for the camera phones in the back row and the right width for the banner you already approved. Lights should make faces readable. A wash that looks dramatic in a vendor reel can turn leadership the colour of the carpet. We light for the room you booked, not for a catalogue.",
          "Games belong on an office night when the room will actually play them — not as a filler copied from a wedding. A quiz, a timed challenge, a dance-off that the anchor can stop. The point is a shared memory, not a stall between speeches. We write games into the run of show with a start and a close, the same way we write the meal.",
          "The anchor is the difference between a programme and a blur. Colleagues will not forgive a host who treats an annual day like a shaadi. The tone is company, not carnival, unless you have asked for carnival. We brief the mic on names, the film, the awards, and the hour music may take the floor. You should not be passing notes to the DJ during the MD’s speech.",
        ],
      },
      {
        heading: "How the house runs the night",
        paragraphs: [
          "Enquire on WhatsApp. Discover the budget, the headcount, the branding, and the look. Design the venue option and the board. Lock the date. Produce décor, food, music, games, and the host in one group. Deliver with show-calling so the office is not the person at the door with a vendor list. Hall managers on Sinhgad Road want one name, a load-in time, and a load-out time. We are that name. Power, parking, the slide that must play, the gift that must appear at minute forty — those sit in the run of show, not in a family-style WhatsApp at 6 p.m.",
          "Typical office gatherings we write on the service page are 40–200. Final scale follows the clubhouse or hall. Photographs on this site are from days we held, including banquet floors on this corridor. We do not publish reviews, awards, or Instagram we do not have. Since 2023 the house has held more than a thousand celebrations on this road — family days and office nights under the same standard: professional execution, clear communication, on-time delivery.",
          "If the team is small enough for a [[/locations/nanded-city-pune|Nanded City]] clubhouse, say so. If you already have a Sinhgad Road banquet, send the hall name and the slot. If you only know the Friday and the headcount, that is enough to start. WhatsApp +91 89757 60707. The [[/events/office-parties|office parties]] page is the short list of what sits in the plan. The [[/locations/sinhgad-road-pune|Sinhgad Road]] page is the corridor. Send the date. We will tell you banquet or clubhouse, and then we will hold the night.",
        ],
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((item) => item.slug === slug);
}

export function guidePath(slug: string) {
  return `/guides/${slug}`;
}

export function guidesLinkingTo(path: string) {
  return guides.filter((item) => item.related.some((link) => link.href === path));
}
