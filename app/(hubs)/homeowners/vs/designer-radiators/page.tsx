import SubHubHero from '@/components/server/SubHubHero';
import CTABanner from '@/components/blocks/CTABanner';
import TestimonialStrip from '@/components/blocks/TestimonialStrip';
import ComparisonTable from '@/components/server/ComparisonTable';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'ThermaSkirt vs Designer Radiators | Skirting Board Heating Comparison',
    description: 'Compare ThermaSkirt with designer radiators. Both offer premium aesthetics, but ThermaSkirt frees your walls entirely while delivering better thermal performance at low temperatures.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/vs/designer-radiators/',
    }
};

export default function VsDesignerRadiatorsPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="System Comparison"
                    title="Premium aesthetics,"
                    titleHighlight="zero wall sacrifice."
                    description="Designer radiators are chosen for their visual impact — they turn heating into a style statement. But they still consume wall space, still rely on convection, and still struggle with heat pumps. ThermaSkirt offers an invisible alternative that performs better where it matters."
                    primaryCta={{ text: "Get a System Quote", href: "/homeowners/get-a-quote" }}
                    imageSrc="/assets/images/homeowner-radiator-vs.jpg"
                    imageAlt="A modern interior showing clean walls with ThermaSkirt installed at skirting level"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">ThermaSkirt vs Designer Radiators</h2>
                            <p className="text-xl font-light text-dh-dark mb-12 leading-relaxed">
                                Designer radiators reimagine the traditional panel radiator as a visual feature — vertical columns, mirror finishes, sculptural forms. They are undeniably attractive. But they share the same fundamental limitations as standard radiators: they occupy wall space, depend on convection, and struggle at low flow temperatures.
                            </p>

                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Aesthetics vs Invisibility</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                A designer radiator makes a statement — it wants to be seen. ThermaSkirt takes the opposite approach: it wants to disappear. By replacing the skirting board itself, ThermaSkirt removes heating from your walls entirely, giving you complete freedom to hang art, place furniture, or install floor-to-ceiling joinery wherever you choose.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                The question is not which looks better — it is whether you want your heating to be a feature of the room, or whether you would prefer it to be invisible so the room itself can be the feature.
                            </p>
                        </article>

                        <div className="my-16">
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Side-by-Side System Comparison</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-8">
                                Comparing ThermaSkirt with premium designer radiators across the factors that matter most when choosing a heating system.
                            </p>

                            <ComparisonTable
                                alternativeName="Designer Radiators"
                                rows={[
                                    {
                                        feature: 'Wall Space',
                                        thermaskirt: 'Excellent. Frees 100% of wall space. Heating is at skirting level only.',
                                        alternative: 'Poor. Often larger than standard radiators due to decorative form factor.'
                                    },
                                    {
                                        feature: 'Heat Pump Performance (35-45°C)',
                                        thermaskirt: 'Excellent. Massive perimeter surface area retains output at low temps.',
                                        alternative: 'Poor. Most designer radiators have even lower output at dT20 than standard panels due to narrow profiles.'
                                    },
                                    {
                                        feature: 'Thermal Comfort',
                                        thermaskirt: 'Excellent. Even radiant heat from every wall. Less than 1°C floor-to-ceiling variance.',
                                        alternative: 'Moderate. Still a single-point convection source. Cold spots persist opposite the radiator.'
                                    },
                                    {
                                        feature: 'Cost',
                                        thermaskirt: 'Moderate. Premium product but replaces both skirting and radiator.',
                                        alternative: 'High. Premium pricing for visual design. Skirting board still required separately.'
                                    },
                                    {
                                        feature: 'Maintenance & Cleaning',
                                        thermaskirt: 'Excellent. Smooth surface wipes clean. No complex fins or grilles.',
                                        alternative: 'Moderate. Vertical column designs trap dust between tubes. Mirror finishes show fingerprints.'
                                    }
                                ]}
                            />
                            <p className="text-md font-medium text-dh-grey mt-4">
                                *Summary: Designer radiators win on visual statement. ThermaSkirt wins on performance, space, and heat pump compatibility.*
                            </p>
                        </div>

                        <article className="bg-dh-grey-light p-8 rounded-xl">
                            <h3 className="text-2xl font-semibold text-dh-dark mb-6">Which system is right for you?</h3>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-semibold text-dh-dark mb-2">Scenario A: You are installing a heat pump</h4>
                                    <p className="text-dh-grey">
                                        <strong>Winner: ThermaSkirt</strong>. Designer radiators have very limited output at 40°C flow temperatures. Many are purely decorative forms that sacrifice thermal performance for aesthetics. ThermaSkirt delivers the kW output your heat pump needs without compromise.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-dh-dark mb-2">Scenario B: You want heating to be a visual centrepiece</h4>
                                    <p className="text-dh-grey">
                                        <strong>Winner: Designer Radiator</strong>. If you specifically want your heating to be a conversation piece — a sculptural element that defines the room — a high-end designer radiator is the right choice. ThermaSkirt is designed to be invisible.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-dh-dark mb-2">Scenario C: You want maximum wall space for art and furniture</h4>
                                    <p className="text-dh-grey">
                                        <strong>Winner: ThermaSkirt</strong>. Even the most beautiful radiator occupies wall space. If your priority is a gallery wall, built-in shelving, or simply clean, uninterrupted walls, ThermaSkirt gives you every square inch back.
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>

                <TestimonialStrip
                    quote="We originally specified vertical designer radiators for our open-plan kitchen-diner, but they would have broken up the wall space completely. ThermaSkirt gave us the clean lines we wanted with better heat distribution."
                    author="James & Claire P."
                    tags={['Open Plan', 'New Build']}
                />

                <CTABanner
                    heading="Want premium heating without sacrificing your walls?"
                    description="Get a free, no-obligation quote to see how ThermaSkirt fits your home."
                    primaryCTA="Get a Free Quote"
                    primaryCTALink="/homeowners/get-a-quote"
                    secondaryCTA="Order a Free Sample"
                    secondaryCTALink="/homeowners/request-a-sample"
                />
            </main>
        </>
    );
}
