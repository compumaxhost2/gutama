import { Award, BadgeCheck, Banknote, CheckCircle2, FileCheck, Shield } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

const CREDENTIALS = [
  { icon: BadgeCheck, label: "Licensed Contractor", sub: "State of New Jersey" },
  { icon: Shield, label: "Fully Bonded", sub: "Complete Protection" },
  { icon: CheckCircle2, label: "Fully Insured", sub: "Liability + Workers\u2019 Comp" },
  { icon: Award, label: "Certified Installer", sub: "Premium Materials" },
  { icon: FileCheck, label: "5-Year Warranty", sub: "All Installations" },
  { icon: Banknote, label: "100% Financing", sub: "No Money Down" },
];

export function AboutCertifications() {
  return (
    <div className="border-y border-white/10 bg-[#0c0c0e] py-14 text-white">
      <Container>
        <Reveal>
          <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            Credentials &amp; Guarantees
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <ul className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {CREDENTIALS.map(({ icon: Icon, label, sub }) => (
              <li key={label} className="flex flex-col items-center gap-2 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-secondary/30 bg-secondary/10">
                  <Icon className="h-6 w-6 text-secondary" />
                </div>
                <p className="text-xs font-bold uppercase tracking-wide text-white">{label}</p>
                <p className="text-[11px] text-stone-400">{sub}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </div>
  );
}
