import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import { CheckCircle2, ShieldCheck, Zap, HardHat } from 'lucide-react';

export const metadata = {
    title: 'Register as an Installer | DiscreteHeat',
    description: 'Apply to become a DiscreteHeat registered installer to receive local leads and trade benefits.',
};

const internalLinks = [
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
    },
    {
        title: "Training Academy",
        description: "Book an in-person session at our Manchester HQ or complete our online certification.",
        href: "/trade/installer-programme/training",
        image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=1080",
    }
];

export default function RegisterInstallerPage() {
    return (
        <main className="min-h-screen bg-white selection:bg-dh-red/20 selection:text-dh-red">
            <SubHubHero
                title="Register as an Installer"
                badge="Join the Network"
                description="Sign up to become a certified ThermaSkirt installation partner. Secure your local territory and start receiving direct homeowner leads."
                imageSrc="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1920"
            />

            <section className="py-24 px-6 lg:px-12 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-lg max-w-none text-dh-grey mb-16">
                        <p className="lead text-xl text-dh-dark font-medium mb-8">
                            We are actively expanding our national network to meet the growing demand for ThermaSkirt installations. Registration is straightforward but requires proof of professional competency.
                        </p>
                    </div>

                    <div className="bg-dh-grey-light rounded-2xl p-8 lg:p-12 border border-black/5 mb-16">
                        <h2 className="text-2xl font-bold text-dh-dark mb-8">Registration Requirements</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex gap-4">
                                <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                                    <ShieldCheck className="w-5 h-5 text-dh-red" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dh-dark mb-1">Public Liability Insurance</h3>
                                    <p className="text-sm text-dh-grey">Minimum £2M coverage required to protect yourself and the customer.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                                    <Zap className="w-5 h-5 text-dh-red" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dh-dark mb-1">Sector Certifications</h3>
                                    <p className="text-sm text-dh-grey">Gas Safe registration (if connecting to boilers) or relevant heat pump/plumbing qualifications (NVQ Level 2/3).</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                                    <HardHat className="w-5 h-5 text-dh-red" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dh-dark mb-1">Training Attendance</h3>
                                    <p className="text-sm text-dh-grey">Must complete our basic online or in-person training module to ensure product competency.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                                    <CheckCircle2 className="w-5 h-5 text-dh-red" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dh-dark mb-1">Quality Commitment</h3>
                                    <p className="text-sm text-dh-grey">Agreement to install exactly to our specification manuals and uphold our customer service standards.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-dh-dark text-white rounded-2xl p-8 lg:p-12 mb-16">
                        <h2 className="text-2xl font-bold mb-6">Application Process</h2>
                        <ol className="relative border-l border-white/20 ml-3 space-y-8">
                            <li className="pl-8">
                                <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-dh-dark bg-dh-red text-sm font-bold font-mono">1</span>
                                <h3 className="font-semibold text-lg mb-1">Submit Details</h3>
                                <p className="text-gray-400 text-sm">Fill out the online application form below with your company details and qualifications.</p>
                            </li>
                            <li className="pl-8">
                                <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-dh-dark bg-white text-dh-dark text-sm font-bold font-mono">2</span>
                                <h3 className="font-semibold text-lg mb-1">Account Verification</h3>
                                <p className="text-gray-400 text-sm">Our trade team will review your application and verify your credentials within 48 hours.</p>
                            </li>
                            <li className="pl-8">
                                <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-dh-dark bg-white text-dh-dark text-sm font-bold font-mono">3</span>
                                <h3 className="font-semibold text-lg mb-1">Training & Onboarding</h3>
                                <p className="text-gray-400 text-sm">Complete the required training module to unlock full certified status.</p>
                            </li>
                            <li className="pl-8">
                                <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-dh-dark bg-dh-red text-sm font-bold font-mono">4</span>
                                <h3 className="font-semibold text-lg mb-1">Receive Leads</h3>
                                <p className="text-gray-400 text-sm">Your postcode territory goes live, and you will begin receiving pre-qualified quote requests immediately.</p>
                            </li>
                        </ol>
                    </div>

                    <div id="application-form" className="scroll-mt-32">
                        {/* Placeholder for an actual Form Component */}
                        <div className="bg-white border-2 border-dh-grey-light rounded-2xl p-8 lg:p-12 text-center">
                            <h2 className="text-2xl font-bold text-dh-dark mb-4">Installer Application Form</h2>
                            <p className="text-dh-grey mb-8">Please have your registration numbers and insurance documents ready.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
                                <div>
                                    <label className="block text-sm font-semibold text-dh-dark mb-2">Company Name</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-dh-red focus:border-dh-red outline-none transition-all" placeholder="e.g. Smith Heating Solutions" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-dh-dark mb-2">Contact Name</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-dh-red focus:border-dh-red outline-none transition-all" placeholder="John Smith" />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-semibold text-dh-dark mb-2">Email Address</label>
                                    <input type="email" className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-dh-red focus:border-dh-red outline-none transition-all" placeholder="john@example.com" />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-semibold text-dh-dark mb-2">Postcode (For Territory Selection)</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-dh-red focus:border-dh-red outline-none transition-all" placeholder="M46 0FY" />
                                </div>
                                <div className="md:col-span-2 mt-4">
                                    <button className="w-full bg-dh-red hover:bg-dh-red-dark text-white font-bold py-4 px-6 rounded-lg transition-all shadow-[0_4px_18px_rgba(210,35,42,0.30)] hover:shadow-[0_6px_24px_rgba(210,35,42,0.40)] hover:-translate-y-0.5">
                                        Submit Preliminary Application
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FAQText
                heading="Registration FAQs"
                faqs={[
                    {
                        question: "How long does the registration take?",
                        answer: "The initial application takes 5 minutes. Verification generally takes 48 hours. Depending on when you complete your training module, you can be receiving leads within 3-5 working days."
                    },
                    {
                        question: "Is there a cost to join the network?",
                        answer: "No. Registration is completely free for qualified professionals. We just ask that you maintain a high standard of work and customer service."
                    },
                    {
                        question: "How are territories assigned?",
                        answer: "Territories are assigned based on your primary operating postcode and typical travel radius. We limit the number of installers per region to ensure you get a healthy volume of leads rather than diluting them among too many fitters."
                    }
                ]}
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
