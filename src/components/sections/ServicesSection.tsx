'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
    Activity,
    BarChart2,
    Zap,
    Moon,
    ShieldCheck,
    Users,
} from 'lucide-react';
import gsap from 'gsap';

const services = [
    {
        icon: Activity,
        title: 'Executive Performance Optimization',
        description:
            'Advanced health insights combined with individualized performance strategies to support sustained energy, focus, and resilience.',
        tall: true,
        accent: '#C9A96E',
    },
    {
        icon: BarChart2,
        title: 'Corporate Wellness Architecture',
        description:
            'End-to-end wellness frameworks built around organizational culture, leadership goals, and workforce wellbeing.',
        tall: false,
        accent: '#C9A96E',
    },
    {
        icon: Zap,
        title: 'Metabolic & Body Composition Strategy',
        description:
            'Structured lifestyle guidance focused on sustainable body balance, metabolic awareness, and long-term vitality.',
        tall: false,
        accent: '#C9A96E',
    },
    {
        icon: Moon,
        title: 'Stress Resilience & Recovery Systems',
        description:
            'Integrated approaches to improve recovery quality, mental clarity, and emotional resilience in high-pressure environments.',
        tall: true,
        accent: '#C9A96E',
    },
    {
        icon: ShieldCheck,
        title: 'Proactive Health Risk Management',
        description:
            'Forward-looking health monitoring designed to identify potential risks early and support informed lifestyle decisions.',
        tall: false,
        accent: '#C9A96E',
    },
    {
        icon: Users,
        title: 'Leadership Health Engagement',
        description:
            'Interactive executive sessions that align leadership teams around performance, wellbeing, and strategic health awareness.',
        tall: false,
        accent: '#C9A96E',
    },
];

export default function ServicesSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const loadGSAP = async () => {
            const { ScrollTrigger } = await import('gsap/ScrollTrigger');
            gsap.registerPlugin(ScrollTrigger);

            if (titleRef.current) {
                gsap.fromTo(
                    titleRef.current,
                    { y: 40, opacity: 0 },
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

            if (cardsRef.current) {
                const cards = cardsRef.current.querySelectorAll('.service-card');
                gsap.fromTo(
                    cards,
                    { y: 60, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: cardsRef.current,
                            start: 'top 75%',
                        },
                    }
                );
            }
        };

        loadGSAP();
    }, []);

    return (
        <section id="services" ref={sectionRef} className="py-32 bg-[#FAFAF7] relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C9A96E]/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#0A2E1C]/5 blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Header */}
                <div ref={titleRef} className="mb-20">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="gold-divider" />
                        <span className="section-label">What We Offer</span>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                        <h2
                            className="text-[#0A2E1C] text-balance"
                            style={{
                                fontFamily: 'Cormorant Garamond, Georgia, serif',
                                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                fontWeight: 300,
                                lineHeight: 1.1,
                                letterSpacing: '-0.01em',
                            }}
                        >
                            Our Global Executive{' '}
                            <em style={{ fontStyle: 'italic', color: '#C9A96E' }}>Wellness</em> Services
                        </h2>
                        <p className="text-[#6B7280] max-w-md leading-relaxed text-sm lg:text-base">
                            Curated wellness strategies for leaders who operate at the highest level. Our programs are personalized, data-driven, and designed for executives and organizations worldwide.
                        </p>
                    </div>
                </div>

                {/* Bento Grid */}
                <div ref={cardsRef} className="bento-grid">
                    {services.map((service, i) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={service.title}
                                className={`service-card card-premium group relative overflow-hidden bg-white p-8 lg:p-10 ${service.tall && i === 0 ? 'lg:row-span-2' : ''
                                    } ${service.tall && i === 3 ? 'lg:row-span-2' : ''}`}
                            >
                                {/* Background accent on hover */}
                                <div className="absolute inset-0 bg-[#0A2E1C] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />

                                {/* Gold corner accent */}
                                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                                    <div className="absolute top-0 right-0 w-px h-8 bg-[#C9A96E]/30 group-hover:bg-[#C9A96E]/60 transition-colors duration-500" />
                                    <div className="absolute top-0 right-0 h-px w-8 bg-[#C9A96E]/30 group-hover:bg-[#C9A96E]/60 transition-colors duration-500" />
                                </div>

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className="mb-6">
                                        <div className="w-12 h-12 border border-[#C9A96E]/40 flex items-center justify-center group-hover:border-[#C9A96E]/80 transition-colors duration-500">
                                            <Icon
                                                size={22}
                                                className="text-[#C9A96E] group-hover:text-[#DFC08A] transition-colors duration-500"
                                                strokeWidth={1.5}
                                            />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="text-[#0A2E1C] group-hover:text-white mb-3 transition-colors duration-500 leading-tight"
                                        style={{
                                            fontFamily: 'Cormorant Garamond, Georgia, serif',
                                            fontSize: service.tall && (i === 0 || i === 3) ? '1.6rem' : '1.35rem',
                                            fontWeight: 500,
                                        }}
                                    >
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-[#6B7280] group-hover:text-white/65 text-sm leading-relaxed transition-colors duration-500">
                                        {service.description}
                                    </p>

                                    {/* Learn more link */}
                                    <div className="mt-6 flex items-center gap-2 text-[#C9A96E] text-xs tracking-[0.12em] uppercase font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0" style={{ transition: 'all 0.4s cubic-bezier(0.23,1,0.32,1)' }}>
                                        <span>Learn More</span>
                                        <span>→</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
