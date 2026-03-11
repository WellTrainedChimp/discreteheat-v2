import SubHubHero from '@/components/server/SubHubHero';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Skirting Board Heating by Room | ThermaSkirt',
    description: 'Explore how ThermaSkirt radiant skirting board heating transforms different rooms in your home—from living rooms to kitchens and home offices.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/by-room/',
    },
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=2a3a5535-6119-4b26-b66f-263eecc7eb5a', width: 1200, height: 630, alt: 'Skirting Board Heating by Room | ThermaSkirt' }],
    },
};

export default function ByRoomSubHub() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Explore Rooms"
                    title="Heating designed for"
                    titleHighlight="how you live."
                    description="Whether you're struggling to place a sofa, dreading cold morning floors, or trying to create a minimalist layout, ThermaSkirt adapts to the unique demands of every room."
                />
                <ExploreCategorySection
                    heading="Explore ThermaSkirt by Room"
                    description="See how ThermaSkirt transforms real living spaces — freeing up walls, eliminating cold spots, and blending seamlessly into your home's interior."
                    tiles={[
                        { title: 'Living Room', description: 'Reclaim your walls. Heat from every skirting board.', href: '/homeowners/by-room/living-room', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=c4910a9c-abf2-4a05-8584-3f8aab246542' },
                        { title: 'Bedroom', description: 'Gentle, silent warmth with no hot surfaces.', href: '/homeowners/by-room/bedroom', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=c287107e-ac14-4abc-b282-8676388df56c' },
                        { title: 'Kitchen', description: 'Clean lines, no dust traps, safe surfaces.', href: '/homeowners/by-room/kitchen', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=30b410f8-469f-4737-b11c-e431ff5d8869' },
                        { title: 'Home Office', description: 'Consistent warmth, zero distractions.', href: '/homeowners/by-room/home-office', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=29b46b07-bb05-466b-a825-a3e9d1411cfd' },
                        { title: 'Open Plan', description: 'Even comfort across large, connected spaces.', href: '/homeowners/by-room/open-plan', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=ae52252a-9018-4898-bea9-51eb467c72f3' },
                        { title: 'Garden Room', description: 'Year-round comfort, no pipework required.', href: '/homeowners/by-room/garden-room', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=a49fd4fb-7b74-4cad-8310-3f7a2050fcbe' },
                        { title: 'Bathroom', description: 'Warmth where you need it without bulky rails.', href: '/homeowners/by-room/bathroom', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=ea0ba0b5-d456-422e-a0a0-30c30f20c8b3' },
                    ]}
                />
            </main>
        </>
    );
}
