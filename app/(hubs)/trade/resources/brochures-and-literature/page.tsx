import SubHubHero from '@/components/server/SubHubHero';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';

export const metadata = {
    title: 'Brochures & Literature | DiscreteHeat Trade',
    description: 'Download ThermaSkirt consumer brochures, trade catalogues, and case studies to help sell the system to your clients.',
};

const internalLinks = [
    {
        title: "Installation Instructions",
        description: "Step-by-step PDF manuals for all ThermaSkirt profiles.",
        href: "/trade/resources/installation-instructions",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1080",
    },
    {
        title: "Technical Data Sheets",
        description: "Dimensioned drawings, component specifications, and CIBSE output tables.",
        href: "/trade/resources/technical-data-sheets",
        image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1080",
    }
];

export default function BrochuresAndLiteraturePage() {
    return (
        <main className="min-h-screen bg-white">
            <SubHubHero
                title="Brochures & Literature"
                badge="Sales Assets"
                description="Equip yourself with the tools to sell ThermaSkirt. Hand over beautiful consumer brochures to homeowners, or use our trade catalog for quick component referencing."
                imageSrc="https://images.unsplash.com/photo-1544715890-71717088b9dd?auto=format&fit=crop&q=80&w=1920"
            />

            <section className="py-24 px-6 lg:px-12 bg-white selection:bg-dh-red/20 selection:text-dh-red">
                <div className="max-w-5xl mx-auto">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Consumer Literature */}
                        <div>
                            <h2 className="text-2xl font-bold text-dh-dark mb-6 border-b border-black/10 pb-4">Homeowner Handouts</h2>
                            <p className="text-sm text-dh-grey mb-6">Designed to help you up-sell ThermaSkirt as a premium alternative to standard radiators on your domestic quotes.</p>

                            <div className="space-y-4">
                                <div className="flex bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                                    <div className="w-32 bg-dh-grey-light flex-shrink-0 flex items-center justify-center border-r border-gray-200">
                                        <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                    </div>
                                    <div className="p-5 flex-grow">
                                        <h3 className="font-bold text-dh-dark mb-1">ThermaSkirt Consumer Brochure</h3>
                                        <p className="text-xs text-dh-grey mb-3">48-page lifestyle guide showing all profiles in home settings.</p>
                                        <button className="text-dh-red text-sm font-bold hover:underline flex items-center gap-1">Download PDF</button>
                                    </div>
                                </div>
                                <div className="flex bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                                    <div className="w-32 bg-dh-grey-light flex-shrink-0 flex items-center justify-center border-r border-gray-200">
                                        <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                    </div>
                                    <div className="p-5 flex-grow">
                                        <h3 className="font-bold text-dh-dark mb-1">Add2Rad Heat Pump Explainer</h3>
                                        <p className="text-xs text-dh-grey mb-3">2-page flyer explaining how ThermaSkirt enables heat pumps without disruption.</p>
                                        <button className="text-dh-red text-sm font-bold hover:underline flex items-center gap-1">Download PDF</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Trade Literature */}
                        <div>
                            <h2 className="text-2xl font-bold text-dh-dark mb-6 border-b border-black/10 pb-4">Trade Catalogues</h2>
                            <p className="text-sm text-dh-grey mb-6">Component indexes and trade price lists for accurate quoting and ordering.</p>

                            <div className="space-y-4">
                                <div className="flex bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                                    <div className="w-32 bg-dh-grey-light flex-shrink-0 flex items-center justify-center border-r border-gray-200">
                                        <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                    </div>
                                    <div className="p-5 flex-grow">
                                        <h3 className="font-bold text-dh-dark mb-1">Full Product Index (2026/2027)</h3>
                                        <p className="text-xs text-dh-grey mb-3">Comprehensive catalog of all profiles, trims, corners, and manifold part codes.</p>
                                        <button className="text-dh-red text-sm font-bold hover:underline flex items-center gap-1">Download PDF</button>
                                    </div>
                                </div>
                                <div className="flex bg-dh-dark text-white rounded-xl overflow-hidden hover:shadow-md transition-shadow shadow-lg">
                                    <div className="w-32 bg-black/20 flex-shrink-0 flex items-center justify-center border-r border-white/10">
                                        <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                    </div>
                                    <div className="p-5 flex-grow items-center flex justify-between">
                                        <div>
                                            <h3 className="font-bold text-white mb-1">Trade Price List</h3>
                                            <p className="text-xs text-gray-400">Log in to view wholesale pricing tiers.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-dh-grey-light border-2 border-black/5 rounded-2xl p-8 lg:p-12 mt-16 text-center">
                        <h2 className="text-2xl font-bold text-dh-dark mb-4">Need Physical Copies?</h2>
                        <p className="text-dh-grey mb-6 max-w-xl mx-auto">
                            If you are a registered installer or a merchant requiring hard copies for your branch, please request a marketing pack delivery.
                        </p>
                        <a href="/trade/merchants/marketing-materials" className="inline-block bg-dh-red text-white py-3 px-6 rounded-lg font-bold hover:bg-dh-red-dark transition-colors shadow-sm">
                            Request Physical Literature
                        </a>
                    </div>

                </div>
            </section>

            <ExploreCategorySection
                id="related"
                heading="Additional Resources"
                description="Explore further technical documentation and guides."
                tiles={internalLinks}
            />
        </main>
    );
}
