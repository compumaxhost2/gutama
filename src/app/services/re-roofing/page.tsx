
import { ReRoofingBenefitsSection } from "@/components/services/re-roofing/benefits-section";
import { ReRoofingCtaSection } from "@/components/services/re-roofing/cta-section";
import { ReRoofingFaqSection } from "@/components/services/re-roofing/faq-section";
import { ReRoofingHeroSection } from "@/components/services/re-roofing/hero-section";
import { ReRoofingOverviewSection } from "@/components/services/re-roofing/overview-section";
import { WhatIsReRoofingSection } from "@/components/services/re-roofing/whatisroofing-section";
import {HowReRoofingWorksSection} from "@/components/services/re-roofing/reroofing-working";
import { ReRoofingProcessSection } from "@/components/services/re-roofing/process-section";
import {ReRoofingMaterialsSection} from "@/components/services/re-roofing/materials-section";
import {ReRoofingProblemsSection} from "@/components/services/re-roofing/commonproblems-section";
import {ReRoofingSignsSection} from "@/components/services/re-roofing/reroofing-signs";
// import { ReRoofingShowcaseSection } from "@/components/services/re-roofing/showcase-section";
// import { ReRoofingTestimonialSection } from "@/components/services/re-roofing/testimonial-section";
import { RelatedServicesSection } from "@/components/services/related-services-section";
import {ReRoofingAdvantagesSection} from "@/components/services/re-roofing/advantages-section";
import { ResidentialReRoofingSection } from "@/components/services/re-roofing/residential-reroofing";
import { CommercialReRoofingSection } from "@/components/services/re-roofing/commercial-reroofing";
import {ReRoofingWhyChooseUsSection} from "@/components/services/re-roofing/whychoose-section";
import { ReRoofingAreasWeServeSection } from "@/components/services/re-roofing/areasofservice-section";
import {LocationNavigationSection} from "@/components/services/re-roofing/locations-section";

export default function Page() {
  return (
    <div className="bg-stone-100 text-stone-900 selection:bg-secondary/30">
      <ReRoofingHeroSection />
      <LocationNavigationSection />
      <ReRoofingOverviewSection />
      <WhatIsReRoofingSection />
      <HowReRoofingWorksSection />
      <ReRoofingSignsSection />
      <ReRoofingBenefitsSection />
      <ReRoofingProcessSection />
      <ReRoofingMaterialsSection />
      <ReRoofingProblemsSection />
      <ReRoofingAdvantagesSection />
      <ResidentialReRoofingSection />
      <CommercialReRoofingSection />
      <ReRoofingWhyChooseUsSection />
      <ReRoofingAreasWeServeSection />
      {/* <ReRoofingShowcaseSection /> */}
      {/* <ReRoofingTestimonialSection /> */}
      <ReRoofingFaqSection />
      <RelatedServicesSection currentServiceSlug="re-roofing" />
      <ReRoofingCtaSection />
    </div>
  );
}
