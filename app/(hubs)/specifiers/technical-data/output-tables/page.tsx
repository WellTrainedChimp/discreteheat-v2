import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Output Tables | Technical Data | ThermaSkirt',
    description: 'Comprehensive heat output tables (Watts per Metre) for all ThermaSkirt profiles across dT50 to dT20 flow temperatures.',
    alternates: {
        canonical: 'https://www.discreteheat.com/specifiers/technical-data/output-tables/',
    }
};

const otherData = [
    { title: 'Energy House 2.0 Report', description: 'University of Salford testing on energy efficiency vs radiators.', href: '/specifiers/technical-data/energy-house-2-report' },
    { title: 'BSRIA Test Results', description: 'Thermal output and comfort testing to BS EN 442-1 standards.', href: '/specifiers/technical-data/bsria-test-results' },
    { title: 'Heat Loss Methodology', description: 'Guide to measuring perimeter compensation against DIN EN 12831.', href: '/specifiers/technical-data/heat-loss-methodology' },
];

export default function OutputTablesPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Performance Metrics"
                    title="Comprehensive"
                    titleHighlight="output data."
                    description="Accurate room-by-room heating design requires precise linear output data across a spectrum of flow and return temperatures."
                    primaryCta={{ text: "Download Full Data Sheets", href: "/specifiers/specification-support/design-service" }}
                    imageSrc="/assets/images/technical-outputs.jpg"
                    imageAlt="ThermaSkirt BM2 profile installed, showing the continuous linear heating nature of the product."
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-5xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Watts Per Metre (W/m) Matrix</h2>
                            <p className="text-xl font-light text-dh-dark mb-6 leading-relaxed">
                                ThermaSkirt is sized linearly based on the available perimeter length of the room. Our data sheets provide output in W/m scaled against the Mean Water Temperature (MWT) and Delta T (dT).
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                For traditional gas boilers operating at a flow of 75°C and return of 65°C in a 20°C room (dT50), the output is highest. For an Air Source Heat Pump (ASHP) operating under the Future Homes Standard at a flow of 45°C and return of 40°C in a 20°C room (dT22.5), the W/m output scales down according to the profile\'s specific BSRIA-tested n-coefficient.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Profile Variations</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Selecting the Right Extrusion</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                The BM2 (114mm high) and BM3/Deco3 (170mm high) profiles offer different surface areas and consequently different heat outputs.
                            </p>
                            <div className="p-6 bg-dh-grey-light rounded-2xl border border-dh-grey-light/50 my-8">
                                <h4 className="text-lg font-semibold text-dh-dark mb-2">Technical Note: High Heat Loss Rooms</h4>
                                <p className="text-dh-grey text-sm mb-4">
                                    In rooms with exceptionally high heat loss, such as conservatories or heavily glazed extensions on a heat pump, the taller BM3 profile provides approximately 30-40% more output per linear metre than the BM2. The complete logarithmic output performance curves for all profiles are available in our specifiers pack to allow M&E engineers to interpolate precise outputs at exact flow temperatures.
                                </p>
                                <a href="/specifiers/specification-support/design-service" className="text-dh-red font-semibold hover:underline text-sm">Download Specifier Output Pack &rarr;</a>
                            </div>
                        </article>

                    </div>
                </section>

                <FAQText
                    faqs={[
                        {
                            question: "How do I calculate dT?",
                            answer: "Delta T (dT) is calculated by taking the average of the flow and return temperatures (Mean Water Temperature) and subtracting the target room temperature. For example: Flow (45°C) + Return (40°C) / 2 = 42.5°C MWT. 42.5°C MWT - 20°C target room temp = dT22.5."
                        },
                        {
                            question: "What if there are doors or patio sliders?",
                            answer: "Only the active, plumbed perimeter length is multiplied against the W/m rating. If a room has 15m of wall but 3m of it is doorways, your active length is 12m. For heavily glazed rooms, consider trench heaters or the Add2Rad supplement if the perimeter is insufficient."
                        }
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore Further Documentation"
                    description="Access more independent testing data and output charts."
                    tiles={otherData}
                />

                <CTABanner
                    heading="Need help sizing a room?"
                    description="Send your floorplans and target flow temperatures to our engineering team. We provide a completely free, rapid room-by-room heat loss scheduling and sizing service."
                    primaryCTA="Request Free Design Service"
                    primaryCTALink="/specifiers/specification-support/design-service"
                    secondaryCTA="Speak to Spec Team"
                    secondaryCTALink="/about/contact"
                />
            </main>
        </>
    );
}
