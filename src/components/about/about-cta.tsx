import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

import { siteConfig } from "@/config/site";
import { BrandLink } from "@/components/ui/brand-link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";

export function AboutCta() {
  return (
    <Section className="relative overflow-hidden border-t border-red-200 bg-gradient-to-b from-[#faf8f5] via-[#faeded] to-[#f4d7d7] text-stone-900">
      <Container className="relative text-center">
        {/* Eyebrow pill */}
        <Reveal>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-5 py-2">
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Let&apos;s Build Together
            </span>
          </div>
        </Reveal>

        {/* Headline */}
        <Reveal delay={0.04}>
          <h2 className="font-serif text-3xl font-bold text-stone-900 md:text-4xl lg:text-5xl">
            Ready to Work With a Team
            <br />
            <span className="text-primary">You Can Actually Trust?</span>
          </h2>
        </Reveal>

        {/* Body */}
        <Reveal delay={0.06}>
          <p className="mx-auto mt-5 max-w-xl text-lg text-stone-700">
            Join over a thousand satisfied homeowners across {siteConfig.business.regionLabel} who
            chose <BrandLink className="text-stone-900 font-semibold hover:text-primary">{siteConfig.business.name}</BrandLink> for quality that lasts.
          </p>
        </Reveal>

        {/* Buttons */}
        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="px-8 py-6 text-base font-semibold text-white bg-primary hover:bg-primary/90 shadow-md">
              <Link href="/contact">
                Request a Free Estimate
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary/50 bg-white/80 px-8 py-6 text-base font-semibold text-primary hover:bg-primary/10 shadow-sm"
            >
              <a href={`tel:${siteConfig.phones.english}`}>
                <Phone className="mr-2 h-5 w-5" />
                {siteConfig.phones.english}
              </a>
            </Button>
          </div>
        </Reveal>

        {/* Subtext */}
        <Reveal delay={0.1}>
          <p className="mt-6 text-sm text-stone-600">
            English &amp; Espa&ntilde;ol &middot;{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-medium text-primary hover:underline"
            >
              {siteConfig.email}
            </a>
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
