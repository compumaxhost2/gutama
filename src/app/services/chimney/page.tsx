import { ChimneyAboutSection } from "@/components/services/chimney/about-section";
import { ChimneyCtaSection } from "@/components/services/chimney/cta-section";
import { ChimneyFaqSection } from "@/components/services/chimney/faq-section";
import { ChimneyHeroSection } from "@/components/services/chimney/hero-section";
import { ChimneyOverviewSection } from "@/components/services/chimney/overview-section";
import { ChimneyProcessSection } from "@/components/services/chimney/process-section";
// import { ChimneyShowcaseSection } from "@/components/services/chimney/showcase-section";
// import { ChimneyTestimonialSection } from "@/components/services/chimney/testimonial-section";
import { RelatedServicesSection } from "@/components/services/related-services-section";
import {ChimneyHowItWorksSection} from "@/components/services/chimney/working-section";
import {ChimneyWarningSignsSection} from "@/components/services/chimney/signsforreplacement-section";
import {ChimneyServicesSection} from "@/components/services/chimney/services-section";
import {ChimneyBenefitsSection} from "@/components/services/chimney/benefits-section";
import { ChimneyPropertyServicesSection } from "@/components/services/chimney/residentialandcommercial-section";
import {WhyChooseProfessionalChimneySection} from "@/components/services/chimney/whychoose-section";

export default function Page() {
  return (
    <div className="bg-stone-100 text-stone-900 selection:bg-secondary/30">
      <ChimneyHeroSection />
      <ChimneyOverviewSection />
      <ChimneyAboutSection />
      <ChimneyHowItWorksSection />
      <ChimneyWarningSignsSection />
      <ChimneyServicesSection />
      <ChimneyProcessSection />
      <ChimneyBenefitsSection />
      <ChimneyPropertyServicesSection />
      <WhyChooseProfessionalChimneySection />
      {/* <ChimneyShowcaseSection /> */}
      {/* <ChimneyTestimonialSection /> */}
      <ChimneyFaqSection />
      <RelatedServicesSection currentServiceSlug="chimney" />
      <ChimneyCtaSection />
    </div>
  );
}
