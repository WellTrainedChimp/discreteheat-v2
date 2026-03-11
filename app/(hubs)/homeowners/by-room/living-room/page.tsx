import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import TestimonialStrip from '@/components/blocks/TestimonialStrip';
import CaseStudySection from '@/components/blocks/CaseStudySection';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import StatsStrip from '@/components/blocks/StatsStrip';
import RoomImageCarousel from '@/components/blocks/RoomImageCarousel';
import NavbarMorph from '@/components/client/NavbarMorph';
import Link from 'next/link';

export const metadata = {
    title: 'Living Room Skirting Board Heating | ThermaSkirt',
    description: 'Reclaim your living room walls with ThermaSkirt. Gentle, invisible radiant heating that replaces bulky radiators and frees up space for furniture and design.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/by-room/living-room/',
    },
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=2a3a5535-6119-4b26-b66f-263eecc7eb5a', width: 1200, height: 630, alt: 'Living Room Skirting Board Heating | ThermaSkirt' }],
    },
};

export default function LivingRoomPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Living Room Heating"
                    title="Reclaim your walls and"
                    titleHighlight="rearrange your life."
                    description="The living room should centre around living, not heating. ThermaSkirt replaces bulky radiators with a sleek skirting board profile, freeing up uninterrupted wall space for sofas, media units, and artwork."
                    primaryCta={{ text: "Get a Room Quote", href: "/homeowners/get-a-quote" }}
                    secondaryCta={{ text: "View Cost Guide", href: "/homeowners/cost-guide" }}
                    videoSrc="/assets/videos/hero.mp4"
                />

                <StatsStrip
                    stats={[
                        { value: "20mm", label: "Projection from wall", source: "less than timber skirting" },
                        { value: "<1°C", label: "Temperature variance across the room", source: "BSRIA tested" },
                        { value: "85,000+", label: "Systems installed in the UK", source: "18+ year track record" },
                        { value: "5 min", label: "Heat-up time", source: "vs hours for underfloor heating" },
                    ]}
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Living Room Skirting Board Heating</h2>
                            <p className="text-xl font-light text-dh-dark mb-12 leading-relaxed">
                                ThermaSkirt is a radiant skirting board heating system that replaces traditional living room radiators. By projecting just 20mm from the wall and distributing heat evenly at floor level, it reclaims valuable wall space for furniture placement while delivering comfortable warmth with less than a 1°C temperature variance across the room.
                            </p>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Space &amp; Design</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Design Without Radiator Restrictions</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                The biggest compromise in any living room design is the radiator. It dictates where you can place your sofa, where your television must go, and limits your floor plan. ThermaSkirt eliminates this constraint entirely. As an aluminium extrusion that mimics a standard timber skirting board, it allows furniture to be placed exactly where you want it.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                Independent BSRIA testing confirms that wrapping the heat output around the perimeter reclaims up to 2 square metres of usable wall and floor space per room compared to standard Type 22 convector radiators. In urban areas where floor space can cost upwards of £25,000 per square metre, removing one radiator can reclaim thousands of pounds of usable living area.
                            </p>
                        </article>

                        <RoomImageCarousel roomSlug="living-room" />

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Thermal Comfort</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Even Radiant Heat, No Cold Spots</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Standard steel radiators rely on convection: they heat the air (often up to 70°C in gas boiler systems), which immediately rises to the ceiling, cools, and falls back down. This creates drafts and a noticeable temperature difference between a seated person&apos;s head and feet.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt operates primarily as a radiant heat emitter. By generating warmth at a low level around the room&apos;s perimeter, the heat radiates gently inward. BSRIA thermal imaging demonstrates near-identical temperature gradients to premium wet underfloor heating systems — less than 1°C variance vs up to 5°C with radiators — but with a highly responsive 5-minute heat-up time instead of waiting hours for a concrete screed to warm.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Heat Source Compatibility</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Works with Your Boiler Today — Ready for a Heat Pump Tomorrow</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                ThermaSkirt connects directly to any central heating system — gas, LPG, oil, or biomass boilers — exactly as a standard radiator would. Because it has significantly more surface area than a traditional convector, it delivers the same living room warmth at 50–55°C flow temperatures instead of the 70–80°C that conventional radiators demand. This keeps condensing boilers in their most efficient condensing mode, potentially reducing gas bills by up to 20% without changing your boiler.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Planning to switch to an <Link href="/homeowners/by-heat-source/heat-pump" className="text-dh-red hover:underline">air source heat pump</Link> in the future? ThermaSkirt is already designed for 35–45°C flow temperatures, precisely where heat pumps achieve their best Coefficient of Performance (CoP). Unlike standard radiators — which lose ~70% of their output at dT20 — ThermaSkirt retains ~48%, eliminating the need for the massive, ugly oversized radiators that heat pump conversions usually demand.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                Install it on your existing boiler now, and when you upgrade to a heat pump in 5, 10, or 15 years, the emitters stay exactly where they are. No ripping up floors. No replacing radiators again. It is genuinely future-proof.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Cost &amp; Value</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">What Does Living Room ThermaSkirt Actually Cost?</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                A typical living room installation costs between £500 and £1,000, depending on room size and heat demand. This is comparable to a mid-range designer radiator, but ThermaSkirt replaces both the radiator <em>and</em> the skirting board — so you are buying two components for the price of one premium one. For a detailed breakdown, visit our <Link href="/homeowners/cost-guide" className="text-dh-red hover:underline">cost guide</Link>.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                Around 70% of domestic ThermaSkirt installations are completed by the homeowner as a DIY project, using our step-by-step YouTube guides and the cutting list included with every order. If you prefer a professional installation, our network of 120+ registered installers can handle the entire process. Not sure which route suits you? See our <Link href="/homeowners/diy-or-professional" className="text-dh-red hover:underline">DIY or Professional guide</Link>.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Safety &amp; Air Quality</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Safer for Families, Cleaner Air for Everyone</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                RoSPA data shows that radiator-related impact injuries account for 86–87% of domestic heating injuries, with the under-5s and over-65s most at risk. Replacing a heavy, protruding steel panel with a low-profile aluminium skirting board eliminates this hazard entirely. ThermaSkirt operates at safe, low surface temperatures without the need for additional radiator covers.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                Radiant heat emitted from floor level also produces dramatically less air movement than convection radiators. This means significantly less dust, allergens, and airborne particulates circulating through your family&apos;s breathing zone. Customers with allergies and asthma consistently report noticeably cleaner air and improved comfort.
                            </p>
                        </article>
                    </div>
                </section>

                <TestimonialStrip
                    quote="We&apos;ve got a tricky shaped living room and taking the massive double radiator off the only straight wall finally let us put the sofa where it belongs. The heat is lovely and even."
                    author="Sarah M."
                    tags={['Renovation', 'Gas Boiler']}
                    caseStudiesLink="/homeowners/reviews"
                />

                <CaseStudySection
                    heading="Total Furniture Freedom — No Compromises"
                    description="Nick's new-build home has ThermaSkirt in every room with no radiators at all. He describes the freedom it gives: furniture goes exactly where they want it, warm skirting boards run along the windows providing gentle heat, and he walks around in just socks. No restrictions, no compromises — just a home designed around living, not heating."
                    mediaId="672glg6n1w"
                    caption="Nick's living spaces — ThermaSkirt throughout, total furniture freedom."
                />

                <FAQText
                    faqs={[
                        {
                            question: "Can I put my sofa right up against ThermaSkirt?",
                            answer: "Yes. ThermaSkirt operates safely at lower surface temperatures and projects heat outwards into the room. Furniture can be placed against it without blocking the room's overall warmth, because the thermal envelope principle means heat is generated around the entire perimeter. Leaving a minor 1–2 inch breathing gap is recommended for optimal air circulation, just as you would with any wall."
                        },
                        {
                            question: "Will it heat a large, open-plan living room?",
                            answer: "Absolutely. In fact, ThermaSkirt excels in large spaces. Because it runs along the entire perimeter, it provides an exceptionally even heat distribution that single point-source radiators struggle to achieve. BSRIA thermal imaging shows less than 1°C temperature variance across rooms heated with ThermaSkirt, compared to up to 5°C with standard convectors."
                        },
                        {
                            question: "Does it look like a real skirting board?",
                            answer: "Yes. Our profiles, such as Torus (BM2) and Ogee (BM3), are designed to perfectly mimic traditional timber skirting boards. Once painted or finished in Cricket White (RAL 9010) or Vintage Ivory (RAL 1013), they blend seamlessly into the room's architecture. Matching MDF profiles are supplied for non-heated sections so the look is consistent throughout."
                        },
                        {
                            question: "What type of heating system does it work with?",
                            answer: "ThermaSkirt connects to any wet central heating system — gas boilers, LPG, oil, biomass, and heat pumps (air source or ground source). It uses the same 15mm or 10mm pipework as a standard radiator. It is also available as an all-electric version (ThermaSkirt-e) for rooms with no pipework access."
                        },
                        {
                            question: "How much does a living room installation cost?",
                            answer: "A typical living room costs between £500 and £1,000 depending on room size and heat demand. This is comparable to a mid-range designer radiator, but ThermaSkirt replaces both the radiator and the skirting board. Around 70% of customers self-install using our YouTube guides, which reduces costs further."
                        },
                        {
                            question: "Is it safe with young children and pets?",
                            answer: "Yes. ThermaSkirt operates at low surface temperatures — well below the safe-touch threshold — without requiring additional radiator covers. RoSPA data shows that radiator impact injuries account for 86–87% of domestic heating injuries, mostly affecting under-5s and over-65s. Replacing a heavy, protruding steel panel with a flush-fitting 20mm skirting profile eliminates this risk entirely."
                        },
                        {
                            question: "Can I install it in just the living room, not the whole house?",
                            answer: "Absolutely. Many customers start with one room and keep existing radiators elsewhere. Your plumber simply isolates the old radiator, extends the pipes down to floor level, and connects ThermaSkirt to the same circuit. It coexists perfectly with radiators and towel rails on the same system."
                        }
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore ThermaSkirt by Room"
                    description="See how ThermaSkirt transforms every space in your home."
                    tiles={[
                        { title: "Bedroom", description: "Gentle, silent warmth with no hot surfaces.", href: "/homeowners/by-room/bedroom", image: "https://www.discreteheat.com/MediaHandler.ashx?id=c287107e-ac14-4abc-b282-8676388df56c" },
                        { title: "Kitchen", description: "Clean lines, no dust traps, safe surfaces.", href: "/homeowners/by-room/kitchen", image: "https://www.discreteheat.com/MediaHandler.ashx?id=30b410f8-469f-4737-b11c-e431ff5d8869" },
                        { title: "Home Office", description: "Consistent warmth, zero distractions.", href: "/homeowners/by-room/home-office", image: "https://www.discreteheat.com/MediaHandler.ashx?id=29b46b07-bb05-466b-a825-a3e9d1411cfd" },
                        { title: "Open Plan", description: "Even comfort across large, connected spaces.", href: "/homeowners/by-room/open-plan", image: "https://www.discreteheat.com/MediaHandler.ashx?id=ae52252a-9018-4898-bea9-51eb467c72f3" },
                        { title: "Garden Room", description: "Year-round comfort, no pipework required.", href: "/homeowners/by-room/garden-room", image: "https://www.discreteheat.com/MediaHandler.ashx?id=a49fd4fb-7b74-4cad-8310-3f7a2050fcbe" },
                        { title: "Bathroom", description: "Warmth where you need it without bulky rails.", href: "/homeowners/by-room/bathroom", image: "https://www.discreteheat.com/MediaHandler.ashx?id=ea0ba0b5-d456-422e-a0a0-30c30f20c8b3" },
                    ]}
                />

                <CTABanner
                    heading="Ready to reclaim your living room?"
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
