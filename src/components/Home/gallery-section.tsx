"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/Home/section-heading";
import { BrandLink } from "@/components/ui/brand-link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { GalleryItem } from "@/types/site";

const GALLERY_ITEMS: GalleryItem[] = [
  {
    title: "Roof Replacement in Essex County NJ",
    image: "/images/gallery-roof-1.webp",
    category: "roofing",
  },
  {
    title: "Architectural Shingle Roofing Installation",
    image: "/images/gallery-roof-2.webp",
    category: "roofing",
  },
  {
    title: "Storm Damage Roof Repair",
    image: "/images/service-dormers.webp",
    category: "roofing",
  },
  {
    title: "Siding Installation & Exterior Upgrade",
    image: "/images/service-siding.webp",
    category: "siding",
  },
  {
    title: "Chimney Repair & Restoration",
    image: "/images/gallery-chimney-1.webp",
    category: "chimney",
  },
  {
    title: "Custom Home Addition Project",
    image: "/images/service-additions.webp",
    category: "additions",
  },
];

export function GallerySection() {
  const [expandedItem, setExpandedItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (!expandedItem) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setExpandedItem(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [expandedItem]);

  return (
    <>
      <Section
        id="gallery"
        className="bg-background"
        aria-label="Roofing and exterior project gallery"
      >
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Project Gallery"
              title="Roofing & Exterior Projects in Essex County NJ"
              description={
                <>
                  Explore recent roof replacement, siding installation, chimney
                  repair, and exterior renovation projects completed by{" "}
                  <BrandLink>Gutama Home Improvement</BrandLink>
                  across Essex County, NJ.
                </>
              }
            />
          </Reveal>

          {/* ✅ HIDDEN SEO BOOST */}
          <h2 className="sr-only">
            Roof Replacement, Roof Repair, Siding, and Chimney Projects in Essex
            County NJ
          </h2>

          <StaggerGroup
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            delay={0.08}
          >
            {GALLERY_ITEMS.map((item) => (
              <StaggerItem key={item.image}>
                <article className="glass-card overflow-hidden border transition-all duration-500 hover:-translate-y-1 hover:border-secondary/40">
                  <button
                    type="button"
                    className="relative block h-64 w-full cursor-zoom-in"
                    aria-label={`Expand image for ${item.title}`}
                    onClick={() => setExpandedItem(item)}
                  >
                    <Image
                      src={item.image}
                      alt={`${item.title} by roofing contractor in Essex County NJ`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={60}
                    />
                  </button>

                  <div className="p-4">
                    {/* ✅ CATEGORY WITH CONTEXT */}
                    <p className="text-xs uppercase tracking-[0.18em] text-secondary">
                      {item.category} project
                    </p>

                    {/* ✅ KEYWORD-ENHANCED TITLE */}
                    <h3 className="mt-2 font-serif text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      {expandedItem ? (
        <div
          className="fixed inset-0 z-90 flex items-center justify-center bg-black/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={expandedItem.title}
          onClick={() => setExpandedItem(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white transition hover:bg-white/20"
            aria-label="Close expanded image"
            onClick={() => setExpandedItem(null)}
          >
            Close
          </button>

          <div
            className="relative h-[75vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-white/15 bg-black"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={expandedItem.image}
              alt={`${expandedItem.title} by roofing contractor in Essex County NJ`}
              fill
              className="object-contain"
              sizes="100vw"
              quality={60}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}

