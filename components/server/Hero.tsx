import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative min-h-[85vh] flex flex-col justify-end pt-32 pb-16 px-6 lg:px-12 bg-dh-dark overflow-hidden">
            {/* Background with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 z-10"
                    style={{ background: 'linear-gradient(to right, rgba(26,26,26,0.9) 0%, rgba(26,26,26,0.65) 45%, rgba(26,26,26,0.3) 100%)' }}
                />
                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/assets/videos/hero.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="relative z-10 max-w-3xl w-full">
                {/* Eyebrow badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-8 hero-el opacity-100">
                    <div className="w-2 h-2 rounded-full bg-dh-red animate-pulse" />
                    <span className="text-white text-sm font-medium">As Seen on Dragons&apos; Den</span>
                </div>

                {/* H1 Heading */}
                <h1 className="text-[32px] md:text-[44px] leading-[1.15] text-white font-light tracking-tight mb-8 hero-el opacity-100">
                    The Skirting Board That <em className="italic font-medium text-dh-red not-italic px-1">Heats Your Home</em>
                </h1>

                <p className="text-lg text-white/80 max-w-xl mb-10 hero-el opacity-100 font-light leading-relaxed">
                    ThermaSkirt is a patented radiant heating system designed to look like a standard skirting board. Reclaim your walls, improve your comfort, and optimise your heat pump.
                </p>

                {/* Decision Fork - Router Buttons */}
                <div className="flex flex-wrap gap-4 mb-12 hero-el opacity-100">
                    <Link href="#audience-grid" className="hp-btn-primary">
                        Find Your Solution
                    </Link>
                    <Link href="/learn/what-is-skirting-board-heating/" className="hp-btn-secondary">
                        How it works
                    </Link>
                </div>

                {/* Trust Bar */}
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-[13px] text-white/70 hero-el opacity-100">
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-dh-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        <span><strong className="text-white font-medium">85,000+</strong> systems installed</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-dh-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        <span><strong className="text-white font-medium">Excellent</strong> on Trustpilot</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-dh-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        <span><strong className="text-white font-medium">NHS</strong> approved</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
