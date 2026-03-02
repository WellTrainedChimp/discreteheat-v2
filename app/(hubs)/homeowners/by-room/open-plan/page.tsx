import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import TestimonialStrip from '@/components/blocks/TestimonialStrip';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Open Plan Home Heating | ThermaSkirt',
    description: 'Even heat across vast spaces. ThermaSkirt eliminates cold spots in large knock-through extensions without relying on giant radiators or disruptive UFH.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/by-room/open-plan/',
    }
};

export default function OpenPlanPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Open Plan Extensions"
                    title="Massive spaces, perfectly"
                    titleHighlight="even warmth."
                    description="Knocking through a Victorian terrace into a single open-plan kitchen-diner creates a stunning space, but a nightmare for traditional central heating. ThermaSkirt distributes the heat evenly along the entire perimeter, banning cold spots and freeing your expansive walls."
                    primaryCta={{ text: "Get an Extension Quote", href: "/homeowners/get-a-quote" }}
                    imageSrc="/assets/images/homeowner-open-plan.jpg"
                    imageAlt="A massive open-plan kitchen and living space heated evenly"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Open Plan Skirting Board Heating</h2>
                            <p className="text-xl font-light text-dh-dark mb-12 leading-relaxed">
                                ThermaSkirt is a highly responsive radiant heating system tailored for large open-plan extensions. By acting as the room&apos;s skirting board or kitchen plinth, it operates exactly like continuous low-temperature wet underfloor heating (35-45°C), ensuring BSRIA-certified temperature gradients with less than 1°C variance across massive 40+ square metre rooms.
                            </p>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Heat Distribution</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Solving the Point-Source Problem</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                The fundamental flaw with using radiators in open-plan living spaces is that they are point sources of heat. To warm a vast 8-metre long knocked-through lounge/diner, you are forced to deploy two massive double-panel convectors running at a scorching 70°C. Sitting near them is unbearably hot, while sitting in the middle of the room remains freezing cold due to aggressive convection drafts.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt deconstructs the radiator and spreads its surface area horizontally around the entire room. Because the highly-conductive aluminium profile generates radiant heat at floor level across 10, 20, or 30 linear metres, the room is enveloped in a gentle cocoon of warmth. This is why independent thermal imaging confirms ThermaSkirt provides the exact same even comfort profile as premium, screed-encased underfloor heating.
                            </p>
                        </article>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dh-grey-light border border-dh-grey-light/50">
                                {/* Next Image component pointing to a realistic stock/asset path */}
                                <div className="absolute inset-0 flex items-center justify-center text-dh-grey">Open Plan Image 1</div>
                            </div>
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dh-grey-light border border-dh-grey-light/50">
                                <div className="absolute inset-0 flex items-center justify-center text-dh-grey">Open Plan Image 2</div>
                            </div>
                        </div>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Bi-Fold Doors & Floor Changes</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Seamless Integration with Modern Glazing</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Large rear extensions often feature wall-to-wall bi-fold or sliding patio doors. This creates a secondary problem: massive heat loss exactly where you have zero structural wall to hang a radiator. Homeowners are often forced to install ugly, expensive trench-heaters sunk into the floor.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt is incredibly versatile. It can be mounted directly onto the kitchen island kicking boards, wrapped down the party walls, and even installed on short stub-walls next to the glazing. Crucially, if you are knocking through an old room into a new extension, ThermaSkirt installs completely above ground, ignoring the height differences and screed complexities of joining two separate floors—a nightmare scenario for retrofit underfloor heating.
                            </p>
                        </article>
                    </div>
                </section>

                <TestimonialStrip
                    quote="We knocked three small rooms into one massive kitchen-diner. Radiators would have ruined the minimalist aesthetic and the bi-fold doors left no wall space anyway. ThermaSkirt was the perfect invisible solution."
                    author="David & Lucy"
                    tags={['Rear Extension', 'Open Plan']}
                />

                <FAQText
                    faqs={[
                        {
                            question: "Can I combine kitchen plinths with wall skirting?",
                            answer: "Yes, seamlessly. ThermaSkirt can be run along the wall as a traditional skirting board profile, and then transition perfectly into a kitchen kickboard profile under the cabinets using standard connections. It acts as one continuous heating circuit."
                        },
                        {
                            question: "Will it cope with the heat loss from 5 metres of glass bi-folds?",
                            answer: "Yes. ThermaSkirt emits heat very effectively. By surrounding the perimeter of the extension and utilizing the kitchen island, you deliver a massive surface area of warm aluminium into the room to counteract the glazing's heat loss."
                        },
                        {
                            question: "Can I zone the open plan space differently?",
                            answer: "If you plumb the kitchen run and the living area run onto separate legs of a manifold, you can use smart TRVs (like Heatmiser or Hive) to control the temperature of the two zones independently."
                        }
                    ]}
                />

                <CTABanner
                    heading="Build the extension of your dreams."
                    description="Upload your architect's plans for a fast, free itemised quote."
                    primaryCTA="Get a Free Quote"
                    primaryCTALink="/homeowners/get-a-quote"
                    secondaryCTA="Find an Installer"
                    secondaryCTALink="/homeowners/find-an-installer"
                />
            </main>
        </>
    );
}
