module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["MyCustomFont", "sans-serif"], // add your font here
        // customBold: ["MyCustomFontBold", "sans-serif"],
      },
      colors: {
        heading: "rgba(130, 12, 172, 0.781)", // Updated with the provided color
        content: "#464346",
        gradientStart: "rgba(145, 30, 190, 0.9)", // A lighter shade close to the given color
        gradientEnd: "rgba(115, 5, 155, 1)", //
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/forms")],
};
