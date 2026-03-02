import SubHubHero from '@/components/server/SubHubHero';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';

export const metadata = {
    title: 'Installation Instructions | DiscreteHeat Trade',
    description: 'Download PDF installation manuals for ThermaSkirt H2O, Electric, Add2Rad, and manifolds.',
};

const internalLinks = [
    {
        title: "Video Library",
        description: "Watch our master installers demonstrate corner cutting and manifold plumbing.",
        href: "/trade/resources/video-library",
        image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=1080",
    },
    {
        title: "Technical Data Sheets",
        description: "Dimensioned drawings, component specifications, and CIBSE output tables.",
        href: "/trade/resources/technical-data-sheets",
        image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1080",
    }
];

export default function InstallationInstructionsPage() {
    return (
        <main className="min-h-screen bg-white">
            <SubHubHero
                title="Installation Instructions"
                badge="Technical Manuals"
                description="Download our comprehensive, step-by-step PDF guides covering the cutting, fitting, plumbing, and testing of all ThermaSkirt systems."
                imageSrc="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1920"
            />

            <section className="py-24 px-6 lg:px-12 bg-white selection:bg-dh-red/20 selection:text-dh-red">
                <div className="max-w-5xl mx-auto">

                    <div className="space-y-12">
                        {/* Section 1 */}
                        <div>
                            <h2 className="text-2xl font-bold text-dh-dark mb-6 border-b border-black/10 pb-4">Core Systems (Wet)</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <a href="#" className="flex items-center gap-4 p-4 border border-dh-grey-light rounded-xl hover:bg-gray-50 hover:border-dh-red/50 transition-all group">
                                    <div className="w-12 h-12 bg-dh-red/10 text-dh-red rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-dh-red group-hover:text-white transition-colors">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-dh-dark">Primary Installation Manual (All Wet Profiles)</h3>
                                        <p className="text-sm text-dh-grey">Cutting, mounting, and connecting Urban, Deco, and Vintage.</p>
                                    </div>
                                </a>
                                <a href="#" className="flex items-center gap-4 p-4 border border-dh-grey-light rounded-xl hover:bg-gray-50 hover:border-dh-red/50 transition-all group">
                                    <div className="w-12 h-12 bg-dh-red/10 text-dh-red rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-dh-red group-hover:text-white transition-colors">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-dh-dark">ThermaSkirt EasyClean Installation Guide</h3>
                                        <p className="text-sm text-dh-grey">Healthcare/LST specific fitting instructions and sealing.</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div>
                            <h2 className="text-2xl font-bold text-dh-dark mb-6 border-b border-black/10 pb-4">Electric Systems</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <a href="#" className="flex items-center gap-4 p-4 border border-dh-grey-light rounded-xl hover:bg-gray-50 hover:border-dh-red/50 transition-all group">
                                    <div className="w-12 h-12 bg-dh-red/10 text-dh-red rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-dh-red group-hover:text-white transition-colors">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-dh-dark">ThermaSkirt Electric (Therma-E) Manual</h3>
                                        <p className="text-sm text-dh-grey">Wiring diagrams, cable management, and thermostat linking.</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div>
                            <h2 className="text-2xl font-bold text-dh-dark mb-6 border-b border-black/10 pb-4">Add2Rad & Manifolds</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <a href="#" className="flex items-center gap-4 p-4 border border-dh-grey-light rounded-xl hover:bg-gray-50 hover:border-dh-red/50 transition-all group">
                                    <div className="w-12 h-12 bg-dh-red/10 text-dh-red rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-dh-red group-hover:text-white transition-colors">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-dh-dark">The Add2Rad Installation Guide</h3>
                                        <p className="text-sm text-dh-grey">Series plumbing diagrams and TRV bypass block orientation.</p>
                                    </div>
                                </a>
                                <a href="#" className="flex items-center gap-4 p-4 border border-dh-grey-light rounded-xl hover:bg-gray-50 hover:border-dh-red/50 transition-all group">
                                    <div className="w-12 h-12 bg-dh-red/10 text-dh-red rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-dh-red group-hover:text-white transition-colors">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-dh-dark">DiscreteHeat Manifold Setup manual</h3>
                                        <p className="text-sm text-dh-grey">Actuator wiring, flow meter balancing, and system filling.</p>
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
