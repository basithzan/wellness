'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, MapPin, Crown, Heart } from 'lucide-react';

const differentiators = [
    {
        icon: FlaskConical,
        title: 'Evidence-Based Approach',
        description:
            'Every program is grounded in peer-reviewed research, clinical validation, and measurable health outcomes — not trends or fads.',
    },
    {
        icon: MapPin,
        title: 'UAE-Focused Expertise',
        description:
            'Purpose-built for the UAE\'s unique executive environment — understanding local culture, lifestyle pressures, and health risks specific to the region.',
    },
    {
        icon: Crown,
        title: 'Executive-Tailored Programs',
        description:
            'Designed around the reality of demanding schedules, frequent travel, and high-stakes decision-making. No compromise, no generic solutions.',
    },
    {
        icon: Heart,
        title: 'Preventive, Not Reactive',
        description:
            'We identify and address health risks before they become crises, protecting your most valuable long-term investment: your health.',
    },
];

export default function WhyChooseUsSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const loadGSAP = async () => {
            const { ScrollTrigger } = await import('gsap/ScrollTrigger');
            const gsap = (await import('gsap')).default;
            gsap.registerPlugin(ScrollTrigger);

            if (containerRef.current) {
                const cards = containerRef.current.querySelectorAll('.why-card');
                gsap.fromTo(
                    cards,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.12,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: 'top 78%',
                        },
                    }
                );
            }
        };

        loadGSAP();
    }, []);

    return (
        <section className="py-32 bg-[#FAFAF7] relative overflow-hidden">
            {/* Top gold accent */}
            <div className="absolute top-0 left-0 right-0">
                <div className="gold-divider-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Header */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    className="text-center mb-20"
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#C9A96E]" />
                        <span className="section-label">Why Zenora</span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C9A96E]" />
                    </div>
                    <h2
                        className="text-[#0A2E1C] mb-4"
                        style={{
                            fontFamily: 'Cormorant Garamond, Georgia, serif',
                            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                            fontWeight: 300,
                            lineHeight: 1.1,
                            letterSpacing: '-0.01em',
                        }}
                    >
                        The Zenora <em style={{ fontStyle: 'italic', color: '#C9A96E' }}>Difference</em>
                    </h2>
                    <p className="text-[#6B7280] max-w-xl mx-auto text-sm leading-relaxed">
                        We combine clinical rigor with deep cultural understanding to deliver wellness programs that actually work for people like you.
                    </p>
                </motion.div>

                {/* Differentiator Cards */}
                <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {differentiators.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.title}
                                className="why-card group relative bg-white border border-[#E5E7EB] p-8 overflow-hidden transition-all duration-500 hover:border-[#C9A96E]/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-1"
                            >
                                {/* Subtle animated bg corner */}
                                <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-[#C9A96E]/5 group-hover:bg-[#C9A96E]/10 transition-colors duration-500" />

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className="mb-6 w-11 h-11 border border-[#C9A96E]/40 flex items-center justify-center group-hover:border-[#C9A96E] transition-colors duration-400">
                                        <Icon
                                            size={20}
                                            strokeWidth={1.5}
                                            className="text-[#C9A96E]"
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="text-[#0A2E1C] mb-3 leading-tight"
                                        style={{
                                            fontFamily: 'Cormorant Garamond, Georgia, serif',
                                            fontSize: '1.25rem',
                                            fontWeight: 500,
                                        }}
                                    >
                                        {item.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-[#6B7280] text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
