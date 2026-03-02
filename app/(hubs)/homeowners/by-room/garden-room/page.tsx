import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import TestimonialStrip from '@/components/blocks/TestimonialStrip';
import NavbarMorph from '@/components/client/NavbarMorph';

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
                    imageSrc="/assets/images/homeowner-garden.jpg"
                    imageAlt="A sleek, modern timber garden room heated perfectly with ThermaSkirt"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Garden Room Skirting Board Heating</h2>
                            <p className="text-xl font-light text-dh-dark mb-12 leading-relaxed">
                                ThermaSkirt is the ultimate low-profile heating solution for garden offices and studios. Operating as either an electric or a wet system, it acts as the skirting board, projecting just 20mm from the walls. This reclaims precious floor area in highly compressed 15-25m² footprints while rapidly raising internal temperatures on freezing winter mornings.
                            </p>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Heating Strategy</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Electric or Wet? Both Work Flawlessly</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Depending on the distance from your main property, garden rooms present a unique heating challenge. Digging a deep trench across your lawn to run heavily insulated flow and return pipes back to a gas boiler is expensive and highly disruptive. Electric panel heaters are the typical compromise, but they are ugly, dangerous dust-traps that consume wall space.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt is available as an Electric (&apos;ThermaSkirt E&apos;) or Wet (&apos;ThermaSkirt H2O&apos;) system. The electric version operates at standard 240V, plugging directly into the garden room’s fused spur ring main. It is packed with a bespoke silicone-coated heating cable that provides highly efficient radiant output exactly where timber walls need it—protecting wood from damp while ensuring silent operation. If you do wish to connect to a heat pump (35-45°C), our water-fed profile provides BSRIA-certified thermal distribution that matches premium underfloor heating.
                            </p>
                        </article>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dh-grey-light border border-dh-grey-light/50">
                                {/* Next Image component pointing to a realistic stock/asset path */}
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
                                Permitted development rules in the UK strictly limit the external height and volume of garden rooms. Consequently, interior space is cramped. Imposing a Type 22 or Type 33 radiator onto the only wall restricts where you can place gym equipment, desks, or fold-out beds. Floor-standing electric fan heaters look unprofessional to clients and are a trip hazard.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                ThermaSkirt eliminates the physical heating unit block entirely. By mimicking a standard timber skirting profile and wrapping neatly around the base of the room, it distributes 100% of the required convective and radiant heat while vanishing into the architecture. You can place your treadmill against the back wall, or span a massive sofa across the room without blocking your heat source.
                            </p>
                        </article>
                    </div>
                </section>

                <TestimonialStrip
                    quote="Trenching pipes from the house boiler would have cost £2,000 in labour before the pipes were even connected. We fitted Electric ThermaSkirt in half a day, wired into a fused spur. The studio heats up incredibly fast."
                    author="Phil M."
                    tags={['Garden Office', 'Electric Heating']}
                />

                <FAQText
                    faqs={[
                        {
                            question: "How is Electric ThermaSkirt controlled?",
                            answer: "It is wired directly into your garden room's mains electric circuit via a fused spur. We supply a dedicated, programmable wall thermostat (WiFi enabled options available) allowing you to control the schedule and temperature exactly like an independent heating zone."
                        },
                        {
                            question: "Are there any risks if I spill water in a garden gym?",
                            answer: "No. Our Electric ThermaSkirt system is fully sealed and designed to be robust. However, as it is a 240V hardwired system, it must be installed and certified by a qualified Part P registered electrician."
                        },
                        {
                            question: "Will it stop damp and condensation on timber walls?",
                            answer: "Yes. In cold environments, timber buildings can suffer from condensation. ThermaSkirt emits gentle radiant heat outwards and upwards along the base of the walls. Sitting warm air exactly at the weak point where the floor meets the timber frame vastly reduces condensation risks."
                        }
                    ]}
                />

                <CTABanner
                    heading="Ready to heat your garden retreat?"
                    description="Upload your garden room plans for a fast, free itemised quote."
                    primaryCTA="Get a Free Quote"
                    primaryCTALink="/homeowners/get-a-quote"
                    secondaryCTA="Find an Installer"
                    secondaryCTALink="/homeowners/find-an-installer"
                />
            </main>
        </>
    );
}
