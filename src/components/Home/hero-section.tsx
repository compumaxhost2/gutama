import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

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

      {/* Split Screen Grid: Left Content (Gradient Backdrop) | Right Side (Bright & Clear Image) */}
      <div className="grid min-h-[auto] lg:min-h-[70vh] xl:min-h-[74vh] grid-cols-1 lg:grid-cols-2">
        {/* Left Column: Content */}
        <div className="relative z-10 flex flex-col justify-center px-6 py-10 sm:px-10 md:px-12 lg:py-12 xl:py-14 lg:pl-[max(2rem,calc((100vw-1280px)/2+1.5rem))] lg:pr-10 xl:pr-14 bg-gradient-to-br from-neutral-950/95 via-[#141417]/95 to-neutral-900/90">
          {/* Vertical gradient divider at split boundary on desktop */}
          <div
            className="absolute top-0 bottom-0 right-0 hidden lg:block w-px bg-gradient-to-b from-transparent via-secondary/40 to-transparent pointer-events-none z-20"
            aria-hidden="true"
          />

          <div className="max-w-xl xl:max-w-2xl">
            {/* Region Tag */}
            <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-3.5 py-1 backdrop-blur-xs">
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
              <span className="text-gradient-gold mt-2.5 block text-[0.52em] font-semibold normal-case leading-[1.35] tracking-[0.05em]">
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

                <div className="border-l-2 border-primary/80 pl-3.5">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-400">
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

            {/* Certification Badges Row */}
            <Reveal delay={0.18}>
              <div className="mt-5 flex flex-wrap items-center gap-2 sm:gap-2.5">
                {(["Certified", "Licensed", "Bonded", "Insured"] as const).map(
                  (badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center gap-2 rounded-full border border-amber-400/80 bg-gradient-to-r from-amber-500/25 via-yellow-400/15 to-amber-500/25 px-3.5 py-1.5 text-xs sm:text-sm font-bold tracking-wide text-white shadow-[0_0_15px_rgba(245,158,11,0.28)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-amber-300 hover:bg-amber-500/35 hover:shadow-[0_0_22px_rgba(245,158,11,0.5)]"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-300 drop-shadow-[0_0_6px_rgba(251,191,36,0.8)]" />
                      {badge}
                    </span>
                  ),
                )}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Divider on mobile/tablet screens */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-secondary/40 to-transparent lg:hidden" />

        {/* Right Side: Bright, Clear Image (100% Opacity, NO Black Shadow) */}
        <div className="relative min-h-[340px] sm:min-h-[400px] md:min-h-[460px] lg:min-h-full w-full overflow-hidden bg-neutral-900">
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
