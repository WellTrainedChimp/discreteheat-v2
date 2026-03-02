import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Kitchen Plinth Heating | Specifier Products',
    description: 'Hydronic radiant plinth heater. Mounts directly beneath kitchen cabinets, connecting into the wet central heating system to free up wall space for units.',
    alternates: {
        canonical: 'https://www.discreteheat.com/specifiers/products/kitchen-plinth/',
    }
};

const otherProducts = [
    { title: 'ThermaSkirt H₂O', description: 'Hydronic radiant skirting for boilers and heat pumps.', href: '/specifiers/products/thermaskirt-h2o' },
    { title: 'ThermaSkirt-e', description: 'Direct electric infrared heating. 100% point-of-use efficiency.', href: '/specifiers/products/thermaskirt-e' },
    { title: 'EasyClean LST', description: 'Anti-ligature, anti-tamper profile for NHS & secure environments.', href: '/specifiers/products/easyclean' },
    { title: 'Add2Rad', description: 'Retrofit drop-in to supplement undersized radiators for heat pumps.', href: '/specifiers/products/add2rad' },
];

export default function KitchenPlinthPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Space-Saving Integration"
                    title="Seamless kitchen"
                    titleHighlight="warmth."
                    description="Modern kitchen design prioritizes continuous cabinet runs and large islands, leaving zero space for wall radiators. The ThermaSkirt kitchen plinth profile transforms the dead space beneath cabinetry into an active radiant emitter."
                    primaryCta={{ text: "Download Specifier Pack", href: "/specifiers/specification-support/design-service" }}
                    imageSrc="/assets/images/product-kitchen.jpg"
                    imageAlt="ThermaSkirt kitchen plinth profile installed under modern matte-finish cabinetry"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-5xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Maximizing Storage Capacity</h2>
                            <p className="text-xl font-light text-dh-dark mb-6 leading-relaxed">
                                A single 600mm tall radiator consumes the exact footprint required for a base and wall cabinet combination. Stripping the radiator out allows designers to maximize storage without resorting to inefficient, dust-blowing fan convectors.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                The Kitchen Plinth profile is fundamentally identically engineered to our BM2 (114mm) and BM3 (170mm) hydronic profiles but is tailored to mount onto standard kitchen unit adjustable legs. It connects directly to the central heating manifold alongside the rest of the ground floor.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Silent & Draft-Free</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">The Problem with Fan Convectors</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Traditional 'plinth heaters' utilize motorized fans blowing over a small heat exchanger. They are notoriously noisy, they drag pet hair and dust across the kitchen floor and continuously blow it into the air, and their electric motors frequently fail.
                            </p>
                            <div className="p-6 bg-dh-grey-light rounded-2xl border border-dh-grey-light/50 my-8">
                                <h4 className="text-lg font-semibold text-dh-dark mb-2">Technical Note: Passive Radiant Efficiency</h4>
                                <p className="text-dh-grey text-sm mb-4">
                                    The ThermaSkirt plinth is completely passive. There are no moving parts, no fans, and zero electrical running costs. It radiates heat evenly across the stone or tile floor immediately in front of the cabinets. Full output tables, dimensional mounting details, and connection instructions are available in the specifiers pack.
                                </p>
                                <a href="/specifiers/specification-support/design-service" className="text-dh-red font-semibold hover:underline text-sm">Download Specifier Pack &rarr;</a>
                            </div>
                        </article>

                    </div>
                </section>

                <FAQText
                    faqs={[
                        {
                            question: "How is it installed onto cabinets?",
                            answer: "It uses a proprietary clip system that snaps directly onto standard circular cabinet legs, allowing for minor adjustments in height and depth to sit flush with adjacent fascias."
                        },
                        {
                            question: "Does it come in custom colours to match the kitchen?",
                            answer: "Yes. In addition to our standard stock colours (Cricket White, Light Oak, etc.), the extruded aluminium profile can be fully custom powder-coated to any RAL reference to perfectly match—or smartly contrast—the kitchen design."
                        }
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore Other Products"
                    description="View the rest of the ThermaSkirt specification range."
                    tiles={otherProducts}
                />

                <CTABanner
                    heading="Specifying Kitchen Profiles?"
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
