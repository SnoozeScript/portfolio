/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: { 500: '#667eea', 600: '#5a67d8' },
        dark: { background: '#0f172a', text: '#e2e8f0' },
      },
    },
  },
  plugins: [],
};
