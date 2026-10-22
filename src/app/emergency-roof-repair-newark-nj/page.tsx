import { EmergencyRepairHeroSection } from "@/components/services/emergency-repair/hero-section";
import {EmergencyRepairOverviewSection} from "@/components/services/emergency-roof-repair-newark-nj/overview-section";
import {EmergencyRepairDefinitionSection} from "@/components/services/emergency-roof-repair-newark-nj/about-section";
import {EmergencyRepairSignsSection} from "@/components/services/emergency-roof-repair-newark-nj/signs-section";
import {EmergencyRepairCausesSection} from "@/components/services/emergency-roof-repair-newark-nj/causes-section";
import {EmergencyLeakRepairSection} from "@/components/services/emergency-roof-repair-newark-nj/roofleaks-section";
import {EmergencyRoofTarpSection} from "@/components/services/emergency-roof-repair-newark-nj/rooftarp-section";
import {StormDamageRepairSection} from "@/components/services/emergency-roof-repair-newark-nj/stormdamagerepair-section";
import {EmergencyRepairPropertyTypesSection} from "@/components/services/emergency-roof-repair-newark-nj/residential-commercial-section";
import {EmergencyRepairProcessSection} from "@/components/services/emergency-roof-repair-newark-nj/process-section";
import {EmergencyRepairCostSection} from "@/components/services/emergency-roof-repair-newark-nj/repair-cost-section";
import {EmergencyRepairInsuranceSection} from "@/components/services/emergency-roof-repair-newark-nj/insurance-section";
import { EmergencyRepairWhyChooseSection } from "@/components/services/emergency-roof-repair-newark-nj/why-choose-section";
import {EmergencyRepairAreasSection} from "@/components/services/emergency-roof-repair-newark-nj/areas-section";
import {EmergencyRepairFaqSection} from "@/components/services/emergency-roof-repair-newark-nj/faq-section";
import {EmergencyRepairCtaSection} from "@/components/services/emergency-roof-repair-newark-nj/cta-section";
import {LocationNavigationSection} from "@/components/services/emergency-repair/locations-section";
  


export default function Page() {
  return (
    <div className="bg-stone-100 text-stone-900 selection:bg-secondary/30">
      <EmergencyRepairHeroSection />
      <LocationNavigationSection />
      <EmergencyRepairOverviewSection />
      <EmergencyRepairDefinitionSection />
      <EmergencyRepairSignsSection />
      <EmergencyRepairCausesSection />
      <EmergencyLeakRepairSection />
      <EmergencyRoofTarpSection />
      <StormDamageRepairSection />
      <EmergencyRepairPropertyTypesSection />
      <EmergencyRepairProcessSection />
      <EmergencyRepairCostSection />
      <EmergencyRepairInsuranceSection />
      <EmergencyRepairWhyChooseSection />
      <EmergencyRepairAreasSection />
      <EmergencyRepairFaqSection />
      <EmergencyRepairCtaSection />
    </div>
  );
}
