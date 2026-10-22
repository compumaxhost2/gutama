import { DormersBenefitsSection } from "@/components/services/dormers/benefits-section";
import { DormersCtaSection } from "@/components/services/dormers/cta-section";
import { DormersFaqSection } from "@/components/services/dormers/faq-section";
import { DormersHeroSection } from "@/components/services/dormers/hero-section";
import { DormersOverviewSection } from "@/components/services/dormers/overview-section";
import { DormersProcessSection } from "@/components/services/dormers/process-section";
// import { DormersShowcaseSection } from "@/components/services/dormers/showcase-section";
// import { DormersTestimonialSection } from "@/components/services/dormers/testimonial-section";
import { RelatedServicesSection } from "@/components/services/related-services-section";
import {DormersFunctionsSection} from "@/components/services/dormers/about-section";
import {DormersTypesSection} from "@/components/services/dormers/types-section";
import {DormersHowItWorksSection} from "@/components/services/dormers/working-section";
import {DormersSignsSection} from "@/components/services/dormers/signs-section";
import {DormersServicesSection } from "@/components/services/dormers/services-section";
import { DormersPropertyTypesSection } from "@/components/services/dormers/residential-section";
import { DormersWhyChooseSection } from "@/components/services/dormers/whychoose-section";
import { DormersComparisonSection } from "@/components/services/dormers/dormerVsroof-comparision-section";

export default function Page() {
  return (
    <div className="bg-stone-100 text-stone-900 selection:bg-secondary/30">
      <DormersHeroSection />
      <DormersOverviewSection />
      <DormersFunctionsSection />
      <DormersTypesSection />
      <DormersHowItWorksSection />
      <DormersSignsSection />
      <DormersBenefitsSection />
      <DormersServicesSection />
      <DormersProcessSection />
      <DormersPropertyTypesSection />
      <DormersWhyChooseSection />
      <DormersComparisonSection />
      {/* <DormersShowcaseSection /> */}
      {/* <DormersTestimonialSection /> */}
      <DormersFaqSection />
      <RelatedServicesSection currentServiceSlug="dormers" />
      <DormersCtaSection />
    </div>
  );
}
