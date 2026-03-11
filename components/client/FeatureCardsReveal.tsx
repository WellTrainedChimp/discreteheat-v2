'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FeatureCardsReveal() {
    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.feature-card');
            if (cards.length === 0) return;

            gsap.set(cards, { opacity: 0, y: 40 });

            ScrollTrigger.create({
                trigger: cards[0] as Element,
                start: 'top 85%',
                animation: gsap.to(cards, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out'
                }),
                once: true
            });
        });

        return () => ctx.revert();
    }, []);

    return null;
}
