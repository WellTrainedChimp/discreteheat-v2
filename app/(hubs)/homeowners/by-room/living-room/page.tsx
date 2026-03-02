import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import TestimonialStrip from '@/components/blocks/TestimonialStrip';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Living Room Skirting Board Heating | ThermaSkirt',
    description: 'Reclaim your living room walls with ThermaSkirt. Gentle, invisible radiant heating that replaces bulky radiators and frees up space for furniture and design.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/by-room/living-room/',
    }
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
                    imageSrc="/assets/images/homeowner-living-room.jpg"
                    imageAlt="Family relaxing in a warm living room heated by ThermaSkirt"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Living Room Skirting Board Heating</h2>
                            <p className="text-xl font-light text-dh-dark mb-12 leading-relaxed">
                                ThermaSkirt is a radiant skirting board heating system that replaces traditional living room radiators. By projecting just 20mm from the wall and distributing heat evenly at floor level, it reclaims valuable wall space for furniture placement while delivering comfortable warmth with less than a 1°C temperature variance.
                            </p>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Space & Design</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Design Without Radiator Restrictions</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                The biggest compromise in any living room design is the radiator. It dictates where you can place your sofa, where your television must go, and limits your floor plan. ThermaSkirt eliminates this constraint entirely. As an aluminium extrusion that mimics a standard timber skirting board, it allows furniture to be placed exactly where you want it.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                Independent BSRIA testing confirms that wrapping the heat output around the perimeter reclaims up to 2 square metres of usable wall and floor space per room compared to standard Type 22 convector radiators.
                            </p>
                        </article>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dh-grey-light border border-dh-grey-light/50">
                                {/* Next Image component pointing to a realistic stock/asset path */}
                                <div className="absolute inset-0 flex items-center justify-center text-dh-grey">Room Image 1</div>
                            </div>
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dh-grey-light border border-dh-grey-light/50">
                                <div className="absolute inset-0 flex items-center justify-center text-dh-grey">Room Image 2</div>
                            </div>
                        </div>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Thermal Comfort</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Even Radiant Heat, No Cold Spots</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Standard steel radiators rely on convection: they heat the air (often up to 70°C in gas boiler systems), which immediately rises to the ceiling, cools, and falls back down. This creates drafts and a noticeable temperature difference between a seated person&apos;s head and feet.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt operates primarily as a radiant heat emitter. By generating warmth at a low level around the room&apos;s perimeter, the heat radiates gently inward. Thermal imaging demonstrates near-identical temperature gradients to premium wet underfloor heating systems, but with a highly responsive 5-minute heat-up time instead of waiting hours for a concrete screed to warm.
                            </p>
                        </article>
                    </div>
                </section>

                <TestimonialStrip
                    quote="We&apos;ve got a tricky shaped living room and taking the massive double radiator off the only straight wall finally let us put the sofa where it belongs. The heat is lovely and even."
                    author="Sarah M."
                    tags={['Renovation', 'Gas Boiler']}
                />

                <FAQText
                    faqs={[
                        {
                            question: "Can I put my sofa right up against ThermaSkirt?",
                            answer: "Yes. ThermaSkirt operates safely at lower surface temperatures and projects heat outwards. However, leaving a minor 1-2 inch breathing gap is recommended for optimal air circulation, just as you would with any wall."
                        },
                        {
                            question: "Will it heat a large, open-plan living room?",
                            answer: "Absolutely. In fact, ThermaSkirt excels in large spaces. Because it runs along the entire perimeter, it provides an exceptionally even heat distribution that single point-source radiators struggle to achieve in open-plan areas."
                        },
                        {
                            question: "Does it look like a real skirting board?",
                            answer: "Yes. Our profiles, such as Torus and Ogee, are designed to perfectly mimic traditional timber skirting boards. Once painted or finished, they blend seamlessly into the room's architecture."
                        }
                    ]}
                />

                <CTABanner
                    heading="Ready to reclaim your living room?"
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
