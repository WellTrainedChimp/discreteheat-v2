import SubHubHero from '@/components/server/SubHubHero';
import AudienceRoutingGrid from '@/components/server/AudienceRoutingGrid';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'ThermaSkirt Sector Applications | Specifiers',
    description: 'Explore how ThermaSkirt is specified across healthcare, social housing, education, new build residential, and listed buildings. Independent performance data and compliance notes.',
    alternates: {
        canonical: 'https://www.discreteheat.com/specifiers/applications/',
    },
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=988cff79-37a3-45fa-9a3d-aef77c978702', width: 1200, height: 630, alt: 'ThermaSkirt Sector Applications | Specifiers' }],
    },
};

export default function ApplicationsSubHub() {
    const sectors = [
        { title: 'Healthcare', description: 'Infection control, anti-ligature, low surface temperature. NHS-validated.', href: '/specifiers/applications/healthcare', badge: 'High Spec' },
        { title: 'Social & Landlord Housing', description: 'PAS 2035 compliant. SHDF-ready. Occupied retrofit disruption reduction.', href: '/specifiers/applications/social-housing' },
        { title: 'Residential New Build', description: 'Future Homes Standard compliant. Streamlined site programme.', href: '/specifiers/applications/new-build-residential' },
        { title: 'Education & Student Accommodation', description: 'Safe surface temperatures, anti-tamper, and space-efficient.', href: '/specifiers/applications/education-and-student-accommodation' },
        { title: 'Listed Buildings', description: 'Heritage-sensitive profile. Preserves architectural proportions.', href: '/specifiers/applications/listed-buildings' },
    ];

    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Sector Applications"
                    title="Engineered for"
                    titleHighlight="critical environments."
                    description="From NHS mental health wards requiring anti-ligature certification to social housing retrofit programmes demanding PAS 2035 compliance, ThermaSkirt meets strict specification criteria."
                />
                <AudienceRoutingGrid cards={sectors} />
            </main>
        </>
    );
}
