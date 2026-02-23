'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, Phone, CheckCircle, Loader2 } from 'lucide-react';
import gsap from 'gsap';

type FormState = 'idle' | 'loading' | 'success' | 'error';

function FloatingInput({
    id,
    label,
    type = 'text',
    required,
}: {
    id: string;
    label: string;
    type?: string;
    required?: boolean;
}) {
    return (
        <div className="form-group">
            <input
                id={id}
                name={id}
                type={type}
                placeholder=" "
                required={required}
                className="form-input"
                autoComplete="off"
            />
            <label htmlFor={id} className="form-label">
                {label}
            </label>
        </div>
    );
}

export default function ContactSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);
    const [formState, setFormState] = useState<FormState>('idle');

    useEffect(() => {
        const loadGSAP = async () => {
            const { ScrollTrigger } = await import('gsap/ScrollTrigger');
            gsap.registerPlugin(ScrollTrigger);

            [leftRef, rightRef].forEach((ref, i) => {
                if (ref.current) {
                    gsap.fromTo(
                        ref.current,
                        { x: i === 0 ? -40 : 40, opacity: 0 },
                        {
                            x: 0,
                            opacity: 1,
                            duration: 1,
                            ease: 'power3.out',
                            scrollTrigger: {
                                trigger: sectionRef.current,
                                start: 'top 75%',
                            },
                        }
                    );
                }
            });
        };

        loadGSAP();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormState('loading');
        // Simulate API call
        await new Promise((r) => setTimeout(r, 1800));
        setFormState('success');
    };

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="py-32 relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #FAFAF7 0%, #F0EDE4 100%)' }}
        >
            {/* Decorative orbs */}
            <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-[#C9A96E]/8 blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-[#0A2E1C]/6 blur-3xl pointer-events-none" />

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
                        <span className="section-label">Get in Touch</span>
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
                        Begin Your <em style={{ fontStyle: 'italic', color: '#C9A96E' }}>Wellness Journey</em>
                    </h2>
                    <p className="text-[#6B7280] mt-4 max-w-md mx-auto text-sm leading-relaxed">
                        Book a complimentary consultation and discover how Zenora can elevate your organization&apos;s health performance.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">
                    {/* Contact Info */}
                    <div ref={leftRef} className="lg:col-span-2">
                        <div className="space-y-8">
                            <div>
                                <h3
                                    className="text-[#0A2E1C] mb-6"
                                    style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.5rem', fontWeight: 500 }}
                                >
                                    Contact Information
                                </h3>
                                <div className="space-y-5">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 border border-[#C9A96E]/40 flex items-center justify-center shrink-0 mt-0.5">
                                            <MapPin size={16} strokeWidth={1.5} className="text-[#C9A96E]" />
                                        </div>
                                        <div>
                                            <div className="text-[#0A2E1C] text-sm font-medium mb-0.5">Location</div>
                                            <div className="text-[#6B7280] text-sm leading-relaxed">United Arab Emirates</div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 border border-[#C9A96E]/40 flex items-center justify-center shrink-0 mt-0.5">
                                            <Mail size={16} strokeWidth={1.5} className="text-[#C9A96E]" />
                                        </div>
                                        <div>
                                            <div className="text-[#0A2E1C] text-sm font-medium mb-0.5">Email</div>
                                            <a
                                                href="mailto:hello@zenorawellness.com"
                                                className="text-[#6B7280] text-sm hover:text-[#C9A96E] transition-colors duration-300"
                                            >
                                                hello@zenorawellness.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 border border-[#C9A96E]/40 flex items-center justify-center shrink-0 mt-0.5">
                                            <Phone size={16} strokeWidth={1.5} className="text-[#C9A96E]" />
                                        </div>
                                        <div>
                                            <div className="text-[#0A2E1C] text-sm font-medium mb-0.5">WhatsApp / Phone</div>
                                            <a
                                                href="tel:+971000000000"
                                                className="text-[#6B7280] text-sm hover:text-[#C9A96E] transition-colors duration-300"
                                            >
                                                +971 00 000 0000
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* UAE Outline Graphic */}
                            <div className="border border-[#C9A96E]/20 p-6 relative overflow-hidden">
                                <div
                                    className="absolute inset-0 opacity-[0.03]"
                                    style={{
                                        backgroundImage: `radial-gradient(#0A2E1C 1px, transparent 1px)`,
                                        backgroundSize: '20px 20px',
                                    }}
                                />
                                <div className="relative z-10 flex items-center gap-4">
                                    <div className="text-4xl">🇦🇪</div>
                                    <div>
                                        <div
                                            className="text-[#0A2E1C] font-medium"
                                            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.1rem' }}
                                        >
                                            United Arab Emirates
                                        </div>
                                        <div className="text-[#6B7280] text-xs mt-0.5">Free Zone Establishment</div>
                                    </div>
                                </div>
                                <p className="relative z-10 text-[#9CA3AF] text-xs mt-4 leading-relaxed">
                                    Serving executives across Dubai, Abu Dhabi, and all UAE Emirates, with programs available internationally for corporate partners.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div ref={rightRef} className="lg:col-span-3">
                        <div className="bg-white border border-[#E5E7EB] p-8 md:p-12 relative">
                            <AnimatePresence mode="wait">
                                {formState === 'success' ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                                        className="flex flex-col items-center justify-center py-16 text-center"
                                    >
                                        <div className="w-16 h-16 bg-[#0A2E1C]/5 rounded-full flex items-center justify-center mb-6">
                                            <CheckCircle size={32} className="text-[#0A2E1C]" strokeWidth={1.5} />
                                        </div>
                                        <h3
                                            className="text-[#0A2E1C] mb-3"
                                            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.75rem', fontWeight: 400 }}
                                        >
                                            Message Received
                                        </h3>
                                        <p className="text-[#6B7280] text-sm max-w-sm leading-relaxed">
                                            Thank you for reaching out. A member of our team will be in touch within 24 hours to schedule your complimentary consultation.
                                        </p>
                                        <div className="mt-6">
                                            <span className="gold-divider" style={{ width: '40px', display: 'inline-block' }} />
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <FloatingInput id="name" label="Full Name" required />
                                            <FloatingInput id="email" label="Email Address" type="email" required />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <FloatingInput id="phone" label="Phone / WhatsApp" type="tel" />
                                            <FloatingInput id="company" label="Company / Organization" />
                                        </div>
                                        <div className="form-group">
                                            <textarea
                                                id="message"
                                                name="message"
                                                placeholder=" "
                                                rows={4}
                                                className="form-input resize-none pt-5"
                                                required
                                            />
                                            <label htmlFor="message" className="form-label">
                                                How can we help you?
                                            </label>
                                        </div>

                                        {/* Submit */}
                                        <button
                                            type="submit"
                                            disabled={formState === 'loading'}
                                            className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                                        >
                                            {formState === 'loading' ? (
                                                <span className="flex items-center justify-center gap-3">
                                                    <Loader2 size={16} className="animate-spin" />
                                                    <span>Sending…</span>
                                                </span>
                                            ) : (
                                                <span>Send Message</span>
                                            )}
                                        </button>

                                        <p className="text-[#9CA3AF] text-xs text-center">
                                            Your information is kept strictly confidential. No spam, ever.
                                        </p>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
