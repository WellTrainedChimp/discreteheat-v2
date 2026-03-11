import SubHubHero from '@/components/server/SubHubHero';
import CTABanner from '@/components/blocks/CTABanner';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';

export const metadata = {
    title: 'ThermaSkirt H2O Trade Data | DiscreteHeat',
    description: 'Technical installation data, output tables, and profile dimensions for the ThermaSkirt H2O water-based skirting heating system.',
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=c287107e-ac14-4abc-b282-8676388df56c', width: 1200, height: 630, alt: 'ThermaSkirt H2O Trade Data | DiscreteHeat' }],
    },
};

const internalLinks = [
    {
        title: "Installation Manuals",
        description: "Step-by-step PDF guides for all ThermaSkirt profiling and corners.",
        href: "/trade/resources/installation-manuals",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=4e57c3f4-83d4-4914-a6bf-28d31595bad1",
    },
    {
        title: "Flow Temp Calculator",
        description: "Calculate exact required lengths based on heat loss.",
        href: "/trade/add2rad/flow-temperature-calculator",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=16027df0-9209-4f6f-b0e6-87a7e41c8875",
    },
    {
        title: "Pipe Templates",
        description: "Downloadable set-out templates for first fix.",
        href: "/trade/resources/pipe-templates",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=c17fc98f-1d55-491b-9638-72b32eda1d20",
    }
];

export default function TradeH2OPage() {
    return (
        <main className="min-h-screen bg-white">
            <SubHubHero
                title="ThermaSkirt H2O"
                badge="Primary Hydronic Emitter"
                description="The standard wet-system profile. Designed for 15mm pre-plumbed tails, operating across both high (70°C+) and low (35-45°C) flow temperatures."
                imageSrc="https://www.discreteheat.com/MediaHandler.ashx?id=c287107e-ac14-4abc-b282-8676388df56c"
            />

            <section className="py-24 px-6 lg:px-12 bg-white selection:bg-dh-red/20 selection:text-dh-red">
                <div className="max-w-4xl mx-auto">

                    <div className="bg-white border-2 border-black/10 rounded-2xl p-8 lg:p-12 mb-16 shadow-sm">
                        <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Output Tables — Watts per Metre</span>
                        <h2 className="text-2xl font-bold text-dh-dark mb-6">Thermal Performance (BS EN 442-1)</h2>
                        <p className="text-dh-grey mb-8">
                            Tested at BSRIA. Outputs are shown in Watts per linear metre. For heat pump sizing, reference the dT20 or dT30 columns.
                        </p>

                        <div className="overflow-x-auto border border-black/10 rounded-xl mb-8">
                            <table className="w-full text-left font-mono text-sm whitespace-nowrap">
                                <thead className="bg-dh-dark text-white">
                                    <tr>
                                        <th className="py-4 px-4 font-semibold">Profile</th>
                                        <th className="py-4 px-4 font-semibold">dT50 (75/65/20°C)</th>
                                        <th className="py-4 px-4 font-semibold">dT40 (65/55/20°C)</th>
                                        <th className="py-4 px-4 font-semibold">dT30 (55/45/20°C)</th>
                                        <th className="py-4 px-4 font-semibold">dT20 (45/35/20°C)</th>
                                    </tr>
                                </thead>
                                <tbody className="text-dh-dark">
                                    <tr className="border-b border-black/5 bg-white">
                                        <td className="py-4 px-4 font-bold">Urban Lm (145mm)</td>
                                        <td className="py-4 px-4">126 W/m</td>
                                        <td className="py-4 px-4">97 W/m</td>
                                        <td className="py-4 px-4">70 W/m</td>
                                        <td className="py-4 px-4">43 W/m</td>
                                    </tr>
                                    <tr className="border-b border-black/5 bg-dh-grey-light">
                                        <td className="py-4 px-4 font-bold">Deco PR (195mm)</td>
                                        <td className="py-4 px-4">166 W/m</td>
                                        <td className="py-4 px-4">128 W/m</td>
                                        <td className="py-4 px-4">92 W/m</td>
                                        <td className="py-4 px-4">57 W/m</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="py-4 px-4 font-bold">Torus BT (195mm)</td>
                                        <td className="py-4 px-4">188 W/m</td>
                                        <td className="py-4 px-4">145 W/m</td>
                                        <td className="py-4 px-4">104 W/m</td>
                                        <td className="py-4 px-4">64 W/m</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-sm font-semibold text-dh-dark bg-dh-grey-light p-4 rounded-lg border-l-4 border-dh-red block">
                            Note: The Torus profile provides the highest surface area and therefore the highest output—the recommended profile for low temperature (heat pump) operation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-dh-grey-light rounded-2xl p-8 border border-black/5">
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">First Fix</span>
                            <h2 className="text-xl font-bold text-dh-dark mb-4">Pipework Templates</h2>
                            <p className="text-dh-grey mb-6">
                                ThermaSkirt requires 15mm flow and return tails. These must be brought out of the wall at specific centers corresponding to the chosen profile.
                            </p>
                            <ul className="space-y-3 font-mono text-sm text-dh-dark mb-6">
                                <li className="flex justify-between border-b border-black/10 pb-2">
                                    <span>Urban Lm Emitter</span>
                                    <span>24mm & 60mm From FFL</span>
                                </li>
                                <li className="flex justify-between border-b border-black/10 pb-2">
                                    <span>Deco/Torus Emitters</span>
                                    <span>40mm & 76mm From FFL</span>
                                </li>
                                <li className="flex justify-between pb-2">
                                    <span>Pipe Centers (Spacing)</span>
                                    <span>36mm apart (vertical)</span>
                                </li>
                            </ul>
                            <p className="text-sm text-dh-red font-medium">Download the plastic first-fix mounting card template from Trade Resources.</p>
                        </div>

                        <div className="bg-dh-grey-light rounded-2xl p-8 border border-black/5">
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Connection</span>
                            <h2 className="text-xl font-bold text-dh-dark mb-4">Push-Fit Coupling</h2>
                            <p className="text-dh-grey mb-6">
                                Integrated feed and return pipes feature a twin-tube design running the length of the extrusion. Lengths are joined in series up to a maximum run length before requiring a manifold split.
                            </p>
                            <ul className="space-y-3 font-mono text-sm text-dh-dark">
                                <li className="flex justify-between border-b border-black/10 pb-2">
                                    <span>Connection Type</span>
                                    <span>Multi-seal push-fit</span>
                                </li>
                                <li className="flex justify-between border-b border-black/10 pb-2">
                                    <span>Max run Length (15mm)</span>
                                    <span>c. 15-20 Linear Metres</span>
                                </li>
                                <li className="flex justify-between pb-2">
                                    <span>Manifold Requirement</span>
                                    <span>If room heating load exceeds max run kw capacity</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-dh-dark text-white rounded-2xl p-8 lg:p-12 mb-16">
                        <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Cutting & Waste</span>
                        <h2 className="text-2xl font-bold mb-6">Optimising The Cut</h2>
                        <p className="text-gray-300 mb-8">
                            ThermaSkirt is supplied in standard stock lengths. To maintain profit margins, it is critical to plan the cutting list to minimize offcut waste. The system utilizes slide-on corner covers, meaning your cuts do not need to be 45-degree miters.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                            <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                                <span className="block text-3xl font-bold text-dh-red mb-2">90°</span>
                                <span className="text-sm text-gray-400 font-mono">Straight Cuts</span>
                            </div>
                            <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                                <span className="block text-3xl font-bold text-dh-red mb-2">25mm</span>
                                <span className="text-sm text-gray-400 font-mono">Corner Tolerance</span>
                            </div>
                            <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                                <span className="block text-3xl font-bold text-dh-red mb-2">NF Metal</span>
                                <span className="text-sm text-gray-400 font-mono">Specialist Blade</span>
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
                heading="Get a Trade Quote"
                description="Submit your room dimensions or heat loss schedules to our technical team for a fully quantified component list and trade price."
                primaryCTA="Submit Schedule"
                primaryCTALink="/trade/add2rad/quoting-for-add2rad"
                secondaryCTA="Find a Merchant"
                secondaryCTALink="/trade/merchants/find-a-branch"
            />
        </main>
    );
}
