import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'emerald-deep': '#0A2E1C',
        'emerald-mid': '#0F3D26',
        'navy': '#0B1D3A',
        'gold': '#C9A96E',
        'gold-light': '#DFC08A',
        'gold-dark': '#A8813E',
        'cream': '#FAFAF7',
        'cream-dark': '#F0EDE4',
        'near-black': '#1A1A1A',
        'text-muted': '#6B7280',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '36': '9rem',
        '128': '32rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-gold': 'linear-gradient(135deg, #C9A96E 0%, #DFC08A 50%, #C9A96E 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0A2E1C 0%, #051508 100%)',
        'gradient-hero': 'linear-gradient(to bottom, rgba(10,46,28,0.3) 0%, rgba(10,46,28,0.7) 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'scroll-down': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(6px)', opacity: '0.4' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'grain': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'count-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out both',
        'fade-in': 'fade-in 1s ease-out both',
        'scroll-down': 'scroll-down 1.5s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'grain': 'grain 8s steps(1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
      boxShadow: {
        'card': '0 4px 40px rgba(0,0,0,0.08)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.16)',
        'gold': '0 0 40px rgba(201,169,110,0.25)',
      },
    },
  },
  plugins: [],
};

export default config;
