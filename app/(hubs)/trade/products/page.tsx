import SubHubHero from '@/components/server/SubHubHero';
import AudienceRoutingGrid from '@/components/server/AudienceRoutingGrid';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Trade Products | DiscreteHeat Installer Hub',
    description: 'Output tables, cutting lists, and installation technical data for the full ThermaSkirt trade product range.',
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=f283b198-65cc-43da-8ba3-c936fdcc94f1', width: 1200, height: 630, alt: 'Trade Products | DiscreteHeat Installer Hub' }],
    },
};

const productLinks = [
    {
        title: "ThermaSkirt H2O",
        description: "Standard residential water-based system. Operating profiles BM2, BM3, and Deco.",
        href: "/trade/products/thermaskirt-h2o",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=c287107e-ac14-4abc-b282-8676388df56c",
    },
    {
        title: "ThermaSkirt-e",
        description: "Direct acting electric skirting heating. Built-in thermostats and App control.",
        href: "/trade/products/thermaskirt-e",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=7f158087-624d-44eb-8ab7-1c885002c85f",
    },
    {
        title: "EasyClean LST",
        description: "Healthcare and mental health profile. Anti-ligature and low surface temperature compliant.",
        href: "/trade/products/easyclean",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=9a7b40c8-0245-4d26-a04d-72304b92a02f",
    },
    {
        title: "ThermaCurve",
        description: "High-level electric radiant coving heater for space-restricted environments.",
        href: "/trade/products/thermacurve",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=35bab5ca-1acb-49be-bc55-df357606b0b5",
    },
    {
        title: "Add2Rad",
        description: "Heat pump retrofit supplement module. Plumbs directly into existing radiator tails.",
        href: "/trade/add2rad",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=9567dbe1-3e38-4b02-abff-ef9cd35115ef",
    },
    {
        title: "Accessories & Components",
        description: "Push-fit connectors, corner caps, thresholds, and installation tools.",
        href: "/trade/products/accessories-and-components",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=c17fc98f-1d55-491b-9638-72b32eda1d20",
    },
];

export default function TradeProductsHub() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red">
                <SubHubHero
                    title="Trade Products"
                    badge="Technical Specifications"
                    description="Access technical dimensions, output capacities across different flow temperatures, and installation requirements for the full DiscreteHeat product range."
                    imageSrc="https://www.discreteheat.com/MediaHandler.ashx?id=f283b198-65cc-43da-8ba3-c936fdcc94f1"
                />

                <section className="py-24 px-6 lg:px-12 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="max-w-3xl mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-dh-dark mb-6 tracking-tight">
                                Select a System
                            </h2>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                Select a product line below to view its specific trade-focused data, including output tables per metre, typical cutting lists, and profile dimensions for first-fix planning.
                            </p>
                        </div>

                        <AudienceRoutingGrid cards={productLinks} />
                    </div>
                </section>
            </main>
        </>
    );
}
