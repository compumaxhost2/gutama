"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Phone } from "lucide-react";
import { useState } from "react";

import { siteConfig } from "@/config/site";

export function RoofingFaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

 const faqs = [
   {
     question: "How do I know if my roof needs repair or replacement?",
     answer:
       "Signs such as recurring leaks, missing or damaged shingles, sagging areas, water stains, or an aging roof may indicate that professional attention is needed. A roof inspection can help determine whether a repair is sufficient or a replacement makes more sense.",
   },
   {
     question: "How quickly can a roofing problem be repaired?",
     answer:
       "The timeframe depends on the type and extent of the damage. Minor leaks or damaged shingles may be repaired relatively quickly, while larger or storm-related issues may require a more detailed inspection and repair plan.",
   },
   {
     question: "Do you provide roofing services for commercial properties?",
     answer:
       "Yes. Gutama Home Improvement provides roofing services for both residential and commercial properties, including flat roofing systems such as EPDM and TPO.",
   },
   {
     question: "What types of roofing systems do you work with?",
     answer:
       "Our roofing services include asphalt shingle roofing, flat roofing, EPDM, TPO, and slate roofing. We can recommend a suitable option based on your property's structure, existing roof, and project requirements.",
   },
   {
     question: "Can you repair a slate roof instead of replacing it?",
     answer:
       "In many cases, damaged slate roofing can be repaired without replacing the entire roof. The appropriate approach depends on the condition of the slate, flashing, underlayment, and surrounding roofing materials.",
   },
   {
     question: "What happens during a roof tear-off?",
     answer:
       "During a roof tear-off, the existing roofing materials are carefully removed so the underlying roof deck can be inspected. Any damaged areas can then be addressed before the new roofing system is installed.",
   },
   {
     question: "How can I tell if a roof leak is getting worse?",
     answer:
       "Water stains on ceilings or walls, damp insulation, peeling paint, mold growth, or repeated leaks are signs that moisture may be entering the structure. Even a small visible leak can indicate a larger roofing issue.",
   },
   {
     question: "Do you offer emergency roof repairs in Essex County?",
     answer:
       "Yes. If your property has sudden roof damage from severe weather, fallen branches, or an unexpected leak, contact Gutama Home Improvement to discuss the damage and available repair options.",
   },
   {
     question: "How long does a roof replacement usually take?",
     answer:
       "Project duration varies based on the roof's size, materials, complexity, weather conditions, and the condition of the existing roof deck. Your roofing contractor can provide a more accurate timeline after an inspection.",
   },
   {
     question: "Do you provide free roofing estimates?",
     answer:
       "Yes. Gutama Home Improvement offers free roof inspections and estimates to help property owners understand the condition of their roof and the work that may be required.",
   },
   {
     question: "Do you provide roofing services throughout Essex County, NJ?",
     answer:
       "Yes. Gutama Home Improvement serves homeowners and businesses throughout Essex County, including Newark, Montclair, West Orange, Bloomfield, Livingston, Maplewood, Orange, East Orange, and surrounding communities.",
   },
   {
     question: "What should I do if my roof is damaged after a storm?",
     answer:
       "If you notice missing shingles, exposed areas, leaks, or other storm damage, contact a roofing professional for an inspection. If possible, document the visible damage with photos, but avoid walking on or attempting to repair the roof yourself.",
   },
 ];

  return (
    <section className="bg-white text-black py-16 px-6 border-t border-stone-200">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 lg:grid-cols-[1fr_1.6fr]">
        {/* LEFT */}
        <div className="flex h-full items-start">
          <div className="w-full lg:sticky lg:top-28">
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-primary">
              <span className="h-px w-6 bg-primary" />
              Frequently Asked Questions
            </p>

            <h2 className="mb-7 font-serif text-[clamp(32px,3.5vw,48px)] leading-snug font-bold text-black">
              Roofing Services
              <br />
              <em className="text-primary italic">& Systems FAQ</em>
            </h2>

            <div className="mx-0 mb-7 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

            <p className="mb-8 text-sm leading-loose font-medium text-black">
              Have questions regarding which roofing category is best for your
              property? Our master roofers are available to explain codes,
              material selections, timelines, and warranty terms.
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
              <span>Speak with a Roofing Specialist</span>
            </motion.a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-0">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="border-b border-stone-200">
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between gap-4 py-6 text-left cursor-pointer transition-colors hover:text-primary"
              >
                <span
                  className={`font-serif text-lg font-bold ${
                    activeIndex === index ? "text-primary" : "text-black"
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
