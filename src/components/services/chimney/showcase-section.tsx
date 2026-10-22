import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

function GalleryTile({
  src,
  location,
  title,
  className = "",
  titleSize = "text-lg",
}: {
  src: string;
  location: string;
  title: string;
  className?: string;
  titleSize?: string;
}) {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-[1.07]"
        sizes="(max-width: 1024px) 100vw, 33vw"
        quality={60}
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-background/70 p-[clamp(16px,2vw,32px)] opacity-0 transition-opacity duration-400 group-hover:opacity-100">
        <p className="mb-1.5 text-[10px] tracking-[0.2em] uppercase text-secondary">{location}</p>
        <p className={`font-serif text-stone-900 ${titleSize}`}>{title}</p>
      </div>
    </div>
  );
}

export function ChimneyShowcaseSection() {
  const content = {
        title: "Restoration",
        accent: "Projects",
        featured: { src: "/images/gutama new images/chimney.jpg", location: "Montclair, NJ", title: "Full Chimney Rebuild & Flashing Upgrade" },
        items: [
          { src: "/images/gallery-chimney-1.webp", location: "Maplewood, NJ", title: "Masonry Repointing Repair" },
          { src: "/images/gutama new images/chimney.jpg", location: "Livingston, NJ", title: "Crown & Cap Restoration" },
          { src: "/images/gallery-chimney-1.webp", location: "Verona, NJ", title: "Leak Investigation & Flashing Replacement" },
          { src: "/images/gutama new images/chimney.jpg", location: "Millburn, NJ", title: "Brick Stabilization Project" },
        ],
      };

  return (
    <section className="bg-[#dfd0c0] text-stone-900 py-16 px-4 md:py-28 md:px-6 border-t border-stone-300">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary"><span className="h-px w-6 bg-secondary" />Our Work</p>
            <h2 className="m-0 font-serif text-[clamp(36px,4vw,52px)] text-stone-900">{content.title} <em className="text-secondary">{content.accent}</em></h2>
          </div>
          <Button asChild variant="outline" className="h-12 border-secondary/40 px-6 text-sm text-secondary hover:bg-secondary/10 hover:text-secondary"><Link href="/gallery">Full Portfolio <ArrowUpRight size={14} className="ml-2" /></Link></Button>
        </div>
        <div className="grid grid-cols-2 gap-1.5 lg:grid-cols-[1.5fr_1fr_1fr] lg:grid-rows-[auto_auto] lg:gap-1">
          <GalleryTile src={content.featured.src} location={content.featured.location} title={content.featured.title} className="col-span-2 min-h-60 lg:col-span-1 lg:row-span-2 lg:min-h-130" titleSize="text-2xl" />
          {content.items.map((item) => (
            <GalleryTile key={`${item.title}-${item.location}`} src={item.src} location={item.location} title={item.title} className="aspect-4/3" titleSize="text-base" />
          ))}
        </div>
      </div>
    </section>
  );
}

