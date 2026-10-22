"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Phone } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function FlatRoofFaqSection() {
  const content = {
    intro:
      "Find answers to common questions about flat roofing materials, repairs, replacements, maintenance, and commercial roofing systems in Newark and Essex County.",

    items: [
      {
        q: "What is the best flat roofing material?",
        a: "The best flat roofing material depends on your building and budget. TPO roofing is popular for energy efficiency, while EPDM roofing is valued for durability and affordability.",
      },
      {
        q: "How much does flat roofing cost in Newark NJ?",
        a: "Flat roofing costs vary based on roof size, material type, labor requirements, and building conditions. Most projects require a professional inspection for accurate pricing.",
      },
      {
        q: "How long does a flat roof last?",
        a: "Most flat roofing systems last between 20 and 40 years depending on the material, installation quality, and maintenance schedule.",
      },
      {
        q: "Is TPO better than EPDM roofing?",
        a: "TPO offers greater energy efficiency through reflective surfaces, while EPDM is known for flexibility and proven long-term durability. The best choice depends on your property's specific needs.",
      },
      {
        q: "What causes flat roof leaks?",
        a: "Common causes include membrane damage, flashing failures, ponding water, clogged drains, aging materials, and severe weather conditions.",
      },
      {
        q: "How often should a flat roof be inspected?",
        a: "Professional inspections are recommended at least twice per year and after major storms.",
      },
      {
        q: "Can a flat roof be repaired instead of replaced?",
        a: "Yes. Many flat roofing issues can be repaired if the underlying structure remains in good condition. A roofing inspection can determine the most cost-effective option.",
      },
      {
        q: "What are the signs of flat roof damage?",
        a: "Warning signs include leaks, standing water, cracks, blisters, membrane separation, interior water stains, and visible deterioration.",
      },
      {
        q: "Which flat roof is best for commercial buildings?",
        a: "TPO, EPDM, and PVC roofing systems are among the most popular commercial roofing solutions due to their durability and energy efficiency.",
      },
      {
        q: "Do flat roofs require more maintenance?",
        a: "Flat roofs require routine inspections and maintenance to ensure proper drainage and maximize lifespan, but modern roofing systems are designed for long-term performance.",
      },
    ],
  };

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#dfd0c0] text-black py-14 px-6 border-t border-stone-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-20 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <div className="lg:sticky lg:top-28">
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
              <span className="h-px w-6 bg-primary" />
              FAQ
            </p>

            <h2 className="mb-7 font-serif text-[clamp(32px,3.5vw,48px)] leading-snug text-black">
              Frequently Asked
              <br />
              <em className="text-primary italic">Questions</em>
            </h2>

            <div className="mx-0 mb-7 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

            <p className="mb-8 text-sm leading-loose font-medium text-black">
              {content.intro}
            </p>

            <Button
              asChild
              variant="outline"
              className="h-12 border-primary/40 px-6 text-sm text-primary hover:bg-primary/10 hover:text-primary"
            >
              <a href={`tel:${siteConfig.phones.english}`}>
                <Phone size={14} className="mr-2 inline-block" />
                Speak with a Roofing Specialist
              </a>
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-0">
          {content.items.map((item, i) => (
            <div key={item.q} className="border-b border-stone-200/90">
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === i ? null : i)
                }
                className="flex w-full cursor-pointer items-center justify-between gap-4 bg-transparent py-6 text-left"
              >
                <span
                  className={[
                    "font-serif text-lg transition-colors duration-200",
                    activeIndex === i
                      ? "text-primary"
                      : "text-black",
                  ].join(" ")}
                >
                  {item.q}
                </span>

                <motion.div
                  animate={{ rotate: activeIndex === i ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronRight
                    size={18}
                    className={
                      activeIndex === i
                        ? "text-primary"
                        : "font-medium text-black"
                    }
                  />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-sm leading-loose font-medium text-black">
                      {item.a}
                    </p>
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