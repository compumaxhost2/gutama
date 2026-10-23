"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Phone } from "lucide-react";
import { useState } from "react";

import { siteConfig } from "@/config/site";

export function ReRoofingFaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question:
        "What is the difference between re-roofing and roof replacement?",
      answer:
        "Re-roofing refers to installing a new roofing system over or in place of an existing roof, while roof replacement often involves removing old materials and replacing the entire roofing structure when necessary.",
    },
    {
      question: "How long does a re-roofing project take?",
      answer:
        "Most residential re-roofing projects are completed within a few days, depending on roof size, weather conditions, and project complexity.",
    },
    {
      question: "How do I know if I need re-roofing?",
      answer:
        "Signs include roof leaks, damaged shingles, sagging areas, moisture problems, and an aging roof nearing the end of its lifespan.",
    },
    {
      question: "What is the average lifespan of a new roof?",
      answer:
        "The lifespan depends on the roofing material. Asphalt shingles can last 20 to 30 years, while metal roofing systems may last 40 years or longer.",
    },
    {
      question: "Does homeowners insurance cover re-roofing?",
      answer:
        "Insurance coverage depends on the cause of damage and the terms of your policy. Storm-related damage may be covered under many policies.",
    },
    {
      question: "Can re-roofing improve energy efficiency?",
      answer:
        "Yes. Modern roofing materials and improved ventilation systems can help reduce energy consumption and improve indoor comfort.",
    },
  ];

  return (
    <section className="bg-stone-100 text-stone-900 py-12 px-6 border-t border-stone-200">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-20 lg:grid-cols-[1fr_1.6fr]">
        {/* LEFT */}
        <div>
          <div className="lg:sticky lg:top-28">
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-primary">
              <span className="h-px w-6 bg-primary" />
              FAQ
            </p>

            <h2 className="mb-7 font-serif text-[clamp(32px,3.5vw,48px)] leading-snug font-bold text-black">
              Frequently Asked
              <br />
              <em className="text-primary italic">Questions</em>
            </h2>

            <div className="mx-0 mb-7 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

            <p className="mb-8 text-sm leading-loose font-medium text-black">
              Have questions about re-roofing? Our team can help you understand
              project timelines, roofing materials, inspections, insurance
              considerations, and what to expect throughout the installation
              process.
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
              className="border-b border-stone-300"
            >
              <button
                onClick={() =>
                  setActiveIndex(
                    activeIndex === index ? null : index
                  )
                }
                className="flex w-full items-center justify-between gap-4 py-6 text-left"
              >
                <span
                  className={`font-serif text-lg font-bold ${
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
                        : "text-black"
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
