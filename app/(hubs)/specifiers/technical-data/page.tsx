import SubHubHero from '@/components/server/SubHubHero';
import AudienceRoutingGrid from '@/components/server/AudienceRoutingGrid';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Technical Data & Compliance | ThermaSkirt Specifiers',
    description: 'Independent test reports, heat output tables, compliance documentation, and scientific analysis for ThermaSkirt radiant heating profiles.',
    alternates: {
        canonical: 'https://www.discreteheat.com/specifiers/technical-data/',
    }
};

export default function TechnicalDataSubHub() {
    const dataLinks = [
        { title: 'Energy House 2.0 Report', description: 'University of Salford independent testing on energy efficiency vs radiators.', href: '/specifiers/technical-data/energy-house-2-report', badge: 'Key Report' },
        { title: 'BSRIA Test Results', description: 'Thermal output and comfort testing to BS EN 442-1 standards.', href: '/specifiers/technical-data/bsria-test-results' },
        { title: 'Output Tables', description: 'Comprehensive Watts/Meter outputs across all profiles and flow temperatures.', href: '/specifiers/technical-data/output-tables' },
        { title: 'Heat Loss Methodology', description: 'Guide to measuring perimeter compensation against DIN EN 12831.', href: '/specifiers/technical-data/heat-loss-methodology' },
        { title: 'Low Temperature Performance', description: 'Analysis of Coefficient of Performance (CoP) advantages with heat pumps.', href: '/specifiers/technical-data/low-temperature-performance' },
        { title: 'Radiant Heat Science', description: 'Comparing radiant mean temperature against high-velocity convection.', href: '/specifiers/technical-data/radiant-heat-science' },
        { title: 'Water Treatment Protocol', description: 'System flushing and dosing requirements to BS 7593 for aluminium emitters.', href: '/specifiers/technical-data/water-treatment-protocol' },
        { title: 'Certifications', description: 'CE marks, BBA certificates, and NHS DHSS DN4 compliance statements.', href: '/specifiers/technical-data/certifications' },
        { title: 'Environmental Data', description: 'Recycled aluminium content, embodied carbon estimates, and lifecycle analysis.', href: '/specifiers/technical-data/environmental-data' },
        { title: 'PAS 2035 & 2030', description: 'Compliance guidance for whole-house retrofit and SHDF funding.', href: '/specifiers/technical-data/pas-2035-pas-2030' },
        { title: 'Future Homes Standard', description: 'Meeting the 2025 carbon reduction targets with low-flow emitters.', href: '/specifiers/technical-data/future-homes-standard' },
        { title: 'Part L Compliance', description: 'Document L SAP calculations and system performance data.', href: '/specifiers/technical-data/part-l-compliance' },
    ];

    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Technical Hub"
                    title="Data-driven"
                    titleHighlight="specification."
                    description="ThermaSkirt is one of the most rigorously tested heating emitters in the UK. Access independent validation from the University of Salford and BSRIA, alongside complete compliance and output data."
                />
                <AudienceRoutingGrid cards={dataLinks} />
            </main>
        </>
    );
}
