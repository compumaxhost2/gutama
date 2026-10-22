import { BadgeCheck, Shield, Users } from "lucide-react";

import { Container } from "@/components/ui/container";

const PERKS = [
  {
    icon: BadgeCheck,
    label: "Free Roof Inspections & Estimates in Essex County NJ",
  },
  {
    icon: Shield,
    label: "5-Year Roofing Installation Warranty on All Services",
  },
  {
    icon: Users,
    label: "Bilingual Roofing Team — English & Español",
  },
] as const;

export function PerksStrip() {
  return (
    <section
      aria-label="Roofing contractor benefits"
      className="border-y border-red-700/50 bg-primary py-5 text-white shadow-inner"
    >
      <Container>
        {/* ✅ HIDDEN SEO BOOST (does NOT affect UI) */}
        <h2 className="sr-only">
          Trusted Roofing Contractor in Essex County NJ – Free Estimates,
          Warranty & Bilingual Service
        </h2>

        <ul className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-0 sm:divide-x sm:divide-white/20">
          {PERKS.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-2.5 px-6 text-center sm:text-left lg:px-10"
            >
              <Icon className="h-5 w-5 shrink-0 text-amber-300" />

              {/* ✅ SEO-ENHANCED TEXT */}
              <span className="text-sm font-extrabold uppercase tracking-widest text-white">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
