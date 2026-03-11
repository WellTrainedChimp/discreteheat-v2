import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Science of Radiant Heat vs Convection | ThermaSkirt',
    description: 'Technical comparison between radiant heat transfer and convective air movement in domestic and commercial heating environments.',
    alternates: {
        canonical: 'https://www.discreteheat.com/specifiers/technical-data/radiant-heat-science/',
    },
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=32e0462c-c8f0-4f1c-9904-7127a20b3bf1', width: 1200, height: 630, alt: 'Science of Radiant Heat vs Convection | ThermaSkirt' }],
    },
};

const otherData = [
    { title: 'Low Temperature Performance', description: 'Analysis of CoP advantages with heat pumps.', href: '/specifiers/technical-data/low-temperature-performance' },
    { title: 'Water Treatment Protocol', description: 'System flushing and dosing requirements to BS 7593 for aluminium emitters.', href: '/specifiers/technical-data/water-treatment-protocol' },
    { title: 'Certifications', description: 'CE marks, BBA certificates, and NHS DHSS DN4 compliance statements.', href: '/specifiers/technical-data/certifications' },
];

export default function RadiantHeatSciencePage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Building Physics"
                    title="Radiant comfort vs"
                    titleHighlight="convective airflow."
                    description="Understanding the fundamental difference between heating the solid mass of a room (radiant) versus heating the air inside it (convection) is critical to specifying modern, efficient emitter systems."
                    primaryCta={{ text: "Download Specifier Pack", href: "/specifiers/specification-support/design-service" }}
                    imageSrc="https://www.discreteheat.com/MediaHandler.ashx?id=32e0462c-c8f0-4f1c-9904-7127a20b3bf1"
                    imageAlt="Abstract rendering of infrared thermal waves propagating from a low-level profile through a room"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-5xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">The Illusion of Air Temperature</h2>
                            <p className="text-xl font-light text-dh-dark mb-6 leading-relaxed">
                                Standard steel \&apos;radiators\&apos; are misnamed. They are primarily convectors. They drag cold air off the floor, heat it between their internal fins, and push it up to the ceiling resulting in highly stratified temperature layers.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                Human thermal comfort is not purely dictated by air temperature, but rather by the \&apos;Mean Radiant Temperature\&apos; (MRT) of the surrounding solid surfaces. If the walls and floors are cold, you will physically feel cold even if a radiator is blast-heating the air above your head to 24°C. ThermaSkirt operates conversely. By projecting infrared radiant heat across the low-level perimeter footprint of the room, it directly warms the floor, walls, and occupants.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Indoor Air Quality (IAQ)</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Eliminating Dust Circulation & Staining</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Forceful convection currents created by traditional radiators continuously drag pet dander, dust mites, and airborne particulates off the floor, baking them against the hot steel, and distributing them into the breathing zone.
                            </p>
                            <div className="p-6 bg-dh-grey-light rounded-2xl border border-dh-grey-light/50 my-8">
                                <h4 className="text-lg font-semibold text-dh-dark mb-2">Technical Note: Thermal Tracking</h4>
                                <p className="text-dh-grey text-sm mb-4">
                                    The dark soot marks often seen above conventional radiators are called \&apos;thermal tracking\&apos; (or ghosting)—caused by high-velocity hot air slamming baked dust against the colder wall surface above. Because ThermaSkirt is predominantly radiant, there are no aggressive convection currents to aerosolize dust, creating a significantly healthier environment for allergy and asthma sufferers. Full IAQ comparisons are available in the specifiers pack.
                                </p>
                                <a href="/specifiers/specification-support/design-service" className="text-dh-red font-semibold hover:underline text-sm">Download Indoor Air Quality Data &rarr;</a>
                            </div>
                        </article>

                    </div>
                </section>

                <FAQText
                    faqs={[
                        {
                            question: "Does it block cold drafts from windows?",
                            answer: "Yes. In older properties, cold air cascading down from poorly glazed windows creates uncomfortable floor drafts. By providing a continuous veil of heat around the perimeter walls beneath those windows, ThermaSkirt actively neutralizes these cold downdrafts."
                        },
                        {
                            question: "Isn't underfloor heating also radiant?",
                            answer: "Yes, underfloor heating (UFH) is the other primary radiant emitter. However, ThermaSkirt provides similarly uniform radiant footprints without the thermal lag associated with heating a massive concrete screed slab. It responds to thermostat demands in minutes, not hours."
                        }
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore Further Documentation"
                    description="Access more independent testing data and output charts."
                    tiles={otherData}
                />

                <CTABanner
                    heading="Prioritising thermal comfort in your design?"
                    description="Get comprehensive NBS clauses, tender wording, DWG/BIM files, and independent test data on radiant fraction improvements."
                    primaryCTA="Download Specifier Pack"
                    primaryCTALink="/specifiers/specification-support/design-service"
                    secondaryCTA="Speak to Spec Team"
                    secondaryCTALink="/about/contact"
                />
            </main>
        </>
    );
}
