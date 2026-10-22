"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Phone } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const FAQS = {
  intro:
    "Find answers to common questions about home additions, permits, construction timelines, costs, and property value considerations.",

  items: [
    {
      q: "What is a home addition?",
      a: "A home addition is the process of expanding an existing home by building new rooms or structures attached to the property.",
    },
    {
      q: "How much does a home addition cost in New Jersey?",
      a: "Costs vary based on size, design, materials, and structural complexity. A professional estimate is required for accuracy.",
    },
    {
      q: "Do I need permits for a home addition in NJ?",
      a: "Yes, most home additions require permits and inspections under New Jersey building regulations.",
    },
    {
      q: "How long does a home addition take?",
      a: "Most projects take several weeks to several months depending on complexity and size.",
    },
    {
      q: "Does a home addition increase home value?",
      a: "Yes, home additions typically provide strong return on investment by increasing usable square footage.",
    },
    {
      q: "Can I live in my home during construction?",
      a: "In many cases yes, but it depends on the scale of the project.",
    },
  ],
}; 

export function AdditionsFaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-black text-white py-20 px-6 border-t border-white/10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-20 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <div className="lg:sticky lg:top-28">
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
              <span className="h-px w-6 bg-secondary" />
              FAQ
            </p>
            <h2 className="mb-7 font-serif text-[clamp(32px,3.5vw,48px)] leading-snug font-bold text-white">
              Common
              <br />
              <em className="text-secondary italic">Questions</em>
            </h2>
            <div className="mx-0 mb-7 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />
            <p className="mb-8 text-sm leading-loose text-stone-600">
              {FAQS.intro}
            </p>
            <Button asChild variant="outline" className="h-12 border-secondary/40 px-6 text-sm text-secondary hover:bg-secondary/10 hover:text-secondary">
              <a href={`tel:${siteConfig.phones.english}`}>
                <Phone size={14} className="mr-2 inline-block" />
                Speak with a Specialist
              </a>
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-0">
          {FAQS.items.map((item, i) => (
            <div key={item.q} className="border-b border-stone-200/90">
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 bg-transparent py-6 text-left"
              >
                <span className={["font-serif text-lg transition-colors duration-200", activeIndex === i ? "text-secondary" : "text-stone-900"].join(" ")}>
                  {item.q}
                </span>
                <motion.div animate={{ rotate: activeIndex === i ? 90 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronRight size={18} className={activeIndex === i ? "text-secondary" : "text-stone-600"} />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-sm leading-loose text-stone-600">{item.a}</p>
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
