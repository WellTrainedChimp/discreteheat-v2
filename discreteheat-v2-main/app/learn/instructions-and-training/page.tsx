import NavbarMorph from '@/components/client/NavbarMorph';
import CTABanner from '@/components/blocks/CTABanner';

export const metadata = {
    title: 'Instructions & Training | ThermaSkirt Learning Area',
    description: 'Access our full technical and installation training course for ThermaSkirt. Step-by-step guidance for DIYers and professionals alike.',
    alternates: {
        canonical: 'https://www.discreteheat.com/learn/instructions-and-training/',
    },
};

export default function InstructionsAndTrainingPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <section className="pt-40 pb-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Learning Area</span>
                        <h1 className="text-4xl md:text-5xl font-light text-dh-dark mb-6 tracking-tight">Instructions &amp; Training</h1>
                        <p className="text-xl font-light text-dh-grey leading-relaxed max-w-2xl mx-auto">
                            Our full technical and installation training course is coming soon. In the meantime, every ThermaSkirt kit ships with comprehensive printed installation manuals, and our technical support team is available by phone to guide you through every step.
                        </p>
                    </div>
                </section>

                <CTABanner
                    heading="Ready to get started?"
                    description="Request a ThermaSkirt design and quote, and we'll include full installation guidance with your kit."
                    primaryCTA="Get a Free Quote"
                    primaryCTALink="/homeowners/get-a-quote"
                    secondaryCTA="Find an Installer"
                    secondaryCTALink="/homeowners/find-an-installer"
                />
            </main>
        </>
    );
}
