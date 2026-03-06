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
                        { title: 'Healthcare', description: 'Infection control, anti-ligature, low surface temperature. NHS-validated EasyClean profile.', href: '/specifiers/applications/healthcare', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=0c3ebdd3-f2d0-4fdb-a638-72dc12805e32' },
                        { title: 'Social & Landlord Housing', description: 'PAS 2035 compliant. SHDF-ready. 75% disruption reduction in occupied retrofit.', href: '/specifiers/applications/social-housing', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=988cff79-37a3-45fa-9a3d-aef77c978702' },
                        { title: 'Residential New Build', description: 'Future Homes Standard compliant. Two profiles replace 450+ radiator SKUs.', href: '/specifiers/applications/new-build-residential', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=5ab1cb76-1c03-4972-8e09-f4c860af75a2' },
                        { title: 'Education & Student Accommodation', description: 'Safe surface temperatures, anti-tamper, space-efficient. RoSPA impact data.', href: '/specifiers/applications/education-and-student-accommodation', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=63461923-ef3c-40b7-a255-7830718fd27e' },
                        { title: 'Listed Buildings', description: 'Heritage-sensitive profile. Preserves proportions and sightlines.', href: '/specifiers/applications/listed-buildings', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=2a3a5535-6119-4b26-b66f-263eecc7eb5a' },
                    ]}
                />

                <ExploreCategorySection
                    heading="Product Range"
                    description="Five product lines covering wet, electric, healthcare, and retrofit supplementary applications. All profiles are 20mm deep, powder-coated aluminium, and manufactured from approximately 75% recycled content. CE marked to BS EN 442-1."
                    tiles={[
                        { title: 'ThermaSkirt H₂O', description: 'Hydronic radiant skirting. BM2 (114mm) and BM3 (170mm) profiles. 35–75°C operating range.', href: '/specifiers/products/thermaskirt-h2o', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=c287107e-ac14-4abc-b282-8676388df56c' },
                        { title: 'ThermaSkirt-e', description: 'Direct electric infrared. Self-regulating element. No transformers or wiring centres. BS 7671 compliant.', href: '/specifiers/products/thermaskirt-e', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=7f158087-624d-44eb-8ab7-1c885002c85f' },
                        { title: 'EasyClean LST', description: 'Sealed hygiene capping over BM2/BM3. Anti-ligature, anti-tamper. Anti-microbial coating option.', href: '/specifiers/products/easyclean', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=9a7b40c8-0245-4d26-a04d-72304b92a02f' },
                        { title: 'ThermaCurve', description: 'Electric infrared coving at ceiling/wall junction. For spaces where skirting installation is not feasible.', href: '/specifiers/products/thermacurve', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=35bab5ca-1acb-49be-bc55-df357606b0b5' },
                        { title: 'Add2Rad', description: 'Retrofit emitter supplement. Connects in series to existing radiator tails. Up to 90W/m at 45°C flow.', href: '/specifiers/products/add2rad', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=9567dbe1-3e38-4b02-abff-ef9cd35115ef' },
                        { title: 'Kitchen Plinth', description: '115mm colour-matched plinth profile for beneath kitchen units. Hydronic connection.', href: '/specifiers/products/kitchen-plinth', image: 'https://www.discreteheat.com/MediaHandler.ashx?id=79fbd528-59ea-40ff-b6ae-ac68a6ebfaab' },
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
