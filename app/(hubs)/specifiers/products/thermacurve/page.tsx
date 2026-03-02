import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'ThermaCurve Coving | Specifier Products',
    description: 'Electric infrared coving heating. An elegant, space-saving solution for environments where floor-level skirting installation is not feasible.',
    alternates: {
        canonical: 'https://www.discreteheat.com/specifiers/products/thermacurve/',
    }
};

const otherProducts = [
    { title: 'ThermaSkirt H₂O', description: 'Hydronic radiant skirting for boilers and heat pumps.', href: '/specifiers/products/thermaskirt-h2o' },
    { title: 'ThermaSkirt-e', description: 'Direct electric infrared heating. 100% point-of-use efficiency.', href: '/specifiers/products/thermaskirt-e' },
    { title: 'EasyClean LST', description: 'Anti-ligature, anti-tamper profile for NHS & secure environments.', href: '/specifiers/products/easyclean' },
    { title: 'Add2Rad', description: 'Retrofit drop-in to supplement undersized radiators for heat pumps.', href: '/specifiers/products/add2rad' },
];

export default function ThermaCurvePage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Ceiling-Level Radiant Heat"
                    title="Warmth from"
                    titleHighlight="above."
                    description="ThermaCurve is an electric radiant coving profile designed specifically for kitchens with continuous cabinet runs, bathrooms, and commercial spaces where altering the skirting board is not possible or desired."
                    primaryCta={{ text: "Download Specifier Pack", href: "/specifiers/specification-support/design-service" }}
                    imageSrc="/assets/images/product-thermacurve.jpg"
                    imageAlt="ThermaCurve installed at the intersection of a wall and ceiling, blending cleanly into the room decor."
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-5xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Overhead Infrared Efficiency</h2>
                            <p className="text-xl font-light text-dh-dark mb-6 leading-relaxed">
                                Using the same direct electric self-regulating element as ThermaSkirt-e, ThermaCurve provides highly responsive infrared warmth directed downward into the space.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                Heat radiating from the ceiling does not get blocked by furniture, beds, or kitchen islands, allowing unrestricted layout possibilities within the room. It eliminates the need for wall-mounted electric panel heaters completely.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Installation Flexibility</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">The Problem-Solver Profile</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                ThermaCurve is specifically specified when skirting heating is physically impossible—for example, when full-height glazing occupies most walls, when kitchens feature wrap-around cabinet plinths, or when heritage flooring cannot be disturbed to run first-fix cables to skirting height.
                            </p>
                            <div className="p-6 bg-dh-grey-light rounded-2xl border border-dh-grey-light/50 my-8">
                                <h4 className="text-lg font-semibold text-dh-dark mb-2">Technical Note: Infrared Dispersion</h4>
                                <p className="text-dh-grey text-sm mb-4">
                                    Unlike convection (hot air rising), infrared heat travels until it impacts a solid object (floors, furniture, occupants), warming the room evenly from top to bottom. It connects to a standard 230V fused spur—wiring and switching diagrams, along with load calculations, are fully documented in our specifier pack.
                                </p>
                                <a href="/specifiers/specification-support/design-service" className="text-dh-red font-semibold hover:underline text-sm">Download Specifier Pack &rarr;</a>
                            </div>
                        </article>

                    </div>
                </section>

                <FAQText
                    faqs={[
                        {
                            question: "Doesn't heat rise?",
                            answer: "Hot air rises (convection). ThermaCurve is an infrared radiant emitter. Radiant waves travel directly through the air until they strike a solid surface, warming objects and occupants directly rather than heating the air."
                        },
                        {
                            question: "Can it be painted?",
                            answer: "Yes, once appropriately primed, the aluminium extrusion can be painted to match the ceiling or walls."
                        }
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore Other Products"
                    description="View the rest of the ThermaSkirt specification range."
                    tiles={otherProducts}
                />

                <CTABanner
                    heading="Specifying ThermaCurve?"
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
