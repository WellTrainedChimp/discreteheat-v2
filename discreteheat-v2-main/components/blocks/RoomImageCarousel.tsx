"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import {
    getImagesByRoom,
    type RoomType,
    type MediaImage,
} from "@/lib/media-library";

// ── Slug-to-RoomType mapping ──

const SLUG_TO_ROOMS: Record<string, RoomType[]> = {
    "living-room": ["living-room"],
    bedroom: ["bedroom"],
    kitchen: ["kitchen"],
    bathroom: ["bathroom"],
    "home-office": ["office"],
    "open-plan": ["open-plan"],
    "garden-room": ["conservatory"],
};

function getImagesForSlug(slug: string): MediaImage[] {
    const roomTypes = SLUG_TO_ROOMS[slug];
    if (!roomTypes) return [];

    const seen = new Set<string>();
    const images: MediaImage[] = [];

    for (const roomType of roomTypes) {
        for (const img of getImagesByRoom(roomType)) {
            if (!seen.has(img.id)) {
                seen.add(img.id);
                images.push(img);
            }
        }
    }

    return images;
}

// ── Lightbox ──

interface LightboxProps {
    images: MediaImage[];
    currentIndex: number;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
    onImageError: (id: string) => void;
}

function Lightbox({ images, currentIndex, onClose, onPrev, onNext, onImageError }: LightboxProps) {
    const image = images[currentIndex];

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") onPrev();
            if (e.key === "ArrowRight") onNext();
        };
        document.addEventListener("keydown", handleKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handleKey);
            document.body.style.overflow = "";
        };
    }, [onClose, onPrev, onNext]);

    if (!image) return null;

    return createPortal(
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={onClose}
        >
            {/* Close button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
                aria-label="Close lightbox"
            >
                <X className="size-6" />
            </button>

            {/* Counter */}
            <div className="absolute top-4 left-4 z-10 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white">
                {currentIndex + 1} / {images.length}
            </div>

            {/* Prev arrow */}
            <button
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                className="absolute left-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
                aria-label="Previous image"
            >
                <ArrowLeft className="size-5" />
            </button>

            {/* Image */}
            <div
                className="relative max-h-[85vh] max-w-[90vw] aspect-[4/3] w-full md:max-w-[80vw]"
                onClick={(e) => e.stopPropagation()}
            >
                <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-contain"
                    sizes="90vw"
                    priority
                    onError={() => {
                        onImageError(image.id);
                        onNext();
                    }}
                />
            </div>

            {/* Next arrow */}
            <button
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                className="absolute right-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
                aria-label="Next image"
            >
                <ArrowRight className="size-5" />
            </button>
        </div>,
        document.body,
    );
}

// ── Main Carousel Component ──

interface RoomImageCarouselProps {
    roomSlug: string;
    className?: string;
}

export default function RoomImageCarousel({ roomSlug, className }: RoomImageCarouselProps) {
    const allImages = useMemo(() => getImagesForSlug(roomSlug), [roomSlug]);

    const [failedIds, setFailedIds] = useState<Set<string>>(new Set());
    const [carouselApi, setCarouselApi] = useState<CarouselApi>();
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    // Filter out images that failed to load
    const images = useMemo(
        () => allImages.filter((img) => !failedIds.has(img.id)),
        [allImages, failedIds],
    );

    // Mark an image as broken
    const handleImageError = useCallback((id: string) => {
        setFailedIds((prev) => {
            if (prev.has(id)) return prev;
            const next = new Set(prev);
            next.add(id);
            return next;
        });
    }, []);

    useEffect(() => {
        if (!carouselApi) return;
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

    // Lightbox handlers
    const openLightbox = useCallback((index: number) => {
        setLightboxIndex(index);
    }, []);

    const closeLightbox = useCallback(() => {
        setLightboxIndex(null);
    }, []);

    const lightboxPrev = useCallback(() => {
        setLightboxIndex((prev) =>
            prev !== null ? (prev - 1 + images.length) % images.length : null,
        );
    }, [images.length]);

    const lightboxNext = useCallback(() => {
        setLightboxIndex((prev) =>
            prev !== null ? (prev + 1) % images.length : null,
        );
    }, [images.length]);

    if (images.length === 0) return null;

    const shouldLoop = images.length >= 3;
    const showDots = images.length <= 10;

    return (
        <div className={className ?? "my-16"}>
            {/* Desktop header row — counter + arrows */}
            <div className="hidden md:flex items-center justify-end gap-4 mb-4">
                <span className="text-sm font-medium text-dh-grey">
                    {images.length} images
                </span>
                <div className="flex shrink-0 gap-2">
                    <Button
                        size="icon"
                        variant="outline"
                        onClick={() => carouselApi?.scrollPrev()}
                        disabled={!canScrollPrev}
                        className="disabled:pointer-events-auto rounded-full w-10 h-10 border-black/10 text-dh-dark hover:bg-dh-red hover:text-white hover:border-dh-red transition-all"
                    >
                        <ArrowLeft className="size-4" />
                    </Button>
                    <Button
                        size="icon"
                        variant="outline"
                        onClick={() => carouselApi?.scrollNext()}
                        disabled={!canScrollNext}
                        className="disabled:pointer-events-auto rounded-full w-10 h-10 border-black/10 text-dh-dark hover:bg-dh-red hover:text-white hover:border-dh-red transition-all"
                    >
                        <ArrowRight className="size-4" />
                    </Button>
                </div>
            </div>

            <Carousel
                setApi={setCarouselApi}
                opts={{
                    loop: shouldLoop,
                    align: "start",
                    dragFree: true,
                }}
            >
                <CarouselContent className="-ml-4">
                    {images.map((image, index) => (
                        <CarouselItem
                            key={image.id}
                            className="basis-[85%] pl-4 md:basis-[45%] lg:basis-[32%]"
                        >
                            <button
                                type="button"
                                className="relative aspect-[4/3] w-full cursor-zoom-in rounded-2xl overflow-hidden bg-dh-grey-light border border-dh-grey-light/50 block"
                                onClick={() => openLightbox(index)}
                                aria-label={`View full image: ${image.alt}`}
                            >
                                <Image
                                    src={image.url}
                                    alt={image.alt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 32vw"
                                    onError={() => handleImageError(image.id)}
                                />
                            </button>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {/* Mobile: dots or counter */}
            <div className="mt-6 flex items-center justify-center gap-2 md:hidden">
                {showDots ? (
                    images.map((_, index) => (
                        <button
                            key={index}
                            className={`h-2.5 rounded-full transition-all duration-300 ${
                                currentSlide === index
                                    ? "w-8 bg-dh-red"
                                    : "w-2.5 bg-dh-red/20"
                            }`}
                            onClick={() => carouselApi?.scrollTo(index)}
                            aria-label={`Go to image ${index + 1}`}
                        />
                    ))
                ) : (
                    <span className="text-sm font-medium text-dh-grey">
                        {currentSlide + 1} / {images.length}
                    </span>
                )}
            </div>

            {/* Lightbox */}
            {lightboxIndex !== null && (
                <Lightbox
                    images={images}
                    currentIndex={lightboxIndex}
                    onClose={closeLightbox}
                    onPrev={lightboxPrev}
                    onNext={lightboxNext}
                    onImageError={handleImageError}
                />
            )}
        </div>
    );
}
