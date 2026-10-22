
import { BenefitsSection } from "@/components/services/roof-removal/benefits-section";
import { RoofRemovalCtaSection } from "@/components/services/roof-removal/cta-section";
import { RoofRemovalFaqSection } from "@/components/services/roof-removal/faq-section";
import { RoofRemovalHeroSection } from "@/components/services/roof-removal/hero-section";
import { RoofRemovalOverviewSection } from "@/components/services/roof-removal/overview-section";
import { RoofRemovalProcessSection } from "@/components/services/roof-removal/process-section";
// import { RoofRemovalShowcaseSection } from "@/components/services/roof-removal/showcase-section";
// import { RoofRemovalTestimonialSection } from "@/components/services/roof-removal/testimonial-section";
import { RelatedServicesSection } from "@/components/services/related-services-section";
import {RoofWhatSection} from "@/components/services/roof-removal/what-roofremoval";
import {RoofRemovalSignsSection} from "@/components/services/roof-removal/signs-section";
import {RoofRemovalVsOverlaySection} from "@/components/services/roof-removal/comparision";
import {RoofRemovalProblemsSection} from "@/components/services/roof-removal/problems-section";
import {RoofRemovalBenefitsSection} from "@/components/services/roof-removal/roofremoval-benefits-section";
import {ResidentialRoofRemovalSection} from "@/components/services/roof-removal/residential-roofremoval";
import {CommercialRoofRemovalSection} from "@/components/services/roof-removal/commercial-roofremoval";
import {AreasWeServeSection} from "@/components/services/roof-removal/service-areas";
import {LocationNavigationSection} from "@/components/services/roof-removal/locations-section";


export default function Page() {
  return (
    <div className="bg-stone-100 text-stone-900 selection:bg-secondary/30">
      <RoofRemovalHeroSection />
      <LocationNavigationSection />
      <RoofRemovalOverviewSection />
      {/* <RoofRemovalShowcaseSection /> */}
      {/* <RoofRemovalTestimonialSection /> */}
      <RoofWhatSection />
      <RoofRemovalSignsSection />
      <RoofRemovalVsOverlaySection />
      <RoofRemovalProcessSection />
      <RoofRemovalProblemsSection />
      <RoofRemovalBenefitsSection />
      <ResidentialRoofRemovalSection />
      <CommercialRoofRemovalSection />
      <BenefitsSection />
      <AreasWeServeSection />
      <RoofRemovalFaqSection />
      <RelatedServicesSection currentServiceSlug="roof-removal" />
      <RoofRemovalCtaSection />
    </div>
  );
}
