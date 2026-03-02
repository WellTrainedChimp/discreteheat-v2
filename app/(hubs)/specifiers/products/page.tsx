import SubHubHero from '@/components/server/SubHubHero';
import AudienceRoutingGrid from '@/components/server/AudienceRoutingGrid';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Products for Specification | ThermaSkirt',
    description: 'Explore the full range of ThermaSkirt radiant skirting board heating profiles, including water-based, electric, healthcare, and retrofit supplementary systems.',
    alternates: {
        canonical: 'https://www.discreteheat.com/specifiers/products/',
    }
};

export default function SpecifierProductsSubHub() {
    const products = [
        { title: 'ThermaSkirt H₂O', description: 'Hydronic radiant skirting. BM2 (114mm) and BM3 (170mm) profiles. 35–75°C operating range.', href: '/specifiers/products/thermaskirt-h2o', badge: 'High Volume' },
        { title: 'ThermaSkirt-e', description: 'Direct electric infrared. Self-regulating element. 100% efficient at point of use.', href: '/specifiers/products/thermaskirt-e' },
        { title: 'EasyClean LST', description: 'Anti-ligature, anti-tamper clinical profile. NHS-validated for mental health environments.', href: '/specifiers/products/easyclean', badge: 'Healthcare' },
        { title: 'ThermaCurve', description: 'Electric infrared coving at ceiling/wall junction. Ideal where skirting installation is not feasible.', href: '/specifiers/products/thermacurve' },
        { title: 'Add2Rad', description: 'Retrofit emitter supplement. Connects in series to existing radiator tails for heat pump readiness.', href: '/specifiers/products/add2rad' },
        { title: 'Kitchen Plinth', description: '115mm colour-matched plinth profile for beneath kitchen units. Hydronic connection.', href: '/specifiers/products/kitchen-plinth' },
    ];

    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Product Range"
                    title="Precision-engineered"
                    titleHighlight="heating profiles."
                    description="Our continuous extruded aluminium profiles deliver highly responsive radiant heat. Select a product to view specific thermal output data, BIM models, NBS clauses, and test certificates."
                />
                <AudienceRoutingGrid cards={products} />
            </main>
        </>
    );
}
