import SubHubHero from '@/components/server/SubHubHero';
import AudienceRoutingGrid from '@/components/server/AudienceRoutingGrid';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Registered Installer Programme | DiscreteHeat',
    description: 'Join the ThermaSkirt registered installer network to receive direct homeowner leads, access trade pricing, and unlock premium rewards.',
};

const installerLinks = [
    {
        title: "Register as an Installer",
        description: "Sign up to join our national network of approved ThermaSkirt installers.",
        href: "/trade/installer-programme/register",
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1080",
    },
    {
        title: "Benefits & Rewards",
        description: "Earn points on every metre installed. Unlock branded uniform, tools, and priority support.",
        href: "/trade/installer-programme/benefits",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1080",
    },
    {
        title: "Lead Referral System",
        description: "How we distribute pre-qualified enquiries to active installers in their local postcode area.",
        href: "/trade/installer-programme/lead-referral",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080",
    },
    {
        title: "Training Academy",
        description: "Book an in-person session at our Manchester HQ or complete our online certification.",
        href: "/trade/installer-programme/training",
        image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=1080",
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
                    imageSrc="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1920"
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
