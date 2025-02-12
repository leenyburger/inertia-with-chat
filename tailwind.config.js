/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/frontend/**/*.{js,ts,jsx,tsx}', './app/views/**/*.{erb,html,html.erb}'],
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED',
        secondary: '#EC4899',
        accent: '#0EA5E9',
        dark: '#1F2937',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
};