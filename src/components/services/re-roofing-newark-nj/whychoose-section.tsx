import {
  Award,
  MapPin,
  Shield,
  Users,
} from "lucide-react";

const REASONS = [
  {
    icon: MapPin,
    title: "Local Newark Roofing Expertise",
    desc: "We understand the roofing challenges caused by New Jersey winters, ice and water buildup, seasonal storms, wind exposure, and humidity fluctuations throughout Essex County.",
  },
  {
    icon: Users,
    title: "Experienced Roofing Contractors",
    desc: "Our skilled team provides dependable workmanship, careful project management, and attention to detail on every re-roofing project.",
  },
  {
    icon: Shield,
    title: "Quality Roofing Materials",
    desc: "We install premium roofing products designed to withstand New Jersey's climate while providing long-term protection and performance.",
  },
  {
    icon: Award,
    title: "Honest Recommendations",
    desc: "Every roof is carefully evaluated so we can recommend the most cost-effective solution based on the actual condition of your property.",
  },
] as const;

export function ReRoofingWhyChooseSection() {
  return (
    <section className="bg-[#dfd0c0] text-black py-14 px-6 border-t border-stone-300">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Why Homeowners Choose Us
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-black">
            Why Choose
            <br />
            <em className="text-primary italic">Gutama Roofing NJ</em>
          </h2>

          <div className="mx-auto h-px w-24 bg-linear-to-r from-primary to-primary/30" />

          <p className="mx-auto mt-6 max-w-3xl text-base leading-loose font-medium text-black">
            From roof inspections to complete re-roofing projects, our team
            focuses on quality workmanship, honest guidance, and long-term
            roofing performance for Newark homeowners and businesses.
          </p>
        </div>

        <div className="grid gap-2 md:grid-cols-2">
          {REASONS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-10 transition-all duration-500 hover:border-primary/40 hover:shadow-xl"
            >
              <div className="mb-6 flex h-11 w-11 items-center justify-center border border-primary/35 bg-primary/5">
                <item.icon
                  size={18}
                  className="text-primary"
                />
              </div>

              <h3 className="mb-3 font-serif text-2xl text-black">
                {item.title}
              </h3>

              <p className="text-sm leading-loose font-medium text-black">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}