import Link from 'next/link';

export default function SpecifierHero() {
    return (
        <section className="relative min-h-[80vh] flex flex-col justify-end pt-32 pb-16 px-6 lg:px-12 overflow-hidden bg-dh-dark">
            {/* Background Image / Gradient - Technical version for Specifiers */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 z-10"
                    style={{ background: 'linear-gradient(to right, rgba(26,26,26,0.95) 0%, rgba(26,26,26,0.8) 40%, rgba(26,26,26,0.4) 100%)' }}
                />
                {/* Fallback image if we don't have a video */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="https://images.unsplash.com/photo-1541888086968-0eb905b769ea?auto=format&fit=crop&q=80&w=2000"
                    alt="Architectural Blueprint and Thermal Imaging"
                    className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 opacity-40"
                />
            </div>

            <div className="relative z-10 max-w-3xl w-full">
                {/* Eyebrow badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 hero-el opacity-100">
                    <div className="w-2 h-2 rounded-full bg-dh-red" />
                    <span className="text-white text-[13px] font-semibold tracking-wide uppercase">CIBSE CPD Accredited</span>
                </div>

                {/* H1 Heading - Preset B Typography (Heavier) */}
                <h1 className="text-[36px] md:text-[52px] leading-[1.1] text-white font-semibold tracking-tight mb-6 hero-el opacity-100">
                    Specified in over 85,000 installations. <span className="font-normal text-white/50 block mt-2">BSRIA tested to EN442-1.</span>
                </h1>

                <p className="text-lg text-white/70 max-w-xl mb-12 hero-el opacity-100 font-light leading-relaxed">
                    Access comprehensive technical data, output tables, and NBS specification clauses for the ThermaSkirt radiant heating system.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4 mb-16 hero-el opacity-100">
                    <Link href="/specifiers/specification-support/request-a-cpd" className="hp-btn-primary py-3.5 px-6 text-[15px] font-medium tracking-wide">
                        Speak to our Spec Team
                    </Link>
                    <Link href="/specifiers/specification-support/nbs-clauses" className="hp-btn-secondary py-3.5 px-6 text-[15px] font-medium tracking-wide border-white/30 hover:border-white/60">
                        Download Specifiers Pack
                    </Link>
                </div>
            </div>
        </section>
    );
}
