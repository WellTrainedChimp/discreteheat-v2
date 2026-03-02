import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Specification Wording, NBS & Tender Clauses | ThermaSkirt',
    description: 'Pre-written National Building Specification (NBS) clauses, Uniclass codes, and performance-based tender wording for ThermaSkirt radiant heating.',
    alternates: {
        canonical: 'https://www.discreteheat.com/specifiers/specification-support/specification-wording/',
    }
};

const otherSupport = [
    { title: 'M&E Design Service', description: 'Free room-by-room heat loss schedules and marked-up DWG floorplans.', href: '/specifiers/specification-support/design-service' },
    { title: 'SHDF Documentation', description: 'PAS 2035 compliance packs and carbon reduction forecasts.', href: '/specifiers/specification-support/shdf-documentation' },
    { title: 'Framework Access', description: 'Sourcing through pre-qualified public sector procurement frameworks.', href: '/specifiers/specification-support/framework-access' },
];

export default function SpecificationWordingPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Tender Documentation"
                    title="NBS Clauses &"
                    titleHighlight="Tender Wording."
                    description="Drop-in specification text designed to lock in performance criteria, prevent inferior product substitutions, and guarantee BSRIA-verified heat outputs on your project."
                    primaryCta={{ text: "Download Full Specifier Pack", href: "/specifiers/specification-support/design-service" }}
                    imageSrc="/assets/images/technical-nbs.jpg"
                    imageAlt="Architectural blueprints and specification documents overlaid with NBS clause codes"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-5xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Protecting the Specification</h2>
                            <p className="text-xl font-light text-dh-dark mb-6 leading-relaxed">
                                A loosely written specification allows principal contractors to value-engineer critical M&E components using the &apos;or equal and approved&apos; loophole. If a low-temperature emitter is substituted for standard radiators, the heat pump will stall, the SAP score will fail, and the operational carbon will spike.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                For robust protection, we strongly advise consultants to prescribe exact thermal output tolerances, maximum flow temperatures, and mandate BS EN 442-1 verified independent test data. Below are the standard Uniclass 2015 and CAWS codes, along with drop-down tender clauses for our primary product lines.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Standard Classifications</span>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                <div className="p-6 bg-dh-grey-light rounded-2xl border border-dh-grey-light/50">
                                    <h4 className="text-lg font-semibold text-dh-dark mb-3">NBS Uniclass 2015</h4>
                                    <p className="text-dh-grey text-sm mb-3">
                                        <strong>Pr_70_60_36_73</strong> – Radiators<br />
                                        <span className="text-xs text-dh-grey/80">Best-fit classification for hydronic space heating emitters operating with heat pumps or boilers.</span>
                                    </p>
                                    <p className="text-dh-grey text-sm">
                                        <strong>Pr_70_60_36_71</strong> – Radiant panels<br />
                                        <span className="text-xs text-dh-grey/80">Alternative classification for consultants prioritizing the radiant heat profile over standard convection.</span>
                                    </p>
                                </div>
                                <div className="p-6 bg-dh-grey-light rounded-2xl border border-dh-grey-light/50">
                                    <h4 className="text-lg font-semibold text-dh-dark mb-2">CAWS (Common Arrangement)</h4>
                                    <p className="text-dh-grey text-sm mb-4">
                                        <strong>T41:</strong><br />
                                        Low-temperature hot water heating:<br />Radiators/Convectors/Skirting heaters
                                    </p>
                                </div>
                            </div>
                        </article>

                        <article className="mt-16">
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Interactive Clause Builder</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-8">
                                Expand the relevant product range to view and copy the suggested generic performance criteria for your preliminaries or mechanical specification documents.
                            </p>

                            {/* Static Accordion Layout for Dropdown effect */}
                            <div className="space-y-4">

                                <details className="group border border-dh-grey-light rounded-xl bg-white overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer bg-dh-grey-light/30 hover:bg-dh-grey-light/60 transition-colors">
                                        <h4 className="text-lg font-semibold text-dh-dark">ThermaSkirt H₂O (Hydronic) Tender Wording</h4>
                                        <span className="transition duration-300 group-open:-rotate-180">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dh-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <div className="p-6 text-dh-grey text-sm bg-white border-t border-dh-grey-light">
                                        <p className="mb-4"><strong>Description:</strong> Low level, continuous perimeter radiant heating panel doubling as a protective skirting board.</p>
                                        <p className="mb-4"><strong>Material Extrusion:</strong> 6000 series aerospace-grade aluminium alloy. Minimum 75% recycled content.</p>
                                        <p className="mb-4"><strong>Performance Verification:</strong> Manufacturer must provide independent test certification to BS EN 442-1 standard from BSRIA (or equivalent UKAS accredited body) demonstrating a minimum output of [INSERT REQUIRED W/M] at a Mean Water Temperature (MWT) of [INSERT MWT].</p>
                                        <p className="mb-4"><strong>System Hydraulics:</strong> To include twin, separate 15mm oval flow and return pipeways extruded integrally within the front radiant face. To be joined via proprietary double o-ring push-fit/compression connectors tested to 5 bar continuous pressure.</p>
                                        <p className="mt-6 text-dh-red font-semibold">Copy text to clipboard component would go here</p>
                                    </div>
                                </details>

                                <details className="group border border-dh-grey-light rounded-xl bg-white overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer bg-dh-grey-light/30 hover:bg-dh-grey-light/60 transition-colors">
                                        <h4 className="text-lg font-semibold text-dh-dark">ThermaSkirt EasyClean (NHS/LST) Tender Wording</h4>
                                        <span className="transition duration-300 group-open:-rotate-180">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dh-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <div className="p-6 text-dh-grey text-sm bg-white border-t border-dh-grey-light">
                                        <p className="mb-4"><strong>Description:</strong> Low Surface Temperature (LST) anti-ligature perimeter radiant heating panel.</p>
                                        <p className="mb-4"><strong>Clinical Compliance:</strong> System must not exceed a maximum surface temperature of 43°C in accordance with NHS Estates Health Guidance Note \&apos;Safe Hot Water and Surface Temperatures\&apos; (DN4).</p>
                                        <p className="mb-4"><strong>Design:</strong> Profile must feature a sealed top hygiene capping forming a minimum 5mm radius curve to prevent dust accumulation. The top capping and bottom seal must be continuous and feature an anti-microbial coating.</p>
                                        <p className="mb-4"><strong>Ligature & Tamper Resistance:</strong> All fixings must be completely concealed. Profile must withstand severe impact exceeding standard panel radiator limits and resist ligature attachment from the top edge and expansion joints.</p>
                                        <p className="mt-6 text-dh-red font-semibold">Copy text to clipboard component would go here</p>
                                    </div>
                                </details>

                                <details className="group border border-dh-grey-light rounded-xl bg-white overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer bg-dh-grey-light/30 hover:bg-dh-grey-light/60 transition-colors">
                                        <h4 className="text-lg font-semibold text-dh-dark">ThermaSkirt-e (Electric) Tender Wording</h4>
                                        <span className="transition duration-300 group-open:-rotate-180">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dh-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <div className="p-6 text-dh-grey text-sm bg-white border-t border-dh-grey-light">
                                        <p className="mb-4"><strong>Description:</strong> Direct electric low-level perimeter infrared heating system.</p>
                                        <p className="mb-4"><strong>Electrical Characteristics:</strong> Must operate directly at 230V to avoid the requirement of local step-down transformers. Must feature a self-regulating heat trace element to inherently prevent overheating when obstructed by furniture.</p>
                                        <p className="mb-4"><strong>Compliance:</strong> Must be certified to BS 7671 (18th Edition Wiring Regulations) and fulfill EcoDesign Lot 20 requirements via an associated programmable thermostat.</p>
                                        <p className="mt-6 text-dh-red font-semibold">Copy text to clipboard component would go here</p>
                                    </div>
                                </details>

                            </div>
                        </article>

                    </div>
                </section>

                <FAQText
                    faqs={[
                        {
                            question: "Can these clauses be downloaded in Word/PDF format?",
                            answer: "Yes, the full un-redacted Word documents are included in the downloadable Specifier Pack via the button below, allowing you to easily inject them directly into your NBS Chorus platform."
                        },
                        {
                            question: "Do you supply full DWG blocks for CAD?",
                            answer: "Yes. All profile variations, corner pieces, and manifold details are available as standard AutoCAD DWG blocks upon request for architectural integration."
                        }
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore Further Support"
                    description="Discover our free design services and documentation."
                    tiles={otherSupport}
                />

                <CTABanner
                    heading="Need these clauses sent directly?"
                    description="Request the full digital package for immediate integration into your project specification."
                    primaryCTA="Download Specifier Pack"
                    primaryCTALink="/specifiers/specification-support/design-service"
                    secondaryCTA="Speak to Spec Team"
                    secondaryCTALink="/about/contact"
                />
            </main>
        </>
    );
}
