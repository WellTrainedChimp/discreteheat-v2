import Script from 'next/script';

export default function HomeownerTestimonials() {
    return (
        <section className="bg-dh-grey-light py-24 px-6 lg:px-12 border-t border-black/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="section-label text-dh-red uppercase tracking-widest text-[13px] font-bold mb-4 block">
                        Case Studies
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-dh-dark tracking-tight mb-6">
                        Real Customers. <span className="font-medium italic text-dh-red">Real Homes.</span>
                    </h2>
                    <p className="text-dh-grey text-lg font-light leading-relaxed">
                        Hear directly from homeowners and developers who have transformed their living spaces with ThermaSkirt skirting board heating.
                    </p>
                </div>

                {/* Wistia core scripts */}
                <Script src="https://fast.wistia.com/player.js" strategy="lazyOnload" />
                <Script src="https://fast.wistia.com/embed/888x825p0o.js" type="module" strategy="lazyOnload" />
                <Script src="https://fast.wistia.com/embed/672glg6n1w.js" type="module" strategy="lazyOnload" />
                <Script src="https://fast.wistia.com/embed/4lkzk0r7w2.js" type="module" strategy="lazyOnload" />

                {/* Inline CSS for the Wistia Custom Elements */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                    wistia-player[media-id='888x825p0o']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/888x825p0o/swatch'); display: block; filter: blur(5px); padding-top:56.25%; }
                    wistia-player[media-id='672glg6n1w']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/672glg6n1w/swatch'); display: block; filter: blur(5px); padding-top:56.25%; }
                    wistia-player[media-id='4lkzk0r7w2']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/4lkzk0r7w2/swatch'); display: block; filter: blur(5px); padding-top:52.71%; }
                `}} />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Emma and Dan */}
                    <div className="bg-white rounded-[14px] overflow-hidden shadow-sm border border-black/5 flex flex-col transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <div className="w-full relative bg-dh-dark aspect-video">
                            {/* @ts-expect-error NextJS TS doesn't know about Wistia web components */}
                            <wistia-player media-id="888x825p0o" aspect="1.7777777777777777"></wistia-player>
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <h3 className="text-2xl font-semibold text-dh-dark mb-4">Emma & Dan</h3>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="text-[11px] font-bold uppercase tracking-wider bg-dh-grey-light px-2.5 py-1 rounded text-dh-dark/70">Renovation</span>
                                <span className="text-[11px] font-bold uppercase tracking-wider bg-dh-red/10 px-2.5 py-1 rounded text-dh-red">Gas Boiler</span>
                            </div>
                            <p className="text-dh-grey text-[15px] leading-relaxed mb-6 font-light italic flex-grow">
                                &quot;Aesthetically, you don&apos;t even notice it, it&apos;s brilliant. We just got more options really with ThermaSkirt and also the cleanliness, very easy to wipe down.&quot;
                            </p>
                            <div className="border-t border-black/5 pt-4 mt-auto text-[13px] font-semibold text-dh-dark/80 tracking-tight">
                                Installed: Deco BM3 & Deco BM2
                            </div>
                        </div>
                    </div>

                    {/* Nick Smith */}
                    <div className="bg-white rounded-[14px] overflow-hidden shadow-sm border border-black/5 flex flex-col transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <div className="w-full relative bg-dh-dark aspect-video">
                            {/* @ts-expect-error NextJS TS doesn't know about Wistia web components */}
                            <wistia-player media-id="672glg6n1w" aspect="1.7777777777777777"></wistia-player>
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <h3 className="text-2xl font-semibold text-dh-dark mb-4">Nick Smith</h3>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="text-[11px] font-bold uppercase tracking-wider bg-dh-grey-light px-2.5 py-1 rounded text-dh-dark/70">New Build SIPs</span>
                                <span className="text-[11px] font-bold uppercase tracking-wider bg-dh-red/10 px-2.5 py-1 rounded text-dh-red">Heat Pump</span>
                            </div>
                            <p className="text-dh-grey text-[15px] leading-relaxed mb-6 font-light italic flex-grow">
                                &quot;The heat is gentle, it&apos;s a lovely heat, it&apos;s a pleasant heat all the way through all of the skirting boards. There are no restrictions with this heating whatsoever.&quot;
                            </p>
                            <div className="border-t border-black/5 pt-4 mt-auto text-[13px] font-semibold text-dh-dark/80 tracking-tight">
                                Installed: Deco BM3 (Ovolo Capping)
                            </div>
                        </div>
                    </div>

                    {/* Heritage Homes */}
                    <div className="bg-white rounded-[14px] overflow-hidden shadow-sm border border-black/5 flex flex-col transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <div className="w-full relative bg-dh-dark aspect-[1.8972]">
                            {/* @ts-expect-error NextJS TS doesn't know about Wistia web components */}
                            <wistia-player media-id="4lkzk0r7w2" aspect="1.8972332015810276"></wistia-player>
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <h3 className="text-2xl font-semibold text-dh-dark mb-4">Heritage Homes</h3>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="text-[11px] font-bold uppercase tracking-wider bg-dh-grey-light px-2.5 py-1 rounded text-dh-dark/70">Developer</span>
                                <span className="text-[11px] font-bold uppercase tracking-wider bg-dh-red/10 px-2.5 py-1 rounded text-dh-red">Heat Pump</span>
                            </div>
                            <p className="text-dh-grey text-[15px] leading-relaxed mb-6 font-light italic flex-grow">
                                &quot;Heating through a skirting board gives you almost the same surface area you need to heat a room. When you&apos;re walking around the room there&apos;s no cold spots, they&apos;re missing.&quot;
                            </p>
                            <div className="border-t border-black/5 pt-4 mt-auto text-[13px] font-semibold text-dh-dark/80 tracking-tight">
                                Installed: Deco BM2
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
