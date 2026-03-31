import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F8F7F4',
        bg2: '#FFFFFF',
        dark: '#0b0b0b',
        text: '#1a1a17',
        dim: '#6b6560',
        muted: '#a09890',
        gold: {
          DEFAULT: '#b8942e',
          2: '#c9a96e',
          3: '#d4b87a',
          light: '#f5ecd7',
          fade: 'rgba(184,148,46,0.08)',
        },
        border: '#e4e0da',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'marq': 'marq 40s linear infinite',
        'gb-move': 'gbmove 18s linear infinite',
        'scroll-down': 'scrollDown 2s ease infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marq: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        gbmove: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollDown: {
          '0%': { top: '-100%' },
          '100%': { top: '100%' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
