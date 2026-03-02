import SubHubHero from '@/components/server/SubHubHero';
import AudienceRoutingGrid from '@/components/server/AudienceRoutingGrid';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Specification Support & Services | ThermaSkirt',
    description: 'Comprehensive support for M&E consultants, architects, and specifiers. Includes free heat loss scheduling, CAD design, NBS clauses, and BSRIA compliance data.',
    alternates: {
        canonical: 'https://www.discreteheat.com/specifiers/specification-support/',
    }
};

export default function SpecificationSupportSubHub() {
    const supportLinks = [
        { title: 'Specification Wording (NBS & Tender)', description: 'Pre-written CAWS / Uniclass NBS clauses and exact performance specifications to prevent value-engineering substitutions.', href: '/specifiers/specification-support/specification-wording', badge: 'Key Resource' },
        { title: 'M&E Design Service', description: 'Free room-by-room heat loss schedules, marked-up DWG floorplans, and manifold plumbing layouts.', href: '/specifiers/specification-support/design-service' },
        { title: 'SHDF Documentation', description: 'PAS 2035 compliance packs, environmental impact data, and carbon reduction forecasts for funding bids.', href: '/specifiers/specification-support/shdf-documentation' },
        { title: 'Framework Access', description: 'Sourcing ThermaSkirt through pre-qualified public sector procurement frameworks (Fusion21, CHIC, Procure Partnerships).', href: '/specifiers/specification-support/framework-access' },
        { title: 'Request a CPD', description: 'Book our CIBSE-approved "Low Flow Radiance" engineering CPD session for your mechanical practice.', href: '/specifiers/specification-support/request-a-cpd' },
    ];

    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Consulting Services"
                    title="Seamless"
                    titleHighlight="project integration."
                    description="We act as a direct extension to your M&E and architectural teams. Rely on our in-house engineers to handle the complex thermal modelling, CAD layouts, and compliance documentation."
                />
                <AudienceRoutingGrid cards={supportLinks} />
            </main>
        </>
    );
}
