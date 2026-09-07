"use client";

import { useState } from "react";
import { events } from "@/lib/events";
import { whatsappHref } from "@/lib/site";

export function PlanForm() {
  const [name, setName] = useState("");
  const [eventType, setEventType] = useState(events[0]?.name ?? "Birthday");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [notes, setNotes] = useState("");

  const href = whatsappHref(
    [
      "Hello Sonali Events, I would like to plan a celebration.",
      name && `Name: ${name}`,
      `Event: ${eventType}`,
      date && `Date: ${date}`,
      guests && `Guests: ${guests}`,
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
        className="mt-4 justify-self-start rounded-full bg-garnet px-8 py-3 text-[0.72rem] tracking-[0.2em] text-ivory uppercase"
      >
        Send on WhatsApp
      </button>
    </form>
  );
}
