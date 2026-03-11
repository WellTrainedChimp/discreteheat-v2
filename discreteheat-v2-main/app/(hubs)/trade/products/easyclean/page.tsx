import SubHubHero from '@/components/server/SubHubHero';
import CTABanner from '@/components/blocks/CTABanner';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';

export const metadata = {
    title: 'EasyClean LST Trade Data | DiscreteHeat',
    description: 'Anti-ligature and Low Surface Temperature (LST) requirements and installation data for the EasyClean profile.',
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=9a7b40c8-0245-4d26-a04d-72304b92a02f', width: 1200, height: 630, alt: 'EasyClean LST Trade Data | DiscreteHeat' }],
    },
};

const internalLinks = [
    {
        title: "Installation Manuals",
        description: "Step-by-step PDF guides for all ThermaSkirt profiling and corners.",
        href: "/trade/resources/installation-manuals",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=4e57c3f4-83d4-4914-a6bf-28d31595bad1",
    },
    {
        title: "Technical Data Sheets",
        description: "Output tables, dimensions, and compliance docs.",
        href: "/trade/resources/technical-data-sheets",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=16027df0-9209-4f6f-b0e6-87a7e41c8875",
    }
];

export default function TradeEasyCleanPage() {
    return (
        <main className="min-h-screen bg-white">
            <SubHubHero
                title="EasyClean LST"
                badge="Healthcare & Security Profile"
                description="The EasyClean profile is designed specifically for healthcare, mental health units (anti-ligature), and care homes requiring certified Low Surface Temperature (LST) heating without covers."
                imageSrc="https://www.discreteheat.com/MediaHandler.ashx?id=9a7b40c8-0245-4d26-a04d-72304b92a02f"
            />

            <section className="py-24 px-6 lg:px-12 bg-white selection:bg-dh-red/20 selection:text-dh-red">
                <div className="max-w-4xl mx-auto">

                    <div className="bg-dh-dark text-white rounded-2xl p-8 lg:p-12 mb-16 shadow-sm">
                        <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Compliance Warning</span>
                        <h2 className="text-2xl font-bold mb-6">Anti-Ligature Installation Security</h2>
                        <p className="text-gray-300 mb-8">
                            When installing the EasyClean profile in mental health, prison, or secure sectors, the installation methodology is as critical as the product. The profile MUST be installed continuously, completely sealed to the wall and floor, leaving zero gaps for a ligature attachment.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-sm max-w-2xl">
                            <div className="bg-white/10 p-4 border border-white/20 rounded-xl">
                                <span className="block font-bold text-dh-red">Secure Fixings</span>
                                <span className="text-gray-400">Tamper-proof Torx/Pin-hex required</span>
                            </div>
                            <div className="bg-white/10 p-4 border border-white/20 rounded-xl">
                                <span className="block font-bold text-dh-red">Mastic Seal</span>
                                <span className="text-gray-400">Anti-pick mastic to top and bottom edges</span>
                            </div>
                            <div className="bg-white/10 p-4 border border-white/20 rounded-xl">
                                <span className="block font-bold text-dh-red">Corner Joints</span>
                                <span className="text-gray-400">Fully welded or mechanically riveted</span>
                            </div>
                            <div className="bg-white/10 p-4 border border-white/20 rounded-xl">
                                <span className="block font-bold text-dh-red">Pipe Entry</span>
                                <span className="text-gray-400">Concealed entirely behind profile</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white border-2 border-black/10 rounded-2xl p-8 lg:p-12 mb-16">
                        <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">LST Certification</span>
                        <h2 className="text-2xl font-bold text-dh-dark mb-6">Surface Temperature Control</h2>
                        <p className="text-dh-grey mb-8">
                            NHS Estates regulation DN4 requires surface temperatures not to exceed 43°C in specific care environments. Unlike radiator covers, EasyClean achieves this natively because the thermal output is distributed over a massive surface area.
                        </p>
                        <div className="bg-dh-grey-light p-6 rounded-xl border border-black/5 font-mono text-sm text-dh-dark mb-4 max-w-xl">
                            <div className="flex justify-between border-b border-black/10 pb-2 mb-2">
                                <span>Flow Temp: 75°C (Boiler)</span>
                                <span>Surface Temp: ~48°C</span>
                            </div>
                            <div className="flex justify-between border-b border-black/10 pb-2 mb-2">
                                <span>Flow Temp: 55°C (Heat Pump)</span>
                                <span>Surface Temp: ~38°C (Fully LST Compliant)</span>
                            </div>
                            <div className="flex justify-between border-dh-red pb-2 mb-2 font-bold">
                                <span>BSRIA Tested Surface Limit</span>
                                <span className="text-dh-red">Pass at 43°C LST Threshold</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <ExploreCategorySection
                id="related"
                heading="Trade Resources"
                description="Access installation manuals and templates."
                tiles={internalLinks}
            />

            <CTABanner
                heading="Require Technical Support?"
                description="Secure installations often require bespoke design input. Our technical team is available to assist with tricky ward room layouts."
                primaryCTA="Contact Tech Team"
                primaryCTALink="/about/contact"
                secondaryCTA="View Healthcare Cases"
                secondaryCTALink="/specifiers/applications/healthcare"
            />
        </main>
    );
}
