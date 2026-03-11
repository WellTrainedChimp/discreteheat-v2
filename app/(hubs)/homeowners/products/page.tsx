import SubHubHero from '@/components/server/SubHubHero';
import AudienceRoutingGrid from '@/components/server/AudienceRoutingGrid';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Our Products | ThermaSkirt Home Heating',
    description: 'Explore the full range of ThermaSkirt skirting board heating products for your home, including water-based, electric, and curved profile options.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/products/',
    }
};

export default function HomeownerProductsHub() {
    const products = [
        { title: 'ThermaSkirt H2O', description: 'Our core water-based system. Works with your existing boiler or a new heat pump — no changes to your plumbing needed.', href: '/homeowners/products/thermaskirt-h2o', badge: 'Most Popular' },
        { title: 'ThermaSkirt e', description: 'The electric alternative. No pipework, no plumber — just plug-and-heat comfort for any room.', href: '/homeowners/products/thermaskirt-e' },
        { title: 'EasyClean', description: 'A smooth, wipe-clean profile designed for hygiene-sensitive environments. Safe, sealed, and easy to maintain.', href: '/homeowners/products/easyclean' },
        { title: 'ThermaCurve', description: 'Bespoke curved sections that follow bay windows and architectural features seamlessly.', href: '/homeowners/products/thermacurve' },
    ];

    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Product Range"
                    title="Heating that looks like"
                    titleHighlight="skirting board."
                    description="Every ThermaSkirt product is engineered to replace your standard skirting board with a high-performance heating system. Choose the right product for your home, your heat source, and your lifestyle."
                />
                <AudienceRoutingGrid cards={products} />
            </main>
        </>
    );
}
