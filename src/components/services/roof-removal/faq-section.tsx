
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Phone } from "lucide-react";
import { useState } from "react";

import { siteConfig } from "@/config/site";

export function RoofRemovalFaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is roof removal?",
      answer:
        "Roof removal is the process of completely removing existing roofing materials before installing a new roof. This allows contractors to inspect the roof deck, identify hidden damage, and ensure proper installation.",
    },
    {
      question: "How long does roof removal take?",
      answer:
        "Most residential roof removal projects can be completed within one to two days. Larger or more complex roofs may require additional time.",
    },
    {
      question: "Is roof removal better than a roof overlay?",
      answer:
        "In many cases, yes. Roof removal allows for structural inspection, hidden damage detection, and proper installation of new roofing materials, which often leads to a longer-lasting roof.",
    },
    {
      question: "How much does roof removal cost in Essex County, NJ?",
      answer:
        "Roof removal costs vary based on roof size, material type, accessibility, and whether repairs are needed. A professional inspection is the best way to receive an accurate estimate.",
    },
    {
      question:
        "Can damaged roof decking be replaced during roof removal?",
      answer:
        "Yes. Any damaged or rotted decking discovered during the tear-off process can be repaired or replaced before the new roof is installed.",
    },
    {
      question: "Does homeowners insurance cover roof removal?",
      answer:
        "Insurance may cover roof removal when damage is caused by a covered event such as hail, wind, or severe storms. Coverage depends on the terms of your policy.",
    },
    {
      question: "How do I know if I need a roof inspection?",
      answer:
        "If your roof is more than 20 years old, has visible damage, leaks, or storm-related issues, scheduling a professional inspection is recommended.",
    },
  ];

  return (
    <section className="bg-[#dfd0c0] text-black py-14 px-6 border-t border-stone-300">
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
              Have questions about roof removal? Our team can explain the
              tear-off process, project timelines, inspections, repairs,
              insurance considerations, and what to expect before your new
              roofing system is installed.
            </p>

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

        {/* RIGHT */}
        <div className="flex flex-col gap-0">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="border-b border-stone-200/90"
            >
              <button
                onClick={() =>
                  setActiveIndex(
                    activeIndex === index ? null : index
                  )
                }
                className="flex w-full items-center justify-between gap-4 py-6 text-left cursor-pointer"
              >
                <span
                  className={`font-serif text-lg ${
                    activeIndex === index
                      ? "text-primary"
                      : "text-black"
                  }`}
                >
                  {faq.question}
                </span>

                <motion.div
                  animate={{
                    rotate: activeIndex === index ? 90 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronRight
                    size={18}
                    className={
                      activeIndex === index
                        ? "text-primary"
                        : "font-medium text-black"
                    }
                  />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
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
                    <p className="pb-6 text-sm leading-loose font-medium text-black">
                      {faq.answer}
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
