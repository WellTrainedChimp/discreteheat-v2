import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'ThermaSkirt H2O | Water-Based Skirting Board Heating',
    description: 'Our core hydronic skirting board heating system. Works with your existing boiler or a new heat pump to deliver invisible, even warmth around every room.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/products/thermaskirt-h2o/',
    }
};

const otherProducts = [
    { title: 'ThermaSkirt e', description: 'The electric alternative — no pipework required.', href: '/homeowners/products/thermaskirt-e' },
    { title: 'EasyClean', description: 'Smooth, wipe-clean profile for hygiene-sensitive spaces.', href: '/homeowners/products/easyclean' },
    { title: 'ThermaCurve', description: 'Curved sections for bay windows and architectural features.', href: '/homeowners/products/thermacurve' },
];

export default function HomeownerThermaSkirtH2OPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Water-Based Heating"
                    title="The skirting board that"
                    titleHighlight="heats your home."
                    description="ThermaSkirt H2O connects to your existing boiler or heat pump just like a radiator — but instead of a bulky metal box on the wall, your heating runs invisibly around the room at skirting board level."
                    primaryCta={{ text: "Get a Free Quote", href: "/homeowners/get-a-quote" }}
                    imageSrc="/assets/images/product-h2o.jpg"
                    imageAlt="ThermaSkirt H2O installed in a modern living room, replacing the standard skirting board"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">How It Works</h2>
                            <p className="text-xl font-light text-dh-dark mb-6 leading-relaxed">
                                ThermaSkirt H2O replaces your standard skirting board with an aluminium heating profile that carries hot water from your boiler or heat pump. It connects into your existing pipework just like a radiator.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                Instead of concentrating all your heat onto one wall behind a radiator, ThermaSkirt spreads it evenly around the entire perimeter of the room. The result is gentle, consistent warmth with no cold spots, no hot walls, and no wasted space. Your furniture can sit flush against every wall, and there are no dust-trapping metal fins to clean.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Heat Pump Ready</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Perfect for Low-Temperature Systems</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Heat pumps work best when running at lower temperatures (35-45°C). Standard radiators lose most of their output at these temperatures, forcing you to install massive oversized panels. ThermaSkirt uses the entire room perimeter as its heating surface, so it delivers the warmth you need even at low flow temperatures — without taking over your walls.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Designed to Blend In</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Looks Like a Skirting Board, Heats Like a Radiator</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                ThermaSkirt is available in classic profiles — Ogee, Torus, and Minimalist — that match the architectural style of your home. It can be painted any colour to blend seamlessly with your decor. Most visitors will never know it is your heating system.
                            </p>
                        </article>

                        <div className="p-8 bg-dh-grey-light rounded-2xl">
                            <h3 className="text-2xl font-semibold text-dh-dark mb-4">At a Glance</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-dh-grey">
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-dh-red mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                    <span>Works with any boiler or heat pump</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-dh-red mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                    <span>Heats up in under 5 minutes</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-dh-red mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                    <span>Frees up 100% of your wall space</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-dh-red mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                    <span>Available in Ogee, Torus & Minimalist profiles</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-dh-red mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                    <span>Paintable to any colour</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-dh-red mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                    <span>BSRIA independently tested</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <FAQText
                    faqs={[
                        {
                            question: "Can ThermaSkirt H2O replace my existing radiators?",
                            answer: "Yes. ThermaSkirt connects into your existing central heating pipework in the same way as a radiator. Your plumber removes the old radiators and connects ThermaSkirt to the same flow and return pipes."
                        },
                        {
                            question: "Will it work with my heat pump?",
                            answer: "Absolutely. ThermaSkirt is specifically designed for low-temperature systems. Its large surface area means it delivers excellent output even at 35-45°C flow temperatures, which is the ideal operating range for air source heat pumps."
                        },
                        {
                            question: "How long does installation take?",
                            answer: "A typical room can be completed in half a day by a qualified installer. A full house installation usually takes 2-3 days depending on the number of rooms and complexity of the layout."
                        },
                        {
                            question: "Can I put furniture in front of it?",
                            answer: "Yes. Unlike radiators, ThermaSkirt is designed to have furniture placed directly against it. Sofas, beds, and wardrobes can sit flush against the wall without blocking the heating or causing any damage."
                        }
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore Other Products"
                    description="Find the right ThermaSkirt product for your home."
                    tiles={otherProducts}
                />

                <CTABanner
                    heading="Ready to see ThermaSkirt in your home?"
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
