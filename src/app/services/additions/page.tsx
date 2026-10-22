import { AdditionsTypesSection } from "@/components/services/additions/about-section";
import { AdditionsBenefitsSection } from "@/components/services/additions/benefits-section";
import { AdditionsCtaSection } from "@/components/services/additions/cta-section";
import { AdditionsFaqSection } from "@/components/services/additions/faq-section";
import { AdditionsHeroSection } from "@/components/services/additions/hero-section";
import { AdditionsOverviewSection } from "@/components/services/additions/overview-section";
import { AdditionsProcessSection } from "@/components/services/additions/process-section";
// import { AdditionsShowcaseSection } from "@/components/services/additions/showcase-section";
// import { AdditionsTestimonialSection } from "@/components/services/additions/testimonial-section";
import { RelatedServicesSection } from "@/components/services/related-services-section";
import {AdditionsWorkingSection} from "@/components/services/additions/working-section";
import { AdditionsServicesSection } from "@/components/services/additions/services-section";
import {AdditionsSignsSection} from "@/components/services/additions/signs-section";
import {AdditionsPropertyTypesSection} from "@/components/services/additions/residential-services-section";
import { WhyChooseSection } from "@/components/services/additions/whychoose-section";
import {AdditionsDecisionGuideSection} from "@/components/services/additions/comparision-section";

export default function Page() {
  return (
    <div className="bg-stone-100 text-stone-900 selection:bg-secondary/30">
      <AdditionsHeroSection />
      <AdditionsOverviewSection />
      <AdditionsTypesSection />
      <AdditionsWorkingSection />
      <AdditionsServicesSection />
      <AdditionsSignsSection />
      <AdditionsBenefitsSection />
      <AdditionsProcessSection />
      <AdditionsPropertyTypesSection />
      <WhyChooseSection />
      <AdditionsDecisionGuideSection />
      {/* <AdditionsShowcaseSection /> */}
      {/* <AdditionsTestimonialSection /> */}
      <AdditionsFaqSection />
      <RelatedServicesSection currentServiceSlug="additions" />
      <AdditionsCtaSection />
    </div>
  );
}
