import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'PAS 2035 & 2030 Retrofit Compliance | ThermaSkirt',
    description: 'Guidelines on utilizing ThermaSkirt to meet PAS 2035 standards during whole-house retrofits and SHDF (Social Housing Decarbonisation Fund) projects.',
    alternates: {
        canonical: 'https://www.discreteheat.com/specifiers/technical-data/pas-2035-pas-2030/',
    }
};

const otherData = [
    { title: 'Environmental Data', description: 'Recycled aluminium content, embodied carbon estimates.', href: '/specifiers/technical-data/environmental-data' },
    { title: 'Future Homes Standard', description: 'Meeting the 2025 carbon reduction targets with low-flow emitters.', href: '/specifiers/technical-data/future-homes-standard' },
    { title: 'Part L Compliance', description: 'Document L SAP calculations and system performance data.', href: '/specifiers/technical-data/part-l-compliance' },
];

export default function PASCompliancePage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Whole-House Retrofit"
                    title="Meeting the stringent"
                    titleHighlight="PAS 2035 standards."
                    description="The PAS 2035 framework demands a 'fabric first' approach coupled with low-temperature emitters. ThermaSkirt bridges the gap where disruptive heat pump retrofits stall."
                    primaryCta={{ text: "Download Specifier Pack", href: "/specifiers/specification-support/design-service" }}
                    imageSrc="/assets/images/technical-pas2035.jpg"
                    imageAlt="A retrofit coordinator assessing thermal performance against a PAS 2035 whole-house plan"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-5xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">The Emitter Bottleneck in Retrofit</h2>
                            <p className="text-xl font-light text-dh-dark mb-6 leading-relaxed">
                                Under PAS 2035/2030, transitioning a property off fossil fuels often requires an Air Source Heat Pump (ASHP) scaled to 45°C. When a Retrofit Coordinator runs the output calculations, they routinely hit an impassable blockage.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-12">
                                Standard Type 11 or Type 22 radiators simply cannot distribute enough heat at these low flow temperatures. To maintain room design temperature, the radiators must be ripped out and replaced with units two to three times larger. In densely packed social housing or terraced properties, losing that volume of floor space is unacceptable to the tenant/owner. Alternatively, tearing up the floors for Underfloor Heating (UFH) triggers massive &apos;unintended consequences&apos;—requiring decanting tenants to temporary housing, destroying acoustic flooring structures, and blowing the SHDF budget entirely.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">The Solution</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Zero-Displacement Heat Distribution</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                ThermaSkirt avoids these pitfalls simultaneously. Because it acts as both the skirting board and the primary radiant heating emitter, it spreads a massive active surface area around the perimeter without intruding into the room footprint.
                            </p>
                            <div className="p-6 bg-dh-grey-light rounded-2xl border border-dh-grey-light/50 my-8">
                                <h4 className="text-lg font-semibold text-dh-dark mb-2">Technical Note: Moisture and &apos;Awaab&apos;s Law&apos;</h4>
                                <p className="text-dh-grey text-sm mb-4">
                                    PAS 2035 actively emphasizes managing moisture to combat damp and mould. Standard solid wall retrofits suffer from aggressive cold-bridging at the floor/wall perimeter junction. By running warm water entirely around this perimeter, ThermaSkirt actively dries this high-risk zone, directly combatting black mould proliferation. Full PAS 2035 compliance briefs and output tables are available in the specifiers pack.
                                </p>
                                <a href="/specifiers/specification-support/design-service" className="text-dh-red font-semibold hover:underline text-sm">Download Retrofit Specifier Data &rarr;</a>
                            </div>
                        </article>

                    </div>
                </section>

                <FAQText
                    faqs={[
                        {
                            question: "How long does a retro-install take?",
                            answer: "Our network of installers routinely fit ThermaSkirt into an average 3-bedroom semi-detached 'occupied' property within 2 days without displacing the tenants. The existing radiator drops are intercepted directly at the skirting level."
                        },
                        {
                            question: "Can it be funded through SHDF?",
                            answer: "Yes, ThermaSkirt is recognized as an 'Energy Efficiency Measure' (Low Temperature Emitter) supporting the transition to Heat Pumps under the Social Housing Decarbonisation Fund."
                        }
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore Further Documentation"
                    description="Access more independent testing data and output charts."
                    tiles={otherData}
                />

                <CTABanner
                    heading="Managing an SHDF / PAS 2035 Rollout?"
                    description="We act as the specialized emitter design arm for major retrofit contractors. Contact our team to orchestrate a pilot scheme within your housing portfolio."
                    primaryCTA="Request Pilot Design"
                    primaryCTALink="/specifiers/specification-support/design-service"
                    secondaryCTA="Speak to Spec Team"
                    secondaryCTALink="/about/contact"
                />
            </main>
        </>
    );
}
