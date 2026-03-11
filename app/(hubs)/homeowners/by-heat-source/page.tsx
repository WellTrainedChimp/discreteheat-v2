import SubHubHero from '@/components/server/SubHubHero';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import NavbarMorph from '@/components/client/NavbarMorph';
import CTABanner from '@/components/blocks/CTABanner';

export const metadata = {
    title: 'Heating by Heat Source | ThermaSkirt Skirting Board Heating',
    description: 'ThermaSkirt works with every heating system — gas boilers, heat pumps, oil boilers, biomass, electric, and solar PV. Find the right configuration for your home.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/by-heat-source/',
    },
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=c287107e-ac14-4abc-b282-8676388df56c', width: 1200, height: 630, alt: 'Heating by Heat Source | ThermaSkirt Skirting Board Heating' }],
    },
};

export default function ByHeatSourceSubHub() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Heat Sources"
                    title="Engineered for"
                    titleHighlight="any fuel."
                    description="Whether you're keeping your reliable combi boiler, upgrading to an air source heat pump, or going fully electric with solar PV, ThermaSkirt is independently tested and certified for every heating system on the market. Over 60,000 installations across the UK."
                    primaryCta={{ text: "Get a Free Quote", href: "/homeowners/get-a-quote" }}
                    secondaryCta={{ text: "Not sure? Talk to us", href: "/homeowners/get-a-quote" }}
                />

                <section className="py-16 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-xl font-light text-dh-dark leading-relaxed mb-4">
                            ThermaSkirt H2O connects to any wet central heating system using standard 15mm or 10mm pipework. ThermaSkirt-e provides direct electric radiant heat via a 240V fused spur—no plumbing at all. Both versions replace your existing skirting boards, reclaiming 100% of your wall space while delivering BSRIA-certified heat output.
                        </p>
                        <p className="text-lg text-dh-grey leading-relaxed">
                            Select your heating system below to see exactly how ThermaSkirt is configured for your setup, including output data, installation requirements, and real homeowner case studies.
                        </p>
                    </div>
                </section>

                <ExploreCategorySection
                    heading="Explore ThermaSkirt by Heat Source"
                    description="Whether you're switching to a heat pump, keeping your boiler, or going fully electric — ThermaSkirt is engineered to deliver maximum comfort at any flow temperature."
                    tiles={[
                        { title: 'Heat Pump', description: 'Designed for 35–45°C flow temperatures. Improves COP by up to 0.5 versus standard radiators.', href: '/homeowners/by-heat-source/heat-pump', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=1810392b-f952-4d2d-be1d-380e41260d4e' },
                        { title: 'Boiler', description: 'Direct replacement for radiators on any existing wet central heating system.', href: '/homeowners/by-heat-source/boiler', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=22fec364-9fcd-4930-a878-1378f62edefd' },
                        { title: 'Direct Electric', description: 'ThermaSkirt-e: 240V hard-wired radiant heating with zero plumbing.', href: '/homeowners/by-heat-source/electric', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=b90b809b-b190-4d77-8bd0-8efd8c253871' },
                        { title: 'Biomass Boiler', description: 'Distributes high-temperature output from log gasification and pellet boilers evenly.', href: '/homeowners/by-heat-source/biomass' },
                        { title: 'Solar PV & Thermal', description: 'Maximise self-consumption of free solar energy with low-temperature efficiency.', href: '/homeowners/by-heat-source/solar' },
                    ]}
                />

                <section className="py-16 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto">
                        <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Mixed Systems</span>
                        <h2 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Not just one heat source? That&apos;s fine.</h2>
                        <p className="text-lg text-dh-grey leading-relaxed mb-6">
                            Many homeowners run hybrid systems—a heat pump for the main house with electric ThermaSkirt in a garden office, or a gas boiler downstairs with solar-fed ThermaSkirt in a loft extension. ThermaSkirt H2O coexists happily with radiators and towel rails on the same circuit, so you don&apos;t need to replace everything at once.
                        </p>
                        <p className="text-lg text-dh-grey leading-relaxed">
                            If you&apos;re planning a phased upgrade—perhaps keeping your gas boiler now but switching to a heat pump in the future—ThermaSkirt future-proofs your emitter investment. The same system that works at 70°C on a gas boiler will deliver excellent performance at 40°C on a heat pump, without any modification.
                        </p>
                    </div>
                </section>

                <CTABanner
                    heading="Not sure which system you have?"
                    description="Send us a photo of your boiler or heat pump and we'll advise on the best ThermaSkirt configuration—free of charge."
                    primaryCTA="Get a Free Quote"
                    primaryCTALink="/homeowners/get-a-quote"
                    secondaryCTA="Talk to an Expert"
                    secondaryCTALink="/homeowners/get-a-quote"
                    additionalLinks={[
                        { text: "Compare ThermaSkirt vs Radiators", href: "/homeowners/vs/radiators" },
                        { text: "Compare ThermaSkirt vs Underfloor Heating", href: "/homeowners/vs/underfloor-heating" },
                    ]}
                />
            </main>
        </>
    );
}
