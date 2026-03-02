import SubHubHero from '@/components/server/SubHubHero';
import AudienceRoutingGrid from '@/components/server/AudienceRoutingGrid';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Heating by Heat Source | ThermaSkirt',
    description: 'Whether you use a gas boiler, an air source heat pump, or solar PV, ThermaSkirt is optimised to deliver efficient radiant heat from any source.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/by-heat-source/',
    }
};

export default function ByHeatSourceSubHub() {
    const sources = [
        { title: 'Heat Pump', description: 'Optimised for low-temperature systems from 35°C to maximise COP.', href: '/homeowners/by-heat-source/heat-pump', badge: 'Most Popular' },
        { title: 'Gas Boiler', description: 'Works beautifully with your existing system, no major changes needed.', href: '/homeowners/by-heat-source/gas-boiler' },
        { title: 'Oil Boiler', description: 'Compatible with any high-temperature oil-fired wet heating system.', href: '/homeowners/by-heat-source/oil-boiler' },
        { title: 'Electric Only', description: 'ThermaSkirt-e: direct electric heating with no pipework or plumbing required.', href: '/homeowners/by-heat-source/electric-only' },
        { title: 'Solar PV & Battery', description: 'Maximise self-consumption with smart, responsive electric heating.', href: '/homeowners/by-heat-source/solar-pv-and-battery' },
        { title: 'No Central Heating', description: 'Stand-alone electric solutions for homes without existing wet systems.', href: '/homeowners/by-heat-source/no-central-heating' },
    ];

    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Heat Sources"
                    title="Engineered for"
                    titleHighlight="any fuel."
                    description="Whether you're holding onto your reliable combi boiler, transitioning to a heat pump, or going fully electric, ThermaSkirt guarantees maximum performance."
                />
                <AudienceRoutingGrid cards={sources} />
            </main>
        </>
    );
}
