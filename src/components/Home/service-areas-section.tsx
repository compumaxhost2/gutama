import Link from "next/link";
import { SectionHeading } from "@/components/Home/section-heading";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { siteConfig } from "@/config/site";
import { BrandLink } from "@/components/ui/brand-link";

const SERVICE_AREA_LABEL = `Roofing Services in ${siteConfig.business.regionLabel}`;

const MUNICIPALITIES = [
  { name: "Newark", zip: "07102" },
  { name: "East Orange", zip: "07017" },
  { name: "Orange", zip: "07050" },
  { name: "Irvington", zip: "07111" },
  { name: "Belleville", zip: "07109" },
  { name: "Bloomfield", zip: "07003" },
  { name: "Caldwell", zip: "07006" },
  { name: "Cedar Grove", zip: "07009" },
  { name: "Essex Fells", zip: "07021" },
  { name: "Glen Ridge", zip: "07028" },
  { name: "Livingston", zip: "07039" },
  { name: "Maplewood", zip: "07040" },
  { name: "Millburn", zip: "07041" },
  { name: "North Caldwell", zip: "07006" },
  { name: "Nutley", zip: "07110" },
  { name: "Roseland", zip: "07068" },
  { name: "South Orange", zip: "07079" },
  { name: "Verona", zip: "07044" },
  { name: "West Orange", zip: "07052" },
];

export function ServiceAreasSection() {
  return (
    <Section
      id="service-areas"
      className="relative overflow-hidden bg-[#dfd0c0] pt-6 pb-20 md:pt-8 md:pb-24 text-stone-900"
      aria-label="Roofing service areas"
    >
      <Container className="relative">
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#844b20]">
              Service Areas
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-stone-900 md:text-4xl lg:text-5xl">
              {SERVICE_AREA_LABEL}
            </h2>
            <div className="gold-divider mt-5 mx-auto" />
            <p className="mt-4 max-w-2xl text-stone-700 md:text-lg mx-auto">
              <BrandLink className="font-semibold text-stone-900">Gutama Home Improvement</BrandLink> provides{" "}
              <Link href="/services/re-roofing" className="contents font-medium text-stone-900 underline decoration-secondary/50 underline-offset-2">roof repair</Link>,{" "}
              <Link href="/services/re-roofing" className="contents font-medium text-stone-900 underline decoration-secondary/50 underline-offset-2">roof replacement</Link>,{" "}
              <Link href="/services/siding" className="contents font-medium text-stone-900 underline decoration-secondary/50 underline-offset-2">siding</Link>, and exterior services across {siteConfig.business.regionLabel},
              including the following cities and ZIP codes.
            </p>
          </div>
        </Reveal>

        {/* ✅ Hidden SEO boost */}
        <h2 className="sr-only">
          Roofing Contractor in Newark, East Orange, Irvington, Bloomfield,
          Livingston, West Orange and all Essex County NJ areas
        </h2>

        <StaggerGroup
          className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          delay={0.08}
        >
          {MUNICIPALITIES.map((town) => (
            <StaggerItem key={town.name}>
              <div className="rounded-xl border border-[#cdbba8] bg-white px-4 py-3 text-center text-sm font-medium text-stone-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary hover:shadow-md">
                {/* ✅ SEO-ENHANCED CITY NAME */}
                <p>
                  {town.name}, <span className="text-stone-500">NJ</span>
                </p>

                {/* ZIP */}
                <p className="text-xs font-bold tracking-wide text-primary">
                  {town.zip}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}

