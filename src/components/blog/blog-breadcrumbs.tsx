import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Container } from "@/components/ui/container";

type BlogBreadcrumbsProps = {
  title: string;
};

export function BlogBreadcrumbs({ title }: BlogBreadcrumbsProps) {
  return (
    <nav
      className="sticky top-24.25 z-20 border-b border-secondary/10 bg-background/80 backdrop-blur-md"
      aria-label="Breadcrumb"
    >
      <Container className="py-2 sm:py-3">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] sm:text-xs md:text-sm">
          <Link
            href="/"
            className="relative z-10 shrink-0 text-muted-foreground transition-colors duration-200 hover:text-secondary"
          >
            Home
          </Link>
          <ChevronRight
            size={12}
            className="shrink-0 text-muted-foreground/40 sm:size-3.5"
          />
          <Link
            href="/blog"
            className="relative z-10 shrink-0 text-muted-foreground transition-colors duration-200 hover:text-secondary"
          >
            Blog
          </Link>
          <ChevronRight
            size={12}
            className="shrink-0 text-muted-foreground/40 sm:size-3.5"
          />
          <span className="w-full font-medium text-foreground sm:w-auto sm:shrink-0 sm:truncate">
            {title}
          </span>
        </div>
      </Container>
    </nav>
  );
}