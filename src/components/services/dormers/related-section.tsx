import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { serviceIconMap } from "@/components/ui/icon-map";

const RELATED_SERVICES = [
  { href: "/services/roof-removal", title: "Roof Removal", description: "Complete tear-off and roof removal with safe disposal and clean site preparation for new installation.", icon: "layers" },
  { href: "/services/re-roofing", title: "Re-Roofing", description: "Premium re-roofing services using top-quality materials for lasting protection and curb appeal.", icon: "home" },
  { href: "/services/flat-roof", title: "Flat Roof", description: "Specialized flat roofing systems including TPO, EPDM, and modified bitumen.", icon: "square" },
] as const;

export function DormersRelatedSection() {
  return (
    <Section className="border-t border-stone-200 bg-stone-100 text-stone-900">
      <Container>
        <Reveal className="mb-12 text-center"><h2 className="mb-4 font-serif text-3xl font-bold text-stone-900 md:text-4xl">Related Services</h2><div className="gold-divider" /></Reveal>
        <StaggerGroup className="grid grid-cols-1 gap-6 md:grid-cols-3" delay={0.05}>{RELATED_SERVICES.map((service) => { const Icon = serviceIconMap[service.icon]; return (<StaggerItem key={service.href}><Link href={service.href} className="group block"><article className="h-full rounded-2xl border border-stone-200/90 bg-white shadow-md p-6 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40"><div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15"><Icon className="h-5 w-5 text-secondary" /></div><h3 className="font-serif text-xl font-semibold text-stone-900">{service.title}</h3><p className="mt-2 text-sm leading-relaxed text-stone-600">{service.description}</p><span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">View Service<ArrowRight className="h-4 w-4" /></span></article></Link></StaggerItem>); })}</StaggerGroup>
      </Container>
    </Section>
  );
}