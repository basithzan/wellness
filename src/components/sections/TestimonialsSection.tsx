'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        quote:
            'Zenora transformed how our leadership team approaches health. The results were measurable — less sick days, sharper decision-making, and a culture we\'re proud of.',
        name: 'Ahmed Al Mansoori',
        title: 'CEO, Regional Investment Group',
    },
    {
        quote:
            'I was skeptical of corporate wellness programs, but Zenora\'s approach is completely different. Personalized, evidence-based, and respectful of how demanding our schedules are.',
        name: 'Sarah K.',
        title: 'Chief Operating Officer, UAE Tech Firm',
    },
];

const clientLogos = [
    'Executive Health Partners',
    'Gulf Leadership Institute',
    'Emirates Wellness Council',
    'Dubai Corporate Health',
    'MENA Vitality Group',
    'UAE Business Health',
    'Executive Health Partners',
    'Gulf Leadership Institute',
    'Emirates Wellness Council',
    'Dubai Corporate Health',
];

export default function TestimonialsSection() {
    return (
        <section className="py-32 bg-white overflow-hidden">
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
                        <span className="section-label">Client Stories</span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C9A96E]" />
                    </div>
                    <h2
                        className="text-[#0A2E1C]"
                        style={{
                            fontFamily: 'Cormorant Garamond, Georgia, serif',
                            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                            fontWeight: 300,
                            lineHeight: 1.1,
                            letterSpacing: '-0.01em',
                        }}
                    >
                        What Our Clients <em style={{ fontStyle: 'italic', color: '#C9A96E' }}>Say</em>
                    </h2>
                </motion.div>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ delay: i * 0.12, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                            className="bg-[#FAFAF7] border border-[#E5E7EB] p-8 md:p-10 relative overflow-hidden group hover:border-[#C9A96E]/30 transition-colors duration-400"
                        >
                            {/* Large quote decoration */}
                            <div
                                className="absolute -top-4 -left-2 text-[#C9A96E]/10 group-hover:text-[#C9A96E]/20 transition-colors duration-400"
                                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '9rem', lineHeight: 1 }}
                                aria-hidden
                            >
                                &ldquo;
                            </div>

                            <Quote
                                size={24}
                                strokeWidth={1}
                                className="text-[#C9A96E] mb-6 relative z-10"
                            />

                            <p className="text-[#374151] leading-relaxed mb-8 relative z-10 text-[0.95rem]">
                                &ldquo;{t.quote}&rdquo;
                            </p>

                            <div className="flex items-center gap-4 relative z-10">
                                <div className="w-10 h-10 bg-[#0A2E1C]/10 border border-[#C9A96E]/30 flex items-center justify-center">
                                    <span
                                        className="text-[#0A2E1C] font-semibold text-sm"
                                        style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                                    >
                                        {t.name[0]}
                                    </span>
                                </div>
                                <div>
                                    <div className="text-[#0A2E1C] font-medium text-sm">{t.name}</div>
                                    <div className="text-[#9CA3AF] text-xs">{t.title}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Marquee Logo Strip */}
                <div className="relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
                    <div className="marquee-track">
                        {clientLogos.map((logo, i) => (
                            <div
                                key={`${logo}-${i}`}
                                className="flex items-center px-10 py-4 border-r border-[#E5E7EB] shrink-0"
                            >
                                <span
                                    className="text-[#9CA3AF] text-sm tracking-wider uppercase whitespace-nowrap"
                                    style={{ fontFamily: 'DM Sans, system-ui, sans-serif', letterSpacing: '0.1em' }}
                                >
                                    {logo}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
