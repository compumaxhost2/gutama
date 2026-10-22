import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  as?: "h1" | "h2";
  description?: React.ReactNode;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({ eyebrow, title, as: Heading = "h2", description, centered = true, className }: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">{eyebrow}</p> : null}
      <Heading className="mt-3 font-serif text-3xl font-bold leading-tight text-inherit md:text-4xl lg:text-5xl">{title}</Heading>
      <div className={cn("gold-divider mt-5", !centered && "mx-0!")} />
      {description ? <p className={cn("mt-4 max-w-2xl opacity-80 md:text-lg", centered && "mx-auto")}>{description}</p> : null}
    </div>
  );
}
