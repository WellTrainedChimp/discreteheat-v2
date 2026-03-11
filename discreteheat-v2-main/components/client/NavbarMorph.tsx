'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function NavbarMorph() {
    useEffect(() => {
        // We target the nav element which is guaranteed to be rendered by the server component
        const nav: HTMLElement | null = document.querySelector('nav');

        if (!nav) return;

        // Start transparent, text white
        gsap.set(nav, {
            backgroundColor: 'rgba(255, 255, 255, 0)',
            backdropFilter: 'blur(0px)',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            boxShadow: 'none',
            color: '#ffffff'
        });

        const links = nav.querySelectorAll('a:not(.hp-btn-primary)');
        gsap.set(links, { color: '#ffffff' });

        // Ensure logo text has white base
        const logoBase = nav.querySelector('.text-dh-dark');
        if (logoBase) gsap.set(logoBase, { color: '#ffffff' });

        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                start: 'top -50',
                end: 99999,
                onUpdate: (self) => {
                    if (self.direction === 1 && self.progress > 0) {
                        // Scrolling down past 50px - Morph to solid
                        gsap.to(nav, {
                            backgroundColor: 'rgba(255, 255, 255, 0.85)',
                            backdropFilter: 'blur(16px)',
                            borderColor: 'rgba(0, 0, 0, 0.05)',
                            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                            duration: 0.4,
                            ease: 'power2.out'
                        });
                        gsap.to(links, { color: '#1A1A1A', duration: 0.4 });
                        if (logoBase) gsap.to(logoBase, { color: '#1A1A1A', duration: 0.4 });
                    } else if (self.direction === -1 && self.progress === 0) {
                        // Back at top - Morph to transparent
                        gsap.to(nav, {
                            backgroundColor: 'rgba(255, 255, 255, 0)',
                            backdropFilter: 'blur(0px)',
                            borderColor: 'rgba(255, 255, 255, 0.1)',
                            boxShadow: 'none',
                            duration: 0.4,
                            ease: 'power2.out'
                        });
                        gsap.to(links, { color: '#ffffff', duration: 0.4 });
                        if (logoBase) gsap.to(logoBase, { color: '#ffffff', duration: 0.4 });
                    }
                }
            });
        });

        return () => ctx.revert();
    }, []);

    return null; // Empty client component that just injects behavior
}
