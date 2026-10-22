"use client";

import { useMemo, useState } from "react";

import {
  GALLERY_CATEGORIES,
  GALLERY_PROJECTS,
  type GalleryCategory,
} from "@/components/gallery/gallery-data";
import { GalleryFilters } from "@/components/gallery/gallery-filters";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { Container } from "@/components/ui/container";

export function GalleryShowcase() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return GALLERY_PROJECTS;
    }

    return GALLERY_PROJECTS.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="py-14 bg-[#f3d9d9] text-stone-900 min-h-screen">
      <Container>
        <GalleryFilters
          categories={GALLERY_CATEGORIES}
          active={activeCategory}
          onSelect={setActiveCategory}
        />
        <GalleryGrid projects={filteredProjects} activeCategory={activeCategory} />
      </Container>
    </section>
  );
}
