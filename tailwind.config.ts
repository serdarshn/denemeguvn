import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-outfit)'],
      },
      colors: {
        primary: {
          DEFAULT: '#F6A546',
          light: '#FFB865',
          dark: '#E08E2F',
          50: '#FFF3E5',
          100: '#FFE5CC',
          200: '#FFD1A3',
          300: '#FFBD7A',
          400: '#FFA952',
          500: '#F6A546',
          600: '#E08E2F',
          700: '#CC7718',
          800: '#B86001',
          900: '#A34900',
        },
        background: {
          DEFAULT: '#FFFFFF',
          off: '#F9FAFB',
          dark: '#1A1A1A',
        },
        text: {
          DEFAULT: '#1A1A1A',
          light: '#4B5563',
          muted: '#6B7280',
        },
        accent: {
          DEFAULT: '#2563EB',
          light: '#3B82F6',
          dark: '#1D4ED8',
        }
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
} satisfies Config;
