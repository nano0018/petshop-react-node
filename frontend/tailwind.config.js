/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      salmon: '#fc5757',
      black_blue: '#203047',
      light_salmon: '#efdadb',
      light_gray: '#a9adb6',
      gray: '#9294a4',
      white: '#fff',
    },
    fontFamily: {
      display: ['Barlow Condensed', 'sans-serif'],
    },
  },
  plugins: [],
};
