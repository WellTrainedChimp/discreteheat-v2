import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface CTABannerProps {
    heading: string;
    description: string;
    primaryCTA: string;
    primaryCTALink: string;
    secondaryCTA: string;
    secondaryCTALink: string;
    additionalLinks?: { text: string; href: string }[];
}

export default function CTABanner({
    heading,
    description,
    primaryCTA,
    primaryCTALink,
    secondaryCTA,
    secondaryCTALink,
    additionalLinks,
}: CTABannerProps) {
    return (
        <section className="py-24 px-6 lg:px-12 bg-dh-dark text-white relative overflow-hidden">
            {/* Background design elements */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-dh-red rounded-full blur-[100px]" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-dh-grey rounded-full blur-[100px]" />
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-light mb-6">
                    {heading}
                </h2>
                <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                    {description}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href={primaryCTALink}
                        className="bg-dh-red hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(224,36,36,0.3)] hover:-translate-y-1 flex items-center group w-full sm:w-auto justify-center"
                    >
                        {primaryCTA}
                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href={secondaryCTALink}
                        className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:-translate-y-1 flex items-center group w-full sm:w-auto justify-center backdrop-blur-sm"
                    >
                        {secondaryCTA}
                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
                {additionalLinks && additionalLinks.length > 0 && (
                    <div className="mt-6 flex flex-wrap justify-center gap-6">
                        {additionalLinks.map((link, idx) => (
                            <Link
                                key={idx}
                                href={link.href}
                                className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center group"
                            >
                                {link.text}
                                <ArrowRight size={14} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all font-bold" />
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
