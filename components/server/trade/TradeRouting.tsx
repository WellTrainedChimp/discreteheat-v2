import Link from 'next/link';
import { UserCheck, PackageOpen, Zap, FileText } from 'lucide-react';

export default function TradeRouting() {
    return (
        <section id="audience-grid" className="py-24 px-6 lg:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-dh-dark mb-12 tracking-tight">
                    Installer <span className="text-dh-red">Resources.</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Link href="/trade/installer-programme" className="group flex flex-col bg-dh-grey-light p-8 rounded-[12px] border-2 border-transparent hover:border-dh-red transition-all duration-300">
                        <div className="w-14 h-14 bg-white border border-black/10 flex items-center justify-center mb-6 text-dh-dark group-hover:text-dh-red transition-colors shadow-sm">
                            <UserCheck size={28} strokeWidth={2} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-dh-dark">Installer Programme</h3>
                        <p className="text-dh-grey text-[16px] leading-relaxed mb-8 flex-grow">
                            Register to receive local homeowner leads directly to your inbox and access our quoting tool.
                        </p>
                        <div className="flex items-center text-[15px] font-bold text-dh-red mt-auto">
                            <span className="group-hover:mr-2 transition-all">Register Now</span>
                            <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                        </div>
                    </Link>

                    <Link href="/trade/products" className="group flex flex-col bg-dh-grey-light p-8 rounded-[12px] border-2 border-transparent hover:border-dh-red transition-all duration-300">
                        <div className="w-14 h-14 bg-white border border-black/10 flex items-center justify-center mb-6 text-dh-dark group-hover:text-dh-red transition-colors shadow-sm">
                            <PackageOpen size={28} strokeWidth={2} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-dh-dark">Products for Trade</h3>
                        <p className="text-dh-grey text-[16px] leading-relaxed mb-8 flex-grow">
                            View output tables, dimensions, cutting lists, and SKU data for the full ThermaSkirt range.
                        </p>
                        <div className="flex items-center text-[15px] font-bold text-dh-red mt-auto">
                            <span className="group-hover:mr-2 transition-all">View Specs</span>
                            <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                        </div>
                    </Link>

                    <Link href="/trade/add2rad" className="group flex flex-col bg-dh-grey-light p-8 rounded-[12px] border-2 border-transparent hover:border-dh-red transition-all duration-300">
                        <div className="w-14 h-14 bg-white border border-black/10 flex items-center justify-center mb-6 text-dh-dark group-hover:text-dh-red transition-colors shadow-sm">
                            <Zap size={28} strokeWidth={2} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-dh-dark">Add2Rad Hub</h3>
                        <p className="text-dh-grey text-[16px] leading-relaxed mb-8 flex-grow">
                            The ultimate heat pump retrofit tool. Boost existing radiator outputs without replacing the pipework.
                        </p>
                        <div className="flex items-center text-[15px] font-bold text-dh-red mt-auto">
                            <span className="group-hover:mr-2 transition-all">Learn More</span>
                            <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                        </div>
                    </Link>

                    <Link href="/trade/resources" className="group flex flex-col bg-dh-grey-light p-8 rounded-[12px] border-2 border-transparent hover:border-dh-red transition-all duration-300">
                        <div className="w-14 h-14 bg-white border border-black/10 flex items-center justify-center mb-6 text-dh-dark group-hover:text-dh-red transition-colors shadow-sm">
                            <FileText size={28} strokeWidth={2} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-dh-dark">Installation Guides</h3>
                        <p className="text-dh-grey text-[16px] leading-relaxed mb-8 flex-grow">
                            Download step-by-step PDF fitting instructions, video tutorials, and water treatment protocols.
                        </p>
                        <div className="flex items-center text-[15px] font-bold text-dh-red mt-auto">
                            <span className="group-hover:mr-2 transition-all">Get Docs</span>
                            <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
