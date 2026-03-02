import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Healthcare & Clinical Heating | Specifiers',
    description: 'Anti-ligature, low surface temperature heating for mental health, NHS wards, and clinical spaces. EasyClean validated by NHS.',
    alternates: {
        canonical: 'https://www.discreteheat.com/specifiers/applications/healthcare/',
    }
};

const otherSectors = [
    { title: 'Social & Landlord Housing', description: 'PAS 2035 compliant. SHDF-ready. Occupied retrofit disruption reduction.', href: '/specifiers/applications/social-housing' },
    { title: 'Residential New Build', description: 'Future Homes Standard compliant. Streamlined site programme.', href: '/specifiers/applications/new-build-residential' },
    { title: 'Education & Student Accommodation', description: 'Safe surface temperatures, anti-tamper, and space-efficient.', href: '/specifiers/applications/education-and-student-accommodation' },
    { title: 'Listed Buildings', description: 'Heritage-sensitive profile. Preserves architectural proportions.', href: '/specifiers/applications/listed-buildings' },
];

export default function HealthcarePage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Healthcare Specification"
                    title="Anti-ligature, robust,"
                    titleHighlight="NHS-approved."
                    description="The EasyClean LST profile provides safe, low surface temperature radiant heat designed specifically for mental health wards, care homes, and clinical environments requiring rigorous infection control."
                    primaryCta={{ text: "Download Specifier Pack", href: "/specifiers/specification-support/design-service" }}
                    imageSrc="/assets/images/specifier-healthcare.jpg"
                    imageAlt="Clean, secure hospital corridor demonstrating the flush EasyClean LST heating profile"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-5xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Clinical Heating Standards</h2>
                            <p className="text-xl font-light text-dh-dark mb-6 leading-relaxed">
                                ThermaSkirt EasyClean LST provides a fully sealed, anti-ligature radiant heating solution that eliminates the ligature risks and infection control challenges inherent in traditional LST radiators and ceiling radiant panels.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                In mental health and secure environments, traditional heating emitters present significant hazards. Standard panel radiators can be weaponised, and LST covers create cavities where contraband can be hidden or dust and bacteria accumulate. Our EasyClean system is a continuous extruded aluminium profile completely sealed to the wall and floor with a permanent, pick-resistant mastic, meeting NHS Estates guidelines.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Infection Control</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Zero Dust Traps</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                The EasyClean profile features no top grilles or open airways. By acting as a radiant emitter rather than a convector, it doesn't drag contaminated air off the floor and distribute it into the breathing zone—crucial for preventing Hospital Acquired Infections (HAIs).
                            </p>
                            <div className="p-6 bg-dh-grey-light rounded-2xl border border-dh-grey-light/50 my-8">
                                <h4 className="text-lg font-semibold text-dh-dark mb-2">Technical Note: BSRIA Validation</h4>
                                <p className="text-dh-grey text-sm mb-4">
                                    BSRIA test results confirm near-identical room warm-up profiles compared to traditional radiators, but with significantly lower air movement velocities. The full Energy House 2.0 report and BSRIA methodologies are available in our specifiers pack.
                                </p>
                                <a href="/specifiers/specification-support/design-service" className="text-dh-red font-semibold hover:underline text-sm">Download Specifier Pack &rarr;</a>
                            </div>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Safety</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Low Surface Temperature (LST) Guaranteed</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Depending on the required clinical standards, ThermaSkirt can be configured to operate with a maximum surface temperature of 43°C (NHS Standard DHSS DN4). It is highly responsive and fully compatible with modern Building Management Systems (BMS), ensuring precise thermal control.
                            </p>
                        </article>

                    </div>
                </section>

                <FAQText
                    faqs={[
                        {
                            question: "Is the system genuinely anti-ligature?",
                            answer: "Yes. The EasyClean LST profile has no fixings accessible to the patient, no gap between the wall and the emitter, and a continuous profile contour that prevents the attachment of any ligature. It is sealed with a robust, pick-proof clinical mastic."
                        },
                        {
                            question: "How is it cleaned?",
                            answer: "Because it lacks grilles and fins, the entire face can be wiped down instantly using standard clinical cleaning protocols. There is no requirement to remove a casing or vacuum internal components, saving thousands of hours in ward maintenance."
                        }
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore Other Applications"
                    description="Discover how ThermaSkirt meets strict specification criteria across other demanding sectors."
                    tiles={otherSectors}
                />

                <CTABanner
                    heading="Ready to specify ThermaSkirt EasyClean?"
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
