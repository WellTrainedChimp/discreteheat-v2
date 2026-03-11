import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'EasyClean LST Heating | Specifier Products',
    description: 'NHS-approved, anti-ligature low surface temperature heating profile. Extruded aluminium construction scaled for clinical, mental health, and secure environments.',
    alternates: {
        canonical: 'https://www.discreteheat.com/specifiers/products/easyclean/',
    },
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=9a7b40c8-0245-4d26-a04d-72304b92a02f', width: 1200, height: 630, alt: 'EasyClean LST Heating | Specifier Products' }],
    },
};

const otherProducts = [
    { title: 'ThermaSkirt H₂O', description: 'Hydronic radiant skirting for boilers and heat pumps.', href: '/specifiers/products/thermaskirt-h2o' },
    { title: 'ThermaSkirt-e', description: 'Direct electric infrared heating. 100% point-of-use efficiency.', href: '/specifiers/products/thermaskirt-e' },
    { title: 'ThermaCurve', description: 'Electric infrared coving installed at the ceiling junction.', href: '/specifiers/products/thermacurve' },
    { title: 'Add2Rad', description: 'Retrofit drop-in to supplement undersized radiators for heat pumps.', href: '/specifiers/products/add2rad' },
];

export default function EasyCleanLSTPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Clinical Specification"
                    title="Anti-ligature, anti-tamper,"
                    titleHighlight="infection control."
                    description="The EasyClean LST profile replaces exposed, grille-covered radiators with a smooth, continuous, easily cleanable surface. Validated by NHS Trusts across the country for use in high-risk environments."
                    primaryCta={{ text: "Download Specifier Pack", href: "/specifiers/specification-support/design-service" }}
                    imageSrc="https://www.discreteheat.com/MediaHandler.ashx?id=9a7b40c8-0245-4d26-a04d-72304b92a02f"
                    imageAlt="Close-up of the EasyClean flush heating profile sealed to the floor and wall"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-5xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">NHS Assessed & Validated</h2>
                            <p className="text-xl font-light text-dh-dark mb-6 leading-relaxed">
                                Tested against rigorous DHSS DN4 standards, EasyClean is the absolute gold standard for clinical emitter safety.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                When installed alongside our heavy-duty anti-ligature jointing system and a high-bond clinical pick-resistant mastic, the profile prevents the attachment of cords, conceals all plumbing/wiring completely from the room occupants, and eliminates the deep metal crevices that harbor MRSA and other hospital-acquired infections.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Hygienic Design</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Rapid Wipe-Down Efficiency</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                The flat, continuous surface allows estates teams to wipe the heating system down simultaneously with the hospital floors. Unlike oversized panel radiators, there is no need to dismount protective casing, blow out accumulated dust, or risk injury to maintenance personnel.
                            </p>
                            <div className="p-6 bg-dh-grey-light rounded-2xl border border-dh-grey-light/50 my-8">
                                <h4 className="text-lg font-semibold text-dh-dark mb-2">Technical Note: Low Surface Temperature Operations</h4>
                                <p className="text-dh-grey text-sm mb-4">
                                    EasyClean connects back to a centralized BMS manifold. Controlling the weather compensation at the source ensures the skirting never exceeds the 43°C LST threshold in patient areas without requiring complex flow-restrictor valves exposed locally on the ward. Complete compliance sheets, NBS clauses, and anti-tamper test methodologies are available in our specifier pack.
                                </p>
                                <a href="/specifiers/specification-support/design-service" className="text-dh-red font-semibold hover:underline text-sm">Download Specifier Pack &rarr;</a>
                            </div>
                        </article>
                    </div>
                </section>

                <FAQText
                    faqs={[
                        {
                            question: "Can patients remove the corner joints?",
                            answer: "No. The EasyClean system uses heavy-duty, through-bolted mechanical fixings on corners and joint lines, sealed flush with clinical mastic. It is designed to resist aggressive tampering."
                        },
                        {
                            question: "Is there an anti-microbial paint option?",
                            answer: "Yes. By special request for high-dependency or surgical environments, the aluminium extrusion can be powder-coated with a specialized silver-ion anti-microbial paint finish."
                        }
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore Other Products"
                    description="View the rest of the ThermaSkirt specification range."
                    tiles={otherProducts}
                />

                <CTABanner
                    heading="Specifying EasyClean for a Healthcare Project?"
                    description="Get comprehensive NBS clauses, tender wording, DWG/BIM files, and independent NHS reference data. Our specification team can assist with rapid room-by-room heat loss calculations."
                    primaryCTA="Download Specifier Pack"
                    primaryCTALink="/specifiers/specification-support/design-service"
                    secondaryCTA="Speak to Spec Team"
                    secondaryCTALink="/about/contact"
                />
            </main>
        </>
    );
}
