import SubHubHero from '@/components/server/SubHubHero';
import AudienceRoutingGrid from '@/components/server/AudienceRoutingGrid';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Trade Resources Hub | DiscreteHeat',
    description: 'Technical downloads, installation guides, data sheets, and troubleshooting resources for ThermaSkirt installers and merchants.',
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=2b832bb1-4da9-4dbd-a547-5c59d1cca18e', width: 1200, height: 630, alt: 'Trade Resources Hub | DiscreteHeat' }],
    },
};

const resourceLinks = [
    {
        title: "Installation Instructions",
        description: "Step-by-step PDF manuals for all ThermaSkirt profiles, manifolds, and the Add2Rad system.",
        href: "/trade/resources/installation-instructions",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=4e57c3f4-83d4-4914-a6bf-28d31595bad1",
    },
    {
        title: "Technical Data Sheets",
        description: "Dimensioned drawings, component specifications, and CIBSE output tables.",
        href: "/trade/resources/technical-data-sheets",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=16027df0-9209-4f6f-b0e6-87a7e41c8875",
    },
    {
        title: "Video Library",
        description: "Watch our master installers demonstrate corner cutting, manifold plumbing, and pressure testing.",
        href: "/trade/resources/video-library",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=14e646d1-52e3-4d30-ad5d-6ebbd9fb1bb1",
    },
    {
        title: "Brochures & Literature",
        description: "Download our latest trade catalog and consumer-facing brochures for your customers.",
        href: "/trade/resources/brochures-and-literature",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=6a652cac-0afb-459f-b8e3-82b3b5fa4ff0",
    },
    {
        title: "Warranty Registration",
        description: "Register your completed installations to activate the 10-year manufacturer's guarantee.",
        href: "/trade/resources/warranty-registration",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=f206172e-f79f-42dc-a7ce-78d4418d492a",
    },
    {
        title: "Troubleshooting & FAQs",
        description: "Quick fixes for common site queries: flow rates, balancing, and paint finishing.",
        href: "/trade/resources/troubleshooting-and-faqs",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=418c5992-0141-4ec8-a119-7161f64e7909",
    },
    {
        title: "Maintenance Guides",
        description: "How to bleed the system, clean the profiles, and remove covers for decorating.",
        href: "/trade/resources/maintenance-guides",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=c8ef6e5f-6676-4063-8100-20443ecc05f8",
    },
    {
        title: "Image Gallery",
        description: "Download high-resolution room sets for your website and social media.",
        href: "/trade/resources/image-gallery",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=b6b35020-a668-4a2a-8072-c8f957bc442b",
    }
];

export default function TradeResourcesHub() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red">
                <SubHubHero
                    title="Trade Resources"
                    badge="Technical Hub"
                    description="The central repository for installing and specifying ThermaSkirt. Access our comprehensive library of technical manuals, video guides, and component data sheets."
                    imageSrc="https://www.discreteheat.com/MediaHandler.ashx?id=2b832bb1-4da9-4dbd-a547-5c59d1cca18e"
                />

                <section className="py-24 px-6 lg:px-12 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="max-w-3xl mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-dh-dark mb-6 tracking-tight">
                                Fit it Right. First Time.
                            </h2>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt is straightforward to install, but it remains a specialized pipework system. By following our technical guides and video tutorials, you ensure a leak-free, high-performance finish that complies with our 10-year warranty requirements.
                            </p>
                        </div>

                        <AudienceRoutingGrid cards={resourceLinks} />
                    </div>
                </section>
            </main>
        </>
    );
}
