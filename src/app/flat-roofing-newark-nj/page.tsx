import { FlatRoofHeroSection } from "@/components/services/flat-roof/hero-section";
import { FlatRoofOverviewSection } from "@/components/services/flat-roofing-newark-nj/overview-section";
import { FlatRoofWhatIsSection } from "@/components/services/flat-roofing-newark-nj/about-section";
import { FlatRoofBenefitsSection } from "@/components/services/flat-roofing-newark-nj/benefits-section";
import { FlatRoofSystemsSection } from "@/components/services/flat-roofing-newark-nj/types-section";
import {FlatRoofRepairSection} from "@/components/services/flat-roofing-newark-nj/repair-section";
import {FlatRoofReplacementSection} from "@/components/services/flat-roofing-newark-nj/replacement-section";
import {FlatRoofProcessSection} from "@/components/services/flat-roofing-newark-nj/process-section";
import {FlatRoofCostSection} from "@/components/services/flat-roofing-newark-nj/cost-section";
import {FlatRoofCommercialEmergencySection} from "@/components/services/flat-roofing-newark-nj/commercial-emergency-section";
import {FlatRoofWhyChooseSection} from "@/components/services/flat-roofing-newark-nj/whychoose-section";
import {FlatRoofAreasSection} from "@/components/services/flat-roofing-newark-nj/areas-section";
import {FlatRoofFaqSection} from "@/components/services/flat-roofing-newark-nj/faq-section";
import {FlatRoofCtaSection} from "@/components/services/flat-roofing-newark-nj/cta-section";
import {LocationNavigationSection} from "@/components/services/flat-roof/locations-section";



export default function Page() {
    return (
        <div className="bg-stone-100 text-stone-900 selection:bg-secondary/30">
            <FlatRoofHeroSection />
            <LocationNavigationSection />
            <FlatRoofOverviewSection />
            <FlatRoofWhatIsSection />
            <FlatRoofBenefitsSection />
            <FlatRoofSystemsSection />
            <FlatRoofRepairSection />
            <FlatRoofReplacementSection />
            <FlatRoofProcessSection />
            <FlatRoofCostSection />
            <FlatRoofCommercialEmergencySection />
            <FlatRoofWhyChooseSection />
            <FlatRoofAreasSection />
            <FlatRoofFaqSection />
            <FlatRoofCtaSection />
        </div>
    );
}
