import { ClipboardCheck, FileText, ShieldAlert, Wrench, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export function RoofingProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Comprehensive Roof Inspection",
      icon: ClipboardCheck,
      desc: "We perform a thorough evaluation of surface shingles, attic rafter health, decking moisture, flashing integrity, and drainage slopes to determine the exact requirements.",
    },
    {
      step: "02",
      title: "Transparent, Itemized Proposal",
      icon: FileText,
      desc: "Receive a transparent scope of work with clear material options (GAF, Owens Corning, Firestone EPDM, natural slate), warranties, and honest pricing with zero hidden surcharges.",
    },
    {
      step: "03",
      title: "Site & Landscape Protection",
      icon: ShieldAlert,
      desc: "Before a single nail is pulled, we drape heavy-duty protective tarps across siding, landscaping, air conditioning units, and driveways, ensuring your property is 100% guarded.",
    },
    {
      step: "04",
      title: "Code-Compliant Installation",
      icon: Wrench,
      desc: "Our licensed master roofers install every element according to strict manufacturer specifications and Essex County municipal building safety guidelines.",
    },
    {
      step: "05",
      title: "Magnetic Sweep & Final Sign-Off",
      icon: Sparkles,
      desc: "We conduct multiple rolling magnetic sweeps to retrieve any stray nails, clean all debris, and complete a final quality inspection with you before project closure.",
    },
  ];

  return (
    <section className="relative py-24 bg-muted/15 border-t border-stone-200/90">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
              Workflow & Precision
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Our 5-Step Roofing Workflow
            </h2>
            <div className="gold-divider mt-5 mb-5" />
            <p className="text-base text-muted-foreground md:text-lg">
              From the first consultation to the final magnetic nail sweep, our systematic process ensures seamless execution, strict jobsite safety, and enduring quality.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative flex flex-col justify-between rounded-2xl border border-stone-200/90 bg-white shadow-md p-6 transition-all duration-300 hover:border-secondary/40 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-2xl font-bold text-secondary">
                      {item.step}
                    </span>
                    <Icon className="h-5 w-5 text-muted-foreground" />
                  </div>

                  <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-stone-200/70 text-[10px] uppercase tracking-wider text-secondary/80 font-medium">
                  Phase {idx + 1} of 5
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
