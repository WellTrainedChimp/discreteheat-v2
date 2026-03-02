import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';

export const metadata = {
    title: 'ThermaSkirt-e Trade Data | DiscreteHeat',
    description: 'Electrical load data, wiring configurations, and technical specs for ThermaSkirt-e electric heating profile.',
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

export default function TradeElectricPage() {
    return (
        <main className="min-h-screen bg-white">
            <SubHubHero
                title="ThermaSkirt-e"
                badge="Direct Acting Electric"
                description="Designed for 230V mains operation. Ideal for off-gas grid locations, apartment blocks, solar PV integration, or room-only retrofits."
                imageSrc="https://images.unsplash.com/photo-1544485304-6330ce1bb82f?auto=format&fit=crop&q=80&w=1920"
            />

            <section className="py-24 px-6 lg:px-12 bg-white selection:bg-dh-red/20 selection:text-dh-red">
                <div className="max-w-4xl mx-auto">

                    <div className="bg-white border-2 border-black/10 rounded-2xl p-8 lg:p-12 mb-16 shadow-sm">
                        <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Electrical Output Tables</span>
                        <h2 className="text-2xl font-bold text-dh-dark mb-6">Load Data (230V)</h2>
                        <p className="text-dh-grey mb-8">
                            Output is determined by the length of the heating element selected. Multiple elements can be chained in parallel up to the capacity of the spurred fused connection.
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
                                    <tr className="bg-dh-grey-light">
                                        <td className="py-4 px-4 font-bold">3.0 Metre</td>
                                        <td className="py-4 px-4">360 W</td>
                                        <td className="py-4 px-4">1.56 A</td>
                                        <td className="py-4 px-4">120 W/m</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-dh-grey-light rounded-2xl p-8 border border-black/5">
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Regulations</span>
                            <h2 className="text-xl font-bold text-dh-dark mb-4">Wiring & Setup</h2>
                            <p className="text-dh-grey mb-6">
                                Installation requires a competent installer for the mechanics, and must be signed off by a Part P registered electrician. System connects to a 13A switched fused spur.
                            </p>
                            <ul className="space-y-3 font-mono text-sm text-dh-dark">
                                <li className="flex justify-between border-b border-black/10 pb-2">
                                    <span>Max Load per Spur (13A)</span>
                                    <span>2,990 Watts</span>
                                </li>
                                <li className="flex justify-between border-b border-black/10 pb-2">
                                    <span>Control Type</span>
                                    <span>Wireless programmable stat</span>
                                </li>
                                <li className="flex justify-between pb-2">
                                    <span>IP Rating</span>
                                    <span>IPX4 (Splashproof)</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-dh-dark text-white rounded-2xl p-8 border border-white/10">
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Thermostat</span>
                            <h2 className="text-xl font-bold mb-4">Smart Control Receiver</h2>
                            <p className="text-gray-300 mb-6">
                                The system utilizes a hidden receiver unit located behind the skirting profile. This communicates wirelessly (RF) to the wall-mounted thermostat, avoiding the need to channel walls for stat wiring.
                            </p>
                            <div className="bg-white/10 p-4 rounded-xl border border-white/20 flex gap-4 items-center">
                                <div className="p-3 bg-dh-red rounded-lg"><span className="text-white font-bold">App</span></div>
                                <div className="text-sm">
                                    <span className="block font-bold">WiFi Enabled Stats available</span>
                                    <span className="block text-gray-400">iOS & Android compatible</span>
                                </div>
                            </div>
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
                heading="Order Parts"
                description="Check inventory and bulk pricing for ThermaSkirt-e elements and receiver units via the trade portal."
                primaryCTA="Go to Trade Portal"
                primaryCTALink="/trade/merchants/find-a-branch"
                secondaryCTA="Contact Support"
                secondaryCTALink="/about/contact"
            />
        </main>
    );
}
