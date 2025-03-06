/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#344CB7',
          light: '#4A61CF',
          dark: '#2A3D92',
          50: '#EEF0F9',
          100: '#DDE1F3',
          200: '#BBC3E7',
          300: '#99A5DB',
          400: '#7787CF',
          500: '#344CB7',
          600: '#2A3D92',
          700: '#202E6E',
          800: '#151E49',
          900: '#0B0F25',
        }
      },
    },
  },
  plugins: [],
}
