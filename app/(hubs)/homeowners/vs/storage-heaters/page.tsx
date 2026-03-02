import SubHubHero from '@/components/server/SubHubHero';
import CTABanner from '@/components/blocks/CTABanner';
import TestimonialStrip from '@/components/blocks/TestimonialStrip';
import ComparisonTable from '@/components/server/ComparisonTable';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'ThermaSkirt vs Storage Heaters | Skirting Board Heating Comparison',
    description: 'Compare Electric ThermaSkirt with night storage heaters. Discover how to gain total temperature control, lower your bills, and reclaim your living space.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/vs/storage-heaters/',
    }
};

export default function VsStorageHeatersPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="System Comparison"
                    title="Control your heat,"
                    titleHighlight="not the other way around."
                    description="Night storage heaters trap homeowners in a cycle of freezing evenings and boiling mornings. They are massive, intensely heavy, and dictate your room layout. Electric ThermaSkirt provides instantaneous, app-controlled radiant heat exactly when you want it, entirely hidden in the skirting."
                    primaryCta={{ text: "Get a System Quote", href: "/homeowners/get-a-quote" }}
                    imageSrc="/assets/images/homeowner-storage-vs.jpg"
                    imageAlt="A side-by-side demonstration of a bulky night storage heater vs a sleek Electric ThermaSkirt profile"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Electric ThermaSkirt vs Night Storage Heaters</h2>
                            <p className="text-xl font-light text-dh-dark mb-12 leading-relaxed">
                                Night storage heaters rely on absolute guesswork. By drawing cheap Economy-7 electricity at 2:00 AM to heat a massive core of clay bricks, they aim to release that heat slowly throughout the next day. If the weather changes suddenly, you are either left freezing with no heat, or forced to open windows to exhaust expensive, unwanted heat. Electric ThermaSkirt is a 100% efficient, on-demand radiant heating system that puts you completely back in control.
                            </p>

                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">On-Demand Comfort vs Guesswork</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                The fundamental flaw of a storage heater is its physical inability to respond to your immediate needs. When you come home from work on a freezing Tuesday evening, the heater’s brick core is usually entirely depleted, leaving the room cold right when you need it most. Activating the emergency &apos;boost&apos; function switches the heater to a standard daytime electricity tariff, costing you a fortune.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                Our Electric ThermaSkirt (&apos;ThermaSkirt E&apos;) provides instantaneous heat exactly when you demand it. Controlled by a smart programmable thermostat (with WiFi/App control available), the sealed silicone heating cable warms the aluminium profile in minutes. It draws electricity only when raising the room to your exact target temperature (e.g., 21°C), then throttles down to a minimal trickle charge to maintain it.
                            </p>
                        </article>

                        <div className="my-16">
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Side-by-Side System Comparison</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-8">
                                The following table breaks down the critical differences between upgrading off-grid or apartment heating to Electric ThermaSkirt versus enduring traditional night storage heaters.
                            </p>

                            <ComparisonTable
                                alternativeName="Night Storage Heaters"
                                rows={[
                                    {
                                        feature: 'Temperature Control & Responsiveness',
                                        thermaskirt: 'Excellent. Instant heat-up on demand. App controllable.',
                                        alternative: 'Poor. Heats up overnight. Depletes by the early evening.'
                                    },
                                    {
                                        feature: 'Space & Size',
                                        thermaskirt: 'Excellent. Projects just 20mm from the wall like normal skirting.',
                                        alternative: 'Poor. Incredibly bulky, consuming 200mm+ of floor space.'
                                    },
                                    {
                                        feature: 'Safety & Surface Temperature',
                                        thermaskirt: 'Excellent. Regulated low surface temperatures safe to touch.',
                                        alternative: 'Poor. Metal casings get dangerously hot during the morning discharge.'
                                    },
                                    {
                                        feature: 'Weight & Installation',
                                        thermaskirt: 'Excellent. Lightweight aluminium. Easily installed by one electrician.',
                                        alternative: 'Poor. Packed with clay bricks. Weighs over 100kg. Hard to move.'
                                    },
                                    {
                                        feature: 'Running Costs',
                                        thermaskirt: 'Good. Highly efficient direct-acting heat, though standard tariff.',
                                        alternative: 'Good. Uses cheaper overnight electricity (if configured correctly).'
                                    }
                                ]}
                            />
                            <p className="text-md font-medium text-dh-grey mt-4">
                                *Summary: Storage heaters offer cheaper electricity rates overnight, but Electric ThermaSkirt provides infinitely better comfort, space, and control when you actually occupy the room.*
                            </p>
                        </div>

                        <article className="bg-dh-grey-light p-8 rounded-xl">
                            <h3 className="text-2xl font-semibold text-dh-dark mb-6">Which system is right for you?</h3>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-semibold text-dh-dark mb-2">Scenario A: You work from home during the day</h4>
                                    <p className="text-dh-grey">
                                        <strong>Winner: ThermaSkirt E</strong>. A storage heater will blast heat at 9:00 AM making the office unbearable, and then run completely cold by 4:00 PM. ThermaSkirt holds the room at an exact, comfortable 21°C all day long, turning on and off precisely as needed.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-dh-dark mb-2">Scenario B: You live in a small, modern apartment</h4>
                                    <p className="text-dh-grey">
                                        <strong>Winner: ThermaSkirt E</strong>. In an apartment, losing 2 square metres of floor space to a 100kg steel box is a terrible compromise. ThermaSkirt replaces the timber skirting boards entirely, giving you back your whole floor plan to arrange furniture normally.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-dh-dark mb-2">Scenario C: You are elderly and in the house 24/7 on an Economy 7 tariff</h4>
                                    <p className="text-dh-grey">
                                        <strong>Winner: Storage Heaters</strong>. If you are extremely budget-conscious, cannot switch away from a specialized overnight electric tariff, and require a constant (albeit fluctuating) background heat 24 hours a day, maintaining your existing storage heaters may be the most cost-effective path.
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>

                <TestimonialStrip
                    quote="Ripping the old storage heaters off the wall was the best thing we did during the flat renovation. The ThermaSkirt heats the room in 10 minutes when we get home from work, and we can actually put a TV stand where the heater used to be."
                    author="Sophie & James"
                    tags={['Apartment', 'Electric Heating']}
                />

                <CTABanner
                    heading="Take back control of your heating."
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
