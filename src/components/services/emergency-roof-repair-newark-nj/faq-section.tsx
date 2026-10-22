"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Phone } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function EmergencyRepairFaqSection() {
  const content = {
  intro:
    "Find answers to common questions about emergency roof repair, storm damage response, roof leaks, insurance claims, and urgent roofing services in Newark and Essex County.",

  items: [
    {
      q: "What qualifies as an emergency roof repair?",
      a: "Emergency roof repair is required when roof damage creates an immediate risk of water intrusion, structural instability, safety hazards, or significant property damage.",
    },
    {
      q: "How quickly should a leaking roof be repaired?",
      a: "A leaking roof should be addressed as soon as possible. Even a small leak can cause extensive water damage if left untreated.",
    },
    {
      q: "How much does emergency roof repair cost in Newark NJ?",
      a: "Costs vary depending on the severity of the damage, roofing materials involved, and the repairs required. Emergency services can range from a few hundred dollars to several thousand dollars.",
    },
    {
      q: "Can a roof leak wait until morning?",
      a: "If water is actively entering your home, immediate action is recommended. Delaying repairs can increase damage to ceilings, walls, insulation, and electrical systems.",
    },
    {
      q: "Does insurance cover emergency roof repairs?",
      a: "Many homeowners insurance policies cover sudden storm-related roof damage, but coverage varies by policy and circumstances.",
    },
    {
      q: "What should I do if my roof starts leaking during a storm?",
      a: "Move valuables away from affected areas, contain the water if possible, and contact an emergency roofing contractor as soon as it is safe to do so.",
    },
    {
      q: "How long does emergency roof repair take?",
      a: "Temporary emergency repairs can often be completed within hours, while permanent repairs depend on the extent of the damage and weather conditions.",
    },
    {
      q: "Do I need a roof tarp after storm damage?",
      a: "Roof tarping is often recommended when the roof has exposed areas or active leaks that cannot be permanently repaired immediately.",
    },
    {
      q: "When should I call an emergency roofer?",
      a: "You should call immediately if your roof is leaking, has suffered storm damage, is structurally compromised, or has exposed decking.",
    },
    {
      q: "Can a damaged roof cause structural problems?",
      a: "Yes. Ongoing water intrusion can weaken roof decking, framing components, insulation, and interior building materials.",
    },
  ],
};
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-black text-white py-20 px-6 border-t border-white/10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-20 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <div className="lg:sticky lg:top-28">
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary"><span className="h-px w-6 bg-secondary" />FAQ</p>
            <h2 className="mb-7 font-serif text-[clamp(32px,3.5vw,48px)] leading-snug font-bold text-white">Common<br /><em className="text-secondary italic">Questions</em></h2>
            <div className="mx-0 mb-7 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />
            <p className="mb-8 text-sm leading-loose text-stone-600">{content.intro}</p>
            <Button asChild variant="outline" className="h-12 border-secondary/40 px-6 text-sm text-secondary hover:bg-secondary/10 hover:text-secondary"><a href={`tel:${siteConfig.phones.english}`}><Phone size={14} className="mr-2 inline-block" />Speak with a Specialist</a></Button>
          </div>
        </div>
        <div className="flex flex-col gap-0">
          {content.items.map((item, i) => (
            <div key={item.q} className="border-b border-stone-200/90">
              <button onClick={() => setActiveIndex(activeIndex === i ? null : i)} className="flex w-full cursor-pointer items-center justify-between gap-4 bg-transparent py-6 text-left">
                <span className={["font-serif text-lg transition-colors duration-200", activeIndex === i ? "text-secondary" : "text-stone-900"].join(" ")}>{item.q}</span>
                <motion.div animate={{ rotate: activeIndex === i ? 90 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronRight size={18} className={activeIndex === i ? "text-secondary" : "text-stone-600"} />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {activeIndex === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
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
