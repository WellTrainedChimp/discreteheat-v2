"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

export interface CategoryTile {
    title: string;
    description: string;
    href: string;
    image?: string;
}

export interface ExploreCategorySectionProps {
    heading: string;
    description: string;
    tiles: CategoryTile[];
    id?: string;
}

export default function ExploreCategorySection({
    heading,
    description,
    tiles,
    id,
}: ExploreCategorySectionProps) {
    const [carouselApi, setCarouselApi] = useState<CarouselApi>();
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (!carouselApi) {
            return;
        }
        const updateSelection = () => {
            setCanScrollPrev(carouselApi.canScrollPrev());
            setCanScrollNext(carouselApi.canScrollNext());
            setCurrentSlide(carouselApi.selectedScrollSnap());
        };
        updateSelection();
        carouselApi.on("select", updateSelection);
        return () => {
            carouselApi.off("select", updateSelection);
        };
    }, [carouselApi]);

    return (
        <section id={id} className="py-20 px-6 lg:px-12 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-10 lg:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-light text-dh-dark mb-4 transform-none">
                            {heading.split(' ').map((word, index, arr) => {
                                if (index === arr.length - 1 || word.toLowerCase() === 'by') {
                                    return (
                                        <span key={index} className="font-medium">
                                            {word}{' '}
                                        </span>
                                    );
                                }
                                return <span key={index}>{word} </span>;
                            })}
                        </h2>
                        <p className="text-[17px] text-dh-grey leading-relaxed">
                            {description}
                        </p>
                    </div>
                    {/* Desktop Navigation Arrows */}
                    <div className="hidden shrink-0 gap-2 md:flex">
                        <Button
                            size="icon"
                            variant="outline"
                            onClick={() => carouselApi?.scrollPrev()}
                            disabled={!canScrollPrev}
                            className="disabled:pointer-events-auto rounded-full w-12 h-12 border-black/10 text-dh-dark hover:bg-dh-red hover:text-white hover:border-dh-red transition-all"
                        >
                            <ArrowLeft className="size-5" />
                        </Button>
                        <Button
                            size="icon"
                            variant="outline"
                            onClick={() => carouselApi?.scrollNext()}
                            disabled={!canScrollNext}
                            className="disabled:pointer-events-auto rounded-full w-12 h-12 border-black/10 text-dh-dark hover:bg-dh-red hover:text-white hover:border-dh-red transition-all"
                        >
                            <ArrowRight className="size-5" />
                        </Button>
                    </div>
                </div>
            </div>

            <div className="w-full -my-4">
                <Carousel
                    setApi={setCarouselApi}
                    opts={{
                        align: "start",
                        breakpoints: {
                            "(max-width: 768px)": {
                                dragFree: true,
                            },
                        },
                    }}
                >
                    <CarouselContent className="ml-0 md:ml-[max(2rem,calc(50vw-40rem))] py-4">
                        {tiles.map((tile, index) => (
                            <CarouselItem
                                key={index}
                                className="max-w-[300px] sm:max-w-[340px] pl-4 lg:max-w-[360px] lg:pl-6"
                            >
                                <Link
                                    href={tile.href}
                                    className="group flex flex-col bg-dh-grey-light rounded-[14px] border-2 border-transparent hover:border-dh-red transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden h-full focus-visible:outline-dh-red focus-visible:ring-2 focus-visible:ring-offset-4"
                                >
                                    <div className="relative w-full aspect-[4/3] bg-gray-200 overflow-hidden shrink-0">
                                        {tile.image ? (
                                            <Image
                                                src={tile.image}
                                                alt={tile.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                sizes="(max-width: 768px) 75vw, (max-width: 1024px) 33vw, 25vw"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 bg-dh-grey-light flex items-center justify-center">
                                                <span className="text-gray-400">Image</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                                        <h3 className="text-xl font-semibold mb-3 text-dh-dark leading-tight">
                                            {tile.title}
                                        </h3>
                                        <p className="text-dh-grey text-[15px] leading-relaxed mb-6 flex-grow">
                                            {tile.description}
                                        </p>
                                        <div className="flex items-center text-sm font-semibold text-dh-red mt-auto overflow-hidden">
                                            <span className="group-hover:mr-2 transition-all">Explore</span>
                                            <ArrowRight size={16} className="opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all font-bold group-hover:ml-0 delay-75" />
                                        </div>
                                    </div>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                {/* Mobile Navigation Dots */}
                <div className="mt-8 flex justify-center gap-2 md:hidden">
                    {tiles.map((_, index) => (
                        <button
                            key={index}
                            className={`h-2.5 rounded-full transition-all duration-300 ${currentSlide === index ? "w-8 bg-dh-red" : "w-2.5 bg-dh-red/20"
                                }`}
                            onClick={() => carouselApi?.scrollTo(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
