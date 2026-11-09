import type { Metadata, Viewport } from "next";
import Script from "next/script";

import { siteConfig, siteUrl } from "@/config/site";

const pagePath = "/blog/common-causes-roof-leaks-new-jersey-homes";
const pageUrl = `${siteUrl}${pagePath}`;
const imageUrl = `${siteUrl}/blog/roof-leak-repair-new-jersey.webp`;
const title = "Common Causes of Roof Leaks in New Jersey Homes | Gutama Roofing";
const headline =
    "Common Causes of Roof Leaks in New Jersey Homes and How to Fix Them";
const description =
    "Discover common causes of roof leaks in New Jersey homes, warning signs, repair options, and expert tips to protect your home from water damage.";

export const viewport: Viewport = { themeColor: "#ffffff" };

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title,
    description,
    keywords: [
        "roof leaks in New Jersey homes",
        "roof leak repair NJ",
        "New Jersey roofing contractor",
        "roof damage repair",
        "missing shingles",
        "roof flashing repair",
        "ice dams",
        "storm damage roof repair",
        "roof inspection NJ",
        "residential roofing",
        siteConfig.business.name,
    ],
    authors: [{ name: siteConfig.business.name }],
    creator: siteConfig.business.name,
    publisher: siteConfig.business.name,
    robots: { index: true, follow: true },
    alternates: { canonical: pageUrl },
    referrer: "strict-origin-when-cross-origin",
    openGraph: {
        type: "article",
        title,
        description:
            "Learn why New Jersey roofs leak, how to identify warning signs, and which repairs can help prevent costly water damage.",
        url: pageUrl,
        siteName: siteConfig.business.name,
        images: [
            {
                url: imageUrl,
                width: 1200,
                height: 630,
                alt: "Residential roof inspection and leak repair for New Jersey homes",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title,
        description:
            "Discover common roof leak causes, repair solutions, and prevention tips for New Jersey homeowners.",
        images: [imageUrl],
    },
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const faqQuestions: [string, string][] = [
        [
            "What is the most common cause of roof leaks in New Jersey?",
            "Damaged shingles, deteriorating flashing, and poorly maintained drainage systems are common causes. Winter ice dams and storm damage can also contribute. The exact cause depends on the roof's age, construction, maintenance history, and exposure to local weather.",
        ],
        [
            "How do I know if my roof is leaking?",
            "Look for ceiling stains, peeling paint, damp attic insulation, musty odors, or water marks near chimneys and skylights. These signs warrant investigation, even if you cannot see missing shingles. Because water can travel before appearing indoors, a professional inspection may be needed to locate the entry point.",
        ],
        [
            "Can I repair a roof leak myself?",
            "Minor maintenance, such as clearing safely accessible gutters, may be manageable for homeowners. Roof repairs are more hazardous, especially on steep, wet, or icy surfaces. Incorrect patching can also leave hidden damage untreated. For active leaks, damaged flashing, or suspected structural problems, contact a qualified roofing professional.",
        ],
        [
            "How much does it cost to fix a leaking roof in New Jersey?",
            "The price depends on the repair's complexity, materials, accessibility, and interior damage. Replacing a few shingles usually involves less work than repairing roof decking or extensive flashing. Request an itemized estimate after an inspection rather than relying on a general price that may not reflect your home's condition.",
        ],
        [
            "Can a roof leak cause mold?",
            "Yes. Persistent moisture can encourage mold growth on drywall, wood, insulation, and other building materials. Repairing the roof alone may not resolve the problem if wet materials remain inside. Address the water source promptly, dry affected areas thoroughly, and seek qualified remediation advice when mold or extensive moisture damage is present.",
        ],
        [
            "Should I replace my roof if it keeps leaking?",
            "Not necessarily. Repeated leaks may indicate poor previous repairs, failing flashing, or isolated damage. However, widespread shingle deterioration, an aging roof, or recurring problems across multiple areas may make replacement more practical. A thorough inspection can help compare the likely cost and durability of continued repairs with a new roof.",
        ],
        [
            "When should I call a roofer after a storm?",
            "Contact a roofer promptly if you notice missing shingles, ceiling leaks, damaged flashing, or fallen branches on the roof. If water is entering the home, protect belongings and arrange professional assistance. Stay away from sagging ceilings, exposed electrical components, and unsafe roof areas.",
        ],
    ];

    const articleSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BlogPosting",
                "@id": `${pageUrl}#blogposting`,
                mainEntityOfPage: {
                    "@type": "WebPage",
                    "@id": pageUrl,
                },
                headline,
                description,
                image: {
                    "@type": "ImageObject",
                    url: imageUrl,
                },
                author: {
                    "@type": "Organization",
                    "@id": `${siteUrl}/#organization`,
                    name: siteConfig.business.name,
                    url: `${siteUrl}/`,
                },
                publisher: {
                    "@type": "Organization",
                    "@id": `${siteUrl}/#organization`,
                    name: siteConfig.business.name,
                    url: `${siteUrl}/`,
                    logo: {
                        "@type": "ImageObject",
                        url: `${siteUrl}/images/logo.webp`,
                    },
                },
                datePublished: "2026-10-27T00:00:00+00:00",
                dateModified: "2026-10-27T00:00:00+00:00",
                inLanguage: "en-US",
                keywords: [
                    "roof leaks in New Jersey homes",
                    "roof leak repair NJ",
                    "New Jersey roofing contractor",
                    "roof flashing repair",
                    "ice dam prevention",
                    "storm damage roof repair",
                ],
                articleSection: [
                    "Roof Leak Causes",
                    "Roof Repair",
                    "Roof Maintenance",
                    "Frequently Asked Questions",
                ],
                about: [
                    {
                        "@type": "Thing",
                        name: "Roof leak repair",
                    },
                    {
                        "@type": "Place",
                        name: "New Jersey",
                    },
                    {
                        "@type": "Thing",
                        name: "Residential roofing",
                    },
                ],
                isPartOf: {
                    "@type": "Blog",
                    name: "Gutama Roofing Blog",
                    url: `${siteUrl}/blog`,
                },
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${pageUrl}#breadcrumb`,
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        name: "Home",
                        item: `${siteUrl}/`,
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        name: "Blog",
                        item: `${siteUrl}/blog`,
                    },
                    {
                        "@type": "ListItem",
                        position: 3,
                        name: "Common Causes of Roof Leaks in New Jersey Homes",
                        item: pageUrl,
                    },
                ],
            },
            {
                "@type": "RoofingContractor",
                "@id": `${siteUrl}/#roofingcontractor`,
                name: siteConfig.business.name,
                url: `${siteUrl}/`,
                description:
                    "Roofing services for homeowners, including roof inspections, leak repairs, and roof damage assessment.",
                areaServed: {
                    "@type": "State",
                    name: "New Jersey",
                },
                knowsAbout: [
                    "Roof leak repair",
                    "Residential roofing",
                    "Roof inspections",
                    "Shingle repair",
                    "Roof flashing",
                    "Storm damage roof repair",
                    "Ice dam prevention",
                ],
            },
            {
                "@type": "FAQPage",
                "@id": `${pageUrl}#faq`,
                mainEntity: faqQuestions.map(([name, text]) => ({
                    "@type": "Question",
                    name,
                    acceptedAnswer: {
                        "@type": "Answer",
                        text,
                    },
                })),
            },
            {
                "@type": "WebPage",
                "@id": `${pageUrl}#webpage`,
                url: pageUrl,
                name: headline,
                description,
                isPartOf: {
                    "@type": "WebSite",
                    "@id": `${siteUrl}/#website`,
                    url: `${siteUrl}/`,
                    name: siteConfig.business.name,
                },
                inLanguage: "en-US",
                breadcrumb: {
                    "@id": `${pageUrl}#breadcrumb`,
                },
                mainEntity: {
                    "@id": `${pageUrl}#blogposting`,
                },
            },
        ],
    };

    return (
        <>
            {children}
            <Script
                id="blogposting-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(articleSchema),
                }}
            />
        </>
    );
}

