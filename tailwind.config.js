/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f2f7f4',
          100: '#e6efe9',
          200: '#cde0d3',
          300: '#a4c3af',
          400: '#7aa288',
          500: '#5a8a6a',
          600: '#426f51',
          700: '#365943',
          800: '#2e4a38',
          900: '#273d2f',
          950: '#132119',
        },
        secondary: {
          50: '#fcf8f5',
          100: '#f8f0ea',
          200: '#f0e0d0',
          300: '#e5c8af',
          400: '#d8a885',
          500: '#cb8b61',
          600: '#bd7049',
          700: '#9e573a',
          800: '#824733',
          900: '#6b3c2d',
          950: '#391e17',
        },
        neutral: {
          50: '#f9f8f6',
          100: '#f1efe9',
          200: '#e4dfd3',
          300: '#d3cab7',
          400: '#beb097',
          500: '#aa977d',
          600: '#9a8872',
          700: '#81715f',
          800: '#6a5d50',
          900: '#584e44',
          950: '#302a24',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
};