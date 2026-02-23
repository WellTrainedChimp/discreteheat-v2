import HomeownerHero from '@/components/server/homeowners/HomeownerHero';
import HomeownerRouting from '@/components/server/homeowners/HomeownerRouting';
import HomeownerTestimonials from '@/components/server/homeowners/HomeownerTestimonials';
import HomeownerBenefits from '@/components/server/homeowners/HomeownerBenefits';
import { Gallery4 } from '@/components/blocks/gallery4';
import NavbarMorph from '@/components/client/NavbarMorph';

export default function HomeownersHub() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red">
                <HomeownerHero />
                <HomeownerRouting />
                <HomeownerTestimonials />
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
