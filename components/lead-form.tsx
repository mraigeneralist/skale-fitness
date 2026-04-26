"use client";

import { FormEvent, useState } from "react";
import { locations } from "@/lib/content";

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border hairline bg-[#0b0b0a] p-8">
        <p className="text-xs uppercase tracking-[0.25em] text-[#d7ff2f]">
          Request received
        </p>
        <h2 className="display mt-4 text-5xl font-bold text-white">
          Your free-pass request is staged.
        </h2>
        <p className="mt-5 text-sm leading-7 text-[#b9b6ad]">
          The production version can connect this handler to CRM, email, or
          WhatsApp routing. For now, the form is validated and confirmed in the
          browser.
        </p>
        <button
          className="mt-8 bg-[#ffb000] px-5 py-3 text-xs font-black uppercase tracking-[0.2em] text-black"
          onClick={() => setSubmitted(false)}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      className="grid gap-5 border hairline bg-[#0b0b0a] p-6 sm:p-8"
      onSubmit={onSubmit}
    >
      <label className="grid gap-2 text-sm text-[#d8d5cc]">
        Nearby club
        <select
          className="h-12 border border-white/15 bg-black px-4 text-white outline-none focus:border-[#ffb000]"
          required
          defaultValue=""
        >
          <option value="" disabled>
            Choose a nearby club
          </option>
          {locations.map((location) => (
            <option value={location.name} key={location.name}>
              {location.name}
            </option>
          ))}
        </select>
      </label>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-[#d8d5cc]">
          First name
          <input
            className="h-12 border border-white/15 bg-black px-4 text-white outline-none focus:border-[#ffb000]"
            name="firstName"
            required
            autoComplete="given-name"
          />
        </label>
        <label className="grid gap-2 text-sm text-[#d8d5cc]">
          Last name
          <input
            className="h-12 border border-white/15 bg-black px-4 text-white outline-none focus:border-[#ffb000]"
            name="lastName"
            required
            autoComplete="family-name"
          />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-[#d8d5cc]">
          Email
          <input
            className="h-12 border border-white/15 bg-black px-4 text-white outline-none focus:border-[#ffb000]"
            type="email"
            name="email"
            required
            autoComplete="email"
          />
        </label>
        <label className="grid gap-2 text-sm text-[#d8d5cc]">
          Phone
          <input
            className="h-12 border border-white/15 bg-black px-4 text-white outline-none focus:border-[#ffb000]"
            type="tel"
            name="phone"
            required
            pattern="[0-9()+#*.\\-\\s]+"
            autoComplete="tel"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm text-[#d8d5cc]">
        Membership number
        <input
          className="h-12 border border-white/15 bg-black px-4 text-white outline-none focus:border-[#ffb000]"
          name="membership"
          placeholder="Optional"
        />
      </label>
      <label className="grid gap-2 text-sm text-[#d8d5cc]">
        Message
        <textarea
          className="min-h-32 border border-white/15 bg-black px-4 py-3 text-white outline-none focus:border-[#ffb000]"
          name="message"
          placeholder="Tell us your goal or preferred timing."
        />
      </label>
      <button className="bg-[#ffb000] px-6 py-4 text-xs font-black uppercase tracking-[0.2em] text-black transition hover:bg-[#d7ff2f]">
        Submit request
      </button>
    </form>
  );
}
