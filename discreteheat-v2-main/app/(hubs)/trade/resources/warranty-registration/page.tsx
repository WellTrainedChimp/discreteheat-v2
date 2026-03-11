import SubHubHero from '@/components/server/SubHubHero';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';

export const metadata = {
    title: 'Warranty Registration | DiscreteHeat Trade',
    description: 'Register completed ThermaSkirt installations to activate the 10-year manufacturer warranty for your customers.',
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=f206172e-f79f-42dc-a7ce-78d4418d492a', width: 1200, height: 630, alt: 'Warranty Registration | DiscreteHeat Trade' }],
    },
};

const internalLinks = [
    {
        title: "Installation Instructions",
        description: "Ensure your installation meets the warranty conditions.",
        href: "/trade/resources/installation-instructions",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=4e57c3f4-83d4-4914-a6bf-28d31595bad1",
    },
    {
        title: "Maintenance Guides",
        description: "Share care instructions with the homeowner.",
        href: "/trade/resources/maintenance-guides",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=c8ef6e5f-6676-4063-8100-20443ecc05f8",
    }
];

export default function WarrantyRegistrationPage() {
    return (
        <main className="min-h-screen bg-white">
            <SubHubHero
                title="Warranty Registration"
                badge="10-Year Guarantee"
                description="Protect your customers and your reputation. Register your completed ThermaSkirt installations to activate our comprehensive 10-year manufacturer's warranty against leaks and defects."
                imageSrc="https://www.discreteheat.com/MediaHandler.ashx?id=f206172e-f79f-42dc-a7ce-78d4418d492a"
            />

            <section className="py-24 px-6 lg:px-12 bg-white selection:bg-dh-red/20 selection:text-dh-red">
                <div className="max-w-4xl mx-auto">

                    <div className="bg-white border-2 border-dh-grey-light rounded-2xl p-8 lg:p-12 mb-16 shadow-sm">
                        <div className="flex items-center gap-4 mb-8 pb-6 border-b border-black/10">
                            <div className="w-16 h-16 bg-dh-dark rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-dh-dark">Activate Guarantee</h2>
                                <p className="text-dh-grey text-sm">Register within 30 days of project completion.</p>
                            </div>
                        </div>

                        <form className="space-y-6 max-w-2xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-dh-dark mb-2">Installer/Company Name</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-dh-dark outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-dh-dark mb-2">DiscreteHeat Order Number</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-dh-dark outline-none transition-all" placeholder="e.g. DH12345" />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-semibold text-dh-dark mb-2">Installation Postcode</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-dh-dark outline-none transition-all" />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-semibold text-dh-dark mb-2">Homeowner Email Address (for certificate delivery)</label>
                                    <input type="email" className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-dh-dark outline-none transition-all" />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-semibold text-dh-dark mb-2">Date of System Commissioning</label>
                                    <input type="date" className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-dh-dark outline-none transition-all" />
                                </div>
                            </div>

                            <div className="bg-dh-grey-light p-4 rounded-lg mt-6">
                                <label className="flex items-start gap-3 cursor-pointer">
                                    <input type="checkbox" className="custom-checkbox w-5 h-5 mt-0.5 text-dh-red shrink-0" />
                                    <span className="text-sm text-dh-grey leading-tight">I confirm that the system was installed, flushed, and pressure-tested in full accordance with the appropriate DiscreteHeat installation manual, and that the water treatment meets BS 7593:2019 standards.</span>
                                </label>
                            </div>

                            <button type="button" className="w-full bg-dh-dark hover:bg-black text-white font-bold py-4 rounded-lg transition-colors">
                                Submit Registration
                            </button>
                        </form>
                    </div>

                    <div className="bg-dh-red/5 border-l-4 border-dh-red p-6 rounded-r-xl">
                        <h3 className="font-bold text-dh-dark mb-2">Warranty Conditions Note</h3>
                        <p className="text-sm text-dh-grey leading-relaxed">
                            The 10-year warranty covers the extruded aluminium profiles and push-fit connectors against manufacturing defects and structural leaks. It does not cover damage caused by site negligence, freezing, or failure to properly inhibit the heating system leading to galvanic corrosion. Thermostatic heads and electrical actuators carry standard 2-year warranties.
                        </p>
                    </div>

                </div>
            </section>

            <ExploreCategorySection
                id="related"
                heading="Related Resources"
                description="Explore further support tools."
                tiles={internalLinks}
            />
        </main>
    );
}
