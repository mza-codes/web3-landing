/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      abel: ['Abel', 'sans- serif'],
      kanit: ['Kanit', 'sans- serif'],
      poorStory: ['Poor Story', 'cursive'],
      righteous: ['Righteous', 'cursive'],
      gloria: ['Gloria Hallelujah', 'cursive'],
      poppins: ['Poppins', 'sans-serif']
    },
  },
  plugins: [
    {
      ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
    }
  ],
}
