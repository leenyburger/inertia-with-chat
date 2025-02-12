/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/views/**/*.{html,html.erb,erb}",
    "./app/frontend/**/*.{js,jsx,ts,tsx}",
    "./app/components/**/*.{erb,rb}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED',    // Violet-600
        secondary: '#EC4899',  // Pink-500
        accent: '#0EA5E9',     // Sky-500
        dark: '#1F2937',       // Gray-800
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}