"use client";

import { useState } from "react";
import { whatsappHref } from "@/lib/site";

export function InquiryBar() {
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [room, setRoom] = useState("");

  function openWhatsApp() {
    const lines = [
      "Hello Sonali Events, I would like to plan a celebration near Nanded City / Sinhgad Road.",
      date && `Date: ${date}`,
      guests && `Guests: ${guests}`,
      room && `Room: ${room}`,
    ].filter(Boolean);
    window.open(whatsappHref(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      className="mx-auto grid max-w-7xl grid-cols-2 gap-3 bg-paper p-3 sm:grid-cols-[1fr_1fr_1fr_auto] sm:items-end md:p-5"
      onSubmit={(event) => {
        event.preventDefault();
        openWhatsApp();
      }}
    >
      <label className="grid gap-1.5 text-[0.65rem] tracking-[0.18em] uppercase">
        Date
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border-b border-ink/20 bg-transparent py-2 text-base tracking-normal normal-case outline-none"
        />
      </label>
      <label className="grid gap-1.5 text-[0.65rem] tracking-[0.18em] uppercase">
        Guests
        <input
          inputMode="numeric"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          placeholder="80"
          className="border-b border-ink/20 bg-transparent py-2 text-base tracking-normal normal-case outline-none"
        />
      </label>
      <label className="col-span-2 grid gap-1.5 text-[0.65rem] tracking-[0.18em] uppercase sm:col-span-1">
        Home or hall
        <select
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          className="border-b border-ink/20 bg-transparent py-2 text-base tracking-normal normal-case outline-none"
        >
          <option value="">Not sure yet</option>
          <option value="Home / society">Home / society</option>
          <option value="Sinhgad Road hall">Sinhgad Road hall</option>
          <option value="Nanded City clubhouse">Nanded City clubhouse</option>
        </select>
      </label>
      <button
        type="submit"
        className="col-span-2 rounded-full bg-garnet px-6 py-3 text-[0.68rem] tracking-[0.2em] text-paper uppercase sm:col-span-1"
      >
        WhatsApp us
      </button>
    </form>
  );
}
