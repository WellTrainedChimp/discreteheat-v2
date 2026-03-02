import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import TestimonialStrip from '@/components/blocks/TestimonialStrip';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Retrofit Skirting Board Heating | ThermaSkirt',
    description: 'The ultimate retrofit heating solution. Upgrade your home to lower flow temperatures and heat pumps without ripping up your floors for underfloor heating.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/by-project/retrofit/',
    }
};

export default function RetrofitPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Retrofit Projects"
                    title="The smartest way to make your home"
                    titleHighlight="heat-pump ready."
                    description="Upgrading your home's energy efficiency doesn't mean moving out while your floors are ripped up. ThermaSkirt connects to your existing pipework above ground, delivering the low-temperature performance of underfloor heating with the simplicity of replacing your skirting boards."
                    primaryCta={{ text: "See Retrofit Costs", href: "/homeowners/cost-guide" }}
                    imageSrc="/assets/images/homeowner-retrofit.jpg"
                    imageAlt="A renovated UK period property with new skirting heating"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Retrofit Skirting Board Heating</h2>
                            <p className="text-xl font-light text-dh-dark mb-12 leading-relaxed">
                                ThermaSkirt is an above-ground retrofit heating solution that connects directly to existing 15mm or 10mm radiator pipework. It delivers the low-temperature performance (35–45°C) required for heat pump efficiency without the immense cost, disruption, and 15–20mm floor height increases associated with retrofitting wet underfloor heating.
                            </p>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Disruption</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Zero Floor Build-Up. No Screed.</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Retrofitting underfloor heating (UFH) into an existing property is notoriously disruptive. It involves either digging down into concrete foundations to lay screed—which forces homeowners to move out—or laying thin-profile UFH overlay boards that raise the floor level by exactly 15–20mm. This secondary consequence means every interior door in the house must be removed and planed down.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt completely sidesteps this problem. Installed exactly where traditional 120mm or 150mm timber skirting boards sit, it projects just 20mm from the wall. The system connects to the central heating circuit by simply extending the existing flow and return pipes. What is normally a multi-week building project becomes a clean, 1–2 day plumbing job.
                            </p>
                        </article>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                            <div className="p-8 bg-dh-grey-light rounded-[14px] border border-dh-grey-light/50 shadow-sm">
                                <h3 className="text-xl font-semibold mb-4 text-dh-dark">The UFH Retrofit Reality</h3>
                                <ul className="space-y-3 text-dh-grey">
                                    <li className="flex gap-3"><span className="text-dh-red font-bold">✗</span> Lift and discard existing flooring</li>
                                    <li className="flex gap-3"><span className="text-dh-red font-bold">✗</span> Pour screed and wait 28 days to dry</li>
                                    <li className="flex gap-3"><span className="text-dh-red font-bold">✗</span> Plane 15-20mm off every interior door</li>
                                    <li className="flex gap-3"><span className="text-dh-red font-bold">✗</span> Reinstall new flooring on top</li>
                                </ul>
                            </div>
                            <div className="p-8 bg-dh-dark rounded-[14px] shadow-sm">
                                <h3 className="text-xl font-semibold mb-4 text-white">The ThermaSkirt Reality</h3>
                                <ul className="space-y-3 text-white/80">
                                    <li className="flex gap-3"><span className="text-dh-red font-bold">✓</span> Remove old skirting boards and radiators</li>
                                    <li className="flex gap-3"><span className="text-dh-red font-bold">✓</span> Keep existing carpets or solid wood floors</li>
                                    <li className="flex gap-3"><span className="text-dh-red font-bold">✓</span> Plumb directly into 15mm copper or plastic</li>
                                    <li className="flex gap-3"><span className="text-dh-red font-bold">✓</span> Installation finished in 1 to 2 days</li>
                                </ul>
                            </div>
                        </div>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Performance at dT20</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Oversized Emitters Without the Eyesore</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Upgrading from a gas boiler (70°C flow) to an air source heat pump (35–45°C flow) demands significantly larger heat emitters. A standard radiator run at these low temperatures will only output around 30% of its rated capacity.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                The standard industry fix is to install oversized Type 22 or Type 33 double-convector radiators. ThermaSkirt avoids this eyesore. BSRIA tests confirm that because ThermaSkirt has an exposed, highly conductive aluminium surface area spanning the entire room&apos;s perimeter, it remarkably retains 48% of its output at a dT20 flow temperature. This delivers the necessary kW heat output for low-temperature heat pumps while remaining effectively invisible.
                            </p>
                        </article>
                    </div>
                </section>

                <TestimonialStrip
                    quote="We wanted a heat pump but absolutely refused to dig up the original Victorian tiles in our hallway for underfloor heating. ThermaSkirt was the only solution that let us keep the character of the house while drastically lowering our carbon footprint."
                    author="James & Claire"
                    tags={['Retrofit', 'Heat Pump', 'Victorian']}
                />

                <FAQText
                    faqs={[
                        {
                            question: "Do I have to re-pipe my entire house?",
                            answer: "No. ThermaSkirt is designed to work as a straight swap for existing radiators. Your installer will simply pick up the existing 15mm or 10mm microbore pipework protruding from the floor or wall where your old radiator sat, and run it directly into the skirting board profile."
                        },
                        {
                            question: "Will it work with microbore (10mm) pipes?",
                            answer: "Yes, fully compatible. Because ThermaSkirt is a low water content system with a continuous open waterway, it typically has much lower pressure drop than a convector radiator, making it perfectly suited for older 10mm microbore systems."
                        },
                        {
                            question: "Can I just do one room at a time?",
                            answer: "Absolutely. Many homeowners choose to retrofit ThermaSkirt room-by-room as they decorate. It operates perfectly on the same circuit as traditional radiators, so there's no need to commit to the whole house at once."
                        }
                    ]}
                />

                <CTABanner
                    heading="Don't rip up your floors."
                    description="Get an itemised quote for a clean, fast ThermaSkirt retrofit."
                    primaryCTA="Start My Quote"
                    primaryCTALink="/homeowners/get-a-quote"
                    secondaryCTA="Read the SHDF Guide"
                    secondaryCTALink="/learn/shdf-guide"
                />
            </main>
        </>
    );
}
