import { Ruler, Activity, CheckSquare } from 'lucide-react';

export default function SpecifierFeatures() {
    return (
        <section className="py-24 px-6 lg:px-12 bg-dh-grey-light">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="section-label text-dh-red uppercase tracking-widest text-[13px] font-bold mb-4 block">
                        Performance & Compliance
                    </span>
                    <h2 className="text-3xl md:text-4xl font-semibold text-dh-dark tracking-tight">
                        Engineered to meet the <span className="font-normal italic text-dh-red">Future Homes Standard.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="bg-white p-10 rounded-[14px] border border-black/5 shadow-sm transform transition-all duration-300 hover:shadow-md">
                        <div className="w-14 h-14 rounded-full bg-dh-dark/5 flex items-center justify-center mb-8 text-dh-dark">
                            <Ruler size={28} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-semibold text-dh-dark mb-4 tracking-tight">20mm Slim Profile</h3>
                        <p className="text-dh-grey text-[15px] leading-relaxed mb-6 font-light">
                            Designed to replicate standard architectural mouldings. Projects just 20mm from the wall, minimizing trip hazards and maximizing usable floor area in high-density developments.
                        </p>
                        <div className="pt-6 border-t border-black/5">
                            <ul className="space-y-3">
                                <li className="flex items-start text-sm text-dh-dark font-medium">
                                    <span className="text-dh-red mr-2 tracking-tighter">→</span> No structural wall chasing required
                                </li>
                                <li className="flex items-start text-sm text-dh-dark font-medium">
                                    <span className="text-dh-red mr-2 tracking-tighter">→</span> Compatible with off-site modular build
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-white p-10 rounded-[14px] border border-black/5 shadow-sm transform transition-all duration-300 hover:shadow-md">
                        <div className="w-14 h-14 rounded-full bg-dh-red/10 flex items-center justify-center mb-8 text-dh-red">
                            <Activity size={28} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-semibold text-dh-dark mb-4 tracking-tight">&lt;1°C Temperature Variance</h3>
                        <p className="text-dh-grey text-[15px] leading-relaxed mb-6 font-light">
                            BSRIA tests confirm ThermaSkirt delivers omnidirectional radiant heat, achieving identical thermal stratification profiles to underfloor heating with over 50% faster response times.
                        </p>
                        <div className="pt-6 border-t border-black/5">
                            <ul className="space-y-3">
                                <li className="flex items-start text-sm text-dh-dark font-medium">
                                    <span className="text-dh-red mr-2 tracking-tighter">→</span> Rapid response to solar gain
                                </li>
                                <li className="flex items-start text-sm text-dh-dark font-medium">
                                    <span className="text-dh-red mr-2 tracking-tighter">→</span> Eliminates cold spots and thermal bridging
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-white p-10 rounded-[14px] border border-black/5 shadow-sm transform transition-all duration-300 hover:shadow-md">
                        <div className="w-14 h-14 rounded-full bg-dh-dark/5 flex items-center justify-center mb-8 text-dh-dark">
                            <CheckSquare size={28} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-semibold text-dh-dark mb-4 tracking-tight">PAS 2035 & Part L Compliant</h3>
                        <p className="text-dh-grey text-[15px] leading-relaxed mb-6 font-light">
                            Fully optimized for low-temperature heat pump systems. Verified by Energy House 2.0 to improve Air Source Heat Pump CoP by up to 0.5 compared to oversized radiators.
                        </p>
                        <div className="pt-6 border-t border-black/5">
                            <ul className="space-y-3">
                                <li className="flex items-start text-sm text-dh-dark font-medium">
                                    <span className="text-dh-red mr-2 tracking-tighter">→</span> Flow temperatures from 35°C–45°C
                                </li>
                                <li className="flex items-start text-sm text-dh-dark font-medium">
                                    <span className="text-dh-red mr-2 tracking-tighter">→</span> Supports deep retrofit strategies
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
