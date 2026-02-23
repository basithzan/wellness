'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const stats = [
    { num: 500, suffix: '+', label: 'Executives Served' },
    { num: 50, suffix: '+', label: 'Corporate Partners' },
    { num: 98, suffix: '%', label: 'Client Satisfaction' },
];

function useCountUp(end: number, duration = 2, trigger: boolean) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!trigger) return;
        let startTime: number | null = null;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(step);
            else setCount(end);
        };
        requestAnimationFrame(step);
    }, [end, duration, trigger]);

    return count;
}

function StatItem({ stat, trigger }: { stat: typeof stats[0]; trigger: boolean }) {
    const count = useCountUp(stat.num, 2, trigger);
    return (
        <div className="text-center lg:text-left">
            <div
                className="text-[#C9A96E] tracking-tight"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '3rem', fontWeight: 600, lineHeight: 1 }}
            >
                {count}{stat.suffix}
            </div>
            <div className="text-[#6B7280] text-sm tracking-wide mt-1">{stat.label}</div>
        </div>
    );
}

export default function AboutSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);
    const [statsVisible, setStatsVisible] = useState(false);

    useEffect(() => {
        const loadGSAP = async () => {
            const { ScrollTrigger } = await import('gsap/ScrollTrigger');
            gsap.registerPlugin(ScrollTrigger);

            if (textRef.current) {
                const paragraphs = textRef.current.querySelectorAll('.about-line');
                gsap.fromTo(
                    paragraphs,
                    { y: 40, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.9,
                        stagger: 0.15,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: textRef.current,
                            start: 'top 75%',
                        },
                    }
                );
            }

            if (imgRef.current) {
                gsap.fromTo(
                    imgRef.current,
                    { x: 60, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1.1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: imgRef.current,
                            start: 'top 75%',
                        },
                    }
                );
            }

            if (statsRef.current) {
                ScrollTrigger.create({
                    trigger: statsRef.current,
                    start: 'top 80%',
                    onEnter: () => setStatsVisible(true),
                    once: true,
                });
            }
        };

        loadGSAP();
    }, []);

    return (
        <section id="about" ref={sectionRef} className="py-32 bg-white relative overflow-hidden">
            {/* Subtle background pattern */}
            <div
                className="absolute inset-0 opacity-[0.015] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(#0A2E1C 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Text Column */}
                    <div ref={textRef}>
                        <div className="flex items-center gap-3 mb-8 about-line">
                            <span className="gold-divider" />
                            <span className="section-label">About Zenora</span>
                        </div>

                        <h2
                            className="about-line text-[#0A2E1C] mb-8 text-balance"
                            style={{
                                fontFamily: 'Cormorant Garamond, Georgia, serif',
                                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                                fontWeight: 300,
                                lineHeight: 1.1,
                                letterSpacing: '-0.01em',
                            }}
                        >
                            Where{' '}
                            <em style={{ fontStyle: 'italic', color: '#C9A96E' }}>Executive Excellence</em>{' '}
                            Meets Holistic Health
                        </h2>

                        <p className="about-line text-[#4B5563] leading-relaxed mb-5 text-[0.95rem]">
                            At <strong className="text-[#0A2E1C]">Zenora Wellness FZE</strong>, we exist at the intersection of clinical science and corporate leadership. Founded in the UAE, we understand the unique demands placed on executives operating in one of the world&apos;s most dynamic business environments.
                        </p>

                        <p className="about-line text-[#4B5563] leading-relaxed mb-5 text-[0.95rem]">
                            Our team of{' '}
                            <span className="text-[#0A2E1C] font-medium border-b border-[#C9A96E]/60">specialist clinicians, wellness strategists, and performance coaches</span>{' '}
                            brings together decades of experience across preventive medicine, occupational health, sports science, and organizational psychology.
                        </p>

                        <p className="about-line text-[#4B5563] leading-relaxed mb-10 text-[0.95rem]">
                            We don&apos;t offer generic wellness packages. Every program is evidence-based, deeply personalized, and built around the reality of a demanding professional life — because we believe that{' '}
                            <span className="text-[#0A2E1C] font-medium border-b border-[#C9A96E]/60">your greatest asset is you</span>.
                        </p>

                        <button
                            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="about-line btn-primary"
                        >
                            <span>Book a Consultation</span>
                        </button>
                    </div>

                    {/* Image Column */}
                    <div ref={imgRef} className="relative">
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <Image
                                src="/hero-bg.jpg"
                                alt="Zenora Wellness — premium executive health environment"
                                fill
                                className="object-cover"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2E1C]/40 via-transparent to-transparent" />
                        </div>
                        {/* Gold border frame decoration */}
                        <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#C9A96E]/30 pointer-events-none" />
                        {/* Floating badge */}
                        <div className="absolute -bottom-6 -left-6 glass-dark p-5 hidden lg:block">
                            <div
                                className="text-[#C9A96E] text-3xl font-semibold"
                                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                            >
                                10+
                            </div>
                            <div className="text-white/60 text-xs tracking-wide mt-0.5">Years of Expertise</div>
                        </div>
                    </div>
                </div>

                {/* Stats Bar */}
                <div ref={statsRef} className="mt-24 pt-12 border-t border-[#E5E7EB]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {stats.map((stat) => (
                            <StatItem key={stat.label} stat={stat} trigger={statsVisible} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
