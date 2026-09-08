"use client";

import { useState } from "react";
import { events } from "@/lib/events";
import { whatsappHref } from "@/lib/site";

const rooms = [
  "Home / society in Nanded City",
  "Sinhgad Road hall",
  "Other nearby hall",
  "Not sure yet",
] as const;

const budgets = [
  "Under ₹1 lakh",
  "₹1–3 lakh",
  "₹3–7 lakh",
  "₹7 lakh and above",
  "Prefer to discuss",
] as const;

const rituals = [
  "Maharashtrian",
  "North Indian",
  "South Indian",
  "Mixed / undecided",
] as const;

export function PlanForm() {
  const [name, setName] = useState("");
  const [eventType, setEventType] = useState(events[0]?.name ?? "Birthday");
  const [ritual, setRitual] = useState<(typeof rituals)[number] | "">("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [room, setRoom] = useState<(typeof rooms)[number] | "">("");
  const [budget, setBudget] = useState<(typeof budgets)[number] | "">("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const href = whatsappHref(
    [
      "Hello Sonali Events, I would like to plan a celebration near Nanded City / Sinhgad Road.",
      name && `Name: ${name}`,
      `Event: ${eventType}`,
      ritual && `Ritual / theme: ${ritual}`,
      date && `Date: ${date}`,
      guests && `Guests: ${guests}`,
      room && `Room: ${room}`,
      budget && `Budget band: ${budget}`,
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
          className="border-b border-ink/20 bg-transparent py-3 text-base tracking-normal normal-case outline-none"
        />
      </label>
      <label className="grid gap-2 text-[0.7rem] tracking-[0.16em] uppercase">
        Event
        <select
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          className="border-b border-ink/20 bg-transparent py-3 text-base tracking-normal normal-case outline-none"
        >
          {events.map((item) => (
            <option key={item.slug}>{item.name}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-[0.7rem] tracking-[0.16em] uppercase">
        Ritual / theme
        <select
          value={ritual}
          onChange={(e) => setRitual(e.target.value as (typeof rituals)[number] | "")}
          className="border-b border-ink/20 bg-transparent py-3 text-base tracking-normal normal-case outline-none"
        >
          <option value="">Select</option>
          {rituals.map((item) => (
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
            className="border-b border-ink/20 bg-transparent py-3 text-base tracking-normal normal-case outline-none"
          />
        </label>
        <label className="grid gap-2 text-[0.7rem] tracking-[0.16em] uppercase">
          Guests
          <input
            inputMode="numeric"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            placeholder="80"
            className="border-b border-ink/20 bg-transparent py-3 text-base tracking-normal normal-case outline-none"
          />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-[0.7rem] tracking-[0.16em] uppercase">
          Home or hall
          <select
            value={room}
            onChange={(e) => setRoom(e.target.value as (typeof rooms)[number] | "")}
            className="border-b border-ink/20 bg-transparent py-3 text-base tracking-normal normal-case outline-none"
          >
            <option value="">Select</option>
            {rooms.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-[0.7rem] tracking-[0.16em] uppercase">
          Budget band
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value as (typeof budgets)[number] | "")}
            className="border-b border-ink/20 bg-transparent py-3 text-base tracking-normal normal-case outline-none"
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
          className="border-b border-ink/20 bg-transparent py-3 text-base tracking-normal normal-case outline-none"
        />
      </label>
      <label className="grid gap-2 text-[0.7rem] tracking-[0.16em] uppercase">
        Anything we should know
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={4}
          className="border-b border-ink/20 bg-transparent py-3 text-base tracking-normal normal-case outline-none"
        />
      </label>
      <button
        type="submit"
        className="mt-4 justify-self-start rounded-full bg-garnet px-8 py-3 text-[0.72rem] tracking-[0.2em] text-paper uppercase"
      >
        Send on WhatsApp
      </button>
    </form>
  );
}
