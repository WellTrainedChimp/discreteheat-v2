import SubHubHero from '@/components/server/SubHubHero';
import AudienceRoutingGrid from '@/components/server/AudienceRoutingGrid';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Skirting Board Heating by Project | ThermaSkirt',
    description: 'Find out how ThermaSkirt fits into your specific home improvement project, from simple retrofits to comprehensive self-builds and extensions.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/by-project/',
    }
};

export default function ByProjectSubHub() {
    const projects = [
        { title: 'Retrofit', description: 'Make your existing home heat-pump ready without tearing up floors.', href: '/homeowners/by-project/retrofit', badge: 'Most Popular' },
        { title: 'Extension', description: 'Heat your new space without extending your ductwork or lifting floorboards.', href: '/homeowners/by-project/extension' },
        { title: 'Renovation', description: 'Upgrade your heating seamlessly while refreshing your interiors.', href: '/homeowners/by-project/renovation' },
        { title: 'New Build & Self Build', description: 'Specify from day one for a cleaner, smarter, and faster build.', href: '/homeowners/by-project/new-build' },
        { title: 'Loft Conversion', description: 'Zero headroom loss — heating that follows the walls perfectly.', href: '/homeowners/by-project/loft-conversion' },
        { title: 'Basement Conversion', description: 'Comfortable, dry radiant heat for subterranean spaces.', href: '/homeowners/by-project/basement-conversion' },
        { title: 'Listed Building', description: 'Heritage-sensitive heating that satisfies conservation officers.', href: '/homeowners/by-project/listed-building' },
        { title: 'Garden Room', description: 'Fast, electric-only or wet system heating for outdoor spaces.', href: '/homeowners/by-room/garden-room' },
    ];

    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Explore Projects"
                    title="Seamless integration for"
                    titleHighlight="any project."
                    description="From weekend DIY retrofits to grand designs, ThermaSkirt installs faster and with less disruption than underfloor heating or traditional radiators."
                />
                <AudienceRoutingGrid cards={projects} />
            </main>
        </>
    );
}
