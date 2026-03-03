import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import TestimonialStrip from '@/components/blocks/TestimonialStrip';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import StatsStrip from '@/components/blocks/StatsStrip';
import NavbarMorph from '@/components/client/NavbarMorph';
import Link from 'next/link';

export const metadata = {
    title: 'Bedroom Skirting Board Heating | ThermaSkirt',
    description: 'Create the perfectly comfortable, quiet bedroom. ThermaSkirt provides gentle radiant heat without the ticking noises, drafts, or dust circulation of standard radiators.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/by-room/bedroom/',
    }
};

export default function BedroomPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Bedroom Heating"
                    title="Sleep in perfect"
                    titleHighlight="radiant comfort."
                    description="The bedroom should be a sanctuary of quiet, even warmth. ThermaSkirt replaces clunky, noisy radiators with a sleek skirting board profile, eliminating nighttime cold spots and freeing up wall space for wardrobes and beds."
                    primaryCta={{ text: "Get a Room Quote", href: "/homeowners/get-a-quote" }}
                    secondaryCta={{ text: "View Cost Guide", href: "/homeowners/cost-guide" }}
                    imageSrc="/assets/images/homeowner-bedroom.jpg"
                    imageAlt="A calm, beautifully decorated bedroom with ThermaSkirt heating"
                />

                <StatsStrip
                    stats={[
                        { value: "Silent", label: "No ticking, banging, or gurgling", source: "Aluminium extrusion design" },
                        { value: "<1°C", label: "Temperature variance head-to-toe", source: "BSRIA tested" },
                        { value: "20mm", label: "Profile depth — less than timber skirting" },
                        { value: "70%", label: "Of customers self-install", source: "DIY with YouTube guides" },
                    ]}
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Bedroom Skirting Board Heating</h2>
                            <p className="text-xl font-light text-dh-dark mb-12 leading-relaxed">
                                ThermaSkirt is a responsive, radiant skirting board heating system that replaces standard bedroom radiators. By projecting just 20mm from the wall and operating silently, it creates a healthier, draft-free sleep environment while reclaiming the vital wall space required for bedside tables, wardrobes, and larger beds.
                            </p>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Space Optimisation</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Maximise Your Bedroom Layout</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Bedrooms in the UK are notoriously space-constrained. Every square metre counts. Placing a standard Type 22 radiator on the only free wall instantly limits where you can position your bed, forces you to compromise on wardrobe sizes, or prevents you from adding a dressing table.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt entirely removes the radiator from the equation. Because it acts as both your heating emitter and your room&apos;s skirting board, it frees up critical wall real estate. Independent BSRIA testing confirms that wrapping the heat output around the perimeter reclaims up to 2 square metres of usable space per average-sized room — often the difference between fitting a Double or a King-sized bed.
                            </p>
                        </article>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dh-grey-light border border-dh-grey-light/50">
                                <div className="absolute inset-0 flex items-center justify-center text-dh-grey">Bedroom Image 1</div>
                            </div>
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dh-grey-light border border-dh-grey-light/50">
                                <div className="absolute inset-0 flex items-center justify-center text-dh-grey">Bedroom Image 2</div>
                            </div>
                        </div>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Health &amp; Sleep Quality</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">A Healthier, Quieter Sleep Environment</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Traditional steel radiators rely on air convection. They suck cold air from the floor, drag it across dusty metal fins, heat it, and blast it towards the ceiling. This constant air circulation spreads dust mites and allergens around the room, irritating asthma and allergy sufferers during the night. Standard radiators also suffer from expansion &quot;ticking&quot; and water drop noises as the boiler cycles on and off.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt is an extruded aluminium profile that operates primarily as a radiant heat emitter. It warms the room gently and evenly from the ground up without creating drafts or circulating dust. Because of its continuous open waterway and solid, one-piece construction, it operates silently — no clicks, no bangs, no gurgling. BSRIA thermal imaging demonstrates less than a 1°C temperature variance across a room heated with ThermaSkirt, ensuring you never wake up to a cold spot or a stuffy corner.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Heat Source Compatibility</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Any Boiler, Any Heat Pump — or Fully Electric</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                ThermaSkirt connects to any wet central heating system exactly as a radiator would — gas, LPG, oil, or heat pump. Because it delivers the same warmth at lower flow temperatures (50–55°C on a boiler, 35–45°C on a <Link href="/homeowners/by-heat-source/heat-pump" className="text-dh-red hover:underline">heat pump</Link>), it keeps condensing boilers in their most efficient mode and maximises heat pump CoP.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                For bedrooms in loft conversions, annexes, or garden rooms where running pipework is impractical, ThermaSkirt-e (all-electric) provides infrared radiant heat via a self-regulating cable. It connects directly to a standard 240V fused spur — no pipework, no boiler, no transformers. Pair it with a smart thermostat for room-by-room schedule control.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Cost &amp; Installation</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">What Does a Bedroom Installation Cost?</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                A typical bedroom installation costs between £500 and £1,000, including the ThermaSkirt profiles, fittings, and matching MDF for non-heated sections. This replaces both the radiator and the skirting board in one component. For a full breakdown, see the <Link href="/homeowners/cost-guide" className="text-dh-red hover:underline">cost guide</Link>.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                Around 70% of customers complete the installation themselves using our step-by-step YouTube videos and the detailed cutting list included with every order. A professional installation typically takes a plumber 1–2 days per room. Unsure which route to take? Our <Link href="/homeowners/diy-or-professional" className="text-dh-red hover:underline">DIY or Professional guide</Link> covers everything.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Safety</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Safe for Children&apos;s Bedrooms</h3>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt operates at safe, low surface temperatures without needing additional radiator covers or guards. RoSPA data shows that radiator-related impact injuries account for 86–87% of domestic heating injuries, with under-5s most at risk. Replacing a heavy, protruding steel panel with a flush 20mm skirting profile eliminates this hazard entirely — making it an ideal choice for nurseries and children&apos;s bedrooms.
                            </p>
                        </article>
                    </div>
                </section>

                <TestimonialStrip
                    quote="Taking the radiator out of the master bedroom finally allowed us to fit the built-in wardrobes we wanted. The room actually feels bigger, and the heat feels much softer than the old convector."
                    author="Mark T."
                    tags={['Renovation', 'Master Bedroom']}
                    caseStudiesLink="/homeowners/reviews"
                />

                <FAQText
                    faqs={[
                        {
                            question: "Can I put my bed or wardrobes against the ThermaSkirt?",
                            answer: "Yes. ThermaSkirt projects heat outwards into the room and operates safely at low surface temperatures, especially on heat pump systems (35–45°C). You can run it behind beds and wardrobes — because the thermal envelope principle generates warmth around the entire perimeter, blocking a small section will not noticeably affect room temperature."
                        },
                        {
                            question: "Does it make ticking noises in the middle of the night?",
                            answer: "No. Standard radiators often 'tick' because thin steel fins expand and contract loudly against their brackets. ThermaSkirt is an extruded aerospace-grade aluminium profile that mounts on specialised hidden clips with expansion tolerances, virtually eliminating cyclical thermal noises. It is genuinely silent."
                        },
                        {
                            question: "Can I control the bedroom temperature separately?",
                            answer: "Absolutely. ThermaSkirt connects to your existing central heating manifold. You can fit it with standard TRVs (Thermostatic Radiator Valves) hidden in the corners, or connect it to smart thermostats like Hive, Nest, or Tado for precise, per-room schedule control — warmer before bed, cooler overnight."
                        },
                        {
                            question: "Is it better than underfloor heating for bedrooms?",
                            answer: "ThermaSkirt delivers comparable thermal comfort (less than 1°C variance across the room, BSRIA tested), but with a 5-minute heat-up time versus hours for underfloor heating. It installs in a day with zero floor build-up, making it ideal for bedrooms where you cannot afford weeks of disruption or headroom loss."
                        },
                        {
                            question: "Will it work in a loft conversion with sloped ceilings?",
                            answer: "Yes. ThermaSkirt follows any wall shape — sloped ceilings, dormers, chimney breasts. It installs at skirting level with zero headroom loss (compared to 75–150mm for underfloor heating), which is critical in loft conversions where every centimetre counts."
                        },
                        {
                            question: "Can I install it in just one bedroom?",
                            answer: "Absolutely. Many customers start with single-room installations and keep existing radiators elsewhere. Your plumber simply isolates the old bedroom radiator, extends the pipes to skirting level, and connects ThermaSkirt to the same circuit."
                        },
                        {
                            question: "Does it circulate dust like a radiator?",
                            answer: "No. Radiant heat emitted at floor level produces dramatically less air movement than convection radiators. This means significantly less dust, allergens, and airborne particulates circulated through your breathing zone during sleep — a significant benefit for asthma and allergy sufferers."
                        }
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore ThermaSkirt by Room"
                    description="See how ThermaSkirt transforms every space in your home."
                    tiles={[
                        { title: "Living Room", description: "Reclaim your walls for sofas and media units.", href: "/homeowners/by-room/living-room" },
                        { title: "Kitchen", description: "Plinth heating that frees up every cabinet.", href: "/homeowners/by-room/kitchen" },
                        { title: "Home Office", description: "Consistent warmth, zero distractions.", href: "/homeowners/by-room/home-office" },
                        { title: "Open Plan", description: "Even comfort across large, connected spaces.", href: "/homeowners/by-room/open-plan" },
                        { title: "Garden Room", description: "Year-round comfort in compact spaces.", href: "/homeowners/by-room/garden-room" },
                        { title: "Bathroom", description: "Warm tiles, no damp, no rust.", href: "/homeowners/by-room/bathroom" },
                    ]}
                />

                <CTABanner
                    heading="Ready to redesign your bedroom?"
                    description="Upload your room dimensions for a fast, free itemised quote."
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
