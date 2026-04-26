"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "@/components/motion";
import { programs } from "@/lib/content";

export function ProgramRail() {
  return (
    <section className="section-pad border-y hairline bg-[#0c0c0b]">
      <div className="inner">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d7ff2f]">
              Programs
            </p>
            <h2 className="display mt-5 text-5xl font-bold leading-[0.95] text-white sm:text-7xl">
              Every training style has a lane.
            </h2>
          </div>
          <Link
            href="/programs"
            className="w-fit border border-white/25 px-5 py-3 text-xs font-black uppercase tracking-[0.2em] transition hover:border-white hover:bg-white hover:text-black"
          >
            View all programs
          </Link>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden border hairline bg-white/10 lg:grid-cols-3">
          {programs.slice(0, 6).map((program, index) => (
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.04, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative min-h-[360px] overflow-hidden bg-black"
              key={program.title}
            >
              <Image
                src={program.image}
                alt={program.title}
                fill
                className="object-cover opacity-50 grayscale transition duration-700 group-hover:scale-105 group-hover:opacity-82 group-hover:grayscale-0"
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-[#ffb000]">
                  {program.mode}
                </p>
                <h3 className="display mt-3 text-4xl font-bold text-white">
                  {program.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#d8d5cc]">
                  {program.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
