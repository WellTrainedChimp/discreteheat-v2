import SubHubHero from '@/components/server/SubHubHero';
import CTABanner from '@/components/blocks/CTABanner';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import { Star, Gift, Truck, Key, Award, Wrench } from 'lucide-react';

export const metadata = {
    title: 'Installer Benefits & Rewards | DiscreteHeat',
    description: 'Earn points on every metre of ThermaSkirt installed. Unlock branded uniform, premium tools, and priority trade support.',
};

const internalLinks = [
    {
        title: "Register as an Installer",
        description: "Sign up to join our national network of approved ThermaSkirt installers.",
        href: "/trade/installer-programme/register",
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1080",
    },
    {
        title: "Lead Referral System",
        description: "How we distribute pre-qualified enquiries to active installers in their local postcode area.",
        href: "/trade/installer-programme/lead-referral",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080",
    },
    {
        title: "Training Academy",
        description: "Book an in-person session at our Manchester HQ or complete our online certification.",
        href: "/trade/installer-programme/training",
        image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=1080",
    }
];

export default function BenefitsRewardsPage() {
    return (
        <main className="min-h-screen bg-white selection:bg-dh-red/20 selection:text-dh-red">
            <SubHubHero
                title="Benefits & Rewards"
                badge="Earn As You Install"
                description="We value loyalty. Our registered installers earn reward points on every single metre of ThermaSkirt they install, unlocking tools, uniform, and priority support."
                imageSrc="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1920"
            />

            <section className="py-24 px-6 lg:px-12 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-dh-dark mb-6">How the Point System Works</h2>
                        <p className="text-lg text-dh-grey">
                            Every time you register an installation warranty or purchase direct through your trade account, you accumulate points. These points can be spent in the DiscreteHeat Trade Portal on everything from marketing materials to Milwaukee power tools.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                        <div className="bg-dh-grey-light p-8 rounded-2xl border border-black/5 hover:border-dh-red/30 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6">
                                <Award className="w-6 h-6 text-dh-red" />
                            </div>
                            <h3 className="text-xl font-bold text-dh-dark mb-3">Priority Lead Access</h3>
                            <p className="text-dh-grey text-sm">Top-tier installers (Gold and Platinum) receive first refusal on all high-value (5+ room) homeowner leads generated in their postcode territory.</p>
                        </div>
                        <div className="bg-dh-grey-light p-8 rounded-2xl border border-black/5 hover:border-dh-red/30 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6">
                                <Key className="w-6 h-6 text-dh-red" />
                            </div>
                            <h3 className="text-xl font-bold text-dh-dark mb-3">Direct Trade Pricing</h3>
                            <p className="text-dh-grey text-sm">Access to our dedicated trade portal with fixed, transparent installer discount tiers that protect your margin when quoting.</p>
                        </div>
                        <div className="bg-dh-grey-light p-8 rounded-2xl border border-black/5 hover:border-dh-red/30 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6">
                                <Wrench className="w-6 h-6 text-dh-red" />
                            </div>
                            <h3 className="text-xl font-bold text-dh-dark mb-3">Premium Tool Store</h3>
                            <p className="text-dh-grey text-sm">Redeem points on ThermaSkirt specialist chop-saw blades, mounting tools, or high-end power tools from our partners at Milwaukee.</p>
                        </div>
                        <div className="bg-dh-grey-light p-8 rounded-2xl border border-black/5 hover:border-dh-red/30 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6">
                                <Truck className="w-6 h-6 text-dh-red" />
                            </div>
                            <h3 className="text-xl font-bold text-dh-dark mb-3">Free Express Delivery</h3>
                            <p className="text-dh-grey text-sm">Gold level installers get automatic free Next-Day carriage on all direct top-up orders (components, corners, and accessories).</p>
                        </div>
                        <div className="bg-dh-grey-light p-8 rounded-2xl border border-black/5 hover:border-dh-red/30 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6">
                                <Star className="w-6 h-6 text-dh-red" />
                            </div>
                            <h3 className="text-xl font-bold text-dh-dark mb-3">Branded Trade Uniforms</h3>
                            <p className="text-dh-grey text-sm">Get access to co-branded Snickers workwear, softshell jackets, and polo shirts to present a professional image on-site.</p>
                        </div>
                        <div className="bg-dh-grey-light p-8 rounded-2xl border border-black/5 hover:border-dh-red/30 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6">
                                <Gift className="w-6 h-6 text-dh-red" />
                            </div>
                            <h3 className="text-xl font-bold text-dh-dark mb-3">Free Marketing Packs</h3>
                            <p className="text-dh-grey text-sm">Claim free drop-boxes filled with 100mm profile samples, brochures, and van stickers to aid your own local sales efforts.</p>
                        </div>
                    </div>

                    <div className="bg-dh-dark rounded-2xl overflow-hidden p-8 lg:p-12 mb-16 flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl font-bold text-white mb-6">The Points Multiplier</h2>
                            <p className="text-gray-300 text-lg mb-6">
                                The point system operates on an accelerating scale. The more installations you complete, the faster your points multiply.
                            </p>
                            <ul className="space-y-4 font-mono text-sm">
                                <li className="flex justify-between border-b border-white/20 pb-2 text-white">
                                    <span>Silver Tier (1-5 Installs)</span>
                                    <span className="text-dh-red">1x Points</span>
                                </li>
                                <li className="flex justify-between border-b border-white/20 pb-2 text-white">
                                    <span>Gold Tier (6-20 Installs)</span>
                                    <span className="text-dh-red">1.5x Points</span>
                                </li>
                                <li className="flex justify-between pb-2 text-white">
                                    <span>Platinum Tier (21+ Installs)</span>
                                    <span className="text-dh-red font-bold">2x Points</span>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            {/* Placeholder for a graphic - just grey block with text for now */}
                            <div className="bg-white/5 border border-white/10 rounded-xl aspect-video flex flex-col items-center justify-center text-center p-6">
                                <span className="text-4xl font-bold text-white mb-2">1 Point</span>
                                <span className="text-gray-400">per metre installed</span>
                                <div className="h-px w-16 bg-dh-red my-4"></div>
                                <span className="text-4xl font-bold text-white mb-2">10 Points</span>
                                <span className="text-gray-400">per full house warranty submission</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTABanner
                heading="Start Earning Today"
                description="Join the installer network, get verified, and your first installation will immediately start earning points."
                primaryCTA="Register Now"
                primaryCTALink="/trade/installer-programme/register"
                secondaryCTA="View Products"
                secondaryCTALink="/trade/products"
            />

            <ExploreCategorySection
                id="related"
                heading="More About the Programme"
                description="Discover the full benefits of joining the DiscreteHeat network."
                tiles={internalLinks}
            />
        </main>
    );
}
