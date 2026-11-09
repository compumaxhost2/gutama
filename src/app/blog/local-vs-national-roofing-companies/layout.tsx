import type { Metadata, Viewport } from "next";
import Script from "next/script";

import { siteConfig, siteUrl } from "@/config/site";

const pagePath = "/blog/local-vs-national-roofing-companies";
const pageUrl = `${siteUrl}${pagePath}`;
const imageUrl = `${siteUrl}/blog/local-vs-national-roofing-companies.webp`;
const title = "Local Roofing Companies vs. National Contractors | Gutama Roofing NJ";
const headline =
    "What Distinguishes Hometown Roofing Companies from Larger National Contractors for Roof Replacement?";
const description =
    "Compare local roofing companies vs. national contractors for roof replacement in Essex County, NJ. Discover the benefits of local roofing expertise.";

export const viewport: Viewport = { themeColor: "#ffffff" };

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title,
    description,
    keywords: [
        "local roofing companies vs national contractors",
        "local roofing company NJ",
        "roof replacement Essex County NJ",
        "roofing contractors New Jersey",
        "local roofers",
        "residential roof replacement",
        "roofing services Essex County",
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
            "Discover why hometown roofing companies can offer personalized service, local expertise, and reliable roof replacement solutions in Essex County, NJ.",
        url: pageUrl,
        siteName: siteConfig.business.name,
        images: [
            {
                url: imageUrl,
                width: 1200,
                height: 630,
                alt: "Professional local roofing contractors completing a residential roof replacement in New Jersey",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title,
        description:
            "Learn how local roofing contractors compare with national companies for roof replacement, workmanship, customer service, and local expertise in NJ.",
        images: [imageUrl],
    },
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const faqQuestions: [string, string][] = [
        [
            "Are local roofing companies better than national contractors?",
            "Not automatically. However, established local roofing companies may offer stronger familiarity with regional building requirements, more direct communication, and accessible local support. The best choice depends on contractor qualifications, workmanship, insurance, references, and written warranty coverage.",
        ],
        [
            "How do I choose a reliable local roofing contractor?",
            "Check contractor registration, insurance documentation, customer reviews, references, and previous projects. Request a detailed written estimate and confirm who will supervise the installation. Always review workmanship warranties and manufacturer coverage before signing a contract.",
        ],
        [
            "Does hiring a local roofing company reduce replacement costs?",
            "It can sometimes reduce certain logistical expenses, but local contractors are not always cheaper. Material selection, roof complexity, labor, disposal, and necessary structural repairs influence the final price. Compare detailed estimates rather than choosing a contractor based on location or price alone.",
        ],
        [
            "How long does a typical roof replacement take?",
            "Many residential roof replacements take approximately one to several days, depending on roof size, material, weather, accessibility, and underlying damage. Larger or more complicated projects may take longer. Your contractor should provide a realistic schedule before work begins.",
        ],
        [
            "What are the signs that I need a new roof?",
            "Frequent leaks, missing shingles, curling or cracked shingles, granule loss, ceiling stains, and visible sagging can indicate roofing problems. However, these symptoms do not always require complete replacement. A professional inspection can determine whether repairs or a new roofing system are appropriate.",
        ],
        [
            "What warranty should I expect from a roofing contractor?",
            "Ask for both manufacturer material coverage and a written workmanship warranty. These warranties cover different aspects of the project and may have exclusions or maintenance requirements. Review their duration, limitations, transferability, and claim procedures before approving the replacement.",
        ],
        [
            "Is a roof inspection necessary before replacement?",
            "Yes. An inspection helps identify damaged shingles, deteriorated decking, ventilation problems, flashing failures, and moisture intrusion. It also helps determine whether repairs are sufficient or a complete replacement is the better long-term investment.",
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
                description:
                    "Discover how hometown roofing companies compare with national contractors for roof replacement, including local expertise, customer service, workmanship, and costs in Essex County, NJ.",
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
                datePublished: "2026-11-04T00:00:00+00:00",
                dateModified: "2026-11-04T00:00:00+00:00",
                inLanguage: "en-US",
                keywords: [
                    "local roofing companies vs national contractors",
                    "roof replacement Essex County NJ",
                    "local roofing contractors NJ",
                    "residential roof replacement",
                    "hometown roofing companies",
                ],
                articleSection: [
                    "Roof Replacement",
                    "Roofing Contractors",
                    "Local Roofing Services",
                ],
                about: [
                    {
                        "@type": "Thing",
                        name: "Roof Replacement",
                    },
                    {
                        "@type": "Thing",
                        name: "Local Roofing Contractors",
                    },
                    {
                        "@type": "Thing",
                        name: "Residential Roofing",
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
                        name: "Local vs. National Roofing Companies",
                        item: pageUrl,
                    },
                ],
            },
            {
                "@type": "RoofingContractor",
                "@id": `${siteUrl}/#roofingcontractor`,
                name: siteConfig.business.name,
                url: `${siteUrl}/`,
                telephone: "+1-973-820-5130",
                description:
                    "Professional roofing contractor providing roof replacement, roof repair, slate roofing, and flat roofing services in Essex County, New Jersey.",
                areaServed: {
                    "@type": "AdministrativeArea",
                    name: "Essex County, New Jersey",
                },
                knowsAbout: [
                    "Roof Replacement",
                    "Roof Repair",
                    "Residential Roofing",
                    "Flat Roofing",
                    "Slate Roofing",
                    "Roof Inspections",
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

