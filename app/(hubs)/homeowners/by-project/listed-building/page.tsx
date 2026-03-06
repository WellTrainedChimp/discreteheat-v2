import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import TestimonialStrip from '@/components/blocks/TestimonialStrip';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Listed Building Heating Solutions | ThermaSkirt',
    description: 'Upgrade the heating in your Grade II listed property without ripping up historic floorboards or destroying the original aesthetics. ThermaSkirt offers a sympathetic, high-performance retrofit.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/by-project/listed-building/',
    },
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=06143031-5517-4d3a-82c4-ca6d40299523', width: 1200, height: 630, alt: 'Listed Building Heating Solutions | ThermaSkirt' }],
    },
};

export default function ListedBuildingPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Heritage Heating"
                    title="Sympathetic design,"
                    titleHighlight="modern efficiency."
                    description="Upgrading heating in a Grade-II listed property is fraught with conservation rules. Ripping up centuries-old floorboards for underfloor heating is often strictly prohibited. ThermaSkirt offers modern radiant heating disguised beautifully as classic Victorian skirting."
                    primaryCta={{ text: "Get a Heritage Quote", href: "/homeowners/get-a-quote" }}
                    imageSrc="https://www.discreteheat.com/MediaHandler.ashx?id=06143031-5517-4d3a-82c4-ca6d40299523"
                    imageAlt="A sympathetic renovation of a heritage living space heated invisibly by ThermaSkirt Deco"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Skirting Board Heating for Listed Buildings</h2>
                            <p className="text-xl font-light text-dh-dark mb-12 leading-relaxed">
                                ThermaSkirt is the least intrusive method for modernizing the heating in heritage homes. Operating effortlessly on standard boiler systems or low-flow heat pumps (35-45°C), it installs entirely above ground, protecting historically significant features while perfectly mimicking the original deep timber architectural mouldings.
                            </p>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Conservation Approval</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Zero Structural Interference</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Securing listed building consent to rip out original Georgian pine floorboards, pour concrete screeds, and install wet underfloor heating is incredibly difficult and often rejected outright by Conservation Officers. The risk of irrevocably damaging the building&apos;s historic fabric is too high.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt circumvents these conservation blockers completely. It requires zero structural excavation and zero floor adjustments. Connecting directly to the 15mm copper heating pipes that fed the property&apos;s old radiators, it is mounted securely to the surface of the walls exactly like a standard skirting board. It provides the same invisible, even radiant heat as UFH, but installed in a fraction of the time with absolute respect for the property&apos;s original structure.
                            </p>
                        </article>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dh-grey-light border border-dh-grey-light/50">
                                {/* Next Image component pointing to a realistic stock/asset path */}
                                <div className="absolute inset-0 flex items-center justify-center text-dh-grey">Listed Building Image 1</div>
                            </div>
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dh-grey-light border border-dh-grey-light/50">
                                <div className="absolute inset-0 flex items-center justify-center text-dh-grey">Listed Building Image 2</div>
                            </div>
                        </div>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Architectural Authenticity</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">The &apos;Deco&apos; Profile</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                A modern, brilliant-white steel panel radiator hung awkwardly beneath a 150-year-old sash window ruins the historical integrity of a room. Heavy cast-iron radiators are aesthetically appropriate, but they are incredibly slow to heat up, ferociously expensive, and operate terribly on modern heat pumps.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                Our ThermaSkirt &apos;Deco&apos; profile is specifically engineered for period properties. The extruded aerospace-grade aluminium mimics the classic curves of a traditional Ogee or Torus timber moulding. It can be mounted on top of deep timber plinths to recreate the towering 250mm skirting boards found in high-ceilinged Victorian terraces. It vanishes seamlessly into the room&apos;s historical architecture while delivering rapid, 21st-century thermal efficiency.
                            </p>
                        </article>
                    </div>
                </section>

                <TestimonialStrip
                    quote="The Conservation Officer point-blank refused UFH because of the original flagstone floors. We used the Deco profile instead. Once painted, you genuinely cannot tell it isn't the original 18th-century skirting, but the room is incredibly warm."
                    author="Eleanor F."
                    tags={['Grade II Listed', 'Conservation Approved']}
                />

                <FAQText
                    faqs={[
                        {
                            question: "Can we paint ThermaSkirt to match heritage colours?",
                            answer: "Yes. ThermaSkirt is supplied with a tough factory finish, but it can be lightly sanded and painted over by your decorators using any high-quality oil or water-based trim paint designed for historic homes."
                        },
                        {
                            question: "We have very uneven, wonky walls. Will it fit?",
                            answer: "Yes. Heritage properties rarely have straight walls. We supply the profile with a flexible silicone lip on the top border that neatly caulks the gaps against waving plaster. For extreme bows, our installers can 'scribe' and shim the brackets to maintain a straight line."
                        },
                        {
                            question: "Will it combat condensation on single-glazed windows?",
                            answer: "ThermaSkirt sits directly below the windows on the perimeter walls. Since it outputs radiant heat upwards from the lowest possible point, it forms a warm thermal curtain that actively mitigates the cold drafts rolling off original single glazing."
                        }
                    ]}
                />

                <CTABanner
                    heading="Protect your heritage. Heat your home."
                    description="Upload your floor plans for a fast, free itemised quote."
                    primaryCTA="Get a Free Quote"
                    primaryCTALink="/homeowners/get-a-quote"
                    secondaryCTA="Find an Installer"
                    secondaryCTALink="/homeowners/find-an-installer"
                />
            </main>
        </>
    );
}
