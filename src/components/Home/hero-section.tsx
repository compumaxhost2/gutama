import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-16 md:pt-36 md:pb-18 lg:min-h-[calc(100vh-6rem-4.5rem)] lg:py-16"
    >
      {/* Background Rooftop Image */}
      <div className="absolute inset-0 bg-neutral-900">
        <Image
          src="/images/gutama new images/hero 4k.jpg"
          alt="Roofing contractor working on residential roof in Essex County NJ"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={85}
          className="object-cover object-right opacity-30 sm:object-center brightness-110 contrast-105"
        />
        {/* Soft, light luminous directional veil for clarity and brightness */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </div>

      <Container className="relative max-w-[1240px]">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:items-center">

          {/* Left Content Column (Hero info, CTAs, and badges unified on left) */}
          <div className="max-w-2xl lg:col-span-8">
            {/* Main Heading & Gold Accent Subtitle */}
            <h1
              className="text-5xl font-bold uppercase leading-[1.18] tracking-[0.03em] text-white drop-shadow-sm sm:text-6xl lg:text-[4.5rem] lg:leading-[1.22]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Trusted Roofing Experts
              <br />
              <span className="tracking-[0.04em]">in New Jersey</span>
              <br />
              <span
                className="text-gradient-gold mt-4 block text-[0.55em] font-semibold normal-case leading-[1.5] tracking-[0.06em]"
              >
                Free Inspections &amp;
                <br />
                Quality Work
              </span>
            </h1>

            {/* Tagline Highlights (clean typography, no boxes) */}
            <Reveal delay={0.08}>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">
                    LOCAL EXPERTISE
                  </p>
                  <p className="mt-1 font-serif text-lg font-bold text-white drop-shadow-sm sm:text-xl">
                    Your Local Roofing Partner
                  </p>
                  <p className="mt-1 text-sm text-zinc-200 drop-shadow-sm">
                    Keeping New Jersey Homes Safe &amp; Protected
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                    FAST RESPONSE
                  </p>
                  <p className="mt-1 font-serif text-lg font-bold text-white drop-shadow-sm sm:text-xl">
                    Roof Problems Don&apos;t Wait
                  </p>
                  <p className="mt-1 text-sm text-zinc-200 drop-shadow-sm">
                    Fast, Reliable Roofing Services
                  </p>
                </div>
              </div>
            </Reveal>

            {/* CTA Buttons */}
            <Reveal delay={0.14}>
              <div className="mt-8 flex flex-col items-stretch gap-3.5 sm:flex-row sm:items-center">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-lg bg-gradient-to-r from-secondary to-amber-500 px-7 text-sm font-bold text-background shadow-lg transition-all hover:brightness-110 sm:text-base"
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
                  className="h-12 rounded-lg border-white/40 bg-black/30 px-7 text-sm font-semibold text-white shadow-sm backdrop-blur-sm transition-all hover:border-white/70 hover:bg-white/15 sm:text-base"
                >
                  <a href={`tel:${siteConfig.phones.english}`}>
                    <Phone className="mr-2 h-4 w-4 text-secondary" />
                    Call Roofing Expert
                  </a>
                </Button>
              </div>
            </Reveal>

            {/* Certification Badges Row (Placed after CTA buttons) */}
            <Reveal delay={0.18}>
              <div className="mt-7 flex flex-wrap items-center gap-2 sm:gap-2.5">
                {(["Certified", "Licensed", "Bonded", "Insured"] as const).map(
                  (badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center gap-1.5 rounded-full border border-secondary/50 bg-black/40 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white shadow-sm backdrop-blur-md"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-secondary" />
                      {badge}
                    </span>
                  ),
                )}
              </div>
            </Reveal>
          </div>

          {/* Right Column empty to display full roof image clearly */}
          <div className="hidden lg:col-span-4 lg:block" />

        </div>
      </Container>

      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
