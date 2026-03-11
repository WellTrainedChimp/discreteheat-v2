import Link from 'next/link';
import { Building2, FileBarChart, Library, GraduationCap } from 'lucide-react';

export default function SpecifierRouting() {
    return (
        <section id="audience-grid" className="py-24 px-6 lg:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
                <span className="section-label text-dh-red uppercase tracking-widest text-[13px] font-bold mb-4 block">
                    Specification Resources
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold text-dh-dark mb-12 tracking-tight">
                    Access technical data <span className="font-medium italic text-dh-red font-normal">and support.</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Link href="/specifiers/applications" className="group flex flex-col bg-dh-grey-light p-8 rounded-[14px] border-2 border-transparent hover:border-dh-red transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                        <div className="w-12 h-12 rounded-[8px] bg-white border border-black/5 flex items-center justify-center mb-6 text-dh-dark group-hover:text-dh-red transition-colors shadow-sm">
                            <Building2 size={24} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-dh-dark tracking-tight">Applications</h3>
                        <p className="text-dh-grey text-[14px] leading-relaxed mb-8 flex-grow">
                            Detailed suitability guidelines for Healthcare, Social Housing, New Build, and Education sectors.
                        </p>
                        <div className="flex items-center text-[13px] font-bold uppercase tracking-wider text-dh-red mt-auto">
                            <span className="group-hover:mr-2 transition-all">View Sectors</span>
                            <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                        </div>
                    </Link>

                    <Link href="/specifiers/technical-data" className="group flex flex-col bg-dh-grey-light p-8 rounded-[14px] border-2 border-transparent hover:border-dh-red transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                        <div className="w-12 h-12 rounded-[8px] bg-white border border-black/5 flex items-center justify-center mb-6 text-dh-dark group-hover:text-dh-red transition-colors shadow-sm">
                            <FileBarChart size={24} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-dh-dark tracking-tight">Technical Data</h3>
                        <p className="text-dh-grey text-[14px] leading-relaxed mb-8 flex-grow">
                            BSRIA test results, Energy House 2.0 reports, output tables, and environmental compliance data (PAS 2035).
                        </p>
                        <div className="flex items-center text-[13px] font-bold uppercase tracking-wider text-dh-red mt-auto">
                            <span className="group-hover:mr-2 transition-all">Access Data</span>
                            <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                        </div>
                    </Link>

                    <Link href="/specifiers/specification-support" className="group flex flex-col bg-dh-grey-light p-8 rounded-[14px] border-2 border-transparent hover:border-dh-red transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                        <div className="w-12 h-12 rounded-[8px] bg-white border border-black/5 flex items-center justify-center mb-6 text-dh-dark group-hover:text-dh-red transition-colors shadow-sm">
                            <Library size={24} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-dh-dark tracking-tight">Spec Support</h3>
                        <p className="text-dh-grey text-[14px] leading-relaxed mb-8 flex-grow">
                            Download NBS Clauses, CAD blocks, tender wording, and framework access documentation.
                        </p>
                        <div className="flex items-center text-[13px] font-bold uppercase tracking-wider text-dh-red mt-auto">
                            <span className="group-hover:mr-2 transition-all">Download Pack</span>
                            <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                        </div>
                    </Link>

                    <Link href="/specifiers/cpd" className="group relative flex flex-col bg-dh-grey-light p-8 rounded-[14px] border-2 border-transparent hover:border-dh-red transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden">
                        <div className="absolute top-0 right-0 bg-dh-dark text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-bl-[8px]">
                            CIBSE Accredited
                        </div>
                        <div className="w-12 h-12 rounded-[8px] bg-white border border-black/5 flex items-center justify-center mb-6 text-dh-dark group-hover:text-dh-red transition-colors shadow-sm mt-2">
                            <GraduationCap size={24} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-dh-dark tracking-tight">CPD & Training</h3>
                        <p className="text-dh-grey text-[14px] leading-relaxed mb-8 flex-grow">
                            Book a lunch and learn session covering radiant heating science and low-temperature system design.
                        </p>
                        <div className="flex items-center text-[13px] font-bold uppercase tracking-wider text-dh-red mt-auto">
                            <span className="group-hover:mr-2 transition-all">Book a Session</span>
                            <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
