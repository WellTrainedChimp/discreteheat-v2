import SubHubHero from '@/components/server/SubHubHero';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Skirting Board Heating by Project | ThermaSkirt',
    description: 'Find out how ThermaSkirt fits into your specific home improvement project, from simple retrofits to comprehensive self-builds and extensions.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/by-project/',
    },
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=c287107e-ac14-4abc-b282-8676388df56c', width: 1200, height: 630, alt: 'Skirting Board Heating by Project | ThermaSkirt' }],
    },
};

export default function ByProjectSubHub() {
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
                <ExploreCategorySection
                    heading="Explore ThermaSkirt by Project"
                    description="From full renovations to single-room extensions, ThermaSkirt integrates into any project with minimal disruption and maximum impact."
                    tiles={[
                        { title: 'Retrofit', description: 'Make your existing home heat-pump ready without tearing up floors.', href: '/homeowners/by-project/retrofit', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=cd592def-8215-4c78-aa4c-b0fdb75819d4' },
                        { title: 'Extension', description: 'Heat your new space without extending your ductwork or lifting floorboards.', href: '/homeowners/by-project/extension', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=1fdc96be-5d12-4474-a646-01d0658fea19' },
                        { title: 'Renovation', description: 'Upgrade your heating seamlessly while refreshing your interiors.', href: '/homeowners/by-project/renovation', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=73a96248-a688-4f7d-8200-d8cb2cdd51f2' },
                        { title: 'New Build & Self Build', description: 'Specify from day one for a cleaner, smarter, and faster build.', href: '/homeowners/by-project/new-build', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=9901fbfb-e118-456e-bc18-56fd8589fa4f' },
                        { title: 'Loft Conversion', description: 'Zero headroom loss — heating that follows the walls perfectly.', href: '/homeowners/by-project/loft-conversion', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=136095fe-c8ce-46dd-8d57-b263ce1dd7f3' },
                        { title: 'Basement Conversion', description: 'Comfortable, dry radiant heat for subterranean spaces.', href: '/homeowners/by-project/basement-conversion' },
                        { title: 'Listed Building', description: 'Heritage-sensitive heating that satisfies conservation officers.', href: '/homeowners/by-project/listed-building', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=22cba92b-7d84-48aa-97eb-c8a051d7e58d' },
                        { title: 'Garden Room', description: 'Fast, electric-only or wet system heating for outdoor spaces.', href: '/homeowners/by-room/garden-room', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=a49fd4fb-7b74-4cad-8310-3f7a2050fcbe' },
                    ]}
                />
            </main>
        </>
    );
}
