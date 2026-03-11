import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Low Temperature Heating Performance | Technical Data | ThermaSkirt',
    description: 'Analyzing the physics of ThermaSkirt radiant skirting when operating at low flow temperatures alongside Air Source Heat Pumps (ASHPs).',
    alternates: {
        canonical: 'https://www.discreteheat.com/specifiers/technical-data/low-temperature-performance/',
    },
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=8cb0352d-d5ee-4223-aa23-58dbe93da37d', width: 1200, height: 630, alt: 'Low Temperature Heating Performance | Technical Data | ThermaSkirt' }],
    },
};

const otherData = [
    { title: 'Radiant Heat Science', description: 'Comparing radiant mean temperature against high-velocity convection.', href: '/specifiers/technical-data/radiant-heat-science' },
    { title: 'Water Treatment Protocol', description: 'System flushing and dosing requirements to BS 7593 for aluminium emitters.', href: '/specifiers/technical-data/water-treatment-protocol' },
    { title: 'Certifications', description: 'CE marks, BBA certificates, and NHS DHSS DN4 compliance statements.', href: '/specifiers/technical-data/certifications' },
];

export default function LowTempPerformancePage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Heat Pump Integration"
                    title="Built for low"
                    titleHighlight="flow temperatures."
                    description="Heat pumps are only efficient if the emitter circuit allows them to run cold. ThermaSkirt\'s expansive surface area and convective resistance unlocks the true CoP of modern Air Source Heat Pumps."
                    primaryCta={{ text: "Download Specifier Pack", href: "/specifiers/specification-support/design-service" }}
                    imageSrc="https://www.discreteheat.com/MediaHandler.ashx?id=8cb0352d-d5ee-4223-aa23-58dbe93da37d"
                    imageAlt="Thermal imaging graphic demonstrating uniform heat distribution at low flow temperatures"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-5xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">The CoP Relationship</h2>
                            <p className="text-xl font-light text-dh-dark mb-6 leading-relaxed">
                                A heat pump\&apos;s Coefficient of Performance (CoP) is a direct, linear inverse of its flow temperature. Drop the water temperature returning to the unit, and the efficiency skyrockets.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                However, dropping the flow temperature strips the thermal output from standard radiators. A Type 22 convector radiator designed to emit 1500W at 75°C will only emit around 450W at 45°C. To compensate, a radiator three times the size must be installed, resulting in massive, visually intrusive steel boxes ruining the room\&apos;s aesthetics. ThermaSkirt fundamentally solves this geometry problem.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Geometry & Surface Area</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Perimeter Radiance vs Point Convection</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Because ThermaSkirt wraps around the entire perimeter of the room, replacing the dead space previously occupied by standard timber skirting, it provides an objectively massive continuous heat emitter surface area compared to a single wall hung radiator.
                            </p>
                            <div className="p-6 bg-dh-grey-light rounded-2xl border border-dh-grey-light/50 my-8">
                                <h4 className="text-lg font-semibold text-dh-dark mb-2">Technical Note: The Convection Stall</h4>
                                <p className="text-dh-grey text-sm mb-4">
                                    Radiators rely on \&apos;stack effect\&apos; convection—drawing cold air in at the bottom, heating it, and pushing it out the top. At 40-45°C flow temperatures, the heat differential between the radiator and ambient room air is insufficient to drive a strong convection current. The output &quot;stalls&quot;. ThermaSkirt, being a radiant panel, does not rely on intense convection cells, retaining 48% of its output rating at 40°C compared to a radiator\&apos;s 30%. Download the complete performance vs flow-temp curves in our specifier pack.
                                </p>
                                <a href="/specifiers/specification-support/design-service" className="text-dh-red font-semibold hover:underline text-sm">Download Heat Pump Specifier Pack &rarr;</a>
                            </div>
                        </article>

                    </div>
                </section>

                <FAQText
                    faqs={[
                        {
                            question: "Can I run it alongside underfloor heating?",
                            answer: "Yes, perfectly. Because both are radiant emitters inherently designed for low flow temperatures (35-45C), they pair beautifully on the same un-blended manifold. Many developers specify UFH downstairs and ThermaSkirt upstairs to avoid pouring acoustic-compromising screed on upper floor joists."
                        },
                        {
                            question: "What flow temperature do you recommend?",
                            answer: "Our engineers typically schedule ASHP systems to target a maximum flow temperature of 45°C at deep winter design (-2 or -3°C outside). This guarantees a high seasonal CoP while keeping the required active perimeter length reasonable."
                        }
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore Further Documentation"
                    description="Access more independent testing data and output charts."
                    tiles={otherData}
                />

                <CTABanner
                    heading="Designing a low-flow system?"
                    description="Provide us with your target flow temperatures and building fabric details. Our engineers will schedule the required lengths to satisfy heat loss at your requested dT."
                    primaryCTA="Request Thermal Schedule"
                    primaryCTALink="/specifiers/specification-support/design-service"
                    secondaryCTA="Speak to Spec Team"
                    secondaryCTALink="/about/contact"
                />
            </main>
        </>
    );
}
