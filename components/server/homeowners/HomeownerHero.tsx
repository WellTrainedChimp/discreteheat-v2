import Link from 'next/link';

export default function HomeownerHero() {
    return (
        <section className="relative min-h-[80vh] flex flex-col justify-end pt-32 pb-16 px-6 lg:px-12 overflow-hidden bg-dh-grey-light">
            {/* Background Image / Gradient - Lighter version for Homeowners */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 z-10"
                    style={{ background: 'linear-gradient(to right, rgba(245,245,245,0.95) 0%, rgba(245,245,245,0.7) 50%, rgba(245,245,245,0) 100%)' }}
                />
                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/assets/videos/hero_homeowner.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="relative z-10 max-w-3xl w-full">
                {/* Eyebrow badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/40 mb-8 hero-el opacity-100 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-dh-red animate-pulse" />
                    <span className="text-dh-dark text-sm font-medium">Over 85,000 UK Homes</span>
                </div>

                {/* H1 Heading */}
                <h1 className="text-[32px] md:text-[44px] leading-[1.15] text-dh-dark font-light tracking-tight mb-8 hero-el opacity-100">
                    The heating system your home deserves. <em className="italic font-medium text-dh-red not-italic px-0 block mt-2">Invisible comfort.</em>
                </h1>

                <p className="text-lg text-dh-grey max-w-xl mb-10 hero-el opacity-100 font-light leading-relaxed">
                    Designed to look like a premium skirting board, ThermaSkirt operates at lower temperatures, removes bulky radiators, and gives you back your interior space.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4 mb-12 hero-el opacity-100">
                    <Link href="/homeowners/get-a-quote/" className="hp-btn-primary py-3.5 px-6 text-base shadow-[0_4px_18px_rgba(210,35,42,0.3)]">
                        Get a Free Itemised Quote
                    </Link>
                    <Link href="/homeowners/cost-guide/" className="hp-btn-secondary !text-dh-dark !border-dh-dark/20 hover:!border-dh-dark/40 py-3.5 px-6 text-base bg-white/50 backdrop-blur-sm">
                        View Cost Guide
                    </Link>
                </div>

                {/* Trust Signals */}
                <div className="hero-el opacity-100 flex items-center gap-3">
                    <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full border-2 border-white bg-green-500 flex items-center justify-center text-white text-xs font-bold">★</div>
                        <div className="w-8 h-8 rounded-full border-2 border-white bg-green-500 flex items-center justify-center text-white text-xs font-bold">★</div>
                        <div className="w-8 h-8 rounded-full border-2 border-white bg-green-500 flex items-center justify-center text-white text-xs font-bold">★</div>
                        <div className="w-8 h-8 rounded-full border-2 border-white bg-green-500 flex items-center justify-center text-white text-xs font-bold">★</div>
                        <div className="w-8 h-8 rounded-full border-2 border-white bg-green-500 flex items-center justify-center text-white text-xs font-bold">★</div>
                    </div>
                    <span className="text-sm font-medium text-dh-dark/80">4.8/5 on Trustpilot</span>
                </div>
            </div>
        </section>
    );
}
