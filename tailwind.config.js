const defaultTheme = require("tailwindcss/defaultTheme");

// prettier-ignore
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xs': "480px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'white': '#fafafa',
        'black': '#0a0a0a',
      },
    },
  },
  plugins: [],
};
