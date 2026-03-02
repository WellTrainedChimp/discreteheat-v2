import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Environmental Data & Recycled Content | ThermaSkirt',
    description: 'Technical environmental data showcasing ThermaSkirt\'s use of recycled aluminium, embodied carbon estimates, and lifecycle sustainability.',
    alternates: {
        canonical: 'https://www.discreteheat.com/specifiers/technical-data/environmental-data/',
    }
};

const otherData = [
    { title: 'PAS 2035 & 2030', description: 'Compliance guidance for whole-house retrofit and SHDF funding.', href: '/specifiers/technical-data/pas-2035-pas-2030' },
    { title: 'Future Homes Standard', description: 'Meeting the 2025 carbon reduction targets with low-flow emitters.', href: '/specifiers/technical-data/future-homes-standard' },
    { title: 'Part L Compliance', description: 'Document L SAP calculations and system performance data.', href: '/specifiers/technical-data/part-l-compliance' },
];

export default function EnvironmentalDataPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Sustainability & ESG"
                    title="Engineered for the"
                    titleHighlight="circular economy."
                    description="Decarbonising heating is not just about operational carbon (running costs). The embodied carbon of manufacturing massive oversized radiators is severe. ThermaSkirt provides a deeply sustainable hardware alternative."
                    primaryCta={{ text: "Download Specifier Pack", href: "/specifiers/specification-support/design-service" }}
                    imageSrc="/assets/images/technical-environmental.jpg"
                    imageAlt="Close up view of the recycled aluminium extrusion process for a ThermaSkirt profile"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-5xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Embodied Carbon Reduction</h2>
                            <p className="text-xl font-light text-dh-dark mb-6 leading-relaxed">
                                Oversized Type 33 steel panel radiators required to satisfy heat pump loads carry immense embodied carbon debt through sheer raw material volume and global shipping logistics.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                By contrast, ThermaSkirt drastically reduces the raw mass of material required to satisfy the room\'s thermal output. Because the system utilizes the existing skirting board footprint and removes standard MDF or timber skirting entirely, the consolidated material usage yields a significant net-reduction in the overall Embodied Carbon of the build phase.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Material Provenance</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">75% Recycled Aluminium Alloy</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                The BM2 and BM3 hydronic extrusions and the primary e-series profiles are drawn from an aerospace-grade aluminium alloy containing approximately 75% recycled scrap metal content.
                            </p>
                            <div className="p-6 bg-dh-grey-light rounded-2xl border border-dh-grey-light/50 my-8">
                                <h4 className="text-lg font-semibold text-dh-dark mb-2">Technical Note: 100% Recyclable End-of-Life</h4>
                                <p className="text-dh-grey text-sm mb-4">
                                    Aluminium represents the ultimate closed-loop material. Recycling aluminium uses only 5% of the energy required to smelt primary metal from bauxite ore. At the end of a building\'s 40-50 year lifecycle, the ThermaSkirt profiles can simply be unsnapped, melted down, and re-extruded endlessly without any loss of inherent material quality. Detailed ESG and supply-chain providence data are available in the specifiers pack.
                                </p>
                                <a href="/specifiers/specification-support/design-service" className="text-dh-red font-semibold hover:underline text-sm">Download ESG Specifier Data &rarr;</a>
                            </div>
                        </article>

                    </div>
                </section>

                <FAQText
                    faqs={[
                        {
                            question: "Is ThermaSkirt manufactured in the UK?",
                            answer: "Yes, our primary fabrication, powder coating, and assembly takes place entirely at our dedicated manufacturing facility in Greater Manchester, drastically reducing the \'transport carbon\' of shipping steel radiators globally."
                        },
                        {
                            question: "How does it compare to MDF skirting boards?",
                            answer: "MDF skirting is practically impossible to recycle at end-of-life due to the glues and resins involved, usually ending up in landfill. ThermaSkirt (aluminium) serves a dual purpose and is infinitely recyclable."
                        }
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore Further Documentation"
                    description="Access more independent testing data and output charts."
                    tiles={otherData}
                />

                <CTABanner
                    heading="Auditing a BREEAM or LEED project?"
                    description="Detailed estimates of recycled content, local sourcing, and operational energy savings are critical to securing high sustainability certification ratings. Speak to our team for supporting data."
                    primaryCTA="Request Environmental Data"
                    primaryCTALink="/specifiers/specification-support/design-service"
                    secondaryCTA="Speak to Spec Team"
                    secondaryCTALink="/about/contact"
                />
            </main>
        </>
    );
}
