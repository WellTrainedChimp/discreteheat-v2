import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'SHDF Documentation & PAS 2035 Compliance | ThermaSkirt',
    description: 'Dedicated compliance packs and carbon reduction forecasting for Social Housing Decarbonisation Fund (SHDF) bids using ThermaSkirt.',
    alternates: {
        canonical: 'https://www.discreteheat.com/specifiers/specification-support/shdf-documentation/',
    }
};

const otherSupport = [
    { title: 'Specification Wording', description: 'Pre-written CAWS / Uniclass NBS clauses and tender criteria.', href: '/specifiers/specification-support/specification-wording' },
    { title: 'M&E Design Service', description: 'Free room-by-room heat loss schedules and marked-up DWG floorplans.', href: '/specifiers/specification-support/design-service' },
    { title: 'Framework Access', description: 'Sourcing through pre-qualified public sector procurement frameworks.', href: '/specifiers/specification-support/framework-access' },
];

export default function SHDFDocumentationPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Public Sector Bidding"
                    title="SHDF & PAS 2035"
                    titleHighlight="Compliance Packs."
                    description="Secure your Social Housing Decarbonisation Fund (SHDF) bids with robust, independent evidence proving ThermaSkirt\'s ability to deliver low-carbon heat without devastating tenant disruption."
                    primaryCta={{ text: "Download SHDF Toolkit", href: "/specifiers/specification-support/design-service" }}
                    imageSrc="/assets/images/technical-shdf.jpg"
                    imageAlt="A social housing estate undergoing a fabric-first SHDF retrofit"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-5xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">The Evidence Requirement</h2>
                            <p className="text-xl font-light text-dh-dark mb-6 leading-relaxed">
                                Winning SHDF funding requires demonstrating a clear, financially viable pathway to EPC Band C (or higher) using a fabric-first approach integrated with low-carbon heating, managed under the PAS 2035 framework.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                When proposing Heat Pumps for social housing, the inevitable problem of emitter sizing arises. Oversized radiators consume tenant space and trigger costly second-fix re-decorations. Underfloor heating requires decanting residents. ThermaSkirt provides the perfect &apos;sweet spot&apos; for SHDF proposals: maximum low-temperature heat distribution with zero void periods or displacement. Our compliance packs provide the rigorous evidence required by grant assessors to validate this approach.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">The Toolkit Contents</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Tailored Assessor Documentation</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                We provide Retrofit Coordinators and bidding constortiums with a comprehensive, bespoke documentation package to append securely to your local authority submissions.
                            </p>
                            <div className="p-6 bg-dh-grey-light rounded-2xl border border-dh-grey-light/50 my-8">
                                <h4 className="text-lg font-semibold text-dh-dark mb-4">Included in the SHDF Support Pack:</h4>
                                <ul className="space-y-4 text-dh-grey text-sm mb-4 list-disc pl-5">
                                    <li><strong>Independent SAP Equivalency:</strong> Certificates detailing the SPF improvement of running heat pumps at 40°C on ThermaSkirt vs 50°C on standard panels.</li>
                                    <li><strong>Resident Disruption Analysis:</strong> Time-and-motion studies proving 2-day install times in occupied properties, mitigating temporary accommodation costs from your bid.</li>
                                    <li><strong>Moisture & Mould (Awaab\&apos;s Law):</strong> Documentation outlining how perimeter baseline heating actively combats the cold-bridging condensation common in solid-wall social housing.</li>
                                    <li><strong>Lifecycle Impact Data:</strong> 75% recycled aluminium embodied carbon stats to satisfy strict ESG criteria in public procurement scoring.</li>
                                </ul>
                                <a href="/specifiers/specification-support/design-service" className="text-dh-red font-semibold hover:underline text-sm">Request a Customised Bid Pack &rarr;</a>
                            </div>
                        </article>

                    </div>
                </section>

                <FAQText
                    faqs={[
                        {
                            question: "Can you provide references from existing SHDF projects?",
                            answer: "Yes. ThermaSkirt has been successfully deployed across multiple high-profile SHDF waves with major UK Registered Providers and Tier 1 contractors. We can supply detailed case studies and compliance sign-offs upon request."
                        },
                        {
                            question: "Are your outputs certified for input into RdSAP?",
                            answer: "Absolutely. Our outputs are fully verified to BS EN 442-1 standard by BSRIA, providing unquestionable data for your Energy Assessor to input directly into their RdSAP / full SAP models to prove the uplift to EPC C."
                        }
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore Further Support"
                    description="Discover our free design services and documentation."
                    tiles={otherSupport}
                />

                <CTABanner
                    heading="Assembling a consortium bid?"
                    description="Bring our technical team into your pre-construction meetings. We frequently partner with principal contractors to solidify the heating strategy of SHDF proposals."
                    primaryCTA="Request Bid Consultation"
                    primaryCTALink="/about/contact"
                    secondaryCTA="Download SHDF Pack"
                    secondaryCTALink="/specifiers/specification-support/design-service"
                />
            </main>
        </>
    );
}
