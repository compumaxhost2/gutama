import Image from "next/image";
import Link from "next/link";
import { Phone, ShieldCheck, Award, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function RoofingHeroSection() {
  const content = {
    label: "Roofing",
    title: "Roofing Services in",
    accent: "Essex County, NJ",
    image: "/images/gutama new images/roofing.jpg",
    imageAlt: "Gutama Roofing Solutions in Essex County NJ",
    stats: [
      { value: "18+", label: "Years in Essex County" },
      { value: "1,200+", label: "Roofs Completed" },
      { value: "100%", label: "Licensed & Insured" },
      { value: "4.9★", label: "Client Satisfaction" },
    ],
  };

  return (
    <section className="relative flex min-h-[72vh] lg:min-h-[75vh] items-end overflow-hidden">
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          <Image
            src={content.image}
            alt={content.imageAlt}
            fill
            priority
            className="object-cover object-[center_35%] brightness-105"
            sizes="100vw"
            quality={85}
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-background/80 via-background/50 to-background/20" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="absolute top-0 bottom-0 left-[max(24px,calc((100vw-1280px)/2))] z-10 w-px bg-linear-to-b from-transparent via-secondary/40 to-transparent" />

      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pt-24 pb-14">
        {/* Breadcrumb */}
        <nav className="mb-10 flex items-center gap-2">
          <span className="flex items-center gap-2">
            <Link
              href="/"
              className="text-[11px] tracking-[0.12em] uppercase text-muted-foreground transition-colors hover:text-secondary"
            >
              Home
            </Link>
            <span className="text-[8px] text-secondary/60">◆</span>
          </span>
          <span className="flex items-center gap-2">
            <Link
              href="/services"
              className="text-[11px] tracking-[0.12em] uppercase text-muted-foreground transition-colors hover:text-secondary"
            >
              Services
            </Link>
            <span className="text-[8px] text-secondary/60">◆</span>
          </span>
          <span className="text-[11px] tracking-[0.12em] uppercase text-secondary">
            {content.label}
          </span>
        </nav>

        {/* Region Tag */}
        <div className="mb-7 inline-flex items-center gap-2 border border-secondary/40 bg-background/40 px-4 py-1.5 backdrop-blur-xs">
          <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
          <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-secondary">
            Roofing Contractor — {siteConfig.business.regionLabel}
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="mb-4 font-serif text-[clamp(40px,6.5vw,82px)] leading-none tracking-[-0.01em] text-foreground">
          {content.title}
          <span className="block italic text-secondary">{content.accent}</span>
        </h1>

        <div className="mb-7 h-px w-48 origin-left bg-linear-to-r from-secondary via-secondary/60 to-transparent" />

        

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <Button
            asChild
            className="h-12 px-8 text-sm uppercase tracking-[0.14em] text-white font-semibold shadow-lg"
          >
            <Link href="/contact">Request Free Estimate</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 border-secondary/40 px-6 text-sm text-secondary hover:bg-secondary/10 hover:text-secondary"
          >
            <a href={`tel:${siteConfig.phones.english}`}>
              <Phone size={15} className="mr-2 inline-block" />
              Call {siteConfig.phones.english}
            </a>
          </Button>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-14 flex flex-wrap items-center gap-6 text-xs text-muted-foreground/80">
          <span className="inline-flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-secondary" /> NJ Licensed Home
            Improvement Contractor
          </span>
          <span className="inline-flex items-center gap-2">
            <Award className="h-4 w-4 text-secondary" /> Certified Shingle &
            Membrane Installers
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4 text-secondary" /> Prompt Storm Damage
            Response
          </span>
        </div>

        {/* Stats Row */}
        <div className="mt-12 flex flex-wrap gap-x-12 gap-y-6 border-t border-secondary/25 pt-10">
          {content.stats.map((item) => (
            <div key={item.label}>
              <p className="mb-1 font-serif text-3xl font-bold leading-none text-secondary lg:text-4xl">
                {item.value}
              </p>
              <p className="text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
