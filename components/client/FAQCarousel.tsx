'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Placeholder video data
const videos = [
    { id: 1, title: 'Does it work with existing radiators?', thumb: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400&h=711' },
    { id: 2, title: 'How does it compare to UFH?', thumb: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400&h=711' },
    { id: 3, title: 'Will my furniture block the heat?', thumb: 'https://images.unsplash.com/photo-1618220179428-22790b46a0eb?auto=format&fit=crop&q=80&w=400&h=711' },
    { id: 4, title: 'Can I install it myself?', thumb: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=400&h=711' },
    { id: 5, title: 'Is it safe for children?', thumb: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=400&h=711' },
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
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={video.thumb} alt={video.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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
