import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/Home/section-heading";
import { Container } from "@/components/ui/container";
import { BrandLink } from "@/components/ui/brand-link";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";

const STORY_BULLETS = [
  "Family-owned and operated since 2008",
  "Fully licensed, bonded, and insured in New Jersey",
  "Bilingual team — English & Español",
  "5-year installation warranty on all services",
  "Free inspections and transparent, no-obligation estimates",
  "Rapid-response emergency repair service",
];

export function AboutStory() {
  return (
    <Section className="border-t border-stone-200 bg-stone-100 text-stone-900">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our Story"
            title="Built on Trust, Driven by Craftsmanship"
            description={`What started as a local roofing operation in ${siteConfig.business.regionLabel} has grown into one of the region's most trusted names in home improvement—without ever losing its family-first values.`}
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Team Image */}
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-stone-300/80 bg-white shadow-xl">
              <Image
                src="/images/gutama new images/exterior.jpg"
                alt={`Roofing contractor team working on residential roofing project in ${siteConfig.business.regionLabel}`}
                width={1200}
                height={800}
                className="h-64 w-full object-cover sm:h-72 lg:h-120"
                quality={85}
              />
            </div>
          </Reveal>

          {/* Story Text */}
          <Reveal delay={0.06}>
            <div>
              <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-primary">
                <span className="h-px w-6 bg-primary" />
                Since {siteConfig.business.foundedYear}
              </p>

              <p className="mb-5 text-base leading-loose text-stone-700">
                Antonio <BrandLink className="text-stone-900 font-semibold hover:text-primary">Gutama</BrandLink> founded <BrandLink className="text-stone-900 font-semibold hover:text-primary">{siteConfig.business.name}</BrandLink> with a simple belief: every homeowner
                deserves honest advice, premium materials, and work done right the first time. That
                commitment has never wavered.
              </p>

              <p className="mb-8 text-base leading-loose text-stone-700">
                From a single crew in Newark to a full-service exterior contractor covering all of{" "}
                {siteConfig.business.regionLabel}, our growth has been earned through referrals,
                repeat customers, and a relentless focus on quality.
              </p>

              <ul className="space-y-3">
                {STORY_BULLETS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm font-medium text-stone-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

