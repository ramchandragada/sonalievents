import { work } from "./work-picks";

export const caseStudies = [
  {
    title: "Unicorn birthday",
    place: "Nanded City home",
    href: "/events/birthdays",
    image: work.birthdayUnicorn,
  },
  {
    title: "Ayaan's birthday",
    place: "Pune",
    href: "/events/birthdays",
    image: work.birthdayAyaan,
  },
  {
    title: "Naming ceremony",
    place: "Namkaran · Barsa",
    href: "/events/naming-ceremony",
    image: work.namingPrincess,
  },
  {
    title: "Roka",
    place: "Engagement",
    href: "/events/engagements",
    image: work.roka,
  },
  {
    title: "Serenova Banquet",
    place: "Sinhgad Road",
    href: "/gallery",
    image: work.banquetDoor,
  },
  {
    title: "Housewarming",
    place: "Gruha pravesh",
    href: "/events/housewarming",
    image: work.houseGarlands,
  },
] as const;
