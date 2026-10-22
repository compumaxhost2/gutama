import { Banknote, Phone } from "lucide-react";

import { siteConfig } from "@/config/site";
import { BrandLink } from "@/components/ui/brand-link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";

export function CtaSection() {
  return (
    <Section
      id="contact"
      className="relative overflow-hidden border-t border-rose-200/80 bg-gradient-to-b from-[#faf8f5] via-[#faeded] to-[#f4d7d7] text-stone-900"
      aria-label="Contact roofing contractor"
    >
      {/* Soft warm blush ambient radial highlight */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(235,160,160,0.22),transparent_70%)]"
        aria-hidden="true"
      />

      <Container className="relative text-center">
        <Reveal>
          {/* ✅ SEO-OPTIMIZED HEADING */}
          <h2 className="font-serif text-3xl font-bold text-stone-900 md:text-4xl lg:text-5xl">
            Get a Free Roofing Estimate in {siteConfig.business.regionLabel}
            <br />
            <span className="text-primary font-serif">Upgrade Your Home Today</span>
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          {/* ✅ KEYWORD + LOCATION BOOST */}
          <p className="mx-auto mt-5 max-w-xl text-lg text-stone-700">
            Contact <BrandLink className="font-semibold text-stone-900">{siteConfig.business.name}</BrandLink> for expert roof repair, roof
            replacement, siding, and exterior services in{" "}
            {siteConfig.business.regionLabel}. We deliver reliable, high-quality
            results for residential and commercial properties.
          </p>
        </Reveal>

        {/* ✅ Hidden SEO boost */}
        <h2 className="sr-only">
          Roofing Contractor Essex County NJ – Free Estimate for Roof Repair,
          Roof Replacement, and Exterior Services
        </h2>

        <Reveal delay={0.12}>
          {/* 💰 Financing Box */}
          <div className="mx-auto mt-8 w-fit max-w-2xl rounded-2xl border-2 border-primary/50 bg-white/95 px-8 py-5 shadow-lg backdrop-blur-md">
            <div className="flex items-center justify-center gap-3">
              <Banknote className="h-7 w-7 shrink-0 text-primary" />
              <p className="text-xl font-extrabold uppercase tracking-wide text-primary">
                100% Financing Available
              </p>
            </div>
            <p className="mt-2 text-center text-sm font-semibold text-stone-600 whitespace-normal md:whitespace-nowrap">
              No money down — start your roofing project today and pay at your
              own pace.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          {/* 📞 CTA BUTTONS (IMPROVED TEXT) */}
          <div className="mt-8 mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-semibold shadow-md"
            >
              <a href={`tel:${siteConfig.phones.english}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call Now (English)
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary bg-white text-primary hover:bg-primary/10 px-8 py-6 text-base font-semibold shadow-sm"
            >
              <a href={`tel:${siteConfig.phones.spanish}`}>
                <Phone className="mr-2 h-5 w-5" />
                Llamar Ahora (Español)
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          {/* 📧 CONTACT INFO */}
          <div className="space-y-1 text-sm text-stone-700">
            <p className="font-medium">English & Español Available</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-bold text-stone-900 underline decoration-secondary underline-offset-4 hover:text-primary"
            >
              {siteConfig.email}
            </a>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
