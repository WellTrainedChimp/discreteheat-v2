import Link from 'next/link';

interface Stat {
    value: string;
    label: string;
    source?: string;
    href?: string;
}

interface StatsStripProps {
    stats: Stat[];
    variant?: 'light' | 'dark';
}

export default function StatsStrip({ stats, variant = 'dark' }: StatsStripProps) {
    const isDark = variant === 'dark';

    return (
        <section
            className={`py-14 px-6 lg:px-12 ${isDark ? 'bg-dh-dark' : 'bg-white border-y border-dh-grey-light/80'}`}
            aria-label="Key statistics"
        >
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center gap-2">
                            <span
                                className={`text-3xl md:text-4xl font-semibold tracking-tight ${isDark ? 'text-dh-red' : 'text-dh-red'}`}
                            >
                                {stat.value}
                            </span>
                            <span
                                className={`text-sm md:text-base font-light leading-snug ${isDark ? 'text-white/80' : 'text-dh-grey'}`}
                            >
                                {stat.label}
                            </span>
                            {stat.source && (
                                stat.href ? (
                                    <Link
                                        href={stat.href}
                                        className={`text-[11px] uppercase tracking-wider mt-1 transition-colors ${isDark ? 'text-white/40 hover:text-white/70' : 'text-dh-grey/50 hover:text-dh-grey/80'}`}
                                    >
                                        {stat.source}
                                    </Link>
                                ) : (
                                    <span
                                        className={`text-[11px] uppercase tracking-wider mt-1 ${isDark ? 'text-white/40' : 'text-dh-grey/50'}`}
                                    >
                                        {stat.source}
                                    </span>
                                )
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
