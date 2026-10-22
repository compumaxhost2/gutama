import { cn } from "@/lib/utils";

import type { GalleryCategory } from "@/components/gallery/gallery-data";

interface GalleryFiltersProps {
  categories: GalleryCategory[];
  active: GalleryCategory;
  onSelect: (category: GalleryCategory) => void;
}

export function GalleryFilters({ categories, active, onSelect }: GalleryFiltersProps) {
  return (
    <div className="mb-12 flex flex-wrap justify-center gap-3">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={cn(
            "rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 shadow-sm cursor-pointer",
            active === cat
              ? "bg-primary text-white shadow-md ring-2 ring-primary/40"
              : "border border-stone-300/80 bg-white/90 text-stone-700 hover:border-primary/50 hover:bg-white hover:text-stone-900"
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
