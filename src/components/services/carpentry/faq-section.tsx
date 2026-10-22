"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Phone } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function CarpentryFaqSection() {
  const content = {
  intro:
    "Still have questions? Our team can help you understand repair options, custom woodwork solutions, structural concerns, and what to expect during your carpentry project.",

  items: [
    {
      q: "What are carpentry services?",
      a: "Carpentry services include building, repairing, and installing wood structures in residential and commercial properties. These services range from structural framing and repairs to custom woodwork and finish carpentry.",
    },
    {
      q: "What does a carpenter do?",
      a: "A carpenter works on framing, repairs, trim installation, decking, custom woodwork, and other structural or decorative woodworking projects designed to improve a property's function and appearance.",
    },
    {
      q: "How long does carpentry work last?",
      a: "High-quality carpentry can last for decades when properly installed, maintained, and protected from excessive moisture, weather exposure, and pest damage.",
    },
    {
      q: "Can damaged wood be repaired?",
      a: "Yes. Many damaged wood structures can be repaired without complete replacement when issues such as rot, water damage, or deterioration are identified early.",
    },
    {
      q: "What is finish carpentry?",
      a: "Finish carpentry includes decorative and detailed woodwork such as trim, molding, baseboards, crown molding, door casings, and other interior finishing elements that enhance a property's appearance.",
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
