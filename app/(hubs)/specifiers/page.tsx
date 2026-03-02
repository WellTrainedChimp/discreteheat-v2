import SpecifierHero from '@/components/server/specifiers/SpecifierHero';
import SpecifierFeatures from '@/components/server/specifiers/SpecifierFeatures';
import SpecifierRouting from '@/components/server/specifiers/SpecifierRouting';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import CTABanner from '@/components/blocks/CTABanner';
import ProofBar from '@/components/server/ProofBar';
import NavbarMorph from '@/components/client/NavbarMorph';

export default function SpecifiersHub() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red">
                <SpecifierHero />
                <ProofBar />

                <ExploreCategorySection
                    heading="Sector Applications"
                    description="ThermaSkirt is specified across healthcare, social housing, education, defence, and commercial sectors. Each application page includes product recommendations, performance data at relevant flow temperatures, compliance notes, and downloadable specification resources."
                    tiles={[
                        { title: 'Healthcare', description: 'Infection control, anti-ligature, low surface temperature. NHS-validated EasyClean profile.', href: '/specifiers/applications/healthcare' },
                        { title: 'Social & Landlord Housing', description: 'PAS 2035 compliant. SHDF-ready. 75% disruption reduction in occupied retrofit.', href: '/specifiers/applications/social-housing' },
                        { title: 'Residential New Build', description: 'Future Homes Standard compliant. Two profiles replace 450+ radiator SKUs.', href: '/specifiers/applications/new-build-residential' },
                        { title: 'Education & Student Accommodation', description: 'Safe surface temperatures, anti-tamper, space-efficient. RoSPA impact data.', href: '/specifiers/applications/education-and-student-accommodation' },
                        { title: 'Listed Buildings', description: 'Heritage-sensitive profile. Preserves proportions and sightlines.', href: '/specifiers/applications/listed-buildings' },
                    ]}
                />

                <ExploreCategorySection
                    heading="Product Range"
                    description="Five product lines covering wet, electric, healthcare, and retrofit supplementary applications. All profiles are 20mm deep, powder-coated aluminium, and manufactured from approximately 75% recycled content. CE marked to BS EN 442-1."
                    tiles={[
                        { title: 'ThermaSkirt H₂O', description: 'Hydronic radiant skirting. BM2 (114mm) and BM3 (170mm) profiles. 35–75°C operating range.', href: '/specifiers/products/thermaskirt-h2o' },
                        { title: 'ThermaSkirt-e', description: 'Direct electric infrared. Self-regulating element. No transformers or wiring centres. BS 7671 compliant.', href: '/specifiers/products/thermaskirt-e' },
                        { title: 'EasyClean LST', description: 'Sealed hygiene capping over BM2/BM3. Anti-ligature, anti-tamper. Anti-microbial coating option.', href: '/specifiers/products/easyclean' },
                        { title: 'ThermaCurve', description: 'Electric infrared coving at ceiling/wall junction. For spaces where skirting installation is not feasible.', href: '/specifiers/products/thermacurve' },
                        { title: 'Add2Rad', description: 'Retrofit emitter supplement. Connects in series to existing radiator tails. Up to 90W/m at 45°C flow.', href: '/specifiers/products/add2rad' },
                        { title: 'Kitchen Plinth', description: '115mm colour-matched plinth profile for beneath kitchen units. Hydronic connection.', href: '/specifiers/products/kitchen-plinth' },
                    ]}
                />

                <CTABanner
                    heading="Ready to specify ThermaSkirt?"
                    description="Our specification team provides heat loss calculations, room-by-room design, marked-up floorplans, NBS clauses, and full BSRIA test documentation. CIBSE CPD sessions available online and in-person."
                    primaryCTA="Request Specification Support"
                    primaryCTALink="/specifiers/specification-support/design-service"
                    secondaryCTA="Book a CIBSE CPD"
                    secondaryCTALink="/specifiers/cpd"
                />

                <SpecifierFeatures />

                {/* 4-tile resource grid moved below carousels */}
                <SpecifierRouting />
            </main>
        </>
    );
}
