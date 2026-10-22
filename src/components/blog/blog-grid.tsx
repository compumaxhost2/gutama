"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import type { BlogProject } from "@/components/blog/blog-data";

interface BlogGridProps {
  projects: BlogProject[];
}

function getCardHeight() {
  return "h-64";
}

export function BlogGrid({ projects }: BlogGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[...projects].reverse().map((project, index) => (
        <Reveal key={project.title} delay={index * 0.04} y={16} className="h-full">
          {/*
           * touch-manipulation  → removes the 300ms tap delay on mobile browsers
           * active:scale-[0.98] → gives tactile "pressed" feedback on tap
           * focus-visible ring  → keyboard accessibility
           */}
          <Link
            href={project.href}
            className="block touch-manipulation transition-transform duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50 focus-visible:rounded-lg"
          >
            <article className="group mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-md transition-all duration-300 hover:border-primary/40 hover:shadow-xl cursor-pointer">

              {/* IMAGE */}
              <div className={`relative w-full overflow-hidden ${getCardHeight()}`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={60}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                {project.date && (
                  <p className="text-xs font-medium text-stone-500 mb-2">
                    {project.date}
                  </p>
                )}

                {/* line-clamp-2 keeps masonry cards consistent in height */}
                <p className="text-sm text-stone-600 line-clamp-2">
                  {project.shortDesc}
                </p>

                {/*
                 * ── KEY UX FIX ─────────────────────────────────────────────
                 * Always-visible "Read article →" CTA.
                 * On desktop: gap animates wider + arrow nudges right on hover.
                 * On mobile: the label + arrow are the persistent signal that
                 * this card is tappable — no accidental discovery required.
                 * ────────────────────────────────────────────────────────────
                 */}
                <div className="mt-3 pt-3 border-t border-stone-100">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:gap-2.5 transition-all duration-300">
                    Read article
                    <ArrowRight
                      className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>

              </div>
            </article>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}