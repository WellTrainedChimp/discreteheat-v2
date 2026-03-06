import SubHubHero from '@/components/server/SubHubHero';
import AudienceRoutingGrid from '@/components/server/AudienceRoutingGrid';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Registered Installer Programme | DiscreteHeat',
    description: 'Join the ThermaSkirt registered installer network to receive direct homeowner leads, access trade pricing, and unlock premium rewards.',
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=8e875883-9f9d-468d-9c61-d3da58e23f5f', width: 1200, height: 630, alt: 'Registered Installer Programme | DiscreteHeat' }],
    },
};

const installerLinks = [
    {
        title: "Register as an Installer",
        description: "Sign up to join our national network of approved ThermaSkirt installers.",
        href: "/trade/installer-programme/register",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=8e875883-9f9d-468d-9c61-d3da58e23f5f",
    },
    {
        title: "Benefits & Rewards",
        description: "Earn points on every metre installed. Unlock branded uniform, tools, and priority support.",
        href: "/trade/installer-programme/benefits",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=d935984b-a5c8-431f-af3f-eeb2a19f4b66",
    },
    {
        title: "Lead Referral System",
        description: "How we distribute pre-qualified enquiries to active installers in their local postcode area.",
        href: "/trade/installer-programme/lead-referral",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=660596bd-ec1d-411c-91c5-bd0746641217",
    },
    {
        title: "Training Academy",
        description: "Book an in-person session at our Manchester HQ or complete our online certification.",
        href: "/trade/installer-programme/training",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=cff4020d-4eb2-4e07-b11a-9dedea2de221",
    },
];

export default function InstallerProgrammeHub() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red">
                <SubHubHero
                    title="Installer Programme"
                    badge="Trade Direct"
                    description="Our accredited network connects trained professionals with high-intent homeowner leads. We provide the training, the products, and the customers—you provide the expertise."
                    imageSrc="https://www.discreteheat.com/MediaHandler.ashx?id=8e875883-9f9d-468d-9c61-d3da58e23f5f"
                />

                <section className="py-24 px-6 lg:px-12 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="max-w-3xl mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-dh-dark mb-6 tracking-tight">
                                More Jobs. Better Support.
                            </h2>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt is the fastest-growing skirting board heating system in the UK. We actively refer over 1,500 homeowner leads per month to our registered installers. Join the network to secure your territory, access exclusive trade pricing, and build a more profitable heating business.
                            </p>
                        </div>

                        <AudienceRoutingGrid cards={installerLinks} />
                    </div>
                </section>
            </main>
        </>
    );
}
