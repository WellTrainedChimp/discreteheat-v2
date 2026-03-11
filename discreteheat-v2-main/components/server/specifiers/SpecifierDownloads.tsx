import Link from 'next/link';

export default function SpecifierDownloads() {
    return (
        <section className="bg-dh-red py-20 px-6 lg:px-12 text-white text-center">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
                    Ready to specify ThermaSkirt?
                </h2>
                <p className="text-lg text-white/90 mb-10 font-light max-w-2xl mx-auto">
                    Download our complete Specifiers Pack, including NBS Clauses, CAD blocks, technical output tables, and full BSRIA test reports.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/specifiers/specification-support/nbs-clauses" className="bg-white text-dh-red font-semibold py-4 px-8 rounded-[8px] hover:bg-white/90 transition-colors shadow-lg shadow-black/10">
                        Download Specifiers Pack (.ZIP)
                    </Link>
                    <Link href="/specifiers/specification-support/request-a-cpd" className="bg-transparent text-white border-2 border-white/30 font-semibold py-4 px-8 rounded-[8px] hover:bg-white/10 transition-colors">
                        Book a CIBSE CPD
                    </Link>
                </div>
            </div>
        </section>
    );
}
