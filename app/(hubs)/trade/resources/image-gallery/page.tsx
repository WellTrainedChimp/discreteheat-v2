import SubHubHero from '@/components/server/SubHubHero';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';

export const metadata = {
    title: 'Image Gallery | DiscreteHeat Trade',
    description: 'Download high-resolution ThermaSkirt installation photos and room sets for use on your trade website and social media.',
};

const internalLinks = [
    {
        title: "Brochures & Literature",
        description: "Download PDFs to accompany these images.",
        href: "/trade/resources/brochures-and-literature",
        image: "https://images.unsplash.com/photo-1544715890-71717088b9dd?auto=format&fit=crop&q=80&w=1080",
    },
    {
        title: "Marketing Materials",
        description: "Request physical displays for your showroom.",
        href: "/trade/merchants/marketing-materials",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1080",
    }
];

export default function ImageGalleryPage() {
    return (
        <main className="min-h-screen bg-white">
            <SubHubHero
                title="Image Gallery"
                badge="Media Assets"
                description="Browse and download our library of high-resolution lifestyle photography. Perfect for enhancing your website, quoting packs, and social media feeds."
                imageSrc="https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?auto=format&fit=crop&q=80&w=1920"
            />

            <section className="py-24 px-6 lg:px-12 bg-white selection:bg-dh-red/20 selection:text-dh-red">
                <div className="max-w-6xl mx-auto">

                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-dh-dark mb-2">Lifestyle Photography</h2>
                            <p className="text-dh-grey text-sm">Organised by profile collection.</p>
                        </div>
                        <button className="hidden md:flex items-center gap-2 bg-dh-dark text-white font-bold py-2 px-6 rounded hover:bg-black transition-colors">
                            Download Full Pack (1.2GB)
                        </button>
                    </div>

                    <div className="space-y-16">
                        {/* Urban Profile */}
                        <div>
                            <h3 className="text-xl font-bold text-dh-dark mb-6 border-b border-black/10 pb-2">Urban Profile Installations</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="aspect-square bg-dh-grey-light rounded-xl overflow-hidden group relative cursor-pointer">
                                    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" alt="Urban Profile" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="text-white font-bold text-sm flex items-center gap-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg> Hi-Res</span>
                                    </div>
                                </div>
                                <div className="aspect-square bg-dh-grey-light rounded-xl overflow-hidden group relative cursor-pointer">
                                    <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800" alt="Urban Profile" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="text-white font-bold text-sm flex items-center gap-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg> Hi-Res</span>
                                    </div>
                                </div>
                                <div className="aspect-square bg-dh-grey-light rounded-xl overflow-hidden group relative cursor-pointer">
                                    <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800" alt="Urban Profile" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="text-white font-bold text-sm flex items-center gap-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg> Hi-Res</span>
                                    </div>
                                </div>
                                <div className="aspect-square bg-dh-grey-light rounded-xl overflow-hidden group relative cursor-pointer">
                                    <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800" alt="Urban Profile" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="text-white font-bold text-sm flex items-center gap-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg> Hi-Res</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Deco/Vintage Profile */}
                        <div>
                            <h3 className="text-xl font-bold text-dh-dark mb-6 border-b border-black/10 pb-2">Deco & Vintage Profile Installations</h3>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="aspect-[4/3] bg-dh-grey-light rounded-xl overflow-hidden group relative cursor-pointer">
                                    <img src="https://images.unsplash.com/photo-1600607688969-a5bfcd64bd28?auto=format&fit=crop&q=80&w=800" alt="Deco Profile" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="text-white font-bold text-sm flex items-center gap-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg> Hi-Res</span>
                                    </div>
                                </div>
                                <div className="aspect-[4/3] bg-dh-grey-light rounded-xl overflow-hidden group relative cursor-pointer">
                                    <img src="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&q=80&w=800" alt="Vintage Profile" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="text-white font-bold text-sm flex items-center gap-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg> Hi-Res</span>
                                    </div>
                                </div>
                                <div className="aspect-[4/3] bg-dh-grey-light rounded-xl overflow-hidden group relative cursor-pointer">
                                    <img src="https://images.unsplash.com/photo-1600585154526-990dced4ea0d?auto=format&fit=crop&q=80&w=800" alt="Traditional Room" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="text-white font-bold text-sm flex items-center gap-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg> Hi-Res</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-dh-red/5 border border-dh-red/20 rounded-xl p-6 mt-16 flex items-start gap-4">
                        <svg className="w-6 h-6 text-dh-red shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <p className="text-sm text-dh-dark font-medium leading-relaxed">
                            <strong>Licensing Core Rules:</strong> These images are free for use by registered installers and active merchant accounts. You may not alter the form of the product in the images or use them to promote competing heat emission systems.
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
