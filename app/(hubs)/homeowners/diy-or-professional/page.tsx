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
                                ThermaSkirt is emphatically not a flat-pack furniture assembly task. It is a fully functional, pressurized central heating emitter that must be watertight, and a highly visible architectural moulding that must be aesthetically perfect. A successful DIY installation requires confidence in pipework and precision cutting.
                            </p>

                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">The Plumbing Phase</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                ThermaSkirt operates exactly like a standard radiator. To fit it yourself, you must be comfortable draining down your existing central heating system. You will need to isolate the boiler, locate the old radiator drops (the 15mm or 10mm Flow and Return pipes), and potentially reroute or extend them slightly to line up with the ThermaSkirt connection points at the corners of the room.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                The actual ThermaSkirt connections use standard plumbing compression fittings. If you know how to cut copper pipe with a slice, apply jointing compound, and tighten an olive onto a 15mm valve without it leaking when you re-pressurize the boiler, the plumbing aspect of this installation will be straightforward for you.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">The Second-Fix Phase</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">The Joinery Requirements</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                The second half of the installation is essentially high-end carpentry, but working with aerospace-grade aluminium instead of timber. Unlike timber skirting, which can be bent around severely bowing walls or heavily caulked if cut short, aluminium requires exact measurements.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                You must own, or hire, a high-quality sliding compound mitre saw (a &apos;chop saw&apos;) fitted with a specialized non-ferrous metal cutting blade. The profiles must be cut entirely square to slot cleanly into our patented corner joint covers. A hand hacksaw will absolutely not work and will ruin the expensive extrusions.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                Many &apos;plumb-only&apos; engineers struggle with ThermaSkirt because they are not used to using mitre saws. Many carpenters struggle because they don&apos;t understand water pressure. The ideal DIYer is someone who has confidently fitted both a radiator and a timber skirting board previously.
                            </p>
                        </article>

                        <div className="bg-dh-grey-light p-8 rounded-xl my-16 border border-dh-grey/20">
                            <h3 className="text-2xl font-semibold text-dh-dark mb-6">The Hybrid Approach: Supply & Fix</h3>
                            <p className="text-dh-grey mb-6">
                                If you are a competent woodworker but terrified of water leaks, the most common &apos;hybrid&apos; approach is to hire a local plumber just for a few hours.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center text-dh-dark">
                                    <span className="w-2 h-2 rounded-full bg-dh-red mr-3"></span>
                                    You drain the system and safely remove the old radiators.
                                </li>
                                <li className="flex items-center text-dh-dark">
                                    <span className="w-2 h-2 rounded-full bg-dh-red mr-3"></span>
                                    You cut all the aluminium ThermaSkirt profiles exactly to length using your chop saw, and mount them securely to the brackets on the walls.
                                </li>
                                <li className="flex items-center text-dh-dark">
                                    <span className="w-2 h-2 rounded-full bg-dh-red mr-3"></span>
                                    <strong>The Plumber:</strong> Arrives for 2 hours, connects the copper pipework to the ThermaSkirt valves you just mounted, tightens all the compression fittings, re-pressurizes the boiler, and signs off the watertight integrity.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <FAQText
                    faqs={[
                        {
                            question: "Does installing it myself void the product warranty?",
                            answer: "No. DiscreteHeat maintains the 10-year manufacturing warranty on the aluminium profiles and components regardless of who installs them. However, we do not warranty the watertightness of your pipe connections; that is the responsibility of whoever tightened the plumbing nuts."
                        },
                        {
                            question: "Can I cut the profiles with an angle grinder?",
                            answer: "Absolutely not. An angle grinder will overheat the aluminium, melt the factory paint finish, and create an incredibly jagged cut that will not fit inside the connection covers. You must use a sliding compound mitre saw with a negative-rake aluminium blade."
                        },
                        {
                            question: "Do you supply the required saw blades?",
                            answer: "Yes. When you order a ThermaSkirt kit, our sales team will often recommend adding a high-quality 210mm or 255mm aluminium saw blade to your order so you have exactly the right tool for your chop saw."
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
