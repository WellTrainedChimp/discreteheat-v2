import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Future Homes Standard 2025 Compliance | ThermaSkirt',
    description: 'Guidance on designing and specifying ThermaSkirt to meet the incoming Future Homes Standard (FHS) 2025 for new build properties.',
    alternates: {
        canonical: 'https://www.discreteheat.com/specifiers/technical-data/future-homes-standard/',
    },
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=b889d081-eb6a-4970-a031-6a31c08dc8ae', width: 1200, height: 630, alt: 'Future Homes Standard 2025 Compliance | ThermaSkirt' }],
    },
};

const otherData = [
    { title: 'Environmental Data', description: 'Recycled aluminium content, embodied carbon estimates.', href: '/specifiers/technical-data/environmental-data' },
    { title: 'PAS 2035 & 2030', description: 'Compliance guidance for whole-house retrofit and SHDF funding.', href: '/specifiers/technical-data/pas-2035-pas-2030' },
    { title: 'Part L Compliance', description: 'Document L SAP calculations and system performance data.', href: '/specifiers/technical-data/part-l-compliance' },
];

export default function FutureHomesStandardPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="New Build Regulations"
                    title="Future Homes Standard"
                    titleHighlight="(FHS) 2025."
                    description="Transitioning the UK\'s new build sector to low-carbon heating demands an evolution in heat emitter specification. ThermaSkirt fundamentally accelerates FHS compliance on site."
                    primaryCta={{ text: "Download Specifier Pack", href: "/specifiers/specification-support/design-service" }}
                    imageSrc="https://www.discreteheat.com/MediaHandler.ashx?id=b889d081-eb6a-4970-a031-6a31c08dc8ae"
                    imageAlt="A newly constructed residential development built to the Future Homes Standard 2025 methodology"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-5xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">The 2025 Challenge</h2>
                            <p className="text-xl font-light text-dh-dark mb-6 leading-relaxed">
                                Under the Future Homes Standard 2025 (FHS), homes built in the UK will be &apos;zero-carbon ready&apos; — meaning no new gas network connections and an exclusive reliance on low-carbon technology like Air Source Heat Pumps (ASHPs).
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                Because heat pumps are only efficient at low flow temperatures (typically 35–45°C), the required surface area for heating emitters scales dramatically. Implementing standard steel radiators across an entire modern housing estate to meet FHS yields massive, visually oppressive panels consuming critical saleable floor space. Conversely, installing Underfloor Heating (UFH) delays screeding, forces complex construction phasing, and prevents M&E and joiners from advancing efficiently.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Site Programme Efficiency</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Consolidated Second-Fix Operations</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                ThermaSkirt solves the FHS emitter bottleneck mechanically and logistically. Radiators demand over 400 different SKU variations across an estate to match exact room heat-losses. ThermaSkirt acts as a unified extrusion, consolidated into two core SKUs (the BM2 and BM3 profiles) simply cut-to-length on site.
                            </p>
                            <div className="p-6 bg-dh-grey-light rounded-2xl border border-dh-grey-light/50 my-8">
                                <h4 className="text-lg font-semibold text-dh-dark mb-2">Technical Note: Combining Trades</h4>
                                <p className="text-dh-grey text-sm mb-4">
                                    A singular, massive advantage of specifying ThermaSkirt for FHS is workflow consolidation. It combines the second-fix plumbing (hanging radiators) and the second-fix joinery (fitting timber skirting) into one seamless, rapid operation. It distributes vast radiant area operating effectively at 45°C without stealing a single square foot of room footprint. Full FHS design schematics and logistical studies are available in the specifiers pack.
                                </p>
                                <a href="/specifiers/specification-support/design-service" className="text-dh-red font-semibold hover:underline text-sm">Download FHS Integration Reports &rarr;</a>
                            </div>
                        </article>

                    </div>
                </section>

                <FAQText
                    faqs={[
                        {
                            question: "Does it help achieve the 75-80% carbon reduction required by FHS?",
                            answer: "Yes. By operating efficiently at the ultra-low 35-45°C flow temperatures required by the heat pump, ThermaSkirt maximizes the unit's Coefficient of Performance (CoP), directly aiding the compliance calculation."
                        },
                        {
                            question: "Can I use it on upper floors with UFH downstairs?",
                            answer: "Absolutely. Designing FHS homes with UFH in the ground-floor screed and ThermaSkirt on the first floor is an increasingly popular hybrid model, avoiding acoustic and structural complications created by first-floor radiant screed or spreader plates."
                        }
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore Further Documentation"
                    description="Access more independent testing data and output charts."
                    tiles={otherData}
                />

                <CTABanner
                    heading="Planning an FHS 2025 Housing Estate?"
                    description="Speak to our dedicated national housebuilder development team for supply chain, site staging, and volume procurement integration planning."
                    primaryCTA="Request Developer Support"
                    primaryCTALink="/specifiers/specification-support/design-service"
                    secondaryCTA="Speak to Spec Team"
                    secondaryCTALink="/about/contact"
                />
            </main>
        </>
    );
}
