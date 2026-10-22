import { RoofRemovalHeroSection } from "@/components/services/roof-removal/hero-section";
import { RoofRemovalOverviewSection } from "@/components/services/roof-removal-newark-nj/overview-section";
import { RoofRemovalServicesSection } from "@/components/services/roof-removal-newark-nj/services-section";
import {RoofRemovalResidentialCommercialSection} from "@/components/services/roof-removal-newark-nj/residentialcommercial-section";
import {RoofRemovalMaterialTypesSection} from "@/components/services/roof-removal-newark-nj/materialtypes-section";
import {RoofRemovalProcessSection} from "@/components/services/roof-removal-newark-nj/process-section";
import {RoofRemovalCostSection} from "@/components/services/roof-removal-newark-nj/cost-section";
import {RoofRemovalInfoSection} from "@/components/services/roof-removal-newark-nj/info-section";
import {RoofRemovalEmergencySection} from "@/components/services/roof-removal-newark-nj/emergency-section";
import {RoofRemovalAreasSection} from "@/components/services/roof-removal-newark-nj/areas-section";
import {RoofRemovalWhyChooseSection} from "@/components/services/roof-removal-newark-nj/whychoose-section";
import {RoofRemovalFaqSection} from "@/components/services/roof-removal-newark-nj/faq-section";
import {RoofRemovalCtaSection} from "@/components/services/roof-removal-newark-nj/cta-section";
import {LocationNavigationSection} from "@/components/services/roof-removal/locations-section";


export default function Page() {
    return (
        <div className="bg-stone-100 text-stone-900 selection:bg-secondary/30">
            <RoofRemovalHeroSection />
            <LocationNavigationSection />
            <RoofRemovalOverviewSection />
            <RoofRemovalServicesSection />
            <RoofRemovalResidentialCommercialSection />
            <RoofRemovalMaterialTypesSection />
            <RoofRemovalProcessSection />
            <RoofRemovalCostSection />
            <RoofRemovalInfoSection />
            <RoofRemovalEmergencySection />
            <RoofRemovalAreasSection />
            <RoofRemovalWhyChooseSection />
            <RoofRemovalFaqSection />
            <RoofRemovalCtaSection />
        </div>
    );
}
