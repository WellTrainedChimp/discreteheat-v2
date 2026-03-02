import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import TestimonialStrip from '@/components/blocks/TestimonialStrip';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Bathroom Skirting Board Heating | ThermaSkirt',
    description: 'Banish freezing bathroom tiles. ThermaSkirt works alongside your heated towel rail to provide the core heat necessary to dry the room and prevent condensation.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/by-room/bathroom/',
    }
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
                    imageSrc="/assets/images/homeowner-bathroom.jpg"
                    imageAlt="A sleek, modern bathroom heated by a low-profile ThermaSkirt trim"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Bathroom Skirting Board Heating</h2>
                            <p className="text-xl font-light text-dh-dark mb-12 leading-relaxed">
                                ThermaSkirt is the perfect solution for bathrooms, wet rooms, and en-suites where wall space is dominated by baths, showers, and basins. Projecting just 20mm from the wall, it delivers the necessary radiant heat—working seamlessly on both gas boilers and heat pumps (35-45°C)—to completely dry the floor and eradicate condensation without corroding in high moisture environments.
                            </p>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Heating Inadequacy</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Towel Rails Don&apos;t Heat Rooms</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                The biggest mistake made in bathroom renovations is removing a large steel panel radiator and replacing it exclusively with a highly polished chrome towel rail. Ladder rails are designed to warm towels; they output very little heat to the air. In the depths of winter, the bathroom remains freezing cold and the air becomes damp and humid, quickly leading to black mould.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                Electric underfloor heating (UFH) mats are the usual fix, but they are expensive to run and prone to failure if laid poorly beneath tiles. ThermaSkirt easily connects to the existing 15mm copper pipes that fed the original radiator. It operates as the room&apos;s main heat emitter—surrounding the bathroom perimeter with a protective ring of warm aluminium. BSRIA tests confirm it distributes heat evenly, allowing you to dry your towels on the ladder rail while your room stays toasty.
                            </p>
                        </article>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dh-grey-light border border-dh-grey-light/50">
                                {/* Next Image component pointing to a realistic stock/asset path */}
                                <div className="absolute inset-0 flex items-center justify-center text-dh-grey">Bathroom Image 1</div>
                            </div>
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dh-grey-light border border-dh-grey-light/50">
                                <div className="absolute inset-0 flex items-center justify-center text-dh-grey">Bathroom Image 2</div>
                            </div>
                        </div>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Moisture & Hygiene</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Rust Proof & Hygienic</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Steel radiators placed next to toilets and baths tend to suffer. Constant splashing and high ambient humidity trap water behind the panels, blistering the paint and corroding the mild steel chassis into orange rust. Floor gaps behind washbasins quickly turn into un-cleanable grim traps.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt solves this immediately. It is manufactured from rust-proof aerospace-grade aluminium and finished with a resilient epoxy powder coating capable of withstanding heavy splashing and aggressive bathroom cleaners. Its sealed top and silicone lip edge bond firmly against ceramic tiles or vinyl flooring—totally eliminating gaps and preventing water running behind. It can be wiped clean with a single stroke.
                            </p>
                        </article>
                    </div>
                </section>

                <TestimonialStrip
                    quote="The chrome towel rail we fitted was freezing the bathroom in January. Sinking pipes for UFH was impossible over our old joists. ThermaSkirt just clicked right onto our existing pipes and looks completely modern."
                    author="Sarah C."
                    tags={['En Suite Bathroom', 'Moisture Resistant']}
                />

                <FAQText
                    faqs={[
                        {
                            question: "Is it safe to run in a wet room?",
                            answer: "Yes. The 'Wet' (hydronic) ThermaSkirt system is completely safe for use in bathrooms and wet rooms, circulating warm water exactly like a standard radiator. It will not rust and features a sealed bottom to prevent water pooling underneath."
                        },
                        {
                            question: "Can I connect it on the same pipework as my towel rail?",
                            answer: "Absolutely. Many installers tee off the existing flow and return pipes. They run one pipe run to the ThermaSkirt to provide the necessary room kW output, and a separate branch to the towel ladder rail to keep towels warm."
                        },
                        {
                            question: "Can I use the Electric version in the bathroom?",
                            answer: "Electric ThermaSkirt systems can be used in bathrooms provided they adhere strictly to UK IEE Wiring Regulations regarding bathroom 'Zones'. It must be signed off by a certified electrician."
                        }
                    ]}
                />

                <CTABanner
                    heading="Build your perfect bathroom."
                    description="Upload your bathroom dimensions for a fast, free itemised quote."
                    primaryCTA="Get a Free Quote"
                    primaryCTALink="/homeowners/get-a-quote"
                    secondaryCTA="Find an Installer"
                    secondaryCTALink="/homeowners/find-an-installer"
                />
            </main>
        </>
    );
}
