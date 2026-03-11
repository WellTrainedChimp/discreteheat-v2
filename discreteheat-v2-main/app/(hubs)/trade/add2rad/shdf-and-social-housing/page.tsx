import SubHubHero from '@/components/server/SubHubHero';
import CTABanner from '@/components/blocks/CTABanner';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';

export const metadata = {
    title: 'SHDF & Social Housing | DiscreteHeat Trade',
    description: 'Providing low-disruption, scalable heat pump retrofits for local authorities, housing associations, and SHDF-funded projects using Add2Rad.',
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=988cff79-37a3-45fa-9a3d-aef77c978702', width: 1200, height: 630, alt: 'SHDF & Social Housing | DiscreteHeat Trade' }],
    },
};

const internalLinks = [
    {
        title: "Quoting for Add2Rad",
        description: "Submit room dimensions via the portal for a fully quantified component estimate.",
        href: "/trade/add2rad/quoting-for-add2rad",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=c699edc3-f10e-40fc-89ba-c936d1a1f75d",
    },
    {
        title: "Social Housing Applications",
        description: "View case studies of whole-estate ThermaSkirt retrofits.",
        href: "/specifiers/applications/social-housing",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=988cff79-37a3-45fa-9a3d-aef77c978702",
    }
];

export default function SocialHousingAdd2RadPage() {
    return (
        <main className="min-h-screen bg-white">
            <SubHubHero
                title="SHDF & Social Housing"
                badge="Estate Decarbonisation"
                description="The Add2Rad system provides local authorities and housing associations with a viable, low-disruption path for mass heat pump deployment across tenanted housing stock."
                imageSrc="https://www.discreteheat.com/MediaHandler.ashx?id=988cff79-37a3-45fa-9a3d-aef77c978702"
            />

            <section className="py-24 px-6 lg:px-12 bg-white selection:bg-dh-red/20 selection:text-dh-red">
                <div className="max-w-5xl mx-auto">

                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-dh-dark mb-6">The Decarbonisation Challenge</h2>
                        <p className="text-lg text-dh-grey leading-relaxed">
                            Under the Social Housing Decarbonisation Fund (SHDF), councils are tasked with deploying Air Source Heat Pumps (ASHPs) rapidly. However, traditional retrofits require ripping out existing gas boilers, replacing 10mm microbore pipework with 22mm, moving tenants into temporary accommodation, and heavily redecorating. This disruption severely caps the rollout speed.
                        </p>
                    </div>

                    <div className="bg-dh-dark text-white rounded-2xl p-8 lg:p-12 mb-16 shadow-lg">
                        <h2 className="text-2xl font-bold mb-8">How Add2Rad Accelerates Rollout</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white/10 p-6 rounded-xl border border-white/10">
                                <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-dh-red flex items-center justify-center text-sm">1</span>
                                    Zero Tenant Decant
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Because Add2Rad uses the existing pipework drops and mounts directly to the wall without deep floor-chasing, installations can be completed while the tenant remains in the property within a single working day per unit.
                                </p>
                            </div>
                            <div className="bg-white/10 p-6 rounded-xl border border-white/10">
                                <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-dh-red flex items-center justify-center text-sm">2</span>
                                    Retains Microbore Pipe
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Adding enormous surface area via the ThermaSkirt enables the room to satisfy load at low flow temperatures without needing massive volume. The pump operates efficiently without blowing 10mm pipe limits.
                                </p>
                            </div>
                            <div className="bg-white/10 p-6 rounded-xl border border-white/10">
                                <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-dh-red flex items-center justify-center text-sm">3</span>
                                    Mitigates Mold & Damp
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Unlike standard convection radiators which leave cold corners, ThermaSkirt provides radiant heat across external walls, actively drying them out and preventing the black mold issues common in social housing.
                                </p>
                            </div>
                            <div className="bg-white/10 p-6 rounded-xl border border-white/10">
                                <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-dh-red flex items-center justify-center text-sm">4</span>
                                    Reduced Capital Expenditure
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Eliminating the cost of pipe replacement, plastering, redecorating, and tenant relocation makes Add2Rad significantly more cost-effective per property, stretching SHDF funding further.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-dh-grey-light border border-black/5 rounded-2xl p-8 lg:p-12 mb-16 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full border border-dh-red/20 bg-dh-red/5 text-dh-red font-semibold text-sm mb-6">Framework Compliance</span>
                        <h2 className="text-2xl font-bold text-dh-dark mb-4">A Proven Procurement Solution</h2>
                        <p className="text-dh-grey mb-8 max-w-2xl mx-auto">
                            DiscreteHeat works directly with Tier 1 contractors and consortiums running SHDF waves. We provide full CIBSE-compliant heat loss calculations to prove system viability pre-tender, eliminating the risk of under-sizing the emitter network.
                        </p>
                        <a href="/about/contact" className="inline-block bg-dh-dark text-white font-bold py-3.5 px-8 rounded-lg hover:bg-black transition-colors">
                            Request Specifier Pack
                        </a>
                    </div>

                </div>
            </section>

            <ExploreCategorySection
                id="related"
                heading="Resources & Applications"
                description="Explore social housing specifications and calculation tools."
                tiles={internalLinks}
            />

            <CTABanner
                heading="Partner With Us"
                description="If you are bidding for a mass retrofit project under SHDF, ECO4, or HUG, our technical team can provide the viability modelling required for your submission."
                primaryCTA="Contact National Accounts"
                primaryCTALink="/about/contact"
                secondaryCTA="Learn About Add2Rad"
                secondaryCTALink="/trade/add2rad/the-method"
            />
        </main>
    );
}
