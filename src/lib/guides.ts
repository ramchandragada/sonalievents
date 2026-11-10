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
      "Birthday Planner in Nanded City, Pune | Home or Society Lawn | Sonali Events",
    description:
      "Birthday planner in Nanded City, Pune — the township on Sinhgad Road, also spelled Sinhagad Road, not Nanded district. How an event management company holds a home or society-lawn birthday. WhatsApp +91 89757 60707.",
    h1: "Birthday planner in Nanded City, Pune",
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
        a: "Pune. Nanded City is the township on Sinhgad Road — also spelled Sinhagad Road — postal code 411068. It is not Nanded district in Marathwada. Sonali Events is an event management company based in the township.",
      },
    ],
    sections: [
      {
        heading: "This Nanded City — the Pune township",
        paragraphs: [
          "Nanded City is a gated township on Sinhgad Road in Pune — Sinhagad Road on many maps. Flats, bungalows, society lawns, and clubhouses sit in postal code 411068. It is not Nanded district in Marathwada. Families who search “birthday planner Nanded” often land on the wrong city. This guide is for the Pune township — visitor parking, the lift that will carry the cake, and the lawn that must be clear by a published hour.",
          "A birthday here rarely begins as a banquet brief. It begins as a living room, a passage, cousins in cars that need a slot, and a neighbour who will hear the music whether the society permits a dhol or not. That is a different floor from a hall on Sinhgad Road. It needs a different plan.",
          "Sonali Events is an event management company based at Nanded City, Sinhgad Road, Pune. The website is English. On the floor the team speaks Marathi, Hindi, and English. Read the [[/locations/nanded-city-pune|Nanded City location page]] for the wider map of days we hold here. This note is only about the birthday.",
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
      "Event Management Company on Sinhagad Road, Pune | Office Party | Sonali Events",
    description:
      "Event management company on Sinhgad Road, Pune — also spelled Sinhagad Road. How to plan an office party or annual day: banquet versus a Nanded City clubhouse, stage, food, and load-out. WhatsApp +91 89757 60707.",
    h1: "Event management company on Sinhagad Road, Pune",
    kicker: "Guide · Sinhgad Road, Pune",
    navLabel: "Office party, Sinhgad Road",
    lede:
      "Sinhgad Road and Sinhagad Road are the same Pune stretch. Banquet hall or Nanded City clubhouse, stage or no stage, the hour the room must be empty — what to decide before the HR group chat starts collecting vendors.",
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
          "Sonali Events is an event management company based at Nanded City, Sinhgad Road, Pune. We hold office nights on this road so the company does not collect a decorator, a caterer, a DJ, and an anchor from four chats. The service page is [[/events/office-parties|office parties]] — annual day and offsite night, typical gatherings 40–200. The geography page is [[/locations/sinhgad-road-pune|event management company on Sinhgad Road]]. This guide is the planning note in between: banquet versus clubhouse, and what to lock before you pay a hall deposit.",
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
  {
    slug: "wedding-planner-sinhgad-road",
    title:
      "Wedding Planner on Sinhgad Road, Pune | Banquet, Mehendi, Reception | Sonali Events",
    description:
      "Wedding planner on Sinhgad Road, Pune — also spelled Sinhagad Road. Hall slots, mehendi to reception, and itemised estimates. WhatsApp +91 89757 60707.",
    h1: "Wedding planner on Sinhgad Road, Pune",
    kicker: "Guide · Sinhgad Road, Pune",
    navLabel: "Wedding planner, Sinhgad Road",
    lede:
      "A wedding on Sinhgad Road is rarely one evening. This note is how Sonali Events chooses a hall slot, runs the week from sakhar pud to reception, and writes an itemised estimate with no rate printed here.",
    image: work.banquetDoor,
    imageAlt: "Banquet entrance on Sinhgad Road dressed by Sonali Events",
    published: "2026-11-10",
    whatsappMessage:
      "Hello Sonali Events, I would like to plan a wedding on Sinhgad Road — banquet, mehendi, and reception.",
    related: [
      { href: "/events/marriages", label: "Wedding planner" },
      { href: "/events/engagements", label: "Engagement (sakhar pud)" },
      { href: "/locations/sinhgad-road-pune", label: "Sinhgad Road, Pune" },
      { href: "/themes/maharashtrian", label: "Maharashtrian theme" },
      { href: "/themes/north-indian", label: "North Indian theme" },
      { href: "/themes/south-indian", label: "South Indian theme" },
    ],
    faqs: [
      {
        q: "How should we choose a hall slot on Sinhgad Road?",
        a: "Match the slot to the functions, not the other way around. A date, a backup date, a start, and a hard end that includes load-in and load-out. Tell us which functions stay in Nanded City and which need the banquet. We will say if the hours overlap.",
      },
      {
        q: "Do you hold the week from sakhar pud through reception?",
        a: "Yes. Sakhar pud or a ring ceremony, then haldi, mehendi, sangeet if you want it, ceremony, and reception can sit in one file. Not every house needs every function. We sequence the ones you name.",
      },
      {
        q: "Can one wedding use Maharashtrian, North Indian, and South Indian themes?",
        a: "Yes, when the two families do not share a custom. Each function is dressed in that family's language — mundavalya and marigold, a floral mandap and sangeet, or jasmine and a priest's pace — rather than one fusion look.",
      },
      {
        q: "Will the estimate show a package price on this page?",
        a: "No. This page names the lines — venue, décor per function, floral, catering, music, invitations, host, and show-calling — and does not print a rate. The figure is in the estimate we send after the rooms and the guest list are clear.",
      },
    ],
    sections: [
      {
        heading: "Sinhgad Road, also written Sinhagad Road",
        paragraphs: [
          "Sinhgad Road — Sinhagad Road on many maps, invites, and hall listings — is the Pune corridor where Nanded City families go when a guest list leaves the society. Banquet halls and hotel floors sit along this stretch. Sonali Events is an event management company based at Nanded City, Sinhgad Road, Pune. The short service page is [[/events/marriages|wedding planner on Sinhgad Road]]. The geography is [[/locations/sinhgad-road-pune|the Sinhgad Road page]].",
          "Nanded City in this note is the Pune township on this road, postal code 411068. It is not Nanded district, Nanded Town, or PIN 431601 in Marathwada. A haldi or a mehendi often stays in the township. Ceremony and reception usually take a hall on the corridor. If your invite already says Sinhagad Road, it is the same stretch.",
        ],
      },
      {
        heading: "Choosing a hall slot",
        paragraphs: [
          "Start with the honest shape of the week, not with the hall that answered the phone first. Which functions need a banquet, which can stay in a Nanded City home or on a society lawn, and which hours the priest, the families, and the hall will actually share. A slot is a date, a backup date, a start, and a hard end — including load-in and load-out. Halls on this road are strict about the hour the room must be empty. A plan that ends on a slide at one time and on the floor an hour later is how deposits disappear.",
          "Ask what the slot includes before you hold it: power, parking, a quiet room for elders, and whether the next booking begins the moment yours ends. Overlap is the failure we see most — a mehendi meant to finish in the township and a reception on Sinhgad Road that starts before the family has left. We draw both on one map.",
          "We name a hall only when we have already stood on it. Serenova Banquet is one such floor on this corridor. If your date is in another hall, we still run the production. We do not publish a venue catalogue we have not worked. If you already hold a slot, send the hall name and the hours. If you do not, send the dates and the functions. We will say which room is honest, including when a hall is waste and the society lawn is the kinder floor.",
        ],
      },
      {
        heading: "From sakhar pud to reception",
        paragraphs: [
          "The week has a spine. Sakhar pud or a ring ceremony often comes first — sometimes months earlier, sometimes the week of the wedding. It may sit in a Nanded City flat or on a lawn when the list is the two families, or in a Sinhgad Road banquet when it has already become a wedding-scale night. The [[/events/engagements|engagement and sakhar pud planner]] is that evening. Stage, floral, the ring moment, a host, and a peak, so the night is not a blur of vendors.",
          "Then the wedding week itself. A haldi or a puja close to the family. Mehendi, with a floor people can sit on for hours. Sangeet, if the families want a dance night with a start and a close. Ceremony, paced for the priest and the elders. Reception, which is the hall most guests will remember. Not every house holds every function. A Maharashtrian lagna may not want a sangeet. A North Indian week often does. We sequence what you named, and we do not add a function to fill a brochure.",
          "The point of one file from sakhar pud to reception is that décor, food, music, and the host do not reset every morning. Colours can change. The crew does not. The family greets people. We hold the run of show: who enters, when the meal opens, when the mic is allowed, when the hall must be clear.",
        ],
      },
      {
        heading: "Multi-day functions",
        paragraphs: [
          "A multi-day wedding on this road usually splits across floors. Mehendi or haldi in a Nanded City home, clubhouse, or society lawn. Ceremony and reception in a banquet on Sinhgad Road. A lunch the next day back in the township. Each floor has its own rules — a society curfew, a hall load-out, a priest who will not be rushed — and one person has to know all three. That person is the house, not a group chat of decorators.",
          "Guest flow is the quiet work: shoes, elder seating, how the two families enter, and who is not holding the playlist. We write it down so the day is not invented at the door.",
          "Music, invitations, and food travel with the functions. A mehendi card has to carry the building and the hour the lawn closes. A reception card has to carry the hall and the slot. Catering has to survive a ceremony that runs long, with a menu the elders trust — Jain, satvik, Maharashtrian, North Indian, or South Indian. We do not print prices on this page. The estimate names the meal as its own line.",
          "Show-calling is what makes a multi-day week feel like one wedding. The same standard on a Tuesday mehendi and a Sunday reception: professional execution, clear communication, on-time delivery. You should not be the person collecting vendors between functions.",
        ],
      },
      {
        heading: "Maharashtrian, North Indian, and South Indian themes",
        paragraphs: [
          "This corridor sees all three, often in one week when the two families do not share a custom. We do not invent a fusion look. We dress each function in the language that family already speaks, and we link the theme to the ritual instead of laying it on top.",
          "A [[/themes/maharashtrian|Maharashtrian wedding and event theme]] asks for mundavalya, paithani colour, marigold, brass, and a meal elders trust. Lagna, a sakhar pud, a munj the same season — the objects change, the discipline does not. Haldi stays close to the family. Dhol-tasha is optional, and only when the society or the hall allows it.",
          "A [[/themes/north-indian|North Indian wedding and event theme]] asks for a dense floral mandap, a mehendi floor, a sangeet that actually dances, and pheras with a path the priest can use. Families near Sinhgad Road host many of these weeks. The mandap in a banquet is not the same build as a ring ceremony in a Nanded City flat, and it is the same design file.",
          "A [[/themes/south-indian|South Indian wedding and event theme]] asks for jasmine, silk, banana leaf, temple lines, and a pace the priest can hold. Ceremony time is not a gap before the DJ. We leave it. A satvik meal is a satvik meal when that is the ask.",
          "Tell us the families, not a board of six cities. If one function is Maharashtrian and the reception is North Indian, say so on the first call. The theme pages are the look. This guide is the week those looks have to survive.",
        ],
      },
      {
        heading: "An itemised estimate, with no figure on this page",
        paragraphs: [
          "We do not publish a rate card, a package price, or a per-plate number here. An itemised estimate is a list of what the week includes, written after we know the halls, the functions, and the guest list — not before. You should be able to read it and see the work, line by line.",
          "Typical lines, named rather than priced on this page: the venue hold, if you asked us to find the hall; décor for each function, separately, so a mehendi at home is not hidden inside a reception stage; floral; the ritual map and the priest's requirements we have to build around; catering as its own line; invitations; music or a DJ; a host where the night needs one; dance or games if they are in the brief; and show-calling, load-in, and load-out. If a line is not in your week, it is not on the estimate.",
          "The figure comes after the list, in the estimate we send once the rooms are real. We do not fold six vendors into one number you cannot open, and we do not publish reviews, awards, or prices on this page.",
        ],
      },
      {
        heading: "What to send first",
        paragraphs: [
          "WhatsApp +91 89757 60707, or the plan form. Someone from the house replies in Marathi, Hindi, or English. Send the dates, including sakhar pud if it is still ahead, the functions you want, roughly who is invited, and whether you already have a hall on Sinhgad Road or a home in Nanded City. If a custom is Maharashtrian, North Indian, South Indian, or a mix, say that in the same message.",
          "We come back with slot questions, a theme direction, and an itemised estimate once the rooms are clear. You lock the brief. A wedding team takes the file. You greet guests. We run the floor.",
          "The [[/events/marriages|wedding page]] is the short list of what sits in the plan. The [[/events/engagements|engagement page]] is the sakhar pud or ring ceremony when that evening stands alone. The [[/locations/nanded-city-pune|Nanded City page]] is the township end of the same road. If you only know the month and the two families, that is enough to begin.",
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
