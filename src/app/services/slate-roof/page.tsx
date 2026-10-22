import { SlateRoofBenefitsSection } from "@/components/services/slate-roof/benefits-section";
import { SlateRoofCtaSection } from "@/components/services/slate-roof/cta-section";
import { SlateRoofFaqSection } from "@/components/services/slate-roof/faq-section";
import { SlateRoofHeroSection } from "@/components/services/slate-roof/hero-section";
import { SlateRoofOverviewSection } from "@/components/services/slate-roof/overview-section";
// import { SlateRoofProcessSection } from "@/components/services/slate-roof/process-section";
// import { SlateRoofShowcaseSection } from "@/components/services/slate-roof/showcase-section";
// import { SlateRoofTestimonialSection } from "@/components/services/slate-roof/testimonial-section";
import { RelatedServicesSection } from "@/components/services/related-services-section";
import { SlateRoofUsesSection } from "@/components/services/flat-roof/uses-section";
import { SlateRoofSignsSection } from "@/components/services/flat-roof/signs-section";
import {SlateRoofServicesSection} from "@/components/services/slate-roof/services-section";
import {SlateRoofRepairVsReplacementSection} from "@/components/services/slate-roof/comparision-section";

export default function Page() {
  return (
    <div className="bg-stone-100 text-stone-900 selection:bg-secondary/30">
      <SlateRoofHeroSection />
      <SlateRoofOverviewSection />
      <SlateRoofUsesSection />
      <SlateRoofSignsSection />
      <SlateRoofBenefitsSection />
      <SlateRoofServicesSection />
      <SlateRoofRepairVsReplacementSection />
      {/* <SlateRoofProcessSection /> */}
      {/* <SlateRoofShowcaseSection /> */}
      {/* <SlateRoofTestimonialSection /> */}
      <SlateRoofFaqSection />
      <RelatedServicesSection currentServiceSlug="slate-roof" />
      <SlateRoofCtaSection />
    </div>
  );
}
