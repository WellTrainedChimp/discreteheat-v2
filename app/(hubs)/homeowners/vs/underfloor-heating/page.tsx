import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import ComparisonTable from '@/components/server/ComparisonTable';
import CTABanner from '@/components/blocks/CTABanner';
import TestimonialStrip from '@/components/blocks/TestimonialStrip';
import CaseStudySection from '@/components/blocks/CaseStudySection';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'ThermaSkirt vs Underfloor Heating (UFH) | Comparison',
    description: 'Compare skirting board heating against underfloor heating. See the differences in cost, disruption, response time, and thermal comfort to make the right choice for your home.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/vs/underfloor-heating/',
    },
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=328b67ed-7ad0-42ad-87be-2cf17718c48e', width: 1200, height: 630, alt: 'ThermaSkirt vs Underfloor Heating (UFH) | Comparison' }],
    },
};

export default function VsUfhPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Direct Comparison"
                    title="ThermaSkirt vs"
                    titleHighlight="Underfloor Heating"
                    description="Both systems free up your walls and deliver excellent radiant heat that works perfectly with heat pumps. The difference lies entirely in the installation, the cost, and the response time. Here is the honest, side-by-side comparison."
                    primaryCta={{ text: "Get a ThermaSkirt Quote", href: "/homeowners/get-a-quote" }}
                    imageSrc="https://www.discreteheat.com/MediaHandler.ashx?id=328b67ed-7ad0-42ad-87be-2cf17718c48e"
                    imageAlt="Split screen showing ThermaSkirt installation vs Underfloor Heating piping"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">ThermaSkirt vs Underfloor Heating</h2>
                            <p className="text-xl font-light text-dh-dark mb-12 leading-relaxed">
                                ThermaSkirt and wet underfloor heating (UFH) are both invisible, radiant heating systems optimized for low flow temperatures (35-45°C). While UFH is the gold standard for new builds pouring fresh screed, ThermaSkirt is the superior solution for retrofit and renovation projects because it delivers the exact same thermal comfort without ripping up existing floors or raising floor heights by 15-20mm.
                            </p>

                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Installation Cost and Disruption</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Wet UFH sits inside the thermal mass of the floor. For a new build, this is simple. However, retrofitting an existing home makes UFH astronomically expensive and deeply disruptive. You must either dig down into concrete foundations, or lay an overlay board that permanently raises the floor. This ripple effect means every interior door must be planed down and original features can be damaged.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                ThermaSkirt installs entirely above ground as an aluminium skirting board profile, projecting just 20mm from the wall. It connects directly to your existing 15mm or 10mm central heating pipework. A typical installation takes 1-2 days without lifting a single floorboard or touching a door.
                            </p>

                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Response Time and Thermal Mass</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Underfloor heating relies on heating screed, creating massive thermal mass. This means the system takes hours to warm up and cool down. In a south-facing room with solar gain, UFH will continue radiating heat long after the thermostat tells it to stop, resulting in overheating and wasted energy.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                Because ThermaSkirt is an extruded aluminium profile with a low water volume, it heats up in just 5 minutes and cools down nearly as fast. This provides dynamic, on-demand control over your environment, mimicking the responsiveness of a standard steel panel radiator but delivering the BSRIA-certified radiant comfort profile of UFH.
                            </p>
                        </article>

                        <div className="my-16">
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Side-by-Side System Comparison</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-8">
                                The following table breaks down the critical differences between retrofitting ThermaSkirt versus installing a traditional wet underfloor heating system, assessing heat distribution, disruption, and heat pump compatibility.
                            </p>
                            <ComparisonTable
                                alternativeName="Underfloor Heating (UFH)"
                                rows={[
                                    {
                                        feature: 'Heat Distribution',
                                        thermaskirt: 'Excellent. Less than 1°C variance across the room.',
                                        alternative: 'Excellent. Perfectly uniform warmth from the floor up.'
                                    },
                                    {
                                        feature: 'Installation Disruption',
                                        thermaskirt: 'Minimal. Installs exactly like a standard skirting board in 1-2 days.',
                                        alternative: 'Very High. Requires lifting floors, pouring screed, or raising floor levels.'
                                    },
                                    {
                                        feature: 'Response Time',
                                        thermaskirt: 'Fast. Heats up in 5 minutes, highly controllable.',
                                        alternative: 'Slow. Can take 1-3 hours to heat up the thermal mass of the floor.'
                                    },
                                    {
                                        feature: 'Floor Coverings',
                                        thermaskirt: 'Works with thick carpets, solid wood, rugs, etc.',
                                        alternative: 'Restricted. Thick carpets (>1.5 Tog) act as insulators, blocking heat.'
                                    },
                                    {
                                        feature: 'Heat Pump Compatibility',
                                        thermaskirt: 'Excellent. Designed for low flow temperatures (35-45°C).',
                                        alternative: 'Excellent. The most common pairing for heat pumps in new builds.'
                                    },
                                    {
                                        feature: 'Retrofit Cost',
                                        thermaskirt: 'Low to Medium. Plumbs into existing 15mm or 10mm pipework.',
                                        alternative: 'Very High. Deep secondary costs (floor removal, screed, doors).'
                                    }
                                ]}
                            />
                            <p className="text-md font-medium text-dh-grey mt-4">
                                *Summary: Both systems are premium low-temperature emitters, but ThermaSkirt is vastly cheaper and faster to install in existing properties.*
                            </p>
                        </div>

                        <article className="bg-dh-grey-light p-8 rounded-xl">
                            <h3 className="text-2xl font-semibold text-dh-dark mb-6">Which system is right for you?</h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-bold text-dh-dark">Scenario A: You are building a new extension or a self-build property</h4>
                                    <p className="text-dh-grey mt-2"><strong>Choose Underfloor Heating.</strong> If you are pouring a fresh concrete slab anyway, laying UFH loops into the screed is straightforward and cost-effective. It gives you entirely free walls and excellent baseline heat.</p>
                                </div>
                                <hr className="border-dh-grey-light/50" />
                                <div>
                                    <h4 className="text-lg font-bold text-dh-dark">Scenario B: You are renovating an existing house or upgrading to a heat pump</h4>
                                    <p className="text-dh-grey mt-2"><strong>Choose ThermaSkirt.</strong> Trying to retrofit UFH means ripping up your existing floors or raising the floor height by 15-20mm. ThermaSkirt connects to your existing 15mm pipes, installs in a day, and performs at the same 35-45°C flow temperatures.</p>
                                </div>
                                <hr className="border-dh-grey-light/50" />
                                <div>
                                    <h4 className="text-lg font-bold text-dh-dark">Scenario C: You have thick carpets or dense solid wood floors</h4>
                                    <p className="text-dh-grey mt-2"><strong>Choose ThermaSkirt.</strong> Carpets and thick underlays trap UFH heat beneath the floor, ruining efficiency. Because ThermaSkirt is an above-ground aluminium profile, your flooring choices do not impact its output.</p>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>

                <TestimonialStrip
                    quote="I got a quote for underfloor heating for our downstairs renovation and nearly fell over. ThermaSkirt came in at a fraction of the price, looks incredible, and the house heats up in minutes, not hours."
                    author="Michael T."
                    tags={['Renovation', 'Cost Comparison']}
                />

                <CaseStudySection
                    heading="Best of Both Worlds — UFH Downstairs, ThermaSkirt Upstairs"
                    description="When Emma and Dan converted their 1970s bungalow into a two-storey family home, their builder laid underfloor heating in the new ground-floor slab. But upstairs, on timber joists, UFH wasn't an option. ThermaSkirt was the perfect complement — same radiant comfort, same low flow temperatures, zero floor disruption. Both systems run happily from one gas boiler."
                    mediaId="888x825p0o"
                    caption="Emma & Dan's renovation — UFH on the ground floor, ThermaSkirt on the first floor."
                />

                <FAQText
                    sectionLabel="Comparison FAQs"
                    faqs={[
                        {
                            question: "Does ThermaSkirt really feel like underfloor heating?",
                            answer: "Yes. Because ThermaSkirt is a contiguous heat source wrapping around the perimeter at floor level, the heat radiates inward and gently rises, virtually mimicking the temperature profile of UFH. BSRIA tests show near identical comfort gradients."
                        },
                        {
                            question: "I have thick carpets, which system is better?",
                            answer: "ThermaSkirt. Thick carpets and underlay have a high Tog rating, which acts as an insulator over underfloor heating, trapping the heat below the floor. ThermaSkirt radiates heat directly into the room above the floorline, so your flooring choice does not affect your heating performance."
                        },
                        {
                            question: "Can I use ThermaSkirt upstairs and UFH downstairs?",
                            answer: "Yes, this is an incredibly common setup in new builds. UFH is laid in the downstairs concrete slab, and ThermaSkirt is fitted upstairs on the timber joist floors where UFH would be difficult to install."
                        }
                    ]}
                />

                <CTABanner
                    heading="Skip the screed and the mess."
                    description="Upload your room sizes for a free ThermaSkirt quote and see the savings compared to UFH."
                    primaryCTA="Get an Itemised Quote"
                    primaryCTALink="/homeowners/get-a-quote"
                    secondaryCTA="Order a Free Sample"
                    secondaryCTALink="/homeowners/request-a-sample"
                />
            </main>
        </>
    );
}
