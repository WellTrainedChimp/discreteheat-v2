import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'BSRIA Test Results | Technical Data | ThermaSkirt',
    description: 'Independent structural and thermal testing by BSRIA to BS EN 442-1 standards, validating heat output and pressure resistance of ThermaSkirt profiles.',
    alternates: {
        canonical: 'https://www.discreteheat.com/specifiers/technical-data/bsria-test-results/',
    }
};

const otherData = [
    { title: 'Energy House 2.0 Report', description: 'University of Salford testing on energy efficiency vs radiators.', href: '/specifiers/technical-data/energy-house-2-report' },
    { title: 'Output Tables', description: 'Comprehensive Watts/Meter outputs across all profiles.', href: '/specifiers/technical-data/output-tables' },
    { title: 'Heat Loss Methodology', description: 'Guide to measuring perimeter compensation against DIN EN 12831.', href: '/specifiers/technical-data/heat-loss-methodology' },
];

export default function BSRIAReportPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Independent Validation"
                    title="BSRIA EN 442-1"
                    titleHighlight="Testing."
                    description="The Building Services Research and Information Association (BSRIA) has comprehensively tested ThermaSkirt profiles to certify their thermal output and structural integrity."
                    primaryCta={{ text: "Download Specifier Pack", href: "/specifiers/specification-support/design-service" }}
                    imageSrc="/assets/images/technical-bsria.jpg"
                    imageAlt="ThermaSkirt being tested in a controlled BSRIA thermal laboratory environment"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-5xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Thermal Output Validation</h2>
                            <p className="text-xl font-light text-dh-dark mb-6 leading-relaxed">
                                Under BS EN 442-1 (the European standard for radiators and convectors), all emitters must be tested in a standardized environmental chamber to guarantee the manufacturer\'s claimed Watts/Metre outputs.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                ThermaSkirt BM2 and BM3 profiles have undergone rigorous BSRIA testing at both high flow temperatures (dT50) typical of gas boilers, and low flow temperatures (dT20) typical of heat pumps. These verified figures form the basis of our output tables and SAP calculation inputs, giving specifying engineers absolute confidence in the system\'s capability to meet calculated heat losses.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Structural Integrity</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Pressure and Lifecycle Testing</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Beyond thermal output, emitters must prove they will not fail catastrophically under mains pressure or continuous thermal expansion and contraction over decades of use.
                            </p>
                            <div className="p-6 bg-dh-grey-light rounded-2xl border border-dh-grey-light/50 my-8">
                                <h4 className="text-lg font-semibold text-dh-dark mb-2">Technical Note: Destructive Pressure Thresholds</h4>
                                <p className="text-dh-grey text-sm mb-4">
                                    BSRIA validated the extruded aluminium profiles and their proprietary push-fit/compression manifolds to withstand sustained pressures significantly beyond standard 1.5-3.0 bar domestic systems, safely passing destructive cyclic pressure tests. Full test certificates and dimensional tolerances are provided in the specifiers pack.
                                </p>
                                <a href="/specifiers/specification-support/design-service" className="text-dh-red font-semibold hover:underline text-sm">Download Full BSRIA Reports &rarr;</a>
                            </div>
                        </article>

                    </div>
                </section>

                <FAQText
                    faqs={[
                        {
                            question: "Are your outputs CE / UKCA marked based on this?",
                            answer: "Yes. The BSRIA independent testing forms the foundational technical file required for our CE and UKCA compliance marking as a verified heat emitter."
                        },
                        {
                            question: "Does the test data import into thermal modeling software?",
                            answer: "Yes, the resulting n-coefficients and continuous output curves can be inputted exactly like a radiator into major modelling tools like IES, TAS, or basic SAP calculation software."
                        }
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore Further Documentation"
                    description="Access more independent testing data and output charts."
                    tiles={otherData}
                />

                <CTABanner
                    heading="Require performance certificates for sign-off?"
                    description="Contact our specification team for un-redacted copies of the BSRIA test certificates to include in your project O&M manuals or compliance packs."
                    primaryCTA="Download Specifier Pack"
                    primaryCTALink="/specifiers/specification-support/design-service"
                    secondaryCTA="Speak to Spec Team"
                    secondaryCTALink="/about/contact"
                />
            </main>
        </>
    );
}
