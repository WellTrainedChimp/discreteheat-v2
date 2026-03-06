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
                        { title: 'Living Room', description: 'Reclaim your walls. Heat from every skirting board.', href: '/homeowners/by-room/living-room', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=5ab1cb76-1c03-4972-8e09-f4c860af75a2' },
                        { title: 'Kitchen', description: 'Clean lines, no dust traps, safe surfaces.', href: '/homeowners/by-room/kitchen', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=6543a2a1-5df3-4243-920a-a28695202b5c' },
                        { title: 'Bedroom', description: 'Gentle, silent warmth with no hot surfaces.', href: '/homeowners/by-room/bedroom', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=f4392cc9-8b63-40ec-9dc1-6b64d6bbad99' },
                        { title: 'Open Plan', description: 'Even comfort across large, connected spaces.', href: '/homeowners/by-room/open-plan', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=c90bc102-e0ba-403e-903d-27271aaa9d47' },
                        { title: 'Home Office', description: 'Consistent warmth, zero distractions.', href: '/homeowners/by-room/home-office', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=765102a4-e35d-4de1-8378-7c5f167bc370' },
                        { title: 'Garden Room', description: 'Year-round comfort, no pipework required.', href: '/homeowners/by-room/garden-room', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=a49fd4fb-7b74-4cad-8310-3f7a2050fcbe' },
                        { title: 'Bathroom', description: 'Warmth where you need it without bulky rails.', href: '/homeowners/by-room/bathroom', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=ea0ba0b5-d456-422e-a0a0-30c30f20c8b3' },
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
                        { title: 'Heat Pump', description: 'Optimised for low-temperature systems from 35°C.', href: '/homeowners/by-heat-source/heat-pump', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=269a8897-7f6d-48dd-a7af-135fa33458c2' },
                        { title: 'Gas Boiler', description: 'Works with your existing system, no changes needed.', href: '/homeowners/by-heat-source/gas-boiler', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=7b71cedd-1298-4b80-b7aa-980e14d782e9' },
                        { title: 'Oil Boiler', description: 'Compatible with any oil-fired wet heating system.', href: '/homeowners/by-heat-source/oil-boiler', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=55be34a3-ca35-4d03-9023-e4dd05bd8d51' },
                        { title: 'Direct Electric', description: 'ThermaSkirt-e: no pipework, no plumber required.', href: '/homeowners/by-heat-source/electric-only', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=7f158087-624d-44eb-8ab7-1c885002c85f' },
                        { title: 'Solar PV & Battery', description: 'Maximise self-consumption with smart electric heating.', href: '/homeowners/by-heat-source/solar-pv-and-battery', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=15e75530-52ce-4253-a215-5a2c35061cec' },
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
                        { title: 'Renovation', description: 'Upgrade your heating without replastering every wall.', href: '/homeowners/by-project/renovation', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=73a96248-a688-4f7d-8200-d8cb2cdd51f2' },
                        { title: 'Extension', description: 'Heat your new space without extending your ductwork.', href: '/homeowners/by-project/extension', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=1fdc96be-5d12-4474-a646-01d0658fea19' },
                        { title: 'New Build & Self Build', description: 'Specify from day one for a cleaner, smarter build.', href: '/homeowners/by-project/new-build-self-build', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=9901fbfb-e118-456e-bc18-56fd8589fa4f' },
                        { title: 'Loft Conversion', description: 'Zero headroom loss — heating that follows the walls.', href: '/homeowners/by-project/loft-conversion', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=136095fe-c8ce-46dd-8d57-b263ce1dd7f3' },
                        { title: 'Listed Building', description: 'Heritage-sensitive heating that satisfies conservation.', href: '/homeowners/by-project/listed-building', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=22cba92b-7d84-48aa-97eb-c8a051d7e58d' },
                        { title: 'Retrofit', description: 'Make your existing home heat-pump ready.', href: '/homeowners/by-project/retrofit', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=cd592def-8215-4c78-aa4c-b0fdb75819d4' },
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
                        { title: 'ThermaSkirt vs Underfloor Heating', description: 'Same comfort, a fraction of the disruption and cost.', href: '/homeowners/vs/underfloor-heating', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=b7bfc53f-8269-4e45-82f0-473b4bc30c11' },
                        { title: 'ThermaSkirt vs Radiators', description: 'Reclaim your walls without sacrificing warmth.', href: '/homeowners/vs/radiators', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=9567dbe1-3e38-4b02-abff-ef9cd35115ef' },
                        { title: 'ThermaSkirt vs Storage Heaters', description: 'Controllable, efficient heat — not yesterday\'s tech.', href: '/homeowners/vs/storage-heaters', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=45eea947-d587-44ec-8686-5a7ed24f6e42' },
                        { title: 'ThermaSkirt vs Panel Heaters', description: 'Radiant warmth vs hot air that rises and escapes.', href: '/homeowners/vs/panel-heaters', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=3b32ebd6-efc2-4647-a1ae-ec6031502166' },
                        { title: 'ThermaSkirt vs Designer Radiators', description: 'Premium aesthetics with better performance.', href: '/homeowners/vs/designer-radiators', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=35bab5ca-1acb-49be-bc55-df357606b0b5' },
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
