import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import TestimonialStrip from '@/components/blocks/TestimonialStrip';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Loft Conversion Heating | ThermaSkirt',
    description: 'Heat the highest room in the house effortlessly. ThermaSkirt fits neatly around the awkward eaves of a loft conversion, freeing up the limited wall space for your bed and wardrobes.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/by-project/loft-conversion/',
    },
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=c25f2559-4bd3-4b08-a21a-d7b11416f4eb', width: 1200, height: 630, alt: 'Loft Conversion Heating | ThermaSkirt' }],
    },
};

export default function LoftConversionPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Loft Conversions"
                    title="Warm the eaves,"
                    titleHighlight="claim the walls."
                    description="Loft conversions are constrained by severely sloping roofs and incredibly tight eaves. Standard radiators dictate precisely where you put the bed, while UFH adds dangerous weight to the ceiling joists. ThermaSkirt seamlessly traces the lowest eaves, providing invisible radiant heat."
                    primaryCta={{ text: "Get a Loft Quote", href: "/homeowners/get-a-quote" }}
                    imageSrc="https://www.discreteheat.com/MediaHandler.ashx?id=c25f2559-4bd3-4b08-a21a-d7b11416f4eb"
                    imageAlt="A bright bedroom loft conversion with ThermaSkirt mounted to the eaves"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Skirting Board Heating for Loft Conversions</h2>
                            <p className="text-xl font-light text-dh-dark mb-12 leading-relaxed">
                                ThermaSkirt is the perfect low-mass heating solution for attic and loft conversions. While standard radiators consume your only full-height wall space, ThermaSkirt installs directly along the difficult 1.2m-high &apos;knee walls&apos; and awkward sloped dormers, delivering swift radiant heat across the room.
                            </p>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Weight & Structural Issues</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Zero Load on the Joists</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Installing wet underfloor heating in a loft conversion is often structurally impossible. Pouring heavy concrete screed over the old ceiling joists requires extensive and expensive steelwork reinforcement from a structural engineer. Even lightweight UFH spreader plates significantly raise the floor height, diminishing your crucial floor-to-ceiling headroom.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt avoids the floor entirely. It mounts to the studded perimeter walls acting exactly like a traditional skirting board. It connects straight onto the rising 15mm copper pipes connected to your existing boiler circuit, introducing negligible water volume (less than 1 litre per typical room) and virtually zero structural weight to the upper floor.
                            </p>
                        </article>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dh-grey-light border border-dh-grey-light/50">
                                {/* Next Image component pointing to a realistic stock/asset path */}
                                <div className="absolute inset-0 flex items-center justify-center text-dh-grey">Loft Image 1</div>
                            </div>
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dh-grey-light border border-dh-grey-light/50">
                                <div className="absolute inset-0 flex items-center justify-center text-dh-grey">Loft Image 2</div>
                            </div>
                        </div>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">The Gable End Compromise</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Stop Wasting Dormer Space</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                In a typical loft space, you only have one or two full-height vertical partition walls. If you mount a large double-panel radiator on that wall, you immediately block the only place capable of housing your wardrobe, your television, or your double bed&apos;s headboard.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt solves the geometry puzzle of the loft. The aluminium profile easily circumvents the room, neatly framing skylights, dormer windows, and the short sloping eaves (knee walls). By shifting the heat delivery outwards to the dead perimeter space, you instantly reclaim the primary vertical walls for furniture.
                            </p>
                        </article>
                    </div>
                </section>

                <TestimonialStrip
                    quote="The steel beam holding the loft floor barely cleared building regs. UFH was physically out of the question due to the screed weight. We ran ThermaSkirt around the short eaves walls and it looks perfectly built-in."
                    author="Stuart G."
                    tags={['Attic Bedroom', 'Structural Load']}
                />

                <FAQText
                    faqs={[
                        {
                            question: "How do you install it on a sloping dormer wall?",
                            answer: "ThermaSkirt requires just a 150mm flat vertical face at the base of the wall to mount securely via its hidden clips. Our dedicated internal and external corner covers adjust effortlessly to handle complex angles around dormer windows and stairwells."
                        },
                        {
                            question: "Can I connect it to the radiators downstairs?",
                            answer: "Yes. In a standard house extension, a plumber will typically spur off the flow and return pipes on the first-floor heating circuit, running two new 15mm pipes straight up into the stud walls of the new loft space to feed the ThermaSkirt."
                        },
                        {
                            question: "Do I need a separate thermostat for the loft?",
                            answer: "Because heat naturally rises through the house, loft spaces often get very hot very quickly. We heavily recommend fitting a thermostatic valve (TRV) directly onto the ThermaSkirt feed pipe to clamp the temperature down independently of the ground floor."
                        }
                    ]}
                />

                <CTABanner
                    heading="Reclaim your loft's footprint."
                    description="Upload your loft floor plans for a fast, free itemised quote."
                    primaryCTA="Get a Free Quote"
                    primaryCTALink="/homeowners/get-a-quote"
                    secondaryCTA="Find an Installer"
                    secondaryCTALink="/homeowners/find-an-installer"
                />
            </main>
        </>
    );
}
