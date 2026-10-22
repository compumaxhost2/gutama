"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Phone } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function ReRoofingFaqSection() {
  const content = {
    intro:
      "Have questions about re-roofing your property? Our team can help you determine whether re-roofing or full roof replacement is the best solution for your home or commercial building.",

    items: [
      {
        q: "What is re-roofing?",
        a: "Re-roofing is the process of installing a new roofing system over an existing roof or replacing worn roofing materials to restore protection, improve performance, and extend the life of the roof.",
      },
      {
        q: "How much does re-roofing cost in Newark NJ?",
        a: "Most re-roofing projects in Newark range from approximately $4,000 to $25,000 depending on roof size, material selection, labor requirements, accessibility, and any repairs required during the project.",
      },
      {
        q: "Is re-roofing cheaper than replacing a roof?",
        a: "Yes. Re-roofing is often less expensive than a complete roof replacement because it may require less labor and material removal. However, eligibility depends on the condition of the existing roof and local code requirements.",
      },
      {
        q: "How long does re-roofing take?",
        a: "Most residential re-roofing projects take between one and five days depending on roof size, weather conditions, roofing materials, and overall project complexity.",
      },
      {
        q: "Can you re-roof over existing shingles?",
        a: "In some cases, yes. New Jersey building codes generally allow limited roofing layers if the roof structure is sound and other requirements are met. A professional inspection is necessary to determine eligibility.",
      },
      {
        q: "When should you re-roof your house?",
        a: "You should consider re-roofing when your roof shows signs of aging, repeated leaks, damaged shingles, granule loss, or declining performance while still maintaining a structurally sound roof deck.",
      },
      {
        q: "Do I need a permit for re-roofing in Newark NJ?",
        a: "Permit requirements vary depending on project scope, structural changes, and local regulations. A licensed roofing contractor can help determine permit requirements for your specific property.",
      },
      {
        q: "How many layers of shingles are allowed in New Jersey?",
        a: "Building code requirements may limit the number of roofing layers allowed. Most roofing professionals recommend a full inspection to ensure compliance with current New Jersey regulations before proceeding with re-roofing.",
      },
      {
        q: "Is re-roofing worth it?",
        a: "Yes. Re-roofing can be a cost-effective investment that improves weather protection, enhances curb appeal, increases property value, and extends the life of your roofing system when the existing structure remains in good condition.",
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
              Re-Roofing
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