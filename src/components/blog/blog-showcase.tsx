"use client";


import { BlogGrid } from "@/components/blog/blog-grid";
import { Container } from "@/components/ui/container";
import { BLOG_PROJECTS } from "@/components/blog/blog-data";
export function BlogShowcase() {
  return (
    <section className="py-14 bg-stone-100 text-stone-900 border-t border-stone-200 min-h-screen">
      <Container>
        <BlogGrid projects={BLOG_PROJECTS} />
      </Container>
    </section>
  );
}