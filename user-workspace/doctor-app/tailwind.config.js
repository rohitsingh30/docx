/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366F1',
        secondary: '#4F46E5',
        'gray-dark': '#1F2937',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
