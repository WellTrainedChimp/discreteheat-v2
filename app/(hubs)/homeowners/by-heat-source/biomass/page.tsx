import SubHubHero from '@/components/server/SubHubHero';
import StatsStrip from '@/components/blocks/StatsStrip';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import TestimonialStrip from '@/components/blocks/TestimonialStrip';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Biomass Boiler Skirting Board Heating | ThermaSkirt',
    description: 'The perfect emitter for high-temperature biomass and log gasification boilers. ThermaSkirt distributes intense 80°C+ heat evenly around the perimeter, eliminating the scorching created by conventional radiators.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/by-heat-source/biomass/',
    },
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=1fe3a518-c4e0-4fa9-acc2-23dd9fadf5bc', width: 1200, height: 630, alt: 'Biomass Boiler Skirting Board Heating | ThermaSkirt' }],
    },
};

export default function BiomassPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Biomass Heating"
                    title="Intense heat,"
                    titleHighlight="distributed gracefully."
                    description="Biomass boilers and log gasification systems produce very high flow temperatures—often 75–80°C. Pumping this into a single steel radiator creates an unbearably hot convection draft next to it and leaves the rest of the room cold. ThermaSkirt spreads this intense heat evenly around the entire perimeter."
                    primaryCta={{ text: "Get a System Quote", href: "/homeowners/get-a-quote" }}
                    secondaryCta={{ text: "How Much Does It Cost?", href: "/homeowners/cost-guide" }}
                    imageSrc="https://www.discreteheat.com/MediaHandler.ashx?id=1fe3a518-c4e0-4fa9-acc2-23dd9fadf5bc"
                    imageAlt="A barn conversion heated by a biomass-powered ThermaSkirt system"
                />

                <StatsStrip
                    stats={[
                        { value: '80°C+', label: 'Handles High Flow Temps', source: 'no blending valve required' },
                        { value: '20mm', label: 'Projection from Wall', source: 'installs above stone floors' },
                        { value: 'Zero', label: 'Cold Spots', source: 'perimeter radiant distribution' },
                        { value: 'Instant', label: 'Response Time', source: 'aluminium heats in minutes' },
                    ]}
                />

                {/* ── Section 1: Core Proposition ── */}
                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Skirting Board Heating for Biomass Boilers</h2>
                            <p className="text-xl font-light text-dh-dark mb-12 leading-relaxed">
                                ThermaSkirt H2O is uniquely positioned to handle the aggressive heat output of solid fuel systems. Connected to a biomass boiler pushing 75–80°C flow temperatures via an accumulator tank, the aluminium skirting profile safely radiates massive kW outputs evenly into large spaces—providing BSRIA-certified thermal comfort across barn conversions, farmhouses, and rural properties where biomass is the primary fuel.
                            </p>

                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Heat Distribution</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Eliminating Point-Source Scorching</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Biomass log and pellet boilers are designed to burn fiercely to charge large water buffer tanks. When this incredibly hot 80°C water is released into a traditional Type 22 or Type 33 double-convector radiator, the result is deeply unpleasant. The steel panel becomes dangerously hot to touch, and it blasts aggressive convection drafts into the ceiling, creating an unbearable hot zone within two metres of the radiator while the far side of the room stays cold.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                ThermaSkirt prevents this entirely. By distributing the identical kW heat load horizontally across 15–30 linear metres of aluminium extrusion, the surface temperature of the skirting board remains dramatically lower and safer than a radiator carrying the same water temperature. The room receives the full BTU heat input, but it arrives as a gentle, enveloping radiant warmth from the floor upwards—no scorching, no cold corners, no convection drafts.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                This is particularly important in family homes. RoSPA data shows that radiator burns are a significant cause of childhood injury. With ThermaSkirt, the surface temperature at 80°C flow is distributed across such a large area that the fascia remains warm rather than blistering—dramatically reducing the burn risk.
                            </p>
                        </article>

                        {/* ── Section 2: Solid Floor Properties ── */}
                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Rural Properties</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Above the Stone Floor, Not Under It</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Many rural biomass properties feature solid stone or concrete floors, making underfloor heating incredibly difficult to retrofit. Furthermore, UFH is notoriously sluggish to respond. If a large barn conversion is empty during the day, heating a massive 150mm screed slab via the biomass accumulator tank wastes huge amounts of stored energy before anyone walks through the door.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                ThermaSkirt installs entirely above the solid stone floor, projecting just 20mm from the walls. Because the water volume inside the profile is tiny and the aluminium is highly conductive, it draws exactly what it needs from the buffer tank and heats the room within minutes. When the thermostat is satisfied, the system shuts down immediately, preserving your expensive biomass pellet supply for when you actually need it.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                This responsiveness is a fundamental advantage over UFH in any property with intermittent occupancy—holiday lets, weekend retreats, working farms, and large country homes where different wings are used at different times of day.
                            </p>
                        </article>

                        {/* ── Section 3: No Blending Valve ── */}
                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Simplicity</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">No Blending Valve, No Secondary Pump</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Underfloor heating connected to a biomass system requires expensive thermostatic blending valves on the manifold—because the screed and pipes will crack if exposed to water above 50°C. This adds cost, complexity, and another potential point of failure.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt is manufactured from solid aluminium and handles 80°C+ water effortlessly—no blending valves, no secondary circulation pumps, no temperature limiters on the manifold. The system connects directly to the buffer tank&apos;s heating loop using standard 15mm compression fittings. Simpler installation, fewer parts, fewer things to go wrong.
                            </p>
                        </article>
                    </div>
                </section>

                <TestimonialStrip
                    quote="Our log gasification boiler used to make the radiators terrifyingly hot. We practically burned our legs walking past them. With ThermaSkirt, the massive open-plan lounge is beautifully warm, but the skirting board itself is totally safe to touch."
                    author="Richard & Sue"
                    tags={['Barn Conversion', 'Log Boiler']}
                />

                <FAQText
                    heading="Biomass Heating — Common Questions"
                    faqs={[
                        {
                            question: "Does it need a blending valve like underfloor heating?",
                            answer: "No. Unlike screeded UFH which cracks if exposed to water above 50°C, ThermaSkirt is manufactured from solid aluminium and handles 80°C+ water effortlessly. You do not need thermostatic blending valves or secondary circulation pumps."
                        },
                        {
                            question: "Can it handle the pressure from a large buffer tank system?",
                            answer: "Yes. ThermaSkirt operates seamlessly on the high-pressure sealed systems associated with modern biomass accumulators and thermal stores. Standard 15mm compression connections are all that's needed."
                        },
                        {
                            question: "Is it suitable for very draughty older properties?",
                            answer: "Yes. By surrounding cold, uninsulated external walls with high-temperature radiant heat at floor level, ThermaSkirt creates an active thermal barrier that fights incoming drafts far more effectively than a centrally located radiator. The perimeter distribution means no wall is left unheated."
                        },
                        {
                            question: "How does it perform in very large rooms (barn conversions)?",
                            answer: "Extremely well. Large open-plan spaces are where ThermaSkirt excels over radiators. A 6m × 10m barn conversion might have 30+ linear metres of perimeter wall—that's 30 metres of continuous radiant surface, delivering enormous heat output without a single radiator on any wall."
                        },
                        {
                            question: "Can it work alongside a wood-burning stove?",
                            answer: "Yes. Many biomass homeowners have a log burner in the main living area and ThermaSkirt in the bedrooms, hallways, and secondary rooms—all fed from the same biomass boiler and buffer tank. The systems coexist perfectly."
                        },
                        {
                            question: "Is it compatible with pellet boilers as well as log gasification?",
                            answer: "Yes. ThermaSkirt works with any biomass boiler type—wood pellet, log gasification, wood chip, or multi-fuel. The connection is standard wet central heating (flow and return), regardless of the fuel source."
                        },
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore more heating options"
                    description="See how ThermaSkirt works with other heating systems and project types."
                    tiles={[
                        { title: 'Gas or Oil Boiler', description: 'Direct replacement for radiators on any existing wet system.', href: '/homeowners/by-heat-source/boiler' },
                        { title: 'Heat Pump', description: 'Optimised for 35–45°C flow temperatures. Improves COP by up to 0.5.', href: '/homeowners/by-heat-source/heat-pump' },
                        { title: 'Solar PV & Thermal', description: 'Maximise self-consumption of free solar energy.', href: '/homeowners/by-heat-source/solar' },
                        { title: 'Renovation Projects', description: 'Modernise your heating as part of a wider renovation.', href: '/homeowners/by-project/renovation' },
                        { title: 'Listed Building Projects', description: 'Sensitive heating solutions for heritage properties.', href: '/homeowners/by-project/listed-building' },
                        { title: 'ThermaSkirt vs Radiators', description: 'Side-by-side comparison of output, cost, and aesthetics.', href: '/homeowners/vs/radiators' },
                        { title: 'ThermaSkirt vs UFH', description: 'Why skirting board heating beats underfloor in retrofits.', href: '/homeowners/vs/underfloor-heating' },
                    ]}
                />

                <CTABanner
                    heading="Harness your biomass heat efficiently."
                    description="Upload your property plans for a fast, free itemised quote. We'll calculate the exact ThermaSkirt metres and output for your biomass system."
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
