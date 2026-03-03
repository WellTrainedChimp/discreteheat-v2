import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import TestimonialStrip from '@/components/blocks/TestimonialStrip';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import StatsStrip from '@/components/blocks/StatsStrip';
import NavbarMorph from '@/components/client/NavbarMorph';
import Link from 'next/link';

export const metadata = {
    title: 'Open Plan Home Heating | ThermaSkirt',
    description: 'Even heat across vast spaces. ThermaSkirt eliminates cold spots in large knock-through extensions without relying on giant radiators or disruptive UFH.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/by-room/open-plan/',
    }
};

export default function OpenPlanPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Open Plan Extensions"
                    title="Massive spaces, perfectly"
                    titleHighlight="even warmth."
                    description="Knocking through a Victorian terrace into a single open-plan kitchen-diner creates a stunning space, but a nightmare for traditional central heating. ThermaSkirt distributes the heat evenly along the entire perimeter, banning cold spots and freeing your expansive walls."
                    primaryCta={{ text: "Get an Extension Quote", href: "/homeowners/get-a-quote" }}
                    secondaryCta={{ text: "View Cost Guide", href: "/homeowners/cost-guide" }}
                    imageSrc="/assets/images/homeowner-open-plan.jpg"
                    imageAlt="A massive open-plan kitchen and living space heated evenly"
                />

                <StatsStrip
                    stats={[
                        { value: "<1°C", label: "Temperature variance across 40m²+", source: "BSRIA tested" },
                        { value: "0mm", label: "Floor build-up required", source: "vs 75–150mm for UFH" },
                        { value: "48%", label: "Output retained at dT20", source: "vs 30% for radiators" },
                        { value: "5 min", label: "Heat-up time from cold" },
                    ]}
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Open Plan Skirting Board Heating</h2>
                            <p className="text-xl font-light text-dh-dark mb-12 leading-relaxed">
                                ThermaSkirt is a highly responsive radiant heating system tailored for large open-plan extensions. By acting as the room&apos;s skirting board or kitchen plinth, it operates exactly like continuous low-temperature wet underfloor heating (35–45°C), ensuring BSRIA-certified temperature gradients with less than 1°C variance across massive 40+ square metre rooms.
                            </p>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Heat Distribution</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Solving the Point-Source Problem</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                The fundamental flaw with using radiators in open-plan living spaces is that they are point sources of heat. To warm a vast 8-metre long knocked-through lounge/diner, you are forced to deploy two massive double-panel convectors running at a scorching 70°C. Sitting near them is unbearably hot, while sitting in the middle of the room remains freezing cold due to aggressive convection drafts.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt deconstructs the radiator and spreads its surface area horizontally around the entire room. Because the highly-conductive aluminium profile generates radiant heat at floor level across 10, 20, or 30 linear metres, the room is enveloped in a gentle cocoon of warmth. This is why independent thermal imaging confirms ThermaSkirt provides the exact same even comfort profile as premium, screed-encased underfloor heating.
                            </p>
                        </article>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dh-grey-light border border-dh-grey-light/50">
                                <div className="absolute inset-0 flex items-center justify-center text-dh-grey">Open Plan Image 1</div>
                            </div>
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dh-grey-light border border-dh-grey-light/50">
                                <div className="absolute inset-0 flex items-center justify-center text-dh-grey">Open Plan Image 2</div>
                            </div>
                        </div>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Bi-Fold Doors &amp; Floor Changes</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Seamless Integration with Modern Glazing</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Large rear extensions often feature wall-to-wall bi-fold or sliding patio doors. This creates a secondary problem: massive heat loss exactly where you have zero structural wall to hang a radiator. Homeowners are often forced to install ugly, expensive trench-heaters sunk into the floor.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt is incredibly versatile. It can be mounted directly onto the kitchen island kickboards, wrapped down the party walls, and even installed on short stub-walls next to the glazing. Crucially, if you are knocking through an old room into a new extension, ThermaSkirt installs completely above ground, ignoring the height differences and screed complexities of joining two separate floors — a nightmare scenario for retrofit <Link href="/homeowners/vs/underfloor-heating" className="text-dh-red hover:underline">underfloor heating</Link>.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Heat Pump Ready</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">The Ideal Emitter for Open-Plan Heat Pump Installations</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Open-plan extensions are frequently the rooms where <Link href="/homeowners/by-heat-source/heat-pump" className="text-dh-red hover:underline">heat pump</Link> conversions fail. At 45°C flow temperatures, a standard radiator loses ~70% of its rated output. To compensate, installers are forced to recommend impossibly large 2400×600mm panels — heavy, visually intrusive, and often requiring structural wall reinforcement.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt retains ~48% of its output at dT20 (vs ~30% for radiators) and distributes it across 15–30 linear metres of room perimeter. This eliminates the need for oversized radiators entirely. It can also work alongside existing radiators via <Link href="/homeowners/by-heat-source/heat-pump" className="text-dh-red hover:underline">Add2Rad</Link> — boosting room output at low flow temperatures without replacing anything.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Cost &amp; Installation</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Open-Plan Installation Costs</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                An open-plan kitchen-diner typically costs between £1,000 and £2,000, depending on perimeter run length and heat demand. This replaces both the radiators and the skirting board/plinths. Compare this to wet underfloor heating retrofit costs of £15,000–£25,000 for an equivalent space. For a detailed breakdown, see our <Link href="/homeowners/cost-guide" className="text-dh-red hover:underline">cost guide</Link>.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                Professional installation is recommended for open-plan spaces due to the longer pipe runs and plinth transitions. Our 120+ registered installers typically complete an open-plan project in 2–3 days. See our <Link href="/homeowners/diy-or-professional" className="text-dh-red hover:underline">DIY or Professional guide</Link>.
                            </p>
                        </article>
                    </div>
                </section>

                <TestimonialStrip
                    quote="We knocked three small rooms into one massive kitchen-diner. Radiators would have ruined the minimalist aesthetic and the bi-fold doors left no wall space anyway. ThermaSkirt was the perfect invisible solution."
                    author="David &amp; Lucy"
                    tags={['Rear Extension', 'Open Plan']}
                    caseStudiesLink="/homeowners/reviews"
                />

                <FAQText
                    faqs={[
                        {
                            question: "Can I combine kitchen plinths with wall skirting?",
                            answer: "Yes, seamlessly. ThermaSkirt can be run along the wall as a traditional skirting board profile and then transition perfectly into a kitchen kickboard profile under the cabinets using standard connections. It acts as one continuous heating circuit."
                        },
                        {
                            question: "Will it cope with the heat loss from 5 metres of glass bi-folds?",
                            answer: "Yes. ThermaSkirt emits heat very effectively. By surrounding the perimeter of the extension and utilising the kitchen island, you deliver a massive surface area of warm aluminium into the room to counteract the glazing's heat loss. Heated threshold kits are also available for door openings."
                        },
                        {
                            question: "Can I zone the open plan space differently?",
                            answer: "If you plumb the kitchen run and the living area run onto separate legs of a manifold, you can use smart TRVs (like Heatmiser, Hive, or Tado) to control the temperature of the two zones independently."
                        },
                        {
                            question: "How does it compare to underfloor heating for extensions?",
                            answer: "ThermaSkirt delivers comparable comfort (less than 1°C variance, BSRIA tested) but installs in 2–3 days with zero floor build-up, vs weeks of screeding and drying for wet UFH. It heats up in 5 minutes vs hours for screed-encased UFH. And critically for knock-throughs, it ignores the floor level differences between old and new builds."
                        },
                        {
                            question: "Does it work with heat pumps in open-plan spaces?",
                            answer: "This is where ThermaSkirt excels. It retains ~48% output at heat pump flow temperatures (dT20), compared to ~30% for standard radiators. Distributed across 15–30 metres of room perimeter, it delivers more than enough output without the oversized 2400mm radiators that heat pump conversions usually demand."
                        },
                        {
                            question: "Can I add ThermaSkirt to supplement existing radiators?",
                            answer: "Yes. Add2Rad connects ThermaSkirt in series with your existing radiators to boost room output at low temperatures. If your open-plan room needs 3kW but existing radiators only deliver 2kW at heat pump temperatures, you add 1kW of ThermaSkirt rather than replacing everything."
                        },
                        {
                            question: "How much does an open-plan installation cost?",
                            answer: "An open-plan kitchen-diner typically costs £1,000–£2,000 depending on perimeter run length and heat demand. This replaces skirting, plinths, and radiators. Compare this to wet UFH retrofit at £15,000–£25,000 for an equivalent space."
                        }
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore ThermaSkirt by Room"
                    description="See how ThermaSkirt transforms every space in your home."
                    tiles={[
                        { title: "Living Room", description: "Reclaim your walls for sofas and media units.", href: "/homeowners/by-room/living-room" },
                        { title: "Bedroom", description: "Silent, space-saving warmth for a better night's sleep.", href: "/homeowners/by-room/bedroom" },
                        { title: "Kitchen", description: "Plinth heating that frees up every cabinet.", href: "/homeowners/by-room/kitchen" },
                        { title: "Home Office", description: "Consistent warmth, zero distractions.", href: "/homeowners/by-room/home-office" },
                        { title: "Garden Room", description: "Year-round comfort in compact spaces.", href: "/homeowners/by-room/garden-room" },
                        { title: "Bathroom", description: "Warm tiles, no damp, no rust.", href: "/homeowners/by-room/bathroom" },
                    ]}
                />

                <CTABanner
                    heading="Build the extension of your dreams."
                    description="Upload your architect&apos;s plans for a fast, free itemised quote."
                    primaryCTA="Get a Free Quote"
                    primaryCTALink="/homeowners/get-a-quote"
                    secondaryCTA="Find an Installer"
                    secondaryCTALink="/homeowners/find-an-installer"
                    additionalLinks={[
                        { text: "View Cost Guide", href: "/homeowners/cost-guide" },
                        { text: "DIY or Professional?", href: "/homeowners/diy-or-professional" },
                        { text: "Read FAQs", href: "/homeowners/faqs" },
                    ]}
                />
            </main>
        </>
    );
}
