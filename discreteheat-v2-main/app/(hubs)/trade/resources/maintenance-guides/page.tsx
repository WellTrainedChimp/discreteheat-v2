import SubHubHero from '@/components/server/SubHubHero';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';

export const metadata = {
    title: 'Maintenance Guides | DiscreteHeat Trade',
    description: 'Guidelines for bleeding, cleaning, and decorating around ThermaSkirt systems.',
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=c8ef6e5f-6676-4063-8100-20443ecc05f8', width: 1200, height: 630, alt: 'Maintenance Guides | DiscreteHeat Trade' }],
    },
};

const internalLinks = [
    {
        title: "Installation Instructions",
        description: "Review exact fitting requirements.",
        href: "/trade/resources/installation-instructions",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=4e57c3f4-83d4-4914-a6bf-28d31595bad1",
    },
    {
        title: "Warranty Registration",
        description: "Register completed installations to activate the guarantee.",
        href: "/trade/resources/warranty-registration",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=f206172e-f79f-42dc-a7ce-78d4418d492a",
    }
];

export default function MaintenanceGuidesPage() {
    return (
        <main className="min-h-screen bg-white">
            <SubHubHero
                title="Maintenance Guides"
                badge="Aftercare"
                description="Share these simple maintenance protocols with the homeowner during handover, covering decorating, cleaning, and system bleeding."
                imageSrc="https://www.discreteheat.com/MediaHandler.ashx?id=c8ef6e5f-6676-4063-8100-20443ecc05f8"
            />

            <section className="py-24 px-6 lg:px-12 bg-white selection:bg-dh-red/20 selection:text-dh-red">
                <div className="max-w-4xl mx-auto">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-dh-grey-light p-8 rounded-2xl border border-black/5">
                            <h3 className="text-xl font-bold text-dh-dark mb-4">Decorating & Painting</h3>
                            <p className="text-dh-grey text-sm mb-4 leading-relaxed">
                                ThermaSkirt is finished in a durable, factory-applied powder coat. It does not require painting. However, if the room is changing colour scheme, the skirting can be painted.
                            </p>
                            <ul className="list-disc pl-5 text-sm text-dh-dark font-medium space-y-2">
                                <li>The surface must be lightly abraded (rubbed down) prior to painting.</li>
                                <li>A suitable metal primer MUST be applied first.</li>
                                <li>Use paints suitable for high temperatures (radiator enamels or high-quality eggshells).</li>
                                <li>The top perimeter caulking seal should be replaced after painting.</li>
                            </ul>
                        </div>
                        <div className="bg-dh-grey-light p-8 rounded-2xl border border-black/5">
                            <h3 className="text-xl font-bold text-dh-dark mb-4">Cleaning the Profiles</h3>
                            <p className="text-dh-grey text-sm mb-4 leading-relaxed">
                                Unlike trench heating or finned convectors, ThermaSkirt collects virtually no dust.
                            </p>
                            <ul className="list-disc pl-5 text-sm text-dh-dark font-medium space-y-2">
                                <li>Wipe down with a damp cloth and mild multi-surface cleaner.</li>
                                <li>Do NOT use abrasive cleaners, scouring pads, or harsh solvents as these will scratch the powder coat finish.</li>
                                <li>Mop splashes should be wiped dry to prevent hard water staining near the floor line.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white border-2 border-dh-grey-light rounded-2xl p-8 lg:p-12 mb-16 shadow-sm">
                        <h2 className="text-2xl font-bold text-dh-dark mb-6">Bleeding the System</h2>
                        <p className="text-dh-grey text-sm mb-8 max-w-2xl">
                            If sections of the skirting are cool while the flow pipe is hot, air is trapped in the upper gallery. Bleeding ThermaSkirt is identical to bleeding a radiator.
                        </p>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-dh-red text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">1</div>
                                <div>
                                    <h4 className="font-bold text-dh-dark">Locate the Bleed Valve</h4>
                                    <p className="text-sm text-dh-grey">Pop off the connecting cover at either the end of the run or at the manifold connection point. The bleed nipple is located on the brass connector.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-dh-dark text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">2</div>
                                <div>
                                    <h4 className="font-bold text-dh-dark">Open with a Radiator Key</h4>
                                    <p className="text-sm text-dh-grey">Using a standard radiator key, crack the valve open slightly. Have a cloth ready underneath. You will hear air escaping.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-dh-dark text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">3</div>
                                <div>
                                    <h4 className="font-bold text-dh-dark">Close when water appears</h4>
                                    <p className="text-sm text-dh-grey">Once a steady dribble of water emerges (no sputtering), close the valve tightly and snap the cosmetic cover back into place.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ExploreCategorySection
                id="related"
                heading="Related Resources"
                description="Explore further support tools."
                tiles={internalLinks}
            />
        </main>
    );
}
