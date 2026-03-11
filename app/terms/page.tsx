import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Terms of Service | DiscreteHeat',
    description: 'Terms of Service for the DiscreteHeat website and ThermaSkirt products.',
    alternates: {
        canonical: 'https://www.discreteheat.com/terms/',
    }
};

export default function TermsPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-white selection:bg-dh-red/20 selection:text-dh-red">
                <section className="pt-36 pb-20 px-6 lg:px-12">
                    <div className="max-w-3xl mx-auto">
                        <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Legal</span>
                        <h1 className="text-4xl font-light text-dh-dark mb-4 tracking-tight">Terms of Service</h1>
                        <p className="text-sm text-dh-grey mb-12">Last updated: March 2026</p>

                        <div className="prose prose-lg max-w-none text-dh-grey space-y-8">
                            <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl mb-12">
                                <p className="text-amber-800 text-sm font-medium">This page is pending final legal review. Content below is a structural outline only.</p>
                            </div>

                            <article>
                                <h2 className="text-2xl font-light text-dh-dark mb-4 tracking-tight">1. Introduction</h2>
                                <p className="leading-relaxed">
                                    These Terms of Service govern your use of the DiscreteHeat website and any services provided by DiscreteHeat Ltd. By accessing our website, you agree to these terms.
                                </p>
                            </article>

                            <article>
                                <h2 className="text-2xl font-light text-dh-dark mb-4 tracking-tight">2. Use of Our Website</h2>
                                <p className="leading-relaxed">
                                    You may use our website for lawful purposes only. You must not use the site in any way that could damage, disable, or impair the site or interfere with any other party&apos;s use.
                                </p>
                            </article>

                            <article>
                                <h2 className="text-2xl font-light text-dh-dark mb-4 tracking-tight">3. Intellectual Property</h2>
                                <p className="leading-relaxed">
                                    All content on this website, including text, images, logos, and designs, is the property of DiscreteHeat Ltd and is protected by UK and international copyright laws. ThermaSkirt is a registered trademark of DiscreteHeat Ltd.
                                </p>
                            </article>

                            <article>
                                <h2 className="text-2xl font-light text-dh-dark mb-4 tracking-tight">4. Product Information</h2>
                                <p className="leading-relaxed">
                                    While we make every effort to ensure product descriptions and specifications are accurate, we cannot guarantee that all information on the website is complete or error-free. Prices and availability are subject to change without notice.
                                </p>
                            </article>

                            <article>
                                <h2 className="text-2xl font-light text-dh-dark mb-4 tracking-tight">5. Limitation of Liability</h2>
                                <p className="leading-relaxed">
                                    DiscreteHeat Ltd shall not be liable for any indirect, incidental, or consequential damages arising from your use of our website or products, to the extent permitted by law.
                                </p>
                            </article>

                            <article>
                                <h2 className="text-2xl font-light text-dh-dark mb-4 tracking-tight">6. Governing Law</h2>
                                <p className="leading-relaxed">
                                    These terms are governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                                </p>
                            </article>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
