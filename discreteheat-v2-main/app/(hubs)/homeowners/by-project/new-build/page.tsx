import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import TestimonialStrip from '@/components/blocks/TestimonialStrip';
import CaseStudySection from '@/components/blocks/CaseStudySection';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'New Build & Self Build Heating | ThermaSkirt',
    description: 'The ultimate low-temperature heating system for new builds. Install ThermaSkirt in half the time of underfloor heating, freeing your architectural designs from massive radiators.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/by-project/new-build/',
    },
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=cfe551f7-ef53-4fe1-bfcc-7857ea300230', width: 1200, height: 630, alt: 'New Build & Self Build Heating | ThermaSkirt' }],
    },
};

export default function NewBuildPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Self Build Heating"
                    title="Design freedom,"
                    titleHighlight="built in."
                    description="When building your own home, you shouldn't be constrained by heating systems. While underfloor heating dictates your floor finishes and structural engineering, ThermaSkirt provides the same invisible, low-temperature radiant heat but installs precisely where you need it—without slowing down your build schedule."
                    primaryCta={{ text: "Get a Setup Quote", href: "/homeowners/get-a-quote" }}
                    imageSrc="https://www.discreteheat.com/MediaHandler.ashx?id=cfe551f7-ef53-4fe1-bfcc-7857ea300230"
                    imageAlt="A stunning architectural self-build interior heated by ThermaSkirt"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Skirting Board Heating for New Builds</h2>
                            <p className="text-xl font-light text-dh-dark mb-12 leading-relaxed">
                                ThermaSkirt is the smartest heat emitter for modern self-builds and eco-homes. Driven by an air source heat pump (35-45°C flow), it delivers precise room-by-room radiant heating comparable to UFH, but sidesteps the immense concrete thermal mass issues that cause severe overheating in highly insulated new builds.
                            </p>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Thermal Mass Issues</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">The Overheating Problem with UFH</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Modern new builds constructed to Part L regulations or Passivhaus standards are virtually airtight. They require incredibly little heat input. Digging miles of UFH pipework into a massive 100mm concrete floor slab creates an enormous thermal inertia problem.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                When the winter sun blazes through your south-facing bi-fold doors, the room temperature spikes. But the floor slab—acting as a massive heating sponge—cannot turn off instantly. It continues to release high volumes of radiant heat for hours, forcing occupants to open windows to escape the unbearable heat.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt’s lightweight aluminium extrusion holds minimal water volume. It reaches peak output in 5 minutes and shuts down entirely in under 10 minutes when the room thermostat clicks off. It prevents your highly insulated self-build from turning into a sauna on sunny days.
                            </p>
                        </article>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dh-grey-light border border-dh-grey-light/50">
                                {/* Next Image component pointing to a realistic stock/asset path */}
                                <div className="absolute inset-0 flex items-center justify-center text-dh-grey">New Build Image 1</div>
                            </div>
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dh-grey-light border border-dh-grey-light/50">
                                <div className="absolute inset-0 flex items-center justify-center text-dh-grey">New Build Image 2</div>
                            </div>
                        </div>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Construction & Flooring</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Choose Any Floor Finish</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Laying wet underfloor heating heavily restricts your interior design choices. Thick carpets, premium solid wood floors, and dense rugs act as thermal insulators that physically trap the heat beneath the floor, preventing the room from warming up and damaging the UFH system&apos;s efficiency.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt operates completely independent of the floor. Because the heating surface area wraps around the structural perimeter of the room, you are free to fit thick luxury carpets, natural engineered oak flooring, or plush rugs without worrying about destroying your heat pump&apos;s COP or voiding floor warranties.
                            </p>
                        </article>
                    </div>
                </section>

                <TestimonialStrip
                    quote="Our eco-build is so tightly insulated we were warned UFH would cook us in the summer. We installed ThermaSkirt throughout. It gives the exact same invisible look but we can actually control the temperature room-by-room."
                    author="David M."
                    tags={['Passivhaus Build', 'Heat Pump']}
                />

                <CaseStudySection
                    heading="SIPs Panel Self-Build with Heat Pump & ThermaSkirt Throughout"
                    description="Nick and his wife built a SIPs panel home from scratch with an air source heat pump and MVHR. They chose ThermaSkirt H2O as the sole emitter throughout — no radiators, no underfloor heating. After researching for two years and contacting an existing customer twice, they committed. The result: gentle, even warmth in every room, total furniture freedom, and a home that stays comfortable through changeable weather."
                    mediaId="672glg6n1w"
                    caption="Nick's SIPs panel self-build — air source heat pump with ThermaSkirt as the only emitter."
                />

                <FAQText
                    faqs={[
                        {
                            question: "Does it work well with Air Source Heat Pumps?",
                            answer: "Perfectly. ThermaSkirt H2O is designed from the ground up to operate efficiently at maximum heat pump flow temperatures of 35-45°C. It offers the expansive surface area required to hit your room's kW heat loss calculation without relying on massive double-panel radiators."
                        },
                        {
                            question: "How long does it take to install compared to UFH?",
                            answer: "A typical whole-house ThermaSkirt installation can be completely finished by a qualified plumber in 2-3 days directly alongside second fix plumbing. UFH involves laying insulation, clipping miles of pipe, pressure testing, and then waiting weeks for a 100mm screed to fully cure before taking delivery of your floor coverings."
                        },
                        {
                            question: "Do I need to run manifolds for a new build?",
                            answer: "In new builds we heavily recommend plumbing ThermaSkirt back to central flow and return manifolds (exactly like UFH). This allows you to deploy smart, individual room-by-room zone control with smart thermostats."
                        }
                    ]}
                />

                <CTABanner
                    heading="Build smarter. Heat faster."
                    description="Upload your self-build CAD designs for a fast, free itemised quote."
                    primaryCTA="Get a Free Quote"
                    primaryCTALink="/homeowners/get-a-quote"
                    secondaryCTA="Find an Installer"
                    secondaryCTALink="/homeowners/find-an-installer"
                />
            </main>
        </>
    );
}
