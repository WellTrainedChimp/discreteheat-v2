import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Education & Student Accommodation Heating | Specifiers',
    description: 'Safe surface temperatures, anti-tamper, and space-efficient heating for schools, classrooms, and student accommodation blocks.',
    alternates: {
        canonical: 'https://www.discreteheat.com/specifiers/applications/education-and-student-accommodation/',
    }
};

const otherSectors = [
    { title: 'Healthcare', description: 'Infection control, anti-ligature, low surface temperature. NHS-validated.', href: '/specifiers/applications/healthcare' },
    { title: 'Social & Landlord Housing', description: 'PAS 2035 compliant. SHDF-ready. Occupied retrofit disruption reduction.', href: '/specifiers/applications/social-housing' },
    { title: 'Residential New Build', description: 'Future Homes Standard compliant. Streamlined site programme.', href: '/specifiers/applications/new-build-residential' },
    { title: 'Listed Buildings', description: 'Heritage-sensitive profile. Preserves architectural proportions.', href: '/specifiers/applications/listed-buildings' },
];

export default function EducationStudentAccomPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Education & Accomodation"
                    title="Safe, robust, and"
                    titleHighlight="anti-tamper."
                    description="Designed for high-traffic environments. Schools require safe, LST heating that prevents impact injuries. PBSA (Student Accommodation) requires robust, anti-tamper systems that maximise compact footprints."
                    primaryCta={{ text: "Download Specifier Pack", href: "/specifiers/specification-support/design-service" }}
                    imageSrc="/assets/images/specifier-education.jpg"
                    imageAlt="ThermaSkirt installed in a modern university student accommodation bedroom"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-5xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Purpose-Built Safety</h2>
                            <p className="text-xl font-light text-dh-dark mb-6 leading-relaxed">
                                In schools, classrooms, and PBSA (Purpose-Built Student Accommodation), mechanical robustness and safety compliance are the leading specification criteria.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                Traditional panel radiators require bulky, costly Low Surface Temperature (LST) covers to prevent burns across primary education facilities. These covers become severe dirt traps and consume extensive amounts of circulation space. Student bedrooms in particular are highly space-constrained, where every millimeter of floor area defines the rental viability.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">RoSPA Data & Impact Safety</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Eliminating Radiator Edges</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                A critical but often overlooked danger of traditional radiators in educational environments is impact injuries. According to the Royal Society for the Prevention of Accidents (RoSPA), 86–87% of radiator-related accidents in the UK are impact injuries caused by falling against sharp metal edges, not thermal burns.
                            </p>
                            <div className="p-6 bg-dh-grey-light rounded-2xl border border-dh-grey-light/50 my-8">
                                <h4 className="text-lg font-semibold text-dh-dark mb-2">Technical Note: Continuous Safe Profile</h4>
                                <p className="text-dh-grey text-sm mb-4">
                                    ThermaSkirt entirely eliminates exposed corners, valves, and hard vertical edges. It sits flush to the wall exactly like standard skirting. Combined with mechanical flow temperature reduction, it operates safely as a low surface temperature emitter. Full safety documentation and risk assessments are available in the specifiers pack.
                                </p>
                                <a href="/specifiers/specification-support/design-service" className="text-dh-red font-semibold hover:underline text-sm">Download Specifier Pack &rarr;</a>
                            </div>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">PBSA (Student Accommodation)</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Anti-Tamper & High-Density Space Recovery</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                In student accommodation, TRVs and exposed pipework are constantly at risk of being kicked, stood on, or tampered with, causing water damage. The ThermaSkirt profile fully conceals both the pipework routing and the TRV connections. Because it only projects 20mm from the wall, designers can recover 0.5–1m² of space per bedroom—often sufficient to upgrade a single bed to a 3/4 or double bed.
                            </p>
                        </article>

                    </div>
                </section>

                <FAQText
                    faqs={[
                        {
                            question: "Are the TRVs accessible to students?",
                            answer: "No. ThermaSkirt can be fitted with concealed valves, or configured to be controlled entirely via a central BMS (Building Management System) or smart networked thermostat in the corridor."
                        },
                        {
                            question: "How does it hold up to heavy impacts?",
                            answer: "Exceptionally well. Our EasyClean and BM3 profiles are extruded from aerospace-grade aluminium, backed by robust hidden mounting brackets every 300mm. It is incredibly impact-resistant compared to a pressed steel radiator panel."
                        }
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore Other Applications"
                    description="Discover how ThermaSkirt performs across diverse building types."
                    tiles={otherSectors}
                />

                <CTABanner
                    heading="Designing a school or PBSA block?"
                    description="Get comprehensive NBS clauses, thermal modeling assistance, and layout configurations from our in-house engineering team."
                    primaryCTA="Speak to Spec Team"
                    primaryCTALink="/about/contact"
                    secondaryCTA="Download Specifier Pack"
                    secondaryCTALink="/specifiers/specification-support/design-service"
                />
            </main>
        </>
    );
}
