import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Add2Rad Supplemental Heating | Specifier Products',
    description: 'Supplemental skirting heating to boost undersized radiators. An elegant retrofit solution for transitioning homes to low-temperature heat pumps without ripping out existing systems.',
    alternates: {
        canonical: 'https://www.discreteheat.com/specifiers/products/add2rad/',
    }
};

const otherProducts = [
    { title: 'ThermaSkirt H₂O', description: 'Hydronic radiant skirting for boilers and heat pumps.', href: '/specifiers/products/thermaskirt-h2o' },
    { title: 'ThermaSkirt-e', description: 'Direct electric infrared heating. 100% point-of-use efficiency.', href: '/specifiers/products/thermaskirt-e' },
    { title: 'EasyClean LST', description: 'Anti-ligature, anti-tamper profile for NHS & secure environments.', href: '/specifiers/products/easyclean' },
    { title: 'Kitchen Plinth', description: 'Hydronic 115mm profile for beneath kitchen units.', href: '/specifiers/products/kitchen-plinth' },
];

export default function Add2RadPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Heat Pump Retrofit Add-On"
                    title="Supplementary"
                    titleHighlight="low-flow boost."
                    description="When retrofitting a heat pump, replacing every radiator with massive Type 22 or Type 33s is disruptive and consumes floor space. Add2Rad allows you to retain the existing radiator and supplement the lost heat output directly from the skirting."
                    primaryCta={{ text: "Download Specifier Pack", href: "/specifiers/specification-support/design-service" }}
                    imageSrc="/assets/images/product-add2rad.jpg"
                    imageAlt="ThermaSkirt Add2Rad plumbed in series directly from the tails of an existing panel radiator"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-5xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Solving the Retrofit Area Problem</h2>
                            <p className="text-xl font-light text-dh-dark mb-6 leading-relaxed">
                                Moving an older property from a 70°C gas boiler to a 45°C air source heat pump requires significantly more emitter surface area to achieve the same thermal performance.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                Often, there simply isn&apos;t wall space available to double the size of the existing radiators, and dropping the flow temperature without compensating for area will lead to cold rooms and non-compliance with PAS 2035. The Add2Rad system sidesteps this by turning the room&apos;s existing skirting board perimeter into active heating area.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Series Connection</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Direct Tie-In Logistics</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Add2Rad uses a bespoke flow-diverter manifold. The existing flow and return tails are disconnected from the radiator valve, routed into the ThermaSkirt run around the room, and then loop back into the radiator.
                            </p>
                            <div className="p-6 bg-dh-grey-light rounded-2xl border border-dh-grey-light/50 my-8">
                                <h4 className="text-lg font-semibold text-dh-dark mb-2">Technical Note: Flow Restriction & Balancing</h4>
                                <p className="text-dh-grey text-sm mb-4">
                                    The Add2Rad manifold is meticulously engineered so that the combined resistance of the skirting loop and the existing radiator does not upset the index circuit balancing of the home. It guarantees full heat delivery across both emitters simultaneously. Complete connection schematics and hydraulic resistance data are available in the specifiers pack.
                                </p>
                                <a href="/specifiers/specification-support/design-service" className="text-dh-red font-semibold hover:underline text-sm">Download Specifier Pack &rarr;</a>
                            </div>
                        </article>

                    </div>
                </section>

                <FAQText
                    faqs={[
                        {
                            question: "Does it require ripping up the floors?",
                            answer: "No. The most significant advantage of Add2Rad is that it 'borrows' the existing pipework already serving that room's radiator. You simply break into the tails directly above the floor, vastly accelerating retrofit programs like SHDF."
                        },
                        {
                            question: "Does it use the same TRV?",
                            answer: "Yes, the existing thermostatic radiator valve is retained. When it opens, water flows sequentially through both the skirting and the radiator."
                        }
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore Other Products"
                    description="View the rest of the ThermaSkirt specification range."
                    tiles={otherProducts}
                />

                <CTABanner
                    heading="Retrofitting Social Housing or Portfolios?"
                    description="Add2Rad is the zero-disruption solution for heat pump readiness. Get comprehensive NBS clauses, tender wording, and DWG/BIM files."
                    primaryCTA="Download Specifier Pack"
                    primaryCTALink="/specifiers/specification-support/design-service"
                    secondaryCTA="Speak to Spec Team"
                    secondaryCTALink="/about/contact"
                />
            </main>
        </>
    );
}
