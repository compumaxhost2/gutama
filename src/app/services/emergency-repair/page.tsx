import { EmergencyRepairBenefitsSection } from "@/components/services/emergency-repair/benefits-section";
import { EmergencyRepairCtaSection } from "@/components/services/emergency-repair/cta-section";
import { EmergencyRepairFaqSection } from "@/components/services/emergency-repair/faq-section";
import { EmergencyRepairHeroSection } from "@/components/services/emergency-repair/hero-section";
import { EmergencyRepairOverviewSection } from "@/components/services/emergency-repair/overview-section";
import { EmergencyRepairProcessSection } from "@/components/services/emergency-repair/process-section";
// import { EmergencyRepairShowcaseSection } from "@/components/services/emergency-repair/showcase-section";
// import { EmergencyRepairTestimonialSection } from "@/components/services/emergency-repair/testimonial-section";
import { RelatedServicesSection } from "@/components/services/related-services-section";
import {EmergencyRepairBasicsSection} from "@/components/services/emergency-repair/about-section";
import {EmergencyRepairSignsSection} from "@/components/services/emergency-repair/signs-section";
import {EmergencyRepairTypesSection} from "@/components/services/emergency-repair/services-section";
import {EmergencyRepairPropertyTypesSection} from "@/components/services/emergency-repair/residentialandcommercial-section";
import {EmergencyRepairAreasWeServeSection} from "@/components/services/emergency-repair/areas-of-service-section";
import {EmergencyRepairWhyChooseSection} from "@/components/services/emergency-repair/whychoose-section";
import {LocationNavigationSection} from "@/components/services/emergency-repair/locations-section";

export default function Page() {
  return (
    <div className="bg-stone-100 text-stone-900 selection:bg-secondary/30">
      <EmergencyRepairHeroSection />
      <LocationNavigationSection />
      <EmergencyRepairOverviewSection />
      <EmergencyRepairBasicsSection />
      <EmergencyRepairSignsSection />
      <EmergencyRepairTypesSection />
      <EmergencyRepairProcessSection />
      <EmergencyRepairBenefitsSection />
      <EmergencyRepairPropertyTypesSection />
      <EmergencyRepairAreasWeServeSection />
      <EmergencyRepairWhyChooseSection />
      {/* <EmergencyRepairShowcaseSection /> */}
      {/* <EmergencyRepairTestimonialSection /> */}
      <EmergencyRepairFaqSection />
      <RelatedServicesSection currentServiceSlug="emergency-repair" />
      <EmergencyRepairCtaSection />
    </div>
  );
}
