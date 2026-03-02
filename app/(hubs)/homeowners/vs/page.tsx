import SubHubHero from '@/components/server/SubHubHero';
import AudienceRoutingGrid from '@/components/server/AudienceRoutingGrid';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Compare ThermaSkirt vs Alternatives | Homeowner Guide',
    description: 'Honest, side-by-side comparisons of ThermaSkirt against underfloor heating, traditional radiators, storage heaters, and panel heaters.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/vs/',
    }
};

export default function ComparisonsSubHub() {
    const comparisons = [
        { title: 'vs Underfloor Heating', description: 'The same radiant comfort, but with a fraction of the cost, disruption, and delayed response times.', href: '/homeowners/vs/underfloor-heating', badge: 'Most Popular' },
        { title: 'vs Radiators', description: 'Reclaim your walls, eliminate cold spots, and improve efficiency without resizing for heat pumps.', href: '/homeowners/vs/radiators' },
        { title: 'vs Storage Heaters', description: 'Controllable, efficient, modern electric heating instead of yesterday\'s bulky, unresponsive technology.', href: '/homeowners/vs/storage-heaters' },
        { title: 'vs Panel Heaters', description: 'Even, all-around radiant warmth compared to localised hot air that immediately rises and escapes.', href: '/homeowners/vs/panel-heaters' },
        { title: 'vs Designer Radiators', description: 'Premium, invisible aesthetics that deliver better thermal performance for less investment.', href: '/homeowners/vs/designer-radiators' },
    ];

    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Comparisons"
                    title="How does ThermaSkirt"
                    titleHighlight="stack up?"
                    description="See honest, side-by-side comparisons backed by independent BSRIA testing. Discover where we win, and where alternatives might suit you better."
                />
                <AudienceRoutingGrid cards={comparisons} />
            </main>
        </>
    );
}
