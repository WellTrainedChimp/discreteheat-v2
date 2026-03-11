import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Listed Building Heating Solutions | Specifiers',
    description: 'Heritage-sensitive skirting board heating for listed buildings and conservation projects. Preserves original proportions without invasive pipework channels.',
    alternates: {
        canonical: 'https://www.discreteheat.com/specifiers/applications/listed-buildings/',
    },
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=2a3a5535-6119-4b26-b66f-263eecc7eb5a', width: 1200, height: 630, alt: 'Listed Building Heating Solutions | Specifiers' }],
    },
};

const otherSectors = [
    { title: 'Healthcare', description: 'Infection control, anti-ligature, low surface temperature. NHS-validated.', href: '/specifiers/applications/healthcare' },
    { title: 'Social & Landlord Housing', description: 'PAS 2035 compliant. SHDF-ready. Occupied retrofit disruption reduction.', href: '/specifiers/applications/social-housing' },
    { title: 'Residential New Build', description: 'Future Homes Standard compliant. Streamlined site programme.', href: '/specifiers/applications/new-build-residential' },
    { title: 'Education & Student Accommodation', description: 'Safe surface temperatures, anti-tamper, and space-efficient.', href: '/specifiers/applications/education-and-student-accommodation' },
];

export default function ListedBuildingsPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Listed & Heritage"
                    title="Heritage-sensitive"
                    titleHighlight="warmth."
                    description="Securing listed building consent for heating upgrades is notoriously complex. ThermaSkirt provides modern, efficient heating while preserving architectural sightlines and avoiding invasive floor works."
                    primaryCta={{ text: "Speak to Spec Team", href: "/about/contact" }}
                    imageSrc="https://www.discreteheat.com/MediaHandler.ashx?id=2a3a5535-6119-4b26-b66f-263eecc7eb5a"
                    imageAlt="ThermaSkirt classic profile installed in a period property with decorative moulding"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-5xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Preserving Architectural Integrity</h2>
                            <p className="text-xl font-light text-dh-dark mb-6 leading-relaxed">
                                Underfloor heating is often the goal for heritage applications to preserve wall sightlines—but the reality of ripping up centuries-old floorboards or pouring new screed over historic timbers means it is frequently denied by Conservation Officers.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                Alternatively, mounting modern steel panel radiators against historic wood panelling or ornate plasterwork destroys the aesthetic proportion of the room. ThermaSkirt mimics the profile of traditional skirting boards (Classical or Victorian profiles are available) and integrates the radiant heating surface into a visually authentic trim.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Conservation Acceptance</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Non-Invasive Installation</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                ThermaSkirt is mounted exactly like standard skirting. Its minimal disruption footprint makes it significantly more likely to pass listed building consent. It runs entirely above-floor, routing its own 15mm flow and return pipes behind its fascia. This negates the requirement to channel into historic walls or drill significantly into joists.
                            </p>
                            <div className="p-6 bg-dh-grey-light rounded-2xl border border-dh-grey-light/50 my-8">
                                <h4 className="text-lg font-semibold text-dh-dark mb-2">Technical Note: Thermal Interventions</h4>
                                <p className="text-dh-grey text-sm mb-4">
                                    Historic solid-wall properties suffer from severe cold bridging at the floor/wall junction. ThermaSkirt projects radiant heat directly upwards over the coldest part of the fabric, combatting condensation and fabric deterioration. Conservation reports and technical heritage data sets are available in the specifiers pack.
                                </p>
                                <a href="/specifiers/specification-support/design-service" className="text-dh-red font-semibold hover:underline text-sm">Download Specifier Pack &rarr;</a>
                            </div>
                        </article>

                    </div>
                </section>

                <FAQText
                    faqs={[
                        {
                            question: "Can it match our existing period skirting profiles?",
                            answer: "ThermaSkirt offers several profiles. The 'Deco' and 'Classic' ranges are specifically designed to mimic Victorian and Edwardian toroidal curves. For extremely deep historic skirting (e.g., 300mm+), ThermaSkirt can be mounted as the bottom fascia layer with the original skirting board (or a bespoke replica) mounted above it as a top tier."
                        },
                        {
                            question: "Is it approved by English Heritage?",
                            answer: "While English Heritage does not 'whitelist' specific products, ThermaSkirt has been successfully specified and approved by local Conservation Officers in numerous Grade II and Grade II* listed buildings across the UK due to its low mechanical intervention."
                        }
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore Other Applications"
                    description="Discover how ThermaSkirt performs across diverse building types."
                    tiles={otherSectors}
                />

                <CTABanner
                    heading="Working on a conservation project?"
                    description="Our specification team can assist with producing technical justification reports for your Conservation Officer alongside room heat loss designs."
                    primaryCTA="Speak to Spec Team"
                    primaryCTALink="/about/contact"
                    secondaryCTA="Download Specifier Pack"
                    secondaryCTALink="/specifiers/specification-support/design-service"
                />
            </main>
        </>
    );
}
