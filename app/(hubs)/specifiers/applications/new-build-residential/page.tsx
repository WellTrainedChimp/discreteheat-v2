import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'New Build Residential Heating | Specifiers',
    description: 'Future Homes Standard compliant heating for residential developers. Speed up site programme by replacing 450+ radiator SKUs with 2 ThermaSkirt profiles.',
    alternates: {
        canonical: 'https://www.discreteheat.com/specifiers/applications/new-build-residential/',
    },
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=5ab1cb76-1c03-4972-8e09-f4c860af75a2', width: 1200, height: 630, alt: 'New Build Residential Heating | Specifiers' }],
    },
};

const otherSectors = [
    { title: 'Healthcare', description: 'Infection control, anti-ligature, low surface temperature. NHS-validated.', href: '/specifiers/applications/healthcare' },
    { title: 'Social & Landlord Housing', description: 'PAS 2035 compliant. SHDF-ready. Occupied retrofit disruption reduction.', href: '/specifiers/applications/social-housing' },
    { title: 'Education & Student Accommodation', description: 'Safe surface temperatures, anti-tamper, and space-efficient.', href: '/specifiers/applications/education-and-student-accommodation' },
    { title: 'Listed Buildings', description: 'Heritage-sensitive profile. Preserves architectural proportions.', href: '/specifiers/applications/listed-buildings' },
];

export default function NewBuildResidentialPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Residential New Build"
                    title="Faster completion."
                    titleHighlight="Future Homes Standard."
                    description="Developers nationwide are adopting ThermaSkirt to meet Part L and Future Homes Standard regulations without sacrificing valuable floor space to oversized heat pump radiators."
                    primaryCta={{ text: "Speak to Spec Team", href: "/about/contact" }}
                    imageSrc="https://www.discreteheat.com/MediaHandler.ashx?id=5ab1cb76-1c03-4972-8e09-f4c860af75a2"
                    imageAlt="ThermaSkirt BM2 profile installed cleanly in a modern new build property"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-5xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Meeting Next-Generation Standards</h2>
                            <p className="text-xl font-light text-dh-dark mb-6 leading-relaxed">
                                Under the Future Homes Standard (FHS), properties need to be heated using low carbon technologies, inherently driving flow temperatures down to 35–45°C. For national housebuilders, this presents a significant challenge: standard radiators must vastly increase in size, stealing saleable floor space.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                ThermaSkirt replaces the standard timber skirting and the radiator simultaneously. Because it acts as both your heating emitter and your primary room skirting, it distributes low-flow heat across the perimeter of the room. It frees up critical wall real estate and achieves an equivalent SAP improvement to installing 1 kWp of solar PV at a fraction of the hardware cost.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Site Programme Efficiency</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Streamlining National Operations</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Ordering, receiving, handling, and storing traditional radiators is a logistical nightmare for large sites. A typical mid-sized site will juggle over 450 different SKU variations matching specific heat losses.
                            </p>
                            <div className="p-6 bg-dh-grey-light rounded-2xl border border-dh-grey-light/50 my-8">
                                <h4 className="text-lg font-semibold text-dh-dark mb-2">Technical Note: 2 SKUs Replace 450</h4>
                                <p className="text-dh-grey text-sm mb-4">
                                    ThermaSkirt consolidates this into just 2 SKUs—our BM2 (114mm) and BM3 (170mm) profiles cut-to-fit on-site. There are no screed delays (like UFH), and it removes the entire second-fix plumber visit because skirting and heating are installed simultaneously. Full SAP data integration and NBS specifications are provided in the specifiers pack.
                                </p>
                                <a href="/specifiers/specification-support/design-service" className="text-dh-red font-semibold hover:underline text-sm">Download Specifier Pack &rarr;</a>
                            </div>
                        </article>

                    </div>
                </section>

                <FAQText
                    faqs={[
                        {
                            question: "Does it delay second fix?",
                            answer: "No, it actually accelerates it. ThermaSkirt combines the second-fix plumbing (radiator hanging) and second-fix joinery (skirting board fixing) into a single, rapid operation."
                        },
                        {
                            question: "How does it affect my SAP score?",
                            answer: "ThermaSkirt operates identically to an underfloor heating system regarding radiant footprint, allowing you to use low flow temperatures (35-45C). This provides a measurable SAP uplift, easing Part L compliance without relying purely on thicker insulation or solar PV."
                        }
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore Other Applications"
                    description="Discover how ThermaSkirt performs across diverse building types."
                    tiles={otherSectors}
                />

                <CTABanner
                    heading="Building a Specification?"
                    description="Our project team works directly with M&E consultants and housebuilders. Get full heat loss scheduling, Part L documentation support, and a dedicated account manager."
                    primaryCTA="Speak to Spec Team"
                    primaryCTALink="/about/contact"
                    secondaryCTA="Download Specifier Pack"
                    secondaryCTALink="/specifiers/specification-support/design-service"
                />
            </main>
        </>
    );
}
