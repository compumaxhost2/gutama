import Link from "next/link";
import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function DormersCtaSection() {
  const content = {
        image: "/images/gutama new images/dormer.jpg",
        imageAlt: "Dormer installation background",
        title: "Ready to Grow",
        accent: "Your Home?",
        description: "Ready to grow your home? Call 973-820-5130 today for a free consultation with the top dormer contractors in Essex County.",
        buttonLabel: "Request a Free Consultation",
      };

  return (
    <section className="relative overflow-hidden py-24 px-6 border-t border-primary/20 bg-gradient-to-b from-white via-[#faeded] to-[#f4d7d7] text-stone-900">
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-primary"><span className="h-px w-6 bg-primary" />Begin Your Project</p>
        <h2 className="mb-5 font-serif text-[clamp(38px,5vw,64px)] leading-tight font-bold text-black">{content.title}<br /><em className="text-primary italic">{content.accent}</em></h2>
        <p className="mx-auto mb-14 max-w-lg text-base leading-loose font-medium text-black">{content.description}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="h-12 bg-primary hover:bg-primary/90 px-7 text-sm uppercase tracking-[0.14em] text-white font-semibold shadow-md"><Link href="/contact">{content.buttonLabel}</Link></Button>
          <Button asChild variant="outline" className="h-12 border-primary/50 bg-white/80 px-6 text-sm text-primary hover:bg-primary/10 shadow-sm"><a href={`tel:${siteConfig.phones.english}`}><Phone size={14} className="mr-2 inline-block" />Call 973-820-5130</a></Button>
        </div>
        <p className="mt-7 text-xs tracking-wide font-medium text-black/70">No obligation - Licensed & insured - {siteConfig.business.regionLabel}</p>
        <div className="mx-auto mt-12 h-14 w-px bg-linear-to-t from-transparent to-primary/30" />
      </div>
    </section>
  );
}

