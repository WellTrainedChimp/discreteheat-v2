import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'DIY or Professional Installer? | ThermaSkirt Heating',
    description: 'Deciding whether to fit ThermaSkirt yourself or hire a professional? Read our guide on the plumbing and joinery skills required for a successful DIY installation.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/diy-or-professional/',
    },
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=4e57c3f4-83d4-4914-a6bf-28d31595bad1', width: 1200, height: 630, alt: 'DIY or Professional Installer? | ThermaSkirt Heating' }],
    },
};

export default function DIYOrProPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Installation Guide"
                    title="Plumbing and joinery,"
                    titleHighlight="combined."
                    description="ThermaSkirt is engineered specifically to bridge the gap between plumbing and second-fix joinery. To achieve a flawless finish, the installer must be competent in both disciplines. Is it a DIY project, or should you hire a professional? Let's break down the requirements."
                    primaryCta={{ text: "Find a Professional", href: "/homeowners/find-an-installer" }}
                    imageSrc="https://www.discreteheat.com/MediaHandler.ashx?id=4e57c3f4-83d4-4914-a6bf-28d31595bad1"
                    imageAlt="A close-up of a ThermaSkirt profile being cut precisely with an aluminium saw blade"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Assessing Your DIY Capabilities</h2>
                            <p className="text-xl font-light text-dh-dark mb-12 leading-relaxed">
                                ThermaSkirt combines basic plumbing with simple joinery. The system has been specifically designed to make DIY installation achievable for any competent homeowner. If you are comfortable working with pipework and a chop saw, this is well within reach.
                            </p>

                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">The Plumbing Phase</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                ThermaSkirt operates exactly like a standard radiator. To fit it yourself, you need to be comfortable draining down your existing central heating system, isolating the boiler, and locating the old radiator drops (the 15mm Flow and Return pipes). You may need to reroute or extend them slightly to line up with the ThermaSkirt connection points at the corners of the room.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                ThermaSkirt uses 15mm or 16mm Tectite push fit fittings from Pegler to connect from the ThermaSkirt fittings onto the existing pipework. This is a simple but secure brass push fit system — no soldering or specialist tools required.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                Whilst there is no legal requirement in the UK for a plumbing qualification to move pipes, the same cannot be said for electrics. If you are installing the electric version, ThermaSkirt-e, we recommend using a qualified electrician to install any fused spurs and first fix wiring of controls.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">The Second-Fix Phase</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">The Joinery Requirements</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                The system has been designed to remove the need for high precision. Every corner and connection has a built-in tolerance, giving each section a good degree of discrepancy if required. The corner covers and end caps overlap, which hides all the cuts and requires no mitering at all.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                The skirting profile, whilst rigid and strong, will flex to fit gradually undulating walls. A flexible top gasket makes up for any additional undulation in the plaster, so you do not need perfectly flat walls to achieve a clean finish.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                A good quality chop saw is recommended for clean cuts. A hacksaw will work, but the thickness and strength of the aluminium does make using one quite a challenge. Overall, the system is very forgiving for the uninitiated.
                            </p>
                        </article>

                        <div className="bg-dh-grey-light p-8 rounded-xl my-16 border border-dh-grey/20">
                            <h3 className="text-2xl font-semibold text-dh-dark mb-6">Which Route Is Right for You?</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 mt-1 mr-4">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-dh-dark">Comfortable with basic plumbing and joinery?</h4>
                                        <p className="text-dh-grey">You can DIY this. <a href="/homeowners/get-a-quote" className="text-dh-red font-semibold hover:underline">Order your kit and get started →</a></p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-600 mt-1 mr-4">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h8"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-dh-dark">Confident with one discipline but not the other?</h4>
                                        <p className="text-dh-grey">Handle your part and hire a local trade for the rest. A plumber or carpenter only needs a few hours to cover what you cannot.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-dh-red/10 text-dh-red mt-1 mr-4">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-dh-dark">Prefer to leave it to the pros?</h4>
                                        <p className="text-dh-grey">No problem. <a href="/homeowners/find-an-installer" className="text-dh-red font-semibold hover:underline">We'll connect you with a Registered Installer →</a></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <FAQText
                    faqs={[
                        {
                            question: "Does installing it myself void the product warranty?",
                            answer: "No. DiscreteHeat maintains the 10-year manufacturing warranty on the aluminium profiles and components regardless of who installs them. However, we do not warranty faults with the installation such as the standard of finish, damage to components, or issues as a result of not following the provided instructions."
                        },
                        {
                            question: "Can I cut the profiles with an angle grinder?",
                            answer: "Absolutely not. An angle grinder will overheat the aluminium, melt the factory paint finish, and create an incredibly jagged cut that will not fit inside the connection covers. You must use a sliding compound mitre saw with a negative-rake aluminium blade."
                        },
                        {
                            question: "Do you supply the required saw blades?",
                            answer: "No, we don't supply saw blades as any multi-purpose or aluminium-friendly blade will be suitable. These are readily available from hardware stores such as Wickes or Screwfix."
                        },
                        {
                            question: "Is there any online training available for DIYers?",
                            answer: "Yes, we have a full technical and installation course available in our learning area at discreteheat.com/learn/instructions-and-training."
                        }
                    ]}
                />

                <CTABanner
                    heading="Decided to leave it to the pros?"
                    description="Upload your room dimensions and we will connect you with a factory-trained Registered Installer."
                    primaryCTA="Find an Installer"
                    primaryCTALink="/homeowners/find-an-installer"
                    secondaryCTA="Get a System Quote"
                    secondaryCTALink="/homeowners/get-a-quote"
                />
            </main>
        </>
    );
}
