import SubHubHero from '@/components/server/SubHubHero';
import AudienceRoutingGrid from '@/components/server/AudienceRoutingGrid';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Trade Resources Hub | DiscreteHeat',
    description: 'Technical downloads, installation guides, data sheets, and troubleshooting resources for ThermaSkirt installers and merchants.',
};

const resourceLinks = [
    {
        title: "Installation Instructions",
        description: "Step-by-step PDF manuals for all ThermaSkirt profiles, manifolds, and the Add2Rad system.",
        href: "/trade/resources/installation-instructions",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1080",
    },
    {
        title: "Technical Data Sheets",
        description: "Dimensioned drawings, component specifications, and CIBSE output tables.",
        href: "/trade/resources/technical-data-sheets",
        image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1080",
    },
    {
        title: "Video Library",
        description: "Watch our master installers demonstrate corner cutting, manifold plumbing, and pressure testing.",
        href: "/trade/resources/video-library",
        image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=1080",
    },
    {
        title: "Brochures & Literature",
        description: "Download our latest trade catalog and consumer-facing brochures for your customers.",
        href: "/trade/resources/brochures-and-literature",
        image: "https://images.unsplash.com/photo-1544715890-71717088b9dd?auto=format&fit=crop&q=80&w=1080",
    },
    {
        title: "Warranty Registration",
        description: "Register your completed installations to activate the 10-year manufacturer's guarantee.",
        href: "/trade/resources/warranty-registration",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66cb85?auto=format&fit=crop&q=80&w=1080",
    },
    {
        title: "Troubleshooting & FAQs",
        description: "Quick fixes for common site queries: flow rates, balancing, and paint finishing.",
        href: "/trade/resources/troubleshooting-and-faqs",
        image: "https://images.unsplash.com/photo-1620608569766-41fcefd2ab26?auto=format&fit=crop&q=80&w=1080",
    },
    {
        title: "Maintenance Guides",
        description: "How to bleed the system, clean the profiles, and remove covers for decorating.",
        href: "/trade/resources/maintenance-guides",
        image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=1080",
    },
    {
        title: "Image Gallery",
        description: "Download high-resolution room sets for your website and social media.",
        href: "/trade/resources/image-gallery",
        image: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?auto=format&fit=crop&q=80&w=1080",
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
                    imageSrc="https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=1920"
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
