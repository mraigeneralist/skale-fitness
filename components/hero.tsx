"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "@/components/motion";
import { IMAGES } from "@/lib/content";

export function Hero() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 500], [1, 1.06]);
  const y = useTransform(scrollY, [0, 500], [0, 38]);

  return (
    <section className="noise relative min-h-[100svh] overflow-hidden bg-black">
      <motion.div className="absolute inset-0" style={{ scale, y }}>
        <Image
          src={IMAGES.hero}
          alt="Skale Fitness gym floor"
          fill
          priority
          sizes="100vw"
          className="object-contain object-top opacity-78 sm:object-[center_top]"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92),rgba(0,0,0,0.55),rgba(0,0,0,0.18)),linear-gradient(0deg,rgba(0,0,0,0.88),transparent_54%),linear-gradient(180deg,rgba(0,0,0,0.6),transparent_22%)]" />
      <div className="relative z-10 flex min-h-[100svh] items-end pt-24">
        <div className="inner pb-16 sm:pb-20">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-xs font-bold uppercase tracking-[0.35em] text-[#ffb000]"
          >
            Skale Fitness Unlimited
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.7 }}
            className="display mt-5 max-w-4xl text-6xl font-bold leading-[0.88] text-white sm:text-8xl lg:text-9xl"
          >
            Chennai trains at a higher frequency.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.65 }}
            className="mt-7 max-w-xl text-base leading-8 text-[#e0ddd4] sm:text-lg"
          >
            Premium strength floors, cardio, group classes, and expert coaching
            across a Chennai-first fitness chain.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.65 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Link
              href="/contact"
              className="bg-[#ffb000] px-6 py-4 text-xs font-black uppercase tracking-[0.2em] text-black transition hover:bg-[#d7ff2f]"
            >
              Claim free pass
            </Link>
            <Link
              href="/programs"
              className="border border-white/25 px-6 py-4 text-xs font-black uppercase tracking-[0.2em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Explore training
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
