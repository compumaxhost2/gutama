import {
  ShieldCheck,
  Users,
  Building2,
  ClipboardCheck,
  Layers,
  Siren,
  Languages,
  BadgeCheck,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export function RoofingComparisonGuideSection() {
  const reasons = [
    {
      title: "Licensed, Bonded, and Insured",
      icon: ShieldCheck,
    },
    {
      title: "Experienced Local Roofing Professionals",
      icon: Users,
    },
    {
      title: "Residential and Commercial Roofing",
      icon: Building2,
    },
    {
      title: "Free Roof Inspections and Estimates",
      icon: ClipboardCheck,
    },
    {
      title: "Quality Roofing Materials",
      icon: Layers,
    },
    {
      title: "Emergency Roof Repair",
      icon: Siren,
    },
    {
      title: "English & Español Service",
      icon: Languages,
    },
    {
      title: "5-Year Installation Warranty",
      icon: BadgeCheck,
    },
  ];

  return (
    <section className="relative bg-black text-white py-20 px-6 border-t border-white/10">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
              Why Gutama
            </p>

            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Choose Gutama Home Improvement?
            </h2>

            <div className="gold-divider mb-5 mt-5" />

            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Gutama Home Improvement provides dependable roofing services for
              homeowners and businesses throughout Essex County, NJ. Our team
              focuses on quality workmanship, reliable service, and roofing
              solutions built to protect your property.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0c0c0e] p-5 transition-all duration-300 hover:border-secondary/40 hover:shadow-xl"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/10">
                    <Icon className="h-5 w-5 text-secondary" />
                  </div>

                  <h3 className="text-sm font-semibold leading-snug text-white">
                    {reason.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
