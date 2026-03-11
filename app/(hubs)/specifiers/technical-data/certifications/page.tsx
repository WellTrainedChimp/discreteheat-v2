import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Certifications & Compliance | ThermaSkirt',
    description: 'Comprehensive overview of ThermaSkirt\'s CE / UKCA marking, BBA certifications, and NHS clinical compliance standards.',
    alternates: {
        canonical: 'https://www.discreteheat.com/specifiers/technical-data/certifications/',
    },
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=f283b198-65cc-43da-8ba3-c936fdcc94f1', width: 1200, height: 630, alt: 'Certifications & Compliance | ThermaSkirt' }],
    },
};

const otherData = [
    { title: 'Low Temperature Performance', description: 'Analysis of CoP advantages with heat pumps.', href: '/specifiers/technical-data/low-temperature-performance' },
    { title: 'Radiant Heat Science', description: 'Comparing radiant mean temperature against high-velocity convection.', href: '/specifiers/technical-data/radiant-heat-science' },
    { title: 'Water Treatment Protocol', description: 'System flushing and dosing requirements to BS 7593 for aluminium emitters.', href: '/specifiers/technical-data/water-treatment-protocol' },
];

export default function CertificationsPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Regulatory Compliance"
                    title="Accredited and"
                    titleHighlight="certified."
                    description="For large-scale specifications, the structural, thermal, and mechanical safety of an emitter must be unconditionally guaranteed. ThermaSkirt holds leading industry approvals across the UK and Europe."
                    primaryCta={{ text: "Request Compliance Pack", href: "/specifiers/specification-support/design-service" }}
                    imageSrc="https://www.discreteheat.com/MediaHandler.ashx?id=f283b198-65cc-43da-8ba3-c936fdcc94f1"
                    imageAlt="A close-up of the CE and UKCA marks on a ThermaSkirt packaging label"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-5xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Primary Accreditations</h2>
                            <p className="text-xl font-light text-dh-dark mb-6 leading-relaxed">
                                Our profiles are manufactured under strict ISO 9001 quality management procedures right here in the UK.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                ThermaSkirt is fully CE and UKCA marked in accordance with the Construction Products Regulation (CPR). Its thermal outputs, derived from independent BSRIA testing, fully comply with the BS EN 442-1 standard for radiators and convectors, ensuring exact design capability for M&E consultants.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Sector-Specific Standards</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Healthcare & Electrical Standards</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Depending on the specific application profile chosen, ThermaSkirt meets highly specialized industry protocols required for high-risk specification.
                            </p>
                            <div className="p-6 bg-dh-grey-light rounded-2xl border border-dh-grey-light/50 my-8">
                                <h4 className="text-lg font-semibold text-dh-dark mb-2">Technical Note: Clinical & Electrical Safety</h4>
                                <ul className="space-y-4 text-dh-grey text-sm mb-4 list-disc pl-5">
                                    <li><strong>NHS DHSS DN4:</strong> The EasyClean profile operates strictly within the 43°C limit required for Low Surface Temperature (LST) compliance in mental health and care environments.</li>
                                    <li><strong>BS 7671 (18th Edition):</strong> ThermaSkirt-e (electric) fully complies with the IET Wiring Regulations and satisfies EcoDesign Lot 20 requirements when paired with corresponding thermostat architecture.</li>
                                    <li><strong>Anti-Ligature / Anti-Tamper:</strong> Evaluated and utilized by major NHS Trusts for robust psychiatric facility deployment.</li>
                                </ul>
                                <a href="/specifiers/specification-support/design-service" className="text-dh-red font-semibold hover:underline text-sm">Download Un-Redacted Certificates &rarr;</a>
                            </div>
                        </article>

                    </div>
                </section>

                <FAQText
                    faqs={[
                        {
                            question: "Do you have a BBA Certificate?",
                            answer: "ThermaSkirt holds a British Board of Agrément (BBA) certificate, independently verifying its fitness for purpose as a whole-system building product, assessing factors including durability, structural performance, and thermal properties."
                        },
                        {
                            question: "Are your mounting systems load-tested?",
                            answer: "Yes, the extruded aluminium brackets have undergone destructive sheer and load testing to ensure they exceed the requirements typical of standard panel radiator brackets, preventing detachment during impact."
                        }
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore Further Documentation"
                    description="Access more independent testing data and output charts."
                    tiles={otherData}
                />

                <CTABanner
                    heading="Assembling an O&M manual?"
                    description="Our project team supplies complete digital handover packages containing all relevant DoP (Declaration of Performance) documents, CE markings, and warranties for your principal designer."
                    primaryCTA="Request Compliance Pack"
                    primaryCTALink="/specifiers/specification-support/design-service"
                    secondaryCTA="Speak to Spec Team"
                    secondaryCTALink="/about/contact"
                />
            </main>
        </>
    );
}
