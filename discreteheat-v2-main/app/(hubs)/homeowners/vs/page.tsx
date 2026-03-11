import SubHubHero from '@/components/server/SubHubHero';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import CaseStudySection from '@/components/blocks/CaseStudySection';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Compare ThermaSkirt vs Alternatives | Homeowner Guide',
    description: 'Honest, side-by-side comparisons of ThermaSkirt against underfloor heating, traditional radiators, storage heaters, and panel heaters.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/vs/',
    },
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=328b67ed-7ad0-42ad-87be-2cf17718c48e', width: 1200, height: 630, alt: 'Compare ThermaSkirt vs Alternatives | Homeowner Guide' }],
    },
};

const comparisonRows = [
    {
        feature: 'Space Saving',
        radiators: { pass: false, text: 'Dictates furniture layout' },
        thermaskirt: { pass: true, text: 'Frees 100% of wall space' },
        ufh: { pass: true, text: 'Invisible — no wall fixtures' },
    },
    {
        feature: 'Heat Pump Compatible',
        radiators: { pass: false, text: 'Needs oversized panels' },
        thermaskirt: { pass: true, text: 'Designed for 35\u201345\u00b0C' },
        ufh: { pass: true, text: 'Designed for 35\u201345\u00b0C' },
    },
    {
        feature: 'Retrofittable',
        radiators: { pass: true, text: 'Like-for-like swap' },
        thermaskirt: { pass: true, text: '1\u20132 day install, no floor work' },
        ufh: { pass: false, text: 'Requires lifting floors or raising levels' },
    },
    {
        feature: 'Existing Pipework',
        radiators: { pass: true, text: 'Standard 15mm connections' },
        thermaskirt: { pass: true, text: 'Standard 15mm or 10mm' },
        ufh: { pass: false, text: 'Needs new manifold and loops' },
    },
    {
        feature: 'Any Floor Covering',
        radiators: { pass: true, text: 'Not affected by flooring' },
        thermaskirt: { pass: true, text: 'Not affected by flooring' },
        ufh: { pass: false, text: 'Thick carpet blocks heat' },
    },
    {
        feature: 'Hygienic',
        radiators: { pass: false, text: 'Traps dust in convector fins' },
        thermaskirt: { pass: true, text: 'Smooth wipe-clean surface' },
        ufh: { pass: true, text: 'No dust traps' },
    },
    {
        feature: 'Fast Response',
        radiators: { pass: true, text: '10\u201315 minutes' },
        thermaskirt: { pass: true, text: '5 minutes' },
        ufh: { pass: false, text: '1\u20133 hours (thermal mass)' },
    },
];

const tableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    mainEntity: {
        '@type': 'Table',
        about: 'Comparison of ThermaSkirt skirting board heating vs radiators vs underfloor heating',
        description:
            'Side-by-side comparison across 7 key criteria: space saving, heat pump compatibility, retrofittability, existing pipework, floor covering compatibility, hygiene, and heating response time.',
    },
};

export default function ComparisonsSubHub() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Comparisons"
                    title="How does ThermaSkirt"
                    titleHighlight="stack up?"
                    description="See honest, side-by-side comparisons backed by independent BSRIA testing. Discover where we win, and where alternatives might suit you better."
                    imageSrc="https://www.discreteheat.com/MediaHandler.ashx?id=14e646d1-52e3-4d30-ad5d-6ebbd9fb1bb1"
                    imageAlt="ThermaSkirt skirting board heating installed in a modern home"
                />

                {/* ── SEO Comparison Summary Table ── */}
                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-light text-dh-dark mb-4 tracking-tight">
                            Heating System Comparison at a Glance
                        </h2>
                        <p className="text-lg text-dh-grey leading-relaxed mb-10">
                            How does ThermaSkirt compare to the two most common heating systems in the UK? This summary covers the criteria that matter most when choosing an emitter for a renovation, new build, or heat pump upgrade.
                        </p>

                        <div className="overflow-x-auto -mx-6 px-6">
                            <table className="w-full min-w-[640px] border-collapse text-left">
                                <caption className="sr-only">
                                    Comparison of Radiators, ThermaSkirt, and Underfloor Heating across seven key criteria including space saving, heat pump compatibility, retrofit suitability, existing pipework, floor covering flexibility, hygiene, and response time.
                                </caption>
                                <thead>
                                    <tr className="border-b-2 border-dh-dark/10">
                                        <th scope="col" className="py-4 pr-4 text-sm font-semibold uppercase tracking-wider text-dh-grey">
                                            Feature
                                        </th>
                                        <th scope="col" className="py-4 px-4 text-sm font-semibold uppercase tracking-wider text-dh-grey">
                                            Radiators
                                        </th>
                                        <th scope="col" className="py-4 px-4 text-sm font-semibold uppercase tracking-wider text-dh-red">
                                            ThermaSkirt
                                        </th>
                                        <th scope="col" className="py-4 pl-4 text-sm font-semibold uppercase tracking-wider text-dh-grey">
                                            Underfloor Heating
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonRows.map((row) => (
                                        <tr key={row.feature} className="border-b border-dh-dark/5 last:border-b-0">
                                            <th scope="row" className="py-4 pr-4 text-[15px] font-medium text-dh-dark align-top">
                                                {row.feature}
                                            </th>
                                            <td className="py-4 px-4 text-[15px] align-top text-dh-grey">
                                                <span aria-hidden="true" className={row.radiators.pass ? 'text-emerald-600' : 'text-rose-500'}>{row.radiators.pass ? '\u2713' : '\u2717'}</span>{' '}
                                                {row.radiators.text}
                                            </td>
                                            <td className="py-4 px-4 text-[15px] align-top font-medium text-dh-dark">
                                                <span aria-hidden="true" className={row.thermaskirt.pass ? 'text-emerald-600' : 'text-rose-500'}>{row.thermaskirt.pass ? '\u2713' : '\u2717'}</span>{' '}
                                                {row.thermaskirt.text}
                                            </td>
                                            <td className="py-4 pl-4 text-[15px] align-top text-dh-grey">
                                                <span aria-hidden="true" className={row.ufh.pass ? 'text-emerald-600' : 'text-rose-500'}>{row.ufh.pass ? '\u2713' : '\u2717'}</span>{' '}
                                                {row.ufh.text}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <p className="text-md font-medium text-dh-grey mt-6">
                            ThermaSkirt is the only emitter that scores positively across all seven criteria — combining the invisible aesthetics of underfloor heating with the retrofit simplicity of radiators.
                        </p>
                    </div>

                    {/* JSON-LD structured data for AI scrapers and search engines */}
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(tableSchema) }}
                    />
                </section>

                {/* ── Comparison Directory Carousel ── */}
                <ExploreCategorySection
                    heading="How Does ThermaSkirt Compare?"
                    description="Honest, side-by-side comparisons backed by independent BSRIA testing. See where ThermaSkirt wins — and where alternatives might suit you better."
                    tiles={[
                        { title: 'ThermaSkirt vs Underfloor Heating', description: 'Same comfort, a fraction of the disruption and cost.', href: '/homeowners/vs/underfloor-heating', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=b7bfc53f-8269-4e45-82f0-473b4bc30c11' },
                        { title: 'ThermaSkirt vs Radiators', description: 'Reclaim your walls without sacrificing warmth.', href: '/homeowners/vs/radiators', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=9567dbe1-3e38-4b02-abff-ef9cd35115ef' },
                        { title: 'ThermaSkirt vs Storage Heaters', description: 'Controllable, efficient heat — not yesterday\'s tech.', href: '/homeowners/vs/storage-heaters', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=45eea947-d587-44ec-8686-5a7ed24f6e42' },
                        { title: 'ThermaSkirt vs Panel Heaters', description: 'Radiant warmth vs hot air that rises and escapes.', href: '/homeowners/vs/panel-heaters', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=3b32ebd6-efc2-4647-a1ae-ec6031502166' },
                        { title: 'ThermaSkirt vs Designer Radiators', description: 'Premium aesthetics with better performance.', href: '/homeowners/vs/designer-radiators', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=35bab5ca-1acb-49be-bc55-df357606b0b5' },
                    ]}
                />

                {/* ── Case Study (directory-last) ── */}
                <CaseStudySection
                    heading="It's Not All or Nothing"
                    description="Emma and Dan's 1970s bungalow renovation proves you don't have to choose a single heating system. They used underfloor heating on the ground floor extension and ThermaSkirt throughout the entire upper storey — all running from the same gas boiler. The result: radiant comfort everywhere, installed in a fraction of the time."
                    mediaId="888x825p0o"
                    caption="Emma & Dan's whole-house renovation — ThermaSkirt upstairs, UFH downstairs, one boiler."
                />
            </main>
        </>
    );
}
