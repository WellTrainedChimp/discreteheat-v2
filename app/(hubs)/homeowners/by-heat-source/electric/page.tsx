import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import TestimonialStrip from '@/components/blocks/TestimonialStrip';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Electric Skirting Board Heating | ThermaSkirt E',
    description: 'Perfect for off-grid homes, garden rooms, and apartments. Electric ThermaSkirt provides fast, radiant heating without plumbing, gas boilers, or trenching.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/by-heat-source/electric/',
    }
};

export default function ElectricPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Electric Heating"
                    title="Plug in."
                    titleHighlight="Warm up."
                    description="ThermaSkirt 'E' is the electric version of our revolutionary skirting board heating system. It provides all the space-saving, radiant comfort of the wet system, but installs incredibly fast via a standard 240V fused spur—ideal for apartments, loft conversions, garden offices, and homes without gas."
                    primaryCta={{ text: "Get an Electric Quote", href: "/homeowners/get-a-quote" }}
                    imageSrc="/assets/images/homeowner-electric.jpg"
                    imageAlt="A sleek, modern garden room heated by Electric ThermaSkirt"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Electric Skirting Board Heating</h2>
                            <p className="text-xl font-light text-dh-dark mb-12 leading-relaxed">
                                Electric ThermaSkirt (ThermaSkirt E) is a 240V hard-wired radiant heating system that operates independently of boilers, heat pumps, and plumbing manifolds. By converting electricity directly into heat within a sealed, silicone-coated cable housed inside an aerospace-grade aluminium profile, it provides instantaneous 100% efficient heating.
                            </p>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Installation Speed</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Zero Plumbing. Zero Leaks.</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Taking a spur off a central heating system to heat a new loft conversion or a distant garden room is expensive. You have to lift floorboards, drill through joists, drill through exterior walls, and run heavily insulated PEX or copper pipes across your property. The risk of future leaks in inaccessible voids is a severe concern for many homeowners.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                Electric ThermaSkirt completely sidesteps this problem. It requires absolutely no plumbing. A qualified electrician simply wires a standard 240V fused spur into the room&apos;s ring main, connects our sophisticated digital thermostat, and plugs the ThermaSkirt directly into it. The installation time drops from multi-day plumbing jobs to a few hours of clean electrical work.
                            </p>
                        </article>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dh-grey-light border border-dh-grey-light/50">
                                {/* Next Image component pointing to a realistic stock/asset path */}
                                <div className="absolute inset-0 flex items-center justify-center text-dh-grey">Electric Image 1</div>
                            </div>
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dh-grey-light border border-dh-grey-light/50">
                                <div className="absolute inset-0 flex items-center justify-center text-dh-grey">Electric Image 2</div>
                            </div>
                        </div>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Safety & Precision</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Zone Control Down to the Watt</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Portable oil-filled radiators and cheap electric fan heaters are notorious fire hazards, tripping over, blowing fuses, and burning vastly more electricity than they advertise. They also offer terrible temperature control, blasting the room into a sauna before shutting off completely.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt E is entirely different. It is screwed securely to the wall replacing the timber skirting. Our bespoke heating cables emit a strictly controlled, continuous low-level heat. When paired with our digital programmable thermostats (WiFi enabled options available), the system modulates its power draw. Once the room hits your target 21°C, it automatically throttles down its wattage to simply &apos;trickle&apos; heat, maintaining the perfect temperature with incredible energy efficiency.
                            </p>
                        </article>
                    </div>
                </section>

                <TestimonialStrip
                    quote="Our high-rise apartment block banned gas boilers entirely during the refit. Electric ThermaSkirt gave us the cleanest look possible. We control all our heating from an app on our phones and never have to worry about water leaks."
                    author="Rachel P."
                    tags={['Apartment', '100% Electric']}
                />

                <FAQText
                    faqs={[
                        {
                            question: "How much electricity does it use?",
                            answer: "Electric heating is fundamentally 100% efficient at the point of use (every watt drawn is converted to heat). ThermaSkirt is available at various wattages per linear metre to suit your room's precise heat loss calculations, ensuring you only pay to heat exactly what you need."
                        },
                        {
                            question: "Can I run it from my Solar panels?",
                            answer: "Yes. Using a smart diverter (like an eddi switch), you can configure your household wiring to automatically dump excess solar PV electricity into the ThermaSkirt circuits before exporting it to the grid, effectively heating the room for free."
                        },
                        {
                            question: "Is it safe to touch?",
                            answer: "Yes. The heating cables sit inside an enclosed aluminium cavity. The external fascia temperature is carefully managed by the thermostat, eliminating the severe burn risks associated with massive, high-temperature night storage heaters."
                        }
                    ]}
                />

                <CTABanner
                    heading="Ready to electrify your heating?"
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
