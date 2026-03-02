import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'CPD Seminars & Engineering Training | ThermaSkirt',
    description: 'Book CIBSE-approved Continuing Professional Development (CPD) sessions and access engineering training materials for radiant heating specification.',
    alternates: {
        canonical: 'https://www.discreteheat.com/specifiers/cpd/',
    }
};

export default function CPDHubPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Education Hub"
                    title="CIBSE-Approved"
                    titleHighlight="Technical Training."
                    description="Advance your engineering practice\'s knowledge of low-temperature radiant heating. Access our on-demand training modules or book an interactive, accredited CPD session for your team."
                    primaryCta={{ text: "Book an In-Person CPD", href: "/about/contact" }}
                    imageSrc="/assets/images/technical-cpd-hub.jpg"
                    imageAlt="A group of architects and engineers discussing building schematics during a technical presentation"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-5xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">The &quot;Low Flow Radiance&quot; Presentation</h2>
                            <p className="text-xl font-light text-dh-dark mb-6 leading-relaxed">
                                Our flagship CIBSE-assessed CPD module provides a rigorous, data-driven analysis of thermal emitter performance under the incoming Future Homes Standard and PAS 2035 frameworks.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Delivered by our Technical Specification Managers, the 45-minute technical session strips away marketing rhetoric to focus entirely on the building physics governing radiant heat transfer, low-flow heat pump integration, and embodied carbon reductions. It is designed explicitly for M&E consultants, sustainability assessors, and principal architects seeking to navigate the tricky transition away from high-temperature fossil fuel systems.
                            </p>
                            <div className="flex gap-4 mt-8">
                                <a href="/about/contact" className="px-6 py-3 bg-dh-red text-white font-medium rounded-full hover:bg-dh-red/90 transition-colors">Book Online Webinar</a>
                                <a href="/about/contact" className="px-6 py-3 bg-white text-dh-dark border border-dh-grey-light font-medium rounded-full hover:bg-dh-grey-light/30 transition-colors">Book In-Person Lunch & Learn</a>
                            </div>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">On-Demand Modules</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Digital Training Resources</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                If you require immediate technical onboarding for a specific project, you can access our suite of pre-recorded digital training modules and associated compliance literature directly.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                                <a href="/specifiers/technical-data/energy-house-2-report" className="group p-6 bg-dh-grey-light rounded-2xl border border-dh-grey-light/50 hover:bg-white transition-colors duration-300">
                                    <h4 className="text-lg font-semibold text-dh-dark mb-2 group-hover:text-dh-red transition-colors">Review Energy House 2.0 Data</h4>
                                    <p className="text-dh-grey text-sm">Analyze the independent thermal stratification and absolute energy consumption metrics.</p>
                                </a>
                                <a href="/specifiers/specification-support/specification-wording" className="group p-6 bg-dh-grey-light rounded-2xl border border-dh-grey-light/50 hover:bg-white transition-colors duration-300">
                                    <h4 className="text-lg font-semibold text-dh-dark mb-2 group-hover:text-dh-red transition-colors">Access Tender Clauses</h4>
                                    <p className="text-dh-grey text-sm">Download pre-written NBS syntax and CAWS codes for immediate project integration.</p>
                                </a>
                            </div>
                        </article>

                    </div>
                </section>

                <FAQText
                    faqs={[
                        {
                            question: "How are CPD certificates issued?",
                            answer: "Upon completion of the seminar, individual digital CIBSE-accredited attendance certificates are emailed directly to all participants for inclusion in their annual professional development logs."
                        },
                        {
                            question: "Where do you deliver in-person sessions?",
                            answer: "Our specification managers cover the entirety of the UK and Ireland. We can host the presentation at your architectural practice, engineering consultancy offices, or main contractor headquarters."
                        }
                    ]}
                />

                <CTABanner
                    heading="Ready to schedule training for your practice?"
                    description="Submit your details and requested date ranges, and our specification team will coordinate the logistics."
                    primaryCTA="Contact Training Team"
                    primaryCTALink="/about/contact"
                    secondaryCTA="Speak to Spec Team"
                    secondaryCTALink="/about/contact"
                />
            </main>
        </>
    );
}
