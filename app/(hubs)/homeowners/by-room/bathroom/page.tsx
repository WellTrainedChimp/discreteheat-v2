import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import TestimonialStrip from '@/components/blocks/TestimonialStrip';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import StatsStrip from '@/components/blocks/StatsStrip';
import NavbarMorph from '@/components/client/NavbarMorph';
import Link from 'next/link';

export const metadata = {
    title: 'Bathroom Skirting Board Heating | ThermaSkirt',
    description: 'Banish freezing bathroom tiles. ThermaSkirt works alongside your heated towel rail to provide the core heat necessary to dry the room and prevent condensation.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/by-room/bathroom/',
    },
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=70ce7e2a-6d6e-45c4-ab90-7d0cbaab64c8', width: 1200, height: 630, alt: 'Bathroom Skirting Board Heating | ThermaSkirt' }],
    },
};

export default function BathroomPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Bathroom Heating"
                    title="Warm tiles. Bone dry."
                    titleHighlight="Zero damp."
                    description="A heated towel rail looks great, but rarely provides enough British Thermal Units (BTUs) to heat a winter bathroom or fight condensation. ThermaSkirt provides waterproof, low-level radiant heat to dry floors quickly without ruining the aesthetics of a wet room."
                    primaryCta={{ text: "Get a Bathroom Quote", href: "/homeowners/get-a-quote" }}
                    secondaryCta={{ text: "View Cost Guide", href: "/homeowners/cost-guide" }}
                    imageSrc="https://www.discreteheat.com/MediaHandler.ashx?id=70ce7e2a-6d6e-45c4-ab90-7d0cbaab64c8"
                    imageAlt="A sleek, modern bathroom heated by a low-profile ThermaSkirt trim"
                />

                <StatsStrip
                    stats={[
                        { value: "Rust-proof", label: "Aerospace-grade aluminium construction" },
                        { value: "Sealed", label: "Silicone lip prevents water ingress" },
                        { value: "<1°C", label: "Temperature variance across the room", source: "BSRIA tested" },
                        { value: "10 yr", label: "Manufacturer warranty (wet system)" },
                    ]}
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Bathroom Skirting Board Heating</h2>
                            <p className="text-xl font-light text-dh-dark mb-12 leading-relaxed">
                                ThermaSkirt is the perfect solution for bathrooms, wet rooms, and en-suites where wall space is dominated by baths, showers, and basins. Projecting just 20mm from the wall, it delivers the necessary radiant heat — working seamlessly on both gas boilers and heat pumps (35–45°C) — to completely dry the floor and eradicate condensation without corroding in high-moisture environments.
                            </p>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Heating Inadequacy</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Towel Rails Don&apos;t Heat Rooms</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                The biggest mistake made in bathroom renovations is removing a large steel panel radiator and replacing it exclusively with a highly polished chrome towel rail. Ladder rails are designed to warm towels; they output very little heat to the air. In the depths of winter, the bathroom remains freezing cold and the air becomes damp and humid, quickly leading to black mould.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                Electric underfloor heating (UFH) mats are the usual fix, but they are expensive to run on standard electricity and prone to failure if laid poorly beneath tiles. ThermaSkirt connects to the existing 15mm copper pipes that fed the original radiator. It operates as the room&apos;s main heat emitter — surrounding the bathroom perimeter with a protective ring of warm aluminium. BSRIA tests confirm it distributes heat evenly, allowing you to dry your towels on the ladder rail while your room stays warm.
                            </p>
                        </article>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dh-grey-light border border-dh-grey-light/50">
                                <div className="absolute inset-0 flex items-center justify-center text-dh-grey">Bathroom Image 1</div>
                            </div>
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dh-grey-light border border-dh-grey-light/50">
                                <div className="absolute inset-0 flex items-center justify-center text-dh-grey">Bathroom Image 2</div>
                            </div>
                        </div>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Moisture &amp; Hygiene</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Rust-Proof and Hygienic</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Steel radiators placed next to toilets and baths tend to suffer. Constant splashing and high ambient humidity trap water behind the panels, blistering the paint and corroding the mild steel chassis into orange rust. Floor gaps behind washbasins quickly turn into uncleansable grime traps.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt is manufactured from rust-proof aerospace-grade aluminium and finished with a resilient double epoxy powder coating capable of withstanding heavy splashing and aggressive bathroom cleaners. Its sealed top and silicone lip edge bond firmly against ceramic tiles or vinyl flooring — totally eliminating gaps and preventing water from running behind. It can be wiped clean with a single stroke during routine floor mopping.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Damp &amp; Mould Prevention</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Active Defence Against Condensation</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Bathroom condensation and black mould are among the biggest maintenance headaches for UK homeowners. Cold spots at the base of external walls — where tiles meet the floor — are where condensation first forms, followed by mould. Standard towel rails mounted high on the wall do almost nothing to address this.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt addresses condensation at its source. By emitting gentle radiant heat directly at the wall-floor junction around the entire perimeter, it keeps these vulnerable surfaces above dew point temperature. This prevents condensation from forming in the first place, rather than trying to deal with it after visible mould has appeared. This is particularly important as compliance with <Link href="/homeowners/faqs" className="text-dh-red hover:underline">Awaab&apos;s Law</Link> becomes a priority for landlords and housing associations.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Cost &amp; Installation</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Bathroom Installation Costs</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                A typical bathroom installation costs between £400 and £800 depending on room size and layout. This connects directly to the existing pipework that served your old radiator — no new ground-up installation required. For a full breakdown, visit our <Link href="/homeowners/cost-guide" className="text-dh-red hover:underline">cost guide</Link>.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                Professional installation is recommended for bathrooms, especially wet rooms, to ensure proper sealing and compliance with plumbing regulations. Our 120+ registered installers can complete a bathroom in a single day. See our <Link href="/homeowners/diy-or-professional" className="text-dh-red hover:underline">DIY or Professional guide</Link>.
                            </p>
                        </article>
                    </div>
                </section>

                <TestimonialStrip
                    quote="The chrome towel rail we fitted was freezing the bathroom in January. Sinking pipes for UFH was impossible over our old joists. ThermaSkirt just clicked right onto our existing pipes and looks completely modern."
                    author="Sarah C."
                    tags={['En Suite Bathroom', 'Moisture Resistant']}
                    caseStudiesLink="/homeowners/reviews"
                />

                <FAQText
                    faqs={[
                        {
                            question: "Is it safe to run in a wet room?",
                            answer: "Yes. The wet (hydronic) ThermaSkirt system circulates warm water exactly like a standard radiator — completely safe for bathrooms and wet rooms. It will not rust, and features a sealed silicone base lip to prevent water pooling underneath."
                        },
                        {
                            question: "Can I connect it on the same pipework as my towel rail?",
                            answer: "Absolutely. Many installers tee off the existing flow and return pipes. They run one pipe run to the ThermaSkirt to provide the necessary room kW output, and a separate branch to the towel ladder rail to keep towels warm."
                        },
                        {
                            question: "Can I use the Electric version in the bathroom?",
                            answer: "Electric ThermaSkirt systems can be used in bathrooms provided they adhere strictly to UK IEE Wiring Regulations regarding bathroom Zones (BS 7671). It must be installed and signed off by a certified electrician."
                        },
                        {
                            question: "Will it stop my bathroom getting mouldy?",
                            answer: "ThermaSkirt significantly reduces mould risk by heating the wall-floor junction — exactly where condensation first forms in bathrooms. Keeping these surfaces above dew point temperature prevents moisture from forming in the first place, which is far more effective than treating mould after it appears."
                        },
                        {
                            question: "Can I clean it with bathroom cleaning products?",
                            answer: "Yes. The double epoxy powder coat finish is specifically designed to withstand aggressive cleaning products, including bleach-based bathroom cleaners. The sealed aluminium profile cannot rust or blister like painted steel radiators."
                        },
                        {
                            question: "Does it work with a heat pump?",
                            answer: "Yes. ThermaSkirt is designed for the 35–45°C flow temperatures that heat pumps deliver. It retains ~48% of its output at dT20, compared to ~30% for radiators — meaning you do not need to upsize to massive, ugly bathroom radiators when switching to a heat pump."
                        },
                        {
                            question: "How much does a bathroom installation cost?",
                            answer: "A typical bathroom costs between £400 and £800 depending on room size and layout. This connects to existing pipework — no UFH excavation or mat installation required. Professional installation is recommended for bathrooms to ensure proper waterproofing."
                        }
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore ThermaSkirt by Room"
                    description="See how ThermaSkirt transforms every space in your home."
                    tiles={[
                        { title: "Living Room", description: "Reclaim your walls for sofas and media units.", href: "/homeowners/by-room/living-room", image: "https://www.discreteheat.com/MediaHandler.ashx?id=2a3a5535-6119-4b26-b66f-263eecc7eb5a" },
                        { title: "Bedroom", description: "Silent, space-saving warmth for a better night's sleep.", href: "/homeowners/by-room/bedroom", image: "https://www.discreteheat.com/MediaHandler.ashx?id=9d650245-84b3-433b-bc74-32223612fdfe" },
                        { title: "Kitchen", description: "Plinth heating that frees up every cabinet.", href: "/homeowners/by-room/kitchen", image: "https://www.discreteheat.com/MediaHandler.ashx?id=8ffc200d-e646-42a6-bbec-d15ca4a01240" },
                        { title: "Home Office", description: "Consistent warmth, zero distractions.", href: "/homeowners/by-room/home-office", image: "https://www.discreteheat.com/MediaHandler.ashx?id=1b9a575e-60f1-4319-8c68-aeb033ff130a" },
                        { title: "Open Plan", description: "Even comfort across large, connected spaces.", href: "/homeowners/by-room/open-plan", image: "https://www.discreteheat.com/MediaHandler.ashx?id=89b3f691-9bbc-4268-941a-8ba213267301" },
                        { title: "Garden Room", description: "Year-round comfort in compact spaces.", href: "/homeowners/by-room/garden-room", image: "https://www.discreteheat.com/MediaHandler.ashx?id=ae52252a-9018-4898-bea9-51eb467c72f3" },
                    ]}
                />

                <CTABanner
                    heading="Build your perfect bathroom."
                    description="Upload your bathroom dimensions for a fast, free itemised quote."
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
