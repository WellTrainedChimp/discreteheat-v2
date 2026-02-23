import Link from 'next/link';
import { ArrowRight, Home, Building2, Wrench } from 'lucide-react';

export default function AudienceRouting() {
    return (
        <section id="audience-grid" className="py-24 px-6 lg:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-light text-dh-dark mb-12 text-center">
                    Who are you <span className="font-medium italic text-dh-red">building for?</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Link href="/homeowners" className="group flex flex-col bg-dh-grey-light p-8 rounded-[14px] border-2 border-transparent hover:border-dh-red transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                        <div className="w-12 h-12 rounded-full bg-dh-red/10 flex items-center justify-center mb-6 text-dh-red group-hover:scale-110 transition-transform">
                            <Home size={24} />
                        </div>
                        <h3 className="text-2xl font-semibold mb-3 text-dh-dark">I&apos;m a Homeowner</h3>
                        <p className="text-dh-grey leading-relaxed mb-8 flex-grow">
                            Explore room ideas, compare running costs, and find out if ThermaSkirt is right for your renovation or heat pump upgrade.
                        </p>
                        <div className="flex items-center text-sm font-semibold text-dh-red">
                            <span className="group-hover:mr-2 transition-all">Explore Homeowner Hub</span>
                            <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </div>
                    </Link>

                    <Link href="/specifiers" className="group flex flex-col bg-dh-grey-light p-8 rounded-[14px] border-2 border-transparent hover:border-dh-red transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                        <div className="w-12 h-12 rounded-full bg-dh-red/10 flex items-center justify-center mb-6 text-dh-red group-hover:scale-110 transition-transform">
                            <Building2 size={24} />
                        </div>
                        <h3 className="text-2xl font-semibold mb-3 text-dh-dark">I&apos;m a Specifier</h3>
                        <p className="text-dh-grey leading-relaxed mb-8 flex-grow">
                            Access BSRIA test results, NBS clauses, PAS 2035 compliance data, and specification support for your next project.
                        </p>
                        <div className="flex items-center text-sm font-semibold text-dh-red">
                            <span className="group-hover:mr-2 transition-all">Access Technical Data</span>
                            <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </div>
                    </Link>

                    <Link href="/trade" className="group relative flex flex-col bg-dh-grey-light p-8 rounded-[14px] border-2 border-transparent hover:border-dh-red transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden">
                        <div className="absolute top-0 right-0 bg-dh-red text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-bl-[8px]">
                            Installer Programme
                        </div>
                        <div className="w-12 h-12 rounded-full bg-dh-red/10 flex items-center justify-center mb-6 text-dh-red group-hover:scale-110 transition-transform mt-2">
                            <Wrench size={24} />
                        </div>
                        <h3 className="text-2xl font-semibold mb-3 text-dh-dark">I&apos;m in the Trade</h3>
                        <p className="text-dh-grey leading-relaxed mb-8 flex-grow">
                            Join the registered installer network, access pipe templates, download documentation, and get local branch pricing.
                        </p>
                        <div className="flex items-center text-sm font-semibold text-dh-red">
                            <span className="group-hover:mr-2 transition-all">Join the Network</span>
                            <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
