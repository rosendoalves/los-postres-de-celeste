/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette for Los Postres de Celeste
        primary: {
          50: '#fef7f0',
          100: '#fdecd8',
          200: '#fbd5b0',
          300: '#f8b87d',
          400: '#f59347',
          500: '#f2751e',
          600: '#e35d13',
          700: '#bc4512',
          800: '#963816',
          900: '#7a3015',
        },
        secondary: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
        chocolate: {
          50: '#fdf8f3',
          100: '#fbe8d8',
          200: '#f6d0b5',
          300: '#f0b288',
          400: '#e88d5a',
          500: '#e06f3a',
          600: '#d1552e',
          700: '#ad4228',
          800: '#8b3728',
          900: '#723024',
        },
        cream: {
          50: '#fefefe',
          100: '#fdfcfb',
          200: '#faf7f4',
          300: '#f5f0ea',
          400: '#ede4d8',
          500: '#e2d5c4',
          600: '#d3c1a9',
          700: '#bda68a',
          800: '#a08a71',
          900: '#84725f',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
