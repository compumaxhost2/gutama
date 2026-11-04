"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/Home/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { BlogBreadcrumbs } from "@/components/blog/blog-breadcrumbs";

type FaqItem = {
    q: string;
    a: string;
};

type SectionType = {
    subtitle: string;
    content: React.ReactNode;
    faqs?: readonly FaqItem[];
};

type BlogDetailsProps = {
    title: string;
    description: SectionType[];
    image: string;
    sections: SectionType[];
};

export function BlogDetails({
    title,
    description,
    image,
    sections,
}: BlogDetailsProps) {
    const intro = description[0];
    const [activeFaq, setActiveFaq] = useState<string | null>(null);

    const toSlug = (value: string) =>
        value
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, "")
            .trim()
            .replace(/\s+/g, "-");

    return (
        <>
            <BlogBreadcrumbs title={title} />

            <Section className="relative -mt-8 overflow-hidden pb-0 md:-mt-8 md:pb-12 lg:pb-20">
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_20%,hsla(43,56%,52%,0.16),transparent_38%),radial-gradient(circle_at_88%_12%,hsla(0,78%,68%,0.2),transparent_40%)]"
                />
                <Container>

                    <Reveal>
                        <SectionHeading
                            eyebrow="Blog Article"
                            title={title}
                            as="h1"
                        />
                    </Reveal>

                    <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-10">
                        <Reveal>
                            <div className="glass-card group relative overflow-hidden border-secondary/20 shadow-luxury">
                                <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20 bg-linear-to-b from-black/40 to-transparent" />
                                <Image
                                    src={image}
                                    alt={title}
                                    width={1200}
                                    height={800}
                                    className="h-64 w-full sm:h-72 lg:h-140"
                                    priority
                                    loading="eager"
                                />
                            </div>
                        </Reveal>

                        <Reveal delay={0.05}>
                            <div className="glass-card border-secondary/20 p-6 md:p-8">
                                <p className="mb-4 inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-secondary md:text-sm">
                                    <span className="h-px w-6 bg-secondary" />
                                    {intro?.subtitle ?? "Introduction"}
                                </p>

                                <div className="space-y-4 text-base leading-loose text-muted-foreground md:text-[1.02rem] [&_a]:font-medium [&_a]:text-secondary [&_a]:underline-offset-4 hover:[&_a]:underline [&_p]:text-balance">
                                    {intro?.content}
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <Reveal delay={0.08}>
                        <nav
                            className="mt-10 rounded-xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm"
                            aria-label="Article sections"
                        >
                            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-secondary/90">
                                In this article
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {sections.map((section) => {
                                    const sectionId = toSlug(section.subtitle);

                                    return (
                                        <a
                                            key={sectionId}
                                            href={`#${sectionId}`}
                                            className="rounded-full border border-secondary/25 bg-secondary/10 px-3 py-1.5 text-xs font-medium text-secondary transition-colors hover:bg-secondary/20"
                                        >
                                            {section.subtitle}
                                        </a>
                                    );
                                })}
                            </div>
                        </nav>
                    </Reveal>

                    <article className="mx-auto mt-14 max-w-6xl space-y-8 lg:max-w-7xl">
                        {sections.map((section, index) => (
                            <Reveal key={index} delay={index * 0.05}>
                                <section
                                    id={toSlug(section.subtitle)}
                                    className="glass-card scroll-mt-28 border-border/60 p-6 md:p-8"
                                >
                                    <h2 className="mb-4 text-xl font-semibold text-foreground md:text-2xl">
                                        {section.subtitle}
                                    </h2>

                                    <div className="space-y-4 text-base leading-loose text-muted-foreground md:text-[1.02rem] [&_a]:font-medium [&_a]:text-secondary [&_a]:underline-offset-4 hover:[&_a]:underline [&_h4]:mt-6 [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-secondary [&_li]:marker:text-secondary [&_p]:text-balance [&_table]:w-full [&_table]:border-collapse [&_table]:overflow-hidden [&_table]:rounded-md [&_td]:border [&_td]:border-border/70 [&_td]:p-2.5 [&_th]:border [&_th]:border-border/70 [&_th]:bg-muted/40 [&_th]:p-2.5 [&_th]:text-secondary [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-1.5">
                                        {section.content}
                                    </div>

                                    {section.faqs && section.faqs.length > 0 && (
                                        <div className="mt-5 flex flex-col gap-0">
                                            {section.faqs.map((item, faqIndex) => {
                                                const faqKey = `${index}-${faqIndex}`;
                                                const isOpen = activeFaq === faqKey;

                                                return (
                                                    <div key={item.q} className="border-b border-border/40">
                                                        <button
                                                            onClick={() =>
                                                                setActiveFaq(isOpen ? null : faqKey)
                                                            }
                                                            className="flex w-full cursor-pointer items-center justify-between gap-4 bg-transparent py-6 text-left"
                                                        >
                                                            <span
                                                                className={[
                                                                    "font-serif text-lg transition-colors duration-200",
                                                                    isOpen
                                                                        ? "text-secondary"
                                                                        : "text-foreground",
                                                                ].join(" ")}
                                                            >
                                                                {item.q}
                                                            </span>
                                                            <motion.div
                                                                animate={{ rotate: isOpen ? 90 : 0 }}
                                                                transition={{ duration: 0.3 }}
                                                            >
                                                                <ChevronRight
                                                                    size={18}
                                                                    className={
                                                                        isOpen
                                                                            ? "text-secondary"
                                                                            : "text-muted-foreground"
                                                                    }
                                                                />
                                                            </motion.div>
                                                        </button>
                                                        <AnimatePresence initial={false}>
                                                            {isOpen && (
                                                                <motion.div
                                                                    initial={{ height: 0, opacity: 0 }}
                                                                    animate={{
                                                                        height: "auto",
                                                                        opacity: 1,
                                                                    }}
                                                                    exit={{ height: 0, opacity: 0 }}
                                                                    transition={{
                                                                        duration: 0.35,
                                                                        ease: [0.22, 1, 0.36, 1],
                                                                    }}
                                                                    className="overflow-hidden"
                                                                >
                                                                    <p className="pb-6 text-sm leading-loose text-muted-foreground">
                                                                        {item.a}
                                                                    </p>
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}

                                    <div className="mt-6 h-px w-full bg-linear-to-r from-secondary/40 via-secondary/10 to-transparent" />
                                </section>
                            </Reveal>
                        ))}
                    </article>
                </Container>
            </Section>
        </>
    );
}
