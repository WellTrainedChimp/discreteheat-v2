import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Heat Loss Methodology | Technical Data | ThermaSkirt',
    description: 'Guidance for M&E engineers on modelling perimeter radiant skirting systems against standard heat loss calculations like DIN EN 12831.',
    alternates: {
        canonical: 'https://www.discreteheat.com/specifiers/technical-data/heat-loss-methodology/',
    }
};

const otherData = [
    { title: 'Energy House 2.0 Report', description: 'University of Salford testing on energy efficiency vs radiators.', href: '/specifiers/technical-data/energy-house-2-report' },
    { title: 'BSRIA Test Results', description: 'Thermal output and comfort testing to BS EN 442-1 standards.', href: '/specifiers/technical-data/bsria-test-results' },
    { title: 'Output Tables', description: 'Comprehensive Watts/Meter outputs across all profiles.', href: '/specifiers/technical-data/output-tables' },
];

export default function HeatLossMethodologyPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="M&E Engineering"
                    title="Calculation &"
                    titleHighlight="specification."
                    description="A guide for specifiers and building physics engineers on how to accurately model continuous radiant loads within standard heat loss software."
                    primaryCta={{ text: "Download Specifier Pack", href: "/specifiers/specification-support/design-service" }}
                    imageSrc="/assets/images/technical-heatloss.jpg"
                    imageAlt="A blueprint and M&E design schematic for a ThermaSkirt installation"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-5xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">DIN EN 12831 & CIBSE Guide A</h2>
                            <p className="text-xl font-light text-dh-dark mb-6 leading-relaxed">
                                When performing standard room-by-room steady state heat loss calculations, M&E consultants determine the total fabric and ventilation loss (e.g. 1,200 Watts for a living room).
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                Ordinarily, a single point-source convector radiator of 1,200W is specified under a window to compensate. Specifying ThermaSkirt requires a slight paradigm shift: rather than a point source, the 1,200W load must be divided by the available continuous active perimeter length (e.g. 12 active linear metres) to determine the required Watts per metre (in this case, 100 W/m). The system flow temperature is then indexed on our output tables to ensure the chosen profile exceeds that W/m requirement.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Software Integration</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Modelling in IESve and TAS</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Because ThermaSkirt is a radiant emitter rather than purely a convector, modelling its effect via an operative/mean radiant temperature (MRT) approach often yields better predicted thermal comfort at a lower air temperature than standard convection models predict.
                            </p>
                            <div className="p-6 bg-dh-grey-light rounded-2xl border border-dh-grey-light/50 my-8">
                                <h4 className="text-lg font-semibold text-dh-dark mb-2">Technical Note: Modifying standard radiator models</h4>
                                <p className="text-dh-grey text-sm mb-4">
                                    If your software suite lacks a specific 'skirting heating' component, ThermaSkirt can generally be modeled accurately in IESve or TAS by inputting it as a continuous low-level hot water radiator with a severely reduced convective fraction and a significantly increased radiant fraction. Furthermore, its extremely low thermal mass allows for much steeper, faster response curves. Full coefficient data is available in the specifiers pack.
                                </p>
                                <a href="/specifiers/specification-support/design-service" className="text-dh-red font-semibold hover:underline text-sm">Download M&E Specification Pack &rarr;</a>
                            </div>
                        </article>

                    </div>
                </section>

                <FAQText
                    faqs={[
                        {
                            question: "Does it count towards wall or floor heat losses?",
                            answer: "No. ThermaSkirt emits into the room. While it does warm the adjacent floor and block the cold bridge at the wall junction, it is factored purely as an internal heat gain/emitter in standard calculations, not a modification to the U-value."
                        },
                        {
                            question: "What if the required W/m is higher than the profile can provide at my flow temp?",
                            answer: "If the heat loss is extreme (e.g., a poorly insulated conservatory on a 40°C flow), you must deploy the taller BM3 profile, supplement with Add2Rad, or improve the fabric's U-values. The system cannot break the laws of physics."
                        }
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore Further Documentation"
                    description="Access more independent testing data and output charts."
                    tiles={otherData}
                />

                <CTABanner
                    heading="Need our engineers to verify your models?"
                    description="We act as an extension of your M&E team. Send us your IES/TAS loads and we will provide the scaled perimeter layouts and manifold hydraulic resistance calculations."
                    primaryCTA="Request Design Review"
                    primaryCTALink="/specifiers/specification-support/design-service"
                    secondaryCTA="Speak to Spec Team"
                    secondaryCTALink="/about/contact"
                />
            </main>
        </>
    );
}
