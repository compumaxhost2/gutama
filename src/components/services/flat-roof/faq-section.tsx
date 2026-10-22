"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Phone } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function FlatRoofFaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the best material for a flat roof?",
      answer:
        "The best flat roofing material depends on your building type, budget, and performance goals. Popular options include EPDM, TPO, modified bitumen, and built-up roofing systems.",
    },
    {
      question: "How long does a flat roof last?",
      answer:
        "Most flat roofing systems last between 20 and 40 years, depending on the material, installation quality, and maintenance schedule.",
    },
    {
      question: "Are flat roofs more prone to leaks?",
      answer:
        "Flat roofs can develop leaks if drainage or waterproofing systems fail. Professional installation and routine inspections significantly reduce leak risks.",
    },
    {
      question: "How often should a flat roof be inspected?",
      answer:
        "Most roofing professionals recommend inspections at least once a year and after major storms.",
    },
    {
      question: "Can a flat roof be repaired instead of replaced?",
      answer:
        "Yes. Minor damage can often be repaired. Extensive deterioration, recurring leaks, or aging roofing systems may require replacement.",
    },
    {
      question: "How much does a flat roof cost?",
      answer:
        "Costs vary based on roof size, material selection, accessibility, insulation requirements, and project complexity. A professional inspection provides the most accurate estimate.",
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
              Have questions about flat roofing systems? Our team can help you
              understand material options, repair versus replacement decisions,
              maintenance requirements, and project costs.
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
                className="flex w-full items-center justify-between gap-4 py-6 text-left"
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