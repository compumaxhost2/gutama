import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, FileBadge, Handshake, Phone, ShieldCheck } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

const TRUST_BADGES = [
  { label: "Certified", icon: Award },
  { label: "Licensed", icon: FileBadge },
  { label: "Bonded", icon: Handshake },
  { label: "Insured", icon: ShieldCheck },
] as const;

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-gradient-to-br from-neutral-950 via-zinc-950 to-neutral-900"
    >
      {/* Subtle ambient light gradient glows */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-secondary/10 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/4 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]"
        aria-hidden="true"
      />

      {/* Top subtle gradient accent line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent z-20" />

      {/* Split Screen Grid: Left Content (Mobile: Image as background | Desktop: Left Column) */}
      <div className="grid min-h-[auto] lg:min-h-[70vh] xl:min-h-[74vh] grid-cols-1 lg:grid-cols-2">
        {/* Left Column: Content */}
        <div className="relative z-10 flex flex-col justify-center overflow-hidden px-6 py-12 sm:px-10 md:px-12 lg:py-12 xl:py-14 lg:pl-[max(2rem,calc((100vw-1280px)/2+1.5rem))] lg:pr-10 xl:pr-14 lg:bg-gradient-to-br lg:from-neutral-950/95 lg:via-[#141417]/95 lg:to-neutral-900/90">
          {/* Mobile-Only Background Image (Behind Content) */}
          <div className="absolute inset-0 z-0 lg:hidden pointer-events-none" aria-hidden="true">
            <Image
              src="/images/gutama new images/hero 4k.jpg"
              alt="Roofing contractor working on residential roof in Essex County NJ"
              fill
              priority
              sizes="100vw"
              quality={90}
              className="object-cover object-center brightness-105"
            />
            {/* Dark gradient overlays for high contrast and readability on mobile */}
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/95 via-black/60 to-neutral-950/95" />
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[0.5px]" />
          </div>

          {/* Vertical gradient divider at split boundary on desktop */}
          <div
            className="absolute top-0 bottom-0 right-0 hidden lg:block w-px bg-gradient-to-b from-transparent via-secondary/40 to-transparent pointer-events-none z-20"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-xl xl:max-w-2xl">
            {/* Region Tag (Hidden on mobile) */}
            <div className="mb-3.5 hidden sm:inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-3.5 py-1 backdrop-blur-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary">
                Roofing Contractor — New Jersey
              </span>
            </div>

            {/* Main Heading & Gold Accent Subtitle */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] xl:text-[3.35rem] font-bold uppercase leading-[1.12] tracking-[0.02em] text-white drop-shadow-sm"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Trusted Roofing Experts
              <br />
              <span className="tracking-[0.03em] text-white">in New Jersey</span>
              <br />
              <span className="text-red-500 mt-2.5 block text-[0.52em] font-semibold normal-case leading-[1.35] tracking-[0.05em]">
                Free Inspections &amp; Quality Work
              </span>
            </h1>

            {/* Tagline Highlights */}
            <Reveal delay={0.08}>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="border-l-2 border-secondary/70 pl-3.5">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">
                    LOCAL EXPERTISE
                  </p>
                  <p className="mt-1 font-serif text-base font-bold text-white drop-shadow-sm sm:text-lg">
                    Your Local Roofing Partner
                  </p>
                  <p className="mt-0.5 text-xs text-zinc-300 sm:text-sm">
                    Keeping New Jersey Homes Safe &amp; Protected
                  </p>
                </div>

                <div className="border-l-2 border-red-500/80 pl-3.5">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-500">
                    FAST RESPONSE
                  </p>
                  <p className="mt-1 font-serif text-base font-bold text-white drop-shadow-sm sm:text-lg">
                    Roof Problems Don&apos;t Wait
                  </p>
                  <p className="mt-0.5 text-xs text-zinc-300 sm:text-sm">
                    Fast, Reliable Roofing Services
                  </p>
                </div>
              </div>
            </Reveal>

            {/* CTA Buttons */}
            <Reveal delay={0.14}>
              <div className="mt-6 flex flex-col items-stretch gap-3.5 sm:flex-row sm:items-center">
                <Button
                  asChild
                  size="lg"
                  className="h-11 sm:h-12 rounded-lg bg-gradient-to-r from-secondary to-amber-500 px-6 sm:px-7 text-sm font-bold text-background shadow-lg transition-all hover:brightness-110 sm:text-base cursor-pointer"
                >
                  <Link href="#contact">
                    Get Free Roofing Estimate
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-11 sm:h-12 rounded-lg border-white/30 bg-white/5 px-6 sm:px-7 text-sm font-semibold text-white shadow-sm backdrop-blur-sm transition-all hover:border-secondary hover:bg-white/10 sm:text-base cursor-pointer"
                >
                  <a href={`tel:${siteConfig.phones.english}`}>
                    <Phone className="mr-2 h-4 w-4 text-secondary" />
                    Call Roofing Expert
                  </a>
                </Button>
              </div>
            </Reveal>

            {/* Trust Badges - Single Line, Relatable Icons + Larger Word Below */}
            <Reveal delay={0.18}>
              <div className="mt-8 pt-5 border-t border-white/15 max-w-lg">
                <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-5">
                  {TRUST_BADGES.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="group flex flex-col items-center justify-center text-center cursor-default transition-transform duration-300 hover:-translate-y-1"
                      >
                        {/* Larger Red Seal Icon on Top */}
                        <div className="relative flex h-13 w-13 sm:h-15 sm:w-15 md:h-16 md:w-16 items-center justify-center rounded-full bg-gradient-to-br from-red-500 via-red-600 to-red-800 shadow-[0_0_22px_rgba(220,38,38,0.65)] ring-2 ring-red-400/60 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_32px_rgba(239,68,68,0.95)] group-hover:ring-red-300">
                          <Icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white stroke-[2.3] drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]" />
                        </div>
                        {/* Larger Word Below the Icon */}
                        <span className="mt-2.5 text-xs sm:text-sm md:text-[15px] font-black uppercase italic tracking-wider text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] transition-colors duration-200 group-hover:text-red-400">
                          {item.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>

          </div>
        </div>

        {/* Right Side: Bright, Clear Image (Desktop Only - on mobile it is positioned behind content) */}
        <div className="relative hidden lg:block lg:min-h-full w-full overflow-hidden bg-neutral-900">
          <Image
            src="/images/gutama new images/hero 4k.jpg"
            alt="Roofing contractor working on residential roof in Essex County NJ"
            fill
            priority
            fetchPriority="high"
            sizes="(min-width: 1024px) 50vw, 100vw"
            quality={95}
            className="object-cover object-center brightness-105 contrast-100"
          />
        </div>
      </div>
    </section>
  );
}
