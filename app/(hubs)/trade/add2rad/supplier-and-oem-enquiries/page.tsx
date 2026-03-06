import SubHubHero from '@/components/server/SubHubHero';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';

export const metadata = {
    title: 'Supplier & OEM Enquiries | DiscreteHeat Trade',
    description: 'Partnership information for heat pump manufacturers, national merchants, and mass-market specifiers adopting the Add2Rad system.',
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=4998bad3-94eb-4715-8c47-7ae30f4fb3eb', width: 1200, height: 630, alt: 'Supplier & OEM Enquiries | DiscreteHeat Trade' }],
    },
};

const internalLinks = [
    {
        title: "The Add2Rad Method",
        description: "How to use ThermaSkirt to reduce flow temperatures without changing pipework.",
        href: "/trade/add2rad/the-method",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=78462530-72ea-4156-bae5-ed617dd9d65f",
    },
    {
        title: "Trade Portal",
        description: "Login for existing registered merchants and distributors.",
        href: "/trade/merchants/open-a-trade-account",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=94a221fb-c3e2-4ea5-8e49-ab0b223dba6b",
    },
];

export default function SupplierOEMEnquiriesPage() {
    return (
        <main className="min-h-screen bg-white">
            <SubHubHero
                title="Supplier & OEM Enquiries"
                badge="National Partnerships"
                description="DiscreteHeat works directly with the UK's leading heat pump manufacturers and national plumber's merchants to bundle the Add2Rad solution, removing the primary barrier to heat pump adoption."
                imageSrc="https://www.discreteheat.com/MediaHandler.ashx?id=4998bad3-94eb-4715-8c47-7ae30f4fb3eb"
            />

            <section className="py-24 px-6 lg:px-12 bg-white selection:bg-dh-red/20 selection:text-dh-red">
                <div className="max-w-4xl mx-auto">

                    <div className="border-l-4 border-dh-red pl-6 mb-16">
                        <h2 className="text-2xl font-bold text-dh-dark mb-4">The Boiler Upgrade Strategy</h2>
                        <p className="text-lg text-dh-grey leading-relaxed">
                            For Air Source Heat Pump (ASHP) manufacturers, quoting conversion rates drop drastically when the homeowner is informed their flooring must be destroyed to replace pipework. Add2Rad eliminates this objection. We are seeking strategic alignment with boiler and heat pump OEMs to present a unified, disruption-free retrofit package.
                        </p>
                    </div>

                    <div className="bg-dh-grey-light rounded-2xl p-8 lg:p-12 border border-black/5 mb-16">
                        <h2 className="text-2xl font-bold text-dh-dark mb-8">Partnership Opportunities</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-xl border border-black/5 shadow-sm">
                                <h3 className="text-lg font-bold text-dh-dark mb-2">OEM Bundling</h3>
                                <p className="text-dh-grey text-sm">Integrating Add2Rad sizing tools directly into OEM heat-loss calculating software, allowing installers to specify the entire package concurrently.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-black/5 shadow-sm">
                                <h3 className="text-lg font-bold text-dh-dark mb-2">National Merchants</h3>
                                <p className="text-dh-grey text-sm">We provide pre-packaged Add2Rad &apos;starter kits&apos; including the TRV bypass blocks and standard 3m lengths for immediate counter sales, supported by point-of-sale displays.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-black/5 shadow-sm">
                                <h3 className="text-lg font-bold text-dh-dark mb-2">Training Academy Swaps</h3>
                                <p className="text-dh-grey text-sm">Integrating Add2Rad modules into manufacturer training centers (e.g. Worcester Bosch, Vaillant) to demonstrate low-temp performance to upskilling gas engineers.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-black/5 shadow-sm">
                                <h3 className="text-lg font-bold text-dh-dark mb-2">Energy Provider Frameworks</h3>
                                <p className="text-dh-grey text-sm">Partnering with utility providers executing mass rollout schemes under the ECO4 or Boiler Upgrade Schemes to standardize the retrofit approach.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white border-2 border-black/10 rounded-2xl p-8 lg:p-12 mb-16 text-center">
                        <h2 className="text-2xl font-bold text-dh-dark mb-6">Contact the Commercial Team</h2>
                        <p className="text-dh-grey mb-8 max-w-xl mx-auto">
                            To discuss volume pricing, framework agreements, or training integration, contact our National Accounts desk.
                        </p>
                        <form className="max-w-md mx-auto space-y-4 text-left">
                            <div>
                                <label className="block text-sm font-semibold text-dh-dark mb-2">Organization Name</label>
                                <input type="text" className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-dh-red outline-none" placeholder="OEM or Merchant Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-dh-dark mb-2">Your Role</label>
                                <input type="text" className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-dh-red outline-none" placeholder="e.g. Commercial Director" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-dh-dark mb-2">Professional Email</label>
                                <input type="email" className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-dh-red outline-none" placeholder="name@company.com" />
                            </div>
                            <button type="button" className="w-full bg-dh-dark text-white font-bold py-4 rounded-lg mt-4 hover:bg-black transition-colors">
                                Submit Enquiry
                            </button>
                        </form>
                    </div>

                </div>
            </section>

            <ExploreCategorySection
                id="related"
                heading="Resources"
                description="Explore additional technical and platform resources."
                tiles={internalLinks}
            />
        </main>
    );
}
