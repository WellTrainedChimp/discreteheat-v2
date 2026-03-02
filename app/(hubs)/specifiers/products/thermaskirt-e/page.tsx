import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'ThermaSkirt-e | Electric Specifier Products',
    description: 'Direct electric radiant skirting board heating. 100% efficient at point of use. Self-regulating element. Ideal for solar PV and off-gas-grid projects.',
    alternates: {
        canonical: 'https://www.discreteheat.com/specifiers/products/thermaskirt-e/',
    }
};

const otherProducts = [
    { title: 'ThermaSkirt H₂O', description: 'Hydronic radiant skirting for boilers and heat pumps.', href: '/specifiers/products/thermaskirt-h2o' },
    { title: 'EasyClean LST', description: 'Anti-ligature, anti-tamper profile for NHS & secure environments.', href: '/specifiers/products/easyclean' },
    { title: 'ThermaCurve', description: 'Electric infrared coving installed at the ceiling junction.', href: '/specifiers/products/thermacurve' },
    { title: 'Kitchen Plinth', description: 'Hydronic 115mm profile for beneath kitchen units.', href: '/specifiers/products/kitchen-plinth' },
];

export default function ThermaSkirtEPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Direct Electric Heating"
                    title="Intelligent,"
                    titleHighlight="self-regulating electric."
                    description="ThermaSkirt-e utilizes a custom-engineered self-regulating heating cable sealed within the aerospace-grade aluminium extrusion. Zero pipework, zero transformers, and 100% efficiency at the point of use."
                    primaryCta={{ text: "Download Specifier Pack", href: "/specifiers/specification-support/design-service" }}
                    imageSrc="/assets/images/product-e.jpg"
                    imageAlt="ThermaSkirt-e showing the electrical element channel"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-5xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Decentralized Electric Heating</h2>
                            <p className="text-xl font-light text-dh-dark mb-6 leading-relaxed">
                                As the UK grid decarbonizes, direct electric heating paired with rooftop Solar PV and smart time-of-use tariffs is becoming highly viable for apartments, garden rooms, and off-gas retrofits.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                Traditional electric panel heaters and night storage units are bulky, visually intrusive, and often rely entirely on creating harsh convection drafts. ThermaSkirt-e converts electrical energy directly into radiant warmth around the entire perimeter of the room, eliminating cold spots and freeing up the walls entirely.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Safety & Overheat Protection</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Self-Regulating PTC Technology</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                ThermaSkirt-e employs an advanced Positive Temperature Coefficient (PTC) heating element. If furniture is placed against the skirting or a heavy curtain drapes over it, that specific section of the cable naturally increases resistance as it heats up, mechanically restricting current draw and preventing dangerously high localized surface temperatures.
                            </p>
                            <div className="p-6 bg-dh-grey-light rounded-2xl border border-dh-grey-light/50 my-8">
                                <h4 className="text-lg font-semibold text-dh-dark mb-2">Technical Note: Electrical Wiring & Zoning</h4>
                                <p className="text-dh-grey text-sm mb-4">
                                    The system operates at 230V mains voltage with no need for step-down transformers. Up to 15 linear meters can currently be run on a single 13A fused spur, controlled via any standard smart thermostat (e.g., Heatmiser, Hive) equipped with a floor-sensor or air-sensor logic. Comprehensive electrical load calculations and wiring diagrams are provided in the specifier pack.
                                </p>
                                <a href="/specifiers/specification-support/design-service" className="text-dh-red font-semibold hover:underline text-sm">Download Specifier Pack &rarr;</a>
                            </div>
                        </article>

                    </div>
                </section>

                <FAQText
                    faqs={[
                        {
                            question: "What is the output per metre?",
                            answer: "ThermaSkirt-e is rated dynamically, but typically operates around 120-140 W/m depending on ambient temperature due to its self-regulating nature. Always cross-reference the room's total linear meterage against the heat loss calculation."
                        },
                        {
                            question: "Does it comply with Lot 20?",
                            answer: "Yes, when paired with an EcoDesign Lot 20 compliant thermostat featuring 24/7 programming, open window detection, and adaptive start controls."
                        }
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore Other Products"
                    description="View the rest of the ThermaSkirt specification range."
                    tiles={otherProducts}
                />

                <CTABanner
                    heading="Specifying Electric for a Project?"
                    description="Get comprehensive NBS clauses, tender wording, DWG/BIM files, and independent test data. Our specification team can assist with rapid room-by-room heat loss calculations."
                    primaryCTA="Download Specifier Pack"
                    primaryCTALink="/specifiers/specification-support/design-service"
                    secondaryCTA="Speak to Spec Team"
                    secondaryCTALink="/about/contact"
                />
            </main>
        </>
    );
}
