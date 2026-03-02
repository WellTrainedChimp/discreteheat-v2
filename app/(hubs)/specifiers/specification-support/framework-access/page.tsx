import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Public Sector Procurement Frameworks | ThermaSkirt',
    description: 'Information on sourcing ThermaSkirt systems through pre-qualified UK public sector procurement frameworks such as Fusion21 and CHIC.',
    alternates: {
        canonical: 'https://www.discreteheat.com/specifiers/specification-support/framework-access/',
    }
};

const otherSupport = [
    { title: 'Specification Wording', description: 'Pre-written CAWS / Uniclass NBS clauses and tender criteria.', href: '/specifiers/specification-support/specification-wording' },
    { title: 'M&E Design Service', description: 'Free room-by-room heat loss schedules and marked-up DWG floorplans.', href: '/specifiers/specification-support/design-service' },
    { title: 'SHDF Documentation', description: 'PAS 2035 compliance packs and carbon reduction forecasts.', href: '/specifiers/specification-support/shdf-documentation' },
];

export default function FrameworkAccessPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Public Procurement"
                    title="Seamless Access via"
                    titleHighlight="Major Frameworks."
                    description="We understand that public sector compliance and OJEU procurement rules are complex. ThermaSkirt is pre-approved on several major national frameworks, streamlining the purchasing route for local authorities and housing associations."
                    primaryCta={{ text: "View Approved Frameworks", href: "/about/contact" }}
                    imageSrc="/assets/images/technical-framework.jpg"
                    imageAlt="A conceptual graphical representation of a public sector procurement network"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-5xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">De-risking the Supply Chain</h2>
                            <p className="text-xl font-light text-dh-dark mb-6 leading-relaxed">
                                For local authorities, NHS Trusts, and Registered Social Landlords (RSLs), specifying an innovative product often triggers exhaustive, time-consuming tender exercises to prove &apos;Best Value&apos; and compliance.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                By engaging through established, fully-audited procurement frameworks, public bodies can rapidly &apos;call off&apos; ThermaSkirt for decarbonisation projects, healthcare refurbishments, and new-build housing estates. We have successfully passed the rigorous financial, environmental, and technical vetting required to feature on these approved supply chains.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Active Frameworks</span>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                                <div className="p-8 bg-dh-grey-light rounded-2xl border border-dh-grey-light/50 flex flex-col items-start">
                                    <div className="mb-4 text-dh-red font-bold text-xl tracking-tight uppercase">Fusion 21</div>
                                    <h3 className="text-lg font-semibold text-dh-dark mb-2">Decarbonisation & Heating Frameworks</h3>
                                    <p className="text-dh-grey text-sm mb-4 flex-grow">
                                        ThermaSkirt is an approved product supplier on Fusion21\&apos;s prominent national frameworks, frequently utilized for large-scale Social Housing Decarbonisation Fund (SHDF) delivery and public building retrofits.
                                    </p>
                                </div>
                                <div className="p-8 bg-dh-grey-light rounded-2xl border border-dh-grey-light/50 flex flex-col items-start">
                                    <div className="mb-4 text-dh-red font-bold text-xl tracking-tight uppercase">CHIC</div>
                                    <h3 className="text-lg font-semibold text-dh-dark mb-2">Central Housing Investment Consortium</h3>
                                    <p className="text-dh-grey text-sm mb-4 flex-grow">
                                        Approved for direct specification across the CHIC consortium, enabling hundreds of member housing associations to compliantly procure ThermaSkirt for their low-carbon refurbishment pipelines.
                                    </p>
                                </div>
                            </div>
                            <p className="text-sm text-dh-grey italic">Note: Framework status is continuously updated as new &apos;lots&apos; are released. Please contact us for the most current active Direct Award or Mini-Competition routes, including Procure Partnerships and NHS Shared Business Services (SBS).</p>
                        </article>

                    </div>
                </section>

                <FAQText
                    faqs={[
                        {
                            question: "Can we direct-award via a framework?",
                            answer: "In many instances, yes. Depending on the specific rules of the framework 'Lot', if ThermaSkirt is the only product capable of meeting your specific technical or spatial requirements, a compliant Direct Award may be permissible."
                        },
                        {
                            question: "Are your local installer partners also on the frameworks?",
                            answer: "Several of our Tier-1 national installation partners are also fully vetted members of these frameworks, allowing you to procure the 'Supply and Fit' package seamlessly under a single compliance umbrella."
                        }
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore Further Support"
                    description="Discover our free design services and documentation."
                    tiles={otherSupport}
                />

                <CTABanner
                    heading="Need advice on the most compliant procurement route?"
                    description="Our public sector commercial team can advise your procurement officers on the fastest, most robust method of sourcing our systems."
                    primaryCTA="Contact Procurement Team"
                    primaryCTALink="/about/contact"
                    secondaryCTA="Download ESG & Financial KPIs"
                    secondaryCTALink="/specifiers/specification-support/design-service"
                />
            </main>
        </>
    );
}
