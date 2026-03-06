import SubHubHero from '@/components/server/SubHubHero';
import FAQText from '@/components/server/FAQText';
import CTABanner from '@/components/blocks/CTABanner';
import TestimonialStrip from '@/components/blocks/TestimonialStrip';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Whole House Renovation Heating | ThermaSkirt',
    description: 'Renovating an older property? ThermaSkirt provides modern, efficient radiant heating by connecting to your existing pipes—avoiding the immense cost of digging up original floors.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/by-project/renovation/',
    },
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=cc256c2b-50de-47b9-98ac-1133b0a15114', width: 1200, height: 630, alt: 'Whole House Renovation Heating | ThermaSkirt' }],
    },
};

export default function RenovationPage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-0">
                <SubHubHero
                    badge="Home Renovation"
                    title="Modernize without"
                    titleHighlight="the destruction."
                    description="Renovating a period property is about preserving character while improving energy efficiency. Replacing ugly, inefficient steel radiators with ThermaSkirt provides invisible radiant warmth without tearing up original Victorian floorboards to lay underfloor heating screed."
                    primaryCta={{ text: "Get a Renovation Quote", href: "/homeowners/get-a-quote" }}
                    imageSrc="https://www.discreteheat.com/MediaHandler.ashx?id=cc256c2b-50de-47b9-98ac-1133b0a15114"
                    imageAlt="A stunningly renovated period living room with a classic Deco ThermaSkirt profile"
                />

                <section className="py-20 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <article>
                            <h2 className="text-3xl font-light text-dh-dark mb-6 tracking-tight">Skirting Board Heating for Renovations</h2>
                            <p className="text-xl font-light text-dh-dark mb-12 leading-relaxed">
                                ThermaSkirt is the gold standard for full-property renovations because it installs completely above ground. Projecting just 20mm from the wall and offering classic Ogee or modern Torus profiles, it modernizes your home&apos;s thermal efficiency (35-45°C compatible) whilst avoiding the catastrophic £10,000+ cost of ripping out suspended timber floors to retrofit UFH.
                            </p>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Protecting Original Features</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Zero Floor Disruption. No Height Increases.</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                Retrofitting wet underfloor heating into a 1930s semi or a Victorian terrace is an aggressive, destructive process. You must either dig down into concrete foundations, rip up the original pine floorboards to sling spreader plates between joists, or deploy expensive overlay boards that raise the entire floor level by exactly 15-20mm.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                This 15mm floor height increase triggers a domino effect across the renovation project: every interior door must be planed down, custom architraves have to be cut, thresholds ruined, and staircases suddenly fall out of British building regulations. ThermaSkirt connects to the existing 15mm or 10mm copper drop pipes like a standard radiator. It requires no floorboards to be lifted and no screed to be poured.
                            </p>
                        </article>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dh-grey-light border border-dh-grey-light/50">
                                {/* Next Image component pointing to a realistic stock/asset path */}
                                <div className="absolute inset-0 flex items-center justify-center text-dh-grey">Renovation Image 1</div>
                            </div>
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dh-grey-light border border-dh-grey-light/50">
                                <div className="absolute inset-0 flex items-center justify-center text-dh-grey">Renovation Image 2</div>
                            </div>
                        </div>

                        <article>
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Aesthetics & Decor</span>
                            <h3 className="text-2xl font-light text-dh-dark mb-6 tracking-tight">Match Your Period Features</h3>
                            <p className="text-lg text-dh-grey leading-relaxed mb-6">
                                The central focus of any older renovation is stripping away ugly 1970s additions and restoring clean, crisp lines. Dropping a massive, purely functional white steel box radiator onto your freshly skimmed and painted feature wall ruins the aesthetic instantly.
                            </p>
                            <p className="text-lg text-dh-grey leading-relaxed">
                                Our ThermaSkirt &apos;Deco&apos; profile perfectly mimics a classic Victorian Ogee or Torus timber skirting board. It is manufactured from highly durable extruded aluminium and powder-coated to your exact specification. It hides the heating entirely in plain sight, ensuring your period fireplaces and large sash windows remain the focal point of the room.
                            </p>
                        </article>
                    </div>
                </section>

                <TestimonialStrip
                    quote="We wanted the clean look of UFH, but there was absolutely no way we were pulling up 120-year-old parquet flooring. ThermaSkirt Deco saved the project. It genuinely looks like original timber skirting."
                    author="Sophia K."
                    tags={['Victorian Terrace', 'Full House Refurb']}
                />

                <FAQText
                    faqs={[
                        {
                            question: "How do I match original skirting heights?",
                            answer: "ThermaSkirt profiles are available in multiple heights, typically between 120mm and 150mm. You can mount them at standard heights, or run them atop a decorative timber plinth to match towering 220mm Victorian skirting. It integrates flawlessly."
                        },
                        {
                            question: "Can I paint ThermaSkirt to match my Farrow & Ball walls?",
                            answer: "Yes. ThermaSkirt arrives with an incredibly tough factory powder-coat finish, but it can be lightly keyed and overpainted using any high-quality metal or wood trim paint to match your interior design scheme."
                        },
                        {
                            question: "Do I need a new boiler to run a whole house?",
                            answer: "In a renovation, if you are upgrading your insulation, your heat load will decrease. ThermaSkirt connects exactly like conventional radiators. If your existing boiler is working and correctly sized for the property, it will run the ThermaSkirt perfectly."
                        }
                    ]}
                />

                <CTABanner
                    heading="Modernize without the destruction."
                    description="Upload your house floor plans for a fast, free itemised quote."
                    primaryCTA="Get a Free Quote"
                    primaryCTALink="/homeowners/get-a-quote"
                    secondaryCTA="Find an Installer"
                    secondaryCTALink="/homeowners/find-an-installer"
                />
            </main>
        </>
    );
}
