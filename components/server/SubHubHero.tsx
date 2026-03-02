import Link from 'next/link';
import Image from 'next/image';

interface SubHubHeroProps {
    badge?: string;
    title: string;
    titleHighlight?: string;
    description: string;
    primaryCta?: { text: string; href: string };
    secondaryCta?: { text: string; href: string };
    imageSrc?: string;
    imageAlt?: string;
    trustText?: string;
    theme?: 'light' | 'dark';
}

export default function SubHubHero({
    badge,
    title,
    titleHighlight,
    description,
    primaryCta,
    secondaryCta,
    imageSrc,
    imageAlt,
    trustText = '4.8/5 on Trustpilot',
    theme = 'light' // homeowner default
}: SubHubHeroProps) {
    const isLight = theme === 'light';

    return (
        <section className={`relative min-h-[70vh] flex flex-col justify-end pt-32 pb-16 px-6 lg:px-12 overflow-hidden ${isLight ? 'bg-dh-grey-light' : 'bg-dh-dark'}`}>
            <div className="absolute inset-0 z-0">
                {imageSrc && (
                    <Image
                        src={imageSrc}
                        alt={imageAlt || 'Hero background'}
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                )}
                <div
                    className="absolute inset-0 z-10"
                    style={{
                        background: isLight
                            ? 'linear-gradient(to right, rgba(245,245,245,0.95) 0%, rgba(245,245,245,0.7) 50%, rgba(245,245,245,0) 100%)'
                            : 'linear-gradient(to right, rgba(26,26,26,0.95) 0%, rgba(26,26,26,0.7) 50%, rgba(26,26,26,0) 100%)'
                    }}
                />
            </div>

            <div className="relative z-10 max-w-3xl w-full">
                {badge && (
                    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full backdrop-blur-md border mb-8 hero-el opacity-100 shadow-sm ${isLight ? 'bg-white/60 border-white/40' : 'bg-white/10 border-white/10'}`}>
                        <div className="w-2 h-2 rounded-full bg-dh-red animate-pulse" />
                        <span className={`text-sm font-medium ${isLight ? 'text-dh-dark' : 'text-white'}`}>{badge}</span>
                    </div>
                )}

                <h1 className={`text-[32px] md:text-[44px] leading-[1.15] font-light tracking-tight mb-8 hero-el opacity-100 ${isLight ? 'text-dh-dark' : 'text-white'}`}>
                    {title}{' '}
                    {titleHighlight && (
                        <em className="italic font-medium text-dh-red not-italic px-0 block mt-2">{titleHighlight}</em>
                    )}
                </h1>

                <p className={`text-lg max-w-xl mb-10 hero-el opacity-100 font-light leading-relaxed ${isLight ? 'text-dh-grey' : 'text-white/80'}`}>
                    {description}
                </p>

                <div className="flex flex-wrap gap-4 mb-12 hero-el opacity-100">
                    {primaryCta && (
                        <Link href={primaryCta.href} className="hp-btn-primary py-3.5 px-6 text-base shadow-[0_4px_18px_rgba(210,35,42,0.3)]">
                            {primaryCta.text}
                        </Link>
                    )}
                    {secondaryCta && (
                        <Link href={secondaryCta.href} className={`hp-btn-secondary py-3.5 px-6 text-base ${isLight ? '!text-dh-dark !border-dh-dark/20 hover:!border-dh-dark/40 bg-white/50 backdrop-blur-sm' : ''}`}>
                            {secondaryCta.text}
                        </Link>
                    )}
                </div>

                {trustText && (
                    <div className="hero-el opacity-100 flex items-center gap-3">
                        <div className="flex -space-x-2">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-green-500 flex items-center justify-center text-white text-xs font-bold">★</div>
                            ))}
                        </div>
                        <span className={`text-sm font-medium ${isLight ? 'text-dh-dark/80' : 'text-white/80'}`}>{trustText}</span>
                    </div>
                )}
            </div>
        </section>
    );
}
