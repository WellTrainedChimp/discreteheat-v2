'use client';

import { useEffect, useRef } from 'react';

interface WistiaPlayerProps {
    mediaId: string;
    aspect?: number;
}

/**
 * WistiaPlayer — loads the Wistia player + media scripts dynamically,
 * then renders the <wistia-player> web component once the scripts are ready.
 *
 * This avoids the dangerouslySetInnerHTML problem where <script> tags
 * are ignored by React's DOM renderer, leaving the embed blurred and inert.
 */
export default function WistiaPlayer({ mediaId, aspect = 1.7777777777777777 }: WistiaPlayerProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // ── 1. Load the global Wistia player script (idempotent) ──
        if (!document.querySelector('script[src="https://fast.wistia.com/player.js"]')) {
            const playerScript = document.createElement('script');
            playerScript.src = 'https://fast.wistia.com/player.js';
            playerScript.async = true;
            document.head.appendChild(playerScript);
        }

        // ── 2. Load the media-specific embed script (idempotent) ──
        const embedSrc = `https://fast.wistia.com/embed/${mediaId}.js`;
        if (!document.querySelector(`script[src="${embedSrc}"]`)) {
            const embedScript = document.createElement('script');
            embedScript.src = embedSrc;
            embedScript.async = true;
            embedScript.type = 'module';
            document.head.appendChild(embedScript);
        }
    }, [mediaId]);

    // Padding-top trick for responsive aspect ratio before the player hydrates
    const paddingTop = `${(1 / aspect) * 100}%`;

    return (
        <div ref={containerRef} className="rounded-[14px] overflow-hidden bg-dh-grey-light">
            <style>{`
                wistia-player[media-id='${mediaId}']:not(:defined) {
                    background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${mediaId}/swatch');
                    display: block;
                    filter: blur(5px);
                    padding-top: ${paddingTop};
                }
            `}</style>
            {/*
              The <wistia-player> web component is defined by the Wistia player.js script.
              Once the script loads, it upgrades this custom element into a full video player.
              Using suppressHydrationWarning because the web component renders client-side only.
            */}
            {/* @ts-expect-error Custom web component not recognized by React 18/19 JSX namespace */}
            <wistia-player
                media-id={mediaId}
                aspect={String(aspect)}
                suppressHydrationWarning
            />
        </div>
    );
}

