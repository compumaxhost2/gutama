import Image from "next/image";

import { SectionHeading } from "@/components/Home/section-heading";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import type { BeforeAfterItem } from "@/types/site";
import { siteConfig } from "@/config/site";

const BEFORE_AFTER_ITEMS: BeforeAfterItem[] = [
  {
    title: "Roof Replacement Transformation",
    beforeImage: "/images/before-roof.webp",
    afterImage: "/images/after-roof.webp",
  },
  {
    title: "Siding Installation Upgrade",
    beforeImage: "/images/before-siding.webp",
    afterImage: "/images/after-siding.webp",
  },
  {
    title: "Flat Roof Replacement Project",
    beforeImage: "/images/before-flat.webp",
    afterImage: "/images/after-flat.webp",
  },
];

export function BeforeAfterSection() {
  return (
    <Section
      className="border-t border-[#d6c4b2] bg-[#dfd0c0] pb-6 pt-20 md:pb-8 md:pt-24 text-stone-900"
      aria-label="Before and after roofing projects"
    >
      <Container>
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#844b20]">
              Results
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-stone-900 md:text-4xl lg:text-5xl">
              Before & After Roofing Projects in {siteConfig.business.regionLabel}
            </h2>
            <div className="gold-divider mt-5 mx-auto" />
            <p className="mt-4 max-w-2xl text-stone-700 md:text-lg mx-auto">
              See real results from our roof replacement, siding, and flat roofing projects completed across {siteConfig.business.regionLabel}.
            </p>
          </div>
        </Reveal>

        {/* ✅ Hidden SEO boost */}
        <h2 className="sr-only">
          Before and After Roof Replacement, Siding Installation, and Flat Roof
          Projects in {siteConfig.business.regionLabel}
        </h2>

        <StaggerGroup
          className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3"
          delay={0.1}
        >
          {BEFORE_AFTER_ITEMS.map((item) => (
            <StaggerItem key={item.title}>
              <article className="overflow-hidden rounded-xl border border-[#cdbba8] bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="grid grid-cols-2">
                  {/* BEFORE */}
                  <div className="relative h-48">
                    <Image
                      src={item.beforeImage}
                      alt={`Before ${item.title} in ${siteConfig.business.regionLabel}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 33vw"
                      quality={60}
                    />
                    <span className="absolute left-2 top-2 rounded bg-primary px-2 py-1 text-xs font-bold text-white shadow">
                      BEFORE
                    </span>
                  </div>

                  {/* AFTER */}
                  <div className="relative h-48">
                    <Image
                      src={item.afterImage}
                      alt={`After ${item.title} in ${siteConfig.business.regionLabel}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 33vw"
                      quality={60}
                    />
                    <span className="absolute left-2 top-2 rounded bg-secondary px-2 py-1 text-xs font-bold text-secondary-foreground shadow">
                      AFTER
                    </span>
                  </div>
                </div>

                <div className="p-4 text-center">
                  <h3 className="font-serif text-base font-semibold text-stone-900">
                    {item.title}
                  </h3>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}

