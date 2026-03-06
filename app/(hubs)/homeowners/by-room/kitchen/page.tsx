import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import TestimonialStrip from '@/components/blocks/TestimonialStrip';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import StatsStrip from '@/components/blocks/StatsStrip';
import NavbarMorph from '@/components/client/NavbarMorph';
import Link from 'next/link';

export const metadata = {
    title: 'Kitchen Plinth Heating | ThermaSkirt',
    description: 'Banish the cold kitchen floor. Fit ThermaSkirt directly onto your kitchen plinths to provide ultra-fast radiant heating without losing a single cabinet.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/by-room/kitchen/',
    },
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=8ffc200d-e646-42a6-bbec-d15ca4a01240', width: 1200, height: 630, alt: 'Kitchen Plinth Heating | ThermaSkirt' }],
    },
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
                    secondaryCta={{ text: "View Cost Guide", href: "/homeowners/cost-guide" }}
                    imageSrc="https://www.discreteheat.com/MediaHandler.ashx?id=8ffc200d-e646-42a6-bbec-d15ca4a01240"
                    imageAlt="A sleek modern kitchen with ThermaSkirt plinth heating"
                />

                <StatsStrip
                    stats={[
                        { value: "115mm", label: "Kitchen plinth profile height", source: "Matches standard kickboards" },
                        { value: "100%", label: "Wall space preserved for cabinetry" },
                        { value: "<1°C", label: "Temperature variance across the floor", source: "BSRIA tested" },
                        { value: "5 min", label: "Heat-up time on cold tile floors" },
                    ]}
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Kitchen Plinth Heating</h2>
                            <p className="text-xl font-light text-dh-dark mb-12 leading-relaxed">
                                ThermaSkirt is an invisible radiant heating system that replaces standard radiators and cumbersome plinth heaters. By mounting directly as the 115mm or 150mm kickboard under your kitchen cabinets, it provides a BSRIA-certified uniform warmth profile across cold, hard floors while preserving 100% of your precious wall and storage space.
                            </p>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Eliminating Compromises</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Stop Wasting Walls on Radiators</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Designing a kitchen is an exercise in cramming appliances, islands, and cupboards into a fixed square footage. A standard Type 22 panel radiator demands an entire wall face, usually forcing you to delete a base unit or a tall larder cupboard from your dream design.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                Plinth fan heaters are the common alternative, but they blast concentrated dusty air at your ankles, create an irritating droning noise, and consume electricity. ThermaSkirt works entirely differently. Because it is a 150mm tall extruded aluminium profile that acts as your actual kickboard, it connects directly to your central heating (gas boiler or heat pump at 35–45°C). It frees up the wall, completely eliminates the need for a radiator, and delivers silent, radiant heat.
                            </p>
                        </article>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dh-grey-light border border-dh-grey-light/50">
                                <div className="absolute inset-0 flex items-center justify-center text-dh-grey">Kitchen Image 1</div>
                            </div>
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dh-grey-light border border-dh-grey-light/50">
                                <div className="absolute inset-0 flex items-center justify-center text-dh-grey">Kitchen Image 2</div>
                            </div>
                        </div>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Cleaning &amp; Hygiene</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Mop Directly to the Edge</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Kitchen floors are subjected to spills, crumbs, and intense cleaning. Electric plinth heaters sit slightly recessed and accumulate dust inside their fans that is impossible to clean, turning them into fire hazards over time.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt is fundamentally sealed to the floor using a flexible silicone lip at the base of the profile. This physically prevents water and dirt from washing underneath your kitchen cabinets. You can mop the hard tiles or LVT flooring directly against the heated aluminium kickboard without worrying about water ingress or rotting MDF plinths.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Heat Source Compatibility</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Boiler, Heat Pump — or Open Plan Combination</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                ThermaSkirt in the kitchen connects to the same central heating circuit as the rest of the house. It works with gas boilers, LPG, oil, or <Link href="/homeowners/by-heat-source/heat-pump" className="text-dh-red hover:underline">heat pumps</Link> at 35–45°C. In open-plan kitchen-diners, you can combine kitchen plinth profiles under the cabinets with standard skirting profiles along the walls — both running on a single continuous heating loop.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                Because ThermaSkirt delivers the same warmth at lower flow temperatures than standard radiators, it keeps condensing boilers operating at peak efficiency and maximises heat pump CoP. Install on your boiler today and upgrade to a heat pump later — the emitters need no replacement.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Cost &amp; Installation</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Kitchen Installation Costs</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                A typical kitchen installation costs between £500 and £1,000. This replaces both the radiator and the plinth in one component — so you&apos;re effectively buying two items for the price of one premium product. For a detailed price breakdown, see our <Link href="/homeowners/cost-guide" className="text-dh-red hover:underline">cost guide</Link>.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                Professional fitting is recommended for kitchens due to pipework routing under units. Our network of 120+ registered installers can complete a kitchen in 1–2 days. Alternatively, confident DIYers handle their own installations using our YouTube guides. See our <Link href="/homeowners/diy-or-professional" className="text-dh-red hover:underline">DIY or Professional guide</Link> for help deciding.
                            </p>
                        </article>
                    </div>
                </section>

                <TestimonialStrip
                    quote="Taking the radiator off the only free wall allowed us to add an American fridge freezer and pull-out larder. The ThermaSkirt plinths make the cold ceramic tiles feel absolutely wonderful in the mornings."
                    author="Emma B."
                    tags={['Kitchen Renovation', 'Gas Boiler']}
                    caseStudiesLink="/homeowners/reviews"
                />

                <FAQText
                    faqs={[
                        {
                            question: "Does it fit under standard IKEA or Magnet cabinets?",
                            answer: "Yes. ThermaSkirt profiles measure between 115mm and 150mm in height, perfectly matching standard kitchen cabinet plinth heights. Our mounting brackets clip directly onto standard cabinet legs."
                        },
                        {
                            question: "Will the heat damage my appliances or food cupboards?",
                            answer: "No. ThermaSkirt projects radiant heat forwards into the room, not upwards through the floor of the cabinets. It is completely safe to run beneath dishwashers, fridges, and food storage units."
                        },
                        {
                            question: "What happens if there is a leak or spill?",
                            answer: "ThermaSkirt operates on a sealed, all-metal continuous loop with no joints behind the straight runs of the kickboard. A tight, flexible lip seal on the bottom edge protects the gap between the floor and the kickboard, stopping kitchen spills from getting underneath."
                        },
                        {
                            question: "Can I combine kitchen plinths with wall skirting in an open-plan space?",
                            answer: "Yes, seamlessly. ThermaSkirt can run along the wall as a traditional skirting board profile, then transition perfectly into a kitchen kickboard profile under the cabinets using standard connections. It acts as one continuous heating circuit wrapped around the entire perimeter."
                        },
                        {
                            question: "Is it better than electric plinth fan heaters?",
                            answer: "Significantly. Electric plinth fans rely on convection (noisy, dusty, expensive). ThermaSkirt provides silent, radiant heat connected to your central heating — no electricity consumption beyond the boiler or heat pump that is running regardless. It also distributes heat evenly rather than blasting a concentrated stream at ankle height."
                        },
                        {
                            question: "How much does a kitchen installation cost?",
                            answer: "Typically £500–£1,000 depending on run length and heat demand. This covers the ThermaSkirt profiles, fittings, and colour-matched plinth sections. It replaces both the radiator and the kickboard — two components for the price of one premium product."
                        },
                        {
                            question: "Can I paint it to match my kitchen cabinetry?",
                            answer: "Yes. ThermaSkirt is supplied in Cricket White (RAL 9010) or Vintage Ivory (RAL 1013) as standard, and can be painted with any standard household paint to match your kitchen colour scheme. The double epoxy powder coat base ensures excellent adhesion."
                        }
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore ThermaSkirt by Room"
                    description="See how ThermaSkirt transforms every space in your home."
                    tiles={[
                        { title: "Living Room", description: "Reclaim your walls for sofas and media units.", href: "/homeowners/by-room/living-room", image: "https://www.discreteheat.com/MediaHandler.ashx?id=2a3a5535-6119-4b26-b66f-263eecc7eb5a" },
                        { title: "Bedroom", description: "Silent, space-saving warmth for a better night's sleep.", href: "/homeowners/by-room/bedroom", image: "https://www.discreteheat.com/MediaHandler.ashx?id=9d650245-84b3-433b-bc74-32223612fdfe" },
                        { title: "Home Office", description: "Consistent warmth, zero distractions.", href: "/homeowners/by-room/home-office", image: "https://www.discreteheat.com/MediaHandler.ashx?id=1b9a575e-60f1-4319-8c68-aeb033ff130a" },
                        { title: "Open Plan", description: "Even comfort across large, connected spaces.", href: "/homeowners/by-room/open-plan", image: "https://www.discreteheat.com/MediaHandler.ashx?id=89b3f691-9bbc-4268-941a-8ba213267301" },
                        { title: "Garden Room", description: "Year-round comfort in compact spaces.", href: "/homeowners/by-room/garden-room", image: "https://www.discreteheat.com/MediaHandler.ashx?id=ae52252a-9018-4898-bea9-51eb467c72f3" },
                        { title: "Bathroom", description: "Warm tiles, no damp, no rust.", href: "/homeowners/by-room/bathroom", image: "https://www.discreteheat.com/MediaHandler.ashx?id=70ce7e2a-6d6e-45c4-ab90-7d0cbaab64c8" },
                    ]}
                />

                <CTABanner
                    heading="Ready to maximise your kitchen space?"
                    description="Upload your kitchen floor plan for a fast, free itemised quote."
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
