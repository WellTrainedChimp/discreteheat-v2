import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import TestimonialStrip from '@/components/blocks/TestimonialStrip';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Skirting Board Heating for Heat Pumps | ThermaSkirt',
    description: 'The perfect emitter for air source heat pumps. ThermaSkirt provides the large surface area needed for low flow temperatures (35-45°C) without the disruption of underfloor heating or oversized radiators.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/by-heat-source/heat-pump/',
    }
};

export default function HeatPumpPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Heat Pumps"
                    title="The missing link in your"
                    titleHighlight="heat pump upgrade."
                    description="Heat pumps are incredibly efficient, provided they run at low temperatures (35–45°C). ThermaSkirt delivers the massive surface area required to heat your home at these flow temperatures, outperforming standard radiators and matching the comfort of underfloor heating."
                    primaryCta={{ text: "Get a Heat Pump Install Quote", href: "/homeowners/get-a-quote" }}
                    imageSrc="/assets/images/homeowner-heat-pump.jpg"
                    imageAlt="A modern home setup with an air source heat pump outside and ThermaSkirt inside"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Skirting Board Heating for Heat Pumps</h2>
                            <p className="text-xl font-light text-dh-dark mb-12 leading-relaxed">
                                ThermaSkirt H2O is designed to operate at 35–45°C flow temperatures, making it the most efficient skirting board heating emitter for air source and ground source heat pumps. At low flow temperatures, ThermaSkirt retains 48% of its rated output, improving heat pump COP by up to 0.5 in real-world installations compared to oversized radiators.
                            </p>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Physics</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Why Heat Pumps Need Different Emitters</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                A gas boiler delivers water to your radiators at 70°C. An Air Source Heat Pump (ASHP) reaches its maximum efficiency (COP) when it delivers water at 35–45°C. To emit the same amount of heat into your room at these lower temperatures, your heat emitter must have a significantly larger surface area.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                If you keep your existing standard radiators, the heat pump will struggle to warm the house, or it will be forced to work harder, ruining its efficiency and driving up your electric bills. ThermaSkirt solves this by turning the entire perimeter of your room into an aluminium heat emitter—providing the necessary surface area to achieve target outputs without sacrificing your wall space to massive Type 33 double-convector radiators.
                            </p>

                            <p className="text-lg text-dh-grey leading-relaxed mb-8">
                                Independent testing by the University of Salford at the Energy House 2.0 facility confirmed that ThermaSkirt&apos;s thermal performance outperforms standard radiators at low flow temperatures, securing critical efficiency gains for homeowners.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                                <div className="p-10 bg-dh-grey-light rounded-[14px] flex flex-col items-center justify-center text-center">
                                    <span className="text-5xl font-light text-dh-red mb-4">+0.4 to 0.5</span>
                                    <h4 className="text-lg font-semibold text-dh-dark mb-2">COP Improvement</h4>
                                    <p className="text-sm text-dh-grey">Tested at Energy House 2.0, showing significant improvements to Seasonal Coefficient of Performance (SCOP) versus standard radiators.</p>
                                </div>
                                <div className="p-10 bg-dh-grey-light rounded-[14px] flex flex-col items-center justify-center text-center">
                                    <span className="text-5xl font-light text-dh-red mb-4">48%</span>
                                    <h4 className="text-lg font-semibold text-dh-dark mb-2">Output Retention at dT20</h4>
                                    <p className="text-sm text-dh-grey">ThermaSkirt remarkably retains 48% of its heat output at ultra-low flow temperatures, far exceeding traditional panel convectors.</p>
                                </div>
                            </div>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Installation</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">A Clean Retrofit for Old Properties</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Underfloor heating (UFH) is the default choice for heat pumps in brand new builds. However, retrofitting UFH into a Victorian terrace or a 1970s semi-detached property is expensive and highly disruptive, requiring either digging up concrete slabs or raising the entire floor level by 15-20mm.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt installs cleanly above ground, connecting directly to your existing 15mm or 10mm microbore pipework. All your heat pump installer needs to do is remove the old radiators, extend the pipes to the skirting board level, and fit the 20mm deep ThermaSkirt profile. You get the low-temperature performance necessary to secure the Boiler Upgrade Scheme (£7,500 grant) without the nightmare of digging up your floors.
                            </p>
                        </article>
                    </div>
                </section>

                <TestimonialStrip
                    quote="We got a heat pump and quickly realised our old radiators couldn't cope. We didn't want giant double panels everywhere, so we fitted ThermaSkirt upstairs and down. The house is constantly warm and our bills are significantly lower."
                    author="David Harrison"
                    tags={['Air Source Heat Pump', 'Retrofit']}
                />

                <FAQText
                    faqs={[
                        {
                            question: "Will it work with an Air Source Heat Pump (ASHP)?",
                            answer: "Yes, it is specifically designed for it. ThermaSkirt provides the large surface area required for low-temperature heating (35-45°C), ensuring your heat pump operates at maximum efficiency (highest COP)."
                        },
                        {
                            question: "Does it work with Ground Source Heat Pumps (GSHP)?",
                            answer: "Absolutely. The thermodynamic principles are exactly the same. Whether air-source or ground-source, the critical factor is the flow temperature. ThermaSkirt is optimised for the dT20-dT30 range."
                        },
                        {
                            question: "Do I need to upgrade my pipework?",
                            answer: "Rarely. ThermaSkirt connects to standard 15mm copper or plastic pipe. It even works exceptionally well with 10mm microbore systems, as our profiles have a much lower pressure drop than standard convector radiators."
                        }
                    ]}
                />

                <CTABanner
                    heading="Ready to optimise your heat pump?"
                    description="Send us your room sizes and we'll calculate the exact heat output and cost."
                    primaryCTA="Get an Itemised Quote"
                    primaryCTALink="/homeowners/get-a-quote"
                    secondaryCTA="Read the BSRIA Test Results"
                    secondaryCTALink="/specifiers/technical-data/bsria-test-results"
                />
            </main>
        </>
    );
}
