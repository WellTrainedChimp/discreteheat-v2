import SubHubHero from '@/components/server/SubHubHero';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';

export const metadata = {
    title: 'Marketing Materials for Merchants | DiscreteHeat Trade',
    description: 'Request point of sale displays, brochures, image assets, and technical manuals for your plumbing merchant branch.',
};

const internalLinks = [
    {
        title: "Find a Branch",
        description: "Search our network of over 400 national and independent merchant stockists.",
        href: "/trade/merchants/find-a-branch",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1080",
    },
    {
        title: "Open a Trade Account",
        description: "Apply for a credit account to access wholesale pricing directly from us.",
        href: "/trade/merchants/open-a-trade-account",
        image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&q=80&w=1080",
    }
];

export default function MarketingMaterialsPage() {
    return (
        <main className="min-h-screen bg-white">
            <SubHubHero
                title="Marketing Materials"
                badge="Branch POS Support"
                description="We actively support our merchant partners with high-quality point-of-sale displays, technical literature, and digital assets to drive in-branch sales and plumber awareness."
                imageSrc="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1920"
            />

            <section className="py-24 px-6 lg:px-12 bg-white selection:bg-dh-red/20 selection:text-dh-red">
                <div className="max-w-5xl mx-auto">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                        <div>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-3">In-Branch Displays</span>
                            <h2 className="text-3xl font-bold text-dh-dark mb-6">Physical Point of Sale</h2>
                            <p className="text-dh-grey mb-6 leading-relaxed">
                                The most effective way to sell ThermaSkirt is to let fitters touch it. Our free POS displays come fully assembled, demonstrating the profile, the corner cuts, and the push-fit connectors.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-dh-red/10 flex items-center justify-center flex-shrink-0"><svg className="w-3.5 h-3.5 text-dh-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></div>
                                    <span className="text-dh-dark font-medium font-sm">Standing Trade-Counter Display (Free standing)</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-dh-red/10 flex items-center justify-center flex-shrink-0"><svg className="w-3.5 h-3.5 text-dh-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></div>
                                    <span className="text-dh-dark font-medium font-sm">Wall-mounted Profile Board (Ideal for showrooms)</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-dh-red/10 flex items-center justify-center flex-shrink-0"><svg className="w-3.5 h-3.5 text-dh-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></div>
                                    <span className="text-dh-dark font-medium font-sm">Consumer A5 Brochures & Technical Plumber Handbooks</span>
                                </li>
                            </ul>
                            <a href="#order-form" className="inline-block border-2 border-dh-red text-dh-red font-bold py-3 px-6 rounded-lg hover:bg-dh-red hover:text-white transition-colors">
                                Order POS Setup
                            </a>
                        </div>
                        <div className="relative aspect-square md:aspect-auto md:h-[500px] bg-dh-grey-light rounded-2xl overflow-hidden shadow-lg border-2 border-black/5">
                            {/* Visual placeholder for POS display image */}
                            <img src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=800" alt="Trade Display" className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                <span className="text-white font-bold opacity-90">Standard Counter Display (W: 400mm x H: 650mm)</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-dh-dark text-white rounded-2xl p-8 lg:p-12 mb-16 shadow-lg">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-white/20 pb-8 mb-8">
                            <div>
                                <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-2">Digital Assets</span>
                                <h2 className="text-2xl font-bold mb-3">The Merchant Brand Pack</h2>
                                <p className="text-gray-400 text-sm max-w-xl">
                                    Download our comprehensive media suite to populate your e-commerce platform and branch social media channels.
                                </p>
                            </div>
                            <button className="flex items-center gap-2 bg-white text-dh-dark font-bold py-3.5 px-6 rounded hover:bg-gray-100 transition-colors shadow-sm flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                                Download .ZIP (254MB)
                            </button>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="bg-white/10 p-5 rounded-xl border border-white/10 text-center">
                                <div className="text-2xl font-bold mb-1">50+</div>
                                <div className="text-xs text-dh-red font-semibold uppercase tracking-wider mb-2">Lifestyle Images</div>
                                <p className="text-gray-400 text-[11px]">High-res room sets.</p>
                            </div>
                            <div className="bg-white/10 p-5 rounded-xl border border-white/10 text-center">
                                <div className="text-2xl font-bold mb-1">360°</div>
                                <div className="text-xs text-dh-red font-semibold uppercase tracking-wider mb-2">Product PNGs</div>
                                <p className="text-gray-400 text-[11px]">Transparent backgrounds.</p>
                            </div>
                            <div className="bg-white/10 p-5 rounded-xl border border-white/10 text-center">
                                <div className="text-2xl font-bold mb-1">.SVG</div>
                                <div className="text-xs text-dh-red font-semibold uppercase tracking-wider mb-2">Brand Logos</div>
                                <p className="text-gray-400 text-[11px]">Vector guidelines.</p>
                            </div>
                            <div className="bg-white/10 p-5 rounded-xl border border-white/10 text-center">
                                <div className="text-2xl font-bold mb-1">10+</div>
                                <div className="text-xs text-dh-red font-semibold uppercase tracking-wider mb-2">Short videos</div>
                                <p className="text-gray-400 text-[11px]">For Instagram/TikTok.</p>
                            </div>
                        </div>
                    </div>

                    <div id="order-form" className="bg-white border-2 border-dh-grey-light rounded-2xl p-8 lg:p-12 text-center scroll-mt-32">
                        <h2 className="text-2xl font-bold text-dh-dark mb-4">Request Physical POS / Training Visit</h2>
                        <p className="text-dh-grey mb-8">
                            Complete this form to request physical collateral delivered directly to your store. A regional manager can also be booked to conduct a morning trade-counter breakfast session to upskill your staff and local regulars.
                        </p>

                        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
                            <div>
                                <label className="block text-sm font-semibold text-dh-dark mb-2">Branch Name & Group</label>
                                <input type="text" className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-dh-red outline-none" placeholder="e.g. PTS Manchester South" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-dh-dark mb-2">Trade Account Number (Current Stockists)</label>
                                <input type="text" className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-dh-red outline-none" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-semibold text-dh-dark mb-2">Contact Name & Email</label>
                                <div className="grid grid-cols-2 gap-3">
                                    <input type="text" className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-dh-red outline-none" placeholder="Name" />
                                    <input type="email" className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-dh-red outline-none" placeholder="Email" />
                                </div>
                            </div>
                            <div className="md:col-span-2 mt-2">
                                <label className="block text-sm font-semibold text-dh-dark mb-3">Materials Requested (Tick all that apply)</label>
                                <div className="grid grid-cols-2 gap-3 text-sm text-dh-grey">
                                    <label className="flex items-center gap-2 cursor-pointer border border-gray-200 p-3 rounded hover:bg-gray-50"><input type="checkbox" className="custom-checkbox w-4 h-4 text-dh-red" /> Counter Display Unit</label>
                                    <label className="flex items-center gap-2 cursor-pointer border border-gray-200 p-3 rounded hover:bg-gray-50"><input type="checkbox" className="custom-checkbox w-4 h-4 text-dh-red" /> Wall Profile Board</label>
                                    <label className="flex items-center gap-2 cursor-pointer border border-gray-200 p-3 rounded hover:bg-gray-50"><input type="checkbox" className="custom-checkbox w-4 h-4 text-dh-red" /> 50x A5 Brochures</label>
                                    <label className="flex items-center gap-2 cursor-pointer border border-gray-200 p-3 rounded hover:bg-gray-50"><input type="checkbox" className="custom-checkbox w-4 h-4 text-dh-red" /> Request Training Visit</label>
                                </div>
                            </div>
                            <div className="md:col-span-2 mt-4">
                                <button type="button" className="w-full bg-dh-red hover:bg-dh-red-dark text-white font-bold py-4 rounded-lg shadow-sm transition-all focus:ring-4 focus:ring-dh-red/30">
                                    Submit Request to National Accounts
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
