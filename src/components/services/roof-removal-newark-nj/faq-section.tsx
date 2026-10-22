"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Phone } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function RoofRemovalFaqSection() {
  const content = {
    intro:
      "Have questions about roof tear-offs, roof replacement, permits, or emergency roofing services? Our team is here to help you make informed decisions about your roofing project.",

    items: [
      {
        q: "What is a roof tear-off?",
        a: "A roof tear-off is the complete removal of old roofing materials before installing a new roof. This process allows contractors to inspect the roof deck, identify hidden damage, and ensure the new roofing system is installed on a solid foundation.",
      },
      {
        q: "How much does roof removal cost in Newark NJ?",
        a: "The cost of roof removal depends on several factors including roof size, roofing materials, accessibility, the number of existing roofing layers, and any structural repairs that may be required during the project.",
      },
      {
        q: "How long does roof removal take?",
        a: "Most residential roof removal projects are completed within one to three days. Larger commercial roofing projects may require additional time depending on the size and complexity of the roof.",
      },
      {
        q: "Do I need a permit for roof replacement in Newark NJ?",
        a: "Yes, many roof replacement projects require permits and compliance with local building regulations. Our team can help guide you through the permit process and ensure all work meets local code requirements.",
      },
      {
        q: "Do you offer same-day roof repair in Newark NJ?",
        a: "Yes. We provide emergency roofing services whenever possible, including emergency tarping, leak repairs, storm damage assessments, and temporary protection solutions to help prevent further property damage.",
      },
    ],
  };

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="relative bg-black text-white py-20 px-6 border-t border-white/10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-20 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <div className="lg:sticky lg:top-28">
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
              <span className="h-px w-6 bg-secondary" />
              Frequently Asked Questions
            </p>

            <h2 className="mb-7 font-serif text-[clamp(32px,3.5vw,48px)] leading-snug font-bold text-white">
              Roof Removal
              <br />
              <em className="text-secondary italic">FAQs</em>
            </h2>

            <div className="mx-0 mb-7 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

            <p className="mb-8 text-sm leading-loose text-stone-600">
              {content.intro}
            </p>

            <Button
              asChild
              variant="outline"
              className="h-12 border-secondary/40 px-6 text-sm text-secondary hover:bg-secondary/10 hover:text-secondary"
            >
              <a href={`tel:${siteConfig.phones.english}`}>
                <Phone size={14} className="mr-2 inline-block" />
                Speak with a Roofing Specialist
              </a>
            </Button>
          </div>
        </div>

        <div className="flex flex-col">
          {content.items.map((item, i) => (
            <div
              key={item.q}
              className="border-b border-stone-200/90"
            >
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
                      ? "text-secondary"
                      : "text-stone-900",
                  ].join(" ")}
                >
                  {item.q}
                </span>

                <motion.div
                  animate={{
                    rotate: activeIndex === i ? 90 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronRight
                    size={18}
                    className={
                      activeIndex === i
                        ? "text-secondary"
                        : "text-stone-600"
                    }
                  />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === i && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-sm leading-loose text-stone-600">
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