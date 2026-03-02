import SubHubHero from '@/components/server/SubHubHero';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import { Laptop, Combine } from 'lucide-react';

export const metadata = {
    title: 'Trade Training Academy | DiscreteHeat',
    description: 'Book your ThermaSkirt installation training. We offer both online certification modules and hands-on days at our Manchester Headquarters.',
};

const internalLinks = [
    {
        title: "Register as an Installer",
        description: "Sign up to join our national network of approved ThermaSkirt installers.",
        href: "/trade/installer-programme/register",
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1080",
    },
    {
        title: "Benefits & Rewards",
        description: "Earn points on every metre installed. Unlock branded uniform, tools, and priority support.",
        href: "/trade/installer-programme/benefits",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1080",
    },
    {
        title: "Lead Referral System",
        description: "How we distribute pre-qualified enquiries to active installers in their local postcode area.",
        href: "/trade/installer-programme/lead-referral",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080",
    }
];

export default function TrainingAcademyPage() {
    return (
        <main className="min-h-screen bg-white selection:bg-dh-red/20 selection:text-dh-red">
            <SubHubHero
                title="Training Academy"
                badge="Master the Installation"
                description="If you can fit a standard radiator and cut skirting board, you can fit ThermaSkirt. But to ensure efficiency and speed, we require all registered installers to complete our certification."
                imageSrc="https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=1920"
            />

            <section className="py-24 px-6 lg:px-12 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-dh-dark mb-6">Two Ways to Certify</h2>
                        <p className="text-lg text-dh-grey mb-8">
                            Time off the tools costs money. That&apos;s why we&apos;ve built a comprehensive online certification that you can complete in an evening. For those wanting hands-on experience before a big job, our HQ runs monthly training days.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                        {/* Option 1: Online */}
                        <div className="bg-white border-2 border-dh-grey-light rounded-2xl p-8 lg:p-10 flex flex-col relative overflow-hidden group hover:border-dh-red/30 transition-colors">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-dh-grey-light rounded-bl-full -z-10 group-hover:bg-dh-red/5 transition-colors"></div>
                            <div className="w-14 h-14 rounded-xl bg-dh-grey-light flex items-center justify-center mb-8 hidden">
                                <Laptop className="w-7 h-7 text-dh-dark" />
                            </div>
                            <h3 className="text-2xl font-bold text-dh-dark mb-3">Online Certification Module</h3>
                            <p className="text-dh-red font-mono font-semibold text-sm mb-6 pb-6 border-b border-black/10 tracking-wider uppercase">Free • 90 Minutes • On-Demand</p>

                            <ul className="space-y-4 mb-8 flex-grow">
                                <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 rounded-full bg-dh-red mt-2 mr-3 flex-shrink-0"></span>
                                    <span className="text-dh-grey">A comprehensive 90-minute video syllabus broken into bite-sized chapters.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 rounded-full bg-dh-red mt-2 mr-3 flex-shrink-0"></span>
                                    <span className="text-dh-grey">Covers push-fit connectors, corner cuts, pipe configurations, and manifold setups.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 rounded-full bg-dh-red mt-2 mr-3 flex-shrink-0"></span>
                                    <span className="text-dh-grey">Short multiple-choice quiz after each section to verify competency.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 rounded-full bg-dh-red mt-2 mr-3 flex-shrink-0"></span>
                                    <span className="text-dh-grey">Instantly unlocks full &apos;Registered Installer&apos; status upon passing.</span>
                                </li>
                            </ul>

                            <button className="w-full border-2 border-dh-dark text-dh-dark font-bold hover:bg-dh-dark hover:text-white py-4 px-6 rounded-lg transition-all z-10">
                                Access Online Portal
                            </button>
                        </div>

                        {/* Option 2: In-Person */}
                        <div className="bg-dh-dark border-2 border-dh-dark rounded-2xl p-8 lg:p-10 flex flex-col relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -z-10"></div>
                            <h3 className="text-2xl font-bold text-white mb-3">HQ Hands-On Training</h3>
                            <p className="text-dh-red font-mono font-semibold text-sm mb-6 pb-6 border-b border-white/20 tracking-wider uppercase">Manchester Factory • Full Day • Lunch Provided</p>

                            <ul className="space-y-4 mb-8 flex-grow">
                                <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 rounded-full bg-dh-red mt-2 mr-3 flex-shrink-0"></span>
                                    <span className="text-gray-300">Run the first Friday of every month at our Atherton, Manchester manufacturing facility.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 rounded-full bg-dh-red mt-2 mr-3 flex-shrink-0"></span>
                                    <span className="text-gray-300">Hands-on experience in our mock-up rooms using actual chop saws, trims, and brackets.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 rounded-full bg-dh-red mt-2 mr-3 flex-shrink-0"></span>
                                    <span className="text-gray-300">1-to-1 time with our lead technical engineers and product designers.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 rounded-full bg-dh-red mt-2 mr-3 flex-shrink-0"></span>
                                    <span className="text-gray-300">Factory tour to see the product being extruded and powder-coated.</span>
                                </li>
                            </ul>

                            <button className="w-full bg-dh-red hover:bg-dh-red-dark text-white font-bold py-4 px-6 rounded-lg transition-all shadow-[0_4px_18px_rgba(210,35,42,0.30)] hover:-translate-y-0.5 z-10">
                                View Upcoming Dates
                            </button>
                        </div>
                    </div>

                    <div className="bg-dh-grey-light rounded-2xl p-8 lg:p-12 text-center border border-black/5">
                        <Combine className="w-12 h-12 text-dh-red mx-auto mb-6" />
                        <h2 className="text-2xl font-bold text-dh-dark mb-4">Core Curriculum</h2>
                        <p className="text-dh-grey mb-8 max-w-2xl mx-auto">Regardless of which method you choose to certify, the curriculum focuses heavily on speed and accuracy. You&apos;ll learn:</p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-black/5 text-sm font-semibold text-dh-dark">First-fix pipework templates</div>
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-black/5 text-sm font-semibold text-dh-dark">Push-fit &apos;O&apos; ring connections</div>
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-black/5 text-sm font-semibold text-dh-dark">Internal & External corner cuts</div>
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-black/5 text-sm font-semibold text-dh-dark">Avoiding flow restriction</div>
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-black/5 text-sm font-semibold text-dh-dark">System pressure testing</div>
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-black/5 text-sm font-semibold text-dh-dark">Manifold configurations</div>
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-black/5 text-sm font-semibold text-dh-dark">Wall discrepancy management</div>
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-black/5 text-sm font-semibold text-dh-dark">Add2Rad in-series retrofitting</div>
                        </div>
                    </div>
                </div>
            </section>

            <ExploreCategorySection
                id="related"
                heading="More About the Programme"
                description="Discover the full benefits of joining the DiscreteHeat network."
                tiles={internalLinks}
            />
        </main>
    );
}
