'use client';

import WistiaPlayer from '@/components/client/WistiaPlayer';

export interface CaseStudySectionProps {
    badge?: string;
    heading: string;
    description: string;
    mediaId: string;
    aspect?: number;
    caption?: string;
}

export default function CaseStudySection({
    badge = 'Case Study',
    heading,
    description,
    mediaId,
    aspect = 16 / 9,
    caption,
}: CaseStudySectionProps) {
    return (
        <section className="py-20 px-6 lg:px-12 bg-white">
            <div className="max-w-4xl mx-auto">
                <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">
                    {badge}
                </span>
                <h2 className="text-3xl font-light text-dh-dark mb-4 tracking-tight">
                    {heading}
                </h2>
                <p className="text-lg text-dh-grey leading-relaxed mb-6">
                    {description}
                </p>
                <WistiaPlayer mediaId={mediaId} aspect={aspect} />
                {caption && (
                    <p className="text-sm text-dh-grey mt-4">{caption}</p>
                )}
            </div>
        </section>
    );
}
