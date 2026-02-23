import Link from 'next/link';
import { BedDouble, Hammer, Flame, Scale } from 'lucide-react';

export default function HomeownerRouting() {
    return (
        <section id="audience-grid" className="py-24 px-6 lg:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
                <span className="section-label text-dh-red uppercase tracking-widest text-[13px] font-semibold mb-4 block">
                    Find your solution
                </span>
                <h2 className="text-3xl md:text-4xl font-light text-dh-dark mb-12">
                    How can we help your <span className="font-medium italic text-dh-red">next project?</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Link href="/homeowners/by-room" className="group flex flex-col bg-dh-grey-light p-8 rounded-[14px] border-2 border-transparent hover:border-dh-red transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                        <div className="w-12 h-12 rounded-full bg-dh-red/10 flex items-center justify-center mb-6 text-dh-red group-hover:scale-110 transition-transform">
                            <BedDouble size={24} />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-dh-dark">By Room</h3>
                        <p className="text-dh-grey text-[15px] leading-relaxed mb-8 flex-grow">
                            Explore solutions tailored to living rooms, bedrooms, kitchens, and garden rooms.
                        </p>
                        <div className="flex items-center text-sm font-semibold text-dh-red mt-auto">
                            <span className="group-hover:mr-2 transition-all">Explore Rooms</span>
                            <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                        </div>
                    </Link>

                    <Link href="/homeowners/by-project" className="group flex flex-col bg-dh-grey-light p-8 rounded-[14px] border-2 border-transparent hover:border-dh-red transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                        <div className="w-12 h-12 rounded-full bg-dh-red/10 flex items-center justify-center mb-6 text-dh-red group-hover:scale-110 transition-transform">
                            <Hammer size={24} />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-dh-dark">By Project</h3>
                        <p className="text-dh-grey text-[15px] leading-relaxed mb-8 flex-grow">
                            Whether it&apos;s a renovation, an extension, or a self-build, see how we integrate seamlessly.
                        </p>
                        <div className="flex items-center text-sm font-semibold text-dh-red mt-auto">
                            <span className="group-hover:mr-2 transition-all">View Projects</span>
                            <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                        </div>
                    </Link>

                    <Link href="/homeowners/by-heat-source" className="group flex flex-col bg-dh-grey-light p-8 rounded-[14px] border-2 border-transparent hover:border-dh-red transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                        <div className="w-12 h-12 rounded-full bg-dh-red/10 flex items-center justify-center mb-6 text-dh-red group-hover:scale-110 transition-transform">
                            <Flame size={24} />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-dh-dark">By Heat Source</h3>
                        <p className="text-dh-grey text-[15px] leading-relaxed mb-8 flex-grow">
                            Switching to a heat pump? Keeping your boiler? Or going full electric? We have you covered.
                        </p>
                        <div className="flex items-center text-sm font-semibold text-dh-red mt-auto">
                            <span className="group-hover:mr-2 transition-all">Check Compatibility</span>
                            <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                        </div>
                    </Link>

                    <Link href="/homeowners/vs" className="group flex flex-col bg-dh-grey-light p-8 rounded-[14px] border-2 border-transparent hover:border-dh-red transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                        <div className="w-12 h-12 rounded-full bg-dh-red/10 flex items-center justify-center mb-6 text-dh-red group-hover:scale-110 transition-transform">
                            <Scale size={24} />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-dh-dark">Compare Options</h3>
                        <p className="text-dh-grey text-[15px] leading-relaxed mb-8 flex-grow">
                            See honest, side-by-side comparisons of ThermaSkirt vs radiators and underfloor heating.
                        </p>
                        <div className="flex items-center text-sm font-semibold text-dh-red mt-auto">
                            <span className="group-hover:mr-2 transition-all">Compare Systems</span>
                            <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
