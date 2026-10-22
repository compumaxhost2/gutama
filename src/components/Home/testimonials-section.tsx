import Image from "next/image";
import { Star } from "lucide-react";

import { SectionHeading } from "@/components/Home/section-heading";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { BrandLink } from "@/components/ui/brand-link";
import type { Testimonial } from "@/types/site";
import { siteConfig } from "@/config/site";

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Michael R.",
    location: "West Orange, NJ",
    text: "Gutama transformed our roof with incredible professionalism. The roof replacement was done efficiently with high-quality workmanship.",
    rating: 5,
    image: "/images/testimonial-1.webp",
  },
  {
    name: "Sandra M.",
    location: "Bloomfield, NJ",
    text: "After a storm, their team handled our roof repair quickly and professionally. Great communication and reliable service.",
    rating: 5,
    image: "/images/testimonial-2.webp",
  },
  {
    name: "Carlos D.",
    location: "Newark, NJ",
    text: "Excelente servicio. Professional roofing team, smooth process, and excellent final results for our home.",
    rating: 5,
    image: "/images/testimonial-3.webp",
  },
];

function withBrandLink(text: string) {
  const firstMatchIndex = text.search(/\bGutama\b/i);

  if (firstMatchIndex === -1) {
    return text;
  }

  const matchedText = text.slice(firstMatchIndex, firstMatchIndex + "Gutama".length);

  return (
    <>
      {text.slice(0, firstMatchIndex)}
      <BrandLink>{matchedText}</BrandLink>
      {text.slice(firstMatchIndex + matchedText.length)}
    </>
  );
}

export function TestimonialsSection() {
  return (
    <Section
      className="border-t border-white/10 bg-black text-white"
      aria-label="Customer reviews for roofing services"
    >
      <Container>
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-secondary">
              Reviews
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              Trusted Roofing Contractor Reviews in {siteConfig.business.regionLabel}
            </h2>
            <div className="gold-divider mt-5 mx-auto" />
            <p className="mt-4 max-w-2xl text-stone-300 md:text-lg mx-auto">
              See what homeowners across {siteConfig.business.regionLabel} say about our roof repair, roof replacement, and exterior services.
            </p>
          </div>
        </Reveal>

        {/* ✅ Hidden SEO boost */}
        <h2 className="sr-only">
          Roofing Contractor Reviews Essex County NJ – Roof Repair, Roof
          Replacement Testimonials
        </h2>

        <StaggerGroup
          className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3"
          delay={0.1}
        >
          {TESTIMONIALS.map((item) => (
            <StaggerItem key={item.name}>
              <article className="h-full rounded-2xl border border-white/10 bg-[#0c0c0e] p-7 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-secondary/50 hover:bg-[#141418]">
                {/* ⭐ Rating */}
                <div className="mb-4 flex items-center gap-1">
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <Star
                      key={`${item.name}-${idx}`}
                      className="h-5 w-5 fill-secondary text-secondary"
                    />
                  ))}
                </div>

                {/* 💬 Review Text (SEO enhanced but natural) */}
                <p className="text-sm italic leading-relaxed text-stone-200">
                  &ldquo;{withBrandLink(item.text)}&rdquo;
                </p>

                {/* 👤 User */}
                <div className="mt-6 flex items-center gap-3">
                  <Image
                    src={item.image}
                    alt={`Customer review from ${item.name} in ${item.location}`}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full border-2 border-secondary/50 object-cover shadow-md"
                  />
                  <div>
                    <p className="font-serif font-semibold text-white">
                      {item.name}
                    </p>
                    <p className="text-sm text-stone-400">
                      {item.location}
                    </p>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}

