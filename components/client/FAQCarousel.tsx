'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const videos = [
    { id: 1, title: 'Does it work with existing radiators?', thumb: 'https://www.discreteheat.com/MediaHandler.ashx?id=49bf72f5-87e9-4fd4-843c-b01ac20138d5' },
    { id: 2, title: 'How does it compare to UFH?', thumb: 'https://www.discreteheat.com/MediaHandler.ashx?id=16027df0-9209-4f6f-b0e6-87a7e41c8875' },
    { id: 3, title: 'Will my furniture block the heat?', thumb: 'https://www.discreteheat.com/MediaHandler.ashx?id=ff62cc90-b847-4caf-993d-e4d3d56016bb' },
    { id: 4, title: 'Can I install it myself?', thumb: 'https://www.discreteheat.com/MediaHandler.ashx?id=d935984b-a5c8-431f-af3f-eeb2a19f4b66' },
    { id: 5, title: 'Is it safe for children?', thumb: 'https://www.discreteheat.com/MediaHandler.ashx?id=32e0462c-c8f0-4f1c-9904-7127a20b3bf1' },
];

export default function FAQCarousel() {
    return (
        <section className="bg-white py-24 px-6 lg:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="section-label mx-auto">Your questions answered</span>
                    <h2 className="text-3xl md:text-4xl text-dh-dark font-light">
                        Everything you need to know <span className="font-medium italic text-dh-red">in 60 seconds</span>
                    </h2>
                </div>

                <div className="relative">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows: false,
                        }}
                        pagination={{ clickable: true }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="w-full !pb-16"
                    >
                        {videos.map((video) => (
                            <SwiperSlide key={video.id} className="!w-[260px] md:!w-[300px]">
                                <div className="relative aspect-[9/16] rounded-[16px] overflow-hidden group shadow-xl">
                                    <Image src={video.thumb} alt={video.title} fill sizes="(max-width: 768px) 260px, 300px" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                    {/* Play Button */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-dh-red rounded-full flex items-center justify-center text-white shadow-lg shadow-dh-red/40 group-hover:scale-110 transition-transform">
                                        <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                    </div>

                                    <h3 className="absolute bottom-6 left-6 right-6 text-white font-medium text-[15px] leading-snug">
                                        {video.title}
                                    </h3>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
