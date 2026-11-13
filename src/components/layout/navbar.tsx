"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronRight, Menu, Phone, X } from "lucide-react";
import { memo, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { GoogleTranslateWidget } from "@/components/layout/google-translate-widget";
import { MobileNavMenu } from "@/components/layout/mobile-nav-menu";
import { cn } from "@/lib/utils";
import { SERVICE_CATEGORIES } from "@/config/navigation-services";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];


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
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  // Reset hovered category when main menu closes
  useEffect(() => {
    if (!isOpen) {
      setHoveredCategory(null);
    }
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        onClick={onToggle}
        className={cn(
          "relative inline-flex items-center gap-1 text-sm font-medium transition-colors cursor-pointer",
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
          "absolute left-0 top-full z-60 w-64 pt-2.5 transition-all duration-200",
          isOpen ? "pointer-events-auto opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-1"
        )}
        onMouseLeave={() => setHoveredCategory(null)}
      >
        <div className="rounded-2xl border border-white/15 bg-[#0c0c0e]/98 p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.95)] backdrop-blur-xl">
          <div className="mb-1.5 flex items-center justify-between border-b border-white/10 px-2.5 pb-2 pt-0.5">
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-secondary">
                Services
              </p>
            </div>
            <Link
              href="/services"
              onClick={onClose}
              className="text-[11px] font-semibold text-stone-400 transition-colors hover:text-white"
            >
              View All →
            </Link>
          </div>

          <div className="space-y-1">
            {SERVICE_CATEGORIES.map((group) => {
              const isGroupActive = group.items.some((item) => pathname === item.href);
              const isEmergency = group.category === "Emergency Repairs";
              const isHovered = hoveredCategory === group.category;

              return (
                <div
                  key={group.category}
                  className="relative"
                  onMouseEnter={() => setHoveredCategory(group.category)}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setHoveredCategory((prev) => (prev === group.category ? null : group.category))
                    }
                    className={cn(
                      "group/category flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-xs font-semibold transition-all duration-150 text-left cursor-pointer",
                      isHovered || isGroupActive
                        ? isEmergency
                          ? "bg-red-500/25 text-red-200 shadow-sm"
                          : "bg-secondary/20 text-secondary shadow-sm"
                        : isEmergency
                        ? "text-red-300 hover:bg-red-500/15 hover:text-red-200"
                        : "text-stone-300 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    <div className="flex items-center gap-2 truncate pr-2">
                      <span
                        className={cn(
                          "h-1.5 w-1.5 rounded-full shrink-0",
                          isEmergency ? "bg-red-400" : isGroupActive ? "bg-secondary" : "bg-stone-500"
                        )}
                      />
                      <span className="truncate">{group.category}</span>
                    </div>
                    <ChevronRight
                      className={cn(
                        "h-3.5 w-3.5 shrink-0 transition-transform duration-150",
                        isHovered ? "translate-x-0.5 text-secondary" : "text-stone-500 group-hover/category:text-stone-300"
                      )}
                    />
                  </button>

                  {/* Flyout Sub-dropdown (Nested Dropdown in Dropdown) */}
                  <div
                    className={cn(
                      "absolute left-full top-0 z-70 pl-2 transition-all duration-150",
                      isHovered
                        ? "pointer-events-auto opacity-100 translate-x-0"
                        : "pointer-events-none opacity-0 -translate-x-1"
                    )}
                    onMouseEnter={() => setHoveredCategory(group.category)}
                  >
                    <div className="w-56 rounded-xl border border-white/15 bg-[#0c0c0e]/98 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.95)] backdrop-blur-xl">
                      <div className="mb-1.5 border-b border-white/10 px-2 py-1 flex items-center justify-between">
                        <span className={cn(
                          "text-[10px] font-bold uppercase tracking-wider",
                          isEmergency ? "text-red-300" : "text-secondary"
                        )}>
                          {group.category}
                        </span>
                        <span className="text-[10px] font-mono text-stone-500">
                          {group.items.length} {group.items.length === 1 ? "service" : "services"}
                        </span>
                      </div>

                      <div className="flex flex-col gap-0.5">
                        {group.items.map((service) => {
                          const isServiceActive = pathname === service.href;

                          return (
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={onClose}
                              className={cn(
                                "group/sub flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all duration-150",
                                isServiceActive
                                  ? "bg-secondary/20 font-bold text-secondary shadow-sm"
                                  : isEmergency
                                  ? "text-red-200 hover:bg-red-500/20 hover:text-white"
                                  : "text-stone-300 hover:bg-white/10 hover:text-white"
                              )}
                            >
                              <span className="truncate">{service.label}</span>
                              <span className="text-[10px] text-stone-500 opacity-0 transition-opacity group-hover/sub:opacity-100">
                                →
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-2 border-t border-white/10 px-2 pt-2">
            <Link
              href="/contact"
              onClick={onClose}
              className="flex items-center justify-between text-[11px] font-semibold text-stone-400 transition-colors hover:text-secondary"
            >
              <span>Get Free Estimate</span>
              <span>→</span>
            </Link>
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
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black text-white shadow-md transition-all duration-300">
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

              <Button asChild className="text-white font-semibold shadow-md">
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
