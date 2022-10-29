/* * @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lmPrimary: "#0177ED",
        lmGrey25: "#F9FAFB",
        lmGrey50: "#F0F2F5",
        lmGrey100: "#E0E6EB",
        lmGrey200: "#C1CDD7",
        lmGrey300: "#A2B4C3",
        lmGrey400: "#839BAF",
        lmGrey500: "#64829B",
        lmGrey600: "#50687C",
        lmGrey700: "#3C4E5D",
        lmGrey800: "#28343E",
        lmGrey900: "#141A1F",

        dmPrimary: "#2591FE",
        dmGrey25: "#FAFAFA",
        dmGrey100: "#E2E6E9",
        dmGrey200: "#C6CDD2",
        dmGrey300: "#A9B3BC",
        dmGrey400: "#8D9AA5",
        dmGrey500: "#70818F",
        dmGrey600: "#5A6772",
        dmGrey700: "#434D56",
        dmGrey800: "#2D3439",
        dmGrey900: "#161A1D",

        lime400: "#A3E635",
        lime500: "#84cc16",
        orange300: "#fdba74",
        orange400: "#fb923c",
        orange600: "#ea580c",
        red50: "#fef2f2",
        red300: "#fca5a5",
        red500: "#ef4444",
        red600: "#dc2626",
        yellow600: "#fde047",
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
