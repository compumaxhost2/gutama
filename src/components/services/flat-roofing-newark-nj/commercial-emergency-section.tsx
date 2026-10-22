export function FlatRoofCommercialEmergencySection() {
    const commercialProperties = [
        "Office buildings",
        "Warehouses",
        "Retail centers",
        "Apartment complexes",
        "Educational facilities",
        "Industrial properties",
    ];

    const emergencyServices = [
        "Active roof leaks",
        "Storm damage",
        "Flashing failures",
        "Membrane punctures",
        "Water intrusion issues",
    ];

    return (
        <section className="bg-[#dfd0c0] text-black py-14 px-6 border-t border-stone-300">
            <div className="mx-auto max-w-7xl">
                <div className="mb-14 text-center">
                    <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
                        <span className="h-px w-6 bg-primary" />
                        Additional Services
                    </p>

                    <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] text-black">
                        Commercial & Emergency
                        <br />
                        <em className="text-primary italic">Flat Roofing Solutions</em>
                    </h2>

                    <div className="mx-auto h-px w-24 bg-linear-to-r from-primary to-primary/30" />
                </div>
                <div className="grid gap-6 lg:grid-cols-2">
                    {/* Commercial Roofing */}
                    <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10">
                        <p className="mb-4 text-xs uppercase tracking-[0.16em] text-primary">
                            Commercial Roofing
                        </p>

                        <h2 className="mb-6 font-serif text-3xl text-black">
                            Commercial Flat Roofing
                            <br />
                            <em className="text-primary not-italic">Newark NJ</em>
                        </h2>

                        <p className="mb-8 text-sm leading-loose font-medium text-black">
                            Commercial properties often require specialized flat roofing
                            systems capable of handling heavy equipment and increased foot
                            traffic.
                        </p>

                        <h3 className="mb-5 text-sm font-medium uppercase tracking-[0.14em] text-primary">
                            We Provide Roofing Solutions For
                        </h3>

                        <div className="space-y-4">
                            {commercialProperties.map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <div className="h-px w-5 shrink-0 bg-primary" />
                                    <span className="text-sm text-black/85">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 border-t border-stone-200 pt-6">
                            <p className="text-sm leading-loose font-medium text-black">
                                Our commercial roofing systems are designed for durability,
                                efficiency, and long-term performance.
                            </p>
                        </div>
                    </div>

                    {/* Emergency Repair */}
                    <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10">
                        <p className="mb-4 text-xs uppercase tracking-[0.16em] text-primary">
                            Emergency Services
                        </p>

                        <h2 className="mb-6 font-serif text-3xl text-black">
                            Emergency Flat Roof Repair
                            <br />
                            <em className="text-primary not-italic">Newark NJ</em>
                        </h2>

                        <p className="mb-8 text-sm leading-loose font-medium text-black">
                            Roof leaks can occur unexpectedly during storms or severe weather.
                        </p>

                        <h3 className="mb-5 text-sm font-medium uppercase tracking-[0.14em] text-primary">
                            Our Emergency Services Address
                        </h3>

                        <div className="space-y-4">
                            {emergencyServices.map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <div className="h-px w-5 shrink-0 bg-primary" />
                                    <span className="text-sm text-black/85">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 border-t border-stone-200 pt-6">
                            <p className="text-sm leading-loose font-medium text-black">
                                Fast action can help minimize interior damage, protect building
                                contents, and reduce long-term repair costs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}