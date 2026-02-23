'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, CalendarCheck } from 'lucide-react';
import Image from 'next/image';
import gsap from 'gsap';

export default function HeroSection() {
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const subRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const loadGSAP = async () => {
            const { ScrollTrigger } = await import('gsap/ScrollTrigger');
            gsap.registerPlugin(ScrollTrigger);

            const headline = headlineRef.current;
            const sub = subRef.current;
            const cta = ctaRef.current;
            const img = imgRef.current;

            if (!headline || !sub || !cta || !img) return;

            // Split headline into words
            const words = headline.innerText.split(' ');
            headline.innerHTML = words
                .map(
                    (word) =>
                        `<span class="word-wrapper inline-block overflow-hidden"><span class="word inline-block">${word}</span></span>`
                )
                .join(' ');

            const wordEls = headline.querySelectorAll('.word');

            const tl = gsap.timeline({ delay: 0.3 });

            tl.fromTo(
                wordEls,
                { y: '110%', opacity: 0 },
                {
                    y: '0%',
                    opacity: 1,
                    duration: 1.0,
                    stagger: 0.1,
                    ease: 'power4.out',
                }
            )
                .fromTo(
                    sub,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
                    '-=0.4'
                )
                .fromTo(
                    cta,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
                    '-=0.5'
                );

            // Ken Burns parallax on scroll
            ScrollTrigger.create({
                trigger: '#home',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                onUpdate: (self) => {
                    gsap.set(img, { yPercent: self.progress * 18 });
                },
            });
        };

        loadGSAP();
    }, []);

    const handleScroll = (href: string) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col overflow-hidden bg-[#0A2E1C]"
        >
            {/* Background Image */}
            <div ref={imgRef} className="absolute inset-0 w-full h-[120%] -top-[10%]">
                <Image
                    src="/hero-bg.jpg"
                    alt="Premium corporate wellness environment with Dubai skyline"
                    fill
                    priority
                    loading="eager"
                    className="object-cover object-center"
                    style={{ transform: 'scale(1.08)' }}
                />
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A2E1C]/55 via-[#0A2E1C]/45 to-[#0A2E1C]/80" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A2E1C]/40 via-transparent to-[#0A2E1C]/20" />
            </div>

            {/* Grain Overlay */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none z-10"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    backgroundSize: '200px',
                }}
            />

            {/* Main Content — flex column fills height */}
            <div className="relative z-20 flex-1 flex flex-col max-w-7xl mx-auto w-full px-6 lg:px-12 pt-32 pb-0">

                {/* Top section: label + headline + sub + CTAs */}
                <div className="flex-1 flex flex-col justify-center py-12">
                    {/* Label */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <span className="gold-divider" />
                        <span className="section-label">UAE Corporate Wellness</span>
                    </motion.div>

                    {/* Headline */}
                    <h1
                        ref={headlineRef}
                        className="text-balance leading-[1.05] mb-6"
                        style={{
                            fontFamily: 'Cormorant Garamond, Georgia, serif',
                            fontSize: 'clamp(3rem, 8vw, 8rem)',
                            fontWeight: 300,
                            letterSpacing: '-0.02em',
                            color: '#ffffff',
                        }}
                    >
                        Elevating Corporate Vitality
                    </h1>

                    {/* Subheadline */}
                    <p
                        ref={subRef}
                        className="text-white/70 text-base md:text-xl max-w-lg leading-relaxed mb-10"
                        style={{ fontFamily: 'DM Sans, system-ui, sans-serif', fontWeight: 300 }}
                    >
                        Executive wellness solutions for the UAE&apos;s most driven professionals.
                        Evidence-based programs that optimize health, enhance performance, and sustain vitality.
                    </p>

                    {/* CTAs */}
                    <div ref={ctaRef} className="flex flex-col gap-4">
                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => handleScroll('#contact')}
                                className="btn-primary inline-flex items-center gap-2 px-6 py-3.5 text-base font-medium"
                            >
                                <CalendarCheck size={20} strokeWidth={1.5} />
                                <span>Book a Consultation</span>
                            </button>
                            <button
                                onClick={() => handleScroll('#services')}
                                className="btn-outline"
                            >
                                <span>Explore Our Programs</span>
                                <ArrowRight size={16} />
                            </button>
                        </div>
                        <p className="text-white/50 text-sm" style={{ fontFamily: 'DM Sans, system-ui, sans-serif' }}>
                            Free 15-minute discovery call · No commitment
                        </p>
                    </div>
                </div>

                {/* Stats Strip — pinned at visible bottom, never overlaps text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="pb-10 pt-6 border-t border-white/10 mt-auto"
                >
                    <div className="flex flex-wrap gap-8 md:gap-16">
                        {[
                            { num: '500+', label: 'Executives Served' },
                            { num: '50+', label: 'Corporate Partners' },
                            { num: '98%', label: 'Client Satisfaction' },
                        ].map((stat) => (
                            <div key={stat.label} className="flex items-center gap-3">
                                <div
                                    className="text-[#C9A96E] font-semibold"
                                    style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.75rem' }}
                                >
                                    {stat.num}
                                </div>
                                <div className="text-white/45 text-xs tracking-wide leading-tight max-w-[80px]">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-6 right-8 z-20 flex flex-col items-center gap-2"
            >
                <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase">Scroll</span>
                <ChevronDown size={16} className="text-[#C9A96E] animate-bounce" />
            </motion.div>
        </section>
    );
}
