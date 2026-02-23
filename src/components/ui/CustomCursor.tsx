'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        let mouseX = 0;
        let mouseY = 0;
        let ringX = 0;
        let ringY = 0;
        let animId: number;

        const onMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dot.style.left = `${mouseX}px`;
            dot.style.top = `${mouseY}px`;
        };

        const animate = () => {
            ringX += (mouseX - ringX) * 0.12;
            ringY += (mouseY - ringY) * 0.12;
            ring.style.left = `${ringX}px`;
            ring.style.top = `${ringY}px`;
            animId = requestAnimationFrame(animate);
        };

        animId = requestAnimationFrame(animate);

        const onEnter = () => {
            dot.classList.add('is-hovering');
            ring.classList.add('is-hovering');
        };

        const onLeave = () => {
            dot.classList.remove('is-hovering');
            ring.classList.remove('is-hovering');
        };

        const interactives = document.querySelectorAll('a, button, [data-cursor]');
        interactives.forEach((el) => {
            el.addEventListener('mouseenter', onEnter);
            el.addEventListener('mouseleave', onLeave);
        });

        // Observe DOM mutations for dynamically added elements
        const observer = new MutationObserver(() => {
            const newInteractives = document.querySelectorAll('a, button, [data-cursor]');
            newInteractives.forEach((el) => {
                el.removeEventListener('mouseenter', onEnter);
                el.removeEventListener('mouseleave', onLeave);
                el.addEventListener('mouseenter', onEnter);
                el.addEventListener('mouseleave', onLeave);
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        document.addEventListener('mousemove', onMouseMove);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(animId);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className="cursor-dot hidden md:block" />
            <div ref={ringRef} className="cursor-ring hidden md:block" />
        </>
    );
}
