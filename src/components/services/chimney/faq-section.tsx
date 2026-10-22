"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Phone } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function ChimneyFaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What are chimney services?",
      a: "Chimney services include inspection, cleaning, repair, waterproofing, and rebuilding of chimney systems to ensure safe operation and long-term performance.",
    },
    {
      q: "How often should a chimney be inspected?",
      a: "A chimney should be inspected at least once a year, especially before the winter heating season, to identify safety concerns and maintenance needs.",
    },
    {
      q: "What causes chimney leaks?",
      a: "Common causes include damaged flashing, cracked masonry, missing chimney caps, deteriorated crowns, and worn mortar joints that allow water infiltration.",
    },
    {
      q: "Can a damaged chimney be repaired?",
      a: "Yes. Most chimney issues, including cracks, leaks, deteriorated mortar joints, and masonry damage, can be repaired without requiring a full chimney replacement.",
    },
    {
      q: "Is chimney repair expensive?",
      a: "Repair costs vary depending on the severity of the damage. Minor repairs are typically affordable, while major structural repairs or full rebuilds require a larger investment.",
    },
  ];

  return (
    <section className="bg-stone-100 text-black py-14 px-6 border-t border-stone-200">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-20 lg:grid-cols-[1fr_1.6fr]">
        {/* LEFT */}
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
              Learn more about chimney inspections, repairs, maintenance, and
              the services we provide throughout Essex County, New Jersey.
            </p>

            <Button
              asChild
              variant="outline"
              className="h-12 border-primary/40 px-6 text-sm text-primary hover:bg-primary/10 hover:text-primary"
            >
              <a href={`tel:${siteConfig.phones.english}`}>
                <Phone size={14} className="mr-2 inline-block" />
                Speak with a Specialist
              </a>
            </Button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-0">
          {faqs.map((item, i) => (
            <div key={item.q} className="border-b border-stone-200/90">
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-6 text-left cursor-pointer"
              >
                <span
                  className={`font-serif text-lg transition-colors duration-200 ${
                    activeIndex === i
                      ? "text-primary"
                      : "text-black"
                  }`}
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