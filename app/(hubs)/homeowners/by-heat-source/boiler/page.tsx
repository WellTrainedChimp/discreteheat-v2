import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import TestimonialStrip from '@/components/blocks/TestimonialStrip';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Boiler Compatible Skirting Board Heating | ThermaSkirt',
    description: 'Upgrade your gas, oil, or electric boiler heating system. ThermaSkirt connects directly to your existing radiator pipes, delivering fast, even radiant heat without the wall clutter.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/by-heat-source/boiler/',
    }
};

export default function BoilerPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Boiler Heating"
                    title="Direct replacement."
                    titleHighlight="Instant upgrade."
                    description="ThermaSkirt connects directly to your existing central heating boiler. Whether it's a traditional gas combi, a system boiler, or an oil-fired unit, ThermaSkirt drops straight onto the existing 15mm or 10mm pipework, instantly modernising your home's heating without complex re-piping."
                    primaryCta={{ text: "Get a System Quote", href: "/homeowners/get-a-quote" }}
                    imageSrc="/assets/images/homeowner-boiler.jpg"
                    imageAlt="A beautifully modernised living space heated by a boiler-connected ThermaSkirt system"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Skirting Board Heating for Boiler Systems</h2>
                            <p className="text-xl font-light text-dh-dark mb-12 leading-relaxed">
                                ThermaSkirt is a highly responsive radiant heating system designed to act as a direct retrofit replacement for steel panel radiators. By connecting to standard gas, oil, or electric boilers operating at 60-75°C flow temperatures, it provides ultra-fast BSRIA-certified heat distribution while reclaiming 100% of your wall space.
                            </p>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Installation Simplicity</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Utilise Your Existing Pipes</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Upgrading the heating in a lived-in property is usually a messy affair. Attempting to retrofit wet underfloor heating requires digging up floors and laying miles of new, specialized plastic pipework to a central manifold. Not only is this expensive, but it takes weeks of disruption.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt is vastly simpler. Because it operates on the same hydraulic principles as a standard radiator, it connects directly into the existing &apos;flow and return&apos; pipework protruding from your walls or floors. Plumbers simply isolate the old radiator, cut the existing 15mm copper or 10mm microbore pipes, and connect them straight into the ThermaSkirt manifold using standard compression fittings.
                            </p>
                        </article>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dh-grey-light border border-dh-grey-light/50">
                                {/* Next Image component pointing to a realistic stock/asset path */}
                                <div className="absolute inset-0 flex items-center justify-center text-dh-grey">Boiler Image 1</div>
                            </div>
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dh-grey-light border border-dh-grey-light/50">
                                <div className="absolute inset-0 flex items-center justify-center text-dh-grey">Boiler Image 2</div>
                            </div>
                        </div>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Combustion Efficiency</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Future-Proof Your Condensing Boiler</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                The vast majority of modern gas boilers in the UK are &apos;condensing&apos; boilers. However, they only achieve their advertised A-rated efficiency (typically 90%+) when the return water temperature drops below 55°C, allowing the boiler to recover latent heat from the flue gases. Over-sized radiators running at 75°C prevent this from happening.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                Because ThermaSkirt turns the entire perimeter of the room into an incredibly effective aluminium heat emitter, you can purposely lower your boiler&apos;s flow temperature down to 50-60°C. By spreading the required heat output over 15 linear metres rather than a 1-metre steel square, your room gets just as warm, but your boiler is finally permitted to condense—drastically reducing your gas bills.
                            </p>
                        </article>
                    </div>
                </section>

                <TestimonialStrip
                    quote="We wanted to get rid of the ugly lounge radiators but didn't want the hassle or cost of UFH. The plumber drained the system, removed the rads, connected ThermaSkirt to the same pipes and refilled the boiler. Done in a day."
                    author="Martin C."
                    tags={['Living Room', 'Gas Combi Boiler']}
                />

                <FAQText
                    faqs={[
                        {
                            question: "Does it work with older open-vented (header tank) boilers?",
                            answer: "Yes. Providing your system is fairly clean and has been dosed with a central heating inhibitor, ThermaSkirt works flawlessly on both sealed pressurised systems (combi boilers) and traditional gravity-fed open-vented systems."
                        },
                        {
                            question: "Can I connect it to 10mm microbore plastic pipe?",
                            answer: "Yes. ThermaSkirt supply lines can easily adapt to 10mm microbore (copper or plastic push-fit) via standard plumbing reduction fittings located inside the skirting board connection covers."
                        },
                        {
                            question: "Will it make my boiler work harder?",
                            answer: "No. The total water volume inside a ThermaSkirt system is substantially lower than standard radiators. The aluminium profile heats up incredibly fast, meaning your boiler spends less time burning gas to warm up the water circuit."
                        }
                    ]}
                />

                <CTABanner
                    heading="Upgrade your radiators today."
                    description="Upload your room dimensions for a fast, free itemised quote."
                    primaryCTA="Get a Free Quote"
                    primaryCTALink="/homeowners/get-a-quote"
                    secondaryCTA="Find an Installer"
                    secondaryCTALink="/homeowners/find-an-installer"
                />
            </main>
        </>
    );
}
