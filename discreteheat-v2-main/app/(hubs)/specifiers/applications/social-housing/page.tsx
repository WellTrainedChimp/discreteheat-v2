import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Social Housing Retrofit Heating | Specifiers',
    description: 'PAS 2035 compliant heating for social housing. Eliminate major disruption during occupied retrofits while enabling efficient low-temperature heat pump operation.',
    alternates: {
        canonical: 'https://www.discreteheat.com/specifiers/applications/social-housing/',
    },
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=988cff79-37a3-45fa-9a3d-aef77c978702', width: 1200, height: 630, alt: 'Social Housing Retrofit Heating | Specifiers' }],
    },
};

const otherSectors = [
    { title: 'Healthcare', description: 'Infection control, anti-ligature, low surface temperature. NHS-validated.', href: '/specifiers/applications/healthcare' },
    { title: 'Residential New Build', description: 'Future Homes Standard compliant. Streamlined site programme.', href: '/specifiers/applications/new-build-residential' },
    { title: 'Education & Student Accommodation', description: 'Safe surface temperatures, anti-tamper, and space-efficient.', href: '/specifiers/applications/education-and-student-accommodation' },
    { title: 'Listed Buildings', description: 'Heritage-sensitive profile. Preserves architectural proportions.', href: '/specifiers/applications/listed-buildings' },
];

export default function SocialHousingPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Social Housing Retrofit"
                    title="Zero displacement."
                    titleHighlight="Maximum efficiency."
                    description="Upgrade to heat pumps without the severe disruption of lifting floors for underfloor heating or re-piping for significantly oversized, bulky radiators. A rapid, low-impact solution for SHDF programmes."
                    primaryCta={{ text: "Download Specifier Pack", href: "/specifiers/specification-support/design-service" }}
                    imageSrc="https://www.discreteheat.com/MediaHandler.ashx?id=988cff79-37a3-45fa-9a3d-aef77c978702"
                    imageAlt="ThermaSkirt BM2 profile installed cleanly in a social housing property"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-5xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Decarbonisation at Scale</h2>
                            <p className="text-xl font-light text-dh-dark mb-6 leading-relaxed">
                                ThermaSkirt allows local authorities and housing associations to transition their portfolios to low-temperature heat pumps rapidly, enabling occupied retrofits to be completed in one or two days.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                For SHDF (Social Housing Decarbonisation Fund) and PAS 2035 compliant retrofits, replacing old gas boilers with heat pumps often introduces a significant roadblock: heat emitters. Existing radiators are undersized for the 35–45°C flow temperatures required by heat pumps. Replacing them with massive Type 22 or Type 33 radiators steals valuable living space, and installing underfloor heating requires severe disruption, forcing tenants to relocate. ThermaSkirt provides an ideal middle ground.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Performance</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Unlocking Heat Pump CoP</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                When switching to lower flow temperatures, emitter surface area becomes vital. Because ThermaSkirt wraps around the perimeter of the room, it boasts incredible heat emitter area without projecting aggressively into the room.
                            </p>
                            <div className="p-6 bg-dh-grey-light rounded-2xl border border-dh-grey-light/50 my-8">
                                <h4 className="text-lg font-semibold text-dh-dark mb-2">Technical Note: Low Temperature Efficiency</h4>
                                <p className="text-dh-grey text-sm mb-4">
                                    At a dT20 (approx. 40°C flow), ThermaSkirt BM2 retains 48% of its rated output, compared to a conventional panel radiator dropping to 30%. This prevents the need for drastic oversized radiators and provides a measurable CoP uplift of 0.4-0.5. The comprehensive output tables and PAS 2035 guidance notes are available in our specifiers pack.
                                </p>
                                <a href="/specifiers/specification-support/design-service" className="text-dh-red font-semibold hover:underline text-sm">Download Specifier Pack &rarr;</a>
                            </div>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Compliance</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Combating Damp and Mould (Awaab&apos;s Law)</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                ThermaSkirt is an excellent intervention against condensation, damp, and mould. By projecting radiant heat from the lower perimeter upwards, it actively warms the walls at the skirting level—the precise location where cold bridging, condensation, and black mould tend to accumulate in older properties.
                            </p>
                        </article>

                    </div>
                </section>

                <FAQText
                    faqs={[
                        {
                            question: "Can it be installed while tenants are in situ?",
                            answer: "Yes. ThermaSkirt installation is rapid. In most properties, an entire room can be retrofitted in 1–2 hours without ripping up screed or flooring. This significantly reduces displacement costs and tenant disruption."
                        },
                        {
                            question: "Is it tough enough for social housing?",
                            answer: "Yes. ThermaSkirt is manufactured from durable, extruded aluminium (with a 6% thicker front panel than typical steel radiators). It sits flat against the wall, reducing the risk of being snagged, knocked off brackets, or damaged during day-to-day living."
                        }
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore Other Applications"
                    description="Discover how ThermaSkirt performs across diverse building types."
                    tiles={otherSectors}
                />

                <CTABanner
                    heading="Partnering on SHDF Programmes?"
                    description="DiscreteHeat works closely with housing associations and major contractors to provide bespoke design, flow temperature calculations, and procurement support."
                    primaryCTA="Speak to Spec Team"
                    primaryCTALink="/about/contact"
                    secondaryCTA="Download Specifier Pack"
                    secondaryCTALink="/specifiers/specification-support/design-service"
                />
            </main>
        </>
    );
}
