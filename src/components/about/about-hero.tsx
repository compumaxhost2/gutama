import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { BrandLink } from "@/components/ui/brand-link";
import { Reveal } from "@/components/motion/reveal";

export function AboutHero() {
  return (
    <section className="relative flex min-h-[72vh] lg:min-h-[75vh] items-end overflow-hidden">
      {/* Background image with layered overlays */}
      <div className="absolute inset-0">
        <Image
          src="/images/gutama new images/roofing.jpg"
          alt="Professional roofing work by Gutama Home Improvement in Essex County NJ"
          fill
          priority
          className="object-cover object-center brightness-105"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-linear-to-r from-background/80 via-background/50 to-background/20" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Vertical accent line */}
      <div
        className="absolute top-0 bottom-0 left-[max(24px,calc((100vw-1280px)/2))] z-10 w-px bg-linear-to-b from-transparent via-secondary/40 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pt-24 pb-14">
        {/* Breadcrumb */}
        <nav className="mb-10 flex items-center gap-2" aria-label="Breadcrumb">
          <span className="flex items-center gap-2">
            <Link
              href="/"
              className="text-[11px] tracking-[0.12em] uppercase text-muted-foreground transition-colors hover:text-secondary"
            >
              Home
            </Link>
            <span className="text-[8px] text-secondary/60" aria-hidden="true">◆</span>
          </span>
          <span className="text-[11px] tracking-[0.12em] uppercase text-secondary">About Us</span>
        </nav>

        {/* Eyebrow badge */}
        <Reveal>
          <div className="mb-7 inline-flex items-center gap-2 border border-secondary/40 bg-background/30 px-4 py-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
            <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-secondary">
              Serving {siteConfig.business.regionLabel} Since {siteConfig.business.foundedYear}
            </span>
          </div>
        </Reveal>

        {/* Headline */}
        <Reveal delay={0.04}>
          <h1 className="mb-3 font-serif text-[clamp(48px,7.5vw,90px)] leading-none tracking-[-0.01em] text-foreground">
            Your Trusted
            <span className="block italic text-secondary">Roofing Partner</span>
          </h1>
        </Reveal>

        {/* Gold underline */}
        <Reveal delay={0.06}>
          <div className="mb-7 h-px w-44 origin-left bg-linear-to-r from-secondary to-secondary/20" />
        </Reveal>

        {/* Description */}
        <Reveal delay={0.08}>
          <p className="mb-12 max-w-lg text-[clamp(15px,1.7vw,18px)] leading-relaxed text-muted-foreground">
            Since {siteConfig.business.foundedYear}, <BrandLink>{siteConfig.business.name}</BrandLink> has been delivering premium roofing,
            siding, and exterior craftsmanship-licensed, bilingual, and built on trust.
          </p>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-3.5">
            <Button asChild className="h-12 px-7 text-sm uppercase tracking-[0.14em] text-white font-semibold">
              <Link href="/contact">
                Get Free Estimate
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 border-secondary/40 px-6 text-sm text-secondary hover:bg-secondary/10 hover:text-secondary"
            >
              <a href={`tel:${siteConfig.phones.english}`}>
                <Phone size={15} className="mr-2 inline-block" />
                {siteConfig.phones.english}
              </a>
            </Button>
          </div>
        </Reveal>

        {/* Stats row */}
        <Reveal delay={0.13}>
          <div className="mt-16 flex flex-wrap gap-x-12 gap-y-8 border-t border-secondary/25 pt-10">
            {[
              { value: String(siteConfig.business.foundedYear), label: "Year Founded" },
              { value: "17+", label: "Years of Excellence" },
              { value: "1,000+", label: "Projects Completed" },
              { value: "19", label: "Municipalities Served" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="mb-1 font-serif text-4xl leading-none text-secondary">{stat.value}</p>
                <p className="text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

