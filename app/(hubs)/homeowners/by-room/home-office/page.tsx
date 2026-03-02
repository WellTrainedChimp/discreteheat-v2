import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import TestimonialStrip from '@/components/blocks/TestimonialStrip';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Home Office Skirting Board Heating | ThermaSkirt',
    description: 'Keep your garden room or home office warm year-round. ThermaSkirt frees up wall space for desks and shelving while providing fast, responsive heat.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/by-room/home-office/',
    }
};

export default function HomeOfficePage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Home Office Heating"
                    title="Productivity without"
                    titleHighlight="compromise."
                    description="Your home office is likely the smallest room in the house, but requires the most furniture. ThermaSkirt removes bulky radiators, giving you back the wall space needed for desks, filing cabinets, and multi-monitor setups."
                    primaryCta={{ text: "Get a Room Quote", href: "/homeowners/get-a-quote" }}
                    imageSrc="/assets/images/homeowner-office.jpg"
                    imageAlt="A modern, bright home office heated invisibly by ThermaSkirt"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Home Office Skirting Board Heating</h2>
                            <p className="text-xl font-light text-dh-dark mb-12 leading-relaxed">
                                ThermaSkirt is an ultra-responsive radiant heating system perfect for small or irregularly shaped home offices. By replacing standard radiators and projecting just 20mm from the wall, it reclaims vital floor space for desks and storage while delivering rapid heat-up times so your workspace is comfortable the moment you log on.
                            </p>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Workspace Efficiency</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Unlock Every Inch of Wall Space</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                The home office is typically a repurposed box room or spare bedroom where space is at an absolute premium. Placing a desk in front of a standard steel radiator is a terrible compromise—it blocks the convector heat output, ruins your boiler&apos;s efficiency, and often forces you to sit uncomfortably close to a 70°C metal panel.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt eliminates this layout prison. Because it distributes heat evenly along the floor line and mimics a standard timber skirting board, it frees up your walls entirely. BSRIA tests confirm that wrapping the heat output around the perimeter reclaims up to 2 square metres of usable space, allowing you to position twin desks, heavy shelving units, or filing cabinets exactly where you need them.
                            </p>
                        </article>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dh-grey-light border border-dh-grey-light/50">
                                {/* Next Image component pointing to a realistic stock/asset path */}
                                <div className="absolute inset-0 flex items-center justify-center text-dh-grey">Office Image 1</div>
                            </div>
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dh-grey-light border border-dh-grey-light/50">
                                <div className="absolute inset-0 flex items-center justify-center text-dh-grey">Office Image 2</div>
                            </div>
                        </div>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Rapid Response</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Heat on Demand, Not Hours Later</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Home offices are often used sporadically. You might need it desperately at 8:00 AM on a Tuesday, and then not at all on Wednesday. Wet underfloor heating (UFH) is a poor fit for this usage pattern because heating a concrete screed takes hours, resulting in a freezing room when you start work and wasted energy long after you&apos;ve logged off.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt possesses a very low water volume and high thermal conductivity via its aluminium extrusion. This means it heats up in just 5 minutes and cools down rapidly when the thermostat clicks off. It provides the exact same even radiant heat profile as premium UFH (less than a 1°C temperature variance across the room), but with the lightning-fast responsiveness of a traditional panel radiator.
                            </p>
                        </article>
                    </div>
                </section>

                <TestimonialStrip
                    quote="Turning our tiny box room into an office was impossible until we ripped out the radiator. ThermaSkirt let us push the desk right into the corner, giving me enough space to actually push my chair back."
                    author="Elena R."
                    tags={['Home Office', 'Box Room']}
                />

                <FAQText
                    faqs={[
                        {
                            question: "Will placing my desk against the wall block the heat?",
                            answer: "No. ThermaSkirt radiates heat outwards and upwards. Because the heat is distributed along the entire perimeter of the room, blocking a small 1.5m section with a desk will not noticeably impact the overall room temperature, unlike completely smothering a single point-source radiator."
                        },
                        {
                            question: "Can I run my office cables behind it?",
                            answer: "Yes. Many of our ThermaSkirt profiles feature a top channel or cavity behind the fascia specifically designed to securely hide low-voltage IT cables, speaker wires, and ethernet cables, keeping your office incredibly tidy."
                        },
                        {
                            question: "Can I just install it in the office without doing the rest of the house?",
                            answer: "Absolutely. ThermaSkirt connects to standard 15mm or 10mm central heating pipework. Your plumber can isolate the old office radiator, extend the pipes down to the floor, and fit ThermaSkirt on the exact same circuit."
                        }
                    ]}
                />

                <CTABanner
                    heading="Optimise your workspace."
                    description="Upload your room dimensions for a fast, free itemised quote."
                    primaryCTA="Get a Free Quote"
                    primaryCTALink="/homeowners/get-a-quote"
                    secondaryCTA="Find an Installer"
                    secondaryCTALink="/homeowners/find-an-installer"
                />
            </main>
        </>
    );
}
