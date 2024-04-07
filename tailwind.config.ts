import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: { sm: '480px', md: '768px', lg: '976px', xl: '1440px' },
      animation: {
        fadeIn: 'fadeIn 6s',
        fadeInExtended: 'fadeInExtended 3s',
        bounce:
          'bounce 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite',
        slideUp: 'slideUp 0.5s',
        slideUpEaseInOut: 'slideUp 0.5s ease-in-out',
        slideUpCubiBezier: 'slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1)',
      },
      animationDelay: {
        0: '0s',
        2: '0.2s',
        4: '0.4s',
        6: '0.6s',
        7: '5s',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeInExtended: {
          '0%': { opacity: '0' }, // Initial state with opacity 0
          '20%': { opacity: '0' }, // Intermediate opacity state
          '40%': { opacity: '0' }, // Intermediate opacity state
          // '60%': { opacity: '0.6' }, // Intermediate opacity state
          // '80%': { opacity: '0.8' }, // Intermediate opacity state
          '100%': { opacity: '1' }, // Final state with full opacity
        },
        slideUp: {
          from: { transform: 'translateY(100%)' },
          to: { transform: 'translateY(0)' },
        },
        bounce: {
          from: { transform: 'translateY(10px)' },
          to: { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animation-delay')],
};
export default config;
