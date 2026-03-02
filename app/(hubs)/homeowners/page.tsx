import HomeownerHero from '@/components/server/homeowners/HomeownerHero';
import HomeownerBenefits from '@/components/server/homeowners/HomeownerBenefits';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import TestimonialStrip from '@/components/blocks/TestimonialStrip';
import CTABanner from '@/components/blocks/CTABanner';
import { Gallery4 } from '@/components/blocks/gallery4';
import NavbarMorph from '@/components/client/NavbarMorph';

export default function HomeownersHub() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red">
                <HomeownerHero />
                <ExploreCategorySection
                    heading="Explore ThermaSkirt by Room"
                    description="See how ThermaSkirt transforms real living spaces — freeing up walls, eliminating cold spots, and blending seamlessly into your home's interior."
                    tiles={[
                        { title: 'Living Room', description: 'Reclaim your walls. Heat from every skirting board.', href: '/homeowners/by-room/living-room' },
                        { title: 'Kitchen', description: 'Clean lines, no dust traps, safe surfaces.', href: '/homeowners/by-room/kitchen' },
                        { title: 'Bedroom', description: 'Gentle, silent warmth with no hot surfaces.', href: '/homeowners/by-room/bedroom' },
                        { title: 'Open Plan', description: 'Even comfort across large, connected spaces.', href: '/homeowners/by-room/open-plan' },
                        { title: 'Home Office', description: 'Consistent warmth, zero distractions.', href: '/homeowners/by-room/home-office' },
                        { title: 'Garden Room', description: 'Year-round comfort, no pipework required.', href: '/homeowners/by-room/garden-room' },
                        { title: 'Bathroom', description: 'Warmth where you need it without bulky rails.', href: '/homeowners/by-room/bathroom' },
                    ]}
                />
                <TestimonialStrip
                    quote="Aesthetically, you don't even notice it, it's brilliant. We just got more options really with ThermaSkirt."
                    author="Emma & Dan"
                    tags={['Renovation', 'Gas Boiler']}
                />
                <ExploreCategorySection
                    heading="Explore ThermaSkirt by Heat Source"
                    description="Whether you're switching to a heat pump, keeping your boiler, or going fully electric — ThermaSkirt is engineered to deliver maximum comfort at any flow temperature."
                    tiles={[
                        { title: 'Heat Pump', description: 'Optimised for low-temperature systems from 35°C.', href: '/homeowners/by-heat-source/heat-pump' },
                        { title: 'Gas Boiler', description: 'Works with your existing system, no changes needed.', href: '/homeowners/by-heat-source/gas-boiler' },
                        { title: 'Oil Boiler', description: 'Compatible with any oil-fired wet heating system.', href: '/homeowners/by-heat-source/oil-boiler' },
                        { title: 'Direct Electric', description: 'ThermaSkirt-e: no pipework, no plumber required.', href: '/homeowners/by-heat-source/electric-only' },
                        { title: 'Solar PV & Battery', description: 'Maximise self-consumption with smart electric heating.', href: '/homeowners/by-heat-source/solar-pv-and-battery' },
                    ]}
                />
                <TestimonialStrip
                    quote="The heat is gentle, it's a lovely heat, it's a pleasant heat all the way through all of the skirting boards. There are no restrictions with this heating whatsoever."
                    author="Nick Smith"
                    tags={['New Build SIPs', 'Heat Pump']}
                />
                <ExploreCategorySection
                    heading="Explore ThermaSkirt by Project"
                    description="From full renovations to single-room extensions, ThermaSkirt integrates into any project with minimal disruption and maximum impact."
                    tiles={[
                        { title: 'Renovation', description: 'Upgrade your heating without replastering every wall.', href: '/homeowners/by-project/renovation' },
                        { title: 'Extension', description: 'Heat your new space without extending your ductwork.', href: '/homeowners/by-project/extension' },
                        { title: 'New Build & Self Build', description: 'Specify from day one for a cleaner, smarter build.', href: '/homeowners/by-project/new-build-self-build' },
                        { title: 'Loft Conversion', description: 'Zero headroom loss — heating that follows the walls.', href: '/homeowners/by-project/loft-conversion' },
                        { title: 'Listed Building', description: 'Heritage-sensitive heating that satisfies conservation.', href: '/homeowners/by-project/listed-building' },
                        { title: 'Retrofit', description: 'Make your existing home heat-pump ready.', href: '/homeowners/by-project/retrofit' },
                    ]}
                />
                <TestimonialStrip
                    quote="Heating through a skirting board gives you almost the same surface area you need to heat a room. When you're walking around the room there's no cold spots."
                    author="Heritage Homes"
                    tags={['Developer', 'Heat Pump']}
                />
                <ExploreCategorySection
                    heading="How Does ThermaSkirt Compare?"
                    description="Honest, side-by-side comparisons backed by independent BSRIA testing. See where ThermaSkirt wins — and where alternatives might suit you better."
                    tiles={[
                        { title: 'ThermaSkirt vs Underfloor Heating', description: 'Same comfort, a fraction of the disruption and cost.', href: '/homeowners/vs/underfloor-heating' },
                        { title: 'ThermaSkirt vs Radiators', description: 'Reclaim your walls without sacrificing warmth.', href: '/homeowners/vs/radiators' },
                        { title: 'ThermaSkirt vs Storage Heaters', description: 'Controllable, efficient heat — not yesterday\'s tech.', href: '/homeowners/vs/storage-heaters' },
                        { title: 'ThermaSkirt vs Panel Heaters', description: 'Radiant warmth vs hot air that rises and escapes.', href: '/homeowners/vs/panel-heaters' },
                        { title: 'ThermaSkirt vs Designer Radiators', description: 'Premium aesthetics with better performance.', href: '/homeowners/vs/designer-radiators' },
                    ]}
                />
                <TestimonialStrip
                    quote="We looked at underfloor heating but the cost and disruption were just too much. ThermaSkirt gave us the same even warmth with none of the hassle."
                    author="Verified Homeowner"
                    tags={['Retrofit']}
                />
                <CTABanner
                    heading="Ready to see what ThermaSkirt looks like in your home?"
                    description="Get a free, no-obligation quote with a room-by-room breakdown — or order a free sample to see the quality for yourself."
                    primaryCTA="Get a Free Quote"
                    primaryCTALink="/homeowners/get-a-quote"
                    secondaryCTA="Order a Free Sample"
                    secondaryCTALink="/homeowners/request-a-sample"
                />
                <HomeownerBenefits />
                {/* Reusing Gallery4 for the product range since it matches the layout */}
                <Gallery4
                    title="Our Home Heating Solutions"
                    description="Explore our suite of patented skirting board heating solutions tailored for residential applications. Reclaim your space and maximize comfort."
                />
            </main>
        </>
    );
}
