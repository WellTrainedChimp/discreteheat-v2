import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import TestimonialStrip from '@/components/blocks/TestimonialStrip';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Basement Conversion Heating | ThermaSkirt',
    description: 'Transform damp cellars into warm, usable spaces. ThermaSkirt provides instant radiant heat without piercing expensive basement tanking membranes.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/by-project/basement-conversion/',
    },
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=7851770d-a31c-4ad9-bdfa-9c102d2d3b39', width: 1200, height: 630, alt: 'Basement Conversion Heating | ThermaSkirt' }],
    },
};

export default function BasementConversionPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Basement Conversions"
                    title="Cold cellars to"
                    titleHighlight="warm sanctuaries."
                    description="Converting a damp underground basement into a cinema room or gym presents massive waterproofing challenges. Installing underfloor heating often risks piercing vital damp-proof membranes. ThermaSkirt provides totally isolated, above-ground perimeter heating."
                    primaryCta={{ text: "Get a Room Quote", href: "/homeowners/get-a-quote" }}
                    imageSrc="https://www.discreteheat.com/MediaHandler.ashx?id=7851770d-a31c-4ad9-bdfa-9c102d2d3b39"
                    imageAlt="A luxury subterranean living room heated silently with ThermaSkirt"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Basement Skirting Board Heating</h2>
                            <p className="text-xl font-light text-dh-dark mb-12 leading-relaxed">
                                ThermaSkirt is the safest perimeter heating system for subterranean basement conversions. By mounting directly to the timber stud framework via hidden clips acting as a 20mm profile skirting board, it actively drives back condensation and cold drafts on retaining walls without ever threatening the structural integrity of your tanking membranes.
                            </p>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Tanking Membranes</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Protecting the Waterproof Seal</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                The golden rule of basement conversions is that you must never physically pierce the internal waterproof tanking membrane. Pouring concrete screeds for underfloor heating requires heavy drilling into walls for perimeter insulation and massive heavy impact on the lower slab, putting the seal at extreme risk. Pinholes in the membrane guarantee catastrophic flooding.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt is mounted securely on the interior face of the new battened or studded out wall structure—a necessary structure built entirely in front of the tanking membrane. It acts as the cosmetic 150mm skirting board while simultaneously connecting to your home&apos;s central heating circuit, meaning all pipework is routed safely above ground and away from the membrane.
                            </p>
                        </article>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dh-grey-light border border-dh-grey-light/50">
                                {/* Next Image component pointing to a realistic stock/asset path */}
                                <div className="absolute inset-0 flex items-center justify-center text-dh-grey">Basement Image 1</div>
                            </div>
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dh-grey-light border border-dh-grey-light/50">
                                <div className="absolute inset-0 flex items-center justify-center text-dh-grey">Basement Image 2</div>
                            </div>
                        </div>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Condensation & Air Flow</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Eradicating Cold Spots</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Basements inherently lack ventilation. Cold external retaining walls chill the interior air, rapidly creating heavy condensation problems that destroy soft furnishings, destroy drywall tape, and promote black mould. Deploying massive fan heaters just moves the damp air around.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt envelops the entire perimeter footprint of the basement with low-level radiant heat. Because the warm aluminium profile sits firmly against the crucial junction where the floor meets the wall, it actively prevents condensation from forming across the bottom edge of the room. This effectively &apos;bakes out&apos; the cold, giving the basement a crisp, warm, above-ground feeling identical to a standard lounge.
                            </p>
                        </article>
                    </div>
                </section>

                <TestimonialStrip
                    quote="Hitting the DPM membrane while installing UFH would have flooded the cellar. ThermaSkirt screwed directly into the plasterboard studding instead. It dried the room out instantly and it finally feels like a real living space."
                    author="Peter H."
                    tags={['Subterranean Build', 'Tanking Proof']}
                />

                <FAQText
                    faqs={[
                        {
                            question: "Does the system rust in damp basement environments?",
                            answer: "No. ThermaSkirt is manufactured from high-grade aerospace aluminium which cannot rust. It is finished with a hardened epoxy powder coating that perfectly withstands the knocks, bumps, and varying humidity of a basement."
                        },
                        {
                            question: "How do you connect the pipework below the boiler level?",
                            answer: "Basement radiators are typically fed via vertical 'drop' pipes coming from the ground floor flow and return circuits above. ThermaSkirt simply connects to these drop pipes at the corners of the room."
                        },
                        {
                            question: "Can I use the Electric version in the cellar?",
                            answer: "Yes. Electric ThermaSkirt is a very popular choice for basements as it avoids the complexity of extending wet heating pipes underground. The 240V system plugs directly into the local loop and requires minimal installation time."
                        }
                    ]}
                />

                <CTABanner
                    heading="Banish the damp."
                    description="Upload your basement conversion plans for a fast, free itemised quote."
                    primaryCTA="Get a Free Quote"
                    primaryCTALink="/homeowners/get-a-quote"
                    secondaryCTA="Find an Installer"
                    secondaryCTALink="/homeowners/find-an-installer"
                />
            </main>
        </>
    );
}
