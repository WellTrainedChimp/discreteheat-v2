import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Part L Compliance & SAP | ThermaSkirt',
    description: 'Technical guidance for M&E engineers on modelling ThermaSkirt for Document L building regulation compliance and SAP calculations.',
    alternates: {
        canonical: 'https://www.discreteheat.com/specifiers/technical-data/part-l-compliance/',
    }
};

const otherData = [
    { title: 'Environmental Data', description: 'Recycled aluminium content, embodied carbon estimates.', href: '/specifiers/technical-data/environmental-data' },
    { title: 'PAS 2035 & 2030', description: 'Compliance guidance for whole-house retrofit and SHDF funding.', href: '/specifiers/technical-data/pas-2035-pas-2030' },
    { title: 'Future Homes Standard', description: 'Meeting the 2025 carbon reduction targets with low-flow emitters.', href: '/specifiers/technical-data/future-homes-standard' },
];

export default function PartLCompliancePage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Building Regulations"
                    title="Document L and"
                    titleHighlight="SAP calculations."
                    description="Meeting Part L of the Building Regulations consistently requires offsetting thermal transmission with highly efficient technology. ThermaSkirt offers a mechanical CoP lever within the SAP environment."
                    primaryCta={{ text: "Download Specifier Pack", href: "/specifiers/specification-support/design-service" }}
                    imageSrc="/assets/images/technical-part-l.jpg"
                    imageAlt="A thermal performance graph overlaid on a blueprint of a modern residential property"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-5xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">The SAP Calculation Battle</h2>
                            <p className="text-xl font-light text-dh-dark mb-6 leading-relaxed">
                                Under the latest revisions of Approved Document L, achieving compliance on the Standard Assessment Procedure (SAP) relies heavily on deploying the lowest possible flow temperature from the primary generator.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                Energy assessors are frequently forced back to the architectural drawing board: &quot;We need thicker cavity walls&quot;, or &quot;You must double the solar PV array&quot;. These interventions are massively expensive. An alternative lever within the SAP software is to specify a high-efficiency continuous radiant emitter operating at severe low temperatures (typically a 35°C—40°C flow), instantly improving the heat pump\&apos;s SPF (Seasonal Performance Factor).
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">ThermaSkirt vs Solar PV</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Cost-Effective Compliance</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                The BSRIA-certified thermal response profile of ThermaSkirt means it models very similarly to an Underfloor Heating (UFH) system.
                            </p>
                            <div className="p-6 bg-dh-grey-light rounded-2xl border border-dh-grey-light/50 my-8">
                                <h4 className="text-lg font-semibold text-dh-dark mb-2">Technical Note: Equivalent SAP Uplift</h4>
                                <p className="text-dh-grey text-sm mb-4">
                                    Independent modelling demonstrates that upgrading from standard, moderately-sized heat pump radiators (forcing a 50°C/55°C flow) to ThermaSkirt operating at a purely radiant 35°C/40°C flow, generates a SAP score uplift roughly equivalent to installing 1 kWp of roof-mounted Solar PV. Given that ThermaSkirt consolidates the plumbing and skirting operations into a single trade, this offset is achieved at a fraction of the capital cost of the corresponding solar array. The full independent SAP comparison matrix is available in the specifiers pack.
                                </p>
                                <a href="/specifiers/specification-support/design-service" className="text-dh-red font-semibold hover:underline text-sm">Download Part L Data & SAP Justifications &rarr;</a>
                            </div>
                        </article>

                    </div>
                </section>

                <FAQText
                    faqs={[
                        {
                            question: "Is ThermaSkirt listed statically in SAP software menus?",
                            answer: "Currently, energy assessors input ThermaSkirt manually based on its verified BSRIA output data, selecting low-parameter radiant characteristics. However, comprehensive guidance notes for standard input sequences in major SAP engines are provided."
                        },
                        {
                            question: "Does it help achieve EPC 'A' ratings on retrofits?",
                            answer: "Yes, exactly the same principle applies via the RdSAP or full SAP module on deep retrofits: enabling the lowest possible heat pump flow temperature maximizes the EPC output."
                        }
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore Further Documentation"
                    description="Access more independent testing data and output charts."
                    tiles={otherData}
                />

                <CTABanner
                    heading="Failing Part L via the 'fabric' route?"
                    description="Talk to our engineers and energy assessors. We can rapidly re-model your project utilizing an optimized ThermaSkirt and ASHP combination to pass compliance."
                    primaryCTA="Request Compliance Modleing"
                    primaryCTALink="/specifiers/specification-support/design-service"
                    secondaryCTA="Speak to Spec Team"
                    secondaryCTALink="/about/contact"
                />
            </main>
        </>
    );
}
