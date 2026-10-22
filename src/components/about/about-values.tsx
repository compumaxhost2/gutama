import { Globe, Hammer, Heart, Shield } from "lucide-react";

import { SectionHeading } from "@/components/Home/section-heading";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";

const VALUES = [
  {
    icon: Hammer,
    title: "Unmatched Craftsmanship",
    description:
      "Every nail, seam, and seal meets exacting standards. We don\u2019t cut corners\u2014we build relationships through the quality of our finished work.",
  },
  {
    icon: Shield,
    title: "Integrity First",
    description:
      "We provide clear, honest estimates with no hidden fees. You\u2019ll always know what to expect, because trust starts with transparency.",
  },
  {
    icon: Globe,
    title: "Bilingual Service",
    description:
      "Our bilingual team serves clients in both English and Espa\u00f1ol\u2014because great service starts with being truly understood.",
  },
  {
    icon: Heart,
    title: "Community Roots",
    description:
      "We live and work in Essex County. Supporting local families isn\u2019t just our job\u2014it\u2019s what drives us every single day.",
  },
];

export function AboutValues() {
  return (
    <Section className="border-t border-stone-300/80 bg-[#dfd0c0] text-stone-900">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our Core Values"
            title="What We Stand For"
            description="Four principles guide every project, every estimate, and every conversation we have with our clients."
          />
        </Reveal>

        <StaggerGroup
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          delay={0.05}
        >
          {VALUES.map(({ icon: Icon, title, description }) => (
            <StaggerItem key={title}>
              <article className="h-full rounded-2xl border border-stone-300/80 bg-white/95 p-7 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
                <div className="mx-auto mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 ring-2 ring-primary/20">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-3 font-serif text-lg font-bold text-stone-900">{title}</h3>
                <p className="text-sm leading-relaxed text-stone-700">{description}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
