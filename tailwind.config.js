/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern Contemporary Luxury Palette (User Specified)
        sand: {
          50: '#FAF9F6',
          100: '#F7F6F2', // Warm off-white background
          200: '#EFECE4',
          300: '#E4DFD3',
          400: '#CBC4B4',
        },
        charcoal: {
          950: '#0F100F',
          900: '#151515', // Near-black primary text
          850: '#171918', // Alternate section dark charcoal
          800: '#222524',
          700: '#323635',
          600: '#4A4F4D',
          500: '#6B7270',
        },
        gold: {
          50: '#FAF6EE',
          100: '#F3EAD7',
          200: '#E7D5B0',
          300: '#DBBF88',
          400: '#D0AB6A',
          500: '#C6A15B', // Signature metallic gold accent
          600: '#AA8541',
          700: '#8A682D',
          800: '#6C4F1E',
          900: '#4D3612',
          accent: '#D4AF37',
        },
        emerald: {
          950: '#09211B',
          900: '#0D3329',
          850: '#124B3D', // Deep emerald secondary accent
          800: '#165D4C',
          700: '#1C7661',
          600: '#23957A',
          500: '#2DBA9A',
        },
        'luxury-charcoal': '#151515',
        'warm-light': '#F7F6F2'
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
        display: ['"Cinzel"', '"Playfair Display"', 'serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.04)',
        'medium': '0 8px 30px rgba(0, 0, 0, 0.08)',
        'elevated': '0 20px 45px rgba(0, 0, 0, 0.12)',
        'gold-subtle': '0 4px 20px rgba(198, 161, 91, 0.2)',
        'emerald-subtle': '0 4px 20px rgba(18, 75, 61, 0.25)',
      },
      borderRadius: {
        'card': '1rem', // Restrained corner radii (not oversized)
        'card-lg': '1.25rem',
      }
    },
  },
  plugins: [],
}
