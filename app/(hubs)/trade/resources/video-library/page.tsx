import Image from 'next/image';
import SubHubHero from '@/components/server/SubHubHero';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';

export const metadata = {
    title: 'Trade Video Library | DiscreteHeat',
    description: 'Instructional videos for plumbers covering ThermaSkirt installation, corner cutting, and manifold balancing.',
};

const internalLinks = [
    {
        title: "Installation Instructions",
        description: "Step-by-step PDF manuals for all ThermaSkirt profiles.",
        href: "/trade/resources/installation-instructions",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1080",
    },
    {
        title: "Troubleshooting & FAQs",
        description: "Quick fixes for common site queries: flow rates, balancing, and paint finishing.",
        href: "/trade/resources/troubleshooting-and-faqs",
        image: "https://images.unsplash.com/photo-1620608569766-41fcefd2ab26?auto=format&fit=crop&q=80&w=1080",
    }
];

export default function VideoLibraryPage() {
    return (
        <main className="min-h-screen bg-white">
            <SubHubHero
                title="Video Library"
                badge="Site Tutorials"
                description="Watch our technical team demonstrate best-practice installation techniques. Perfect for brushing up on skills before arriving on site."
                imageSrc="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=1920"
            />

            <section className="py-24 px-6 lg:px-12 bg-white selection:bg-dh-red/20 selection:text-dh-red">
                <div className="max-w-6xl mx-auto">

                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-dh-dark mb-4">Masterclass Series</h2>
                        <p className="text-dh-grey max-w-2xl">Our definitive guide to installing ThermaSkirt H2O. From unboxing to final pressure testing.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                        {/* Video Card 1 */}
                        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group">
                            <div className="aspect-video bg-dh-grey-light relative">
                                <Image src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=600" alt="Room Preparation" fill className="object-cover" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors flex items-center justify-center">
                                    <div className="w-12 h-12 bg-dh-red/90 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                                        <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                                    </div>
                                </div>
                                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[11px] font-bold px-1.5 py-0.5 rounded">04:12</div>
                            </div>
                            <div className="p-5">
                                <h3 className="font-bold text-dh-dark mb-1 group-hover:text-dh-red transition-colors">1. Room Prep & Measurement</h3>
                                <p className="text-sm text-dh-grey">Calculating required metreage and preparing the walls for mounting brackets.</p>
                            </div>
                        </div>

                        {/* Video Card 2 */}
                        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group">
                            <div className="aspect-video bg-dh-grey-light relative">
                                <Image src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600" alt="Cutting Profiles" fill className="object-cover" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors flex items-center justify-center">
                                    <div className="w-12 h-12 bg-dh-red/90 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                                        <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                                    </div>
                                </div>
                                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[11px] font-bold px-1.5 py-0.5 rounded">06:45</div>
                            </div>
                            <div className="p-5">
                                <h3 className="font-bold text-dh-dark mb-1 group-hover:text-dh-red transition-colors">2. Cutting the Alloy Profiles</h3>
                                <p className="text-sm text-dh-grey">Using a Chop saw with a non-ferrous blade for clean 90° and 45° cuts.</p>
                            </div>
                        </div>

                        {/* Video Card 3 */}
                        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group">
                            <div className="aspect-video bg-dh-grey-light relative">
                                <Image src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=600" alt="Push fit connect" fill className="object-cover" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors flex items-center justify-center">
                                    <div className="w-12 h-12 bg-dh-red/90 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                                        <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                                    </div>
                                </div>
                                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[11px] font-bold px-1.5 py-0.5 rounded">05:22</div>
                            </div>
                            <div className="p-5">
                                <h3 className="font-bold text-dh-dark mb-1 group-hover:text-dh-red transition-colors">3. Connectors & Pressure Test</h3>
                                <p className="text-sm text-dh-grey">Applying silicon oil to the push-fit connectors and testing the loop integrity.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-12 border-t border-black/10 pt-16">
                        <h2 className="text-2xl font-bold text-dh-dark mb-4">Quick Tip Clips</h2>
                        <p className="text-dh-grey max-w-2xl">Bite-sized answers to specific technical challenges.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {/* Quick Tip 1 */}
                        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow group cursor-pointer">
                            <div className="aspect-video bg-dh-grey-light relative">
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors flex items-center justify-center">
                                    <svg className="w-10 h-10 text-white/80 group-hover:text-dh-red transition-colors" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-dh-dark text-sm leading-tight">Balancing the Manifold</h3>
                            </div>
                        </div>
                        {/* Quick Tip 2 */}
                        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow group cursor-pointer">
                            <div className="aspect-video bg-dh-grey-light relative">
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors flex items-center justify-center">
                                    <svg className="w-10 h-10 text-white/80 group-hover:text-dh-red transition-colors" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-dh-dark text-sm leading-tight">Silicon Oil Application</h3>
                            </div>
                        </div>
                        {/* Quick Tip 3 */}
                        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow group cursor-pointer">
                            <div className="aspect-video bg-dh-grey-light relative">
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors flex items-center justify-center">
                                    <svg className="w-10 h-10 text-white/80 group-hover:text-dh-red transition-colors" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-dh-dark text-sm leading-tight">Fitting EasyClean Covers</h3>
                            </div>
                        </div>
                        {/* Quick Tip 4 */}
                        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow group cursor-pointer">
                            <div className="aspect-video bg-dh-grey-light relative">
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors flex items-center justify-center">
                                    <svg className="w-10 h-10 text-white/80 group-hover:text-dh-red transition-colors" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-dh-dark text-sm leading-tight">Wiring Therma-E</h3>
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
