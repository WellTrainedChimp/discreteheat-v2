import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import TestimonialStrip from '@/components/blocks/TestimonialStrip';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Kitchen Plinth Heating | ThermaSkirt',
    description: 'Banish the cold kitchen floor. Fit ThermaSkirt directly onto your kitchen plinths to provide ultra-fast radiant heating without losing a single cabinet.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/by-room/kitchen/',
    }
};

export default function KitchenPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Kitchen Heating"
                    title="Warm feet, maximum"
                    titleHighlight="cabinet space."
                    description="The modern kitchen leaves almost no free wall space for radiators. ThermaSkirt solves this by integrating directly into your kitchen plinths (kickboards), delivering rapid, even warmth across your hard floors without stealing a single cupboard."
                    primaryCta={{ text: "Get a Kitchen Quote", href: "/homeowners/get-a-quote" }}
                    imageSrc="/assets/images/homeowner-kitchen.jpg"
                    imageAlt="A sleek modern kitchen with ThermaSkirt plinth heating"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Kitchen Plinth Heating</h2>
                            <p className="text-xl font-light text-dh-dark mb-12 leading-relaxed">
                                ThermaSkirt is an invisible radiant heating system that replaces standard radiators and cumbersome plinth heaters. By mounting directly as the 100mm or 150mm kickboard under your kitchen cabinets, it provides a BSRIA-certified uniform warmth profile across cold, hard floors while preserving 100% of your precious wall and storage space.
                            </p>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Eliminating Compromises</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Stop Wasting Walls on Radiators</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Designing a kitchen is an exercise in cramming appliances, islands, and cupboards into a fixed square footage. A standard Type 22 panel radiator demands an entire wall face, usually forcing you to delete a base unit or a tall larder cupboard from your dream design.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                Plinth fan heaters are the common alternative, but they blast concentrated dusty air at your ankles, create an irritating droning noise, and consume electricity. ThermaSkirt works entirely differently. Because it is a 150mm tall extruded aluminium profile that acts as your actual kickboard, it connects directly to your central heating (gas boiler or heat pump at 35-45°C). It frees up the wall, completely eliminating the need for a radiator, and delivers silent, radiant heat.
                            </p>
                        </article>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dh-grey-light border border-dh-grey-light/50">
                                {/* Next Image component pointing to a realistic stock/asset path */}
                                <div className="absolute inset-0 flex items-center justify-center text-dh-grey">Kitchen Image 1</div>
                            </div>
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dh-grey-light border border-dh-grey-light/50">
                                <div className="absolute inset-0 flex items-center justify-center text-dh-grey">Kitchen Image 2</div>
                            </div>
                        </div>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Cleaning & Hygiene</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Mop Directly to the Edge</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Kitchen floors are subjected to spills, crumbs, and intense cleaning. Electric plinth heaters sit slightly recessed and accumulate dust cages inside their fans that are impossible to clean, turning them into fire hazards.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt is fundamentally sealed to the floor using a flexible silicone lip at the base of the profile. This physically prevents water and dirt from washing underneath your kitchen cabinets. You can mop the hard tiles or LVT flooring directly against the heated aluminium kickboard without worrying about water ingress or rotting MDF plinths.
                            </p>
                        </article>
                    </div>
                </section>

                <TestimonialStrip
                    quote="Taking the radiator off the only free wall allowed us to add an American fridge freezer and pull-out larder. The ThermaSkirt plinths make the cold ceramic tiles feel absolutely wonderful in the mornings."
                    author="Emma B."
                    tags={['Kitchen Renovation', 'Gas Boiler']}
                />

                <FAQText
                    faqs={[
                        {
                            question: "Does it fit under standard IKEA or Magnet cabinets?",
                            answer: "Yes. ThermaSkirt profiles typically measure between 100mm and 150mm in height, perfectly matching standard kitchen cabinet plinth heights. Our mounting brackets clip directly onto standard cabinet legs."
                        },
                        {
                            question: "Will the heat damage my appliances or food cupboards?",
                            answer: "No. ThermaSkirt projects radiant heat forwards into the room, not upwards through the floor of the cabinets. It is completely safe to run beneath dishwashers, fridges, and food storage units."
                        },
                        {
                            question: "What happens if there's a leak or spill?",
                            answer: "ThermaSkirt operates on a sealed, all-metal continuous loop with no joints behind the straight runs of the kickboards. A tight, flexible lip seal on the bottom edge protects the gap between the floor and the kickboard, stopping kitchen spills from getting underneath."
                        }
                    ]}
                />

                <CTABanner
                    heading="Ready to maximise your kitchen space?"
                    description="Upload your kitchen floor plan for a fast, free itemised quote."
                    primaryCTA="Get a Free Quote"
                    primaryCTALink="/homeowners/get-a-quote"
                    secondaryCTA="Find an Installer"
                    secondaryCTALink="/homeowners/find-an-installer"
                />
            </main>
        </>
    );
}
