import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export default function TradeHero() {
    return (
        <section className="relative min-h-[80vh] flex flex-col justify-end pt-32 pb-16 px-6 lg:px-12 overflow-hidden bg-[#111111]">
            {/* Background Image / Gradient - High contrast for Trade */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 z-10"
                    style={{ background: 'linear-gradient(to right, rgba(17,17,17,0.95) 0%, rgba(17,17,17,0.85) 45%, rgba(17,17,17,0.4) 100%)' }}
                />
                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover filter contrast-125 saturate-50 opacity-40"
                >
                    <source src="/assets/videos/hero_trade.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="relative z-10 max-w-3xl w-full">
                {/* Eyebrow badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-8 hero-el opacity-100">
                    <span className="text-white text-[13px] font-bold tracking-wider uppercase flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-dh-red" />
                        Available in 375+ Merchant Branches
                    </span>
                </div>

                {/* H1 Heading - Preset C Typography (Direct/Bold) */}
                <h1 className="text-[36px] md:text-[56px] leading-[1.05] text-white font-bold tracking-tight mb-6 hero-el opacity-100">
                    Install smarter, earn more. <span className="font-normal text-white/50 block mt-2 text-[30px] md:text-[42px]">Fit in half the time of UFH.</span>
                </h1>

                <p className="text-[17px] text-white/80 max-w-xl mb-10 hero-el opacity-100 leading-relaxed">
                    Join the registered installer network. Get direct homeowner lead referrals, access trade pricing, and download fitting templates.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4 mb-16 hero-el opacity-100">
                    <Link href="/trade/installer-programme/register" className="hp-btn-primary py-4 px-8 text-[16px] font-bold shadow-[0_4px_20px_rgba(210,35,42,0.4)]">
                        Register as an Installer
                    </Link>
                    <Link href="/trade/products" className="hp-btn-secondary py-4 px-8 text-[16px] font-bold border-white/30 hover:bg-white/10 hover:border-white">
                        View Trade Products
                    </Link>
                </div>
            </div>
        </section>
    );
}
