/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gainsboro: "#d9d9d9",
        darkslateblue: "#093b77",
        steelblue: "#3b6eab",
        crimson: "#f0346c",
        whitesmoke: "#f0f0f0",
        blueviolet: "#9747ff",
        darkslategray: "#1a385c",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "11xl": "30px",
        "8xs": "5px",
      },
    },
    fontSize: {
      sm: "14px",
      lg: "18px",
      base: "16px",
      xl: "20px",
      "6xl": "25px",
      "16xl": "35px",
      "31xl": "50px",
      "11xl": "30px",
      inherit: "inherit",
    },
    screens: {
      mq1325: {
        raw: "screen and (max-width: 1325px)",
      },
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
