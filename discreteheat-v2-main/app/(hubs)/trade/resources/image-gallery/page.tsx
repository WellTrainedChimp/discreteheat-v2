import Image from 'next/image';
import SubHubHero from '@/components/server/SubHubHero';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';

export const metadata = {
    title: 'Image Gallery | DiscreteHeat Trade',
    description: 'Download high-resolution ThermaSkirt installation photos and room sets for use on your trade website and social media.',
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=b6b35020-a668-4a2a-8072-c8f957bc442b', width: 1200, height: 630, alt: 'Image Gallery | DiscreteHeat Trade' }],
    },
};

const internalLinks = [
    {
        title: "Brochures & Literature",
        description: "Download PDFs to accompany these images.",
        href: "/trade/resources/brochures-and-literature",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=6a652cac-0afb-459f-b8e3-82b3b5fa4ff0",
    },
    {
        title: "Marketing Materials",
        description: "Request physical displays for your showroom.",
        href: "/trade/merchants/marketing-materials",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=6a652cac-0afb-459f-b8e3-82b3b5fa4ff0",
    }
];

export default function ImageGalleryPage() {
    return (
        <main className="min-h-screen bg-white">
            <SubHubHero
                title="Image Gallery"
                badge="Media Assets"
                description="Browse and download our library of high-resolution lifestyle photography. Perfect for enhancing your website, quoting packs, and social media feeds."
                imageSrc="https://www.discreteheat.com/MediaHandler.ashx?id=b6b35020-a668-4a2a-8072-c8f957bc442b"
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
                                    <Image src="https://www.discreteheat.com/MediaHandler.ashx?id=2a3a5535-6119-4b26-b66f-263eecc7eb5a" alt="Urban Profile" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="text-white font-bold text-sm flex items-center gap-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg> Hi-Res</span>
                                    </div>
                                </div>
                                <div className="aspect-square bg-dh-grey-light rounded-xl overflow-hidden group relative cursor-pointer">
                                    <Image src="https://www.discreteheat.com/MediaHandler.ashx?id=89b3f691-9bbc-4268-941a-8ba213267301" alt="Urban Profile" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="text-white font-bold text-sm flex items-center gap-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg> Hi-Res</span>
                                    </div>
                                </div>
                                <div className="aspect-square bg-dh-grey-light rounded-xl overflow-hidden group relative cursor-pointer">
                                    <Image src="https://www.discreteheat.com/MediaHandler.ashx?id=1b9a575e-60f1-4319-8c68-aeb033ff130a" alt="Urban Profile" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="text-white font-bold text-sm flex items-center gap-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg> Hi-Res</span>
                                    </div>
                                </div>
                                <div className="aspect-square bg-dh-grey-light rounded-xl overflow-hidden group relative cursor-pointer">
                                    <Image src="https://www.discreteheat.com/MediaHandler.ashx?id=9d650245-84b3-433b-bc74-32223612fdfe" alt="Urban Profile" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
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
                                    <Image src="https://www.discreteheat.com/MediaHandler.ashx?id=328b67ed-7ad0-42ad-87be-2cf17718c48e" alt="Deco Profile" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="text-white font-bold text-sm flex items-center gap-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg> Hi-Res</span>
                                    </div>
                                </div>
                                <div className="aspect-[4/3] bg-dh-grey-light rounded-xl overflow-hidden group relative cursor-pointer">
                                    <Image src="https://www.discreteheat.com/MediaHandler.ashx?id=06143031-5517-4d3a-82c4-ca6d40299523" alt="Vintage Profile" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="text-white font-bold text-sm flex items-center gap-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg> Hi-Res</span>
                                    </div>
                                </div>
                                <div className="aspect-[4/3] bg-dh-grey-light rounded-xl overflow-hidden group relative cursor-pointer">
                                    <Image src="https://www.discreteheat.com/MediaHandler.ashx?id=bb14a53a-1b33-4363-b89a-56d430274cfa" alt="Traditional Room" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
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
