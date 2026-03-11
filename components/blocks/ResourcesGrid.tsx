import Link from 'next/link';
import { ArrowRight, type LucideIcon } from 'lucide-react';

export interface ResourceTile {
    title: string;
    description: string;
    href: string;
    icon: LucideIcon;
}

export interface ResourcesGridProps {
    heading: string;
    description: string;
    resources: ResourceTile[];
    id?: string;
}

export default function ResourcesGrid({
    heading,
    description,
    resources,
    id,
}: ResourcesGridProps) {
    return (
        <section id={id} className="py-20 px-6 lg:px-12 bg-dh-grey-light overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-10 lg:mb-14">
                    <h2 className="text-3xl md:text-4xl font-light text-dh-dark mb-4">
                        {heading}
                    </h2>
                    <p className="text-[17px] text-dh-grey leading-relaxed max-w-3xl">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {resources.map((resource, index) => (
                        <Link
                            key={index}
                            href={resource.href}
                            className="group flex flex-col p-6 border-2 border-transparent bg-white rounded-[14px] hover:border-dh-red transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] focus-visible:outline-dh-red focus-visible:ring-2 focus-visible:ring-offset-4 h-full"
                        >
                            <div className="mb-5 text-dh-red">
                                <resource.icon size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-dh-dark group-hover:text-dh-red transition-colors">
                                {resource.title}
                            </h3>
                            <p className="text-dh-grey text-sm mb-6 flex-grow">
                                {resource.description}
                            </p>
                            <div className="flex items-center text-sm font-semibold text-dh-red mt-auto overflow-hidden">
                                <span className="group-hover:mr-2 transition-all">Download</span>
                                <ArrowRight size={16} className="opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all font-bold group-hover:ml-0 delay-75" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
