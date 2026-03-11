import SubHubHero from '@/components/server/SubHubHero';
import StatsStrip from '@/components/blocks/StatsStrip';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import TestimonialStrip from '@/components/blocks/TestimonialStrip';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import NavbarMorph from '@/components/client/NavbarMorph';
import CaseStudySection from '@/components/blocks/CaseStudySection';

export const metadata = {
    title: 'Boiler Compatible Skirting Board Heating | ThermaSkirt',
    description: 'Upgrade your gas or oil boiler heating system. ThermaSkirt connects directly to your existing radiator pipes, delivering fast, even radiant heat without the wall clutter. Up to 20% lower gas bills.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/by-heat-source/boiler/',
    },
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=bb14a53a-1b33-4363-b89a-56d430274cfa', width: 1200, height: 630, alt: 'Boiler Compatible Skirting Board Heating | ThermaSkirt' }],
    },
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
                    description="ThermaSkirt connects directly to your existing central heating boiler—gas combi, system boiler, or oil-fired unit. It drops straight onto your existing 15mm or 10mm pipework using standard compression fittings, instantly modernising your home's heating without complex re-piping or disruption."
                    primaryCta={{ text: "Get a System Quote", href: "/homeowners/get-a-quote" }}
                    secondaryCta={{ text: "How Much Does It Cost?", href: "/homeowners/cost-guide" }}
                    imageSrc="https://www.discreteheat.com/MediaHandler.ashx?id=bb14a53a-1b33-4363-b89a-56d430274cfa"
                    imageAlt="A beautifully modernised living space heated by a boiler-connected ThermaSkirt system"
                />

                <StatsStrip
                    stats={[
                        { value: '20%', label: 'Lower Gas Bills', source: 'by running your boiler in condensing mode' },
                        { value: '50–55°C', label: 'Optimal Flow Temp', source: 'vs 70–80°C with radiators' },
                        { value: '1–2 days', label: 'Typical Installation', source: 'per room, on existing pipework' },
                        { value: '100%', label: 'Wall Space Reclaimed', source: 'no radiators, no restrictions' },
                    ]}
                />

                {/* ── Section 1: Core Proposition ── */}
                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Skirting Board Heating for Gas &amp; Oil Boiler Systems</h2>
                            <p className="text-xl font-light text-dh-dark mb-12 leading-relaxed">
                                ThermaSkirt H2O is a highly responsive radiant heating system designed as a direct retrofit replacement for steel panel radiators. Connected to any standard gas, oil, or LPG boiler operating at 50–75°C, it provides ultra-fast, BSRIA-certified heat distribution while reclaiming 100% of your wall space. Over 60,000 systems installed across the UK since 2007.
                            </p>

                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Installation</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Utilise Your Existing Pipes</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Upgrading the heating in a lived-in property is usually a messy affair. Retrofitting wet underfloor heating requires digging up floors and laying metres of new plastic pipework to a central manifold. The cost is high, the disruption severe, and the process takes weeks.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                ThermaSkirt is vastly simpler. Because it operates on the same hydraulic principles as a standard radiator, it connects directly into the existing flow-and-return pipework protruding from your walls or floors. Your plumber isolates the old radiator, cuts the existing 15mm copper or 10mm microbore pipes, and connects them straight into the ThermaSkirt manifold using standard compression fittings. No specialist tools, no manifold, no floor disruption.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt works with all standard boiler controls including Hive, Nest, Tado, conventional programmers, and thermostatic radiator valves (TRVs). You don&apos;t need to change your thermostat, your timer, or your control system.
                            </p>
                        </article>

                        {/* ── Section 2: Condensing Efficiency ── */}
                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Efficiency</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Up to 20% Lower Gas Bills</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                The vast majority of modern gas boilers in the UK are condensing boilers. However, they only achieve their advertised A-rated efficiency (typically 90%+) when the return water temperature drops below 55°C, allowing the boiler to recover latent heat from the flue gases. Most homes run their radiators at 70–80°C—well above the condensing threshold—meaning the boiler never actually condenses.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Because ThermaSkirt turns the entire perimeter of the room into a highly conductive aluminium heat emitter, you can purposely lower your boiler&apos;s flow temperature to 50–55°C. The room gets just as warm—you&apos;re simply spreading the required heat output over 12–15 linear metres rather than a 1-metre steel panel. But now your boiler is finally permitted to condense, recovering waste heat from the flue gases and reducing your gas consumption by up to 20%.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                This efficiency gain costs nothing extra in running costs. It&apos;s a direct consequence of using a larger emitter surface area at a lower temperature—the same physics that makes ThermaSkirt work so well with heat pumps.
                            </p>
                        </article>

                        {/* ── Section 3: Future Proofing ── */}
                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Future Proofing</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Ready for a Heat Pump When You Are</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                If you&apos;re considering switching to a heat pump in the next 5–10 years but aren&apos;t ready yet, ThermaSkirt is the smartest radiator replacement you can make today. The same system that runs at 60°C on your gas boiler will deliver excellent performance at 40°C on a future heat pump—without any modification, replacement, or additional cost.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                Standard radiators cannot do this. A radiator sized for a gas boiler at 70°C will be woefully undersized for a heat pump at 40°C. If you replace your radiators now with like-for-like panels, you&apos;ll need to replace them all over again when the heat pump arrives. ThermaSkirt eliminates that wasted investment entirely.
                            </p>
                        </article>
                    </div>
                </section>

                <TestimonialStrip
                    quote="We wanted to get rid of the ugly lounge radiators but didn't want the hassle or cost of UFH. The plumber drained the system, removed the rads, connected ThermaSkirt to the same pipes and refilled the boiler. Done in a day."
                    author="Martin C."
                    tags={['Living Room', 'Gas Combi Boiler']}
                />

                <CaseStudySection
                    heading="Renovation & Extension — Gas Boiler with ThermaSkirt Upstairs"
                    description="A 1970s bungalow renovated into a full two-storey family home. The owners chose underfloor heating on the ground floor for their open-plan kitchen-diner, and ThermaSkirt upstairs for all four bedrooms and the landing. Each bedroom has individual room controllers with colour-coded skirting profiles. The homeowner specifically chose ThermaSkirt for clean lines, flexible furniture placement, and easy cleaning—no radiators gathering dust on the walls."
                    mediaId="888x825p0o"
                    caption="The system currently runs from a gas boiler with plans to upgrade to a heat pump in the future—a transition ThermaSkirt supports without any modification."
                />

                <FAQText
                    heading="Boiler Heating — Common Questions"
                    faqs={[
                        {
                            question: "Does it work with older open-vented (header tank) boilers?",
                            answer: "Yes. Providing your system is fairly clean and has been dosed with a central heating inhibitor, ThermaSkirt works on both sealed pressurised systems (combi boilers) and traditional gravity-fed open-vented systems with a header tank in the loft."
                        },
                        {
                            question: "Can I connect it to 10mm microbore pipe?",
                            answer: "Yes. ThermaSkirt supply lines adapt to 10mm microbore (copper or plastic push-fit) via standard plumbing reduction fittings located inside the skirting board connection covers. In fact, ThermaSkirt has a lower pressure drop than standard radiators, so microbore systems often perform better."
                        },
                        {
                            question: "Will it make my boiler work harder?",
                            answer: "No—the opposite. The total water volume inside a ThermaSkirt system is substantially lower than standard radiators. The aluminium profile heats up incredibly fast, meaning your boiler spends less time burning gas to warm up the water circuit. And because you can lower the flow temperature, the boiler condenses more efficiently."
                        },
                        {
                            question: "Can I fit ThermaSkirt in just one room, or does it have to be the whole house?",
                            answer: "You can fit it in one room, several rooms, or the whole house. ThermaSkirt coexists perfectly with existing radiators and towel rails on the same heating circuit. Many homeowners start with the living room and bedrooms, and keep towel rails in the bathroom."
                        },
                        {
                            question: "Does it work with oil boilers?",
                            answer: "Yes. Oil boilers typically operate at higher flow temperatures (65–80°C), which means ThermaSkirt delivers even greater output per metre. The installation is identical to a gas boiler setup—standard flow and return connections using compression fittings."
                        },
                        {
                            question: "How much lower can I set my boiler temperature?",
                            answer: "Most homeowners with ThermaSkirt reduce their boiler flow temperature from 70–80°C down to 50–55°C. This keeps the boiler in condensing mode, recovering waste heat from the flue gases. The result is up to 20% lower gas bills without any loss of comfort."
                        },
                        {
                            question: "Is ThermaSkirt compatible with smart thermostats like Hive or Nest?",
                            answer: "Yes. ThermaSkirt works with every standard boiler control system including Hive, Nest, Tado, Honeywell programmers, and thermostatic radiator valves (TRVs). No special controls or wiring changes are needed."
                        },
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore more heating options"
                    description="See how ThermaSkirt works with other heating systems and project types."
                    tiles={[
                        { title: 'Heat Pump', description: 'Optimised for 35–45°C flow temperatures. Improves COP by up to 0.5.', href: '/homeowners/by-heat-source/heat-pump' },
                        { title: 'Electric Only', description: 'ThermaSkirt-e: 240V heating with zero plumbing.', href: '/homeowners/by-heat-source/electric' },
                        { title: 'Solar PV & Thermal', description: 'Maximise self-consumption of free solar energy.', href: '/homeowners/by-heat-source/solar' },
                        { title: 'Renovation Projects', description: 'Modernise your heating as part of a wider renovation.', href: '/homeowners/by-project/renovation' },
                        { title: 'Extension Projects', description: 'Heat a new extension without extending your underfloor system.', href: '/homeowners/by-project/extension' },
                        { title: 'ThermaSkirt vs Radiators', description: 'Side-by-side comparison of output, cost, and aesthetics.', href: '/homeowners/vs/radiators' },
                        { title: 'Cost Guide', description: 'Transparent pricing for every ThermaSkirt configuration.', href: '/homeowners/cost-guide' },
                    ]}
                />

                <CTABanner
                    heading="Upgrade your radiators today."
                    description="Upload your room dimensions for a fast, free itemised quote. We'll calculate the exact ThermaSkirt metres and cost for your boiler system."
                    primaryCTA="Get a Free Quote"
                    primaryCTALink="/homeowners/get-a-quote"
                    secondaryCTA="Find a ThermaSkirt Installer"
                    secondaryCTALink="/homeowners/find-an-installer"
                    additionalLinks={[
                        { text: "View Cost Guide", href: "/homeowners/cost-guide" },
                        { text: "DIY or Professional Install?", href: "/homeowners/diy-or-professional" },
                    ]}
                />
            </main>
        </>
    );
}
