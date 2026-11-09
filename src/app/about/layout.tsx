import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Gutama Home Improvement | Roofing Contractor in Essex County, NJ Since 2000",

  description:
    "Learn why Gutama Home Improvement is the trusted roofing contractor in Essex County, NJ, delivering expert roofing, siding & exterior services since 2000.",

  keywords: [
    "roofing contractor Essex County NJ",
    "Gutama Home Improvement",
    "roofing company Newark NJ",
    "roof repair Essex County",
    "roof replacement NJ",
    "siding contractor Essex County",
    "family owned roofing company",
    "licensed roofing contractor NJ",
    "home improvement Essex County",
    "emergency roof repair NJ",
  ],

  authors: [{ name: "Gutama Home Improvement" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.gutamaroofingnj.com/about",
  },

  openGraph: {
    type: "website",
    title:
      "About Gutama Home Improvement | Roofing Contractor in Essex County, NJ Since 2000",
    description:
      "Meet Gutama Home Improvement, a family-owned roofing contractor serving Essex County, NJ with trusted craftsmanship, honest service, and premium exterior solutions since 2000.",
    url: "https://www.gutamaroofingnj.com/about",
    siteName: "Gutama Home Improvement",
    images: [
      {
        url: "https://www.gutamaroofingnj.com/images/about-aerial.webp",
        alt: "Gutama Home Improvement roofing team working on a residential roofing project in Essex County, NJ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "About Gutama Home Improvement | Roofing Contractor in Essex County, NJ",
    description:
      "Trusted roofing contractor serving Essex County, NJ since 2000. Family-owned, licensed, bilingual, and committed to quality craftsmanship.",
    images: [
      "https://www.gutamaroofingnj.com/images/about-aerial.webp",
    ],
  },

  referrer: "strict-origin-when-cross-origin",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
