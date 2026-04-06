/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        evox: {
          primary: '#1DAA6C',
          light: '#9BDFC1',
          hover: '#168B57',
          pressed: '#126B43',
          black: '#111111',
        },
      },
    },
  },
  plugins: [],
};
