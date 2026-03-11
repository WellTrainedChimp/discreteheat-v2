export default function ProofBar() {
    return (
        <section className="bg-dh-grey-light py-8 px-6 lg:px-12 border-b border-black/5">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <span className="text-xs uppercase tracking-[0.1em] text-dh-grey font-semibold mb-6">Trusted by</span>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-55 hover:opacity-90 transition-opacity duration-300 grayscale hover:grayscale-0">
                    {/* Logo placeholders */}
                    <div className="text-xl font-bold font-serif">Wickes</div>
                    <div className="text-xl font-bold font-serif">Jewson</div>
                    <div className="text-xl font-bold font-serif whitespace-nowrap">City Plumbing</div>
                    <div className="text-xl font-bold font-serif gap-2 flex items-center">MKM</div>
                    <div className="hidden md:block text-xl font-bold font-serif">James Hargreaves</div>
                    <div className="hidden lg:block text-xl font-bold font-serif whitespace-nowrap">Vistry Group</div>
                </div>
            </div>
        </section>
    );
}
