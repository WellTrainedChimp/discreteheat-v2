'use client';

import { useEffect } from 'react';
import gsap from 'gsap';

export default function HeroAnimation() {
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Elements are initially rendered with opacity-100 by the server for SEO.
            // We immediately set them to 0 and translateY for the animation.
            gsap.set('.hero-el', { opacity: 0, y: 40 });

            gsap.to('.hero-el', {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: {
                    each: 0.15,
                    from: "start"
                },
                ease: 'power3.out',
                delay: 0.2
            });
        });

        return () => ctx.revert();
    }, []);

    return null;
}
