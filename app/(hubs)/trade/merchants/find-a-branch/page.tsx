import SubHubHero from '@/components/server/SubHubHero';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';

export const metadata = {
    title: 'Find a Branch | DiscreteHeat Trade',
    description: 'Use our store locator to find your nearest plumbing merchant stocking ThermaSkirt lengths and components.',
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=be1541f1-aaa6-4386-bf9e-c0076bc5e27d', width: 1200, height: 630, alt: 'Find a Branch | DiscreteHeat Trade' }],
    },
};

const internalLinks = [
    {
        title: "Marketing Materials",
        description: "Request POS displays, counter POS, brochures, and digital assets.",
        href: "/trade/merchants/marketing-materials",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=6a652cac-0afb-459f-b8e3-82b3b5fa4ff0",
    },
    {
        title: "Open a Trade Account",
        description: "Apply for a credit account to access wholesale pricing directly from us.",
        href: "/trade/merchants/open-a-trade-account",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=94a221fb-c3e2-4ea5-8e49-ab0b223dba6b",
    }
];

export default function FindABranchPage() {
    return (
        <main className="min-h-screen bg-white">
            <SubHubHero
                title="Find a Branch"
                badge="National Stockists"
                description="ThermaSkirt and Add2Rad components are stocked by over 400 national and independent plumbing merchants across the UK."
                imageSrc="https://www.discreteheat.com/MediaHandler.ashx?id=be1541f1-aaa6-4386-bf9e-c0076bc5e27d"
            />

            <section className="py-24 px-6 lg:px-12 bg-white selection:bg-dh-red/20 selection:text-dh-red">
                <div className="max-w-6xl mx-auto">

                    <div className="bg-white border-2 border-dh-grey-light rounded-2xl shadow-sm overflow-hidden mb-16">
                        <div className="grid grid-cols-1 lg:grid-cols-3">
                            {/* Locator Sidebar */}
                            <div className="p-8 border-r-0 lg:border-r-2 border-dh-grey-light bg-gray-50 flex flex-col h-[600px]">
                                <h2 className="text-2xl font-bold text-dh-dark mb-2">Store Locator</h2>
                                <p className="text-dh-grey text-sm mb-6">Enter your postcode or town to find your nearest merchant branch carrying DiscreteHeat stock.</p>

                                <div className="relative mb-6">
                                    <input
                                        type="text"
                                        placeholder="Enter Postcode e.g. M46 0FY"
                                        className="w-full border border-gray-300 rounded-lg py-3 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-dh-red focus:border-transparent font-medium"
                                    />
                                    <button className="absolute right-2 top-1.5 bottom-1.5 bg-dh-red hover:bg-dh-red-dark w-10 rounded text-white flex items-center justify-center transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Placeholder Results List */}
                                <div className="flex-grow overflow-y-auto space-y-4 pr-2 custom-scrollbar">
                                    <div className="p-4 bg-white border border-dh-red/30 rounded-lg shadow-sm cursor-pointer relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-dh-red"></div>
                                        <h3 className="font-bold text-dh-dark text-[15px] mb-1">City Plumbing Supplies - Leigh</h3>
                                        <p className="text-gray-500 text-xs mb-2">2.4 miles away</p>
                                        <div className="flex justify-between items-end">
                                            <p className="text-dh-grey text-xs">Unit 14, Parsonage Retail Park<br />Leigh, WN7 5SJ</p>
                                            <span className="text-[10px] font-bold uppercase tracking-wider bg-green-100 text-green-700 px-2 py-0.5 rounded">In Stock</span>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-white border border-gray-200 rounded-lg hover:border-black/20 transition-colors cursor-pointer">
                                        <h3 className="font-bold text-dh-dark text-[15px] mb-1">Travis Perkins - Wigan</h3>
                                        <p className="text-gray-500 text-xs mb-2">5.1 miles away</p>
                                        <div className="flex justify-between items-end">
                                            <p className="text-dh-grey text-xs">Atherton Road<br />Wigan, WN2 3ED</p>
                                            <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-700 px-2 py-0.5 rounded">Limited</span>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-white border border-gray-200 rounded-lg hover:border-black/20 transition-colors cursor-pointer">
                                        <h3 className="font-bold text-dh-dark text-[15px] mb-1">Plumbase - Bolton</h3>
                                        <p className="text-gray-500 text-xs mb-2">7.8 miles away</p>
                                        <div className="flex justify-between items-end">
                                            <p className="text-dh-grey text-xs">Manchester Rd<br />Bolton, BL3 2NE</p>
                                            <span className="text-[10px] font-bold uppercase tracking-wider bg-green-100 text-green-700 px-2 py-0.5 rounded">In Stock</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder Area */}
                            <div className="lg:col-span-2 bg-gray-200 relative min-h-[400px] lg:min-h-0 flex items-center justify-center overflow-hidden">
                                {/* Simulated map background */}
                                <div className="absolute inset-0 opacity-40 bg-[url('https://www.discreteheat.com/MediaHandler.ashx?id=94a221fb-c3e2-4ea5-8e49-ab0b223dba6b')] bg-cover bg-center"></div>
                                <div className="absolute inset-0 bg-blue-50/60 backdrop-blur-[2px]"></div>

                                <div className="relative z-10 text-center bg-white/90 p-6 rounded-xl shadow-lg border border-black/5 backdrop-blur-md max-w-sm">
                                    <svg className="w-12 h-12 text-dh-dark/50 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                    </svg>
                                    <h3 className="font-bold text-dh-dark mb-2">Interactive Map Component</h3>
                                    <p className="text-sm text-dh-grey">The Google Maps API integration will be rendered here, plotting stockists precisely based on the user&apos;s location query.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-dh-dark text-white p-8 lg:p-12 rounded-2xl">
                            <h2 className="text-2xl font-bold mb-4">Stock Enquiries</h2>
                            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                                While our network carries substantial stock, specific profiles (like EasyClean or custom RAL colours) are often fulfilled directly from our factory to the branch for Next Day collection. We always recommend calling the branch ahead to confirm linear metre quantities.
                            </p>
                            <a href="/about/contact" className="inline-block border border-white/30 text-white font-bold py-3 px-6 rounded hover:bg-white hover:text-dh-dark transition-colors">
                                Contact Head Office
                            </a>
                        </div>
                        <div className="bg-white border-2 border-black/10 p-8 lg:p-12 rounded-2xl">
                            <h2 className="text-2xl font-bold text-dh-dark mb-4">Are You a Merchant?</h2>
                            <p className="text-dh-grey text-sm mb-6 leading-relaxed">
                                If you stock DiscreteHeat products but are not currently listed on our locator, or if you wish to become an approved stockist and appear on this map, please apply for a trade account below.
                            </p>
                            <a href="/trade/merchants/open-a-trade-account" className="inline-block bg-dh-red hover:bg-dh-red-dark text-white font-bold py-3 px-6 rounded transition-colors shadow-sm">
                                Open a Trade Account
                            </a>
                        </div>
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
