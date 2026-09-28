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
          bg: '#FFFFFF',
          bgAlt: '#F0EBE5',
          fg: '#1C1C1C',
          fgLight: '#3D3935',
          muted: '#5E5A54',
          accent: '#B0724A',
          accentDark: '#8B5A36',
          accentLight: '#D4A574',
          card: '#FFFFFF',
          border: '#D5CFC8',
          success: '#3D5A36',
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
