"use client";

import { useState } from "react";
import { events } from "@/lib/events";
import { whatsappHref } from "@/lib/site";

const places = [
  "At home — Nanded City",
  "Society lawn / clubhouse — Nanded City",
  "Banquet / marriage hall — Sinhgad Road",
  "Other nearby banquet hall",
  "Not decided yet",
] as const;

const budgets = [
  "Under ₹1 lakh",
  "₹1–3 lakh",
  "₹3–7 lakh",
  "₹7 lakh and above",
  "Prefer to discuss",
] as const;

const traditions = [
  "Maharashtrian",
  "North Indian",
  "South Indian",
  "Mixed / undecided",
] as const;

export function PlanForm() {
  const [name, setName] = useState("");
  const [eventType, setEventType] = useState(events[0]?.name ?? "Birthday");
  const [tradition, setTradition] = useState<(typeof traditions)[number] | "">("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [place, setPlace] = useState<(typeof places)[number] | "">("");
  const [budget, setBudget] = useState<(typeof budgets)[number] | "">("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const href = whatsappHref(
    [
      "Hello Sonali Events, I would like to plan a celebration near Nanded City / Sinhgad Road.",
      name && `Name: ${name}`,
      `Event: ${eventType}`,
      tradition && `Tradition: ${tradition}`,
      date && `Date: ${date}`,
      guests && `Guests: ${guests}`,
      place && `Function at: ${place}`,
      budget && `Budget: ${budget}`,
      phone && `WhatsApp: ${phone}`,
      notes && `Notes: ${notes}`,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  return (
    <form
      className="grid gap-5"
      onSubmit={(event) => {
        event.preventDefault();
        window.open(href, "_blank", "noopener,noreferrer");
      }}
    >
      <label className="grid gap-2 text-[0.7rem] tracking-[0.16em] uppercase">
        Your name
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border-b border-ink/20 bg-transparent py-3 text-base tracking-normal normal-case outline-none transition-colors focus:border-garnet"
        />
      </label>
      <label className="grid gap-2 text-[0.7rem] tracking-[0.16em] uppercase">
        Event
        <select
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          className="border-b border-ink/20 bg-transparent py-3 text-base tracking-normal normal-case outline-none transition-colors focus:border-garnet"
        >
          {events.map((item) => (
            <option key={item.slug}>{item.name}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-[0.7rem] tracking-[0.16em] uppercase">
        Tradition
        <select
          value={tradition}
          onChange={(e) =>
            setTradition(e.target.value as (typeof traditions)[number] | "")
          }
          className="border-b border-ink/20 bg-transparent py-3 text-base tracking-normal normal-case outline-none transition-colors focus:border-garnet"
        >
          <option value="">Select</option>
          {traditions.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-[0.7rem] tracking-[0.16em] uppercase">
          Date
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border-b border-ink/20 bg-transparent py-3 text-base tracking-normal normal-case outline-none transition-colors focus:border-garnet"
          />
        </label>
        <label className="grid gap-2 text-[0.7rem] tracking-[0.16em] uppercase">
          Guests
          <input
            inputMode="numeric"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            placeholder="80"
            className="border-b border-ink/20 bg-transparent py-3 text-base tracking-normal normal-case outline-none transition-colors focus:border-garnet"
          />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-[0.7rem] tracking-[0.16em] uppercase">
          Function at
          <select
            value={place}
            onChange={(e) => setPlace(e.target.value as (typeof places)[number] | "")}
            className="border-b border-ink/20 bg-transparent py-3 text-base tracking-normal normal-case outline-none transition-colors focus:border-garnet"
          >
            <option value="">Select</option>
            {places.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-[0.7rem] tracking-[0.16em] uppercase">
          Budget
          <select
            value={budget}
            onChange={(e) =>
              setBudget(e.target.value as (typeof budgets)[number] | "")
            }
            className="border-b border-ink/20 bg-transparent py-3 text-base tracking-normal normal-case outline-none transition-colors focus:border-garnet"
          >
            <option value="">Prefer to discuss</option>
            {budgets.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-[0.7rem] tracking-[0.16em] uppercase">
        WhatsApp number
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+91"
          className="border-b border-ink/20 bg-transparent py-3 text-base tracking-normal normal-case outline-none transition-colors focus:border-garnet"
        />
      </label>
      <label className="grid gap-2 text-[0.7rem] tracking-[0.16em] uppercase">
        Anything we should know
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={4}
          className="border-b border-ink/20 bg-transparent py-3 text-base tracking-normal normal-case outline-none transition-colors focus:border-garnet"
        />
      </label>
      <button
        type="submit"
        className="pressable cta-label mt-4 w-full rounded-full bg-wa px-8 py-3 text-white transition hover:bg-wa-bright sm:w-auto sm:justify-self-start"
      >
        Plan on WhatsApp
      </button>
    </form>
  );
}
