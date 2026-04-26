"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "@/components/motion";
import { IMAGES, nav } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-xl">
      <div className="inner flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src={IMAGES.logo} alt="Skale Fitness" width={126} height={44} priority />
          <span className="sr-only">Skale Fitness</span>
        </Link>
        <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.22em] text-[#d7d3c7] lg:flex">
          {nav.map((item) => (
            <Link className="transition hover:text-white" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden bg-[#ffb000] px-5 py-3 text-xs font-black uppercase tracking-[0.2em] text-black transition hover:bg-[#d7ff2f] lg:inline-flex"
        >
          Free pass
        </Link>
        <button
          className="grid h-11 w-11 place-items-center border border-white/20 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className="display text-xl">{open ? "X" : "="}</span>
        </button>
      </div>
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          className="border-t border-white/10 bg-black px-4 py-6 lg:hidden"
        >
          <nav className="grid gap-4 text-sm font-semibold uppercase tracking-[0.2em]">
            {nav.map((item) => (
              <Link
                className="border-b border-white/10 py-3 text-[#ddd8cb]"
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      ) : null}
    </header>
  );
}
