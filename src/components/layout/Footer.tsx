'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Mission', href: '#mission' },
    { label: 'Contact', href: '#contact' },
];

const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'X / Twitter' },
    { icon: Mail, href: '#contact', label: 'Email' },
];

export default function Footer() {
    const handleClick = (href: string) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#051A0E] relative overflow-hidden">
            <div className="gold-divider-full" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <Link href="#home" onClick={(e) => { e.preventDefault(); handleClick('#home'); }} className="inline-block mb-6">
                            <Image
                                src="/zenora-logo-3.png"
                                alt="Zenora Wellness"
                                width={160}
                                height={80}
                                className="h-10 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                            Elevating corporate vitality through evidence-based executive wellness programs. Rooted in the UAE, serving leaders worldwide.
                        </p>
                        {/* Social */}
                        <div className="flex gap-4 mt-8">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="footer-social-link w-11 h-11 border border-white/40 flex items-center justify-center hover:border-[#C9A96E]/60 transition-all duration-300 rounded-sm"
                                >
                                    <Icon size={20} strokeWidth={1.5} className="shrink-0" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Nav */}
                    <div>
                        <h3 className="text-white/40 text-xs tracking-[0.2em] uppercase mb-6">Navigation</h3>
                        <ul className="space-y-3">
                            {footerLinks.map((link) => (
                                <li key={link.label}>
                                    <button
                                        onClick={() => handleClick(link.href)}
                                        className="text-white/60 hover:text-[#C9A96E] text-sm transition-colors duration-300"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white/40 text-xs tracking-[0.2em] uppercase mb-6">Get in Touch</h3>
                        <div className="space-y-4 text-sm text-white/60">
                            <p className="flex items-start gap-3">
                                <MapPin size={18} className="text-[#C9A96E] shrink-0 mt-0.5" />
                                <span>United Arab Emirates</span>
                            </p>
                            <p className="flex items-start gap-3">
                                <Mail size={18} className="text-[#C9A96E] shrink-0 mt-0.5" />
                                <a href="mailto:hello@zenorawellness.com" className="hover:text-[#C9A96E] transition-colors duration-300">
                                    hello@zenorawellness.com
                                </a>
                            </p>
                            <p className="flex items-start gap-3">
                                <Phone size={18} className="text-[#C9A96E] shrink-0 mt-0.5" />
                                <a href="tel:+971000000000" className="hover:text-[#C9A96E] transition-colors duration-300">
                                    +971 00 000 0000
                                </a>
                            </p>
                        </div>

                        {/* Newsletter */}
                        <div className="mt-8">
                            <p className="text-white/40 text-xs tracking-[0.15em] uppercase mb-3">Newsletter</p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 bg-white/5 border border-white/10 px-4 py-2.5 text-white text-sm outline-none placeholder:text-white/30 focus:border-[#C9A96E]/50 transition-colors duration-300"
                                />
                                <button className="bg-[#C9A96E] text-[#0A2E1C] px-4 py-2.5 text-xs font-semibold tracking-wide hover:bg-[#DFC08A] transition-colors duration-300 whitespace-nowrap">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/30 text-xs">
                        © 2025 Zenora Wellness FZE. All rights reserved.
                    </p>
                    <p className="text-white/20 text-xs">
                        Free Zone Establishment · United Arab Emirates
                    </p>
                </div>
            </div>
        </footer>
    );
}
