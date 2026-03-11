import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Request an Engineering CPD | ThermaSkirt',
    description: 'Book our CIBSE-approved "Low Flow Radiance" Continuing Professional Development (CPD) session for your architectural or M&E practice.',
    alternates: {
        canonical: 'https://www.discreteheat.com/specifiers/specification-support/request-a-cpd/',
    },
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=660596bd-ec1d-411c-91c5-bd0746641217', width: 1200, height: 630, alt: 'Request an Engineering CPD | ThermaSkirt' }],
    },
};

const otherSupport = [
    { title: 'Specification Wording', description: 'Pre-written CAWS / Uniclass NBS clauses and tender criteria.', href: '/specifiers/specification-support/specification-wording' },
    { title: 'M&E Design Service', description: 'Free room-by-room heat loss schedules and marked-up DWG floorplans.', href: '/specifiers/specification-support/design-service' },
    { title: 'Framework Access', description: 'Sourcing through pre-qualified public sector procurement frameworks.', href: '/specifiers/specification-support/framework-access' },
];

export default function RequestCPDPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Training & Education"
                    title="CIBSE-Approved"
                    titleHighlight="Technical Seminars."
                    description="Book our industry-leading CPD session: 'Low Flow Radiance'. We deliver comprehensive technical training on integrating radiant baseboard heating with Air Source Heat Pumps to satisfy Part L and the Future Homes Standard."
                    primaryCta={{ text: "Book Online/In-Person CPD", href: "/about/contact" }}
                    imageSrc="https://www.discreteheat.com/MediaHandler.ashx?id=660596bd-ec1d-411c-91c5-bd0746641217"
                    imageAlt="An engineer delivering a technical CPD presentation to an architectural practice"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-5xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">The Agenda: Low Flow Radiance</h2>
                            <p className="text-xl font-light text-dh-dark mb-6 leading-relaxed">
                                Our CPD is not a sales pitch; it is a rigorous, data-driven engineering presentation specifically tailored for M&E consultants, sustainability assessors, and principal architects.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                The 45-minute session (followed by a 15-minute Q&A) dissects the physics of heat pump efficiency vs thermal emitter geometry. We evaluate the independent testing data from the University of Salford (Energy House 2.0) and deep-dive into the practical realities of integrating low-flow continuous radiant emitters on modern construction sites.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Core Learning Objectives</span>
                            <div className="p-8 bg-dh-grey-light rounded-2xl border border-dh-grey-light/50 my-8">
                                <ul className="space-y-4 text-dh-dark font-medium list-none">
                                    <li className="flex items-start">
                                        <svg className="h-6 w-6 text-dh-red mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Understand the inverse relationship between Heat Pump CoP and flow temperatures.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="h-6 w-6 text-dh-red mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Analyze thermal stratification (Radiant vs Convective models).</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="h-6 w-6 text-dh-red mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Evaluate the Embodied Carbon footprint of standard Type 22/33 radiators vs extruded aluminium systems.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="h-6 w-6 text-dh-red mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Review compliance strategies for Part L and the 2025 Future Homes Standard (FHS).</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="h-6 w-6 text-dh-red mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Examine solutions for high heat-loss solid-wall properties under PAS 2035 retrofit guidance.</span>
                                    </li>
                                </ul>
                            </div>
                        </article>

                    </div>
                </section>

                <FAQText
                    faqs={[
                        {
                            question: "Is this strictly for CIBSE members?",
                            answer: "While the material is formally assessed and accredited by the Chartered Institution of Building Services Engineers (CIBSE), it is highly relevant and open to RIBA architects, sustainability officers, and principal contractors."
                        },
                        {
                            question: "Do you provide lunch for in-person sessions?",
                            answer: "Yes. For 'Lunch & Learn' sessions hosted at your practice, our technical specification managers will arrange full catering for your team."
                        }
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore Further Support"
                    description="Discover our free design services and documentation."
                    tiles={otherSupport}
                />

                <CTABanner
                    heading="Secure your CPD slot today."
                    description="Contact our specification team to book an online webinar or schedule an in-person seminar at your UK offices."
                    primaryCTA="Book CPD via Contact Form"
                    primaryCTALink="/about/contact"
                    secondaryCTA="Speak to Spec Team"
                    secondaryCTALink="/about/contact"
                />
            </main>
        </>
    );
}
