import { Maximize2, ThermometerSun, Leaf, VolumeX } from 'lucide-react';

export default function BenefitsGrid() {
    return (
        <section className="bg-dh-dark py-24 px-6 lg:px-12 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <span className="section-label">
                    Why ThermaSkirt?
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-16 max-w-3xl leading-[1.15]">
                    The smart alternative to <span className="font-medium italic text-dh-red">radiators</span>, storage heaters & underfloor heating.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    <div className="relative group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-dh-red/10 rounded-full blur-3xl group-hover:bg-dh-red/20 transition-colors" />
                        <div className="mb-6 opacity-90"><Maximize2 size={32} /></div>
                        <h4 className="text-lg font-semibold mb-3">Reclaim every wall</h4>
                        <p className="text-white/70 text-[15px] leading-relaxed">
                            At just 20mm thick, it projects less than traditional timber skirting. Place your furniture anywhere without blocking the heat source.
                        </p>
                    </div>

                    <div className="relative group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-dh-red/10 rounded-full blur-3xl group-hover:bg-dh-red/20 transition-colors" />
                        <div className="mb-6 opacity-90"><ThermometerSun size={32} /></div>
                        <h4 className="text-lg font-semibold mb-3">Even heat distribution</h4>
                        <p className="text-white/70 text-[15px] leading-relaxed">
                            Creates a thermal envelope around the perimeter. BSRIA testing shows less than 1°C variance across the room — identical to underfloor heating.
                        </p>
                    </div>

                    <div className="relative group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-dh-red/10 rounded-full blur-3xl group-hover:bg-dh-red/20 transition-colors" />
                        <div className="mb-6 opacity-90"><Leaf size={32} /></div>
                        <h4 className="text-lg font-semibold mb-3">Works with heat pumps</h4>
                        <p className="text-white/70 text-[15px] leading-relaxed">
                            Designed for low flow temperatures (35–45°C). Avoids the need for massive, oversized radiators while improving heat pump efficiency.
                        </p>
                    </div>

                    <div className="relative group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-dh-red/10 rounded-full blur-3xl group-hover:bg-dh-red/20 transition-colors" />
                        <div className="mb-6 opacity-90"><VolumeX size={32} /></div>
                        <h4 className="text-lg font-semibold mb-3">Silent operation</h4>
                        <p className="text-white/70 text-[15px] leading-relaxed">
                            No expansion clicks, ticking, banging or gurgling. Genuinely silent operation for undisturbed sleep in bedrooms.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
