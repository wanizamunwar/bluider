/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#FAF7F3',
          bgAlt: '#F0EBE5',
          fg: '#1C1C1C',
          fgLight: '#4A4642',
          muted: '#7A756E',
          accent: '#B0724A',
          accentDark: '#8B5A36',
          accentLight: '#D4A574',
          card: '#FFFFFF',
          border: '#E5DFD8',
          success: '#4A6340',
        },
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"DM Sans"', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

module.exports = config;
