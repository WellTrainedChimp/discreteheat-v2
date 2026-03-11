import SubHubHero from '@/components/server/SubHubHero';
import CTABanner from '@/components/blocks/CTABanner';
import TestimonialStrip from '@/components/blocks/TestimonialStrip';
import ComparisonTable from '@/components/server/ComparisonTable';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'ThermaSkirt vs Trench Heaters | Skirting Board Heating Comparison',
    description: 'Compare ThermaSkirt with trench heating systems for bi-fold doors. Learn why skirting heating is cheaper, cleaner, and easier to install.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/vs/trench-heaters/',
    },
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=0893887c-5c27-4710-ab1f-d1079f9d05d6', width: 1200, height: 630, alt: 'ThermaSkirt vs Trench Heaters | Skirting Board Heating Comparison' }],
    },
};

export default function VsTrenchHeatersPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="System Comparison"
                    title="Defeat the drafts,"
                    titleHighlight="without the ditch."
                    description="When installing massive expanses of glass or bi-fold doors, hanging radiators is impossible. Trench heaters solve this by sinking grilles into the floor, but they are hideously expensive and fill with dirt. ThermaSkirt offers a sleek, above-ground alternative that stops drafts at the source."
                    primaryCta={{ text: "Get a System Quote", href: "/homeowners/get-a-quote" }}
                    imageSrc="https://www.discreteheat.com/MediaHandler.ashx?id=0893887c-5c27-4710-ab1f-d1079f9d05d6"
                    imageAlt="A side-by-side demonstration of a dirty trench heater grille vs a clean ThermaSkirt threshold"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">ThermaSkirt vs Trench Heaters</h2>
                            <p className="text-xl font-light text-dh-dark mb-12 leading-relaxed">
                                Trench heating requires excavating deep channels into your floor screed exactly at the boundaries of your external doors, dropping in a heating coil, and covering it with a metal grille. While effective at blocking drafts from large windows, it is an engineering nightmare to retrofit. ThermaSkirt achieves the identical thermal curtain effect entirely above ground, projecting just 20mm from the adjacent walls.
                            </p>

                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Excavation vs Integration</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                The fundamental problem with trench heaters is the physical space they require in the substrate. Excavating a 200mm deep trench across the entire length of your expensive new bi-fold doors involves severe structural coordination with architects and builders. They also present extreme levelling challenges when joining different floor finishes up to the metal grilles.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                ThermaSkirt eliminates the trench entirely. Driving heat via an aerospace-grade aluminium extrusion, it can be mounted flush against the plasterboard adjacent to the doors, or wrapped seamlessly around the kitchen island. By emitting a continuous curtain of radiant heat at low levels (35-45°C for heat pumps), it intercepts and neutralizes the cold drafts rolling off the glazing before they sweep across your room, without requiring a single inch of concrete to be cut.
                            </p>
                        </article>

                        <div className="my-16">
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Side-by-Side System Comparison</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-8">
                                The following table dissects the critical differences between retrofitting ThermaSkirt versus installing a sunk trench heater system.
                            </p>

                            <ComparisonTable
                                alternativeName="Trench Heaters"
                                rows={[
                                    {
                                        feature: 'Installation Disruption',
                                        thermaskirt: 'Excellent. Mounts directly to walls or island plinths in a few hours.',
                                        alternative: 'Poor. Requires digging 150-200mm trenches into concrete screed.'
                                    },
                                    {
                                        feature: 'Cleaning and Hygiene',
                                        thermaskirt: 'Excellent. Wipes clean. Solid profile prevents dirt ingress entirely.',
                                        alternative: 'Poor. Floor grilles act as a massive trap for crumbs, dirt, and pet hair.'
                                    },
                                    {
                                        feature: 'Combating Window Drafts',
                                        thermaskirt: 'Excellent. Surrounds the glass perimeter with a thermal curtain.',
                                        alternative: 'Excellent. Dedicated heat stream directly beneath the glass.'
                                    },
                                    {
                                        feature: 'Running Costs & Upkeep',
                                        thermaskirt: 'Excellent. Silent, zero-maintenance solid state aluminium system.',
                                        alternative: 'Poor. Often rely on noisy electric fans that fail and require cleaning.'
                                    },
                                    {
                                        feature: 'Cost to Purchase & Fit',
                                        thermaskirt: 'Excellent. Standard plumbing fittings and rapid surface mounting.',
                                        alternative: 'Poor. Architecturally complex, custom-sized units with high labour rates.'
                                    }
                                ]}
                            />
                            <p className="text-md font-medium text-dh-grey mt-4">
                                *Summary: Trench heaters are a valid choice for extreme commercial curtain walls, but ThermaSkirt is dramatically cleaner, cheaper, and safer for domestic extensions.*
                            </p>
                        </div>

                        <article className="bg-dh-grey-light p-8 rounded-xl">
                            <h3 className="text-2xl font-semibold text-dh-dark mb-6">Which system is right for you?</h3>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-semibold text-dh-dark mb-2">Scenario A: You are adding Bi-Fold doors to an existing extension</h4>
                                    <p className="text-dh-grey">
                                        <strong>Winner: ThermaSkirt</strong>. Retrofitting a trench heater means destroying your existing polished concrete or tiled floor right at the critical structural juncture. ThermaSkirt connects to the existing radiator drops and mounts to the adjacent stub walls, fighting the draft perfectly with zero demolition.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-dh-dark mb-2">Scenario B: You have a toddler or a heavily moulting dog</h4>
                                    <p className="text-dh-grey">
                                        <strong>Winner: ThermaSkirt</strong>. Trench heaters are gaping holes in the floor covered by a metal mesh. Dogs walk over them, pushing dirt down. Toddlers drop food into them. They become filthy, unreachable heat pits. ThermaSkirt is a solid, sealed 150mm aluminium face that you simply mop against and wipe clean.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-dh-dark mb-2">Scenario C: Building a £10m commercial airport lounge entirely of glass</h4>
                                    <p className="text-dh-grey">
                                        <strong>Winner: Trench Heaters</strong>. In massive commercial environments with sheer 15-metre glass curtain walls and zero solid structure, architecturally sunk trench heaters with powerful industrial fans are often the only viable way to condition the air volume.
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>

                <TestimonialStrip
                    quote="The architect specced trench heaters for our 6-metre sliding doors. When I saw the quote for the units and the digging, I halted the job. We used ThermaSkirt up the side walls and the kitchen island facing the glass instead. Problem solved for a fraction of the cost."
                    author="Mark D."
                    tags={['Rear Extension', 'Bi-Fold Doors']}
                />

                <CTABanner
                    heading="Defeat drafts without digging trenches."
                    description="Upload your extension plans for a fast, free itemised quote."
                    primaryCTA="Get a Free Quote"
                    primaryCTALink="/homeowners/get-a-quote"
                    secondaryCTA="Find an Installer"
                    secondaryCTALink="/homeowners/find-an-installer"
                />
            </main>
        </>
    );
}
