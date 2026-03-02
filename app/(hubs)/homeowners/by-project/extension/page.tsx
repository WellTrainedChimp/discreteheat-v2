import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import TestimonialStrip from '@/components/blocks/TestimonialStrip';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Extension Heating Systems | ThermaSkirt',
    description: 'Heat your new home extension quickly and reliably. ThermaSkirt connects to your existing boiler without digging up floors or raising heights to match the old house.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/by-project/extension/',
    }
};

export default function ExtensionPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Extension Heating"
                    title="Seamless warmth,"
                    titleHighlight="zero thresholds."
                    description="Adding a rear or side extension is exciting, but integrating its heating with the original house is notoriously difficult. Underfloor heating raises the floor heights and takes weeks to install. ThermaSkirt provides radiant comfort that bridges the old and the new perfectly."
                    primaryCta={{ text: "Get an Extension Quote", href: "/homeowners/get-a-quote" }}
                    imageSrc="/assets/images/homeowner-extension.jpg"
                    imageAlt="A large, bright modern rear extension heated invisibly by ThermaSkirt"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Skirting Board Heating for Extensions</h2>
                            <p className="text-xl font-light text-dh-dark mb-12 leading-relaxed">
                                ThermaSkirt is a low-temperature (35-45°C) radiant heating system tailored for complex extensions. Unlike wet underfloor heating which requires pouring tonnes of concrete and raising the extension floor level by 15-20mm above the original house, ThermaSkirt installs entirely above ground, keeping your thresholds perfectly flush.
                            </p>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Construction Hurdles</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">The Problem with Mixing Systems</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                If your original house is heated by standard radiators, attempting to add underfloor heating exclusively to the new rear extension creates a hydraulic battle. Gas boilers deliver water at 70°C for radiators, but UFH strictly needs 45°C to avoid cracking the screed. You are immediately forced to install expensive blending valves, manifolds, and secondary pumps.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                Furthermore, relying on two fundamentally different heating methods causes immense comfort issues. Your radiator-heated living room boils over in 20 minutes while the UFH in the extension takes hours to warm up. ThermaSkirt unifies the system. It connects directly to your existing radiator circuit and operates with the same ultra-fast responsiveness as a steel panel—heating the entire open plan space evenly in 15 minutes.
                            </p>
                        </article>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dh-grey-light border border-dh-grey-light/50">
                                {/* Next Image component pointing to a realistic stock/asset path */}
                                <div className="absolute inset-0 flex items-center justify-center text-dh-grey">Extension Image 1</div>
                            </div>
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dh-grey-light border border-dh-grey-light/50">
                                <div className="absolute inset-0 flex items-center justify-center text-dh-grey">Extension Image 2</div>
                            </div>
                        </div>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Bi-Fold & Patio Doors</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Fighting Heat Loss at the Glass</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Modern extensions are dominated by massive expanses of glass. Aluminium bi-fold doors are stunning, but they create a wall of intense heat loss with zero physical space to hang a standard radiator underneath them.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt’s intelligent perimeter design wraps the heat output down the sides of the extension and right up to the window frames. It can even be installed as a low-level threshold grille or integrated into step ups. By producing a highly reactive veil of 40°C radiant warmth exactly where the cold air originates, it prevents drafts sweeping across your newly laid floors.
                            </p>
                        </article>
                    </div>
                </section>

                <TestimonialStrip
                    quote="We tried to put UFH in our single-storey extension, but the architect warned us there would be a 20mm step up from the old kitchen. ThermaSkirt avoided the step entirely, hooked straight onto our combi boiler, and looks brilliant."
                    author="Chris W."
                    tags={['Rear Extension', 'Combi Boiler']}
                />

                <FAQText
                    faqs={[
                        {
                            question: "Do I need to upgrade my boiler for the extension?",
                            answer: "Typically, no. Boiler sizing is based on the total kW output required by the house. Most existing UK boilers are drastically oversized (typically 24kW–30kW). Providing your boiler has sufficient remaining capacity, ThermaSkirt simply plumbs straight into the existing 15mm or 10mm pipework like a normal radiator."
                        },
                        {
                            question: "How do I transition between the old house and the new extension?",
                            answer: "If you have knocked a wall through, ThermaSkirt acts as a physical bridge. The aluminium profiles span across the old brick line seamlessly. We provide dedicated internal and external corner covers to wrap around structural pillars or changes in wall alignment."
                        },
                        {
                            question: "Is it suitable for heat-pump ready extensions?",
                            answer: "Yes. ThermaSkirt H2O is designed from the ground up for low-flow temperatures (35-45°C). By over-sizing the surface area around the perimeter of the extension, you guarantee your heat pump will achieve maximum COP efficiency."
                        }
                    ]}
                />

                <CTABanner
                    heading="Build the extension without the compromises."
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
