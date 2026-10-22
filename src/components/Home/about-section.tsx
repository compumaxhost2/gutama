import Image from "next/image";
import Link from "next/link";
import { Shield } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/Home/section-heading";
import { BrandLink } from "@/components/ui/brand-link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function AboutSection() {
  return (
    <Section
      id="about"
      className="relative border-t border-secondary/20 bg-[#121316] text-white"
      aria-label="About Gutama Home Improvement roofing contractor"
    >
      <Container>
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-secondary">
              About Our Company
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              Trusted Roofing Contractor in {siteConfig.business.regionLabel}
            </h2>
            <div className="gold-divider mt-5 mx-auto" />
            <p className="mt-4 max-w-2xl text-stone-300 md:text-lg mx-auto">
              <BrandLink>{siteConfig.business.name}</BrandLink> provides professional{" "}
              <Link href="/services/re-roofing" className="contents font-medium text-white underline decoration-secondary/60 underline-offset-2 hover:text-secondary">roof repair</Link>,{" "}
              <Link href="/services/re-roofing" className="contents font-medium text-white underline decoration-secondary/60 underline-offset-2 hover:text-secondary">roof replacement</Link>,{" "}
              <Link href="/services/siding" className="contents font-medium text-white underline decoration-secondary/60 underline-offset-2 hover:text-secondary">siding</Link>, and exterior services across{" "}
              {siteConfig.business.regionLabel}. Our licensed and insured team delivers
              high-quality craftsmanship for residential and commercial properties.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-secondary/25 bg-white/5 p-2.5 shadow-2xl backdrop-blur-md">
              <Image
                src="/images/gutama new images/roof replacement.jpg"
                alt={`Roofing contractor team working on residential roofing project in ${siteConfig.business.regionLabel}`}
                width={1200}
                height={800}
                className="h-64 w-full rounded-xl object-cover sm:h-72 lg:h-96"
                quality={85}
              />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="space-y-6 text-stone-300">
              {/* ✅ SEO-OPTIMIZED CONTENT */}
              <p className="text-base leading-relaxed">
                At <BrandLink>{siteConfig.business.name}</BrandLink>, every project is built on
                trust,
                clear communication, and expert workmanship. As a leading
                roofing contractor in {siteConfig.business.regionLabel}, we
                specialize in durable roofing systems designed to protect your
                home and increase property value.
              </p>

              <p className="text-base leading-relaxed">
                From <Link href="/services/emergency-repair" className="contents font-medium text-white underline decoration-secondary/60 underline-offset-2 hover:text-secondary">roof repair</Link> and{" "}
                <Link href="/services/re-roofing" className="contents font-medium text-white underline decoration-secondary/60 underline-offset-2 hover:text-secondary">roof replacement</Link> to{" "}
                <Link href="/services/siding" className="contents font-medium text-white underline decoration-secondary/60 underline-offset-2 hover:text-secondary">siding installation</Link>,{" "}
                <Link href="/services/chimney" className="contents font-medium text-white underline decoration-secondary/60 underline-offset-2 hover:text-secondary">chimney repair</Link>, and{" "}
                <Link href="/services/emergency-repair" className="contents font-medium text-white underline decoration-secondary/60 underline-offset-2 hover:text-secondary">emergency roofing services</Link>, our team
                delivers reliable solutions tailored to both residential and
                commercial properties.
              </p>

              {/* ✅ TRUST BLOCK */}
              <div className="flex items-start gap-4.5 rounded-xl border border-secondary/35 bg-white/5 p-5 shadow-xl backdrop-blur-sm">
                <div className="rounded-lg bg-secondary/15 p-2.5">
                  <Shield className="h-6 w-6 shrink-0 text-secondary" />
                </div>
                <div>
                  <p className="font-serif text-lg font-semibold text-white">
                    Licensed & Fully Insured Roofing Experts
                  </p>
                  <p className="mt-1 text-sm text-stone-300">
                    Serving {siteConfig.business.regionLabel} with complete
                    peace of mind, safety, and guaranteed workmanship.
                  </p>
                </div>
              </div>

              {/* ✅ HIDDEN SEO BOOST */}
              <h2 className="sr-only">
                Roof Repair, Roof Replacement, and Exterior Services in{" "}
                {siteConfig.business.regionLabel}
              </h2>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

