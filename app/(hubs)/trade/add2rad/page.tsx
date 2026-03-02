import SubHubHero from '@/components/server/SubHubHero';
import AudienceRoutingGrid from '@/components/server/AudienceRoutingGrid';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Add2Rad Trade Hub | DiscreteHeat',
    description: 'Technical resources and quoting guides for installing the Add2Rad heat pump retrofit module.',
};

const add2radLinks = [
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
    },
    {
        title: "Flow Temp Calculator",
        description: "Calculate expected flow temperatures before and after adding Add2Rad.",
        href: "/trade/add2rad/flow-temperature-calculator",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1080",
    },
    {
        title: "SHDF & Social Housing",
        description: "Compliance packs and carbon reduction forecasts for Social Housing Decarbonisation Fund bids.",
        href: "/trade/add2rad/shdf-and-social-housing",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1080",
    },
    {
        title: "Supplier & OEM Enquiries",
        description: "Information for heat pump manufacturers and national merchants looking to bundle Add2Rad.",
        href: "/trade/add2rad/supplier-and-oem-enquiries",
        image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=1080",
    },
];

export default function TradeAdd2RadHub() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red">
                <SubHubHero
                    title="Add2Rad Hub"
                    badge="Heat Pump Integration"
                    description="The dedicated resource center for installers, specifiers, and OEMs utilizing the Add2Rad system to bridge the gap between high-temperature radiators and low-temperature heat pumps."
                    imageSrc="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1920"
                />

                <section className="py-24 px-6 lg:px-12 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="max-w-3xl mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-dh-dark mb-6 tracking-tight">
                                Explore Add2Rad Resources
                            </h2>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                Access technical guides, the flow temperature calculator, and dedicated quoting tools for the Add2Rad suite of products.
                            </p>
                        </div>

                        <AudienceRoutingGrid cards={add2radLinks} />
                    </div>
                </section>
            </main>
        </>
    );
}
