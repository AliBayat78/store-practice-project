/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      flex: {
        3: '1 1 33.33%',
      },
    },
  },
  plugins: [],
}
