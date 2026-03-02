import SubHubHero from '@/components/server/SubHubHero';
import CTABanner from '@/components/blocks/CTABanner';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';

export const metadata = {
    title: 'ThermaCurve Trade Data | DiscreteHeat',
    description: 'Output and installation specifications for the ThermaCurve electric high-level coving heater.',
};

const internalLinks = [
    {
        title: "Installation Manuals",
        description: "Step-by-step PDF guides for all ThermaSkirt profiling and corners.",
        href: "/trade/resources/installation-manuals",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1080",
    },
    {
        title: "Technical Data Sheets",
        description: "Output tables, dimensions, and compliance docs.",
        href: "/trade/resources/technical-data-sheets",
        image: "https://images.unsplash.com/photo-1544485304-6330ce1bb82f?auto=format&fit=crop&q=80&w=1080",
    }
];

export default function TradeThermaCurvePage() {
    return (
        <main className="min-h-screen bg-white">
            <SubHubHero
                title="ThermaCurve"
                badge="High Level Electric Coving"
                description="Designed for installations where wall and floor space is completely restricted. Fits securely at ceiling height via a specialized mounting rail."
                imageSrc="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=1920"
            />

            <section className="py-24 px-6 lg:px-12 bg-white selection:bg-dh-red/20 selection:text-dh-red">
                <div className="max-w-4xl mx-auto">

                    <div className="bg-white border-2 border-black/10 rounded-2xl p-8 lg:p-12 mb-16 shadow-sm">
                        <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Electrical Output</span>
                        <h2 className="text-2xl font-bold text-dh-dark mb-6">Load Data (230V)</h2>
                        <p className="text-dh-grey mb-8">
                            ThermaCurve utilizes the same highly efficient electric element as the e-series, radiating warmth downwards across the ceiling line.
                        </p>

                        <div className="overflow-x-auto border border-black/10 rounded-xl mb-8">
                            <table className="w-full text-left font-mono text-sm whitespace-nowrap">
                                <thead className="bg-dh-dark text-white">
                                    <tr>
                                        <th className="py-4 px-4 font-semibold">Element Length</th>
                                        <th className="py-4 px-4 font-semibold">Power Output</th>
                                        <th className="py-4 px-4 font-semibold">Current Draw (A)</th>
                                        <th className="py-4 px-4 font-semibold">W/m Equivalent</th>
                                    </tr>
                                </thead>
                                <tbody className="text-dh-dark">
                                    <tr className="border-b border-black/5 bg-white">
                                        <td className="py-4 px-4 font-bold">1.0 Metre</td>
                                        <td className="py-4 px-4">120 W</td>
                                        <td className="py-4 px-4">0.52 A</td>
                                        <td className="py-4 px-4">120 W/m</td>
                                    </tr>
                                    <tr className="border-b border-black/5 bg-dh-grey-light">
                                        <td className="py-4 px-4 font-bold">1.5 Metre</td>
                                        <td className="py-4 px-4">180 W</td>
                                        <td className="py-4 px-4">0.78 A</td>
                                        <td className="py-4 px-4">120 W/m</td>
                                    </tr>
                                    <tr className="border-b border-black/5 bg-white">
                                        <td className="py-4 px-4 font-bold">2.0 Metre</td>
                                        <td className="py-4 px-4">240 W</td>
                                        <td className="py-4 px-4">1.04 A</td>
                                        <td className="py-4 px-4">120 W/m</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-dh-grey-light rounded-2xl p-8 border border-black/5">
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Mounting</span>
                            <h2 className="text-xl font-bold text-dh-dark mb-4">Ceiling Track Fixings</h2>
                            <p className="text-dh-grey mb-6">
                                ThermaCurve hangs securely from a two-part aluminium tracking system fixed at the wall-ceiling junction.
                            </p>
                            <ul className="space-y-3 font-mono text-sm text-dh-dark">
                                <li className="flex justify-between border-b border-black/10 pb-2">
                                    <span>Clearance Required</span>
                                    <span>5mm ceiling gap</span>
                                </li>
                                <li className="flex justify-between border-b border-black/10 pb-2">
                                    <span>Fixing Centers</span>
                                    <span>600mm max</span>
                                </li>
                                <li className="flex justify-between pb-2">
                                    <span>Drop Profile</span>
                                    <span>100mm face</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-dh-grey-light rounded-2xl p-8 border border-black/5">
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Electrical connection</span>
                            <h2 className="text-xl font-bold text-dh-dark mb-4">Control Equipment</h2>
                            <p className="text-dh-grey mb-6">
                                The wireless receiver is small enough to fit within the track void or dropping down a wall cavity to a localized fused spur.
                            </p>
                            <ul className="space-y-3 font-mono text-sm text-dh-dark">
                                <li className="flex justify-between border-b border-black/10 pb-2">
                                    <span>Connection</span>
                                    <span>13A Switched Fused Spur</span>
                                </li>
                                <li className="flex justify-between pb-2">
                                    <span>Thermostat</span>
                                    <span>RF Wireless Control (Wall mounted)</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            <ExploreCategorySection
                id="related"
                heading="Trade Resources"
                description="Access installation manuals and templates."
                tiles={internalLinks}
            />

            <CTABanner
                heading="Order ThermaCurve"
                description="Check inventory and trade pricing via our merchant network or online trade portal."
                primaryCTA="Go to Trade Portal"
                primaryCTALink="/trade/merchants/find-a-branch"
                secondaryCTA="Contact Support"
                secondaryCTALink="/about/contact"
            />
        </main>
    );
}
