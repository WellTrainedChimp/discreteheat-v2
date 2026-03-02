import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'ThermaSkirt H2O | Specifier Products',
    description: 'Hydronic radiant skirting board heating. Highly responsive, low water content emitter designed for 35–75°C flow temperatures. BSRIA tested to BS EN 442-1.',
    alternates: {
        canonical: 'https://www.discreteheat.com/specifiers/products/thermaskirt-h2o/',
    }
};

const otherProducts = [
    { title: 'ThermaSkirt-e', description: 'Direct electric infrared heating. 100% point-of-use efficiency.', href: '/specifiers/products/thermaskirt-e' },
    { title: 'EasyClean LST', description: 'Anti-ligature, anti-tamper profile for NHS & secure environments.', href: '/specifiers/products/easyclean' },
    { title: 'ThermaCurve', description: 'Electric infrared coving installed at the ceiling junction.', href: '/specifiers/products/thermacurve' },
    { title: 'Add2Rad', description: 'Retrofit drop-in to supplement undersized radiators for heat pumps.', href: '/specifiers/products/add2rad' },
];

export default function ThermaSkirtH2OPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Water-Based Heating"
                    title="High-performance"
                    titleHighlight="hydronics."
                    description="The H₂O profile is our core radiant emitter. Operating with incredibly low water content, it provides rapid response times and exceptional output retention at low flow temperatures, perfect for PAS 2035 heat pump retrofits."
                    primaryCta={{ text: "Download Specifier Pack", href: "/specifiers/specification-support/design-service" }}
                    imageSrc="/assets/images/product-h2o.jpg"
                    imageAlt="ThermaSkirt H2O BM2 profile showing the internal pipework channels"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-5xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Engineered Aluminium Alloy</h2>
                            <p className="text-xl font-light text-dh-dark mb-6 leading-relaxed">
                                ThermaSkirt H₂O replaces the standard skirting board and the radiator with an extruded aluminium profile that mounts parallel 15mm flow and return pipes behind the primary radiant face.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                The BM2 model (114mm high x 20mm deep) and BM3 model (170mm high x 20mm deep) are drawn from an aerospace-grade aluminium alloy known for its remarkably high thermal conductivity. The front face is 6% thicker than standard steel radiators to prevent denting, while the rapid heat transfer creates a practically uniform surface temperature distribution.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Low Flow Viability</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">The dT20 Efficiency Paradox</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Standard steel convectors rapidly lose their ability to induce a convection cell as flow temperatures drop below 50°C. Their output falls off a cliff. Because ThermaSkirt is primarily a radiant emitter stretching around the room&apos;s perimeter, it does not rely on intense convection to heat the space.
                            </p>
                            <div className="p-6 bg-dh-grey-light rounded-2xl border border-dh-grey-light/50 my-8">
                                <h4 className="text-lg font-semibold text-dh-dark mb-2">Technical Note: BSRIA Validation</h4>
                                <p className="text-dh-grey text-sm mb-4">
                                    Independent BSRIA testing demonstrates that at a dT20 (approx 40°C flow), ThermaSkirt retains 48% of its rated EN 442-1 output, whereas a standard radiator drops to roughly 30%. This allows heat pumps to run at optimal high-CoP settings without leaving the room cold. Full comprehensive output tables per metre—from 35°C to 75°C—are available in our specifiers pack.
                                </p>
                                <a href="/specifiers/specification-support/design-service" className="text-dh-red font-semibold hover:underline text-sm">Download Specifier Pack &rarr;</a>
                            </div>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Water Treatment</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Low Water Content & Corrosion Prevention</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                ThermaSkirt holds approximately 0.5 liters of water per 5 meters—a fraction of a standard radiator. This drastically reduces the thermal mass the boiler or heat pump must heat up on each cycle, driving down running costs and start-up times. As it is an aluminium system, standard BS 7593 chemical dosing (such as Fernox F1 or Sentinel X100) must be applied to maintain the warranty.
                            </p>
                        </article>

                    </div>
                </section>

                <FAQText
                    faqs={[
                        {
                            question: "What is the maximum operating pressure?",
                            answer: "The pipework components and manifolds are designed to operate safely at standard UK domestic unvented pressures (typ. 1.5–3.0 bar). Peak test thresholds are significantly higher. See technical datasheets for exact destructive limits."
                        },
                        {
                            question: "How is it regulated?",
                            answer: "ThermaSkirt connects back to a standard central heating manifold. It can be regulated via room thermostats actuating manifold zone valves, or via concealed TRVs installed at the junction (hidden beneath our corner covers)."
                        }
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore Other Products"
                    description="View the rest of the ThermaSkirt specification range."
                    tiles={otherProducts}
                />

                <CTABanner
                    heading="Specifying H₂O for a Project?"
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
