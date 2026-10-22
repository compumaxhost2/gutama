import type { Metadata, Viewport } from "next";
import { Inter, Oswald, Playfair_Display } from "next/font/google";
import Script from "next/script";

import { siteConfig, siteUrl } from "@/config/site";
import { SiteShell } from "@/components/layout/site-shell";

import "./globals.css";

// -----------------------------------------------------------------------------
// Fonts
// -----------------------------------------------------------------------------

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const headingFont = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const displayFont = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

// -----------------------------------------------------------------------------
// Metadata
// -----------------------------------------------------------------------------

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: "Roofing Contractor Essex County NJ | Gutama Home Improvement",

  description:
    "Gutama Home Improvement provides expert roofing, siding, and exterior services in Essex County, NJ. Licensed, insured, and trusted for roof repair, replacement, and emergency services. Get a free estimate today.",

  keywords: [
    "roofing contractor essex county nj",
    "roof repair nj",
    "roof replacement essex county",
    "roofing company essex county",
    "roof installation nj",
    "emergency roofing nj",
    "roof inspection nj",
    "storm damage roof repair",
    "flat roofing essex county",
    "metal roofing nj",
    "asphalt shingle roofing",
    "chimney repair nj",
    "chimney flashing repair",
    "gutter installation nj",
    "gutter repair essex county",
    "siding contractor nj",
    "vinyl siding installation",
    "commercial roofing nj",
    "residential roofing essex county",
  ],

  authors: [
    {
      name: siteConfig.business.name,
    },
  ],

  creator: siteConfig.business.name,

  publisher: siteConfig.business.name,

  referrer: "strict-origin-when-cross-origin",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: siteUrl,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Roofing Contractor Essex County NJ | Gutama Home Improvement",

    description:
      "Licensed & insured roofing experts in Essex County, NJ. Roof repair, roof replacement, siding, chimney, gutters, and emergency roofing services.",

    url: siteUrl,

    siteName: siteConfig.business.name,

    locale: "en_US",

    type: "website",

    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Gutama Home Improvement Roofing Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Roofing Contractor Essex County NJ | Gutama Home Improvement",

    description:
      "Trusted roofing contractor serving Essex County, NJ with roof repair, replacement, siding, gutters, chimney repair, and emergency roofing services.",

    images: [`${siteUrl}/og-image.jpg`],
  },

  verification: {
    google: "J6O-s5I-EDNOpmUgaLfDLYzww-7_LvQl4x3ZFCvAtxk",

    other: {
      "p:domain_verify": "3b615b98ad92040f9a19c646b3461c46",
    },
  },
};

// -----------------------------------------------------------------------------
// Viewport
// -----------------------------------------------------------------------------

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

// -----------------------------------------------------------------------------
// Schema.org - Roofing Contractor
// -----------------------------------------------------------------------------

const roofingContractorSchema = {
  "@context": "https://schema.org",

  "@type": "RoofingContractor",

  "@id": `${siteUrl}/#roofingcontractor`,

  name: siteConfig.business.name,

  url: siteUrl,

  image: `${siteUrl}/images/logo.webp`,

  logo: `${siteUrl}/images/logo.webp`,

  description:
    "Professional roofing contractor serving Essex County, NJ with roof repair, replacement, siding, chimney, gutters, and emergency roofing services.",

  telephone: siteConfig.phones.english,

  email: siteConfig.email,

  priceRange: "$$",

  address: {
    "@type": "PostalAddress",

    streetAddress: siteConfig.address.streetAddress,

    addressLocality: siteConfig.address.locality,

    addressRegion: siteConfig.address.region,

    postalCode: siteConfig.address.postalCode,

    addressCountry: siteConfig.address.country,
  },

  geo: {
    "@type": "GeoCoordinates",

    latitude: "40.7357",

    longitude: "-74.1724",
  },

  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Essex County",
    },
    {
      "@type": "AdministrativeArea",
      name: "Newark",
    },
    {
      "@type": "AdministrativeArea",
      name: "Bloomfield",
    },
    {
      "@type": "AdministrativeArea",
      name: "Belleville",
    },
    {
      "@type": "AdministrativeArea",
      name: "Montclair",
    },
    {
      "@type": "AdministrativeArea",
      name: "Nutley",
    },
    {
      "@type": "AdministrativeArea",
      name: "East Orange",
    },
    {
      "@type": "AdministrativeArea",
      name: "West Orange",
    },
    {
      "@type": "AdministrativeArea",
      name: "Irvington",
    },
    {
      "@type": "AdministrativeArea",
      name: "Livingston",
    },
    {
      "@type": "AdministrativeArea",
      name: "Maplewood",
    },
    {
      "@type": "AdministrativeArea",
      name: "South Orange",
    },
    {
      "@type": "AdministrativeArea",
      name: "Orange",
    },
    {
      "@type": "AdministrativeArea",
      name: "Verona",
    },
    {
      "@type": "AdministrativeArea",
      name: "Cedar Grove",
    },
    {
      "@type": "AdministrativeArea",
      name: "Millburn",
    },
    {
      "@type": "AdministrativeArea",
      name: "Caldwell",
    },
    {
      "@type": "AdministrativeArea",
      name: "Fairfield",
    },
  ],


  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Roof Repair",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Roof Replacement",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Roof Inspection",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Emergency Roof Repair",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Storm Damage Roof Repair",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Emergency Roof Tarping",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Roof Maintenance",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Flat Roofing",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Metal Roofing",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Slate Roofing",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Asphalt Shingle Roofing",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Siding Installation",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Gutter Installation",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Chimney Repair",
      },
    },
  ],
};

// Schema.org - Organization
// -----------------------------------------------------------------------------

const organizationSchema = {
  "@context": "https://schema.org",

  "@type": "Organization",

  "@id": `${siteUrl}/#organization`,

  name: siteConfig.business.name,

  url: siteUrl,

  logo: `${siteUrl}/images/logo.webp`,

  image: `${siteUrl}/images/logo.webp`,

  email: siteConfig.email,

  telephone: siteConfig.phones.english,

  address: {
    "@type": "PostalAddress",

    streetAddress: siteConfig.address.streetAddress,

    addressLocality: siteConfig.address.locality,

    addressRegion: siteConfig.address.region,

    postalCode: siteConfig.address.postalCode,

    addressCountry: siteConfig.address.country,
  },
  sameAs: [
    "https://www.facebook.com/gutamaroofingnj",
    "https://www.instagram.com/gutamahomeimprovement",
    "https://www.tiktok.com/@gutamaroofingnj.com",
    "https://x.com/gutamaroofingnj",
    "https://www.yelp.com/biz/gutama-home-improvement-newark-5",
  ],
};

// -----------------------------------------------------------------------------
// Schema.org - WebSite
// -----------------------------------------------------------------------------

const websiteSchema = {
  "@context": "https://schema.org",

  "@type": "WebSite",

  "@id": `${siteUrl}/#website`,

  url: siteUrl,

  name: siteConfig.business.name,

  publisher: {
    "@id": `${siteUrl}/#organization`,
  },

  inLanguage: "en-US",
};

// -----------------------------------------------------------------------------
// Root Layout
// -----------------------------------------------------------------------------

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Performance */}
        <link
          rel="preconnect"
          href="https://www.googletagmanager.com"
        />

        <link
          rel="dns-prefetch"
          href="https://www.googletagmanager.com"
        />
      </head>

      <body
        className={`${bodyFont.variable} ${headingFont.variable} ${displayFont.variable} antialiased`}
      >
        <SiteShell>{children}</SiteShell>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8K697EFF53"
          strategy="lazyOnload"
        />

        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){dataLayer.push(arguments);}

            gtag('js', new Date());

            gtag('config', 'G-8K697EFF53');

            gtag('config', 'G-QPZMC65FEW');
          `}
        </Script>

        {/* Roofing Contractor Schema */}
        <Script
          id="roofing-contractor-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(roofingContractorSchema),
          }}
        />

        {/* Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* Website Schema */}
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </body>
    </html>
  );
}