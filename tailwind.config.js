const defaultTheme = require("tailwindcss/defaultTheme");

// prettier-ignore
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xs': "480px",
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
};
