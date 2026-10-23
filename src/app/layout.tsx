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
    "Gutama Home Improvement provides roofing, roof removal, re-roofing, flat roofing, slate roofing, siding, chimney repair, gutters, carpentry, dormers, home additions, and emergency roof repairs in Newark and Essex County, NJ. Request a free estimate.",

  keywords: [
    "roofing contractor Essex County NJ",
    "roofing contractor Newark NJ",
    "roof repair Essex County NJ",
    "roof replacement Newark NJ",
    "roof removal NJ",
    "flat roofing Essex County NJ",
    "slate roofing NJ",
    "siding contractor Newark NJ",
    "chimney repair Essex County NJ",
    "gutter installation NJ",
    "carpentry services NJ",
    "dormer contractor NJ",
    "home additions Essex County NJ",
    "emergency roof repair Newark NJ",
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
  name: "Gutama Home Improvement",
  url: `${siteUrl}/`,
  logo: `${siteUrl}/images/logo.webp`,
  image: `${siteUrl}/images/logo.webp`,
  description:
    "Gutama Home Improvement provides roofing and exterior home improvement services for residential and commercial properties in Essex County, New Jersey. Services include roof installation, roof repair, roof replacement, roof removal, re-roofing, flat roofing, slate roofing, metal roofing, asphalt shingle roofing, roof inspections, roof maintenance, emergency roof repairs, storm damage repairs, emergency roof tarping, siding installation, chimney repair, chimney flashing repair, gutter installation, gutter repair, carpentry, dormers, and home additions.",
  telephone: "+1-973-820-5130",
  email: "antoniogutama@gmail.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "272-274 Orange St",
    addressLocality: "Newark",
    addressRegion: "NJ",
    postalCode: "07103",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.7357,
    longitude: -74.1724,
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Essex County, New Jersey",
  },
  sameAs: [
    "https://www.tiktok.com/@gutamaroofingnj.com",
    "https://www.facebook.com/gutamaroofingnj",
    "https://www.instagram.com/gutamahomeimprovement",
    "https://x.com/gutamaroofingnj",
    "https://www.youtube.com/@Gutama-01",
    "https://www.yelp.com/biz/gutama-home-improvement-newark-5",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Roofing and Home Improvement Services",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Roofing Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Roof Installation",
            },
          },
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
              name: "Roof Removal",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Re-Roofing",
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
              name: "Slate Roofing",
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
              name: "Asphalt Shingle Roofing",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Roof Inspection and Maintenance",
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
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Exterior and Home Improvement Services",
        itemListElement: [
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
              name: "Chimney Repair",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Chimney Flashing Repair",
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
              name: "Gutter Repair",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Carpentry Services",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Dormer Construction",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Home Additions",
            },
          },
        ],
      },
    ],
  },
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