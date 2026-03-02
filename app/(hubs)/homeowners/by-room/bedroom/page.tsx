import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import TestimonialStrip from '@/components/blocks/TestimonialStrip';
import NavbarMorph from '@/components/client/NavbarMorph';

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
                    imageSrc="/assets/images/homeowner-bedroom.jpg"
                    imageAlt="A calm, beautifully decorated bedroom with ThermaSkirt heating"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Bedroom Skirting Board Heating</h2>
                            <p className="text-xl font-light text-dh-dark mb-12 leading-relaxed">
                                ThermaSkirt is a responsive, radiant skirting board heating system that replaces standard bedroom radiators. By projecting just 20mm from the wall and operating silently, it creates a healthier, draft-free sleep environment while reclaiming the vital wall space required for bedside tables, wardrobes, and larger beds.
                            </p>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Space Optimization</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Maximise Your Bedroom Layout</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Bedrooms in the UK are notoriously space-constrained. Every square metre counts. Placing a standard Type 22 radiator on the only free wall instantly limits where you can position your bed, forces you to compromise on wardrobe sizes, or prevents you from adding a dressing table.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt entirely removes the radiator from the equation. Because it acts as both your heating emitter and your room&apos;s secure timber-effect skirting board, it frees up critical wall real estate. Independent BSRIA testing confirms that wrapping the heat output around the perimeter reclaims up to 2 square metres of usable space per average-sized room—often the difference between fitting a Double or a King-sized bed.
                            </p>
                        </article>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dh-grey-light border border-dh-grey-light/50">
                                {/* Next Image component pointing to a realistic stock/asset path */}
                                <div className="absolute inset-0 flex items-center justify-center text-dh-grey">Bedroom Image 1</div>
                            </div>
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dh-grey-light border border-dh-grey-light/50">
                                <div className="absolute inset-0 flex items-center justify-center text-dh-grey">Bedroom Image 2</div>
                            </div>
                        </div>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Health & Sleep Quality</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">A Healthier, Quieter Environment</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Traditional steel radiators rely on air convection. They suck cold air from the floor, drag it across dusty metal fins, heat it, and blast it towards the ceiling. This constant air circulation spreads dust mites and allergens around the room, irritating asthma and allergy sufferers during the night. Furthermore, standard radiators often suffer from expansion &quot;ticking&quot; and water drop noises as the boiler cycles on and off.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt is an extruded aluminium profile that operates primarily as a radiant heat emitter. It warms the room gently and evenly from the ground up without creating drafts or circulating dust. Because of its continuous open waterway and solid, one-piece construction, it operates silently. BSRIA thermal imaging demonstrates less than a 1°C temperature variance across a room heated with ThermaSkirt, ensuring you never wake up to a cold spot or a stuffy corner.
                            </p>
                        </article>
                    </div>
                </section>

                <TestimonialStrip
                    quote="Taking the radiator out of the master bedroom finally allowed us to fit the built-in wardrobes we wanted. The room actually feels bigger, and the heat feels much softer than the old convector."
                    author="Mark T."
                    tags={['Renovation', 'Master Bedroom']}
                />

                <FAQText
                    faqs={[
                        {
                            question: "Can I put my bed or wardrobes against the ThermaSkirt?",
                            answer: "Yes. ThermaSkirt projects heat outwards into the room and operates safely at low surface temperatures, especially on heat pump systems (35–45°C). You can run it behind beds and wardrobes, though we recommend leaving a small 10-20mm breathing gap between the furniture and the wall for optimal heat dispersion."
                        },
                        {
                            question: "Does it make ticking noises in the middle of the night?",
                            answer: "No. Standard radiators often 'tick' because thin steel fins expand and contract loudly against their brackets. ThermaSkirt is an extruded aerospace-grade aluminium profile that mounts on specialised hidden clips with expansion tolerances, virtually eliminating cyclical thermal noises."
                        },
                        {
                            question: "Can I control the bedroom temperature separately?",
                            answer: "Absolutely. ThermaSkirt connects to your existing central heating manifold. You can fit it with standard TRVs (Thermostatic Radiator Valves) hidden in the corners, or connect it to smart thermostats like Hive or Nest for precise, per-room schedule control."
                        }
                    ]}
                />

                <CTABanner
                    heading="Ready to redesign your bedroom?"
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
