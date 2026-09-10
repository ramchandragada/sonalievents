import { work } from "./work-picks";

export type LocationSection = {
  heading: string;
  paragraphs: string[];
};

export type LocationPage = {
  slug: string;
  name: string;
  navLabel: string;
  title: string;
  description: string;
  h1: string;
  kicker: string;
  lede: string;
  image: string;
  imageAlt: string;
  areaServed: { "@type": "Place" | "City"; name: string }[];
  sections: LocationSection[];
};

export const locations: LocationPage[] = [
  {
    slug: "nanded-city-pune",
    name: "Nanded City, Pune",
    navLabel: "Nanded City",
    title: "Event Planner in Nanded City, Pune | Birthdays, Weddings & More | Sonali Events",
    description:
      "Event planner in Nanded City, Pune — the Sinhgad Road township, not Nanded district. Birthdays, namkaran, engagements, weddings, housewarming, and munj at home or on a society lawn. WhatsApp +91 89757 60707.",
    h1: "Event planner in Nanded City, Pune",
    kicker: "Pune township · 411068",
    lede:
      "Homes, society lawns, and clubhouses in the Nanded City township on Sinhgad Road. We hold the day so the family greets guests — not vendors.",
    image: work.birthdayUnicorn,
    imageAlt: "Birthday décor held at a Nanded City home",
    areaServed: [
      { "@type": "Place", name: "Nanded City, Pune" },
      { "@type": "Place", name: "Nanded City township, Sinhgad Road, Pune" },
      { "@type": "City", name: "Pune" },
    ],
    sections: [
      {
        heading: "This Nanded — the Pune township",
        paragraphs: [
          "Nanded City is a township on Sinhgad Road in Pune: gated homes, society lawns, and clubhouses in postal code 411068. It is not Nanded district in Marathwada. Families who type “event planner Nanded” often land on the wrong city. Sonali Events works here — the Pune township, the societies along this stretch, and the banquet halls a short drive toward Sinhgad Road.",
          "When a brief says “Nanded City home,” the house already knows the shape of the day. Lifts and visitor parking. A lawn that must be clear by a society curfew. Elders who want the ritual in the living room and the meal outside. Children who will find the cake before the host does. We hold those constraints so they become the gift, not the argument.",
          "The website is English. On the floor the team speaks Marathi, Hindi, and English — the three languages this township actually uses when a neighbour, a priest, and a cousin from another city are in the same room.",
        ],
      },
      {
        heading: "Homes and society lawns",
        paragraphs: [
          "Most celebrations in Nanded City begin at home. A first birthday in a 3BHK. A namkaran with the cradle against a window. A gruha pravesh on the threshold of a new flat. The rooms are real, the guest list is known, and the neighbours are close. That is not a smaller version of a banquet. It is a different floor, and it needs a different plan.",
          "We measure the room before we promise a stage. We ask where the puja will sit, where shoes come off, and whether the society allows a dhol after eight. Décor is built to the flat you have — not a catalogue hall dropped into a living room. Food arrives in a sequence the kitchen and the passage can actually hold.",
          "Society lawns and clubhouses are the other Nanded City floor. A 60th birthday under string lights. An engagement that outgrew the flat. A munj that needs a mandap and chairs for grandparents. The lawn has a curfew, a power point, and a manager who wants the name of one person — not six. That person is the house.",
          "If the list will not fit the home or the lawn, we look along Sinhgad Road for a banquet and keep the same team on both floors. You do not start again with a new set of vendors because the guest count moved.",
        ],
      },
      {
        heading: "Celebrations we already hold",
        paragraphs: [
          "The house runs the days already listed on this site: birthdays, naming ceremonies, engagements, marriages and the related functions, housewarming, thread ceremony, office parties, and celebration nights. In Nanded City the mix leans home and lawn — first-year and milestone birthdays, namkaran and barsa, gruha pravesh, munj, and smaller sakhar pud evenings.",
          "Wedding weeks and large office nights usually move to a Sinhgad Road banquet, then come back to the society for a quieter function: a haldi in the clubhouse, a reception lunch at home, a naming the week after the wedding. One file. One WhatsApp group.",
          "Each kind of day has its own experienced team. A Saturday in the township can hold a birthday in one society and a namkaran in another without borrowing people. You lock the date and the brief. We produce the rest.",
        ],
      },
      {
        heading: "How a Nanded City brief becomes a day",
        paragraphs: [
          "WhatsApp or the plan form. Someone from the house replies — in Marathi, Hindi, or English. We take the date, the tradition, the guest count, and where the function is: home, society lawn, or banquet hall. Then a short discovery, on a call or at Nanded City, for budget, the look you want, and the rules of the society.",
          "You get venue options if the home will not hold the list, a theme board, and a clear estimate. Maharashtrian, North Indian, or South Indian. You lock it. A team for that kind of event takes the file. Décor, food, music, invitations, dance, games — one window, no vendor chase.",
          "On the day, show-calling. You greet guests. We run the floor: the ritual corner, the cake, the meal service, the uncle who wants the mic, the lawn lights at dusk. The work is measured simply — professional execution, clear communication, on-time delivery — which is how new orders keep arriving, through families who send the next family.",
        ],
      },
      {
        heading: "Themes this township asks for",
        paragraphs: [
          "Nanded City is mixed in the way Sinhgad Road is mixed. A Maharashtrian munj in the morning and a North Indian birthday the same weekend. A South Indian namkaran with jasmine and a satvik meal. We do not invent a “Pune fusion” look. We dress the day in the language the family already speaks — paithani, brass, and marigold; or a dense floral mandap; or banana leaf and temple lines — scaled to a flat or a lawn.",
          "Tell us the family, not a Pinterest board of six cities. The theme sits under the ritual, not on top of it.",
        ],
      },
      {
        heading: "What stays in one window",
        paragraphs: [
          "Venue, decoration, food, invitations, music, dance, party games, and show-calling. That is the list we actually hold. Photographs and films on this site are from days we held. We do not publish reviews, awards, or social pages we do not have.",
          "The house is based at Nanded City, Sinhgad Road, Pune. Since 2023 we have held more than a thousand celebrations on this corridor. If you are planning a day in the township — or you only know that the function is “near Nanded City” — send the date. We will tell you whether the home, the lawn, or a hall on Sinhgad Road is the honest room for it.",
        ],
      },
    ],
  },
  {
    slug: "sinhgad-road-pune",
    name: "Sinhgad Road, Pune",
    navLabel: "Sinhgad Road",
    title: "Event Planner Sinhgad Road, Pune | Weddings, Office Parties & Banquets | Sonali Events",
    description:
      "Event planner on Sinhgad Road, Pune — weddings, office parties, engagements, and banquet days, including halls such as Serenova. Also Nanded City homes and lawns. WhatsApp +91 89757 60707.",
    h1: "Event planner on Sinhgad Road, Pune",
    kicker: "Banquet corridor · Pune",
    lede:
      "Wedding weeks, office nights, and banquet days along Sinhgad Road — also spelled Sinhagad Road — with the same team that holds Nanded City homes.",
    image: work.banquetDoor,
    imageAlt: "Banquet entrance on Sinhgad Road dressed by Sonali Events",
    areaServed: [
      { "@type": "Place", name: "Sinhgad Road, Pune" },
      { "@type": "Place", name: "Sinhagad Road, Pune" },
      { "@type": "Place", name: "Nanded City, Sinhgad Road, Pune" },
      { "@type": "City", name: "Pune" },
    ],
    sections: [
      {
        heading: "The banquet corridor",
        paragraphs: [
          "Sinhgad Road — Sinhagad Road on many maps and invites — is the stretch where Nanded City families go when the guest list leaves the society. Banquet halls, marriage halls, and hotel floors sit along this corridor. Office annual days book the same rooms on a Friday that a reception will take on Sunday.",
          "Sonali Events is based at Nanded City, Sinhgad Road, Pune. We hold days on this road so the family does not have to collect a decorator, a caterer, a DJ, and a host from four group chats. Venue, décor, food, invitations, music, dance, games, and show-calling stay in one window.",
          "We mention halls only when we have already worked them. Serenova Banquet is one such floor on this corridor. If your date needs a different hall, we still run the production: the brief, the estimate, the team, and the day. We do not invent a venue list we have not stood on.",
        ],
      },
      {
        heading: "Weddings and the week around them",
        paragraphs: [
          "A wedding on Sinhgad Road is rarely one evening. Mehendi, sangeet, ceremony, and reception travel across a home, a lawn, and a hall. The wedding team runs those functions as one file — venue lock, multi-day décor, a ritual map, catering, music, and guest flow — so the family greets people, not vendors.",
          "Engagements and sakhar pud on this road now carry wedding-level staging: a walk-in, a ring moment, a dance floor with a clear peak. We design the stage and the host so the night has a shape, not a blur of lights.",
          "North Indian wedding weeks ask for a dense floral mandap, a mehendi floor, and a sangeet that actually dances. Maharashtrian lagna asks for mundavalya, brass, and a meal elders trust. South Indian ceremonies ask for jasmine, silk, and a pace the priest can hold. The corridor sees all three. The house was built for that mix.",
        ],
      },
      {
        heading: "Office nights and celebration parties",
        paragraphs: [
          "Sinhgad Road halls also hold the days that are not a wedding. Office annual days and offsite nights: stage, lights, food, games, and an anchor the team will remember. Celebration parties — anniversaries, baby showers, promotions — use the same crews, scaled to the room you actually booked.",
          "Corporate briefs still need a person who answers. We take the date, the headcount, the branding you must show, and the hour the hall must be empty. Then we run the floor so the HR group chat can watch the night instead of managing it.",
        ],
      },
      {
        heading: "When the day starts in Nanded City",
        paragraphs: [
          "Many Sinhgad Road banquet days begin in the township. A haldi at home. A namkaran the week after the reception. A 50th birthday that should stay in the society, not a hall. We hold both ends. The house is in Nanded City; the banquet corridor is the same road.",
          "Nanded City here means the Pune township on this road — not Nanded district in Marathwada. If your invite says Sinhagad Road, Sinhgad Road, or “near Nanded City,” it is the same geography we already work.",
          "Typical gathering sizes on this corridor run from an intimate 40 at home to 400 for a wedding week. Final scale follows the room: home, society lawn, or hall. We will say when a hall is the honest choice, and when it is waste.",
        ],
      },
      {
        heading: "Celebrations on the list",
        paragraphs: [
          "Birthdays, naming ceremonies, engagements, marriages, housewarming, thread ceremony, office parties, and celebration nights — the same set as the rest of the site, produced for a banquet when the list needs one. Birthdays and namkaran still happen in Nanded City homes; the road is for the days that outgrow them.",
          "You do not need to know the hall before you write. Tell us the date, the tradition, and the guest count. We return venue options near Nanded City and Sinhgad Road, a theme board, and a clear estimate. Then a dedicated team takes that kind of event.",
        ],
      },
      {
        heading: "How we work this road",
        paragraphs: [
          "Enquire on WhatsApp. Discover the budget, the ritual, and the look. Design the venue and the board. Lock the date. Produce décor, food, music, dance, and invitations in one group. Deliver with show-calling so you are not the person holding a vendor list at the door.",
          "Hall managers on Sinhgad Road want one name, a load-in time, and a load-out time. We are that name. Power, parking, the uncle who arrives with a dhol, the slide that must play during the speeches — those sit in the run of show, not in a family WhatsApp at 6 p.m.",
          "Photographs on this site are from days we held — including banquet floors on Sinhgad Road. We do not publish reviews, awards, or Instagram we do not have. The phone is +91 89757 60707. Send the date, the tradition, and whether you already have a hall.",
        ],
      },
    ],
  },
];

export function getLocation(slug: string) {
  return locations.find((item) => item.slug === slug);
}

export function locationPath(slug: string) {
  return `/locations/${slug}`;
}
