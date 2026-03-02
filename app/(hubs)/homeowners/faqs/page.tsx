import SubHubHero from '@/components/server/SubHubHero';
import CTABanner from '@/components/blocks/CTABanner';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Frequently Asked Questions | ThermaSkirt Heating',
    description: 'Everything you need to know about skirting board heating. Answers regarding heat output, furniture placement, flooring installation, and system compatibility.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/faqs/',
    }
};

export default function FAQsPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Knowledge Base"
                    title="Your questions,"
                    titleHighlight="answered."
                    description="Replacing traditional radiators with skirting board heating represents a fundamental shift in how your home operates. It's natural to have technical questions about heat output, installation sequencing, and furniture placement. Find your answers below."
                    primaryCta={{ text: "Get an Itemised Quote", href: "/homeowners/get-a-quote" }}
                    imageSrc="/assets/images/homeowner-faqs.jpg"
                    imageAlt="A homeowner reading a ThermaSkirt technical brochure"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-light text-dh-dark mb-12 tracking-tight block border-b border-dh-grey-light pb-4">Performance & Heat Output</h2>

                        <dl className="space-y-8 mb-16">
                            <div>
                                <dt className="text-xl font-medium text-dh-dark mb-3">Does it actually give out enough heat?</dt>
                                <dd className="text-lg text-dh-grey leading-relaxed">
                                    Yes. This is the most common question we receive. Because ThermaSkirt replaces the skirting board around the entire perimeter of your room, the total surface area of the aluminium is often significantly larger than the steel surface area of the single radiator it replaced. By distributing that heat across 12 to 15 linear metres, it effortlessly achieves the same total kW output as a massive Type 22 radiator, verified by independent BSRIA testing.
                                </dd>
                            </div>
                            <div>
                                <dt className="text-xl font-medium text-dh-dark mb-3">Can I put furniture against it?</dt>
                                <dd className="text-lg text-dh-grey leading-relaxed">
                                    Yes. Because ThermaSkirt is a primary radiant heat emitter (rather than a convector like a normal radiator), you can place sofas, beds, and cabinets directly in front of it. Radiant heat passes perfectly through the air and warms the furniture and the room. You no longer have to dictate your room layout based on where the heating is.
                                </dd>
                            </div>
                            <div>
                                <dt className="text-xl font-medium text-dh-dark mb-3">Will it damage my wooden floors or carpets?</dt>
                                <dd className="text-lg text-dh-grey leading-relaxed">
                                    No. The heat is projected horizontally outwards into the room from the aluminium fascia, not downwards into the floor. It is perfectly safe to install ThermaSkirt directly above solid oak flooring, luxury vinyl tiles (Karndean/Amtico), and thick carpets without any risk of warping, shrinking, or heat damage.
                                </dd>
                            </div>
                        </dl>

                        <h2 className="text-3xl font-light text-dh-dark mb-12 tracking-tight block border-b border-dh-grey-light pb-4">Installation & Sequencing</h2>

                        <dl className="space-y-8 mb-16">
                            <div>
                                <dt className="text-xl font-medium text-dh-dark mb-3">Should I install the flooring or the ThermaSkirt first?</dt>
                                <dd className="text-lg text-dh-grey leading-relaxed">
                                    <strong>Hardwood / LVT / Laminate:</strong> The flooring must go down first. The ThermaSkirt is then installed on top of the finished floor. The skirting profile features a flexible silicone lip on the bottom edge that perfectly masks the expansion gap required by hard flooring, eliminating the need for ugly wooden beading.
                                    <br /><br />
                                    <strong>Carpet:</strong> The ThermaSkirt goes on the wall first. We advise setting it approximately 5mm off the floor boards. The carpet fitters then lay their grippers and tuck the carpet neatly underneath the ThermaSkirt profile, just as they would with a traditional timber skirting board.
                                </dd>
                            </div>
                            <div>
                                <dt className="text-xl font-medium text-dh-dark mb-3">Can I wire cables behind it?</dt>
                                <dd className="text-lg text-dh-grey leading-relaxed">
                                    Yes. Certain ThermaSkirt profiles (like the Deco and Urban lines) are designed with a dedicated, isolated cable channel running across the top boundary of the extrusion. This allows you to hide low-voltage audio cables, CAT6 ethernet data cables, or alarm wires completely invisibly, protected away from the hot water pipes below.
                                </dd>
                            </div>
                            <div>
                                <dt className="text-xl font-medium text-dh-dark mb-3">What happens at doorways?</dt>
                                <dd className="text-lg text-dh-grey leading-relaxed">
                                    When the skirting run reaches a doorway, the hot water must either be returned back the way it came (a &apos;return loop&apos;), or it must dive down beneath the floorboards, cross the threshold invisibly, and pop back up on the other side to continue the skirting run. Both methods are standard plumbing paths and are detailed extensively in our installation manuals.
                                </dd>
                            </div>
                        </dl>

                        <h2 className="text-3xl font-light text-dh-dark mb-12 tracking-tight block border-b border-dh-grey-light pb-4">Aesthetics & Decorating</h2>

                        <dl className="space-y-8 mb-16">
                            <div>
                                <dt className="text-xl font-medium text-dh-dark mb-3">Can it be painted?</dt>
                                <dd className="text-lg text-dh-grey leading-relaxed">
                                    Yes. ThermaSkirt is delivered from the factory in a highly durable, brilliant white epoxy powder-coated finish. However, if you wish to match a specific Farrow & Ball or heritage color, simply rub the factory finish down lightly with fine wire wool to create a &apos;key&apos;, and paint over it using any high-quality oil-based or water-based trim/satinwood paint.
                                </dd>
                            </div>
                            <div>
                                <dt className="text-xl font-medium text-dh-dark mb-3">Are the corners just plastic caps?</dt>
                                <dd className="text-lg text-dh-grey leading-relaxed">
                                    No. The external and internal corner joints are precision-molded from the exact same high-grade polymers used in automotive manufacturing. They are color-matched exactly to the aluminium extrusions and are designed to provide a seamless, robust architectural finish that will not turn yellow or brittle over time.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </section>

                <CTABanner
                    heading="Still have questions?"
                    description="Upload your floor plans. Our technical design team will review them and advise you."
                    primaryCTA="Get a Free Quote"
                    primaryCTALink="/homeowners/get-a-quote"
                    secondaryCTA="Find an Installer"
                    secondaryCTALink="/homeowners/find-an-installer"
                />
            </main>
        </>
    );
}
