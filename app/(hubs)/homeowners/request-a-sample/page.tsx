import SubHubHero from '@/components/server/SubHubHero';
import CTABanner from '@/components/blocks/CTABanner';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Request a Free Sample | ThermaSkirt',
    description: 'Order a free ThermaSkirt sample to see and feel the quality for yourself. See the profile, the finish, and the build quality before you commit.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/request-a-sample/',
    }
};

export default function RequestASamplePage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Free Sample"
                    title="See it. Feel it."
                    titleHighlight="Believe it."
                    description="Nothing beats holding the product in your hands. Request a free ThermaSkirt sample and see the quality, the finish, and the profile options for yourself — no obligation, no pressure."
                    primaryCta={{ text: "Get a Free Quote Instead", href: "/homeowners/get-a-quote" }}
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            <div className="space-y-8">
                                <article>
                                    <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">What You&apos;ll Receive</h2>
                                    <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                        Your free sample pack includes a section of the ThermaSkirt profile so you can see exactly how it looks and feels. Hold it against your existing skirting board to compare the size, feel the weight of the aluminium, and see the quality of the finish.
                                    </p>
                                    <ul className="space-y-4 text-dh-grey">
                                        <li className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-dh-red mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                            <span>A physical section of the ThermaSkirt profile</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-dh-red mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                            <span>Profile options (Ogee, Torus, Minimalist)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-dh-red mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                            <span>Product literature and colour options</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-dh-red mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                            <span>Completely free, no obligation</span>
                                        </li>
                                    </ul>
                                </article>

                                <article>
                                    <h3 className="text-2xl font-light text-dh-dark mb-4 tracking-tight">Why Request a Sample?</h3>
                                    <p className="text-lg text-dh-grey leading-relaxed">
                                        Photos and specifications only go so far. When you hold a ThermaSkirt sample, you will immediately feel the quality of the aerospace-grade aluminium, see how the profile matches traditional skirting board styles, and understand why over 85,000 systems have been installed across the UK.
                                    </p>
                                </article>
                            </div>

                            <div>
                                <div className="bg-dh-grey-light rounded-2xl p-8 border border-black/5">
                                    <h3 className="text-xl font-semibold text-dh-dark mb-6">Request Your Free Sample</h3>
                                    <p className="text-sm text-dh-grey mb-8">
                                        Fill in your details below and we&apos;ll post a free sample pack to you within 3-5 working days.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-dh-dark mb-1.5">Full Name</label>
                                            <div className="w-full h-11 rounded-lg border border-black/10 bg-white" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-dh-dark mb-1.5">Email Address</label>
                                            <div className="w-full h-11 rounded-lg border border-black/10 bg-white" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-dh-dark mb-1.5">Postal Address</label>
                                            <div className="w-full h-24 rounded-lg border border-black/10 bg-white" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-dh-dark mb-1.5">Which product are you interested in?</label>
                                            <div className="w-full h-11 rounded-lg border border-black/10 bg-white" />
                                        </div>
                                        <div className="pt-2">
                                            <div className="w-full h-12 rounded-lg bg-dh-red flex items-center justify-center text-white font-semibold text-sm cursor-not-allowed opacity-70">
                                                Request Sample (Form Coming Soon)
                                            </div>
                                            <p className="text-xs text-dh-grey mt-3">
                                                In the meantime, please contact us directly to request your sample.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <CTABanner
                    heading="Already convinced? Get a quote instead."
                    description="Skip the sample and go straight to a free, no-obligation quote with a room-by-room breakdown."
                    primaryCTA="Get a Free Quote"
                    primaryCTALink="/homeowners/get-a-quote"
                    secondaryCTA="Find an Installer"
                    secondaryCTALink="/homeowners/find-an-installer"
                />
            </main>
        </>
    );
}
