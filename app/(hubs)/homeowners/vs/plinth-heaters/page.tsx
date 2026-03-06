import SubHubHero from '@/components/server/SubHubHero';
import CTABanner from '@/components/blocks/CTABanner';
import TestimonialStrip from '@/components/blocks/TestimonialStrip';
import ComparisonTable from '@/components/server/ComparisonTable';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'ThermaSkirt vs Plinth Heaters | Kitchen Heating Comparison',
    description: 'Compare ThermaSkirt with kitchen plinth heaters. Stop kicking grilles, stop listening to fan noise, and heat your kitchen with clean, silent radiant skirting.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/vs/plinth-heaters/',
    },
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=c4910a9c-abf2-4a05-8584-3f8aab246542', width: 1200, height: 630, alt: 'ThermaSkirt vs Plinth Heaters | Kitchen Heating Comparison' }],
    },
};

export default function VsPlinthHeatersPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="System Comparison"
                    title="Silent warmth,"
                    titleHighlight="zero dust traps."
                    description="When kitchens run out of wall space for radiators, plinth heaters are often shoved under the cabinets. They blow dust across your floor, drone loudly, and get kicked. ThermaSkirt replaces the cabinet plinths entirely, delivering silent, radiant heat that wipes clean in seconds."
                    primaryCta={{ text: "Get a System Quote", href: "/homeowners/get-a-quote" }}
                    imageSrc="https://www.discreteheat.com/MediaHandler.ashx?id=c4910a9c-abf2-4a05-8584-3f8aab246542"
                    imageAlt="A side-by-side demonstration of a dusty, dented plinth heater grille vs a beautiful, seamless ThermaSkirt kitchen plinth"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">ThermaSkirt vs Kitchen Plinth Heaters</h2>
                            <p className="text-xl font-light text-dh-dark mb-12 leading-relaxed">
                                Plinth heaters (or kick-space heaters) use electric fans to blow air across hot water coils hidden under kitchen cabinets. While they solve the &apos;no wall space&apos; problem, they introduce severe compromises: noise, aggressive dust circulation, and a cheap-looking metal grille that constantly gets kicked and dented. ThermaSkirt provides the exact same space-saving solution, but acts as a solid-state, silent radiant emitter that perfectly matches your kitchen design.
                            </p>

                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Hygiene & Operational Noise</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Kitchen floors accumulate crumbs, pet hair, and dust. A plinth heater uses a fan to suck floor-level air in, heat it, and blast it back out. This effectively turns the heater into a dirt vacuum that steadily clogs its own internal fins, while simultaneously blowing the remaining debris across your clean floor. Furthermore, the constant droning noise of the electric fan becomes incredibly grating when trying to eat dinner or entertain guests.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                ThermaSkirt is completely silent and incredibly hygienic. We manufacture plain, flat aluminium profiles designed specifically to replace standard MDF kitchen plinths. Because it uses natural radiant heat rather than mechanical fans, there is zero noise and zero air movement. The solid aluminium face prevents dust and dog hair from getting trapped underneath the units, and it simply wipes clean with a damp cloth just like the rest of your kitchen.
                            </p>
                        </article>

                        <div className="my-16">
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Side-by-Side System Comparison</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-8">
                                The following table breaks down the critical differences between installing ThermaSkirt on your kitchen units versus cutting holes for standard fan-assisted plinth heaters.
                            </p>

                            <ComparisonTable
                                alternativeName="Plinth Heaters"
                                rows={[
                                    {
                                        feature: 'Operational Noise',
                                        thermaskirt: 'Excellent. 100% silent solid-state radiant emitter.',
                                        alternative: 'Poor. Constant droning noise from electric fans when operating.'
                                    },
                                    {
                                        feature: 'Kitchen Hygiene & Cleaning',
                                        thermaskirt: 'Excellent. Solid wipe-clean surface. Blocks debris entering void.',
                                        alternative: 'Poor. Sucks up crumbs and pet hair. Grilles are hard to clean.'
                                    },
                                    {
                                        feature: 'Aesthetics & Durability',
                                        thermaskirt: 'Excellent. Aerospace aluminium. Won\'t swell like MDF plinths when wet.',
                                        alternative: 'Poor. Cheap metal grilles that get dented and scratched by shoes.'
                                    },
                                    {
                                        feature: 'Electrical Requirements',
                                        thermaskirt: 'Excellent. Wet version requires no electrical connection whatsoever.',
                                        alternative: 'Poor. Requires a fused 240V spur run under the cabinets to power fans.'
                                    },
                                    {
                                        feature: 'Heat Pump Compatibility',
                                        thermaskirt: 'Excellent. Large surface area handles low temperatures (35-45°C) easily.',
                                        alternative: 'Poor. Most units blow cold air unless the water is above 60°C.'
                                    }
                                ]}
                            />
                            <p className="text-md font-medium text-dh-grey mt-4">
                                *Summary: Plinth heaters are a cheap builder&apos;s fix. ThermaSkirt is a premium, silent, and hygienic upgrade that finishes a kitchen flawlessly.*
                            </p>
                        </div>

                        <article className="bg-dh-grey-light p-8 rounded-xl">
                            <h3 className="text-2xl font-semibold text-dh-dark mb-6">Which system is right for you?</h3>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-semibold text-dh-dark mb-2">Scenario A: You are installing a high-end designer kitchen</h4>
                                    <p className="text-dh-grey">
                                        <strong>Winner: ThermaSkirt</strong>. You are spending £15,000+ on beautiful cabinets and stone worktops. Cutting a hole in the bottom to install a £100 tin grille that rattles and blows dust is a terrible design compromise. Our flat ThermaSkirt profile can be painted to match your cabinets precisely, providing invisible, premium heating.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-dh-dark mb-2">Scenario B: You have dogs or cats in the kitchen</h4>
                                    <p className="text-dh-grey">
                                        <strong>Winner: ThermaSkirt</strong>. Plinth heaters act as pet hair magnets. Within months, the internal radiator coils become completely insulated by trapped fur, destroying their heat output and creating a burn smell. ThermaSkirt&apos;s sealed face stops this entirely.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-dh-dark mb-2">Scenario C: You need massive heat output from a tiny 600mm cabinet space</h4>
                                    <p className="text-dh-grey">
                                        <strong>Winner: Plinth Heaters</strong>. If you have absolutely no wall skirting, no island, and only a single 600mm cabinet base available to heat an entire freezing kitchen extension, a high-wattage electric or wet plinth heater with its fan on full &apos;boost&apos; is the only way to force enough BTUs into the room from such a tiny aperture.
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>

                <TestimonialStrip
                    quote="The kick-space heater we had before drove me mad with the fan noise whenever we sat at the kitchen island. We replaced the island MDF plinths with ThermaSkirt instead. It's totally silent, the kitchen is warmer, and it looks infinitely better without the ugly grille."
                    author="Claire W."
                    tags={['Kitchen Island', 'Silent Heating']}
                />

                <CTABanner
                    heading="Finish your kitchen perfectly."
                    description="Upload your kitchen plans for a fast, free itemised quote."
                    primaryCTA="Get a Free Quote"
                    primaryCTALink="/homeowners/get-a-quote"
                    secondaryCTA="Find an Installer"
                    secondaryCTALink="/homeowners/find-an-installer"
                />
            </main>
        </>
    );
}
