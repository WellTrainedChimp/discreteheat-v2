import { Timer, Wrench, Shield, TrendingUp } from 'lucide-react';

export default function TradeBenefits() {
    return (
        <section className="bg-[#111111] py-24 px-6 lg:px-12 text-white overflow-hidden border-t-8 border-dh-red">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 max-w-2xl tracking-tight">
                    Why professionals switch to ThermaSkirt.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    <div className="relative group">
                        <div className="mb-6 opacity-100 text-dh-red"><Timer size={40} strokeWidth={2} /></div>
                        <h4 className="text-xl font-bold mb-3 tracking-tight">Faster than UFH</h4>
                        <p className="text-white/80 text-[16px] leading-relaxed">
                            Averages 50% less installation time compared to wet underfloor heating. No floor pulling, no screeding, no waiting for floors to cure.
                        </p>
                    </div>

                    <div className="relative group">
                        <div className="mb-6 opacity-100 text-dh-red"><Wrench size={40} strokeWidth={2} /></div>
                        <h4 className="text-xl font-bold mb-3 tracking-tight">No Wall Chasing</h4>
                        <p className="text-white/80 text-[16px] leading-relaxed">
                            Pipework is hidden safely inside the skirting profile using patented push-fit connections. A completely dry install above the floor line.
                        </p>
                    </div>

                    <div className="relative group">
                        <div className="mb-6 opacity-100 text-dh-red"><TrendingUp size={40} strokeWidth={2} /></div>
                        <h4 className="text-xl font-bold mb-3 tracking-tight">Direct Referrals</h4>
                        <p className="text-white/80 text-[16px] leading-relaxed">
                            Registered installers receive direct, pre-qualified homeowner leads in their postcodes. Keep your calendar full with high-margin jobs.
                        </p>
                    </div>

                    <div className="relative group">
                        <div className="mb-6 opacity-100 text-dh-red"><Shield size={40} strokeWidth={2} /></div>
                        <h4 className="text-xl font-bold mb-3 tracking-tight">Zero Call-Backs</h4>
                        <p className="text-white/80 text-[16px] leading-relaxed">
                            Tested to 10-bar pressure. Engineered from robust 6063-T6 architectural grade aluminium to guarantee durability in family homes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
