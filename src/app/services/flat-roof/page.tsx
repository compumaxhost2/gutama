import { FlatRoofBenefitsSection } from "@/components/services/flat-roof/benefits-section";
import { FlatRoofCtaSection } from "@/components/services/flat-roof/cta-section";
import { FlatRoofFaqSection } from "@/components/services/flat-roof/faq-section";
import { FlatRoofHeroSection } from "@/components/services/flat-roof/hero-section";
import { FlatRoofOverviewSection } from "@/components/services/flat-roof/overview-section";
import { FlatRoofProcessSection } from "@/components/services/flat-roof/process-section";
// import { FlatRoofShowcaseSection } from "@/components/services/flat-roof/showcase-section";
// import { FlatRoofTestimonialSection } from "@/components/services/flat-roof/testimonial-section";
import { RelatedServicesSection } from "@/components/services/related-services-section";
import { WhatIsFlatRoofSection } from "@/components/services/flat-roof/about-flatroof-section";
import {FlatRoofSystemSection} from "@/components/services/flat-roof/working-section";
import {FlatRoofTypesSection} from "@/components/services/flat-roof/flatroof-types-section";
import { FlatRoofResidentialCommercialSection } from "@/components/services/flat-roof/residential-commercial-section";
import { FlatRoofWhyChooseUsSection } from "@/components/services/flat-roof/whychooseus-section";
import { FlatRoofAreasWeServeSection } from "@/components/services/flat-roof/areasofservice-section";
import {LocationNavigationSection} from "@/components/services/flat-roof/locations-section";


export default function Page() {
  return (
    <div className="bg-stone-100 text-stone-900 selection:bg-secondary/30">
      <FlatRoofHeroSection />
      <LocationNavigationSection />
      <FlatRoofOverviewSection />
      <WhatIsFlatRoofSection />
      <FlatRoofSystemSection />
      <FlatRoofTypesSection />
      <FlatRoofProcessSection />
      <FlatRoofBenefitsSection />
      <FlatRoofResidentialCommercialSection />
      <FlatRoofWhyChooseUsSection />
      <FlatRoofAreasWeServeSection />
      {/* <FlatRoofShowcaseSection /> */}
      {/* <FlatRoofTestimonialSection /> */}
      <FlatRoofFaqSection />
      <RelatedServicesSection currentServiceSlug="flat-roof" />
      <FlatRoofCtaSection />
    </div>
  );
}
