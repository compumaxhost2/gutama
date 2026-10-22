import { GuttersBenefitsSection } from "@/components/services/gutters/benefits-section";
import { GuttersCtaSection } from "@/components/services/gutters/cta-section";
import { GuttersFaqSection } from "@/components/services/gutters/faq-section";
import { GuttersHeroSection } from "@/components/services/gutters/hero-section";
import { GuttersOverviewSection } from "@/components/services/gutters/overview-section";
import { GuttersProcessSection } from "@/components/services/gutters/process-section";
// import { GuttersShowcaseSection } from "@/components/services/gutters/showcase-section";
// import { GuttersTestimonialSection } from "@/components/services/gutters/testimonial-section";
import { RelatedServicesSection } from "@/components/services/related-services-section";
import {GuttersSystemSection} from "@/components/services/gutters/about&working-section";
import {GuttersWarningSignsSection} from "@/components/services/gutters/signs-section";
import {GuttersServicesSection} from "@/components/services/gutters/services-section";
import {GuttersPropertyTypesSection} from "@/components/services/gutters/residentialandcommercial-section";
import {GuttersAreasWeServeSection} from "@/components/services/gutters/areas-of-service-section";
import {GuttersWhyChooseSection} from "@/components/services/gutters/whychoose-section";

export default function Page() {
  return (
    <div className="bg-stone-100 text-stone-900 selection:bg-secondary/30">
      <GuttersHeroSection />
      <GuttersOverviewSection />
      <GuttersSystemSection />
      <GuttersWarningSignsSection />
      <GuttersServicesSection />
      <GuttersProcessSection />
      <GuttersBenefitsSection />
      <GuttersPropertyTypesSection />
      <GuttersAreasWeServeSection />
      <GuttersWhyChooseSection />
      {/* <GuttersShowcaseSection /> */}
      {/* <GuttersTestimonialSection /> */}
      <GuttersFaqSection />
      <RelatedServicesSection currentServiceSlug="gutters" />
      <GuttersCtaSection />
    </div>
  );
}
