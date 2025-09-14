// const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/**/*.{html,njk,svg}",
  ],
  theme: {
    extend: {
      colors: {
        'red': {
          '50': '#fff0f1',
          '100': '#ffdddf',
          '200': '#ffc1c5',
          '300': '#ff959c',
          '400': '#ff5964',
          '500': '#ff2634',
          '600': '#fc0616',
          '700': '#e3000f',
          '800': '#af0510',
          '900': '#900c15',
          '950': '#500005',
      },
        'gray': {
          '50': '#f8f7f7',
          '100': '#f0eeee',
          '200': '#ded9d9',
          '300': '#c1b8b9',
          '400': '#9f9193',
          '500': '#837475',
          '600': '#6b5e5f',
          '700': '#574d4e',
          '800': '#4a4242',
          '900': '#1a1a18',
          '950': '#131111',
        },
      },
      fontFamily: {
        opensans: ['Open Sans', 'sans-serif'],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem'
      },
    },
  },
  plugins: [

  ],
};
