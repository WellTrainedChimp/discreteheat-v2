import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import TestimonialStrip from '@/components/blocks/TestimonialStrip';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import StatsStrip from '@/components/blocks/StatsStrip';
import RoomImageCarousel from '@/components/blocks/RoomImageCarousel';
import NavbarMorph from '@/components/client/NavbarMorph';
import Link from 'next/link';

export const metadata = {
    title: 'Home Office Skirting Board Heating | ThermaSkirt',
    description: 'Keep your home office warm year-round. ThermaSkirt frees up wall space for desks and shelving while providing fast, responsive, silent heat.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/by-room/home-office/',
    },
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=1b9a575e-60f1-4319-8c68-aeb033ff130a', width: 1200, height: 630, alt: 'Home Office Skirting Board Heating | ThermaSkirt' }],
    },
};

export default function HomeOfficePage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Home Office Heating"
                    title="Productivity without"
                    titleHighlight="compromise."
                    description="Your home office is likely the smallest room in the house, but requires the most furniture. ThermaSkirt removes bulky radiators, giving you back the wall space needed for desks, filing cabinets, and multi-monitor setups."
                    primaryCta={{ text: "Get a Room Quote", href: "/homeowners/get-a-quote" }}
                    secondaryCta={{ text: "View Cost Guide", href: "/homeowners/cost-guide" }}
                    imageSrc="https://www.discreteheat.com/MediaHandler.ashx?id=1b9a575e-60f1-4319-8c68-aeb033ff130a"
                    imageAlt="A modern, bright home office heated invisibly by ThermaSkirt"
                />

                <StatsStrip
                    stats={[
                        { value: "Silent", label: "No noise during video calls", source: "Zero expansion clicks" },
                        { value: "5 min", label: "Heat-up time on demand", source: "vs hours for UFH" },
                        { value: "20mm", label: "Profile depth frees every wall" },
                        { value: "85,000+", label: "Systems installed UK-wide", source: "18+ year track record" },
                    ]}
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Home Office Skirting Board Heating</h2>
                            <p className="text-xl font-light text-dh-dark mb-12 leading-relaxed">
                                ThermaSkirt is an ultra-responsive radiant heating system perfect for small or irregularly shaped home offices. By replacing standard radiators and projecting just 20mm from the wall, it reclaims vital floor space for desks and storage while delivering rapid heat-up times so your workspace is comfortable the moment you log on.
                            </p>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Workspace Efficiency</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Unlock Every Inch of Wall Space</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                The home office is typically a repurposed box room or spare bedroom where space is at an absolute premium. Placing a desk in front of a standard steel radiator is a terrible compromise — it blocks the convector heat output, damages your boiler&apos;s efficiency, and forces you to sit uncomfortably close to a 70°C metal panel.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt eliminates this layout prison. Because it distributes heat evenly along the floor line and mimics a standard timber skirting board, it frees up your walls entirely. BSRIA tests confirm wrapping the heat output around the perimeter reclaims up to 2 square metres of usable space — allowing you to position twin desks, heavy shelving units, or filing cabinets exactly where you need them.
                            </p>
                        </article>

                        <RoomImageCarousel roomSlug="home-office" />

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Rapid Response</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Heat on Demand, Not Hours Later</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Home offices are often used sporadically. You might need it at 8:00 AM on a Tuesday, and then not at all on Wednesday. Wet underfloor heating (UFH) is a poor fit for this usage pattern because heating a concrete screed takes hours, resulting in a freezing room when you start work and wasted energy long after you&apos;ve logged off.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt possesses a very low water volume (0.48 litres per metre in the BM2 profile) and high thermal conductivity via its aluminium extrusion. This means it heats up in just 5 minutes and cools down rapidly when the thermostat clicks off. It provides the exact same even radiant heat profile as premium UFH — less than a 1°C temperature variance across the room — but with the lightning-fast responsiveness you need for on-demand office heating.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Heat Source Compatibility</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Wet System or Fully Electric — Your Choice</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                If your home office is connected to the main house, ThermaSkirt connects to the existing central heating circuit — gas boiler, <Link href="/homeowners/by-heat-source/heat-pump" className="text-dh-red hover:underline">heat pump</Link>, or any other wet system. It works with the same 15mm or 10mm pipework you already have.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                For detached garden offices, loft conversions, or annexes where running pipework is impractical or expensive, ThermaSkirt-e (all-electric) provides identical radiant comfort via a self-regulating heating cable. It connects to a standard 240V fused spur — no pipework, no boiler, no wiring centres. Pair it with solar PV and a battery for minimal running costs.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Cost &amp; Installation</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">What Does a Home Office Installation Cost?</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                A typical home office installation costs between £500 and £800. This replaces both the radiator and the skirting board. For a detailed breakdown, see our <Link href="/homeowners/cost-guide" className="text-dh-red hover:underline">cost guide</Link>.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                Around 70% of domestic customers self-install using our YouTube guides and the detailed cutting list included with every order. A professional installation takes a plumber roughly 1 day for a home office. See our <Link href="/homeowners/diy-or-professional" className="text-dh-red hover:underline">DIY or Professional guide</Link> for advice on which route suits you.
                            </p>
                        </article>
                    </div>
                </section>

                <TestimonialStrip
                    quote="Turning our tiny box room into an office was impossible until we ripped out the radiator. ThermaSkirt let us push the desk right into the corner, giving me enough space to actually push my chair back."
                    author="Elena R."
                    tags={['Home Office', 'Box Room']}
                    caseStudiesLink="/homeowners/reviews"
                />

                <FAQText
                    faqs={[
                        {
                            question: "Will placing my desk against the wall block the heat?",
                            answer: "No. ThermaSkirt radiates heat outwards and upwards. Because the heat is distributed along the entire perimeter of the room, blocking a small 1.5m section with a desk will not noticeably impact the overall room temperature, unlike completely smothering a single point-source radiator."
                        },
                        {
                            question: "Can I run my office cables behind it?",
                            answer: "Yes. Many ThermaSkirt profiles feature a top channel or cavity behind the fascia specifically designed to securely hide low-voltage IT cables, speaker wires, and ethernet cables, keeping your office incredibly tidy."
                        },
                        {
                            question: "Can I just install it in the office without doing the rest of the house?",
                            answer: "Absolutely. Your plumber simply isolates the old office radiator, extends the pipes down to floor level, and fits ThermaSkirt on the exact same circuit. It coexists perfectly with radiators elsewhere in the house."
                        },
                        {
                            question: "Is it silent during video calls?",
                            answer: "Yes — genuinely silent. Standard steel radiators produce expansion 'ticking' and water drop noises as the boiler cycles. ThermaSkirt is an extruded aluminium profile mounted on hidden clips with expansion tolerances, so there are zero thermal noises to interrupt calls or concentration."
                        },
                        {
                            question: "Can I use the electric version in a garden office?",
                            answer: "Yes. ThermaSkirt-e connects directly to a standard 240V fused spur — no pipework, no boiler connection required. It is ideal for detached garden offices where digging a trench for central heating pipes would be expensive and disruptive."
                        },
                        {
                            question: "How much does a home office installation cost?",
                            answer: "A typical home office costs between £500 and £800 depending on room size and heat demand. This covers the ThermaSkirt profiles, fittings, and matching MDF for non-heated sections — replacing both the radiator and skirting board in one component."
                        },
                        {
                            question: "Does it help with condensation in cold offices?",
                            answer: "Yes. ThermaSkirt emits gentle radiant heat at the base of the walls — exactly where cold air meets warm surfaces and condensation forms. Heating the wall-floor junction from the inside dramatically reduces condensation risk, which is particularly valuable in loft conversions and garden rooms with different insulation profiles."
                        }
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore ThermaSkirt by Room"
                    description="See how ThermaSkirt transforms every space in your home."
                    tiles={[
                        { title: "Living Room", description: "Reclaim your walls. Heat from every skirting board.", href: "/homeowners/by-room/living-room", image: "https://www.discreteheat.com/MediaHandler.ashx?id=c4910a9c-abf2-4a05-8584-3f8aab246542" },
                        { title: "Bedroom", description: "Gentle, silent warmth with no hot surfaces.", href: "/homeowners/by-room/bedroom", image: "https://www.discreteheat.com/MediaHandler.ashx?id=c287107e-ac14-4abc-b282-8676388df56c" },
                        { title: "Kitchen", description: "Clean lines, no dust traps, safe surfaces.", href: "/homeowners/by-room/kitchen", image: "https://www.discreteheat.com/MediaHandler.ashx?id=30b410f8-469f-4737-b11c-e431ff5d8869" },
                        { title: "Open Plan", description: "Even comfort across large, connected spaces.", href: "/homeowners/by-room/open-plan", image: "https://www.discreteheat.com/MediaHandler.ashx?id=ae52252a-9018-4898-bea9-51eb467c72f3" },
                        { title: "Garden Room", description: "Year-round comfort, no pipework required.", href: "/homeowners/by-room/garden-room", image: "https://www.discreteheat.com/MediaHandler.ashx?id=a49fd4fb-7b74-4cad-8310-3f7a2050fcbe" },
                        { title: "Bathroom", description: "Warmth where you need it without bulky rails.", href: "/homeowners/by-room/bathroom", image: "https://www.discreteheat.com/MediaHandler.ashx?id=ea0ba0b5-d456-422e-a0a0-30c30f20c8b3" },
                    ]}
                />

                <CTABanner
                    heading="Optimise your workspace."
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
