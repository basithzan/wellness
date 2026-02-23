'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const missionWords = `At Zenora Wellness, our mission is to redefine what it means to thrive in the modern world of work — transforming executive health from an afterthought into a strategic advantage. We are committed to delivering evidence-based, deeply personalized wellness experiences that honor the complexity of the human body and the demands of corporate life.`.split(' ');

export default function MissionSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const wordsRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const loadGSAP = async () => {
            const { ScrollTrigger } = await import('gsap/ScrollTrigger');
            gsap.registerPlugin(ScrollTrigger);

            if (titleRef.current) {
                gsap.fromTo(
                    titleRef.current,
                    { y: 30, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.9,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: titleRef.current,
                            start: 'top 80%',
                        },
                    }
                );
            }

            if (wordsRef.current) {
                const spans = wordsRef.current.querySelectorAll('.mission-word');
                gsap.fromTo(
                    spans,
                    { opacity: 0.15 },
                    {
                        opacity: 1,
                        duration: 0.1,
                        stagger: 0.04,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: wordsRef.current,
                            start: 'top 70%',
                            end: 'bottom 60%',
                            scrub: 0.8,
                        },
                    }
                );
            }
        };

        loadGSAP();
    }, []);

    return (
        <section
            id="mission"
            ref={sectionRef}
            className="relative py-36 overflow-hidden"
            style={{ background: 'linear-gradient(160deg, #071A0E 0%, #0A2E1C 50%, #071A0E 100%)' }}
        >
            {/* Background image with parallax */}
            <div
                className="absolute inset-0 opacity-[0.07] pointer-events-none"
                style={{
                    backgroundImage: 'url(/hero-bg.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                }}
            />

            {/* Grain */}
            <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    backgroundSize: '200px',
                }}
            />

            <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
                {/* Section label */}
                <div className="flex items-center justify-center gap-3 mb-10">
                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#C9A96E]" />
                    <span className="section-label">Our Mission</span>
                    <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C9A96E]" />
                </div>

                {/* Large quote mark */}
                <div
                    className="text-[#C9A96E]/20 mb-6 leading-none"
                    style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '10rem', lineHeight: 0.7 }}
                >
                    &ldquo;
                </div>

                {/* Title */}
                <h2
                    ref={titleRef}
                    className="text-white mb-12"
                    style={{
                        fontFamily: 'Cormorant Garamond, Georgia, serif',
                        fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                        fontWeight: 300,
                        lineHeight: 1.3,
                        letterSpacing: '-0.01em',
                    }}
                >
                    Redefining executive wellness as a{' '}
                    <em style={{ color: '#C9A96E', fontStyle: 'italic' }}>strategic advantage</em>
                    , not a benefit.
                </h2>

                {/* Gold divider */}
                <div className="flex justify-center mb-16">
                    <span className="gold-divider" style={{ width: '80px' }} />
                </div>

                {/* Mission text — word-by-word reveal */}
                <div ref={wordsRef} className="text-white/80 leading-relaxed" style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', fontWeight: 300 }}>
                    {missionWords.map((word, i) => (
                        <span key={i} className="mission-word inline-block mr-[0.3em] mb-1">
                            {word}
                        </span>
                    ))}
                </div>

                {/* Bottom divider */}
                <div className="flex justify-center mt-20">
                    <div className="gold-divider-full" style={{ maxWidth: '240px' }} />
                </div>
            </div>
        </section>
    );
}
