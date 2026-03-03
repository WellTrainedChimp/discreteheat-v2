import SubHubHero from '@/components/server/SubHubHero';
import StatsStrip from '@/components/blocks/StatsStrip';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import TestimonialStrip from '@/components/blocks/TestimonialStrip';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import NavbarMorph from '@/components/client/NavbarMorph';
import Link from 'next/link';

export const metadata = {
    title: 'Electric Skirting Board Heating | ThermaSkirt-e',
    description: 'ThermaSkirt-e: 240V hard-wired radiant electric heating with zero plumbing. Perfect for apartments, garden rooms, loft conversions, and off-grid homes. Pairs with solar PV and battery storage.',
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
                    description="ThermaSkirt-e is the electric version of our skirting board heating system. It provides all the space-saving, radiant comfort of the wet system, but installs in hours via a standard 240V fused spur—no plumbing, no boiler, no pipework. Ideal for apartments, loft conversions, garden rooms, and homes without gas."
                    primaryCta={{ text: "Get an Electric Quote", href: "/homeowners/get-a-quote" }}
                    secondaryCta={{ text: "How Much Does It Cost?", href: "/homeowners/cost-guide" }}
                    imageSrc="/assets/images/homeowner-electric.jpg"
                    imageAlt="A sleek modern garden room heated by Electric ThermaSkirt-e"
                />

                <StatsStrip
                    stats={[
                        { value: '100%', label: 'Point-of-Use Efficiency', source: 'every watt becomes heat' },
                        { value: '240V', label: 'Standard Fused Spur', source: 'no specialist wiring' },
                        { value: '5.6p/kWh', label: 'Off-Peak Possible', source: 'with battery + time-of-use tariff' },
                        { value: 'Zero', label: 'Plumbing Required', source: 'no pipes, no leaks, no manifolds' },
                    ]}
                />

                {/* ── Section 1: Core Proposition ── */}
                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Electric Skirting Board Heating</h2>
                            <p className="text-xl font-light text-dh-dark mb-12 leading-relaxed">
                                ThermaSkirt-e is a 240V hard-wired radiant heating system that operates independently of boilers, heat pumps, and plumbing manifolds. A sealed, silicone-coated heating cable housed inside an aerospace-grade aluminium profile converts electricity directly into radiant heat at 100% efficiency at point of use. Self-regulating elements eliminate the wiring-centre complexity of traditional electric systems.
                            </p>

                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Installation</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Zero Plumbing. Zero Leak Risk.</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Running pipework from your central heating system to a new loft conversion or a detached garden room is expensive and risky. You have to lift floorboards, drill through joists, pierce exterior walls, and run heavily insulated PEX or copper pipes across your property. The risk of future leaks in inaccessible floor voids is a legitimate concern—and the cost can easily reach several thousand pounds before you even consider the emitter.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt-e sidesteps this entirely. A qualified electrician wires a standard 240V fused spur from the room&apos;s consumer unit, connects the digital thermostat, and plugs the ThermaSkirt directly into it. Installation time drops from multi-day plumbing jobs to a few hours of clean electrical work. No water in the system means no freeze risk, no leak risk, and no annual boiler servicing.
                            </p>
                        </article>

                        {/* ── Section 2: Running Costs ── */}
                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Running Costs</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Electric Doesn&apos;t Have to Be Expensive</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                The standard objection to electric heating is cost: at 24p/kWh on a standard tariff, electricity is roughly four times the price of gas per unit. That&apos;s a legitimate concern—and for a whole-house primary heating system on a flat-rate tariff, we&apos;d recommend ThermaSkirt H2O with a heat pump instead.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                However, the economics change dramatically in three scenarios where ThermaSkirt-e becomes the most cost-effective option available.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                <div className="p-8 bg-dh-grey-light rounded-[14px]">
                                    <h4 className="text-lg font-semibold text-dh-dark mb-3">Off-Peak Tariffs</h4>
                                    <p className="text-sm text-dh-grey leading-relaxed">
                                        Economy 7, Economy 10, and modern time-of-use tariffs (Octopus Agile, Intelligent Go) drop the per-unit cost to 5–15p/kWh during off-peak hours. With a 15kWh home battery charging at 5.6p/kWh overnight and discharging through ThermaSkirt-e during the day, your effective heating cost drops below 13.6p/kWh—cheaper than gas.
                                    </p>
                                </div>
                                <div className="p-8 bg-dh-grey-light rounded-[14px]">
                                    <h4 className="text-lg font-semibold text-dh-dark mb-3">Solar PV Self-Consumption</h4>
                                    <p className="text-sm text-dh-grey leading-relaxed">
                                        If you have rooftop solar panels, every kWh you divert into ThermaSkirt-e is free electricity you&apos;d otherwise export to the grid for 4–5p. A smart PV diverter (like the myenergi eddi) automatically routes excess solar generation into ThermaSkirt-e before exporting—heating your home at zero marginal cost during daylight hours.
                                    </p>
                                </div>
                                <div className="p-8 bg-dh-grey-light rounded-[14px]">
                                    <h4 className="text-lg font-semibold text-dh-dark mb-3">Supplementary Heating</h4>
                                    <p className="text-sm text-dh-grey leading-relaxed">
                                        For a single garden room, home office, or loft conversion where running wet pipes is impractical, ThermaSkirt-e&apos;s low installation cost easily offsets the per-unit electricity premium. The room is only heated when occupied, and the thermostat ensures precise temperature control—no wasted energy.
                                    </p>
                                </div>
                            </div>
                        </article>

                        {/* ── Section 3: Safety & Precision ── */}
                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Precision Control</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Zone Control Down to the Watt</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Portable oil-filled radiators and cheap electric fan heaters are notorious fire hazards—tripping over, blowing fuses, and burning vastly more electricity than advertised. They offer terrible temperature control, blasting the room into a sauna before shutting off completely.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                ThermaSkirt-e is entirely different. It is screwed securely to the wall, replacing the existing timber skirting. The self-regulating heating cables emit a strictly controlled, continuous low-level radiant heat. When paired with our digital programmable thermostats (WiFi-enabled options available), the system modulates its power draw. Once the room hits your target 21°C, it automatically throttles down to simply trickle heat, maintaining the perfect temperature with minimal energy consumption.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                Because ThermaSkirt-e uses radiant heat rather than convection, it heats objects and surfaces directly—40–60% more energy-efficient than pure convection electric heaters according to infrared heating studies. You feel warm at lower air temperatures, which further reduces electricity consumption.
                            </p>
                        </article>

                        {/* ── Section 4: Where It Excels ── */}
                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Applications</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Where ThermaSkirt-e Excels</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-8">
                                ThermaSkirt-e is the right choice when running wet pipework is either impossible, impractical, or disproportionately expensive. Typical installations include:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="flex items-start gap-4">
                                    <span className="text-dh-red text-lg mt-1">→</span>
                                    <div>
                                        <h4 className="text-base font-semibold text-dh-dark mb-1">Garden Rooms &amp; Offices</h4>
                                        <p className="text-sm text-dh-grey">No need to trench pipes across your garden or pierce external walls. A single electrical cable does the job.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="text-dh-red text-lg mt-1">→</span>
                                    <div>
                                        <h4 className="text-base font-semibold text-dh-dark mb-1">Loft Conversions</h4>
                                        <p className="text-sm text-dh-grey">No floor-lifting to extend wet pipes. Electrical spur from the existing consumer unit—job done.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="text-dh-red text-lg mt-1">→</span>
                                    <div>
                                        <h4 className="text-base font-semibold text-dh-dark mb-1">Apartments &amp; High-Rise</h4>
                                        <p className="text-sm text-dh-grey">Many modern apartment blocks prohibit gas boilers entirely. ThermaSkirt-e provides radiant comfort with zero communal heating dependency.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="text-dh-red text-lg mt-1">→</span>
                                    <div>
                                        <h4 className="text-base font-semibold text-dh-dark mb-1">Off-Grid &amp; Rural Properties</h4>
                                        <p className="text-sm text-dh-grey">No gas main required. Pairs beautifully with solar PV, battery storage, and off-peak tariffs for minimal running costs.</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>

                <TestimonialStrip
                    quote="Our high-rise apartment block banned gas boilers during the refit. Electric ThermaSkirt gave us the cleanest look possible. We control all our heating from an app on our phones and never have to worry about water leaks."
                    author="Rachel P."
                    tags={['Apartment', '100% Electric']}
                />

                <FAQText
                    heading="Electric Heating — Common Questions"
                    faqs={[
                        {
                            question: "How much electricity does ThermaSkirt-e use?",
                            answer: "Electric heating is 100% efficient at point of use—every watt drawn is converted to heat. ThermaSkirt-e is available at various wattages per linear metre, sized to match your room's precise heat loss calculation. The thermostat modulates power draw, so you only pay to maintain your target temperature, not to overheat the room."
                        },
                        {
                            question: "Can I run it from my solar panels?",
                            answer: "Yes. Using a smart PV diverter (like the myenergi eddi), you can configure your household wiring to automatically route excess solar electricity into ThermaSkirt-e before exporting it to the grid—effectively heating the room for free during sunny hours."
                        },
                        {
                            question: "Is it safe to touch?",
                            answer: "Yes. The heating cables sit inside an enclosed aluminium cavity. The external fascia temperature is carefully managed by the thermostat, eliminating the severe burn risks associated with storage heaters and portable electric radiators. ThermaSkirt-e meets all relevant electrical safety standards."
                        },
                        {
                            question: "Is it cheaper to run than storage heaters?",
                            answer: "On a like-for-like tariff, ThermaSkirt-e is more energy-efficient because it uses radiant heat (heating objects directly) rather than pure convection. It also gives you precise room-by-room temperature control, so you only heat occupied rooms. Combined with off-peak tariffs or solar PV, running costs can be significantly lower than storage heaters."
                        },
                        {
                            question: "Can I control it with my phone?",
                            answer: "Yes. WiFi-enabled thermostat options allow full remote control via a smartphone app, including scheduling, temperature adjustment, and energy monitoring. You can also integrate with smart home ecosystems."
                        },
                        {
                            question: "What about battery storage economics?",
                            answer: (<>A 15kWh home battery (e.g. Tesla Powerwall, GivEnergy) charging overnight at 5.6p/kWh on an off-peak tariff and discharging through ThermaSkirt-e during the day delivers an effective heating cost below 13.6p/kWh—cheaper than gas at current rates. See our <Link href="/homeowners/by-heat-source/solar" className="text-dh-red hover:underline">Solar PV &amp; Battery page</Link> for more detail on this setup.</>)
                        },
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore more heating options"
                    description="See how ThermaSkirt works with other heating systems and project types."
                    tiles={[
                        { title: 'Heat Pump', description: 'Optimised for 35–45°C flow temperatures. Improves COP by up to 0.5.', href: '/homeowners/by-heat-source/heat-pump' },
                        { title: 'Gas or Oil Boiler', description: 'Direct replacement for radiators on any existing wet system.', href: '/homeowners/by-heat-source/boiler' },
                        { title: 'Solar PV & Thermal', description: 'Maximise self-consumption of free solar energy.', href: '/homeowners/by-heat-source/solar' },
                        { title: 'Garden Room Projects', description: 'Purpose-built heating for detached garden buildings.', href: '/homeowners/by-room/garden-room' },
                        { title: 'Loft Conversion Projects', description: 'Add heating to your new loft space without wet pipework.', href: '/homeowners/by-project/loft-conversion' },
                        { title: 'ThermaSkirt vs Storage Heaters', description: 'Why skirting board heating beats bulky storage heaters.', href: '/homeowners/vs/storage-heaters' },
                        { title: 'Cost Guide', description: 'Transparent pricing for every ThermaSkirt configuration.', href: '/homeowners/cost-guide' },
                    ]}
                />

                <CTABanner
                    heading="Ready to electrify your heating?"
                    description="Upload your room dimensions for a fast, free itemised quote. We'll calculate the exact ThermaSkirt-e wattage and cost for your space."
                    primaryCTA="Get a Free Quote"
                    primaryCTALink="/homeowners/get-a-quote"
                    secondaryCTA="Find a ThermaSkirt Installer"
                    secondaryCTALink="/homeowners/find-an-installer"
                    additionalLinks={[
                        { text: "View Cost Guide", href: "/homeowners/cost-guide" },
                        { text: "DIY or Professional Install?", href: "/homeowners/diy-or-professional" },
                    ]}
                />
            </main>
        </>
    );
}
