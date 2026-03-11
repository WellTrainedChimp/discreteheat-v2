import SubHubHero from '@/components/server/SubHubHero';
import AudienceRoutingGrid from '@/components/server/AudienceRoutingGrid';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Add2Rad Trade Hub | DiscreteHeat',
    description: 'Technical resources and quoting guides for installing the Add2Rad heat pump retrofit module.',
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=9567dbe1-3e38-4b02-abff-ef9cd35115ef', width: 1200, height: 630, alt: 'Add2Rad Trade Hub | DiscreteHeat' }],
    },
};

const add2radLinks = [
    {
        title: "The Add2Rad Method",
        description: "How to use ThermaSkirt to reduce flow temperatures without changing pipework.",
        href: "/trade/add2rad/the-method",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=78462530-72ea-4156-bae5-ed617dd9d65f",
    },
    {
        title: "Heat Pump Installer Guide",
        description: "Technical instructions for adding the module in series with radiators.",
        href: "/trade/add2rad/heat-pump-installer-guide",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=a9380b91-7438-4ba0-b0b6-a365a4bcd925",
    },
    {
        title: "Quoting for Add2Rad",
        description: "Submit room dimensions via the portal for a fully quantified component estimate.",
        href: "/trade/add2rad/quoting-for-add2rad",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=c699edc3-f10e-40fc-89ba-c936d1a1f75d",
    },
    {
        title: "Flow Temp Calculator",
        description: "Calculate expected flow temperatures before and after adding Add2Rad.",
        href: "/trade/add2rad/flow-temperature-calculator",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=16027df0-9209-4f6f-b0e6-87a7e41c8875",
    },
    {
        title: "SHDF & Social Housing",
        description: "Compliance packs and carbon reduction forecasts for Social Housing Decarbonisation Fund bids.",
        href: "/trade/add2rad/shdf-and-social-housing",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=988cff79-37a3-45fa-9a3d-aef77c978702",
    },
    {
        title: "Supplier & OEM Enquiries",
        description: "Information for heat pump manufacturers and national merchants looking to bundle Add2Rad.",
        href: "/trade/add2rad/supplier-and-oem-enquiries",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=4998bad3-94eb-4715-8c47-7ae30f4fb3eb",
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
                    imageSrc="https://www.discreteheat.com/MediaHandler.ashx?id=9567dbe1-3e38-4b02-abff-ef9cd35115ef"
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
