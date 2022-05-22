module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "475px",
    },
    extend: {
      fontFamily: {
        Montserrat: ['"Montserrat"', "sans-serif"],
      },
      colors: {
        primary: "#3d5a80",
        secondary: "#98c1d9",
      },
    },
  },
  plugins: [],
};
