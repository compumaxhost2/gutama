"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/Home/section-heading";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

interface RelatedService {
  name: string;
  slug: string;
  description: string;
}

const ALL_SERVICES: RelatedService[] = [
  {
    name: "Roofing",
    slug: "roofing",
    description:
      "We repair leaks, damaged shingles, flashing issues, and storm-related roof damage.",
  },
  {
    name: "Roof Removal & Tear-Off",
    slug: "roof-removal",
    description:
      "Professional roof removal services in Essex County NJ with safe tear-off and complete cleanup.",
  },
  {
    name: "Roof Replacement",
    slug: "re-roofing",
    description:
      "Professional roof replacement in Essex County NJ with durable materials and clean installation.",
  },
  {
    name: "Flat Roofing",
    slug: "flat-roof",
    description:
      "Flat roofing in Essex County NJ using TPO, EPDM, and durable materials for long-lasting performance.",
  },
  {
    name: "Slate Roofing",
    slug: "slate-roof",
    description:
      "Slate roofing in Essex County NJ with durable materials and expert installation for long-lasting results.",
  },
  {
    name: "Chimney Repair",
    slug: "chimney",
    description:
      "Chimney repair in Essex County NJ including flashing, sealing, and waterproof protection for lasting safety.",
  },
  {
    name: "Siding Installation",
    slug: "siding",
    description:
      "Siding installation in Essex County NJ using vinyl, fiber cement, and durable exterior materials.",
  },
  {
    name: "Exterior Carpentry",
    slug: "carpentry",
    description:
      "Exterior carpentry in Essex County NJ for repairs, renovations, and durable custom woodwork projects.",
  },
  {
    name: "Dormer Installation",
    slug: "dormers",
    description:
      "Dormer installation in Essex County NJ to add natural light, headroom, and value to your home.",
  },
  {
    name: "Home Additions",
    slug: "additions",
    description:
      "Home additions in Essex County NJ designed to expand space with seamless integration and lasting quality.",
  },
  {
    name: "Gutter Installation",
    slug: "gutters",
    description:
      "Gutter installation in Essex County NJ to protect foundations and manage water flow efficiently.",
  },
  {
    name: "Emergency Repair",
    slug: "emergency-repair",
    description:
      "Emergency roof repair in Essex County NJ for leaks, storm damage, and urgent exterior issues.",
  },
];

interface RelatedServicesSectionProps {
  currentServiceSlug: string;
}

export function RelatedServicesSection({
  currentServiceSlug,
}: RelatedServicesSectionProps) {
  const relatedServices = ALL_SERVICES.filter(
    (service) => service.slug !== currentServiceSlug
  );

  return (
    <Section className="border-t border-white/10 bg-black text-white" aria-label="Other services we offer">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Explore More Services"
            title="Other Services We Offer"
            description="Browse our complete range of roofing and home improvement services"
          />
        </Reveal>

        <StaggerGroup
          className="mx-auto mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          delay={0.08}
        >
          {relatedServices.map((service) => (
            <StaggerItem key={service.slug}>
              <Link href={`/services/${service.slug}`}>
                <div className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-[#0c0c0e] p-6 shadow-xl transition-all duration-300 hover:border-secondary/50 hover:bg-[#121216] active:scale-[0.98]">
                  <h3 className="text-lg font-bold text-white group-hover:text-secondary transition-colors">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-300 grow">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center text-secondary font-semibold">
                    <span className="text-sm">Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
