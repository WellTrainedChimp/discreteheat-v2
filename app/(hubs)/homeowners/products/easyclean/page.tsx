import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'EasyClean Heating | Safe, Hygienic Skirting Board Heating',
    description: 'EasyClean skirting board heating — a smooth, sealed, wipe-clean heating profile. Safe surfaces, no dust traps, and no exposed hot metal. Ideal for families and care settings.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/products/easyclean/',
    }
};

const otherProducts = [
    { title: 'ThermaSkirt H2O', description: 'Water-based heating for boilers and heat pumps.', href: '/homeowners/products/thermaskirt-h2o' },
    { title: 'ThermaSkirt e', description: 'The electric alternative — no pipework required.', href: '/homeowners/products/thermaskirt-e' },
    { title: 'ThermaCurve', description: 'Curved sections for bay windows and architectural features.', href: '/homeowners/products/thermacurve' },
];

export default function HomeownerEasyCleanPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Safe & Hygienic"
                    title="Clean surfaces,"
                    titleHighlight="safe warmth."
                    description="EasyClean is a smooth, sealed heating profile with no grilles, no fins, and no exposed hot metal. It wipes clean in seconds and maintains a safe surface temperature — ideal for homes with young children, elderly relatives, or anyone who values hygiene."
                    primaryCta={{ text: "Get a Free Quote", href: "/homeowners/get-a-quote" }}
                    imageSrc="/assets/images/product-easyclean.jpg"
                    imageAlt="EasyClean profile installed flush to the floor, showing the smooth wipe-clean surface"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Heating You Can Actually Keep Clean</h2>
                            <p className="text-xl font-light text-dh-dark mb-6 leading-relaxed">
                                Traditional radiators trap dust, pet hair, and allergens deep inside metal fins that are almost impossible to clean properly. Over time, convection currents blast this debris around the room and leave black staining on the wall above.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                EasyClean replaces all of that with a single smooth aluminium surface that sits flush to the floor and wall. There are no gaps, no grilles, and nowhere for dust to hide. You can wipe the entire heating system down with a damp cloth in seconds — the same way you clean a worktop.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Low Surface Temperature</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Safe for Children and Vulnerable People</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                EasyClean is designed to operate at low surface temperatures, making it safe to touch at all times. There are no sharp edges, no hot spots, and no parts that can be pulled off or tampered with. It is trusted by NHS hospitals and care homes across the UK.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Allergy Friendly</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Better for Asthma and Allergy Sufferers</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Because EasyClean radiates heat gently rather than creating aggressive convection currents, it does not continuously fling dust and allergens around the room. If you or your family suffer from asthma, eczema, or dust allergies, removing traditional radiators and replacing them with EasyClean can make a noticeable difference.
                            </p>
                        </article>
                    </div>
                </section>

                <FAQText
                    faqs={[
                        {
                            question: "Is EasyClean only for hospitals?",
                            answer: "No. While EasyClean was originally developed for NHS environments, it is increasingly popular in family homes — especially those with young children, pets, or allergy sufferers who want a heating system they can keep genuinely clean."
                        },
                        {
                            question: "Can children touch it safely?",
                            answer: "Yes. EasyClean operates at low surface temperatures and has no sharp edges or removable parts. It is specifically designed to meet safety standards for environments with vulnerable people."
                        },
                        {
                            question: "Does it work with a heat pump?",
                            answer: "Yes. Like all ThermaSkirt products, EasyClean is designed to work effectively at the low flow temperatures typical of heat pump systems."
                        }
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore Other Products"
                    description="Find the right ThermaSkirt product for your home."
                    tiles={otherProducts}
                />

                <CTABanner
                    heading="Want heating you can actually keep clean?"
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
