import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Cookie Policy | DiscreteHeat',
    description: 'Cookie Policy for the DiscreteHeat website. Learn how we use cookies and similar technologies.',
    alternates: {
        canonical: 'https://www.discreteheat.com/cookie-policy/',
    }
};

export default function CookiePolicyPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-white selection:bg-dh-red/20 selection:text-dh-red">
                <section className="pt-36 pb-20 px-6 lg:px-12">
                    <div className="max-w-3xl mx-auto">
                        <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Legal</span>
                        <h1 className="text-4xl font-light text-dh-dark mb-4 tracking-tight">Cookie Policy</h1>
                        <p className="text-sm text-dh-grey mb-12">Last updated: March 2026</p>

                        <div className="prose prose-lg max-w-none text-dh-grey space-y-8">
                            <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl mb-12">
                                <p className="text-amber-800 text-sm font-medium">This page is pending final legal review. Content below is a structural outline only.</p>
                            </div>

                            <article>
                                <h2 className="text-2xl font-light text-dh-dark mb-4 tracking-tight">1. What Are Cookies</h2>
                                <p className="leading-relaxed">
                                    Cookies are small text files stored on your device when you visit a website. They help the website remember your preferences and understand how you interact with the site.
                                </p>
                            </article>

                            <article>
                                <h2 className="text-2xl font-light text-dh-dark mb-4 tracking-tight">2. How We Use Cookies</h2>
                                <p className="leading-relaxed">
                                    We use cookies to ensure our website functions correctly, to analyse site traffic, and to improve your browsing experience. We may also use cookies for marketing purposes with your consent.
                                </p>
                            </article>

                            <article>
                                <h2 className="text-2xl font-light text-dh-dark mb-4 tracking-tight">3. Types of Cookies We Use</h2>
                                <p className="leading-relaxed">
                                    <strong className="text-dh-dark">Essential cookies:</strong> Required for the website to function. These cannot be disabled.<br /><br />
                                    <strong className="text-dh-dark">Analytics cookies:</strong> Help us understand how visitors interact with our website.<br /><br />
                                    <strong className="text-dh-dark">Marketing cookies:</strong> Used to deliver relevant advertisements and track campaign performance.
                                </p>
                            </article>

                            <article>
                                <h2 className="text-2xl font-light text-dh-dark mb-4 tracking-tight">4. Managing Your Cookie Preferences</h2>
                                <p className="leading-relaxed">
                                    You can control and delete cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of our website.
                                </p>
                            </article>

                            <article>
                                <h2 className="text-2xl font-light text-dh-dark mb-4 tracking-tight">5. Contact Us</h2>
                                <p className="leading-relaxed">
                                    If you have questions about our use of cookies, please contact DiscreteHeat Ltd at our registered office address.
                                </p>
                            </article>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
