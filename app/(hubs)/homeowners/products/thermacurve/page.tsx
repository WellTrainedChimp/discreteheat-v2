import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'ThermaCurve | Curved Skirting Board Heating',
    description: 'Bespoke curved heating sections that follow bay windows and architectural features. Maintain a continuous heating envelope without breaking the design line.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/products/thermacurve/',
    }
};

const otherProducts = [
    { title: 'ThermaSkirt H2O', description: 'Water-based heating for boilers and heat pumps.', href: '/homeowners/products/thermaskirt-h2o' },
    { title: 'ThermaSkirt e', description: 'The electric alternative — no pipework required.', href: '/homeowners/products/thermaskirt-e' },
    { title: 'EasyClean', description: 'Smooth, wipe-clean profile for hygiene-sensitive spaces.', href: '/homeowners/products/easyclean' },
];

export default function HomeownerThermaCurvePage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Architectural Curves"
                    title="Follows the curves"
                    titleHighlight="of your home."
                    description="Bay windows, curved walls, and architectural features deserve heating that follows their shape. ThermaCurve is a bespoke radiused section that maintains a continuous heating line around even the most complex room layouts."
                    primaryCta={{ text: "Get a Free Quote", href: "/homeowners/get-a-quote" }}
                    imageSrc="/assets/images/product-thermacurve.jpg"
                    imageAlt="ThermaCurve installed around a bay window, following the curve of the wall seamlessly"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">No More Cold Spots in Bay Windows</h2>
                            <p className="text-xl font-light text-dh-dark mb-6 leading-relaxed">
                                Bay windows are one of the coldest spots in any home. The large glass area loses heat rapidly, and a radiator crammed beneath the sill blocks the very space you want to enjoy. ThermaCurve solves this by wrapping continuous heating around the bay at skirting level.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                Each ThermaCurve section is manufactured to the exact radius of your bay window or curved wall. It connects seamlessly to the straight ThermaSkirt runs on either side, maintaining a clean, uninterrupted design line and a complete thermal envelope around the room.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Bespoke Manufacturing</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Made to Measure for Your Home</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Every ThermaCurve is manufactured to order based on the measurements of your specific bay window or curved wall. Our design team works from your dimensions to produce a section that fits precisely, with no gaps and no compromises.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Complete Coverage</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">A Continuous Thermal Envelope</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Without ThermaCurve, bay windows create a break in the heating line — exactly where you need warmth the most. By maintaining continuous perimeter heating, ThermaCurve eliminates cold drafts at the glass and keeps the entire room evenly warm.
                            </p>
                        </article>
                    </div>
                </section>

                <FAQText
                    faqs={[
                        {
                            question: "How do you know what radius to make it?",
                            answer: "When you order, our team will guide you through taking a simple measurement of your bay window or curved wall. We manufacture the ThermaCurve section to that exact radius so it fits precisely."
                        },
                        {
                            question: "Does it work with both H2O and electric systems?",
                            answer: "ThermaCurve is available as an electric radiant section. For water-based systems, curved bays are typically served by short straight sections angled to follow the bay geometry."
                        },
                        {
                            question: "Can it be painted to match my skirting?",
                            answer: "Yes. ThermaCurve can be painted any colour to match your existing ThermaSkirt and room decor."
                        }
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore Other Products"
                    description="Find the right ThermaSkirt product for your home."
                    tiles={otherProducts}
                />

                <CTABanner
                    heading="Got a bay window or curved wall?"
                    description="Get a free, no-obligation quote including bespoke ThermaCurve sections tailored to your room dimensions."
                    primaryCTA="Get a Free Quote"
                    primaryCTALink="/homeowners/get-a-quote"
                    secondaryCTA="Order a Free Sample"
                    secondaryCTALink="/homeowners/request-a-sample"
                />
            </main>
        </>
    );
}
