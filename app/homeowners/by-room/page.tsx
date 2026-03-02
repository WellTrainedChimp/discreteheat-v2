import SubHubHero from '@/components/server/SubHubHero';
import AudienceRoutingGrid from '@/components/server/AudienceRoutingGrid';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Skirting Board Heating by Room | ThermaSkirt',
    description: 'Explore how ThermaSkirt radiant skirting board heating transforms different rooms in your home—from living rooms to kitchens and home offices.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/by-room/',
    }
};

export default function ByRoomSubHub() {
    const rooms = [
        { title: 'Living Room', description: 'Reclaim your walls. Heat from every skirting board.', href: '/homeowners/by-room/living-room', badge: 'Most Popular' },
        { title: 'Bedroom', description: 'Gentle, silent warmth with no hot surfaces.', href: '/homeowners/by-room/bedroom' },
        { title: 'Kitchen', description: 'Clean lines, no dust traps, safe surfaces.', href: '/homeowners/by-room/kitchen' },
        { title: 'Home Office', description: 'Consistent warmth, zero distractions.', href: '/homeowners/by-room/home-office' },
        { title: 'Open Plan', description: 'Even comfort across large, connected spaces.', href: '/homeowners/by-room/open-plan' },
        { title: 'Garden Room', description: 'Year-round comfort, no pipework required.', href: '/homeowners/by-room/garden-room' },
        { title: 'Bathroom', description: 'Warmth where you need it without bulky rails.', href: '/homeowners/by-room/bathroom' },
    ];

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
                <AudienceRoutingGrid cards={rooms} />
            </main>
        </>
    );
}
