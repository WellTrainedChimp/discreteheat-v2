import SubHubHero from '@/components/server/SubHubHero';
import CTABanner from '@/components/blocks/CTABanner';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';

export const metadata = {
    title: 'Trade Accessories & Components | DiscreteHeat',
    description: 'Installation components, push fit trims, manifolds, and dedicated toolings for Trade installers.',
};

const internalLinks = [
    {
        title: "Installation Manuals",
        description: "Step-by-step PDF guides for all ThermaSkirt profiling and corners.",
        href: "/trade/resources/installation-manuals",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1080",
    },
    {
        title: "Installer Benefits",
        description: "Earn points to redeem on high-end toolings and components.",
        href: "/trade/installer-programme/benefits",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1080",
    }
];

export default function TradeAccessoriesPage() {
    return (
        <main className="min-h-screen bg-white">
            <SubHubHero
                title="Accessories & Components"
                badge="Everything to Finish the Job"
                description="A complete ecosystem of trims, connectors, and tooling specifically developed to make installing ThermaSkirt fast, reliable, and aesthetically perfect."
                imageSrc="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=1920"
            />

            <section className="py-24 px-6 lg:px-12 bg-white selection:bg-dh-red/20 selection:text-dh-red">
                <div className="max-w-5xl mx-auto">

                    <div className="bg-white border-2 border-black/10 rounded-2xl p-8 lg:p-12 mb-16">
                        <h2 className="text-2xl font-bold text-dh-dark mb-8 block pb-4 border-b border-black/10">Trims & Connectors</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg font-bold text-dh-dark mb-2">Push-Fit Connectors</h3>
                                <p className="text-dh-grey text-sm mb-4">Proprietary o-ring seal connectors that bridge the twin-tube extrusion gaps. Designed to withstand 10 bar pressure testing without weeping.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-dh-dark mb-2">Internal/External Corner Covers</h3>
                                <p className="text-dh-grey text-sm mb-4">Slide-on metal or heavy-duty polymer caps that conceal the 90-degree square cuts, ensuring mitres do not need to be structurally perfect.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-dh-dark mb-2">Up-and-Over Kits (Doorways)</h3>
                                <p className="text-dh-grey text-sm mb-4">Kits designed to bridge door architraves cleanly without digging deep floor channels.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-dh-dark mb-2">End Caps & Returns</h3>
                                <p className="text-dh-grey text-sm mb-4">Left and right blanking caps to terminate the skirting profile cleanly at doorways and architraves.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-dh-grey-light border-2 border-black/5 rounded-2xl p-8 lg:p-12 mb-16">
                        <h2 className="text-2xl font-bold text-dh-dark mb-8 block pb-4 border-b border-black/10">Controls & Manifolds</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg font-bold text-dh-dark mb-2">2 to 8 Port Manifolds</h3>
                                <p className="text-dh-grey text-sm mb-4">High-flow brass or stainless steel manifolds used for breaking down large flow zones into smaller, controllable branch loops (essential for large open-plan rooms).</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-dh-dark mb-2">Wireless Thermostats</h3>
                                <p className="text-dh-grey text-sm mb-4">Pre-paired RF stat transmitters and flush-mount receivers specifically calibrated for radiant skirt performance lag/lead times.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-dh-dark mb-2">TRV Kits (Add2Rad Only)</h3>
                                <p className="text-dh-grey text-sm mb-4">Specialist thermostatic radiator valves with compact profiles allowing the Add2Rad system to sit flush.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-dh-dark mb-2">Actuators</h3>
                                <p className="text-dh-grey text-sm mb-4">230V or 24V thermal actuators for zone control via the manifold heads.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-dh-dark text-white rounded-2xl p-8 lg:p-12 mb-16">
                        <h2 className="text-2xl font-bold mb-8 block pb-4 border-b border-white/20">Specialist Tooling</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white/10 p-6 rounded-xl border border-white/10">
                                <h3 className="text-lg font-bold mb-2">Non-Ferrous Blade</h3>
                                <p className="text-gray-400 text-sm">Essential for clean cuts. A high-toothed tungsten carbide blade designed specifically for our extruded aluminium profile to prevent burring and snagging.</p>
                            </div>
                            <div className="bg-white/10 p-6 rounded-xl border border-white/10">
                                <h3 className="text-lg font-bold mb-2">Silicon Lubricant</h3>
                                <p className="text-gray-400 text-sm">Spray applied to the push-fit connectors to ensure smooth joint sliding and avoid pinching the internal EPDM o-rings.</p>
                            </div>
                            <div className="bg-white/10 p-6 rounded-xl border border-white/10">
                                <h3 className="text-lg font-bold mb-2">Deburring Tool / File</h3>
                                <p className="text-gray-400 text-sm">Vital for removing internal sharp edges on the cut twin-tubes before inserting push-fit connectors to prevent o-ring slicing.</p>
                            </div>
                            <div className="bg-white/10 p-6 rounded-xl border border-white/10">
                                <h3 className="text-lg font-bold mb-2">First Fix Templates</h3>
                                <p className="text-gray-400 text-sm">Plastic/card wall brackets that guarantee the 15mm copper or plastic tails are set exactly at the correct centers during 1st fix phase.</p>
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
                heading="Need Tops Ups?"
                description="Registered installers can order corners, joiners and blades directly through the trade portal with next-day delivery."
                primaryCTA="Trade Portal Login"
                primaryCTALink="/trade/merchants/open-a-trade-account"
                secondaryCTA="Find a Merchant"
                secondaryCTALink="/trade/merchants/find-a-branch"
            />
        </main>
    );
}
