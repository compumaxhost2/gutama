import { ReRoofingHeroSection } from "@/components/services/re-roofing/hero-section";
import { ReRoofingOverviewSection } from "@/components/services/re-roofing-newark-nj/overview-section";
import { ReRoofingWhatSection } from "@/components/services/re-roofing-newark-nj/about-section";
import {ReRoofingProcessSection} from "@/components/services/re-roofing-newark-nj/working-section";
import {ReRoofingBenefitsSection} from "@/components/services/re-roofing-newark-nj/benefits-section";
import {ReRoofingSignsSection} from "@/components/services/re-roofing-newark-nj/signs-section";
import {ReRoofingVsReplacementSection} from "@/components/services/re-roofing-newark-nj/repairvsreplacement-section";
import {ReRoofingCostSection} from "@/components/services/re-roofing-newark-nj/costing-section";
import {ReRoofingMaterialsCodesSection} from "@/components/services/re-roofing-newark-nj/materials-permits-section";
import {ReRoofingWhyChooseSection} from "@/components/services/re-roofing-newark-nj/whychoose-section";
import {ReRoofAreasSection} from "@/components/services/re-roofing-newark-nj/areas-section";
import {ReRoofingFaqSection} from "@/components/services/re-roofing-newark-nj/faq-section";
import {ReRoofingCtaSection} from "@/components/services/re-roofing-newark-nj/cta-section";
import {LocationNavigationSection} from "@/components/services/re-roofing/locations-section";


export default function Page() {
    return (
        <div className="bg-stone-100 text-stone-900 selection:bg-secondary/30">
            <ReRoofingHeroSection />
            <LocationNavigationSection />
            <ReRoofingOverviewSection />
            <ReRoofingWhatSection />
            <ReRoofingProcessSection />
            <ReRoofingBenefitsSection />
            <ReRoofingSignsSection />
            <ReRoofingVsReplacementSection />
            <ReRoofingCostSection />
            <ReRoofingMaterialsCodesSection />
            <ReRoofingWhyChooseSection />
            <ReRoofAreasSection />
            <ReRoofingFaqSection />
            <ReRoofingCtaSection />
        </div>
    );
}
