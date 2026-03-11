"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

export interface Gallery4Item {
    id: string;
    title: string;
    description: string;
    href: string;
    image: string;
}

export interface Gallery4Props {
    title?: string;
    description?: string;
    items?: Gallery4Item[];
}

const data = [
    {
        id: "h2o",
        title: "ThermaSkirt H2O",
        description: "Our core hydronic skirting board heating system. Designed to work flawlessly with your existing boiler or a new low-temperature heat pump.",
        href: "/homeowners/products/thermaskirt-h2o",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=c287107e-ac14-4abc-b282-8676388df56c"
    },
    {
        id: "electric",
        title: "ThermaSkirt e",
        description: "The direct electric alternative. Perfect for apartments, retrofits, or extensions without access to wet system pipework.",
        href: "/homeowners/products/thermaskirt-e",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=7f158087-624d-44eb-8ab7-1c885002c85f"
    },
    {
        id: "lst",
        title: "EasyClean LST",
        description: "Low Surface Temperature profile designed exclusively for healthcare, care homes, and social housing. Anti-ligature and easily washable.",
        href: "/homeowners/products/easyclean",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=9a7b40c8-0245-4d26-a04d-72304b92a02f"
    },
    {
        id: "curve",
        title: "ThermaCurve",
        description: "Infra red radiused sections blend into the room disguised as a ceiling level coving, radiating heat evenly around the room.",
        href: "/homeowners/products/thermacurve",
        image: "https://www.discreteheat.com/MediaHandler.ashx?id=4e57c3f4-83d4-4914-a6bf-28d31595bad1"
    },
];

export const Gallery4 = ({
    title = "Our Product Range",
    description = "Explore our suite of patented skirting board heating solutions tailored for residential, commercial, and technical applications.",
    items = data,
}: Gallery4Props) => {
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
        <section className="py-24 bg-white px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 flex items-end justify-between md:mb-16">
                    <div className="flex flex-col gap-4">
                        <span className="section-label">Products</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-dh-dark">
                            {title}
                        </h2>
                        <p className="max-w-lg text-dh-grey text-[15px] leading-relaxed mt-2">{description}</p>
                    </div>
                    <div className="hidden shrink-0 gap-2 md:flex">
                        <Button
                            size="icon"
                            variant="outline"
                            onClick={() => {
                                carouselApi?.scrollPrev();
                            }}
                            disabled={!canScrollPrev}
                            className="disabled:pointer-events-auto rounded-full w-12 h-12 border-black/10 text-dh-dark hover:bg-dh-red hover:text-white hover:border-dh-red transition-all"
                        >
                            <ArrowLeft className="size-5" />
                        </Button>
                        <Button
                            size="icon"
                            variant="outline"
                            onClick={() => {
                                carouselApi?.scrollNext();
                            }}
                            disabled={!canScrollNext}
                            className="disabled:pointer-events-auto rounded-full w-12 h-12 border-black/10 text-dh-dark hover:bg-dh-red hover:text-white hover:border-dh-red transition-all"
                        >
                            <ArrowRight className="size-5" />
                        </Button>
                    </div>
                </div>
            </div>

            <div className="w-full">
                <Carousel
                    setApi={setCarouselApi}
                    opts={{
                        breakpoints: {
                            "(max-width: 768px)": {
                                dragFree: true,
                            },
                        },
                    }}
                >
                    <CarouselContent className="ml-0 md:ml-[max(2rem,calc(50vw-40rem))]">
                        {items.map((item) => (
                            <CarouselItem
                                key={item.id}
                                className="max-w-[320px] pl-4 lg:max-w-[380px] lg:pl-6"
                            >
                                <Link href={item.href} className="group rounded-[16px] block h-full focus-visible:outline-dh-red focus-visible:ring-2 focus-visible:ring-offset-4">
                                    <div className="group relative h-full min-h-[500px] w-full overflow-hidden rounded-[16px] border border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(210,35,42,0.1)] transition-all duration-500">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            sizes="(max-width: 768px) 320px, 380px"
                                            className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 h-full bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                                        <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8">
                                            <div className="mb-2 pt-4 text-2xl font-semibold text-white">
                                                {item.title}
                                            </div>
                                            <div className="mb-8 text-[15px] text-white/80 leading-relaxed font-light line-clamp-3">
                                                {item.description}
                                            </div>
                                            <div className="flex items-center text-sm font-semibold text-dh-red">
                                                Explore System{" "}
                                                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                <div className="mt-8 flex justify-center gap-2 md:hidden">
                    {items.map((_, index) => (
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
};
