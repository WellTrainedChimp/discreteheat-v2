import SubHubHero from '@/components/server/SubHubHero';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';

export const metadata = {
    title: 'Trade Add2Rad Module | DiscreteHeat',
    description: 'Provide low-temperature, high-volume skirting heating alongside existing radiators for heat pump retrofits without complete pipework overhauls.',
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
        title: "Heat Pump Installer Guide",
        description: "Technical instructions for adding the module in series with radiators.",
        href: "/trade/add2rad/heat-pump-installer-guide",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1080",
    }
];

export default function TradeAdd2RadPage() {
    return (
        <main className="min-h-screen bg-white">
            <SubHubHero
                title="Add2Rad Overview"
                badge="The Heat Pump Retrofit Module"
                description="The Add2Rad module allows installers to increase the surface area of a room's heat emitter by plugging ThermaSkirt directly into the existing radiator tails to run in series."
                imageSrc="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1920"
            />

            <section className="py-24 px-6 lg:px-12 bg-white selection:bg-dh-red/20 selection:text-dh-red">
                <div className="max-w-4xl mx-auto text-center">

                    <h2 className="text-3xl font-bold text-dh-dark mb-6">Dedicated Add2Rad Hub</h2>
                    <p className="text-lg text-dh-grey mb-12 max-w-2xl mx-auto">
                        Because the Add2Rad methodology involves specific heat loss calculations, pump sizing, and grant compliance (such as the Boiler Upgrade Scheme and SHDF), we have built a dedicated sub-hub for it.
                    </p>

                    <a
                        href="/trade/add2rad"
                        className="inline-block bg-dh-red text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-dh-red-dark hover:shadow-lg transition-all"
                    >
                        Enter the Add2Rad Trade Hub
                    </a>
                </div>
            </section>

            <ExploreCategorySection
                id="related"
                heading="Key Add2Rad Resources"
                description="Explore the dedicated tools for heat pump retrofitting."
                tiles={internalLinks}
            />
        </main>
    );
}
