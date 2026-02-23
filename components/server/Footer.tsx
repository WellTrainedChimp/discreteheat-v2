import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-dh-dark text-white/70 pt-20 pb-10 px-6 lg:px-12 rounded-t-[2rem] lg:rounded-t-[3rem] mt-24">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">

                    {/* Brand Col */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <span className="text-2xl font-semibold tracking-tight text-dh-red flex-shrink-0">
                                Discrete<span className="text-white">Heat</span>
                            </span>
                        </Link>
                        <p className="mb-6 max-w-sm leading-relaxed text-[15px]">
                            UK manufacturer of ThermaSkirt skirting board heating systems. Over 85,000 systems installed across residential, social housing, healthcare, and commercial applications.
                        </p>
                        <div className="flex items-center gap-2 mb-8">
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                            <span className="font-mono text-xs tracking-wider uppercase">System Operational</span>
                        </div>
                    </div>

                    {/* Links Col 1 */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Homeowners</h4>
                        <ul className="space-y-4 text-[14px]">
                            <li><Link href="/homeowners/by-heat-source" className="hover:text-dh-red transition-colors">By Heat Source</Link></li>
                            <li><Link href="/homeowners/by-room" className="hover:text-dh-red transition-colors">By Room</Link></li>
                            <li><Link href="/homeowners/by-project" className="hover:text-dh-red transition-colors">By Project</Link></li>
                            <li><Link href="/homeowners/vs" className="hover:text-dh-red transition-colors">Comparisons</Link></li>
                            <li><Link href="/homeowners/cost-guide" className="hover:text-dh-red transition-colors">Cost Guide</Link></li>
                        </ul>
                    </div>

                    {/* Links Col 2 */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Specifiers</h4>
                        <ul className="space-y-4 text-[14px]">
                            <li><Link href="/specifiers/applications" className="hover:text-dh-red transition-colors">Applications</Link></li>
                            <li><Link href="/specifiers/technical-data" className="hover:text-dh-red transition-colors">Technical Data</Link></li>
                            <li><Link href="/specifiers/specification-support" className="hover:text-dh-red transition-colors">Specification Support</Link></li>
                            <li><Link href="/specifiers/technical-data/energy-house-2-report" className="hover:text-dh-red transition-colors">Energy House 2.0</Link></li>
                            <li><Link href="/specifiers/cpd" className="hover:text-dh-red transition-colors flex items-center gap-1">Book CPD <ArrowUpRight size={14} /></Link></li>
                        </ul>
                    </div>

                    {/* Links Col 3 */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Trade</h4>
                        <ul className="space-y-4 text-[14px]">
                            <li><Link href="/trade/installer-programme" className="hover:text-dh-red transition-colors">Installer Programme</Link></li>
                            <li><Link href="/trade/add2rad" className="hover:text-dh-red transition-colors">Add2Rad Hub</Link></li>
                            <li><Link href="/trade/products" className="hover:text-dh-red transition-colors">Trade Products</Link></li>
                            <li><Link href="/trade/merchants" className="hover:text-dh-red transition-colors">Find a Merchant</Link></li>
                            <li><Link href="/trade/resources" className="hover:text-dh-red transition-colors">Resources & Manuals</Link></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px]">
                    <p>&copy; {new Date().getFullYear()} DiscreteHeat Ltd. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
