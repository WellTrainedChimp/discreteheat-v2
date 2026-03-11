import Link from 'next/link';

export default function FeatureCards() {
    return (
        <section className="bg-dh-grey-light py-24 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

                <div className="bg-white border border-black/5 rounded-[14px] p-8 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:border-dh-red hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col feature-card">
                    <span className="section-label">Space</span>
                    <h3 className="text-xl font-semibold text-dh-dark mb-6">Reclaim 600–900mm of wall space per room</h3>

                    <div className="mb-6">
                        <div className="text-[34px] font-semibold text-dh-red leading-none mb-1">20mm</div>
                        <div className="text-sm text-dh-grey font-medium">Projection from wall</div>
                    </div>

                    <p className="text-[15px] text-dh-grey leading-[1.6] mb-8 flex-grow">
                        ThermaSkirt projects just 20mm from the wall — less than standard timber skirting. Your furniture goes anywhere, unconstrained by radiator placements.
                    </p>

                    <Link href="/homeowners/vs/radiators/" className="text-dh-red font-medium text-[15px] hover:underline inline-flex items-center gap-1">
                        Compare with radiators &rarr;
                    </Link>
                </div>

                <div className="bg-white border border-black/5 rounded-[14px] p-8 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:border-dh-red hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col feature-card">
                    <span className="section-label">Comfort</span>
                    <h3 className="text-xl font-semibold text-dh-dark mb-6">Less than 1°C variance across the room</h3>

                    <div className="mb-6">
                        <div className="text-[34px] font-semibold text-dh-red leading-none mb-1">&lt;1°C</div>
                        <div className="text-sm text-dh-grey font-medium">BSRIA thermal imaging</div>
                    </div>

                    <p className="text-[15px] text-dh-grey leading-[1.6] mb-8 flex-grow">
                        BSRIA independent testing shows near-uniform heat distribution. It delivers the luxurious comfort of underfloor heating without the floor disruption.
                    </p>

                    <Link href="/homeowners/vs/underfloor-heating/" className="text-dh-red font-medium text-[15px] hover:underline inline-flex items-center gap-1">
                        Compare with underfloor heating &rarr;
                    </Link>
                </div>

                <div className="bg-white border border-black/5 rounded-[14px] p-8 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:border-dh-red hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col feature-card">
                    <span className="section-label">Efficiency</span>
                    <h3 className="text-xl font-semibold text-dh-dark mb-6">Designed for 35–45°C flow temperatures</h3>

                    <div className="mb-6">
                        <div className="text-[34px] font-semibold text-dh-red leading-none mb-1">+0.4 CoP</div>
                        <div className="text-sm text-dh-grey font-medium">Heat pump efficiency uplift</div>
                    </div>

                    <p className="text-[15px] text-dh-grey leading-[1.6] mb-8 flex-grow">
                        Retains 48% of its output at low temperatures compared to just 30% for radiators. Lower system flow temperatures mean lower running costs.
                    </p>

                    <Link href="/homeowners/by-heat-source/heat-pump/" className="text-dh-red font-medium text-[15px] hover:underline inline-flex items-center gap-1">
                        ThermaSkirt for heat pumps &rarr;
                    </Link>
                </div>

            </div>
        </section>
    );
}
