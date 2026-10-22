import { Layers, ShieldCheck, Wind, Droplets, Sun, Hammer } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export function RoofingEngineeringSection() {
  const layers = [
    {
      num: "01",
      title: "Sound Wood Decking Substrate",
      icon: Hammer,
      desc: "The structural foundation of your roof. We inspect every square foot of plywood, CDX decking, or original wood boards, immediately replacing warped or rot-weakened sections.",
    },
    {
      num: "02",
      title: "Self-Adhering Ice & Water Barrier",
      icon: Droplets,
      desc: "Specialized elastomeric membrane installed along eaves, valleys, chimneys, and skylights to halt water infiltration caused by winter ice dams and wind-driven rain.",
    },
    {
      num: "03",
      title: "Synthetic Breathable Underlayment",
      icon: ShieldCheck,
      desc: "High-tensile woven synthetic underlayment that provides 25x greater tear strength than legacy organic felt paper, creating an impenetrable water-shedding second defense.",
    },
    {
      num: "04",
      title: "Heavy-Gauge Drip Edge & Flashing",
      icon: Layers,
      desc: "Corrosion-resistant metal edging guides rainwater directly into gutters while preventing fascia rot. Custom hand-bent step flashing seals every wall junction.",
    },
    {
      num: "05",
      title: "Premium Primary Surface Medium",
      icon: Sun,
      desc: "Installed to manufacturer specifications: architectural fiberglass shingles, commercial EPDM rubber / TPO membranes, or authentic natural quarry slate.",
    },
    {
      num: "06",
      title: "Continuous Ridge Ventilation",
      icon: Wind,
      desc: "Balanced intake and exhaust ventilation that releases trapped attic heat and humidity, reducing summer AC loads and extending shingle lifespan by years.",
    },
  ];

  return (
    <section className="relative py-24 bg-background">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
              Engineering Standards
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Anatomy of a Gutama Roof System
            </h2>
            <div className="gold-divider mt-5 mb-5" />
            <p className="text-base text-muted-foreground md:text-lg">
              A dependable roof is not just surface shingles. It is an integrated multi-layer defense system engineered to withstand severe New Jersey weather for decades.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {layers.map((layer) => {
            const Icon = layer.icon;
            return (
              <div
                key={layer.num}
                className="relative overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-md p-7 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-bold text-secondary/30">
                    {layer.num}
                  </span>
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 border border-secondary/20">
                    <Icon className="h-5 w-5 text-secondary" />
                  </div>
                </div>

                <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                  {layer.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {layer.desc}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
