import SubHubHero from '@/components/server/SubHubHero';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import { Building2, PackageCheck, HeadphonesIcon } from 'lucide-react';

export const metadata = {
    title: 'Open a Trade Account | DiscreteHeat',
    description: 'Apply for a DiscreteHeat wholesale trade account for preferential pricing, 30-day terms, and dedicated account support.',
};

const internalLinks = [
    {
        title: "Marketing Materials",
        description: "Request POS displays, counter POS, brochures, and digital assets.",
        href: "/trade/merchants/marketing-materials",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1080",
    },
    {
        title: "Supplier & OEM Enquiries",
        description: "Information for heat pump manufacturers and national merchants.",
        href: "/trade/add2rad/supplier-and-oem-enquiries",
        image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=1080",
    }
];

export default function OpenTradeAccountPage() {
    return (
        <main className="min-h-screen bg-white">
            <SubHubHero
                title="Open a Trade Account"
                badge="Wholesale Partners"
                description="Access deep trade discounts, 30-day credit terms, and direct online ordering for all ThermaSkirt systems and components."
                imageSrc="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&q=80&w=1920"
            />

            <section className="py-24 px-6 lg:px-12 bg-white selection:bg-dh-red/20 selection:text-dh-red">
                <div className="max-w-5xl mx-auto">

                    <div className="bg-dh-grey-light rounded-2xl p-8 lg:p-12 border border-black/5 mb-16">
                        <h2 className="text-2xl font-bold text-dh-dark mb-8 text-center">Why Partner With Us?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-xl border border-black/5 text-center shadow-sm">
                                <div className="w-12 h-12 bg-dh-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Building2 className="w-6 h-6 text-dh-red" />
                                </div>
                                <h3 className="font-bold text-dh-dark mb-2">30-Day Credit Facilty</h3>
                                <p className="text-sm text-dh-grey">Flexible payment terms directly from the manufacturer to help manage your branch cash flow.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-black/5 text-center shadow-sm">
                                <div className="w-12 h-12 bg-dh-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <PackageCheck className="w-6 h-6 text-dh-red" />
                                </div>
                                <h3 className="font-bold text-dh-dark mb-2">Next Day Delivery</h3>
                                <p className="text-sm text-dh-grey">Stocked items ordered before 2 PM are dispatched for next working day delivery directly to your branch or site.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-black/5 text-center shadow-sm">
                                <div className="w-12 h-12 bg-dh-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <HeadphonesIcon className="w-6 h-6 text-dh-red" />
                                </div>
                                <h3 className="font-bold text-dh-dark mb-2">Dedicated Rep</h3>
                                <p className="text-sm text-dh-grey">A designated regional account manager to handle your pricing tiers, branch training, and returns.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white border-2 border-black/10 rounded-2xl p-8 lg:p-12">
                        <h2 className="text-2xl font-bold text-dh-dark mb-6">Trade Account Application</h2>
                        <p className="text-dh-grey mb-8">
                            Please complete the form below. Our accounts team will review your application and process the necessary credit checks within 24-48 hours. This application is for merchants and distributors only. Installers should use the <a href="/trade/installer-programme/register" className="text-dh-red font-medium hover:underline">Installer Network portal</a>.
                        </p>

                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2 border-b border-black/10 pb-4 mb-2">
                                <h3 className="text-lg font-bold text-dh-dark">Company Information</h3>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-dh-dark mb-2">Company Name</label>
                                <input type="text" className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-dh-red outline-none" placeholder="e.g. City Plumbing Supplies" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-dh-dark mb-2">Trading Name (if different)</label>
                                <input type="text" className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-dh-red outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-dh-dark mb-2">Company Registration Number</label>
                                <input type="text" className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-dh-red outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-dh-dark mb-2">VAT Registration Number</label>
                                <input type="text" className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-dh-red outline-none" />
                            </div>

                            <div className="md:col-span-2 border-b border-black/10 pb-4 mt-4 mb-2">
                                <h3 className="text-lg font-bold text-dh-dark">Primary Contact</h3>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-dh-dark mb-2">Contact Name</label>
                                <input type="text" className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-dh-red outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-dh-dark mb-2">Job Title</label>
                                <input type="text" className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-dh-red outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-dh-dark mb-2">Email Address</label>
                                <input type="email" className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-dh-red outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-dh-dark mb-2">Phone Number</label>
                                <input type="tel" className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-dh-red outline-none" />
                            </div>

                            <div className="md:col-span-2 border-b border-black/10 pb-4 mt-4 mb-2">
                                <h3 className="text-lg font-bold text-dh-dark">Branch Details</h3>
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-semibold text-dh-dark mb-2">Registered Address</label>
                                <input type="text" className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-dh-red outline-none mb-3" placeholder="Address Line 1" />
                                <div className="grid grid-cols-2 gap-3">
                                    <input type="text" className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-dh-red outline-none" placeholder="City" />
                                    <input type="text" className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-dh-red outline-none" placeholder="Postcode" />
                                </div>
                            </div>
                            <div className="md:col-span-2 flex items-center gap-3 mt-4">
                                <input type="checkbox" id="terms" className="w-5 h-5 text-dh-red rounded focus:ring-dh-red cursor-pointer" />
                                <label htmlFor="terms" className="text-sm text-dh-grey cursor-pointer">I authorize DiscreteHeat to perform a standard credit check for the purpose of opening a 30-day account.</label>
                            </div>

                            <div className="md:col-span-2 mt-6">
                                <button type="button" className="w-full md:w-auto bg-dh-red hover:bg-dh-red-dark text-white font-bold py-4 px-12 rounded-lg transition-all shadow-[0_4px_18px_rgba(210,35,42,0.30)] hover:shadow-[0_6px_24px_rgba(210,35,42,0.40)]">
                                    Submit Trade Application
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </section>

            <ExploreCategorySection
                id="related"
                heading="Merchant Resources"
                description="Explore support tools for your branch."
                tiles={internalLinks}
            />
        </main>
    );
}
