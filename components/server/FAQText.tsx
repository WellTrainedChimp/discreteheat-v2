import React from 'react';

export interface FAQItem {
    question: string;
    answer: React.ReactNode;
}

interface FAQTextProps {
    faqs: FAQItem[];
    sectionLabel?: string;
    heading?: string;
}

export default function FAQText({ faqs, sectionLabel = 'Frequently Asked Questions', heading = 'Everything you need to know' }: FAQTextProps) {
    // Generate JSON-LD Schema
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(faq => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: typeof faq.answer === 'string' ? faq.answer : 'Read more on this topic.'
            }
        }))
    };

    return (
        <section className="py-16 md:py-24 px-6 lg:px-12 bg-white border-t border-dh-grey-light">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <div className="max-w-3xl mx-auto">
                {sectionLabel && (
                    <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">
                        {sectionLabel}
                    </span>
                )}
                {heading && (
                    <h2 className="text-[28px] md:text-[36px] font-light text-dh-dark mb-12 tracking-tight">
                        {heading}
                    </h2>
                )}

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <details
                            key={idx}
                            className="group rounded-xl border border-dh-grey-light bg-dh-grey-light/30 overflow-hidden [&_summary::-webkit-details-marker]:hidden"
                        >
                            <summary className="flex cursor-pointer items-center justify-between p-6 text-dh-dark font-medium hover:bg-white transition-colors">
                                <span className="pr-6">{faq.question}</span>
                                <span className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dh-red">
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                </span>
                            </summary>
                            <div className="px-6 pb-6 pt-0 text-dh-grey leading-relaxed border-t border-dh-grey-light/50 bg-white">
                                <div className="pt-4 space-y-4">
                                    {faq.answer}
                                </div>
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
