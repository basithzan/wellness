'use client';

import { useEffect, useRef } from 'react';

export default function ScrollProgressBar() {
    const barRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const bar = barRef.current;
        if (!bar) return;

        const onScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
            bar.style.width = `${progress}%`;
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div
            ref={barRef}
            className="scroll-progress-bar"
            style={{ width: '0%' }}
            aria-hidden="true"
        />
    );
}
