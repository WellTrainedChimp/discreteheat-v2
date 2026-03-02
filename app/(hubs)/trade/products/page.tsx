import SubHubHero from '@/components/server/SubHubHero';
import AudienceRoutingGrid from '@/components/server/AudienceRoutingGrid';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Trade Products | DiscreteHeat Installer Hub',
    description: 'Output tables, cutting lists, and installation technical data for the full ThermaSkirt trade product range.',
};

const productLinks = [
    {
        title: "ThermaSkirt H2O",
        description: "Standard residential water-based system. Operating profiles BM2, BM3, and Deco.",
        href: "/trade/products/thermaskirt-h2o",
        image: "https://images.unsplash.com/photo-1621844883401-eb4dacebb2c2?auto=format&fit=crop&q=80&w=1080",
    },
    {
        title: "ThermaSkirt-e",
        description: "Direct acting electric skirting heating. Built-in thermostats and App control.",
        href: "/trade/products/thermaskirt-e",
        image: "https://images.unsplash.com/photo-1544485304-6330ce1bb82f?auto=format&fit=crop&q=80&w=1080",
    },
    {
        title: "EasyClean LST",
        description: "Healthcare and mental health profile. Anti-ligature and low surface temperature compliant.",
        href: "/trade/products/easyclean",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1080",
    },
    {
        title: "ThermaCurve",
        description: "High-level electric radiant coving heater for space-restricted environments.",
        href: "/trade/products/thermacurve",
        image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=1080",
    },
    {
        title: "Add2Rad",
        description: "Heat pump retrofit supplement module. Plumbs directly into existing radiator tails.",
        href: "/trade/add2rad",
        image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1080",
    },
    {
        title: "Accessories & Components",
        description: "Push-fit connectors, corner caps, thresholds, and installation tools.",
        href: "/trade/products/accessories-and-components",
        image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=1080",
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
                    imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920"
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
