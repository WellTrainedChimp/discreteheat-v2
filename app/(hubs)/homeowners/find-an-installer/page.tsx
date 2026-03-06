import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Find a Registered ThermaSkirt Installer | DiscreteHeat',
    description: 'Locate a factory-trained, registered ThermaSkirt plumbing and heating engineer in your local area to install your new skirting board heating system.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/find-an-installer/',
    },
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=c8ef6e5f-6676-4063-8100-20443ecc05f8', width: 1200, height: 630, alt: 'Find a Registered ThermaSkirt Installer | DiscreteHeat' }],
    },
};

export default function FindInstallerPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Installation Network"
                    title="Expertly fitted,"
                    titleHighlight="nationwide."
                    description="While ThermaSkirt is designed to be fitted by any competent plumber or heating engineer, we maintain a vast UK network of Registered Installers who have completed our dedicated factory training. Find a local expert who knows the system inside out."
                    primaryCta={{ text: "Get an Itemised Quote", href: "/homeowners/get-a-quote" }}
                    imageSrc="https://www.discreteheat.com/MediaHandler.ashx?id=c8ef6e5f-6676-4063-8100-20443ecc05f8"
                    imageAlt="A professional plumber installing a ThermaSkirt corner joint"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">The Registered Installer Network</h2>
                            <p className="text-xl font-light text-dh-dark mb-12 leading-relaxed">
                                ThermaSkirt is fundamentally standard plumbing combined with basic joinery. Any Gas Safe registered heating engineer or experienced general plumber can install it perfectly using our comprehensive manuals. However, many homeowners prefer the peace of mind that comes with hiring a tradesperson who has specifically trained with the product at our manufacturing facility.
                            </p>

                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Why Choose a Registered Installer?</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-dh-red/10 text-dh-red mt-1 mr-4">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-dh-dark">Factory Trained</h4>
                                        <p className="text-dh-grey">They have attended hands-on technical training at our Manchester headquarters, mastering the nuances of cutting the aluminium extrusions and fitting the patented connection joints rapidly.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-dh-red/10 text-dh-red mt-1 mr-4">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-dh-dark">Faster Installation</h4>
                                        <p className="text-dh-grey">Because they are highly familiar with the product, Registered Installers work faster and more efficiently, meaning less disruption to your home and often lower overall labor bills.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-dh-red/10 text-dh-red mt-1 mr-4">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-dh-dark">Direct Support Line</h4>
                                        <p className="text-dh-grey">Registered trade partners have direct priority access to our technical design team on-site, ensuring any complex plumbing routing issues are solved instantly.</p>
                                    </div>
                                </li>
                            </ul>
                        </article>

                        {/* Note: In a real implementation this would be an interactive map/form component. 
                            For the static scaffold, we use a placeholder representation. */}
                        <div className="bg-dh-grey-light p-8 rounded-xl my-16 text-center border border-dh-grey/20">
                            <h3 className="text-2xl font-semibold text-dh-dark mb-4">Request an Installer Introduction</h3>
                            <p className="text-dh-grey mb-8 max-w-2xl mx-auto">
                                We protect our installers from time-wasters. To be introduced to a trained professional in your postcode, you must first have an active ThermaSkirt quote or material manifest generated by our design team.
                            </p>
                            <a href="/homeowners/get-a-quote" className="inline-block px-8 py-4 bg-dh-dark text-white font-medium hover:bg-black transition-colors rounded-sm">
                                Step 1: Request a Quote First
                            </a>
                        </div>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Using Your Own Trades</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Working With Your Existing Plumber</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                If you are managing an extension or a new build, your main contractor will almost certainly prefer to use their own trusted plumbing sub-contractors. This is completely fine and very common.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                ThermaSkirt is engineered specifically to be installed on-site using standard 15mm copper or 10mm plastic pipe drops and standard compression fittings. We provide detailed, step-by-step printed installation manuals with every kit delivered.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                Furthermore, your plumber can call our dedicated technical support line at any point during your installation for immediate guidance from the engineers who designed the system. They do not need to be &apos;registered&apos; to buy or install ThermaSkirt.
                            </p>
                        </article>
                    </div>
                </section>

                <FAQText
                    faqs={[
                        {
                            question: "Does DiscreteHeat install the system directly?",
                            answer: "No. DiscreteHeat is the manufacturer and supplier. We handle the design, heat loss calculations, and manufacture of your specific kit. We then ship the materials directly to your site for your plumber (or our recommended installer) to fit."
                        },
                        {
                            question: "How do you vet the Registered Installers?",
                            answer: "Installers on our network must provide proof of their Gas Safe or equivalent trade registrations, public liability insurance, and successfully complete our hands-on technical training days."
                        },
                        {
                            question: "Who is responsible for the warranty?",
                            answer: "DiscreteHeat provides a 10-year warranty against any manufacturing defects on the ThermaSkirt hardware itself. The labor warranty covering the watertight integrity of the pipe joints relies on the contracting plumber who installed it, exactly the same as installing standard radiators."
                        }
                    ]}
                />

                <CTABanner
                    heading="Ready to start your project?"
                    description="Upload your room dimensions. We'll design the system and connect you with a local fitter."
                    primaryCTA="Get a Free Quote"
                    primaryCTALink="/homeowners/get-a-quote"
                    secondaryCTA=""
                    secondaryCTALink=""
                />
            </main>
        </>
    );
}
