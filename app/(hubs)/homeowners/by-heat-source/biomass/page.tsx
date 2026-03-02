import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import TestimonialStrip from '@/components/blocks/TestimonialStrip';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Biomass Boiler Heating | ThermaSkirt',
    description: 'The perfect emitter for high-temperature biomass boilers. ThermaSkirt distributes intense heat evenly without the scorching localized drafts created by radiators.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/by-heat-source/biomass/',
    }
};

export default function BiomassPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Biomass Heating"
                    title="Intense heat,"
                    titleHighlight="distributed gracefully."
                    description="Biomass boilers and log gasification boilers produce very high flow temperatures. Pumping 80°C water into a single steel radiator creates an unbearably hot convection draft next to it, and leaves the other side of the room cold. ThermaSkirt spreads this intense heat evenly around the perimeter."
                    primaryCta={{ text: "Get a System Quote", href: "/homeowners/get-a-quote" }}
                    imageSrc="/assets/images/homeowner-biomass.jpg"
                    imageAlt="A rustic barn conversion heated by a biomass-powered ThermaSkirt system"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Skirting Board Heating for Biomass Boilers</h2>
                            <p className="text-xl font-light text-dh-dark mb-12 leading-relaxed">
                                ThermaSkirt is uniquely positioned to handle the aggressive heat output of solid fuel systems. When connected to a biomass boiler pushing 75-80°C flow temperatures via an accumulator tank, the aluminium skirting profile safely radiates massive kW outputs evenly into large spaces, ensuring BSRIA-certified thermal comfort across vast barn conversions and rural properties.
                            </p>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Managing Heat Intensity</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Eradicating Point-Source Scorching</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Biomass log and pellet boilers are designed to burn fiercely to charge large water buffer tanks. When this incredibly hot 80°C water is suddenly released into a traditional Type 22 or Type 33 double-convector radiator, the localized result is unpleasant. The steel panel becomes dangerously hot to touch, and it blasts aggressive convection drafts into the ceiling, turning the localized seating area into an oven.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt prevents this &apos;point-source&apos; problem entirely. By distributing the identical kW heat load horizontally across 20 or 30 linear metres of aluminium extrusion, the surface temperature of the skirting board remains dramatically lower and far safer than a blistering radiator. The room still receives the necessary massive BTU heat input, but it is delivered via a gentle, enveloping radiant warmth from the floor upwards.
                            </p>
                        </article>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dh-grey-light border border-dh-grey-light/50">
                                {/* Next Image component pointing to a realistic stock/asset path */}
                                <div className="absolute inset-0 flex items-center justify-center text-dh-grey">Biomass Image 1</div>
                            </div>
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dh-grey-light border border-dh-grey-light/50">
                                <div className="absolute inset-0 flex items-center justify-center text-dh-grey">Biomass Image 2</div>
                            </div>
                        </div>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Solid Floor Conversions</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Avoiding the UFH Buffer Clash</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Many rural biomass properties feature solid stone or concrete floors, making underfloor heating incredibly difficult to retrofit. Furthermore, UFH is notoriously sluggish to respond. If a large barn conversion is empty during the day, heating a massive 150mm screed slab via the biomass accumulator tank wastes huge amounts of stored energy before anyone even walks through the door.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt installs entirely above the solid stone floor, projecting just 20mm from the walls. Because the water volume inside the profile is tiny and the aluminium is highly conductive, it draws exactly what it needs from the buffer tank and heats the air instantly. When the thermostat is satisfied, the system shuts down immediately, preserving your expensive biomass pellet supply for when you actually need it.
                            </p>
                        </article>
                    </div>
                </section>

                <TestimonialStrip
                    quote="Our log gasification boiler used to make the radiators terrifyingly hot. We practically burned our legs walking past them. With ThermaSkirt, the massive open-plan lounge is beautifully warm, but the skirting board itself is totally safe to touch."
                    author="Richard & Sue"
                    tags={['Barn Conversion', 'Log Boiler']}
                />

                <FAQText
                    faqs={[
                        {
                            question: "Does it need a blending valve like underfloor heating?",
                            answer: "No. Unlike concrete or screeded UFH which cracks if exposed to water above 50°C, ThermaSkirt is manufactured from solid aluminium and handles 80°C+ water effortlessly. You do not need expensive thermostatic blending valves or secondary circulation pumps on the manifold."
                        },
                        {
                            question: "Can it handle the pressure from a large buffer tank system?",
                            answer: "Yes. ThermaSkirt operates seamlessly on high-pressure sealed systems associated with modern biomass accumulators and thermal stores."
                        },
                        {
                            question: "Is it suitable for very draughty older properties?",
                            answer: "Yes. By surrounding the cold uninsulated external walls of an older rural property with high-temperature radiant heat, you create an active thermal barrier that fights incoming drafts much more effectively than a centrally located radiator."
                        }
                    ]}
                />

                <CTABanner
                    heading="Harness your biomass heat efficiently."
                    description="Upload your property plans for a fast, free itemised quote."
                    primaryCTA="Get a Free Quote"
                    primaryCTALink="/homeowners/get-a-quote"
                    secondaryCTA="Find an Installer"
                    secondaryCTALink="/homeowners/find-an-installer"
                />
            </main>
        </>
    );
}
