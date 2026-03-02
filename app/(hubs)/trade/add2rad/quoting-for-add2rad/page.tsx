import SubHubHero from '@/components/server/SubHubHero';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import { ClipboardList, Calculator, PhoneCall } from 'lucide-react';

export const metadata = {
    title: 'Quoting for Add2Rad | DiscreteHeat Trade',
    description: 'Submit your project details via our portal to receive a fully quantified estimate for ThermaSkirt Add2Rad components.',
};

const internalLinks = [
    {
        title: "Flow Temp Calculator",
        description: "Calculate expected flow temperatures before and after adding Add2Rad.",
        href: "/trade/add2rad/flow-temperature-calculator",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1080",
    },
    {
        title: "Technical Data Sheets",
        description: "Download dimensioned drawings of the Trv Bypass block.",
        href: "/trade/resources/technical-data-sheets",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1080",
    }
];

export default function QuotingForAdd2RadPage() {
    return (
        <main className="min-h-screen bg-white">
            <SubHubHero
                title="Quoting for Add2Rad"
                badge="Project Estimation"
                description="We take the guesswork out of ordering lengths, trims, and specialist TRV blocks. Submit your room dimensions and existing radiator specs to our technical team for a guaranteed parts list."
                imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1920"
            />

            <section className="py-24 px-6 lg:px-12 bg-white selection:bg-dh-red/20 selection:text-dh-red">
                <div className="max-w-4xl mx-auto">

                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-dh-dark mb-6">How The Quoting Process Works</h2>
                        <p className="text-lg text-dh-grey max-w-2xl mx-auto">
                            The Add2Rad system requires specific bypass valves depending on pipe orientation. To ensure you have exactly what you need on site, we provide a free takeoff service for registered trade partners.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative">
                        <div className="absolute top-12 left-1/6 right-1/6 h-0.5 bg-black/5 hidden md:block z-0"></div>

                        <div className="bg-white p-8 rounded-2xl border-2 border-black/10 text-center relative z-10">
                            <div className="w-16 h-16 bg-dh-grey-light rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <ClipboardList className="w-8 h-8 text-dh-red" />
                            </div>
                            <h3 className="text-xl font-bold text-dh-dark mb-3">1. Submit Specs</h3>
                            <p className="text-dh-grey text-sm">Send us the linear meterage of the room&apos;s perimeter, the size of the existing radiator, and confirm the tail pipe size (10mm or 15mm).</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border-2 border-black/10 text-center relative z-10 shadow-lg border-dh-red/20 transform md:-translate-y-2">
                            <div className="w-16 h-16 bg-dh-red rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                                <Calculator className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-dh-dark mb-3">2. We Calculate</h3>
                            <p className="text-dh-grey text-sm">Our technical team calculates the new overall surface area, determines the optimal flow temperature drop, and generates a parts manifest.</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border-2 border-black/10 text-center relative z-10">
                            <div className="w-16 h-16 bg-dh-grey-light rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <PhoneCall className="w-8 h-8 text-dh-red" />
                            </div>
                            <h3 className="text-xl font-bold text-dh-dark mb-3">3. Quotation Issued</h3>
                            <p className="text-dh-grey text-sm">Receive a PDF estimate directly to your inbox, detailing Trade pricing and next-day delivery options. No obligation to purchase.</p>
                        </div>
                    </div>

                    <div className="bg-dh-grey-light rounded-2xl p-8 lg:p-12 border border-black/5 mt-16 text-center">
                        <h2 className="text-2xl font-bold text-dh-dark mb-4">Ready to Quote a Project?</h2>
                        <p className="text-dh-grey mb-8 max-w-xl mx-auto">
                            The quoting portal is restricted to Trade Installer accounts. Login or register to submit your first dimension plan.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="/trade/merchants/open-a-trade-account" className="bg-dh-red text-white font-bold py-3.5 px-8 rounded-lg hover:bg-dh-red-dark transition-colors shadow-sm">
                                Open Trade Account
                            </a>
                            <a href="/trade/add2rad/flow-temperature-calculator" className="bg-white text-dh-dark border-2 border-black/10 font-bold py-3.5 px-8 rounded-lg hover:border-black/20 transition-colors">
                                Try the Calculator First
                            </a>
                        </div>
                    </div>

                </div>
            </section>

            <ExploreCategorySection
                id="related"
                heading="Add2Rad Resources"
                description="Technical specifications and calculating tools."
                tiles={internalLinks}
            />
        </main>
    );
}
