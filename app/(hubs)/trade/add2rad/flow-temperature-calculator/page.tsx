import SubHubHero from '@/components/server/SubHubHero';
import CTABanner from '@/components/blocks/CTABanner';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';

export const metadata = {
    title: 'Flow Temperature Calculator | DiscreteHeat Trade',
    description: 'Calculate flow temperature reductions achieved by adding ThermaSkirt in series with existing radiators (Add2Rad).',
};

const internalLinks = [
    {
        title: "The Add2Rad Method",
        description: "How to use ThermaSkirt to reduce flow temperatures without changing pipework.",
        href: "/trade/add2rad/the-method",
        image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1080",
    },
    {
        title: "Heat Pump Installer Guide",
        description: "Technical instructions for adding the module in series with radiators.",
        href: "/trade/add2rad/heat-pump-installer-guide",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1080",
    },
    {
        title: "Quoting for Add2Rad",
        description: "Submit room dimensions via the portal for a fully quantified component estimate.",
        href: "/trade/add2rad/quoting-for-add2rad",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080",
    }
];

export default function FlowTemperatureCalculatorPage() {
    return (
        <main className="min-h-screen bg-white">
            <SubHubHero
                title="Flow Temp Calculator"
                badge="System Modeller"
                description="Use this tool to calculate the exact flow temperature required to meet a room's heat loss once ThermaSkirt has been added in series with the existing radiator."
                imageSrc="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1920"
            />

            <section className="py-24 px-6 lg:px-12 bg-white selection:bg-dh-red/20 selection:text-dh-red">
                <div className="max-w-4xl mx-auto">

                    <div className="bg-dh-grey-light rounded-2xl p-8 lg:p-12 mb-16 text-center border-2 border-black/5">
                        <h2 className="text-2xl font-bold text-dh-dark mb-4">Interactive Calculator</h2>
                        <p className="text-dh-grey mb-8">
                            This tool determines the new required Mean Water Temperature (MWT) to satisfy the heat loss, preventing the need for massive Type 33 radiators.
                        </p>

                        <div className="bg-white rounded-xl shadow-inner border border-black/10 p-12 flex items-center justify-center min-h-[400px]">
                            {/* Placeholder for the React interactive calculator component */}
                            <div className="text-center">
                                <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-dh-grey" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-dh-dark mb-2">Calculator Application</h3>
                                <p className="text-dh-grey text-sm max-w-xs mx-auto mb-6">The interactive React component will be loaded here, requiring the following inputs:</p>

                                <ul className="text-left text-sm text-dh-dark font-medium space-y-2 max-w-xs mx-auto border-t border-b border-black/10 py-4">
                                    <li className="flex justify-between"><span>Room Heat Loss:</span><span className="text-dh-grey">Watts</span></li>
                                    <li className="flex justify-between"><span>Radiator Output (dt50):</span><span className="text-dh-grey">Watts</span></li>
                                    <li className="flex justify-between"><span>Skirting Length added:</span><span className="text-dh-grey">Metres</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-white border-2 border-black/10 rounded-2xl p-8">
                            <h3 className="text-lg font-bold text-dh-dark mb-4 border-b border-black/10 pb-4">Standard Formula</h3>
                            <p className="text-dh-grey text-sm leading-relaxed mb-4">
                                Most gas boilers operate at an 80°C Flow / 60°C Return, yielding a Mean Water Temperature (MWT) of 70°C. Output figures for radiators are commonly given at ΔT50 (MWT 70°C - Room 20°C).
                            </p>
                            <p className="text-dh-grey text-sm leading-relaxed">
                                A heat pump operating at 45°C Flow / 40°C Return yields an MWT of 42.5°C, providing a ΔT of just 22.5. At this level, a standard radiator outputs less than a third of its rated capacity.
                            </p>
                        </div>
                        <div className="bg-white border-2 border-black/10 rounded-2xl p-8">
                            <h3 className="text-lg font-bold text-dh-dark mb-4 border-b border-black/10 pb-4">The Correction Factor</h3>
                            <p className="text-dh-grey text-sm leading-relaxed mb-4">
                                By doubling or tripling the total emission surface area configured &quot;in series&quot;, the system can run at the heat pump&apos;s required 45°C flow temperature while still satisfying the total wattage load required by the room calculation.
                            </p>
                            <p className="text-dh-grey text-sm leading-relaxed">
                                Ensure the Add2Rad manifold routes hot flow into the skirting first, maximizing radiant perimeter spread.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            <ExploreCategorySection
                id="related"
                heading="Explore Add2Rad"
                description="Technical specifications and calculating tools."
                tiles={internalLinks}
            />

            <CTABanner
                heading="Calculate the Whole House"
                description="Upload your full house plan directly to our technical desk for a complete room-by-room flow temperature verification report (CIBSE compliant)."
                primaryCTA="Submit House Plans"
                primaryCTALink="/trade/add2rad/quoting-for-add2rad"
                secondaryCTA="Contact Support"
                secondaryCTALink="/about/contact"
            />
        </main>
    );
}
