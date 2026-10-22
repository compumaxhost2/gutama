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
    image: "/images/gutama new images/roof replacement.jpg",
    category: "roofing",
  },
  {
    title: "Architectural Shingle Roofing Installation",
    image: "/images/gutama new images/roofing.jpg",
    category: "roofing",
  },
  {
    title: "Storm Damage Roof Repair",
    image: "/images/gutama new images/Emergency_roofing.jpg",
    category: "roofing",
  },
  {
    title: "Siding Installation & Exterior Upgrade",
    image: "/images/gutama new images/siding.jpg",
    category: "siding",
  },
  {
    title: "Chimney Repair & Restoration",
    image: "/images/gutama new images/chimney.jpg",
    category: "chimney",
  },
  {
    title: "Custom Home Addition Project",
    image: "/images/gutama new images/home additions.jpg",
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
        className="relative border-t border-red-200 bg-[#f3d9d9] text-stone-900"
        aria-label="Roofing and exterior project gallery"
      >
        <Container>
          <Reveal>
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#9e1c23]">
                Project Gallery
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-stone-900 md:text-4xl lg:text-5xl">
                Roofing & Exterior Projects in Essex County NJ
              </h2>
              <div className="gold-divider mt-5 mx-auto" />
              <p className="mt-4 max-w-2xl text-stone-700 md:text-lg mx-auto">
                Explore recent roof replacement, siding installation, chimney
                repair, and exterior renovation projects completed by{" "}
                <BrandLink className="font-semibold text-stone-900">Gutama Home Improvement</BrandLink>{" "}
                across Essex County, NJ.
              </p>
            </div>
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
                <article className="overflow-hidden rounded-xl border border-rose-200/90 bg-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:border-primary/60 hover:shadow-xl">
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
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={60}
                    />
                  </button>

                  <div className="p-5">
                    {/* ✅ CATEGORY WITH CONTEXT */}
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                      {item.category} project
                    </p>

                    {/* ✅ KEYWORD-ENHANCED TITLE */}
                    <h3 className="mt-2 font-serif text-lg font-semibold text-stone-900">
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

