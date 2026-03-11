import SubHubHero from '@/components/server/SubHubHero';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';

export const metadata = {
    title: 'Technical Data Sheets | DiscreteHeat Trade',
    description: 'Download dimensioned drawings, CIBSE output tables, and component specifications for ThermaSkirt products.',
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=16027df0-9209-4f6f-b0e6-87a7e41c8875', width: 1200, height: 630, alt: 'Technical Data Sheets | DiscreteHeat Trade' }],
    },
};

const internalLinks = [
    {
        title: "Installation Instructions",
        description: "Step-by-step PDF manuals for all ThermaSkirt profiles.",
        href: "/trade/resources/installation-instructions",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=4e57c3f4-83d4-4914-a6bf-28d31595bad1",
    },
    {
        title: "Video Library",
        description: "Watch our master installers demonstrate corner cutting and manifold plumbing.",
        href: "/trade/resources/video-library",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=14e646d1-52e3-4d30-ad5d-6ebbd9fb1bb1",
    }
];

export default function TechnicalDataSheetsPage() {
    return (
        <main className="min-h-screen bg-white">
            <SubHubHero
                title="Technical Data Sheets"
                badge="Component Specs"
                description="Access our database of dimensioned drawings, performance testing certificates, and part specifications for your site files."
                imageSrc="https://www.discreteheat.com/MediaHandler.ashx?id=16027df0-9209-4f6f-b0e6-87a7e41c8875"
            />

            <section className="py-24 px-6 lg:px-12 bg-white selection:bg-dh-red/20 selection:text-dh-red">
                <div className="max-w-5xl mx-auto">

                    <div className="bg-dh-dark text-white p-8 lg:p-10 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-8 mb-16 shadow-lg">
                        <div>
                            <h2 className="text-2xl font-bold mb-3">Looking for Specifier/BIM Data?</h2>
                            <p className="text-gray-300 text-sm max-w-xl">
                                If you require BIM/Revit models, NBS specification clauses, or full independent BSRIA test reports, please visit our dedicated Architects & Specifiers portal.
                            </p>
                        </div>
                        <a href="/specifiers/technical-data" className="bg-white text-dh-dark font-bold py-3 px-6 rounded hover:bg-gray-100 transition-colors whitespace-nowrap">
                            Go to Specifiers Portal
                        </a>
                    </div>

                    <div className="space-y-12">
                        {/* Section 1 */}
                        <div>
                            <h2 className="text-2xl font-bold text-dh-dark mb-6 border-b border-black/10 pb-4">Performance Data (BSRIA Tested)</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <a href="#" className="flex items-center gap-4 p-4 border border-dh-grey-light rounded-xl hover:bg-gray-50 hover:border-dh-red/50 transition-all group">
                                    <div className="w-12 h-12 bg-dh-red/10 text-dh-red rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-dh-red group-hover:text-white transition-colors">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-dh-dark">Delta T Output Tables</h3>
                                        <p className="text-sm text-dh-grey">Wattage per linear metre across ΔT20 to ΔT50.</p>
                                    </div>
                                </a>
                                <a href="#" className="flex items-center gap-4 p-4 border border-dh-grey-light rounded-xl hover:bg-gray-50 hover:border-dh-red/50 transition-all group">
                                    <div className="w-12 h-12 bg-dh-red/10 text-dh-red rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-dh-red group-hover:text-white transition-colors">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-dh-dark">Pipe Sizing & Pressure Drop (CIBSE)</h3>
                                        <p className="text-sm text-dh-grey">Hydraulic resistance data for manifold circuit design.</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div>
                            <h2 className="text-2xl font-bold text-dh-dark mb-6 border-b border-black/10 pb-4">Dimensioned Drawings</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <a href="#" className="flex items-center gap-4 p-4 border border-dh-grey-light rounded-xl hover:bg-gray-50 hover:border-dh-red/50 transition-all group">
                                    <div className="w-12 h-12 bg-dh-red/10 text-dh-red rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-dh-red group-hover:text-white transition-colors">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-dh-dark">Urban / Deco / Vintage Profiles (PDF)</h3>
                                        <p className="text-sm text-dh-grey">Cross-sections displaying pipe centres and wall projection.</p>
                                    </div>
                                </a>
                                <a href="#" className="flex items-center gap-4 p-4 border border-dh-grey-light rounded-xl hover:bg-gray-50 hover:border-dh-red/50 transition-all group">
                                    <div className="w-12 h-12 bg-dh-red/10 text-dh-red rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-dh-red group-hover:text-white transition-colors">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-dh-dark">Add2Rad TRV Block Dimensions (PDF)</h3>
                                        <p className="text-sm text-dh-grey">Clearance requirements for the bypass valve assembly.</p>
                                    </div>
                                </a>
                            </div>
                        </div>
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
