import type { FaqItem } from "./seo";
import { work } from "./work-picks";

export type FloorShot = {
  src: string;
  alt: string;
  caption: string;
  kind?: "photo" | "video";
  poster?: string;
};

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
  h1?: string;
  detail?: string[];
  sections?: { heading: string; paragraphs: string[] }[];
  faqs?: FaqItem[];
  relatedThemes?: string[];
  relatedEvents?: string[];
  floor?: FloorShot[];
  /** Keyword anchor on the Nanded City location page. */
  nandedAnchor: string;
  /** Keyword anchor on the Sinhgad Road location page. */
  sinhgadAnchor: string;
  /** Keyword anchor in the footer services block. */
  footerAnchor: string;
};

export function eventPlaceAnchor(item: EventItem, locationSlug: string) {
  if (locationSlug === "sinhgad-road-pune") return item.sinhgadAnchor;
  return item.nandedAnchor;
}

export const events: EventItem[] = [
  {
    slug: "birthdays",
    name: "Birthdays",
    local: "Kids, milestones, 50, 60, 75",
    summary:
      "Birthday planner in Nanded City, Pune — the Sinhgad Road township, not Nanded district. Theme, cake, games, and music. WhatsApp +91 89757 60707.",
    story:
      "A birthday planner in Nanded City, Pune, for the township — not Nanded district in Marathwada. From first-year birthdays in township homes to golden jubilees in Sinhgad Road banquet halls, the birthday team builds a world around the person being celebrated — décor, food, music, and games that keep every age on the floor.",
    image: work.birthdayUnicorn,
    guests: "30–120",
    includes: ["Theme décor", "Cake & dessert staging", "Kids games & anchor", "Music", "F&B coordination"],
    metaTitle: "Birthday planner in Nanded City, Pune",
    h1: "Birthday planner in Nanded City, Pune",
    detail: [
      "Nanded City on this page is the Pune township on Sinhgad Road — Sinhagad Road on many maps — postal code 411068. It is not Nanded district, Nanded Town, or PIN 431601 in Marathwada. A birthday here usually starts in the flat or on the society lawn: a unicorn first year, a car theme for a five-year-old, a quiet 60th with elders at the table. We measure the room, set the cake stage where photographs will actually happen, and keep games in a pocket that does not block the meal.",
      "When the list outgrows the society, the same team moves the night to a Sinhgad Road banquet — including halls we already know, such as Serenova — without changing the brief. Theme, cake, music, and an anchor who can hold both children and uncles.",
      "Tell us the date, the age, and whether it is home, lawn, or hall. We hold décor, food, invitations, music, dance, and games so the family can watch the person being celebrated.",
    ],
    faqs: [
      {
        q: "Is this Nanded City in Pune, or Nanded district?",
        a: "Pune. Nanded City is the township on Sinhgad Road — also spelled Sinhagad Road — postal code 411068. It is not Nanded district, Nanded Town, or PIN 431601 in Marathwada. Sonali Events plans birthdays in the township.",
      },
      {
        q: "Do you plan birthdays inside Nanded City homes?",
        a: "Yes. Most first-year and kids’ birthdays we hold are in Nanded City flats or society lawns in the Pune township. We scale décor and food to the rooms you actually have, including society curfews.",
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
    relatedEvents: ["birthday-decoration", "celebration-parties", "naming-ceremony"],
    nandedAnchor: "birthday planner in Nanded City",
    sinhgadAnchor: "birthday planner on Sinhgad Road",
    footerAnchor: "Birthday planner in Nanded City",
    floor: [
      {
        src: work.birthdayAnika,
        alt: "Fairy theme pastel balloon ring for Anika's birthday",
        caption: "Fairy theme pastel balloon ring for Anika's birthday",
      },
      {
        src: work.birthdayAnikaFilm,
        alt: "Fairy theme pastel balloon ring for Anika's birthday",
        caption: "Fairy theme pastel balloon ring for Anika's birthday",
        kind: "video",
        poster: "/posters/birthday-anika-fairy-balloon-ring.jpg",
      },
      {
        src: work.birthdayXtoColumns,
        alt: "Blue and white balloon columns and a neon Happy Birthday sign at XTO Pizza",
        caption: "Birthday at XTO Pizza",
      },
      {
        src: work.birthdayAgesFiveAndTen,
        alt: "Blue and pink balloon arch with marquee numbers 5 and 10 and a Happy Birthday sign",
        caption: "Birthday, ages 5 and 10",
      },
      {
        src: work.birthdayReyaans,
        alt: "Cars-theme home birthday with a gold number 4 and the name REYAANS",
        caption: "REYAANS, age 4",
      },
      {
        src: work.birthdayShlok,
        alt: "Gold foil letters spelling SHLOK with blue and white balloons at XTO Pizza",
        caption: "SHLOK at XTO Pizza",
      },
      {
        src: work.purpleFloralBackdrop,
        alt: "Purple floral curtain backdrop with hanging flowers and fairy lights",
        caption: "Purple floral backdrop",
      },
    ],
  },
  {
    slug: "birthday-decoration",
    name: "Birthday decoration",
    local: "Arches, backdrops, cake table",
    summary:
      "Birthday decoration in Nanded City, Pune, on Sinhgad Road: balloon arches, backdrops, cake tables, and themed setups. WhatsApp +91 89757 60707.",
    story:
      "Birthday decoration in Nanded City, Pune, is the build around the person being celebrated: balloon arches, a backdrop, a cake table, and a theme the room can actually hold. Sonali Events works in the township on Sinhgad Road — Sinhagad Road on many maps — not in Nanded district, Nanded Town, or PIN 431601. The same crew can stop at decoration, or carry the full birthday.",
    image: work.birthdayAgesFiveAndTen,
    guests: "30–120",
    includes: [
      "Balloon arches",
      "Backdrop & name letters",
      "Cake table",
      "Themed setups",
      "Decoration only or full plan",
    ],
    metaTitle: "Birthday Decoration in Nanded City, Pune (Sinhgad Road) | Sonali Events",
    h1: "Birthday decoration in Nanded City, Pune",
    sections: [
      {
        heading: "Arches, backdrops, and the cake table",
        paragraphs: [
          "The decoration file is concrete. A balloon arch at the entrance or around the cake. A backdrop the photographs will use — foil name letters, a neon sign, a floral curtain with fairy lights, or a theme the child already loves. A cake table set where people can stand with a phone, not where a catalogue put a plinth. We have built these in Nanded City flats, on society lawns, and in rooms along Sinhgad Road, including a Cars theme at home, a neon Happy Birthday sign with balloon columns, gold name letters, and a purple floral fairy-light wall. The photographs on this page are from those days.",
        ],
      },
      {
        heading: "Themed setups",
        paragraphs: [
          "A theme is a choice, not a costume on the whole house. A Cars theme wants the car, the number, and the name readable from the door, with the rest of the room left clear for the meal. A neon sign wants a wall that can take the light and a power point that is not the fridge. A floral fairy-light backdrop wants height and a corner that will not fight the ceiling fan. Name letters — foil or marquee — sit at a height children and grandparents can both see. We ask the age, the room, and the one idea the family cares about, then we scale the build. A five-year-old and a tenth birthday can share an arch. A quiet 60th or 75th often wants less balloon and a clearer cake table.",
        ],
      },
      {
        heading: "Decoration only, or the full plan",
        paragraphs: [
          "Some families want decoration only: we measure, we build, we strike, and the house runs food and music itself. Some want the birthday the rest of this site describes — theme, cake staging, games, an anchor when the room needs one, music, and food coordination — with decoration as one part of that file. Both are the same team. Decoration-only is not a smaller vendor dropped in at the last hour. We still need the date, the floor plan of the room, and the hour guests arrive. If the list outgrows the flat, the birthday planner who already works Nanded City homes can move the night to a Sinhgad Road hall without a second brief.",
        ],
      },
      {
        heading: "Society rules and setup time",
        paragraphs: [
          "Nanded City societies and Sinhgad Road halls write the rules, and we follow them. Music hours, whether helium balloons are welcome in a clubhouse, where we may fix a frame, which power point is ours, and the time the lawn must be empty. Setup is timed to that slot. We are on the floor before guests, and we load out inside the hour the manager wrote down. A living room is often dressed the same day. A lawn or a hall needs the load-in the venue will actually give us — we ask before we promise a dawn build or a night-before install. Visitor parking and the lift that must carry the arch are part of the same note.",
        ],
      },
      {
        heading: "Balloon decoration in Nanded City & Sinhgad Road",
        paragraphs: [
          "Balloon decoration in Nanded City and along Sinhgad Road is a regular part of this work, not a separate shop. Arches, columns, a walkway, organic clusters around a cake, and a frame that holds a neon sign. In a township flat the balloon count has to leave room to walk. On a society lawn it has to survive a breeze and come down before the curfew. In a Sinhagad Road hall it can be larger, and it still has to suit the ceiling and the hour the banquet allows for load-in. We do not keep a second brand for balloons. If the brief is an arch and a backdrop, say so. If it is a full birthday, say so. The phone is +91 89757 60707.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I book birthday decoration only, without full planning?",
        a: "Yes. Decoration-only covers the arch, backdrop, cake table, name letters, and theme build. Full planning adds games, music, food coordination, and show-calling. The same birthday team holds either brief in Nanded City or on Sinhgad Road.",
      },
      {
        q: "When do you set up, and what do societies allow?",
        a: "Setup follows the slot the society or hall gives us. We build before guests and load out by the written time. Tell us the curfew, the power point, and whether the clubhouse allows helium or wall fixings. We ask before we promise the build.",
      },
      {
        q: "Do you do balloon decoration on Sinhgad Road as well as in Nanded City?",
        a: "Yes. Balloon arches, columns, and cake clusters are part of birthday decoration in the Nanded City township and in Sinhgad Road halls — Sinhagad Road on many maps. There is no separate balloon page. This is the same house.",
      },
      {
        q: "Is this Nanded City in Pune, or Nanded district?",
        a: "Pune. Nanded City is the township on Sinhgad Road, postal code 411068. It is not Nanded district, Nanded Town, or PIN 431601. Sonali Events decorates birthdays in the township and along this road.",
      },
    ],
    relatedEvents: ["birthdays", "celebration-parties"],
    nandedAnchor: "birthday decoration in Nanded City",
    sinhgadAnchor: "birthday decoration on Sinhgad Road",
    footerAnchor: "Birthday decoration in Nanded City",
    floor: [
      {
        src: work.birthdayShourya,
        alt: "Gold and white balloon birthday setup with SHOURYA letters at XTO Pizza",
        caption:
          "Gold and white balloon birthday setup with SHOURYA letters at XTO Pizza",
      },
      {
        src: work.birthdayAnika,
        alt: "Fairy theme pastel balloon ring for Anika's birthday",
        caption: "Fairy theme pastel balloon ring for Anika's birthday",
      },
      {
        src: work.birthdayAnikaFilm,
        alt: "Fairy theme pastel balloon ring for Anika's birthday",
        caption: "Fairy theme pastel balloon ring for Anika's birthday",
        kind: "video",
        poster: "/posters/birthday-anika-fairy-balloon-ring.jpg",
      },
      {
        src: work.birthdayCeilingBalloons,
        alt: "Blue and white helium ceiling balloons for a birthday at home",
        caption: "Blue and white helium ceiling balloons for a birthday at home",
      },
      {
        src: work.birthdayHomeBalloonsFilm,
        alt: "Blue and white helium ceiling balloons for a birthday at home",
        caption: "Blue and white helium ceiling balloons for a birthday at home",
        kind: "video",
        poster: "/posters/birthday-blue-white-balloons-home.jpg",
      },
      {
        src: work.birthdayAgesFiveAndTen,
        alt: "Blue and pink balloon arch with marquee numbers 5 and 10 and a Happy Birthday sign",
        caption: "Birthday, ages 5 and 10",
      },
      {
        src: work.birthdayReyaans,
        alt: "Cars-theme home birthday with a gold number 4 and the name REYAANS",
        caption: "REYAANS, age 4",
      },
      {
        src: work.birthdayXtoColumns,
        alt: "Blue and white balloon columns and a neon Happy Birthday sign at XTO Pizza",
        caption: "Birthday at XTO Pizza",
      },
      {
        src: work.birthdayShlok,
        alt: "Gold foil letters spelling SHLOK with blue and white balloons at XTO Pizza",
        caption: "SHLOK at XTO Pizza",
      },
      {
        src: work.purpleFloralBackdrop,
        alt: "Purple floral curtain backdrop with hanging flowers and fairy lights",
        caption: "Purple floral backdrop",
      },
    ],
  },
  {
    slug: "baby-shower",
    name: "Baby shower",
    local: "Dohale jevan · Godh bharai",
    summary:
      "Baby shower and dohale jevan decoration in Nanded City, Sinhgad Road, Pune — not Nanded district. Jhula, balloons, and backdrop. WhatsApp +91 89757 60707.",
    story:
      "A baby shower and dohale jevan in Nanded City, Pune, is a family day with a ritual and a photograph that both have to land. Sonali Events holds godh bharai, dohale jevan, and the oti setup in the township on Sinhgad Road — Sinhagad Road on many maps. This is not Nanded district, Nanded Town, or PIN 431601 in Marathwada. The swing, the balloon walkway, and the backdrop are built for the room you actually have.",
    image: "/posters/baby-shower-decoration.jpg",
    guests: "40–150",
    includes: [
      "Godh bharai & oti setup",
      "Swing / jhula seat",
      "Balloon walkway",
      "Stage backdrop",
      "Home, lawn, or hall",
    ],
    metaTitle:
      "Baby Shower & Dohale Jevan Decoration in Nanded City, Sinhgad Road, Pune | Sonali Events",
    h1: "Baby shower & dohale jevan in Nanded City, Pune",
    detail: [
      "Godh bharai, dohale jevan, and oti are the same afternoon told in the family's words. Some houses want the oti tray, the rice, and the elders' blessing before anyone talks about a backdrop. Some want a dohale jevan that still feels like a meal at home, with the mother-to-be seated where the aunts and the camera can both reach her. We ask which objects the ritual needs, where an elder will stand, and which moment the family means to keep. Decoration sits around that sequence. It does not replace the custom with a theme.",
      "The pieces families on this road ask us to build are specific. A swing or jhula seat, dressed so she can sit without the frame crowding the room or blocking the door. A balloon walkway that leads guests to that seat — along a flat's passage, a lawn path, or a hall aisle — rather than a shop-window arch forced into a living room. A stage backdrop when the list needs a photograph wall: floral, a soft colour, or a simple drape. We measure the ceiling, the door the swing has to pass, and the floor the balloons will actually stand on before we promise any of the three.",
      "Most showers we hold begin in a Nanded City home. A living room can take a jhula, a modest backdrop, and a meal if the kitchen and the passage can release plates without crossing the ritual corner. A society lawn is the next floor: more guests, a written curfew, a power point, and a manager who wants one name rather than six vendors. A hall on Sinhgad Road, also written Sinhagad Road, is the honest room when both families will not fit the township. The same crew builds all three. You do not collect a new decorator because cousins confirmed late.",
      "A baby shower can stay a decoration brief — swing, walkway, backdrop, and the oti or godh bharai corner — or it can sit inside the wider celebration the house already runs: food, invitations, music, and show-calling on the day. Maharashtrian and North Indian houses ask for different colours and a different meal. We follow the custom you name on the first message. The film on this page is a baby shower decoration we held: the walkway, the floral, and the seat, captioned as it stands. Tell us the date and whether the day is home, lawn, or hall. We reply in Marathi, Hindi, or English.",
      "Nanded City on this page is the Pune township, postal code 411068, on the Sinhgad Road corridor. Families who search for a baby shower in Nanded often land on Nanded district in Marathwada. That is a different city. We plan and decorate dohale jevan and godh bharai here, in township homes, on society lawns, and in halls a short drive along Sinhagad Road. If you already have the room, send the building or the hall name. If you only know the month, that is enough to start. The phone is +91 89757 60707, Monday to Sunday, 10:00 to 20:00.",
    ],
    faqs: [
      {
        q: "Is this Nanded City in Pune, or Nanded district?",
        a: "Pune. Nanded City is the township on Sinhgad Road — also spelled Sinhagad Road — postal code 411068. It is not Nanded district, Nanded Town, or PIN 431601. Sonali Events decorates baby showers and dohale jevan in the township.",
      },
      {
        q: "Do you decorate a dohale jevan or godh bharai at home?",
        a: "Yes. Many baby showers we hold are in Nanded City flats. We set the oti or godh bharai corner, the jhula, and the backdrop to the rooms you have, including the society rules on that building.",
      },
      {
        q: "What does the baby shower decoration usually include?",
        a: "A swing or jhula seat, a balloon walkway, a stage backdrop, and the ritual setup the family names — godh bharai, dohale jevan, or oti. Food, music, and invitations can sit in the same file when you want them.",
      },
      {
        q: "Can the shower move from a society lawn to a Sinhgad Road hall?",
        a: "Yes. When the guest list leaves the flat or the lawn, the same team builds the day in a hall on Sinhgad Road. You do not start again with a new decorator.",
      },
    ],
    relatedThemes: ["maharashtrian", "north-indian"],
    relatedEvents: ["celebration-parties", "naming-ceremony"],
    nandedAnchor: "baby shower decoration in Nanded City",
    sinhgadAnchor: "baby shower decoration on Sinhgad Road",
    footerAnchor: "Baby shower decoration on Sinhgad Road",
    floor: [
      {
        src: work.dohaleJevanFilm,
        alt: "Dohale jevan decoration with peacock stage and floral swing",
        caption: "Dohale jevan decoration with peacock stage and floral swing",
        kind: "video",
        poster: "/posters/baby-shower-dohale-jevan-peacock-stage.jpg",
      },
      {
        src: work.babyShowerFilm,
        alt: "Baby shower decoration: balloon walkway, floral arches, and a wooden swing in a hall",
        caption: "Baby shower decoration",
        kind: "video",
        poster: "/posters/baby-shower-decoration.jpg",
      },
    ],
  },
  {
    slug: "naming-ceremony",
    name: "Naming ceremony",
    local: "Namkaran · Barsa",
    summary:
      "Naming ceremony (namkaran and barsa) planner in Nanded City, Pune — cradle, ritual corner, elders, and a family meal. WhatsApp +91 89757 60707.",
    story:
      "A namkaran is intimate and exact. We set the cradle, the ritual corner, the seating for elders, and a meal that respects the family’s custom — Maharashtrian, North Indian, or South Indian.",
    image: work.namingPrincess,
    guests: "40–150",
    includes: ["Ritual layout", "Cradle & floral", "Guest flow", "Satvik / family menu", "Invites"],
    metaTitle:
      "Naming Ceremony (Namkaran & Barsa) Planner in Nanded City, Pune | Sonali Events",
    h1: "Naming ceremony (namkaran & barsa) planner in Nanded City, Pune",
    detail: [
      "Naming ceremonies in Nanded City are often at home: a palna in the hall, a ritual corner the priest can reach without crossing the cake, seating that puts grandparents first. Barsa and namkaran ask for quiet precision more than a stage.",
      "South Indian families on this road ask for jasmine, silk, and a satvik meal. Maharashtrian houses ask for a custom the elders already know. We do not overwrite the ritual with a theme. The floral and the cradle sit around it.",
      "We also decorate annaprashan, the first rice-feeding ceremony.",
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
    relatedEvents: ["housewarming", "thread-ceremony", "baby-shower"],
    nandedAnchor: "naming ceremony in Nanded City",
    sinhgadAnchor: "namkaran planner on Sinhgad Road",
    footerAnchor: "Naming ceremony in Nanded City",
    floor: [
      {
        src: work.annaprashan,
        alt: "Annaprashan (first meal) floral setup with Krishna backdrop",
        caption: "Annaprashan (first meal) floral setup with Krishna backdrop",
      },
      {
        src: work.annaprashanFilm,
        alt: "Annaprashan (first meal) floral setup with Krishna backdrop",
        caption: "Annaprashan (first meal) floral setup with Krishna backdrop",
        kind: "video",
        poster: "/posters/annaprashan-first-meal-floral-setup.jpg",
      },
    ],
  },
  {
    slug: "engagements",
    name: "Engagements",
    local: "Sakhar puda · Ring ceremony",
    summary:
      "Engagement and sakhar puda planner on Sinhgad Road, Pune — stage, floral, host, ring moment, and a clear evening peak. WhatsApp +91 89757 60707.",
    story:
      "Engagements near Sinhgad Road now carry wedding-level production. The team designs the stage, the walk-in, the ring moment, and the dance floor so the evening has a clear peak — not a blur of vendors.",
    image: work.roka,
    guests: "80–250",
    includes: ["Stage & floral", "Entry & host", "DJ / live music", "Invitations", "F&B"],
    metaTitle:
      "Engagement (Sakhar Puda) Planner on Sinhgad Road, Pune | Sonali Events",
    h1: "Engagement (sakhar puda) planner on Sinhgad Road, Pune",
    detail: [
      "A sakhar puda in Nanded City often stays in the flat or on the society lawn: a floral pocket for the exchange, seating that puts both families in the photograph, and a meal the passage can actually hold. We measure the room before we promise a stage.",
      "When the list leaves the society, the same team moves the night to a Sinhgad Road banquet. Ring ceremonies on this corridor now ask for wedding-level staging — walk-in, ring moment, host, and a dance floor with a clear peak — without a new set of vendors.",
      "Maharashtrian sakhar puda and North Indian ring or roka evenings use the same file. Tell us the date, the guest count, and whether it is home, lawn, or hall. We hold décor, food, invitations, music, and the host.",
    ],
    faqs: [
      {
        q: "Do you hold sakhar puda in Nanded City homes?",
        a: "Yes. Smaller engagements and sakhar puda evenings often stay in a Nanded City flat or society lawn. We scale the floral, the seating, and the meal to the rooms you actually have.",
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
    nandedAnchor: "sakhar puda in Nanded City",
    sinhgadAnchor: "engagement planner on Sinhgad Road",
    footerAnchor: "Engagement planner on Sinhgad Road",
  },
  {
    slug: "marriages",
    name: "Marriages",
    local: "Lagna and related functions",
    summary:
      "Wedding planner on Sinhgad Road, Pune — also spelled Sinhagad Road. Ceremony, reception, and Nanded City functions. WhatsApp +91 89757 60707.",
    story:
      "A wedding planner on Sinhgad Road, Pune — also spelled Sinhagad Road — runs mehendi, sangeet, ceremony, and reception as one file, so the family greets guests, not vendors.",
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
    metaTitle: "Wedding planner on Sinhgad Road, Pune",
    h1: "Wedding planner on Sinhgad Road, Pune",
    detail: [
      "Wedding weeks on this corridor usually split across floors: a haldi or mehendi in a Nanded City home or society lawn, ceremony and reception in a Sinhgad Road banquet. We lock the venues as one map so the family does not run two productions.",
      "The banquet stretch — Sinhgad Road, also written Sinhagad Road — is where larger lists sit. Sonali Events is an event management company for that week: we have already dressed halls such as Serenova Banquet. We do not publish a venue catalogue we have not stood on. If you already have a hall, we still hold décor, food, music, dance, and show-calling.",
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
    nandedAnchor: "wedding functions in Nanded City",
    sinhgadAnchor: "wedding planner on Sinhgad Road",
    footerAnchor: "Wedding planner on Sinhgad Road",
  },
  {
    slug: "housewarming",
    name: "Housewarming",
    local: "Gruha pravesh",
    summary:
      "Housewarming (gruha pravesh) planner in Nanded City, Pune — threshold décor, puja flow, and a meal for the new home. WhatsApp +91 89757 60707.",
    story:
      "A gruha pravesh should feel like the house taking a first breath. We dress the threshold, sequence the puja, and feed the people who will become this home’s regulars.",
    image: work.houseGarlands,
    guests: "40–120",
    includes: ["Threshold décor", "Puja staging", "Home or hall setup", "Catering", "Music"],
    metaTitle:
      "Housewarming (Gruha Pravesh) Planner in Nanded City, Pune | Sonali Events",
    h1: "Housewarming (gruha pravesh) planner in Nanded City, Pune",
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
    nandedAnchor: "housewarming in Nanded City",
    sinhgadAnchor: "gruha pravesh on Sinhgad Road",
    footerAnchor: "Housewarming in Nanded City",
    floor: [
      {
        src: work.gruhaPraveshFilm,
        alt: "Gruha pravesh flower rangoli welcome path",
        caption: "Gruha pravesh flower rangoli welcome path",
        kind: "video",
        poster: "/posters/housewarming-gruha-pravesh-flower-rangoli.jpg",
      },
    ],
  },
  {
    slug: "thread-ceremony",
    name: "Thread ceremony",
    local: "Munj · Upanayana",
    summary:
      "Thread ceremony (munj) planner in Nanded City and on Sinhgad Road, Pune — mandap, elder seating, and a long morning. WhatsApp +91 89757 60707.",
    story:
      "Munj asks for precision: mandap, fire, seating for priests and grandparents, and a meal that holds a long morning.",
    image: work.namingPalna,
    guests: "80–200",
    includes: ["Mandap", "Ritual map", "Elder seating", "Traditional meal", "Invites"],
    metaTitle:
      "Thread Ceremony (Munj) Planner in Nanded City & Sinhgad Road | Sonali Events",
    h1: "Thread ceremony (munj) planner in Nanded City & Sinhgad Road",
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
    nandedAnchor: "thread ceremony in Nanded City",
    sinhgadAnchor: "munj planner on Sinhgad Road",
    footerAnchor: "Thread ceremony in Nanded City",
  },
  {
    slug: "office-parties",
    name: "Office parties",
    local: "Annual day · offsite night",
    summary:
      "Office party and corporate event planner on Sinhgad Road, Pune — stage, lights, food, games, and a host for the night. WhatsApp +91 89757 60707.",
    story:
      "Office annual days and offsite nights in a Sinhgad Road banquet or nearby hall: stage, lights, food, games, and an anchor.",
    image: work.birthdayAyaan,
    guests: "40–200",
    includes: ["Venue", "Stage & lights", "Entertainment", "Games", "F&B"],
    metaTitle:
      "Office Party and Corporate Event Planner on Sinhgad Road, Pune | Sonali Events",
    h1: "Office party and corporate event planner on Sinhgad Road, Pune",
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
    nandedAnchor: "office party in Nanded City",
    sinhgadAnchor: "corporate event planner on Sinhgad Road",
    footerAnchor: "Office party on Sinhgad Road",
  },
  {
    slug: "celebration-parties",
    name: "Celebration parties",
    local: "Anniversary, baby shower, success",
    summary:
      "Party planner in Nanded City, Pune — the Sinhgad Road township. Anniversaries, baby showers, and success evenings. WhatsApp +91 89757 60707.",
    story:
      "A party planner in Nanded City, Pune — the township on Sinhgad Road, also spelled Sinhagad Road, not Nanded district. Anniversaries, baby showers, promotions, house-full evenings. Same team as a wedding, scaled to the home or hall you actually have.",
    image: work.birthdaySixteen,
    guests: "40–150",
    includes: ["Styled décor", "Host & games", "Music", "Invites", "Food"],
    metaTitle: "Party planner in Nanded City, Pune",
    h1: "Party planner in Nanded City, Pune",
    detail: [
      "Nanded City here is the Pune township, not Nanded district. Anniversaries, baby showers, and quieter success evenings often stay in a home or on a society lawn: styled décor the photographs can use, a host when games need one, and a meal that fits the rooms you have.",
      "House-full nights and larger promotions move to a Sinhgad Road banquet — Sinhagad Road on many maps. The crew is the same one that runs a wedding week, scaled to the hall you actually booked — not a catalogue evening dropped onto the floor.",
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
    relatedEvents: ["baby-shower", "birthdays", "engagements", "housewarming"],
    nandedAnchor: "celebration party in Nanded City",
    sinhgadAnchor: "party planner on Sinhgad Road",
    footerAnchor: "Party planner in Nanded City",
    floor: [
      {
        src: work.babyShowerFilm,
        alt: "Baby shower decoration: balloon walkway, floral arches, and a wooden swing in a hall",
        caption: "Baby shower decoration",
        kind: "video",
        poster: "/posters/baby-shower-decoration.jpg",
      },
    ],
  },
];

export function getEvent(slug: string) {
  return events.find((item) => item.slug === slug);
}
