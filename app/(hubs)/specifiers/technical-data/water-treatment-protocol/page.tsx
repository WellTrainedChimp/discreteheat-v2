import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Water Treatment & Dosing Protocol | ThermaSkirt',
    description: 'Technical guidance for flushing, cleansing, and dosing ThermaSkirt aluminium heating systems in accordance with BS 7593 standards.',
    alternates: {
        canonical: 'https://www.discreteheat.com/specifiers/technical-data/water-treatment-protocol/',
    },
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=abdc169e-0427-4305-93a7-31a1515d57ac', width: 1200, height: 630, alt: 'Water Treatment & Dosing Protocol | ThermaSkirt' }],
    },
};

const otherData = [
    { title: 'Low Temperature Performance', description: 'Analysis of CoP advantages with heat pumps.', href: '/specifiers/technical-data/low-temperature-performance' },
    { title: 'Radiant Heat Science', description: 'Comparing radiant mean temperature against high-velocity convection.', href: '/specifiers/technical-data/radiant-heat-science' },
    { title: 'Certifications', description: 'CE marks, BBA certificates, and NHS DHSS DN4 compliance statements.', href: '/specifiers/technical-data/certifications' },
];

export default function WaterTreatmentPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="System Integrity"
                    title="BS 7593 Compliance &"
                    titleHighlight="Water Treatment."
                    description="As an advanced aluminium heat emitter, establishing and maintaining the correct system water chemistry is absolutely critical to ensuring the longevity and performance of the ThermaSkirt system."
                    primaryCta={{ text: "Download Specifier Pack", href: "/specifiers/specification-support/design-service" }}
                    imageSrc="https://www.discreteheat.com/MediaHandler.ashx?id=abdc169e-0427-4305-93a7-31a1515d57ac"
                    imageAlt="A heating engineer testing the water chemistry of a freshly dosed central heating system"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-5xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">The Importance of Water Chemistry</h2>
                            <p className="text-xl font-light text-dh-dark mb-6 leading-relaxed">
                                ThermaSkirt is manufactured from an aerospace-grade aluminium alloy. Aluminium is highly reactive to incorrect pH levels and oxygenated water, making chemical dosing mandatory.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                In mixed-metal domestic heating systems (e.g., copper pipes, steel radiators, brass valves, and aluminium skirting), galvanic corrosion can occur if the water acts as an electrolyte. Furthermore, flux residues, installation debris, and magnetite (black sludge) left in the pipework can cause localized pitting or blockages. Strict adherence to BS 7593:2019 (Code of practice for the preparation, commissioning, and maintenance of domestic central heating and cooling water systems) is required to validate the manufacturer\&apos;s warranty.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">The Dosing Procedure</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Cleanse, Flush, and Protect</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                The system must be thoroughly power-flushed (if retrofitting) or chemically cleansed (if new build) to remove all flux, grease, and debris before introducing the final fill water.
                            </p>
                            <div className="p-6 bg-dh-grey-light rounded-2xl border border-dh-grey-light/50 my-8">
                                <h4 className="text-lg font-semibold text-dh-dark mb-2">Technical Note: Approved Inhibitors</h4>
                                <p className="text-dh-grey text-sm mb-4">
                                    The final fill water must be treated with a high-quality, BuildCert-approved chemical inhibitor specifically formulated to protect aluminium (e.g., Fernox F1, Sentinel X100, or ADEY MC1+). The pH of the system water must be maintained between 6.5 and 8.5. We strongly recommend the inline installation of a magnetic and non-magnetic system filter (e.g., MagnaClean) on the primary return pipework to the boiler or heat pump. Full O&M handover instructions and chemical datasheets are available in the specifiers pack.
                                </p>
                                <a href="/specifiers/specification-support/design-service" className="text-dh-red font-semibold hover:underline text-sm">Download O&M Handover Pack &rarr;</a>
                            </div>
                        </article>

                    </div>
                </section>

                <FAQText
                    faqs={[
                        {
                            question: "Can I use un-softened hard water for the fill?",
                            answer: "Yes, provided the water is chemically doped with the correct concentration of scale and corrosion inhibitor immediately upon filling. In extremely hard water areas (>200ppm), a dedicated limescale suppressor may be beneficial."
                        },
                        {
                            question: "How long is the warranty?",
                            answer: "ThermaSkirt carries a standard 10-year warranty (extendable depending on project terms) strictly contingent upon proof of proper BS 7593 flushing and inhibitor dosing upon commissioning."
                        }
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore Further Documentation"
                    description="Access more independent testing data and output charts."
                    tiles={otherData}
                />

                <CTABanner
                    heading="Writing the mechanical specification?"
                    description="Ensure your NBS clauses mandate the correct flushing and dosing standards. Contact our team to request the standard ThermaSkirt water treatment tender wording."
                    primaryCTA="Request Tender Wording"
                    primaryCTALink="/specifiers/specification-support/design-service"
                    secondaryCTA="Speak to Spec Team"
                    secondaryCTALink="/about/contact"
                />
            </main>
        </>
    );
}
