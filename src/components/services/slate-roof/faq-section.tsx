"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Phone } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function SlateRoofFaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the lifespan of a slate roof?",
      answer:
        "A slate roof can last 75 to 150 years, depending on installation quality and ongoing maintenance.",
    },
    {
      question: "Is slate roofing expensive?",
      answer:
        "Yes, slate roofing has a higher upfront cost than many other roofing materials, but it is often more cost-effective over time due to its exceptional lifespan and minimal maintenance requirements.",
    },
    {
      question: "Can slate roofs be repaired?",
      answer:
        "Yes. Individual slate tiles can often be replaced without replacing the entire roof when damage is limited to specific areas.",
    },
    {
      question: "Is slate roofing good for New Jersey weather?",
      answer:
        "Yes. Slate roofing performs extremely well in New Jersey because it resists snow, rain, wind, temperature fluctuations, and other harsh weather conditions.",
    },
    {
      question: "Does slate roofing require maintenance?",
      answer:
        "Yes, but maintenance needs are relatively minimal. Periodic inspections and occasional tile replacement help maximize the lifespan of the roofing system.",
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
              Slate Roofing
              <br />
              <em className="text-primary italic">Questions</em>
            </h2>

            <div className="mx-0 mb-7 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

            <p className="mb-8 text-sm leading-loose font-medium text-black">
              Get answers to common questions about slate roofing installation,
              repairs, maintenance, longevity, and performance in New Jersey.
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
            <div key={faq.question} className="border-b border-stone-200/90">
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="flex w-full cursor-pointer items-center justify-between gap-4 bg-transparent py-6 text-left"
              >
                <span
                  className={`font-serif text-lg transition-colors duration-200 ${
                    activeIndex === index
                      ? "text-primary"
                      : "text-black"
                  }`}
                >
                  {faq.question}
                </span>

                <motion.div
                  animate={{ rotate: activeIndex === index ? 90 : 0 }}
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
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
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