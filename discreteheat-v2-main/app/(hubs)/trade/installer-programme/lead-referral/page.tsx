import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';

export const metadata = {
    title: 'Trade Lead Referral System | DiscreteHeat',
    description: 'We generate over 1,500 qualified homeowner enquiries a month. Find out how we distribute these leads to our registered installer network.',
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=660596bd-ec1d-411c-91c5-bd0746641217', width: 1200, height: 630, alt: 'Trade Lead Referral System | DiscreteHeat' }],
    },
};

const internalLinks = [
    {
        title: "Register as an Installer",
        description: "Sign up to join our national network of approved ThermaSkirt installers.",
        href: "/trade/installer-programme/register",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=8e875883-9f9d-468d-9c61-d3da58e23f5f",
    },
    {
        title: "Benefits & Rewards",
        description: "Earn points on every metre installed. Unlock branded uniform, tools, and priority support.",
        href: "/trade/installer-programme/benefits",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=d935984b-a5c8-431f-af3f-eeb2a19f4b66",
    },
    {
        title: "Training Academy",
        description: "Book an in-person session at our Manchester HQ or complete our online certification.",
        href: "/trade/installer-programme/training",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=cff4020d-4eb2-4e07-b11a-9dedea2de221",
    }
];

export default function LeadReferralPage() {
    return (
        <main className="min-h-screen bg-white selection:bg-dh-red/20 selection:text-dh-red">
            <SubHubHero
                title="Lead Referral System"
                badge="We Find the Jobs. You Do the Work."
                description="DiscreteHeat generates over 1,500 highly qualified homeowner enquiries every single month. We pass these directly to our registered installers based on postcode radius."
                imageSrc="https://www.discreteheat.com/MediaHandler.ashx?id=660596bd-ec1d-411c-91c5-bd0746641217"
            />

            <section className="py-24 px-6 lg:px-12 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-lg max-w-none text-dh-grey mb-16">
                        <p className="lead text-xl text-dh-dark font-medium mb-6">
                            We spend hundreds of thousands of pounds annually marketing ThermaSkirt directly to homeowners via TV, print, and digital channels. We are a manufacturer, not an installation company. This means every lead we generate needs a qualified professional to survey and install the system.
                        </p>
                        <p>
                            Our lead referral system isn&apos;t a paid directory. Installers don&apos;t &quot;pay per lead.&quot; We distribute work fairly to registered installers based on location, quality of previous work, and customer service records.
                        </p>
                    </div>

                    <div className="bg-dh-grey-light rounded-2xl p-8 lg:p-12 border border-black/5 mb-16">
                        <h2 className="text-2xl font-bold text-dh-dark mb-8">How it Works</h2>
                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 rounded-full bg-dh-dark text-white font-bold flex items-center justify-center font-mono">1</div>
                                    <div className="w-px h-full bg-black/10 my-2"></div>
                                </div>
                                <div className="pb-8">
                                    <h3 className="text-xl font-bold text-dh-dark mb-2">Homeowner Requests a Quote</h3>
                                    <p className="text-dh-grey">A homeowner submits their room dimensions, heat source details, and project timeline through the &apos;Get a Quote&apos; portal on the DiscreteHeat website.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 rounded-full bg-dh-dark text-white font-bold flex items-center justify-center font-mono">2</div>
                                    <div className="w-px h-full bg-black/10 my-2"></div>
                                </div>
                                <div className="pb-8">
                                    <h3 className="text-xl font-bold text-dh-dark mb-2">DiscreteHeat Pre-Qualifies the Job</h3>
                                    <p className="text-dh-grey">Our in-house technical team reviews the project to ensure the product is viable, often issuing a provisional room-by-room material estimate so the homeowner has a baseline material budget.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 rounded-full bg-dh-red text-white font-bold flex items-center justify-center shadow-lg font-mono">3</div>
                                    <div className="w-px h-full bg-dh-red/20 my-2 hidden"></div> {/* Hidden on last step */}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-dh-dark mb-2">The Lead is Assigned to You</h3>
                                    <p className="text-dh-grey">If the job falls within your registered postcode radius, the fully qualified lead is emailed directly to you via the Trade Portal. You can then contact the homeowner directly to arrange a site survey and quote for the labor and materials.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white border-2 border-dh-red/10 rounded-2xl p-8 lg:p-12 mb-16 shadow-[0_4px_24px_rgba(210,35,42,0.05)]">
                        <h2 className="text-2xl font-bold text-dh-dark mb-4 group flex items-center">
                            The Value of a ThermaSkirt Lead
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-dh-grey mb-4">
                                    Unlike general boiler replacement leads, a ThermaSkirt lead usually represents a high-value, multi-room retrofit or complete new build system. These are premium customers investing in low-temperature compatibility or aesthetics.
                                </p>
                                <ul className="space-y-3 font-medium text-dh-dark">
                                    <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-dh-red mr-3"></span>Average Lead Value: £3k+ Materials</li>
                                    <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-dh-red mr-3"></span>Average Install Margin: High</li>
                                    <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-dh-red mr-3"></span>Zero Lead Cost or Monthly Fees</li>
                                </ul>
                            </div>
                            <div className="bg-dh-grey-light rounded-xl p-6 text-sm text-dh-grey italic border-l-4 border-dh-red">
                                &quot;Before joining, our firm was fighting for bottom-dollar radiator swops. The ThermaSkirt leads come pre-educated—they know the product, they want the premium finish, and they&apos;ve often already seen the material quote from DiscreteHeat. We just go in, survey, and quote the labor.&quot;
                                <span className="block font-bold text-dh-dark mt-2 not-italic">— J. Barnes, Platinum Installer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FAQText
                heading="Lead Referral FAQs"
                faqs={[
                    {
                        question: "Are leads sold to multiple installers?",
                        answer: "No. Unlike lead-generation websites, we do not sell leads to 4 or 5 different plumbers to start a price war. A homeowner's lead is typically passed to ONE assigned installer in that region (maximum two if the first is unavailable). We want you to win the work."
                    },
                    {
                        question: "How big is my territory?",
                        answer: "Territory sizes vary. In dense urban areas (like London or Manchester), the radius might be 5-10 miles. In rural locations, it may be 30-40 miles. You define your willingness to travel upon registration."
                    },
                    {
                        question: "Can I selectively reject leads?",
                        answer: "Yes. You review the brief via the portal before accepting. However, consistently rejecting leads or providing poor communication to homeowners will result in leads being routed to another installer in your region."
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
