import SubHubHero from '@/components/server/SubHubHero';
import CTABanner from '@/components/blocks/CTABanner';
import TestimonialStrip from '@/components/blocks/TestimonialStrip';
import ComparisonTable from '@/components/server/ComparisonTable';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'ThermaSkirt vs Panel Heaters | Skirting Board Heating Comparison',
    description: 'Compare ThermaSkirt with electric panel heaters. Discover how skirting board heating delivers radiant comfort without the bulk, dust, and convection drafts of wall-mounted panels.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/vs/panel-heaters/',
    }
};

export default function VsPanelHeatersPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="System Comparison"
                    title="Radiant warmth, not"
                    titleHighlight="hot air."
                    description="Electric panel heaters are cheap to buy and easy to install — but they rely on aggressive convection that heats the ceiling first and leaves your feet cold. ThermaSkirt radiates gentle, even warmth from the perimeter of the room, creating genuine comfort without the drawbacks."
                    primaryCta={{ text: "Get a System Quote", href: "/homeowners/get-a-quote" }}
                    imageSrc="/assets/images/homeowner-plinth-vs.jpg"
                    imageAlt="Comparison between a wall-mounted panel heater and a ThermaSkirt perimeter installation"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">ThermaSkirt vs Electric Panel Heaters</h2>
                            <p className="text-xl font-light text-dh-dark mb-12 leading-relaxed">
                                Panel heaters work by heating an internal element and pushing hot air upward via convection. The warm air rises straight to the ceiling, cools, then falls back to the floor — creating a cycle that leaves the top of the room hot and the bottom cold. ThermaSkirt takes a fundamentally different approach.
                            </p>

                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">The Convection Problem</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                A panel heater mounted on the wall acts as a single point source of heat. It creates a narrow column of rising hot air directly above it, while the rest of the room stays comparatively cold. You feel warm standing next to it, but a few metres away you feel the chill. This is because convection only warms the air — not you, your furniture, or the floor.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                ThermaSkirt distributes heat around the entire perimeter of the room at the lowest point, projecting radiant energy outward. This warms objects and people directly, creating an enveloping feeling of comfort with minimal temperature variation from floor to ceiling.
                            </p>
                        </article>

                        <div className="my-16">
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Side-by-Side System Comparison</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-8">
                                Comparing ThermaSkirt with standard electric panel heaters across the factors that matter most in your home.
                            </p>

                            <ComparisonTable
                                alternativeName="Panel Heaters"
                                rows={[
                                    {
                                        feature: 'Heating Method',
                                        thermaskirt: 'Excellent. Radiant heat from the full room perimeter. Even warmth floor to ceiling.',
                                        alternative: 'Poor. Convection from a single point. Hot at ceiling, cold at floor.'
                                    },
                                    {
                                        feature: 'Wall Space & Aesthetics',
                                        thermaskirt: 'Excellent. Replaces the skirting board. Frees 100% of wall space.',
                                        alternative: 'Poor. Bulky white box fixed to the wall, often with visible wiring.'
                                    },
                                    {
                                        feature: 'Dust & Air Quality',
                                        thermaskirt: 'Excellent. Gentle radiant heat does not circulate dust or allergens.',
                                        alternative: 'Poor. Strong convection currents continuously circulate dust particles.'
                                    },
                                    {
                                        feature: 'Furniture Placement',
                                        thermaskirt: 'Excellent. Furniture can sit flush against the wall in front of ThermaSkirt.',
                                        alternative: 'Poor. Panel must not be blocked by furniture or curtains.'
                                    },
                                    {
                                        feature: 'Noise',
                                        thermaskirt: 'Excellent. Completely silent operation.',
                                        alternative: 'Moderate. Some panels produce ticking or clicking sounds during heating cycles.'
                                    }
                                ]}
                            />
                            <p className="text-md font-medium text-dh-grey mt-4">
                                *Summary: Panel heaters are cheaper upfront, but ThermaSkirt delivers superior comfort, aesthetics, and air quality.*
                            </p>
                        </div>

                        <article className="bg-dh-grey-light p-8 rounded-xl">
                            <h3 className="text-2xl font-semibold text-dh-dark mb-6">Which system is right for you?</h3>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-semibold text-dh-dark mb-2">Scenario A: You want invisible, even heating across the room</h4>
                                    <p className="text-dh-grey">
                                        <strong>Winner: ThermaSkirt</strong>. By distributing heat around the perimeter, ThermaSkirt eliminates hot and cold spots entirely. You do not need to position your chair next to the heater to feel warm.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-dh-dark mb-2">Scenario B: You need a quick fix for a single room on a tight budget</h4>
                                    <p className="text-dh-grey">
                                        <strong>Winner: Panel Heater</strong>. If you need heat in one room as cheaply as possible and aesthetics are not a concern, a panel heater can be wall-mounted and switched on within an hour.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-dh-dark mb-2">Scenario C: You suffer from dust allergies or asthma</h4>
                                    <p className="text-dh-grey">
                                        <strong>Winner: ThermaSkirt</strong>. The gentle radiant heat does not create the aggressive convection currents that panel heaters use, significantly reducing airborne dust circulation in the room.
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>

                <TestimonialStrip
                    quote="We replaced two ugly panel heaters in the spare room with ThermaSkirt e. The room feels so much bigger now, and the warmth is noticeably more even — no more sitting next to the heater to feel warm."
                    author="Sarah K."
                    tags={['Panel Heater Replacement', 'Electric']}
                />

                <CTABanner
                    heading="Ready to upgrade from panel heaters?"
                    description="Get a free, no-obligation quote to replace your panel heaters with ThermaSkirt."
                    primaryCTA="Get a Free Quote"
                    primaryCTALink="/homeowners/get-a-quote"
                    secondaryCTA="Find an Installer"
                    secondaryCTALink="/homeowners/find-an-installer"
                />
            </main>
        </>
    );
}
