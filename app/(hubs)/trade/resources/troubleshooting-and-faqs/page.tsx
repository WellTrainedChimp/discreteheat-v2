import SubHubHero from '@/components/server/SubHubHero';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';

export const metadata = {
    title: 'Troubleshooting & FAQs | DiscreteHeat Trade',
    description: 'Technical troubleshooting guides covering flow issues, balancing manifolds, heating up times, and noise resolution for ThermaSkirt systems.',
};

const internalLinks = [
    {
        title: "Installation Instructions",
        description: "Review exact fitting requirements.",
        href: "/trade/resources/installation-instructions",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1080",
    },
    {
        title: "Video Library",
        description: "Watch visual guides on balancing and bleeding.",
        href: "/trade/resources/video-library",
        image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=1080",
    }
];

export default function TroubleshootingPage() {
    return (
        <main className="min-h-screen bg-white">
            <SubHubHero
                title="Troubleshooting & FAQs"
                badge="Technical Support"
                description="Before calling technical support from site, check our database of common queries, balancing issues, and their rapid solutions."
                imageSrc="https://images.unsplash.com/photo-1620608569766-41fcefd2ab26?auto=format&fit=crop&q=80&w=1920"
            />

            <section className="py-24 px-6 lg:px-12 bg-white selection:bg-dh-red/20 selection:text-dh-red">
                <div className="max-w-4xl mx-auto">

                    <div className="space-y-8">
                        {/* Issue 1 */}
                        <div className="bg-white border-2 border-dh-grey-light rounded-2xl p-8 hover:border-black/10 transition-colors">
                            <h3 className="text-xl font-bold text-dh-dark mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-dh-red/10 text-dh-red flex items-center justify-center font-bold text-sm">1</span>
                                The system is taking too long to heat up.
                            </h3>
                            <div className="pl-11 border-l-2 border-dh-grey-light space-y-4">
                                <p className="text-dh-grey text-sm">Aluminium is highly conductive and should heat rapidly. If it is slow:</p>
                                <ul className="list-disc pl-5 text-sm text-dh-grey space-y-2">
                                    <li><strong className="text-dh-dark">Check Air Locks:</strong> ThermaSkirt requires bleeding just like a radiator. Ensure all air is expelled via the bleed valves located at the return connection points.</li>
                                    <li><strong className="text-dh-dark">Pump Speed:</strong> Due to continuous looping, ThermaSkirt resistance can be higher than standard systems. Increase the modulating pump speed slightly.</li>
                                    <li><strong className="text-dh-dark">Flow Orientation:</strong> Ensure hot flow enters the TOP pipe of the skirting and returns via the BOTTOM pipe. Reversed flow ruins thermal dynamics.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Issue 2 */}
                        <div className="bg-white border-2 border-dh-grey-light rounded-2xl p-8 hover:border-black/10 transition-colors">
                            <h3 className="text-xl font-bold text-dh-dark mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-dh-red/10 text-dh-red flex items-center justify-center font-bold text-sm">2</span>
                                Clicking or ticking noises when heating up.
                            </h3>
                            <div className="pl-11 border-l-2 border-dh-grey-light space-y-4">
                                <p className="text-dh-grey text-sm">As aluminium expands rapidly with heat, thermal expansion noises can occur if installed too tightly.</p>
                                <ul className="list-disc pl-5 text-sm text-dh-grey space-y-2">
                                    <li><strong className="text-dh-dark">Expansion Gaps:</strong> Ensure you have left a 2-3mm gap behind corner covers and connecting covers to allow the alloy profile to travel horizontally as it heats up.</li>
                                    <li><strong className="text-dh-dark">Bracket Tension:</strong> Ensure the brackets are screwed flush, but not severely overtightened causing the profile to bite into the plastic.</li>
                                    <li>A light spray of PTFE dry lubricant along the bracket track can resolve persistent expansion friction.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Issue 3 */}
                        <div className="bg-white border-2 border-dh-grey-light rounded-2xl p-8 hover:border-black/10 transition-colors">
                            <h3 className="text-xl font-bold text-dh-dark mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-dh-red/10 text-dh-red flex items-center justify-center font-bold text-sm">3</span>
                                Temperature drops significantly at the end of a long loop.
                            </h3>
                            <div className="pl-11 border-l-2 border-dh-grey-light space-y-4">
                                <p className="text-dh-grey text-sm">If one end of a large room is hot but the far end is cold, the flow rate is insufficient to overcome the heat drop across the loop.</p>
                                <ul className="list-disc pl-5 text-sm text-dh-grey space-y-2">
                                    <li><strong className="text-dh-dark">Manifold Balancing:</strong> Use the flow meters on the manifold to increase the flow rate (L/min) to that specific circuit. Shut down smaller circuits slightly to force pressure.</li>
                                    <li><strong className="text-dh-dark">Maximum Loop Length:</strong> Ensure you have not exceeded 20 linear metres on a single 15mm loop. Rooms larger than 20m perimeter must be split into two separate manifold circuits.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bg-dh-dark text-white rounded-2xl p-8 lg:p-12 mt-16 text-center">
                        <h2 className="text-2xl font-bold mb-4">Still Unresolved? Call the Tech Desk.</h2>
                        <p className="text-gray-300 text-sm mb-6 max-w-xl mx-auto">
                            If you are currently on site and encountering an issue not listed here, call our dedicated Trade Technical line for immediate assistance from our engineering team.
                        </p>
                        <a href="tel:01942880060" className="inline-block border-2 border-white text-white font-bold py-3.5 px-8 rounded-lg hover:bg-white hover:text-dh-dark transition-colors">
                            Call 01942 880060
                        </a>
                    </div>

                </div>
            </section>

            <ExploreCategorySection
                id="related"
                heading="Additional Resources"
                description="Explore further technical documentation and guides."
                tiles={internalLinks}
            />
        </main>
    );
}
