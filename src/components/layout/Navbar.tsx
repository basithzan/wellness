'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu } from 'lucide-react';
import { useBooking } from '@/components/BookingProvider';

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Mission', href: '#mission' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { openBooking } = useBooking();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                        ? 'bg-[#0A2E1C]/95 backdrop-blur-md shadow-[0_4px_60px_rgba(0,0,0,0.3)]'
                        : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="flex items-center justify-between h-20 gap-4">
                        {/* Logo */}
                        <Link
                            href="#home"
                            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
                            className="flex items-center shrink-0"
                        >
                            <Image
                                src="/zenora-logo-3.png"
                                alt="Zenora Wellness"
                                width={200}
                                height={100}
                                className="h-14 w-auto object-contain"
                                priority
                            />
                        </Link>

                        {/* Desktop Nav — centered, same baseline as logo/CTA */}
                        <nav className="hidden lg:flex flex-1 justify-center items-center gap-10">
                            {navLinks.map((link) => (
                                <button
                                    key={link.label}
                                    onClick={() => handleNavClick(link.href)}
                                    className="nav-link text-white/80 hover:text-white text-sm font-sans font-medium tracking-wide transition-colors duration-300 whitespace-nowrap"
                                >
                                    {link.label}
                                </button>
                            ))}
                        </nav>

                        {/* CTA */}
                        <div className="hidden lg:flex items-center shrink-0 gap-4">
                            <button
                                onClick={() => { setMenuOpen(false); openBooking(); }}
                                className="btn-primary rounded-none"
                            >
                                <span>Book a Consultation</span>
                            </button>
                        </div>

                        {/* Mobile Hamburger */}
                        <button
                            onClick={() => setMenuOpen(true)}
                            className="lg:hidden text-white p-2"
                            aria-label="Open menu"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Full-Screen Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)' }}
                        animate={{ opacity: 1, clipPath: 'circle(150% at calc(100% - 2.5rem) 2.5rem)' }}
                        exit={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)' }}
                        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                        className="fixed inset-0 z-[100] bg-[#0A2E1C] flex flex-col"
                    >
                        {/* Close Button */}
                        <div className="flex justify-end p-6">
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="text-white p-2"
                                aria-label="Close menu"
                            >
                                <X size={28} />
                            </button>
                        </div>

                        {/* Logo in menu */}
                        <div className="px-8 mb-12">
                            <Image
                                src="/zenora-logo-3.png"
                                alt="Zenora Wellness"
                                width={200}
                                height={100}
                                className="h-14 w-auto object-contain"
                            />
                        </div>

                        {/* Nav Links */}
                        <nav className="flex flex-col gap-2 px-8 flex-1">
                            {navLinks.map((link, i) => (
                                <motion.button
                                    key={link.label}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + i * 0.07, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                                    onClick={() => handleNavClick(link.href)}
                                    className="text-left text-white/80 hover:text-[#C9A96E] transition-colors duration-300 py-4 border-b border-white/10"
                                    style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '2rem', fontWeight: 300 }}
                                >
                                    {link.label}
                                </motion.button>
                            ))}
                        </nav>

                        {/* Mobile CTA */}
                        <div className="p-8">
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                onClick={() => { setMenuOpen(false); openBooking(); }}
                                className="btn-primary w-full rounded-none"
                            >
                                <span>Book a Consultation</span>
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
