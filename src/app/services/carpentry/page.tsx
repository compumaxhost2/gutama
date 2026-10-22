import { CarpentryBenefitsSection } from "@/components/services/carpentry/benefits-section";
import { CarpentryCtaSection } from "@/components/services/carpentry/cta-section";
import { CarpentryFaqSection } from "@/components/services/carpentry/faq-section";
import { CarpentryHeroSection } from "@/components/services/carpentry/hero-section";
import { CarpentryOverviewSection } from "@/components/services/carpentry/overview-section";
import { CarpentryProcessSection } from "@/components/services/carpentry/process-section";
// import { CarpentryShowcaseSection } from "@/components/services/carpentry/showcase-section";
// import { CarpentryTestimonialSection } from "@/components/services/carpentry/testimonial-section";
import { RelatedServicesSection } from "@/components/services/related-services-section";
import {CarpentryInfoSection} from "@/components/services/carpentry/about-section";
import {CarpentryHowItWorksSection} from "@/components/services/carpentry/working-section";
import {CarpentryServiceTypesSection} from "@/components/services/carpentry/services-section";
import {CarpentrySignsSection} from "@/components/services/carpentry/signs-section";
import { CarpentryPropertyTypesSection } from "@/components/services/carpentry/residentialandcommercial-section";
import { CarpentryWhyChooseSection } from "@/components/services/carpentry/whychoose-section";

export default function Page() {
  return (
    <div className="bg-stone-100 text-stone-900 selection:bg-secondary/30">
      <CarpentryHeroSection />
      <CarpentryOverviewSection />
      <CarpentryBenefitsSection />
      <CarpentryInfoSection />
      <CarpentryHowItWorksSection />
      <CarpentryServiceTypesSection />
      <CarpentrySignsSection />
      <CarpentryProcessSection />
      <CarpentryPropertyTypesSection />
      <CarpentryWhyChooseSection />
      {/* <CarpentryShowcaseSection /> */}
      {/* <CarpentryTestimonialSection /> */}
      <CarpentryFaqSection />
      <RelatedServicesSection currentServiceSlug="carpentry" />
      <CarpentryCtaSection />
    </div>
  );
}
