"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { memo, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { GoogleTranslateWidget } from "@/components/layout/google-translate-widget";
import { MobileNavMenu } from "@/components/layout/mobile-nav-menu";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const SERVICE_LINKS = [
  { label: "Roofing", href: "/services/roofing" },
  { label: "Roof Removal", href: "/services/roof-removal" },
  { label: "Re-Roofing", href: "/services/re-roofing" },
  { label: "Flat Roof", href: "/services/flat-roof" },
  { label: "Slate Roof", href: "/services/slate-roof" },
  { label: "Chimney", href: "/services/chimney" },
  { label: "Siding", href: "/services/siding" },
  { label: "Carpentry", href: "/services/carpentry" },
  { label: "Dormers", href: "/services/dormers" },
  { label: "Home Additions", href: "/services/additions" },
  { label: "Gutters", href: "/services/gutters" },
  { label: "Emergency Repair", href: "/services/emergency-repair" },
] as const;

type NavLink = {
  label: string;
  href: string;
  isActive: boolean;
};

type ServicesMenuProps = {
  isActive: boolean;
  isOpen: boolean;
  pathname: string;
  onToggle: () => void;
  onClose: () => void;
};

const ServicesMenu = memo(function ServicesMenu({
  isActive,
  isOpen,
  pathname,
  onToggle,
  onClose,
}: ServicesMenuProps) {
  return (
    <div className="relative">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        onClick={onToggle}
        className={cn(
          "relative inline-flex items-center gap-1 text-sm font-medium transition-colors",
          "after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all",
          isActive
            ? "text-foreground after:w-full"
            : "text-muted-foreground hover:text-foreground hover:after:w-full"
        )}
      >
        Services
        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-300", isOpen && "rotate-180")} />
      </button>

      <div
        className={cn(
          "absolute left-1/2 top-full z-60 w-150 -translate-x-1/2 pt-3 transition-all duration-200",
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="rounded-xl border border-border bg-card p-4 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.85)] backdrop-blur-md">
          <div className="mb-4 flex items-center justify-between border-b border-border/50 pb-3">
            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-secondary">All Services</p>
            <Link href="/services" onClick={onClose} className="text-xs text-muted-foreground transition-colors hover:text-foreground">View Service Hub</Link>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {SERVICE_LINKS.map((service) => {
              const isServiceActive = pathname === service.href;
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={onClose}
                  className={cn(
                    "rounded-md border px-3 py-2.5 text-sm transition-all duration-200",
                    isServiceActive
                      ? "border-secondary/60 bg-secondary/10 text-foreground"
                      : "border-border/50 text-muted-foreground hover:border-secondary/50 hover:bg-secondary/10 hover:text-foreground"
                  )}
                >
                  {service.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
});

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();
  const servicesMenuRef = useRef<HTMLDivElement | null>(null);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    if (href === "/services") {
      return pathname === "/services" || pathname.startsWith("/services/");
    }

    return pathname === href;
  };

  const navLinks: NavLink[] = NAV_LINKS.map((link) => ({
    ...link,
    isActive: isLinkActive(link.href),
  }));

  const close = () => setIsOpen(false);

  useEffect(() => {
    if (!isServicesOpen) {
      return;
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (!servicesMenuRef.current?.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isServicesOpen]);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-24 w-full max-w-7xl items-center justify-between px-4">
          <Link href="/" className="flex h-24 items-center gap-2" aria-label={siteConfig.business.name}>
            <Image
              src="/images/logo.webp"
              alt={siteConfig.business.name}
              width={180}
              height={96}
              priority
              sizes="180px"
              className="h-42 w-auto object-contain mt-6 pointer-events-none"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => {
              if (link.label === "Services") {
                return (
                  <div
                    key={link.label}
                    ref={servicesMenuRef}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <ServicesMenu
                      isActive={link.isActive}
                      isOpen={isServicesOpen}
                      pathname={pathname}
                      onToggle={() => setIsServicesOpen((prev) => !prev)}
                      onClose={() => setIsServicesOpen(false)}
                    />
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsServicesOpen(false)}
                  className={cn(
                    "relative text-sm font-medium transition-colors",
                    "after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all",
                    link.isActive
                      ? "text-foreground after:w-full"
                      : "text-muted-foreground hover:text-foreground hover:after:w-full"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <GoogleTranslateWidget />
            <div className="hidden items-center gap-2 xl:gap-3 lg:flex">
              <a
                href={`tel:${siteConfig.phones.english}`}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4 text-primary" />

                <span className="min-[1136px]:inline hidden">
                  {siteConfig.phones.english}
                </span>
              </a>

              <Button asChild
              className="text-amber">
                <Link href="/contact">Get Free Estimate</Link>
              </Button>
            </div>

            {/* Hamburger toggle */}
            <button
              type="button"
              className="relative z-70 inline-flex h-10 w-10 items-center justify-center rounded-md p-2 text-foreground lg:hidden"
              aria-label="Toggle navigation"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <span className={cn(
                "absolute transition-all duration-300",
                isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"
              )}>
                <X className="h-6 w-6" />
              </span>
              <span className={cn(
                "absolute transition-all duration-300",
                isOpen ? "opacity-0 -rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
              )}>
                <Menu className="h-6 w-6" />
              </span>
            </button>
          </div>
        </div>
      </nav>

      <MobileNavMenu
        isOpen={isOpen}
        close={close}
        navLinks={navLinks}
        businessName={siteConfig.business.name}
        phone={siteConfig.phones.english}
      />
    </>
  );
}
