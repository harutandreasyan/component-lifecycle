/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        seapurple: '#6b4d8f',
        black: '#1a1a1a',
      },
    },
  },
  plugins: [],
};
