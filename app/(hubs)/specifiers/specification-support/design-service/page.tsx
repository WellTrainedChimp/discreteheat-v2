import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Free M&E Design Service | ThermaSkirt',
    description: 'Complimentary room-by-room heat loss scheduling, marked-up DWG floorplans, and manifold design for mechanical engineers and architects.',
    alternates: {
        canonical: 'https://www.discreteheat.com/specifiers/specification-support/design-service/',
    }
};

const otherSupport = [
    { title: 'Specification Wording', description: 'Pre-written CAWS / Uniclass NBS clauses and tender criteria.', href: '/specifiers/specification-support/specification-wording' },
    { title: 'SHDF Documentation', description: 'PAS 2035 compliance packs and carbon reduction forecasts.', href: '/specifiers/specification-support/shdf-documentation' },
    { title: 'Framework Access', description: 'Sourcing through pre-qualified public sector procurement frameworks.', href: '/specifiers/specification-support/framework-access' },
];

export default function DesignServicePage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Engineering Support"
                    title="Free Room-by-Room"
                    titleHighlight="Heat Loss Design."
                    description="We act as a direct extension to your M&E and architectural teams. Rely on our in-house engineers to handle the complex thermal modelling, CAD layouts, and compliance documentation completely free of charge."
                    primaryCta={{ text: "Upload Your Plans", href: "/about/contact" }}
                    imageSrc="/assets/images/technical-design.jpg"
                    imageAlt="A mechanical engineer reviewing a CAD layout and thermal schedule"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-5xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">The Design Process</h2>
                            <p className="text-xl font-light text-dh-dark mb-6 leading-relaxed">
                                Specifying a new technology requires absolute confidence that it will perform as intended. Our technical team guarantees this by taking on the design liability for the emitter sizing.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                Send us your DWG or PDF construction drawings alongside your target flow temperatures (e.g., 45°C/40°C for an ASHP) and U-values. Using industry-standard software, our engineers generate a comprehensive technical pack detailing the precise linear meterage of ThermaSkirt required in every single room to satisfy the calculated heat losses and achieve your client\'s desired comfort temperatures.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">What You Receive</span>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                                <div className="p-8 bg-dh-grey-light rounded-2xl border border-dh-grey-light/50">
                                    <h3 className="text-2xl font-light text-dh-dark mb-4">Thermal Output Schedules</h3>
                                    <ul className="space-y-3 text-dh-grey text-sm list-disc pl-5">
                                        <li>Room-by-room design temperatures (e.g., 21°C Lounge, 18°C Bed)</li>
                                        <li>Calculated heat loss (W) per room</li>
                                        <li>Available active perimeter (m)</li>
                                        <li>Required output (W/m) vs Achieved output (W/m)</li>
                                        <li>Profile recommendation (e.g., BM2 vs BM3)</li>
                                        <li>Hydraulic flow rates and pressure drops per loop</li>
                                    </ul>
                                </div>
                                <div className="p-8 bg-dh-grey-light rounded-2xl border border-dh-grey-light/50">
                                    <h3 className="text-2xl font-light text-dh-dark mb-4">Marked-up CAD Layouts</h3>
                                    <ul className="space-y-3 text-dh-grey text-sm list-disc pl-5">
                                        <li>Scaled DWG/PDF returned with bespoke ThermaSkirt layers</li>
                                        <li>Active (heating) vs Dummy (unplumbed) skirting delineation</li>
                                        <li>Manifold locations and pipe routing suggestions</li>
                                        <li>Zone valve and thermostat placement recommendations</li>
                                        <li>Doorway threshold jump details</li>
                                    </ul>
                                </div>
                            </div>
                        </article>

                    </div>
                </section>

                <FAQText
                    faqs={[
                        {
                            question: "What format should I send the plans in?",
                            answer: "AutoCAD .DWG format is strongly preferred as it allows us to quickly insert our standard blocks and scale the perimeter accurately. However, we can work from high-quality dimensional PDFs."
                        },
                        {
                            question: "How long is the turnaround time?",
                            answer: "For a standard domestic property (3-4 beds), we typically return the completed thermal schedule and marked-up layout within 3-5 working days. For large commercial properties or multi-plot estates, our team will provide an estimated timeline upon receipt of the tender package."
                        }
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore Further Support"
                    description="Discover our free design services and documentation."
                    tiles={otherSupport}
                />

                <CTABanner
                    heading="Ready to optimize your design?"
                    description="Send your plans to our technical team today for a completely free, no-obligation thermal schedule and CAD layout."
                    primaryCTA="Submit Project Plans"
                    primaryCTALink="/about/contact"
                    secondaryCTA="Download Example Design Pack"
                    secondaryCTALink="/specifiers/specification-support/design-service"
                />
            </main>
        </>
    );
}
