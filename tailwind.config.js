/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: '#010409',
      secondary: '#151b23',
      accent: '#7145ff',
      // accent: '#00377e',
      black: '#010409',
      brown: '#46364a',
      white: '#FDFFF7',
      gray: {
        DEFAULT: '#6b7688',
        light: '#e4e4e4',
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c'
      }
    },
    fontFamily: {
      header: ['"DM Sans"', 'sans-serif'],
      display: ['"Roboto"', 'sans-serif'],
      logo: ['"Fira Code"', 'sans-serif']
    },
    extend: {}
  },
  plugins: [require('@codaworks/react-glow/tailwind')]
}
