import Image from "next/image";
import Link from "next/link";
import { Phone, Calendar } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function RoofingCtaSection() {
  const content = {
    image: "/images/service-re-roofing.webp",
    imageAlt: "Gutama Roofing Project in Essex County NJ",
    title: "Protect Your Property with",
    accent: "Master Roofing Craftsmanship",
    description:
      "Schedule a complimentary, comprehensive roof evaluation today. Our seasoned roofing inspectors will examine your roof, identify vulnerabilities, and provide an honest, itemized estimate.",
    buttonLabel: "Request Free Evaluation",
  };

  return (
    <section className="relative overflow-hidden py-24 px-6 border-t border-primary/20 bg-gradient-to-b from-white via-[#faeded] to-[#f4d7d7] text-stone-900">
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold tracking-[0.22em] uppercase text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Take the First Step
        </p>

        <h2 className="mb-6 font-serif text-[clamp(34px,5vw,60px)] leading-tight font-bold text-black">
          {content.title}
          <br />
          <em className="text-primary italic font-bold">{content.accent}</em>
        </h2>

        <p className="mx-auto mb-12 max-w-xl text-base leading-relaxed font-medium text-black">
          {content.description}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            className="h-12 px-8 text-sm uppercase tracking-[0.14em] bg-primary text-white hover:bg-primary/90 shadow-lg"
          >
            <Link href="/contact">
              <Calendar size={15} className="mr-2 inline-block" />
              {content.buttonLabel}
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="h-12 border-primary/50 bg-white/80 px-6 text-sm text-primary hover:bg-primary/10 shadow-sm"
          >
            <a href={`tel:${siteConfig.phones.english}`}>
              <Phone size={14} className="mr-2 inline-block" />
              Call {siteConfig.phones.english}
            </a>
          </Button>
        </div>

        <p className="mt-8 text-xs tracking-wide font-medium text-black/70">
          Zero Obligation • Licensed &amp; Fully Insured • {siteConfig.business.regionLabel}
        </p>

        <div className="mx-auto mt-12 h-12 w-px bg-linear-to-t from-transparent to-primary/30" />
      </div>
    </section>
  );
}
