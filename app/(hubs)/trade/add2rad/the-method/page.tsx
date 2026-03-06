import SubHubHero from '@/components/server/SubHubHero';
import CTABanner from '@/components/blocks/CTABanner';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import { ArrowLeftRight, Droplet, Flame } from 'lucide-react';

export const metadata = {
    title: 'The Add2Rad Method | DiscreteHeat Trade',
    description: 'Learn how to use ThermaSkirt in series with existing radiators to drastically lower flow temperatures for heat pump retrofits.',
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=78462530-72ea-4156-bae5-ed617dd9d65f', width: 1200, height: 630, alt: 'The Add2Rad Method | DiscreteHeat Trade' }],
    },
};

const internalLinks = [
    {
        title: "Heat Pump Installer Guide",
        description: "Technical instructions for adding the module in series with radiators.",
        href: "/trade/add2rad/heat-pump-installer-guide",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=a9380b91-7438-4ba0-b0b6-a365a4bcd925",
    },
    {
        title: "Flow Temp Calculator",
        description: "Calculate expected flow temperatures before and after adding Add2Rad.",
        href: "/trade/add2rad/flow-temperature-calculator",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=16027df0-9209-4f6f-b0e6-87a7e41c8875",
    },
    {
        title: "Quoting for Add2Rad",
        description: "Submit room dimensions via the portal for a fully quantified component estimate.",
        href: "/trade/add2rad/quoting-for-add2rad",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=c699edc3-f10e-40fc-89ba-c936d1a1f75d",
    }
];

export default function Add2RadMethodPage() {
    return (
        <main className="min-h-screen bg-white">
            <SubHubHero
                title="The Add2Rad Method"
                badge="Methodology & Concept"
                description="A revolutionary approach to heat pump retrofitting. By plugging ThermaSkirt directly into the existing radiator tails, you double the heat emitter surface area in minutes—without ripping up floors or changing microbore pipework."
                imageSrc="https://www.discreteheat.com/MediaHandler.ashx?id=78462530-72ea-4156-bae5-ed617dd9d65f"
            />

            <section className="py-24 px-6 lg:px-12 bg-white selection:bg-dh-red/20 selection:text-dh-red">
                <div className="max-w-4xl mx-auto">

                    <div className="prose prose-lg max-w-none text-dh-grey mb-16">
                        <p className="lead text-xl text-dh-dark font-medium mb-6">
                            The primary barrier to heat pump deployment in the UK is the disruption caused by replacing radiators and upgrading pipework.
                        </p>
                        <p>
                            Historically, reducing flow temperatures from 75°C to 45°C required fitting massive &quot;Type 33&quot; radiators that dominate wall space, and frequently required ripping up floors to replace 10mm microbore pipe with 15mm or 22mm to handle the increased flow rates.
                        </p>
                        <p className="font-bold text-dh-dark">
                            The Add2Rad method solves this by utilizing the dead space at the perimeter of the room.
                        </p>
                    </div>

                    <div className="bg-dh-dark rounded-2xl p-8 lg:p-12 mb-16 text-white overflow-hidden relative">
                        {/* Abstract background element */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-dh-red/20 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
                        <h2 className="text-3xl font-bold mb-8 relative z-10">How It Works</h2>

                        <div className="space-y-12 relative z-10">
                            <div className="flex gap-6 items-start">
                                <div className="mt-1 bg-dh-red p-3 rounded-xl"><ArrowLeftRight className="w-6 h-6 text-white" /></div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">1. The &quot;In-Series&quot; Connection</h3>
                                    <p className="text-gray-300">
                                        Instead of capping off the existing radiator tails, the Add2Rad manifold blocks connect directly to the existing 10mm or 15mm tails currently serving the radiator.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <div className="mt-1 bg-white/10 p-3 rounded-xl border border-white/20"><Flame className="w-6 h-6 text-dh-red" /></div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">2. Dual Emission</h3>
                                    <p className="text-gray-300">
                                        The hot water from the heat pump flows out of the tail, into the ThermaSkirt (which borders the room), and then finally up into the existing radiator before returning.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <div className="mt-1 bg-white/10 p-3 rounded-xl border border-white/20"><Droplet className="w-6 h-6 text-dh-red" /></div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">3. Surface Area Multiplication</h3>
                                    <p className="text-gray-300">
                                        Because you have now added the massive surface area of the skirting board to the existing surface area of the standard radiator, the room achieves its target heat loss at 40°C to 45°C flow temperatures, rather than 70°C.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white border-2 border-black/10 rounded-2xl p-8 lg:p-12 mb-16 shadow-sm">
                        <h2 className="text-2xl font-bold text-dh-dark mb-6">The Plumber&apos;s Benefits</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-dh-grey-light p-6 rounded-xl border border-black/5">
                                <span className="block font-bold text-dh-red mb-2">No Pipework Upgrades</span>
                                <p className="text-sm text-dh-grey">Because the thermal load is spread out over more emission area, the volume of water moving through the 10mm microbore is sufficient. You don&apos;t need to rip up the carpets to lay 15mm copper.</p>
                            </div>
                            <div className="bg-dh-grey-light p-6 rounded-xl border border-black/5">
                                <span className="block font-bold text-dh-red mb-2">Speed of Installation</span>
                                <p className="text-sm text-dh-grey">Installations that typically required three days of heavy disruption and floorboard lifting can be completed in a single day by retrofitting the skirts.</p>
                            </div>
                            <div className="bg-dh-grey-light p-6 rounded-xl border border-black/5">
                                <span className="block font-bold text-dh-red mb-2">No Giant Radiators</span>
                                <p className="text-sm text-dh-grey">Homeowners hate oversized Type 33 radiators. By keeping their original Type 11 or 22 radiator and supplementing it with the skirting, the aesthetic remains clean.</p>
                            </div>
                            <div className="bg-dh-grey-light p-6 rounded-xl border border-black/5">
                                <span className="block font-bold text-dh-red mb-2">Zero Redecoration</span>
                                <p className="text-sm text-dh-grey">The skirting board replacement covers any marks left from old skirtings. Plasterers and decorators are rarely required post-install.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ExploreCategorySection
                id="related"
                heading="Explore Add2Rad"
                description="Technical specifications and calculating tools."
                tiles={internalLinks}
            />

            <CTABanner
                heading="Verify The Numbers"
                description="Use our calculator to see the exact flow temperature drop you can achieve on your current project by adding the Add2Rad module."
                primaryCTA="Open Calculator"
                primaryCTALink="/trade/add2rad/flow-temperature-calculator"
                secondaryCTA="Contact Support"
                secondaryCTALink="/about/contact"
            />
        </main>
    );
}
