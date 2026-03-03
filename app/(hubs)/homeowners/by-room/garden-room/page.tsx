import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import TestimonialStrip from '@/components/blocks/TestimonialStrip';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import StatsStrip from '@/components/blocks/StatsStrip';
import NavbarMorph from '@/components/client/NavbarMorph';
import Link from 'next/link';

export const metadata = {
    title: 'Garden Room Heating | ThermaSkirt',
    description: 'Keep your insulated timber garden room warm all winter. ThermaSkirt provides rapid, reliable heating without cluttering tiny floor plans with portable radiators.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/by-room/garden-room/',
    }
};

export default function GardenRoomPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Garden Room Heating"
                    title="All year round,"
                    titleHighlight="zero clutter."
                    description="Modern insulated garden rooms are stunning spaces for offices, gyms, or studios. Because their footprint is tightly constrained by planning permissions, sacrificing 1.5 square metres to a panel radiator or tripping over portable electric heaters ruins the space. ThermaSkirt provides invisible, rapid heat that hugs the perimeter."
                    primaryCta={{ text: "Get a Room Quote", href: "/homeowners/get-a-quote" }}
                    secondaryCta={{ text: "View Cost Guide", href: "/homeowners/cost-guide" }}
                    imageSrc="/assets/images/homeowner-garden.jpg"
                    imageAlt="A sleek, modern timber garden room heated perfectly with ThermaSkirt"
                />

                <StatsStrip
                    stats={[
                        { value: "240V", label: "Electric version — no pipework needed", source: "Direct fused spur connection" },
                        { value: "5 min", label: "Heat-up time from cold" },
                        { value: "20mm", label: "Profile depth — maximises compact footprint" },
                        { value: "5 yr", label: "Electric element warranty", source: "10 yr wet system warranty" },
                    ]}
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Garden Room Skirting Board Heating</h2>
                            <p className="text-xl font-light text-dh-dark mb-12 leading-relaxed">
                                ThermaSkirt is the ultimate low-profile heating solution for garden offices, gyms, and studios. Operating as either an electric or a wet system, it acts as the skirting board, projecting just 20mm from the walls. This reclaims precious floor area in highly compressed 15–25m² footprints while rapidly raising internal temperatures on freezing winter mornings.
                            </p>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Heating Strategy</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Electric or Wet? Both Work Flawlessly</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Depending on the distance from your main property, garden rooms present a unique heating challenge. Digging a deep trench across your lawn to run heavily insulated flow and return pipes back to a gas boiler is expensive and highly disruptive. Electric panel heaters are the typical compromise, but they are ugly, dangerous dust-traps that consume wall space.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt is available as an Electric (ThermaSkirt-e) or Wet (ThermaSkirt H₂O) system. The electric version operates at standard 240V, plugging directly into the garden room&apos;s fused spur ring main. It uses a bespoke self-regulating silicone-coated heating cable that provides highly efficient infrared radiant output — heating surfaces and thermal mass directly rather than blowing hot air. If you do wish to connect to a <Link href="/homeowners/by-heat-source/heat-pump" className="text-dh-red hover:underline">heat pump</Link> (35–45°C), our water-fed profile provides BSRIA-certified thermal distribution that matches premium underfloor heating.
                            </p>
                        </article>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dh-grey-light border border-dh-grey-light/50">
                                <div className="absolute inset-0 flex items-center justify-center text-dh-grey">Garden Room Image 1</div>
                            </div>
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dh-grey-light border border-dh-grey-light/50">
                                <div className="absolute inset-0 flex items-center justify-center text-dh-grey">Garden Room Image 2</div>
                            </div>
                        </div>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Space Constraints</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Stop Designing Around Heating</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Permitted development rules in the UK strictly limit the external height and volume of garden rooms. Consequently, interior space is cramped. Imposing a Type 22 or Type 33 radiator onto the only wall restricts where you can place gym equipment, desks, or fold-out beds. Floor-standing electric fan heaters look unprofessional and are a trip hazard.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt eliminates the physical heating unit entirely. By mimicking a standard timber skirting profile and wrapping neatly around the base of the room, it distributes 100% of the required convective and radiant heat while vanishing into the architecture. You can place your treadmill against the back wall, or span a massive sofa across the room without blocking your heat source.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Running Costs</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Smart Tariffs Make Electric Affordable</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Standard electricity at ~24p/kWh can make electric heating expensive. But garden rooms are perfect candidates for smart energy strategies. Off-peak tariffs (Economy 7/10, time-of-use) drop to 5–15p/kWh, and solar PV generates free electricity during daylight hours. With a 15kWh home battery charged overnight at 5.6p/kWh, the effective heating cost drops below 13.6p/kWh — cheaper than gas.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt-e uses infrared radiant heat, which warms surfaces and thermal mass directly rather than the air. This means the warmth is retained longer — particularly effective when charged overnight on cheap electricity and then releasing stored heat through the morning. For a full price breakdown, see our <Link href="/homeowners/cost-guide" className="text-dh-red hover:underline">cost guide</Link>.
                            </p>
                        </article>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Condensation &amp; Damp</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Protect Timber Frames From Moisture</h3>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                In cold environments, timber garden buildings can suffer from condensation. Cold air meets warm surfaces at the floor-wall junction, creating moisture that damages timber frames over time. ThermaSkirt emits gentle radiant heat outwards and upwards along the base of the walls — sitting warm air exactly at the weak point where the floor meets the timber frame. This dramatically reduces condensation risk, protecting your investment.
                            </p>
                        </article>
                    </div>
                </section>

                <TestimonialStrip
                    quote="Trenching pipes from the house boiler would have cost £2,000 in labour before the pipes were even connected. We fitted Electric ThermaSkirt in half a day, wired into a fused spur. The studio heats up incredibly fast."
                    author="Phil M."
                    tags={['Garden Office', 'Electric Heating']}
                    caseStudiesLink="/homeowners/reviews"
                />

                <FAQText
                    faqs={[
                        {
                            question: "How is Electric ThermaSkirt controlled?",
                            answer: "It is wired directly into your garden room's mains electric circuit via a fused spur. We supply a dedicated, programmable wall thermostat (WiFi enabled options available) allowing you to control the schedule and temperature exactly like an independent heating zone — pre-heat your office before you arrive."
                        },
                        {
                            question: "Are there any risks if I spill water in a garden gym?",
                            answer: "No. The Electric ThermaSkirt system is fully sealed with a self-regulating cable that cannot overheat. However, as it is a 240V hardwired system, it must be installed and certified by a qualified Part P registered electrician."
                        },
                        {
                            question: "Will it stop damp and condensation on timber walls?",
                            answer: "Yes. ThermaSkirt emits gentle radiant heat at the base of the walls — precisely at the floor-wall junction where condensation most commonly forms in timber-frame buildings. This keeps the timber warm and dry, dramatically reducing moisture risk."
                        },
                        {
                            question: "Can I run it on solar panels?",
                            answer: "Yes. ThermaSkirt-e operates on standard 240V mains. If your garden room has a solar PV array (or your house does), any excess generation directly powers the heating for free. Many customers pair it with a home battery charged overnight at 5–6p/kWh for effective heating costs below gas."
                        },
                        {
                            question: "What is the running cost?",
                            answer: "At standard electricity rates (~24p/kWh), running costs are comparable to other electric heating. But with off-peak tariffs (5–15p/kWh), solar PV, or battery storage, costs can drop below gas boiler equivalent. ThermaSkirt-e uses infrared, which heats surfaces and thermal mass rather than air — up to 40–60% more efficient than convection electric heaters."
                        },
                        {
                            question: "Can I use the wet version instead?",
                            answer: "Yes. If your garden room is close enough to the main house to run insulated flow and return pipes, ThermaSkirt H₂O connects to your existing boiler or heat pump circuit. It delivers BSRIA-certified comfort with less than 1°C temperature variance and benefits from your existing heating schedule."
                        },
                        {
                            question: "How much does a garden room installation cost?",
                            answer: "A typical garden room installation costs between £500 and £1,000 depending on room size and which system you choose (electric or wet). This replaces both the skirting board and the heating — no separate radiator or panel heater required."
                        }
                    ]}
                />

                <ExploreCategorySection
                    heading="Explore ThermaSkirt by Room"
                    description="See how ThermaSkirt transforms every space in your home."
                    tiles={[
                        { title: "Living Room", description: "Reclaim your walls for sofas and media units.", href: "/homeowners/by-room/living-room" },
                        { title: "Bedroom", description: "Silent, space-saving warmth for a better night's sleep.", href: "/homeowners/by-room/bedroom" },
                        { title: "Kitchen", description: "Plinth heating that frees up every cabinet.", href: "/homeowners/by-room/kitchen" },
                        { title: "Home Office", description: "Consistent warmth, zero distractions.", href: "/homeowners/by-room/home-office" },
                        { title: "Open Plan", description: "Even comfort across large, connected spaces.", href: "/homeowners/by-room/open-plan" },
                        { title: "Bathroom", description: "Warm tiles, no damp, no rust.", href: "/homeowners/by-room/bathroom" },
                    ]}
                />

                <CTABanner
                    heading="Ready to heat your garden retreat?"
                    description="Upload your garden room plans for a fast, free itemised quote."
                    primaryCTA="Get a Free Quote"
                    primaryCTALink="/homeowners/get-a-quote"
                    secondaryCTA="Find an Installer"
                    secondaryCTALink="/homeowners/find-an-installer"
                    additionalLinks={[
                        { text: "View Cost Guide", href: "/homeowners/cost-guide" },
                        { text: "DIY or Professional?", href: "/homeowners/diy-or-professional" },
                        { text: "Read FAQs", href: "/homeowners/faqs" },
                    ]}
                />
            </main>
        </>
    );
}
