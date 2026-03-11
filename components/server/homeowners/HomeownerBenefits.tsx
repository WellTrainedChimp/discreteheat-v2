import { ThermometerSun, Maximize2, ShieldCheck, Sparkles } from 'lucide-react';

export default function HomeownerBenefits() {
    return (
        <section className="bg-dh-dark py-24 px-6 lg:px-12 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <span className="section-label">
                    Benefits
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-16 max-w-3xl leading-[1.15]">
                    Designed for <span className="font-medium italic text-dh-red">your lifestyle.</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    <div className="relative group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-dh-red/10 rounded-full blur-3xl group-hover:bg-dh-red/20 transition-colors" />
                        <div className="mb-6 opacity-90"><Maximize2 size={32} /></div>
                        <h4 className="text-lg font-semibold mb-3">Maximize Your Space</h4>
                        <p className="text-white/70 text-[15px] leading-relaxed">
                            Free up to 10% more usable floor space by removing bulky radiators. Position your sofas and beds wherever you like.
                        </p>
                    </div>

                    <div className="relative group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-dh-red/10 rounded-full blur-3xl group-hover:bg-dh-red/20 transition-colors" />
                        <div className="mb-6 opacity-90"><ThermometerSun size={32} /></div>
                        <h4 className="text-lg font-semibold mb-3">Total Comfort</h4>
                        <p className="text-white/70 text-[15px] leading-relaxed">
                            Radiant heat emitted low down and all around the room creates a thermal envelope that eliminates cold spots and drafts.
                        </p>
                    </div>

                    <div className="relative group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-dh-red/10 rounded-full blur-3xl group-hover:bg-dh-red/20 transition-colors" />
                        <div className="mb-6 opacity-90"><Sparkles size={32} /></div>
                        <h4 className="text-lg font-semibold mb-3">Clean & Hygienic</h4>
                        <p className="text-white/70 text-[15px] leading-relaxed">
                            With no dust-trapping fins or grills behind radiators, ThermaSkirt prevents dust circulation—ideal for allergies.
                        </p>
                    </div>

                    <div className="relative group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-dh-red/10 rounded-full blur-3xl group-hover:bg-dh-red/20 transition-colors" />
                        <div className="mb-6 opacity-90"><ShieldCheck size={32} /></div>
                        <h4 className="text-lg font-semibold mb-3">Safe to Touch</h4>
                        <p className="text-white/70 text-[15px] leading-relaxed">
                            Operating at safe surface temperatures with absolutely no hard edges or hot pipes, making it the safest choice for young families.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
