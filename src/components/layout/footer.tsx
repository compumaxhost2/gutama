import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Music2, Phone } from "lucide-react";
import { FaYelp } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

import { siteConfig } from "@/config/site";
import { BrandLink } from "@/components/ui/brand-link";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/#about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Service Areas", href: "/#service-areas" },
  { label: "Contact", href: "/contact" },
];

const TOP_SERVICES = [
  { slug: "roofing", shortTitle: "Roofing" },
  { slug: "roof-removal", shortTitle: "Roof Removal" },
  { slug: "re-roofing", shortTitle: "Re-Roofing" },
  { slug: "flat-roof", shortTitle: "Flat Roof" },
  { slug: "slate-roof", shortTitle: "Slate Roof" },
  { slug: "chimney", shortTitle: "Chimney" },
  { slug: "siding", shortTitle: "Siding" },
  { slug: "carpentry", shortTitle: "Carpentry" },
  { slug: "additions", shortTitle: "Additions" },
  { slug: "dormers", shortTitle: "Dormers" },
  { slug: "gutters", shortTitle: "Gutters" },
];

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/gutamahomeimprovement",
    icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/gutamaroofingnj",
    icon: Facebook,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@gutamaroofingnj.com",
    icon: Music2,
  },
  {
    label: "X",
    href: "https://x.com/gutamaroofingnj",
    icon: FaXTwitter,
  },
  {
    label: "Yelp",
    href: "https://m.yelp.com/biz/gutama-home-improvement-newark-5",
    icon: FaYelp,
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-y-10 px-4 py-16 md:grid-cols-2 md:gap-x-12 md:gap-y-12 lg:grid-cols-4 lg:gap-x-12 lg:gap-y-12">
        <div>
          <Link href="/" className="inline-flex">
            <Image
              src="/images/logo2.webp"
              alt={siteConfig.business.name}
              width={200}
              height={80}
              quality={60}
              sizes="400px"
              className="h-22 w-auto object-contain"
            />
          </Link>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {siteConfig.business.description}
          </p>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <a
              href={`tel:${siteConfig.phones.english}`}
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Phone className="h-4 w-4 text-primary" />
              English: {siteConfig.phones.english}
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4 text-secondary" />
              {siteConfig.email}
            </a>
            <a
              href="https://maps.app.goo.gl/Ft48fUmJwB71CMAk9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Open business location in Google Maps"
            >
              <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span className="leading-snug">
                {siteConfig.address.streetAddress}
                <br />
                {siteConfig.address.locality}, {siteConfig.address.region} {siteConfig.address.postalCode}
              </span>
            </a>
          </div>
        </div>

        <div className="md:pl-6 lg:pl-10">
          <h3 className="font-serif text-lg text-foreground">Quick Links</h3>
          <div className="gold-divider mx-0! my-4" />
          <div className="flex flex-col gap-2">
            {QUICK_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="text-center -translate-x-5 sm:-translate-x-6">
            <h3 className="font-serif text-lg text-foreground">Top Services</h3>
            <div className="gold-divider my-4" />
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2">
            {TOP_SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="text-sm text-stone-400 transition-colors hover:text-white"
              >
                {service.shortTitle}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-serif text-lg text-foreground">
            Need An Estimate?
          </h3>
          <div className="gold-divider mx-0! my-4" />
          <div className="space-y-3 text-sm text-stone-400">
            <p>Call us for free consultation and project planning.</p>
            <Link
              href="/contact"
              className="text-secondary hover:text-secondary/85 inline-block font-medium"
            >
              Go to Contact Page
            </Link>
            <div className="pt-2">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                Follow Us
              </p>
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => {
                  const brandStyles: Record<string, string> = {
                    Instagram: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white border-transparent hover:brightness-110",
                    Facebook: "bg-[#1877F2] text-white border-transparent hover:bg-[#166fe5]",
                    TikTok: "bg-black text-[#00f2fe] border-[#fe2c55]/60 hover:border-[#fe2c55]",
                    X: "bg-black text-white border-white/20 hover:border-white/50",
                    Yelp: "bg-[#d32323] text-white border-transparent hover:bg-[#c01f1f]",
                  };

                  return (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow us on ${label}`}
                      className={`group inline-flex h-11 w-11 items-center justify-center rounded-xl border shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${brandStyles[label] || "border-white/10 bg-[#0c0c0e] text-white"}`}
                    >
                      <Icon className="h-5 w-5 transition-all duration-300 group-hover:scale-110" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/10 px-4 py-5 text-xs text-stone-400 sm:text-sm md:flex-row">
        <p>
          © {new Date().getFullYear()}{" "}
          <BrandLink className="font-semibold text-white">{siteConfig.business.name}</BrandLink>. All rights
          reserved.
        </p>
        <p>Licensed & Fully Insured | {siteConfig.business.regionLabel}</p>
      </div>
    </footer>
  );
}

