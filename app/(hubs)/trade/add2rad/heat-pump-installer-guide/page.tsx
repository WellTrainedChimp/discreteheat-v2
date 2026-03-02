import SubHubHero from '@/components/server/SubHubHero';
import CTABanner from '@/components/blocks/CTABanner';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';

export const metadata = {
    title: 'Heat Pump Installer Guide | DiscreteHeat Trade',
    description: 'Technical plumbing instructions, valve configurations, and pipework diagrams for installing the Add2Rad series module.',
};

const internalLinks = [
    {
        title: "The Add2Rad Method",
        description: "How to use ThermaSkirt to reduce flow temperatures without changing pipework.",
        href: "/trade/add2rad/the-method",
        image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1080",
    },
    {
        title: "Flow Temp Calculator",
        description: "Calculate expected flow temperatures before and after adding Add2Rad.",
        href: "/trade/add2rad/flow-temperature-calculator",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1080",
    },
    {
        title: "Quoting for Add2Rad",
        description: "Submit room dimensions via the portal for a fully quantified component estimate.",
        href: "/trade/add2rad/quoting-for-add2rad",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080",
    }
];

export default function HeatPumpInstallerGuidePage() {
    return (
        <main className="min-h-screen bg-white">
            <SubHubHero
                title="Installer Guide"
                badge="Hydronic Configuration"
                description="Technical documentation for configuring the Add2Rad bypass valve, setting the return temperatures, and balancing the system when running skirting and radiators in series."
                imageSrc="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1920"
            />

            <section className="py-24 px-6 lg:px-12 bg-white selection:bg-dh-red/20 selection:text-dh-red">
                <div className="max-w-4xl mx-auto">

                    <div className="bg-dh-grey-light border-2 border-black/5 rounded-2xl p-8 lg:p-12 mb-16">
                        <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">The Bypass Block</span>
                        <h2 className="text-2xl font-bold text-dh-dark mb-6">Component Anatomy</h2>
                        <p className="text-dh-grey mb-8">
                            The heart of the Add2Rad system is the proprietary TRV Bypass Block. This valve completely replaces the standard radiator TRV and lockshield. It attaches to the skirting board, connects to the floor tail, and provides a vertical feed directly up to the radiator.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 font-mono text-sm">
                            <div className="bg-white p-6 rounded-xl border border-black/5 shadow-sm">
                                <span className="block font-bold text-dh-dark mb-2">Port A (Bottom)</span>
                                <span className="text-dh-grey">Connects to 10mm or 15mm existing microbore/floor tail via compression olive.</span>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-black/5 shadow-sm">
                                <span className="block font-bold text-dh-dark mb-2">Port B (Side)</span>
                                <span className="text-dh-grey">Push-fit &apos;O&apos; ring directly into the ThermaSkirt twin-pipe extrusion.</span>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-black/5 shadow-sm">
                                <span className="block font-bold text-dh-dark mb-2">Port C (Top)</span>
                                <span className="text-dh-grey">Customized chrome vertical pipe routing up to the radiator&apos;s inlet.</span>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-black/5 shadow-sm">
                                <span className="block font-bold text-dh-dark mb-2">TRV Head</span>
                                <span className="text-dh-grey">Thermostatic control head positioned at skirting level, regulating flow for both elements.</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white border-2 border-black/10 rounded-2xl p-8 lg:p-12 mb-16 shadow-sm">
                        <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Flow Routing</span>
                        <h2 className="text-2xl font-bold text-dh-dark mb-6">Plumbing In Series</h2>
                        <p className="text-dh-grey mb-6">
                            When configuring the room, the goal is to utilize the skirting board as the primary emitter due to its lower positioning and radiant profile, using the radiator as the secondary boost.
                        </p>
                        <ul className="space-y-4 text-dh-dark font-medium mb-8">
                            <li className="flex items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-dh-red mt-2 mr-3 flex-shrink-0"></span>
                                <div>
                                    <span className="block font-bold mb-1">1. Identify Flow & Return</span>
                                    <span className="text-dh-grey font-normal text-sm">It is critical to identify the primary flow tail vs the return tail from the heat pump or boiler before starting. Reversing them will cause TRV hammer.</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-dh-red mt-2 mr-3 flex-shrink-0"></span>
                                <div>
                                    <span className="block font-bold mb-1">2. Route Flow into Skirting First</span>
                                    <span className="text-dh-grey font-normal text-sm">The primary hot flow must enter the ThermaSkirt profile first via the Add2Rad manifold to maximize radiant distribution across the room perimeter at the highest supply temperature.</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-dh-red mt-2 mr-3 flex-shrink-0"></span>
                                <div>
                                    <span className="block font-bold mb-1">3. Eject into Radiator</span>
                                    <span className="text-dh-grey font-normal text-sm">The returning water from the skirting pipe run is then directed vertically up into the radiator inlet. The water will have dropped approximately 3-5°C (dt) across the skirting run.</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-dh-red mt-2 mr-3 flex-shrink-0"></span>
                                <div>
                                    <span className="block font-bold mb-1">4. System Return</span>
                                    <span className="text-dh-grey font-normal text-sm">The radiator exit connects directly to the existing floor return tail, heading back to the heat pump.</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-dh-dark text-white rounded-2xl p-8 lg:p-12 mb-16">
                        <h2 className="text-2xl font-bold mb-6">Technical Limitations</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-sm">
                            <div className="bg-white/10 p-5 rounded-xl border border-white/20">
                                <span className="block font-bold text-dh-red mb-1">Max Skirting Run</span>
                                <span className="text-gray-400">Do not exceed 10 linear metres of ThermaSkirt (c. 1.2kW load) in series with a standard radiator on 10mm microbore. For larger rooms, branch loops or manifolding is required.</span>
                            </div>
                            <div className="bg-white/10 p-5 rounded-xl border border-white/20">
                                <span className="block font-bold text-dh-red mb-1">Radiator Tapping</span>
                                <span className="text-gray-400">The Add2Rad TRV block requires a standard 1/2&quot; BSP radiator tapping block. Custom designer-radiator threads may require step-down adaptors.</span>
                            </div>
                            <div className="bg-white/10 p-5 rounded-xl border border-white/20">
                                <span className="block font-bold text-dh-red mb-1">Pump Head Pressure</span>
                                <span className="text-gray-400">Ensure the primary circulation pump provides adequate head. Connecting emitters in series increases velocity resistance marginally more than parallel branches.</span>
                            </div>
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
                heading="Download Data Sheets"
                description="Access the full PDF data sheets for the TRV module, including exact port dimensions and clearance requirements."
                primaryCTA="Go to Resources"
                primaryCTALink="/trade/resources/technical-data-sheets"
                secondaryCTA="Contact Support"
                secondaryCTALink="/about/contact"
            />
        </main>
    );
}
