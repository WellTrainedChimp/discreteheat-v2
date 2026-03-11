import Link from 'next/link';
import { Star } from 'lucide-react';

export interface TestimonialStripProps {
    quote: string;
    author: string;
    tags?: string[];
    rating?: number;
    caseStudiesLink?: string;
}

export default function TestimonialStrip({
    quote,
    author,
    tags = [],
    rating = 5,
    caseStudiesLink = '/homeowners/case-studies',
}: TestimonialStripProps) {
    return (
        <section className="bg-dh-grey-light border-y border-gray-200/60 py-8 px-6 lg:px-12">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-3">
                    <p className="text-lg md:text-xl text-dh-dark font-medium italic leading-relaxed">
                        &quot;{quote}&quot;
                    </p>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-[14px]">
                        <span className="font-bold text-dh-dark">{author}</span>
                        {tags.map((tag, idx) => (
                            <span key={idx} className="flex items-center gap-2">
                                <span className="text-dh-grey/50">•</span>
                                <span className="text-dh-grey">{tag}</span>
                            </span>
                        ))}
                        <span className="flex items-center gap-2">
                            <span className="text-dh-grey/50">•</span>
                            <span className="flex items-center text-dh-red">
                                {Array.from({ length: rating }).map((_, i) => (
                                    <Star key={i} size={14} className="fill-current" />
                                ))}
                            </span>
                        </span>
                    </div>
                </div>
                {caseStudiesLink && (
                    <div className="shrink-0">
                        <Link
                            href={caseStudiesLink}
                            className="text-[14px] font-semibold text-dh-red hover:underline underline-offset-4 decoration-2"
                        >
                            View all case studies →
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
