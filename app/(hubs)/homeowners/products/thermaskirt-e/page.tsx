import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'ThermaSkirt e | Electric Skirting Board Heating',
    description: 'Direct electric skirting board heating. No pipework, no plumber — just invisible, even warmth from your skirting boards. Perfect for extensions, garden rooms, and retrofits.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/products/thermaskirt-e/',
    }
};

const otherProducts = [
    { title: 'ThermaSkirt H2O', description: 'Water-based heating for boilers and heat pumps.', href: '/homeowners/products/thermaskirt-h2o' },
    { title: 'EasyClean', description: 'Smooth, wipe-clean profile for hygiene-sensitive spaces.', href: '/homeowners/products/easyclean' },
    { title: 'ThermaCurve', description: 'Curved sections for bay windows and architectural features.', href: '/homeowners/products/thermacurve' },
];

export default function HomeownerThermaSkirtEPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Electric Heating"
                    title="No pipes. No plumber."
                    titleHighlight="Just warmth."
                    description="ThermaSkirt e is a direct electric skirting board heater. It plugs into your mains electricity and heats the room from the perimeter — no boiler, no pipework, no disruption."
                    primaryCta={{ text: "Get a Free Quote", href: "/homeowners/get-a-quote" }}
                    imageSrc="/assets/images/product-e.jpg"
                    imageAlt="ThermaSkirt e installed in a modern apartment with no visible pipework"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">The Simple Electric Alternative</h2>
                            <p className="text-xl font-light text-dh-dark mb-6 leading-relaxed">
                                Not every room has access to central heating pipework. Garden rooms, loft conversions, extensions, and apartments often need an independent heating solution. ThermaSkirt e provides it — without the bulk and dust of traditional electric heaters.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                Instead of a hot box on the wall blowing dusty air upward, ThermaSkirt e radiates gentle warmth from the skirting board around the entire room. It heats objects and people directly, creating a comfortable environment without drying the air or circulating allergens.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Built-In Safety</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Self-Regulating Technology</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                ThermaSkirt e uses a self-regulating heating element that automatically adjusts its output. If a sofa or curtain covers a section, that section reduces its heat output on its own — no risk of overheating, no manual adjustment needed. It is safe to have furniture placed directly against it.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Solar PV Compatible</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Pair with Solar for Free Heating</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                If you have solar panels, ThermaSkirt e lets you use your free daytime electricity to heat your home directly. Combined with a smart thermostat and time-of-use tariffs, it becomes one of the most cost-effective ways to heat individual rooms.
                            </p>
                        </article>

                        <div className="p-8 bg-dh-grey-light rounded-2xl">
                            <h3 className="text-2xl font-semibold text-dh-dark mb-4">Ideal For</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-dh-grey">
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-dh-red mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                    <span>Garden rooms and annexes</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-dh-red mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                    <span>Loft and garage conversions</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-dh-red mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                    <span>Apartments without wet heating</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-dh-red mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                    <span>Solar PV households</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-dh-red mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                    <span>Off-gas-grid properties</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-dh-red mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                    <span>Extensions without pipework access</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <FAQText
                    faqs={[
                        {
                            question: "Do I need a plumber to install ThermaSkirt e?",
                            answer: "No. ThermaSkirt e is a direct electric system with no water pipework. It needs to be connected to a fused spur by a qualified electrician, but there is no plumbing work involved at all."
                        },
                        {
                            question: "How much does it cost to run?",
                            answer: "Running costs depend on your electricity tariff and how well insulated your room is. Because ThermaSkirt e heats radiantly rather than convectively, it warms the room efficiently without heating unnecessary air volume. Pairing with solar PV or an off-peak tariff can reduce costs significantly."
                        },
                        {
                            question: "Can I control it with a smart thermostat?",
                            answer: "Yes. ThermaSkirt e works with any standard smart thermostat such as Hive, Nest, or Heatmiser. You get full scheduling, remote control, and energy monitoring."
                        }
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore Other Products"
                    description="Find the right ThermaSkirt product for your home."
                    tiles={otherProducts}
                />

                <CTABanner
                    heading="Interested in electric skirting board heating?"
                    description="Get a free, no-obligation quote with a room-by-room breakdown tailored to your property."
                    primaryCTA="Get a Free Quote"
                    primaryCTALink="/homeowners/get-a-quote"
                    secondaryCTA="Order a Free Sample"
                    secondaryCTALink="/homeowners/request-a-sample"
                />
            </main>
        </>
    );
}
