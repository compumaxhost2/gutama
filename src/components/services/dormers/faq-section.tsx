"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Phone } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function DormersFaqSection() {
  const content = {
    intro:
      "Get answers to common questions about dormer construction, permitting requirements, project timelines, and long-term benefits.",

    items: [
      {
        q: "What is a dormer used for?",
        a: "A dormer is used to add space, natural light, and ventilation by extending a roof vertically.",
      },
      {
        q: "Does a dormer increase home value?",
        a: "Yes. Dormers typically increase property value by adding usable square footage and improving home design.",
      },
      {
        q: "How much does a dormer cost in New Jersey?",
        a: "Dormer cost depends on size, design, structural changes, and materials. A professional inspection is required for accurate pricing.",
      },
      {
        q: "How long does dormer installation take?",
        a: "Most dormer projects take several weeks depending on complexity, permits, and weather conditions.",
      },
      {
        q: "Do dormers require permits in New Jersey?",
        a: "Yes. Dormer construction typically requires permits and inspections to meet local building codes.",
      },
      {
        q: "Can any house have a dormer added?",
        a: "Most homes can support dormers, but a structural evaluation is required before installation.",
      },
    ],
  };
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#dfd0c0] text-black py-14 px-6 border-t border-stone-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-20 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <div className="lg:sticky lg:top-28">
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary"><span className="h-px w-6 bg-primary" />FAQ</p>
            <h2 className="mb-7 font-serif text-[clamp(32px,3.5vw,48px)] leading-snug text-black">Common<br /><em className="text-primary italic">Questions</em></h2>
            <div className="mx-0 mb-7 h-px w-24 bg-linear-to-r from-primary to-primary/30" />
            <p className="mb-8 text-sm leading-loose font-medium text-black">{content.intro}</p>
            <Button asChild variant="outline" className="h-12 border-primary/40 px-6 text-sm text-primary hover:bg-primary/10 hover:text-primary"><a href={`tel:${siteConfig.phones.english}`}><Phone size={14} className="mr-2 inline-block" />Speak with a Specialist</a></Button>
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
