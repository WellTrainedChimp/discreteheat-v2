import SubHubHero from '@/components/server/SubHubHero';
import CTABanner from '@/components/blocks/CTABanner';
import TestimonialStrip from '@/components/blocks/TestimonialStrip';
import ComparisonTable from '@/components/server/ComparisonTable';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'ThermaSkirt vs Radiators | Skirting Board Heating Comparison',
    description: 'Compare ThermaSkirt with standard steel panel radiators. Learn how skirting board heating provides better thermal comfort, stops cold spots, and reclaims your wall space.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/vs/radiators/',
    }
};

export default function VsRadiatorsPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="System Comparison"
                    title="Take back your"
                    titleHighlight="walls."
                    description="Standard steel panel radiators have dominated UK heating for decades. They are cheap to buy, but incredibly costly regarding interior design, thermal comfort, and heat pump efficiency. ThermaSkirt offers a modern, invisible alternative that dramatically outperforms the old white box."
                    primaryCta={{ text: "Get a System Quote", href: "/homeowners/get-a-quote" }}
                    imageSrc="/assets/images/homeowner-radiator-vs.jpg"
                    imageAlt="A side-by-side demonstration of a cluttered radiator room vs a clean ThermaSkirt perimeter"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">ThermaSkirt vs Standard Radiators</h2>
                            <p className="text-xl font-light text-dh-dark mb-12 leading-relaxed">
                                The traditional Type 22 or Type 33 steel panel radiator is a &apos;point source&apos; of high-temperature heat that relies aggressively on air convection. ThermaSkirt deconstructs the radiator, spreading the identical heating power horizontally around the room&apos;s perimeter. This shift from intense convection to gentle, even radiation solves the fundamental flaws of radiator heating.
                            </p>

                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Thermal Comfort & Dust Circulation</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                A radiator works correctly by sucking cold air from the floor, heating it rapidly across metal fins (often at 70°C), and blasting it toward the ceiling. The air then cools, falls at the opposite end of the room, and travels back across the floor, creating a persistent cold draft around your ankles. This violent air movement also continuously flings dust and pet dander across the room, irritating asthma sufferers and staining the wall above the radiator black.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                ThermaSkirt operates completely differently. By projecting radiant heat from the lowest point of the room outwards on all sides simultaneously, it creates an enveloping cushion of warmth that gently rises. BSRIA thermal imaging testing proves ThermaSkirt delivers a near-perfect temperature gradient with less than 1°C variance between the floor and the ceiling, completely eradicating cold spots and the aggressive dust-carrying convection loop.
                            </p>
                        </article>

                        <div className="my-16">
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Side-by-Side System Comparison</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-8">
                                The following table breaks down the critical differences between upgrading to ThermaSkirt versus replacing like-for-like with standard steel panel radiators, assessing space recovery, heat pump compatibility, and hygiene.
                            </p>

                            <ComparisonTable
                                alternativeName="Standard Radiators"
                                rows={[
                                    {
                                        feature: 'Wall Space & Furniture Placement',
                                        thermaskirt: 'Excellent. Frees 100% of wall space. Place sofas directly in front.',
                                        alternative: 'Poor. Dictates room layout. Cannot block with heavy furniture.'
                                    },
                                    {
                                        feature: 'Heat Pump Compatibility (35-45°C)',
                                        thermaskirt: 'Excellent. Huge surface area easily achieves required kW at low temps.',
                                        alternative: 'Poor. Requires installing massive oversized double/triple panels.'
                                    },
                                    {
                                        feature: 'Dust & Hygiene',
                                        thermaskirt: 'Excellent. Radiates clean heat. Wipes clean with a cloth instantly.',
                                        alternative: 'Poor. Traps dust and pet hair inside deep metal fins.'
                                    },
                                    {
                                        feature: 'Heating Speed (Responsiveness)',
                                        thermaskirt: 'Excellent. Heats up in 5 minutes due to high thermal conductivity.',
                                        alternative: 'Good. Heats up in 10-15 minutes on a standard gas boiler circuit.'
                                    },
                                    {
                                        feature: 'Decor & Aesthetics',
                                        thermaskirt: 'Excellent. Mimics timber skirting profiles (Ogee, Torus, Minimalist).',
                                        alternative: 'Poor. Obtrusive metal box that stains the wall above it over time.'
                                    }
                                ]}
                            />
                            <p className="text-md font-medium text-dh-grey mt-4">
                                *Summary: Radiators are cheaper to buy upfront, but ThermaSkirt is vastly superior in heat pump efficiency, space utilization, and thermal comfort.*
                            </p>
                        </div>

                        <article className="bg-dh-grey-light p-8 rounded-xl">
                            <h3 className="text-2xl font-semibold text-dh-dark mb-6">Which system is right for you?</h3>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-semibold text-dh-dark mb-2">Scenario A: You are installing an Air Source Heat Pump</h4>
                                    <p className="text-dh-grey">
                                        <strong>Winner: ThermaSkirt</strong>. Heat pumps operate best at 35-45°C. A standard radiator running at 40°C loses 70% of its rated heat output. To compensate, a plumber will fit a massive Type 33 radiator that consumes half your wall. ThermaSkirt uses the entire perimeter to achieve the required kW output silently, letting you reap the heat pump efficiency rewards without ruining your interior design.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-dh-dark mb-2">Scenario B: You have a small Box Bedroom or Home Office</h4>
                                    <p className="text-dh-grey">
                                        <strong>Winner: ThermaSkirt</strong>. In a 3m x 3m space, every square inch matters. A radiator forces you to put the bed or desk in an awkward position. Removing the radiator and installing ThermaSkirt reclaims that space instantly, giving you a bigger bed or a wider desk.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-dh-dark mb-2">Scenario C: You are doing a quick, low-budget rental refurbishment</h4>
                                    <p className="text-dh-grey">
                                        <strong>Winner: Standard Radiators</strong>. If aesthetics, hygiene, and room layout do not matter to you, and your sole focus is the lowest possible upfront material cost for a basic gas boiler replacement on a rental property, standard off-the-shelf panel radiators remain the cheapest option.
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>

                <TestimonialStrip
                    quote="Taking the radiators out of our lounge changed the shape of the room completely. We finally fit the two large sofas we wanted. The heat from the ThermaSkirt is surprisingly even—there's no cold draft creeping across the floor anymore."
                    author="Emma T."
                    tags={['Living Room Refurbishment', 'Space Saving']}
                />

                <CTABanner
                    heading="Ready to ditch the radiators?"
                    description="Upload your room dimensions for a fast, free itemised quote."
                    primaryCTA="Get a Free Quote"
                    primaryCTALink="/homeowners/get-a-quote"
                    secondaryCTA="Find an Installer"
                    secondaryCTALink="/homeowners/find-an-installer"
                />
            </main>
        </>
    );
}
