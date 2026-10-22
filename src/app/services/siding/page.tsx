import { SidingBenefitsSection } from "@/components/services/siding/benefits-section";
import { SidingCtaSection } from "@/components/services/siding/cta-section";
import { SidingFaqSection } from "@/components/services/siding/faq-section";
import { SidingHeroSection } from "@/components/services/siding/hero-section";
import { SidingOverviewSection } from "@/components/services/siding/overview-section";
import { SidingProcessSection } from "@/components/services/siding/process-section";
// import { SidingShowcaseSection } from "@/components/services/siding/showcase-section";
// import { SidingTestimonialSection } from "@/components/services/siding/testimonial-section";
import { RelatedServicesSection } from "@/components/services/related-services-section";
import {WhatIsSidingSection} from "@/components/services/siding/about-section";
import {SidingHowItWorksSection} from "@/components/services/siding/working-section";
import {SidingSignsSection} from "@/components/services/siding/signs-section";
import {SidingServicesSection} from "@/components/services/siding/service-section";
import { SidingPropertyTypesSection } from "@/components/services/siding/residentialandcommercial-section";
import {SidingWhyChooseSection} from "@/components/services/siding/whychoose-section";

export default function Page() {
  return (
    <div className="bg-stone-100 text-stone-900 selection:bg-secondary/30">
      <SidingHeroSection />
      <SidingOverviewSection />
      <WhatIsSidingSection />
      <SidingHowItWorksSection />
      <SidingSignsSection />
      <SidingServicesSection />
      <SidingProcessSection />
      <SidingBenefitsSection />
      <SidingPropertyTypesSection />
      <SidingWhyChooseSection />
      {/* <SidingShowcaseSection /> */}
      {/* <SidingTestimonialSection /> */}
      <SidingFaqSection />
      <RelatedServicesSection currentServiceSlug="siding" />
      <SidingCtaSection />
    </div>
  );
}
