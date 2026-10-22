
import { ServicesSection } from "@/components/Home/services-section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";


export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-28 pb-16 bg-black text-white border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05),transparent_70%)]" />
        <Container className="relative text-center">
          <Reveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-secondary">Our Services</p>
            <h1 className="font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Full-Service Exterior Solutions
            </h1>
            <div className="gold-divider mt-5 mb-4" />
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-stone-300">
              From roof replacements to emergency repairs, each service has its own dedicated page so you can review scope, process, and FAQs before requesting an estimate.
            </p>
          </Reveal>
        </Container>
      </section>
      <ServicesSection
        id="services-grid"
        showHeading={false}
        ctaLabel="View Details"
        descriptionClampClassName="line-clamp-3"
        cardClassName="h-full"
      />
    </>
  );
}
