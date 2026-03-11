import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Privacy Policy | DiscreteHeat',
    description: 'Privacy Policy for DiscreteHeat Ltd and the ThermaSkirt range of skirting board heating products.',
    alternates: {
        canonical: 'https://www.discreteheat.com/privacy-policy/',
    }
};

export default function PrivacyPolicyPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-white selection:bg-dh-red/20 selection:text-dh-red">
                <section className="pt-36 pb-20 px-6 lg:px-12">
                    <div className="max-w-3xl mx-auto">
                        <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Legal</span>
                        <h1 className="text-4xl font-light text-dh-dark mb-4 tracking-tight">Privacy Policy</h1>
                        <p className="text-sm text-dh-grey mb-12">Last updated: March 2026</p>

                        <div className="prose prose-lg max-w-none text-dh-grey space-y-8">
                            <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl mb-12">
                                <p className="text-amber-800 text-sm font-medium">This page is pending final legal review. Content below is a structural outline only.</p>
                            </div>

                            <article>
                                <h2 className="text-2xl font-light text-dh-dark mb-4 tracking-tight">1. Introduction</h2>
                                <p className="leading-relaxed">
                                    DiscreteHeat Ltd (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal data when you visit our website or use our services.
                                </p>
                            </article>

                            <article>
                                <h2 className="text-2xl font-light text-dh-dark mb-4 tracking-tight">2. Data We Collect</h2>
                                <p className="leading-relaxed">
                                    We may collect personal information including your name, email address, telephone number, and postal address when you request a quote, order a sample, or contact us through our website.
                                </p>
                            </article>

                            <article>
                                <h2 className="text-2xl font-light text-dh-dark mb-4 tracking-tight">3. How We Use Your Data</h2>
                                <p className="leading-relaxed">
                                    Your personal data is used to respond to your enquiries, process quote requests, and provide information about our ThermaSkirt products and services.
                                </p>
                            </article>

                            <article>
                                <h2 className="text-2xl font-light text-dh-dark mb-4 tracking-tight">4. Data Retention</h2>
                                <p className="leading-relaxed">
                                    We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law.
                                </p>
                            </article>

                            <article>
                                <h2 className="text-2xl font-light text-dh-dark mb-4 tracking-tight">5. Your Rights</h2>
                                <p className="leading-relaxed">
                                    Under the UK General Data Protection Regulation (UK GDPR), you have the right to access, rectify, or erase your personal data. You may also object to processing or request data portability.
                                </p>
                            </article>

                            <article>
                                <h2 className="text-2xl font-light text-dh-dark mb-4 tracking-tight">6. Contact Us</h2>
                                <p className="leading-relaxed">
                                    If you have questions about this Privacy Policy, please contact DiscreteHeat Ltd at our registered office address or via the contact details provided on our website.
                                </p>
                            </article>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
