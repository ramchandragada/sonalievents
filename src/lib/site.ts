export const site = {
  name: "Sonali Events",
  domain: "www.sonali.events",
  url: "https://www.sonali.events",
  tagline: "You live the day. We hold it.",
  proprietor: "Mrs Sonali Rahul Upagnalawar",
  founderShort: "Sonali Upagnalawar",
  role: "Founder",
  city: "Pune",
  address: "Nanded City, Sinhgad Road, Pune",
  baseLine: "Nanded City · Sinhgad Road · nearby Pune",
  phoneDisplay: "+91 89757 60707",
  phoneTel: "+918975760707",
  whatsapp: "https://wa.me/918975760707",
  googlePlaceId: "ChIJ20JKVwCVwjsRRvZm-_QAntE",
  googleReview:
    "https://search.google.com/local/writereview?placeid=ChIJ20JKVwCVwjsRRvZm-_QAntE",
  googleMaps:
    "https://www.google.com/maps/place/?q=place_id:ChIJ20JKVwCVwjsRRvZm-_QAntE",
  languagesSpoken: ["Marathi", "Hindi", "English"] as const,
  siteLanguage: "English",
  eventsDelivered: "1,000+",
  years: "3",
  houseLine:
    "An event house based at Nanded City and Sinhgad Road, with experienced teams for the celebrations we hold.",
  honestLine:
    "Photographs and films on this site are from days we held. We do not publish reviews, awards, or social pages we do not have.",
  oneWindowLine:
    "Tell us the date, the tradition, the guest count, and where the function is — at home, society lawn, or banquet hall. We hold the rest: venue, décor, food, invitations, music, dance, games, and show-calling.",
} as const;

export function whatsappHref(message?: string) {
  if (!message) return site.whatsapp;
  return `${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/themes", label: "Themes" },
  { href: "/way", label: "The Sonali way" },
  { href: "/about", label: "About" },
] as const;

export const steps = [
  {
    n: "01",
    title: "Enquire",
    body: "WhatsApp or the form. Someone from the house replies — in Marathi, Hindi, or English.",
  },
  {
    n: "02",
    title: "Discover",
    body: "Budget, tradition, guest count, and the look and feel you want on the day.",
  },
  {
    n: "03",
    title: "Design",
    body: "Venue options near Nanded City and Sinhgad Road, a theme board, and a clear estimate. Maharashtrian, North Indian, or South Indian.",
  },
  {
    n: "04",
    title: "Lock",
    body: "You lock the date and the brief. A team takes your kind of event.",
  },
  {
    n: "05",
    title: "Produce",
    body: "Décor, food, music, invitations, dance, games — one WhatsApp group, no vendor chase.",
  },
  {
    n: "06",
    title: "Deliver",
    body: "Show-calling on the day. You greet guests. We run the floor.",
  },
] as const;

export const scope = [
  "Venue",
  "Decoration",
  "Food",
  "Invitations",
  "Music",
  "Dance",
  "Party games",
  "Show calling",
] as const;
