"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Phone } from "lucide-react";
import { useState } from "react";

import { siteConfig } from "@/config/site";

export function GuttersFaqSection() {
  const content = {
    intro:
      "Find answers to common questions about gutter installation, repair, cleaning, and replacement services.",

    items: [
      {
        q: "What do gutter services include?",
        a: "Gutter services include installation, repair, cleaning, and replacement of roof drainage systems.",
      },
      {
        q: "How often should gutters be cleaned?",
        a: "Most gutters should be cleaned at least twice a year, especially in spring and fall.",
      },
      {
        q: "What happens if gutters are not maintained?",
        a: "Blocked gutters can cause roof leaks, foundation damage, mold growth, and basement flooding.",
      },
      {
        q: "How long do gutters last?",
        a: "Depending on material, gutters typically last 15–30 years.",
      },
      {
        q: "What is the best gutter material?",
        a: "Aluminum and seamless gutters are most popular due to durability and low maintenance.",
      },
      {
        q: "Can gutters be repaired instead of replaced?",
        a: "Yes, minor issues like leaks or loose sections can often be repaired.",
      },
    ],
  };
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-stone-100 text-black py-14 px-6 border-t border-stone-200">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-20 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <div className="lg:sticky lg:top-28">
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary"><span className="h-px w-6 bg-primary" />FAQ</p>
            <h2 className="mb-7 font-serif text-[clamp(32px,3.5vw,48px)] leading-snug text-black">Common<br /><em className="text-primary italic">Questions</em></h2>
            <div className="mx-0 mb-7 h-px w-24 bg-linear-to-r from-primary to-primary/30" />
            <p className="mb-8 text-sm leading-loose font-medium text-black">{content.intro}</p>
            <motion.a
              href={`tel:${siteConfig.phones.english}`}
              initial="rest"
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              variants={{
                rest: { scale: 1, y: 0 },
                hover: {
                  scale: 1.025,
                  y: -2,
                  transition: { type: "spring", stiffness: 400, damping: 20 },
                },
              }}
              className="inline-flex h-12 items-center justify-center gap-2.5 rounded-xl border border-primary/35 bg-[color-mix(in_srgb,var(--color-primary)_10%,white)] px-6 text-sm font-medium text-primary shadow-xs transition-all duration-200 hover:bg-[color-mix(in_srgb,var(--color-primary)_16%,white)] hover:border-primary/50 hover:shadow-md hover:shadow-primary/15"
            >
              <motion.span
                variants={{
                  rest: { rotate: 0, scale: 1 },
                  hover: {
                    rotate: [0, -14, 14, -10, 10, -5, 5, 0],
                    scale: 1.15,
                    transition: { duration: 0.6, ease: "easeInOut" },
                  },
                }}
                className="inline-flex items-center justify-center"
              >
                <Phone size={15} />
              </motion.span>
              <span>Speak with a Specialist</span>
            </motion.a>
          </div>
        </div>
        <div className="flex flex-col gap-0">
          {content.items.map((item, i) => (
            <div key={item.q} className="border-b border-stone-200/90">
              <button onClick={() => setActiveIndex(activeIndex === i ? null : i)} className="flex w-full cursor-pointer items-center justify-between gap-4 bg-transparent py-6 text-left">
                <span className={["font-serif text-lg transition-colors duration-200", activeIndex === i ? "text-primary" : "text-black"].join(" ")}>{item.q}</span>
                <motion.div animate={{ rotate: activeIndex === i ? 90 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronRight size={18} className={activeIndex === i ? "text-primary" : "font-medium text-black"} />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {activeIndex === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                    <p className="pb-6 text-sm leading-loose font-medium text-black">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
