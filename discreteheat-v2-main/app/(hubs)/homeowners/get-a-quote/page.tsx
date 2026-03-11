import React from 'react';
import NavbarMorph from '@/components/client/NavbarMorph';

export const metadata = {
    title: 'Get a Free Quote | ThermaSkirt Heating Design Service',
    description: 'Upload your floor plans or room dimensions for a free, no-obligation ThermaSkirt quote. Our engineers will provide a detailed itemized parts manifest.',
    alternates: {
        canonical: 'https://www.discreteheat.com/homeowners/get-a-quote/',
    },
    openGraph: {
        images: [{ url: 'https://www.discreteheat.com/MediaHandler.ashx?id=2a3a5535-6119-4b26-b66f-263eecc7eb5a', width: 1200, height: 630, alt: 'Get a Free Quote | ThermaSkirt Heating Design Service' }],
    },
};

export default function GetAQuotePage() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red pt-32 pb-20 px-6 lg:px-12">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-dh-red mb-4">Design Service</span>
                        <h1 className="text-4xl md:text-5xl font-light text-dh-dark mb-6 tracking-tight">Get a Free Itemised Quote</h1>
                        <p className="text-xl text-dh-grey max-w-2xl mx-auto leading-relaxed">
                            Because every ThermaSkirt system is bespoke to your specific room dimensions and heat loss requirements, we don&apos;t sell online. Give us your measurements, and our engineers will design your system for free.
                        </p>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-black/5">
                        <div className="mb-12">
                            <h2 className="text-2xl font-light text-dh-dark mb-4">How it works</h2>
                            <ol className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-dh-dark text-white flex items-center justify-center font-bold">1</div>
                                    <div>
                                        <h3 className="font-semibold text-dh-dark text-lg">Send us your plans</h3>
                                        <p className="text-dh-grey">Hand-drawn sketches, architect DWGs, or simple length x width measurements. Just show us where the doors and windows are.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-dh-dark text-white flex items-center justify-center font-bold">2</div>
                                    <div>
                                        <h3 className="font-semibold text-dh-dark text-lg">We engineer the layout</h3>
                                        <p className="text-dh-grey">Our technical team calculates the exact heat loss for your rooms and plots the necessary corner joints and active heating lengths.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-dh-dark text-white flex items-center justify-center font-bold">3</div>
                                    <div>
                                        <h3 className="font-semibold text-dh-dark text-lg">Receive your itemized manifest</h3>
                                        <p className="text-dh-grey">Within 48 hours, you&apos;ll receive a completely free, itemized quote detailing exactly what parts you need and the total material cost.</p>
                                    </div>
                                </li>
                            </ol>
                        </div>

                        <hr className="border-dh-grey-light my-8" />

                        {/* Note: This is an unstyled placeholder for the actual form component 
                            which likely uses a third-party form provider or custom server actions */}
                        <div className="text-center p-8 bg-dh-grey-light rounded-xl border border-dashed border-dh-grey">
                            <h3 className="text-xl font-semibold text-dh-dark mb-4">[Form Component Placeholder]</h3>
                            <p className="text-dh-grey">
                                This section will contain the interactive lead capture form, including file upload inputs for floor plans, drop-downs for heat source type (Boiler/Heat Pump), and contact details.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
