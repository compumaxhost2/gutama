import type { Metadata, Viewport } from "next";
import Script from "next/script";

import { siteConfig, siteUrl } from "@/config/site";

const pagePath = "/blog/gutter-installation-essex-county-nj-2026";
const pageUrl = `${siteUrl}${pagePath}`;
const imageUrl = `${siteUrl}/blog/gutter-installation-essex-county-nj.webp`;
const title = "Gutter Installation Essex County NJ: 2026 Guide";
const headline =
    "Gutter Installation in Essex County, NJ: Costs, Types, and How to Choose the Right System in 2026";
const description =
    "Explore gutter installation in Essex County, NJ. Compare seamless gutters, installation costs, replacement options, and tips for choosing the right contractor.";

export const viewport: Viewport = { themeColor: "#ffffff" };

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title,
    description,
    keywords: [
        "gutter installation Essex County NJ",
        "gutter installation contractors",
        "gutter replacement Essex County NJ",
        "seamless gutters NJ",
        "gutter installation cost New Jersey",
        "professional gutter contractors near me",
        "rain gutter systems for homes",
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
        title: "Gutter Installation Essex County NJ: Costs and Types in 2026",
        description:
            "Discover gutter installation costs, seamless gutter options, replacement signs, and expert tips for choosing the right gutter system in Essex County, NJ.",
        url: pageUrl,
        siteName: siteConfig.business.name,
        images: [
            {
                url: imageUrl,
                width: 1200,
                height: 630,
                alt: "Professional gutter installation on a residential home in Essex County, New Jersey",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title,
        description:
            "Compare gutter types, installation costs, and replacement options for your Essex County, NJ home. Learn how to choose the right gutter contractor.",
        images: [imageUrl],
    },
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const faqQuestions: [string, string][] = [
        [
            "How much does gutter installation cost in Essex County, NJ?",
            "The price depends on gutter length, material, roof height, accessibility, and downspout configuration. Straightforward installations generally cost less than projects involving complex rooflines, fascia repairs, or extensive removal. Ask for a site-specific estimate with labor, materials, and additional charges itemized so you can compare contractors accurately.",
        ],
        [
            "Are seamless gutters better than traditional gutters?",
            "Seamless gutters have fewer joints along each straight run, reducing the number of potential leak points. They also provide a clean, custom-fitted appearance. Sectional gutters can be less expensive initially and easier to replace in small sections. The better option depends on your budget, roofline, maintenance preferences, and installation quality.",
        ],
        [
            "How do I know if my gutters need replacement?",
            "Frequent leaks, extensive corrosion, sagging, separated joints, and recurring overflow can indicate that replacement is worth considering. However, clogged downspouts or improper gutter slope may be repairable. A professional inspection can identify the underlying cause and help determine whether a repair or complete replacement offers better long-term value.",
        ],
        [
            "What gutter material is best for New Jersey weather?",
            "Aluminum is a common choice because it is lightweight, corrosion-resistant, and available in multiple colors. Steel and copper may suit particular design or durability requirements, while vinyl can work for some budget-conscious projects. Correct sizing, secure installation, and regular maintenance are essential regardless of the material selected.",
        ],
        [
            "How long does gutter installation take?",
            "Many straightforward residential gutter installations can be completed within a day, although larger properties and complex rooflines may require more time. Removal of old gutters, fascia repairs, difficult access, and additional drainage work can extend the schedule. Your contractor should provide an estimated timeline after evaluating the property.",
        ],
        [
            "Should I install gutter guards?",
            "Gutter guards can reduce the amount of leaves and other debris entering a gutter system, particularly on properties with overhanging trees. They do not eliminate maintenance entirely, and some designs can still collect fine debris. Choose a guard compatible with your gutters and roof, and follow the manufacturer's cleaning and inspection recommendations.",
        ],
        [
            "Which areas does Gutama Home Improvement serve?",
            "Homeowners can contact Gutama Home Improvement to ask about gutter services in Essex County, NJ, including East Orange, Orange, Irvington, Belleville, Bloomfield, Caldwell, Cedar Grove, Essex Fells, Glen Ridge, Livingston, Maplewood, Millburn, North Caldwell, Nutley, Roseland, South Orange, Verona, and West Orange. Confirm current service availability directly with the company.",
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
                datePublished: "2026-10-19T00:00:00+00:00",
                dateModified: "2026-10-19T00:00:00+00:00",
                inLanguage: "en-US",
                keywords: [
                    "Gutter Installation Essex County NJ",
                    "Gutter installation contractors",
                    "Gutter replacement Essex County NJ",
                    "Seamless gutters NJ",
                    "Gutter installation cost in New Jersey",
                    "Rain gutter systems for homes",
                    "Professional gutter contractors near me",
                ],
                articleSection: [
                    "Gutter Installation",
                    "Gutter Replacement",
                    "Seamless Gutters",
                    "Gutter Installation Costs",
                    "Gutter Maintenance",
                ],
                about: [
                    {
                        "@type": "Thing",
                        name: "Gutter installation",
                    },
                    {
                        "@type": "Thing",
                        name: "Seamless gutters",
                    },
                    {
                        "@type": "Thing",
                        name: "Residential rainwater drainage",
                    },
                ],
                contentLocation: [
                    {
                        "@type": "Place",
                        name: "Essex County, New Jersey",
                    },
                    {
                        "@type": "Place",
                        name: "East Orange, New Jersey",
                    },
                    {
                        "@type": "Place",
                        name: "Bloomfield, New Jersey",
                    },
                    {
                        "@type": "Place",
                        name: "Livingston, New Jersey",
                    },
                    {
                        "@type": "Place",
                        name: "West Orange, New Jersey",
                    },
                    {
                        "@type": "Place",
                        name: "Montclair, New Jersey",
                    },
                ],
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
                        name: "Gutter Installation in Essex County, NJ",
                        item: pageUrl,
                    },
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
                description:
                    "A practical guide to gutter installation costs, seamless gutter options, replacement, and contractor selection in Essex County, New Jersey.",
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
