import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface RouteCard {
    title: string;
    description: string;
    href: string;
    badge?: string;
}

interface AudienceRoutingGridProps {
    heading?: string;
    cards: RouteCard[];
}

export default function AudienceRoutingGrid({ heading, cards }: AudienceRoutingGridProps) {
    return (
        <section className="py-16 md:py-24 px-6 lg:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
                {heading && (
                    <h2 className="text-2xl md:text-3xl font-light text-dh-dark mb-10">
                        {heading}
                    </h2>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {cards.map((card, idx) => (
                        <Link
                            key={idx}
                            href={card.href}
                            className="group relative flex flex-col p-8 bg-dh-grey-light rounded-[14px] border-2 border-transparent hover:border-dh-red transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden"
                        >
                            {card.badge && (
                                <div className="absolute top-0 right-0 bg-dh-red text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-[14px] rounded-tr-[12px]">
                                    {card.badge}
                                </div>
                            )}
                            <h3 className="text-[17px] font-semibold text-dh-dark mb-3 pr-4">
                                {card.title}
                            </h3>
                            <p className="text-dh-grey text-[14.5px] leading-relaxed mb-8 flex-grow">
                                {card.description}
                            </p>
                            <div className="flex items-center text-sm font-semibold text-dh-red mt-auto overflow-hidden">
                                <span className="group-hover:mr-2 transition-all">Explore</span>
                                <ArrowRight size={16} className="opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all font-bold group-hover:ml-0 delay-75" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
