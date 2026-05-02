// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'blob': 'blob 7s infinite',
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'twinkle-slow': 'twinkle 6s ease-in-out infinite',
        'twinkle-fast': 'twinkle 2.5s ease-in-out infinite',
        'orb-pulse': 'orb-pulse 6s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%':   { transform: 'translate(0px, 0px) scale(1)' },
          '33%':  { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%':  { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%':   { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        twinkle: {
          '0%, 100%': { opacity: 1 },
          '50%':      { opacity: 0.15 },
        },
        'orb-pulse': {
          '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)',   opacity: 0.7 },
          '50%':      { transform: 'translate(-50%, -50%) scale(1.18)', opacity: 1   },
        },
      },
    },
  },
  plugins: [],
}
