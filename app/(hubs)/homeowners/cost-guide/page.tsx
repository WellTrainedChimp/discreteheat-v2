import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'How Much Does Skirting Board Heating Cost? | Price Guide',
    description: 'A comprehensive guide to ThermaSkirt costs, including hardware prices, installation labor, and running cost comparisons against underfloor heating and radiators.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/cost-guide/',
    }
};

export default function CostGuidePage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Pricing Guide"
                    title="Transparent costing,"
                    titleHighlight="exceptional value."
                    description="Understanding the true cost of a new heating system means looking beyond the hardware. You must factor in installation time, disruption, and long-term running costs. ThermaSkirt offers premium radiant heating at a fraction of the fully installed cost of underfloor heating."
                    primaryCta={{ text: "Get an Exact Quote", href: "/homeowners/get-a-quote" }}
                    imageSrc="/assets/images/homeowner-cost-guide.jpg"
                    imageAlt="A homeowner reviewing architectural plans for a ThermaSkirt installation"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">The True Cost of Skirting Board Heating</h2>
                            <p className="text-xl font-light text-dh-dark mb-12 leading-relaxed">
                                Budgeting for ThermaSkirt requires assessing three core elements: the physical material kit, the plumbing labour to install it, and the long-term energy savings. Because every home has different dimensions, heat losses, and boiler configurations, providing a single blanket price is impossible. However, we can provide highly accurate comparative frameworks.
                            </p>

                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">1. The Material Kit Cost</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                ThermaSkirt is a premium, beautifully engineered architectural product that combines both high-performance heating and high-quality room finishings (the skirting boards) into a single profile.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                A standard 4m x 4m (16sqm) Living Room typically requires 12 linear metres of ThermaSkirt to achieve its required heat output (accounting for doors and fireplaces). The complete hardware kit—including the aerospace-grade aluminium extrusions, specific corner joints, mounting brackets, central heating flow/return valves, and bespoke connection covers—usually ranges between <strong>£600 and £850 inc VAT</strong> for that room, depending on the exact profile (e.g., Deco vs Urban) and finish.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                While this is more expensive than buying two basic steel panel radiators (£200) and cheap MDF skirting boards (£100), it is substantially cheaper than the raw materials required for a premium wet underfloor heating manifold and overlay board system for the same space.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Labour & Disruption</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">2. Installation Economics</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Where ThermaSkirt truly proves its financial value is during installation. Retrofitting wet underfloor heating into that same 4x4m Living Room requires digging up the concrete floor or laying overlay boards. This raises the floor height, forcing carpenters to remove every door to plane down the bottoms. The installation takes days, involves multiple trades (plumbers, floor layers, carpenters), and renders the room unusable.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                ThermaSkirt installs entirely above ground. A competent plumber simply removes the old radiators, connects the ThermaSkirt to the existing 15mm copper pipes, and mounts the profile to the wall. The entire 4x4m room can be fully installed, pressure tested, and heating beautifully in a single day by one person. The massive savings in disruptive labour costs almost always make ThermaSkirt cheaper fully-installed than underfloor heating.
                            </p>
                        </article>

                        <div className="bg-dh-grey-light p-8 rounded-xl my-16">
                            <h3 className="text-2xl font-semibold text-dh-dark mb-6">Estimated Fully Fitted Costs vs Alternatives</h3>
                            <p className="text-dh-grey mb-6">
                                *Example scenario based on national average installer day rates retrofitting a standard 4m x 4m domestic living room on a suspended timber floor.*
                            </p>
                            <ul className="space-y-4">
                                <li className="flex justify-between items-center pb-4 border-b border-dh-grey">
                                    <span className="text-lg font-medium text-dh-dark">Basic Steel Radiators + MDF Skirting</span>
                                    <span className="text-lg text-dh-grey">£700 - £1,100</span>
                                </li>
                                <li className="flex justify-between items-center pb-4 border-b border-dh-grey">
                                    <span className="text-lg font-semibold text-dh-red">ThermaSkirt (Materials + 1 Day Labor)</span>
                                    <span className="text-lg font-bold text-dh-red">£1,200 - £1,800</span>
                                </li>
                                <li className="flex justify-between items-center pt-2">
                                    <span className="text-lg font-medium text-dh-dark">Wet Underfloor Heating (Overlay System)</span>
                                    <span className="text-lg text-dh-grey">£2,500 - £4,000+</span>
                                </li>
                            </ul>
                        </div>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Long Term Value</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">3. Running Costs and Payback</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Because ThermaSkirt is an incredibly efficient radiant heat emitter, it saves you money every time your boiler or heat pump turns on. Heating engineers confirm that radiant heat feels comfortable to human skin at air temperatures 1°C or 2°C lower than convection (radiator) heat.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                Furthermore, because it distributes heat evenly at the lowest point in the room, it eliminates the wasted energy trapped at the ceiling by standard radiators. By lowering your thermostat by just 1°C, and dropping the flow temperatures on your condensing boiler from 75°C to 60°C, a ThermaSkirt system can reduce annual heating bills by up to 13%, effectively paying for its own premium over its lifespan.
                            </p>
                        </article>
                    </div>
                </section>

                <FAQText
                    faqs={[
                        {
                            question: "How do I get an exact price for my house?",
                            answer: "The easiest way is to use our Free Quote service. Upload a rough sketch or structural floor plan of your rooms, including wall lengths and window positions. Our engineers will calculate the required heat loss, plot the exact profiles and corners needed, and email you a precise, itemized parts manifest within 48 hours."
                        },
                        {
                            question: "Is the Electric version cheaper than the Wet (H2O) version?",
                            answer: "The material cost for ThermaSkirt E (Electric) is broadly similar per metre. However, the installation cost is frequently lower, as wiring a fused spur is often faster and less intrusive than running new central heating pipework across a home."
                        },
                        {
                            question: "Do you offer supply-and-fit packages?",
                            answer: "DiscreteHeat primarily manufactures and supplies the kits directly to homeowners or the trade. We do not employ in-house fitters, but we maintain a vast national network of Registered Installers whom we can introduce you to for the labor portion of the quote."
                        }
                    ]}
                />

                <CTABanner
                    heading="Stop guessing. Get an exact price."
                    description="Upload your floor plans today. Our engineers will provide a free, no-obligation itemised manifest."
                    primaryCTA="Get a Free Quote"
                    primaryCTALink="/homeowners/get-a-quote"
                    secondaryCTA="Find an Installer"
                    secondaryCTALink="/homeowners/find-an-installer"
                />
            </main>
        </>
    );
}
