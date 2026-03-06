import SubHubHero from '@/components/server/SubHubHero';
import AudienceRoutingGrid from '@/components/server/AudienceRoutingGrid';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Merchants & Distributors Trade Hub | DiscreteHeat',
    description: 'Information for plumbing merchants and national distributors on stocking ThermaSkirt, opening trade accounts, and accessing marketing support.',
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=94a221fb-c3e2-4ea5-8e49-ab0b223dba6b', width: 1200, height: 630, alt: 'Merchants & Distributors Trade Hub | DiscreteHeat' }],
    },
};

const merchantLinks = [
    {
        title: "Open a Trade Account",
        description: "Apply for a credit account to access wholesale pricing, Next Day delivery, and dedicated account management.",
        href: "/trade/merchants/open-a-trade-account",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=94a221fb-c3e2-4ea5-8e49-ab0b223dba6b",
    },
    {
        title: "Find a Branch",
        description: "Search our network of over 400 national and independent merchant stockists.",
        href: "/trade/merchants/find-a-branch",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=be1541f1-aaa6-4386-bf9e-c0076bc5e27d",
    },
    {
        title: "Marketing Materials",
        description: "Request POS displays, counter POS, brochures, and digital assets for your branch and social media.",
        href: "/trade/merchants/marketing-materials",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=6a652cac-0afb-459f-b8e3-82b3b5fa4ff0",
    }
];

export default function TradeMerchantsHub() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red">
                <SubHubHero
                    title="Merchants & Distributors"
                    badge="Wholesale Network"
                    description="Partner with the UK's fastest-growing heating manufacturer. We provide extensive support, high margins, and dedicated point-of-sale materials for our network of independent and national plumbing merchants."
                    imageSrc="https://www.discreteheat.com/MediaHandler.ashx?id=94a221fb-c3e2-4ea5-8e49-ab0b223dba6b"
                />

                <section className="py-24 px-6 lg:px-12 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="max-w-3xl mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-dh-dark mb-6 tracking-tight">
                                Stocking ThermaSkirt
                            </h2>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                Whether you&apos;re an independent branch looking to offer a premium alternative to standard radiators, or a national distributor requiring EDI integration and volume pricing, our trade team is structured to support you.
                            </p>
                        </div>

                        <AudienceRoutingGrid cards={merchantLinks} />
                    </div>
                </section>
            </main>
        </>
    );
}
