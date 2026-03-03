import SubHubHero from '@/components/server/SubHubHero';
import StatsStrip from '@/components/blocks/StatsStrip';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import TestimonialStrip from '@/components/blocks/TestimonialStrip';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import NavbarMorph from '@/components/client/NavbarMorph';
import WistiaPlayer from '@/components/client/WistiaPlayer';
import Link from 'next/link';

export const metadata = {
    title: 'Skirting Board Heating for Heat Pumps | ThermaSkirt',
    description: 'The perfect emitter for air source heat pumps. ThermaSkirt provides the large surface area needed for low flow temperatures (35–45°C) without the disruption of underfloor heating or oversized radiators. BSRIA tested, Energy House 2.0 certified.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/by-heat-source/heat-pump/',
    }
};

export default function HeatPumpPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Heat Pumps"
                    title="The missing link in your"
                    titleHighlight="heat pump upgrade."
                    description="Heat pumps are incredibly efficient—provided they run at low temperatures (35–45°C). ThermaSkirt delivers the massive surface area required to heat your home at these flow temperatures, outperforming standard radiators and matching the comfort of underfloor heating without digging up your floors."
                    primaryCta={{ text: "Get a Heat Pump Quote", href: "/homeowners/get-a-quote" }}
                    secondaryCta={{ text: "See the Test Data", href: "/specifiers/technical-data/bsria-test-results" }}
                    imageSrc="/assets/images/homeowner-heat-pump.jpg"
                    imageAlt="A modern home with an air source heat pump outside and ThermaSkirt skirting board heating inside"
                />

                <StatsStrip
                    stats={[
                        { value: '+0.5', label: 'COP Improvement', source: 'Energy House 2.0 tested', href: '/specifiers/technical-data/energy-house' },
                        { value: '48%', label: 'Output Retained at dT20', source: 'vs 30% for radiators' },
                        { value: '35–45°C', label: 'Optimal Flow Range', source: 'maximises heat pump SCOP' },
                        { value: '£7,500', label: 'BUS Grant Compatible', source: 'Boiler Upgrade Scheme' },
                    ]}
                />

                {/* ── Section 1: The Physics ── */}
                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Skirting Board Heating for Heat Pumps</h2>
                            <p className="text-xl font-light text-dh-dark mb-12 leading-relaxed">
                                ThermaSkirt H2O is designed to operate at 35–45°C flow temperatures, making it the most efficient skirting board heating emitter for air source and ground source heat pumps. At low flow temperatures, ThermaSkirt retains 48% of its rated output compared to 30% for conventional panel radiators—improving heat pump COP by 0.4 to 0.5 in real-world installations verified at the <Link href="/specifiers/technical-data/energy-house" className="text-dh-red hover:underline">University of Salford Energy House 2.0</Link>.
                            </p>

                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Physics</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Why Heat Pumps Need Different Emitters</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                A gas boiler delivers water to your radiators at 70–80°C. An air source heat pump (ASHP) reaches its maximum efficiency (COP) when it delivers water at 35–45°C. To emit the same amount of heat into your room at these lower temperatures, your heat emitter must have a significantly larger surface area. The physics is non-negotiable: halve the temperature difference between your emitter and the room, and you need roughly double the radiating surface.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                If you keep your existing standard radiators, the heat pump will struggle to warm the house, or it will be forced to work harder at higher flow temperatures—ruining its efficiency and driving up your electricity bills. Many installers compensate by fitting enormous Type 33 double-convector radiators, which dominate your wall space and look deeply unattractive.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                ThermaSkirt solves this by turning the entire perimeter of your room into an aerospace-grade aluminium heat emitter. A typical living room has 12–15 linear metres of skirting board. That&apos;s 12–15 metres of continuous radiant surface—far more than even an oversized radiator—delivering the necessary heat output without sacrificing a single square centimetre of wall space.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                                <div className="p-10 bg-dh-grey-light rounded-[14px] flex flex-col items-center justify-center text-center">
                                    <span className="text-5xl font-light text-dh-red mb-4">+0.4 to 0.5</span>
                                    <h4 className="text-lg font-semibold text-dh-dark mb-2">COP Improvement</h4>
                                    <p className="text-sm text-dh-grey">Tested at the University of Salford Energy House 2.0, showing significant improvements to Seasonal Coefficient of Performance (SCOP) versus standard radiators at identical flow temperatures.</p>
                                </div>
                                <div className="p-10 bg-dh-grey-light rounded-[14px] flex flex-col items-center justify-center text-center">
                                    <span className="text-5xl font-light text-dh-red mb-4">48%</span>
                                    <h4 className="text-lg font-semibold text-dh-dark mb-2">Output Retention at dT20</h4>
                                    <p className="text-sm text-dh-grey">At ultra-low 40°C flow temperatures (dT20), ThermaSkirt retains 48% of its rated output. Conventional panel radiators retain approximately 30% under the same conditions.</p>
                                </div>
                            </div>
                        </article>

                        {/* ── Section 2: Output Data ── */}
                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Performance Data</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Real Output at Heat Pump Temperatures</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-8">
                                The following figures are independently verified by BSRIA (Building Services Research and Information Association) under controlled laboratory conditions. They show the heat output of ThermaSkirt BM2 profile per linear metre at typical heat pump flow temperatures.
                            </p>

                            <div className="overflow-x-auto mb-8">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-dh-dark">
                                            <th className="py-3 pr-6 text-sm font-semibold text-dh-dark uppercase tracking-wider">Flow Temp</th>
                                            <th className="py-3 pr-6 text-sm font-semibold text-dh-dark uppercase tracking-wider">Output (W/m)</th>
                                            <th className="py-3 text-sm font-semibold text-dh-dark uppercase tracking-wider">Typical Application</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-dh-grey">
                                        <tr className="border-b border-dh-grey-light">
                                            <td className="py-3 pr-6 font-medium">35°C</td>
                                            <td className="py-3 pr-6">31 W/m</td>
                                            <td className="py-3">Well-insulated new build / Passivhaus</td>
                                        </tr>
                                        <tr className="border-b border-dh-grey-light">
                                            <td className="py-3 pr-6 font-medium">40°C</td>
                                            <td className="py-3 pr-6">44 W/m</td>
                                            <td className="py-3">Post-2010 build / solid-wall insulated retrofit</td>
                                        </tr>
                                        <tr className="border-b border-dh-grey-light">
                                            <td className="py-3 pr-6 font-medium">45°C</td>
                                            <td className="py-3 pr-6">58 W/m</td>
                                            <td className="py-3">Pre-2000 semi-detached / cavity wall</td>
                                        </tr>
                                        <tr className="border-b border-dh-grey-light">
                                            <td className="py-3 pr-6 font-medium">50°C</td>
                                            <td className="py-3 pr-6">72 W/m</td>
                                            <td className="py-3">Older property / hybrid heat pump+boiler</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-sm text-dh-grey mb-12">
                                Source: <Link href="/specifiers/technical-data/bsria-test-results" className="text-dh-red hover:underline">BSRIA test report</Link>, ThermaSkirt BM2 profile, room temperature 21°C. Full output tables available in our <Link href="/specifiers/technical-data/output-tables" className="text-dh-red hover:underline">technical data section</Link>.
                            </p>
                        </article>

                        {/* ── Section 3: Retrofit Installation ── */}
                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Installation</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">A Clean Retrofit—No Digging Up Floors</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Underfloor heating is the default choice for heat pumps in brand new builds. However, retrofitting UFH into a Victorian terrace or a 1970s semi-detached property is expensive and highly disruptive—requiring either digging up concrete slabs or raising the entire floor level by 15–20mm, which means re-cutting every door, re-fitting every threshold, and often losing months of habitable living space.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                ThermaSkirt installs cleanly above ground, connecting directly to your existing 15mm or 10mm microbore pipework. Your heat pump installer removes the old radiators, extends the pipes to skirting board level, and fits the 20mm-deep ThermaSkirt profile. A typical 3-bedroom house can be fully installed in 2–3 days with minimal disruption. You keep your floors, your doors, and your sanity.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                This matters for the <strong>Boiler Upgrade Scheme (BUS)</strong>. The £7,500 government grant covers the cost of the heat pump itself, but the emitter upgrade is a separate cost. ThermaSkirt keeps that cost dramatically lower than UFH while delivering the low-temperature performance the heat pump needs to satisfy the grant conditions.
                            </p>
                        </article>

                        {/* ── Section 4: SAP / EPC ── */}
                        <article className="mt-12">
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Energy Performance</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">EPC and SAP Improvements</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Switching from a gas boiler with standard radiators to a heat pump with ThermaSkirt doesn&apos;t just lower your bills—it directly improves your home&apos;s Energy Performance Certificate (EPC) rating. A typical 3-bedroom semi-detached house (90m², 6,000 kWh/yr heat demand) gains approximately 4 SAP points from the emitter improvement alone, which can be enough to move from a D rating into a C.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                The SPF (Seasonal Performance Factor) improvement of 0.4–0.5 is registered in the SAP 10.2 calculation methodology used for EPCs. This means ThermaSkirt isn&apos;t just more comfortable than radiators—it is officially more energy-efficient in the government&apos;s own assessment framework.
                            </p>
                        </article>
                    </div>
                </section>

                <TestimonialStrip
                    quote="We got a heat pump and quickly realised our old radiators couldn't cope at 40°C. We didn't want giant double panels everywhere, so we fitted ThermaSkirt upstairs and down. The house is constantly warm and our bills are significantly lower than with the old gas boiler."
                    author="David Harrison"
                    tags={['Air Source Heat Pump', 'Retrofit']}
                />

                {/* ── Case Study Videos ── */}
                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto">
                        <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Case Studies</span>
                        <h2 className="text-3xl font-light text-dh-dark mb-4 tracking-tight">Real Heat Pump Homes with ThermaSkirt</h2>
                        <p className="text-lg text-dh-grey leading-relaxed mb-12">
                            Hear directly from homeowners who chose ThermaSkirt as their heat pump emitter. These are unscripted interviews filmed in their own homes.
                        </p>

                        <div className="space-y-16">
                            {/* Case Study 1: SIPS Build New Build */}
                            <article>
                                <h3 className="text-xl font-medium text-dh-dark mb-2">SIPS Panel New Build — Heat Pump &amp; MVHR</h3>
                                <p className="text-base text-dh-grey mb-6">
                                    A self-build project using structural insulated panels (SIPS), an air source heat pump, and mechanical ventilation with heat recovery. The homeowner researched ThermaSkirt for two years before committing, contacting an existing customer twice to confirm satisfaction. DiscreteHeat&apos;s design team provided colour-coded floor plans for pipework routing, and the installation was completed with full confidence from start to finish.
                                </p>
                                <WistiaPlayer mediaId="672glg6n1w" aspect={16/9} />
                            </article>

                            {/* Case Study 2: New Build */}
                            <article>
                                <h3 className="text-xl font-medium text-dh-dark mb-2">New Build — Small Builder &amp; Heat Pump Design</h3>
                                <p className="text-base text-dh-grey mb-6">
                                    A technically-minded small builder designed and constructed an energy-efficient home from the ground up. The project prioritised airtightness, thermal efficiency, and uncluttered interior space. ThermaSkirt was chosen because a heat pump running at low temperatures would require radiators up to 7 metres long in a 4m × 4m room—skirting board heating provided the surface area naturally without any of the visual compromise.
                                </p>
                                <WistiaPlayer mediaId="4lkzk0r7w2" aspect={1.8972332015810276} />
                            </article>
                        </div>
                    </div>
                </section>

                <FAQText
                    heading="Heat Pump Heating — Common Questions"
                    faqs={[
                        {
                            question: "Will ThermaSkirt work with an Air Source Heat Pump (ASHP)?",
                            answer: "Yes—it is specifically designed for it. ThermaSkirt provides the large radiant surface area required for low-temperature heating (35–45°C), ensuring your heat pump operates at its highest COP. Independent testing at the University of Salford Energy House 2.0 confirmed a COP improvement of 0.4–0.5 versus standard radiators."
                        },
                        {
                            question: "Does it work with Ground Source Heat Pumps (GSHP)?",
                            answer: "Yes. The thermodynamic principles are identical. Whether air-source or ground-source, the critical factor is flow temperature. ThermaSkirt is optimised for the dT20–dT30 range that ground source systems typically deliver."
                        },
                        {
                            question: "Do I need to rip up my floors for underfloor heating instead?",
                            answer: "No. That's the primary advantage of ThermaSkirt for retrofit heat pump projects. It installs above ground onto your existing walls, connecting to your existing 15mm or 10mm pipework. No floor disruption, no raised thresholds, no re-hung doors. A full house installation typically takes 2–3 days."
                        },
                        {
                            question: "Do I need to upgrade my pipework?",
                            answer: "Rarely. ThermaSkirt connects to standard 15mm copper or plastic pipe, and works exceptionally well with 10mm microbore systems. The profile has a lower pressure drop than standard convector radiators, so your existing pipe runs are almost always sufficient."
                        },
                        {
                            question: "Is ThermaSkirt eligible for the Boiler Upgrade Scheme (BUS)?",
                            answer: "ThermaSkirt itself isn't what the BUS grant covers—the grant (£7,500) pays for the heat pump. However, ThermaSkirt is the emitter system that makes your heat pump work efficiently at 35–45°C. Without appropriate low-temperature emitters, your heat pump won't deliver the efficiency the grant scheme intends."
                        },
                        {
                            question: "Can I keep some radiators and add ThermaSkirt in other rooms?",
                            answer: "Yes. ThermaSkirt coexists with radiators and towel rails on the same heating circuit. Many homeowners keep bathroom towel rails and replace wall-mounted radiators with ThermaSkirt in living areas and bedrooms where wall space matters most."
                        },
                        {
                            question: "How does it compare to oversized radiators for heat pumps?",
                            answer: "To match ThermaSkirt's output at 40°C, you'd need Type 33 double-convector radiators up to 2–3 times the size of your current ones—often 1.5–2 metres wide per room. ThermaSkirt provides equivalent or greater surface area using the room's existing perimeter, invisible behind your furniture."
                        },
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore more heating options"
                    description="See how ThermaSkirt works with other heating systems and project types."
                    tiles={[
                        { title: 'Gas or Oil Boiler', description: 'Direct replacement for radiators on any existing wet system.', href: '/homeowners/by-heat-source/boiler' },
                        { title: 'Electric Only', description: 'ThermaSkirt-e: 240V heating with zero plumbing.', href: '/homeowners/by-heat-source/electric' },
                        { title: 'Solar PV & Thermal', description: 'Maximise self-consumption of free solar energy.', href: '/homeowners/by-heat-source/solar' },
                        { title: 'New Build Projects', description: 'Designed in from the start—optimised for modern construction.', href: '/homeowners/by-project/new-build' },
                        { title: 'Retrofit Projects', description: 'Upgrade without disruption in any existing property.', href: '/homeowners/by-project/retrofit' },
                        { title: 'ThermaSkirt vs Radiators', description: 'Side-by-side comparison of output, cost, and aesthetics.', href: '/homeowners/vs/radiators' },
                        { title: 'ThermaSkirt vs UFH', description: 'Why skirting board heating beats underfloor in retrofits.', href: '/homeowners/vs/underfloor-heating' },
                    ]}
                />

                <CTABanner
                    heading="Ready to optimise your heat pump?"
                    description="Send us your room sizes and heat pump model. We'll calculate the exact ThermaSkirt output and provide an itemised quote—free, no obligation."
                    primaryCTA="Get an Itemised Quote"
                    primaryCTALink="/homeowners/get-a-quote"
                    secondaryCTA="Read the BSRIA Test Results"
                    secondaryCTALink="/specifiers/technical-data/bsria-test-results"
                    additionalLinks={[
                        { text: "Find a ThermaSkirt Installer", href: "/homeowners/find-an-installer" },
                        { text: "View Cost Guide", href: "/homeowners/cost-guide" },
                    ]}
                />
            </main>
        </>
    );
}
