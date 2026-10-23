"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Phone } from "lucide-react";
import { useState } from "react";

import { siteConfig } from "@/config/site";

export function EmergencyRepairFaqSection() {
  const content = {
    intro:
      "Find answers to common questions about emergency roof repair services, response times, roof leaks, storm damage, and insurance-related concerns.",

    items: [
      {
        q: "What is emergency roof repair?",
        a: "Emergency roof repair is immediate roofing service to stop leaks and prevent further damage after storms or sudden roof failure.",
      },
      {
        q: "How fast can emergency roof repair be done?",
        a: "Most emergency responses begin the same day, depending on weather and severity.",
      },
      {
        q: "Is emergency roof repair permanent?",
        a: "Some repairs are temporary (like tarping), while others fully restore the damaged area.",
      },
      {
        q: "What should I do during a roof leak emergency?",
        a: "Move valuables, contain water if possible, and call a professional roofing contractor immediately.",
      },
      {
        q: "Does insurance cover emergency roof repair?",
        a: "In many cases, storm-related damage may be covered depending on your insurance policy.",
      },
      {
        q: "What causes emergency roof damage?",
        a: "Common causes include storms, falling trees, wind damage, and aging roofing materials.",
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
