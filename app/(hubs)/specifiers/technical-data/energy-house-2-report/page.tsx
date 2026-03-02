import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Energy House 2.0 Report | Technical Data | ThermaSkirt',
    description: 'Independent test report from the University of Salford comparing ThermaSkirt radiant heating efficiency and comfort against standard steel panel radiators.',
    alternates: {
        canonical: 'https://www.discreteheat.com/specifiers/technical-data/energy-house-2-report/',
    }
};

const otherData = [
    { title: 'BSRIA Test Results', description: 'Thermal output and comfort testing to BS EN 442-1 standards.', href: '/specifiers/technical-data/bsria-test-results' },
    { title: 'Output Tables', description: 'Comprehensive Watts/Meter outputs across all profiles.', href: '/specifiers/technical-data/output-tables' },
    { title: 'Heat Loss Methodology', description: 'Guide to measuring perimeter compensation against DIN EN 12831.', href: '/specifiers/technical-data/heat-loss-methodology' },
];

export default function EnergyHouseReportPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Independent Validation"
                    title="Energy House 2.0"
                    titleHighlight="Testing."
                    description="The University of Salford\'s Energy House is a world-leading research facility. We subjected ThermaSkirt to rigorous, controlled testing against traditional steel panel radiators."
                    primaryCta={{ text: "Download Full Report", href: "/specifiers/specification-support/design-service" }}
                    imageSrc="/assets/images/technical-energy-house.jpg"
                    imageAlt="The Energy House 2.0 testing chamber at the University of Salford"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-5xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">The Testing Methodology</h2>
                            <p className="text-xl font-light text-dh-dark mb-6 leading-relaxed">
                                The Energy House facility allows researchers to recreate identical, repeatable weather conditions—down to -20°C with controlled wind and rain—outside an entire reconstructed house built within an environmental chamber.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                In 2022, ThermaSkirt was tested side-by-side against standard Type 22 panel radiators under strict low flow temperature conditions (45°C flow / 40°C return) simulating an Air Source Heat Pump (ASHP) installation. The house was instrumented with hundreds of thermal sensors to measure absolute energy consumption, stratification (temperature difference between floor and ceiling), and time-to-comfort.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Key Finding 1</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Up to 13% Energy Savings</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                The report concluded that because ThermaSkirt emits radiant heat from the perimeter baseline of the room, it achieves a comfortable \'operative temperature\' sooner and sustains it with less absolute energy input from the source compared to convective radiators that push hot air to the ceiling.
                            </p>
                            <div className="p-6 bg-dh-grey-light rounded-2xl border border-dh-grey-light/50 my-8">
                                <h4 className="text-lg font-semibold text-dh-dark mb-2">Technical Note: Thermal Stratification</h4>
                                <p className="text-dh-grey text-sm mb-4">
                                    The Energy House sensors proved that the radiator created a 3.5°C differential between the floor (cold) and the ceiling (hot). ThermaSkirt reduced this stratification gradient to less than 1°C. By not wasting energy overheating the ceiling void, the thermostat satisfies earlier, reducing boiler or heat pump run times by up to 13%.
                                </p>
                                <a href="/specifiers/specification-support/design-service" className="text-dh-red font-semibold hover:underline text-sm">Download Full Energy House Report &rarr;</a>
                            </div>
                        </article>

                    </div>
                </section>

                <FAQText
                    faqs={[
                        {
                            question: "Is this report peer-reviewed?",
                            answer: "The data was collected, analyzed, and published independently by the built environment researchers at the University of Salford, adhering to rigorous academic and scientific standards."
                        },
                        {
                            question: "Were the radiators sized correctly for the heat pump?",
                            answer: "Yes, the test explicitly utilized oversized Type 22 radiators appropriately sized to achieve the room heat losses at the 45°C flow temperature, representing a 'best practice' conventional heat pump retrofit."
                        }
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore Further Documentation"
                    description="Access more independent testing data and output charts."
                    tiles={otherData}
                />

                <CTABanner
                    heading="Require technical justification for a specification?"
                    description="Our project team can provide complete copies of the Energy House report, BSRIA validation, and heat loss comparisons for your client or local authority."
                    primaryCTA="Download Specifier Pack"
                    primaryCTALink="/specifiers/specification-support/design-service"
                    secondaryCTA="Speak to Spec Team"
                    secondaryCTALink="/about/contact"
                />
            </main>
        </>
    );
}
