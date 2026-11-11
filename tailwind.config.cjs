/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#07080A",
          900: "#0A0B0E",
          850: "#0E1116",
          800: "#13161C",
          700: "#1A1E26",
        },
        accent: {
          DEFAULT: "#C8F75C",
          soft: "#DDFC9A",
          dim: "#A8D63F",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "ui-sans-serif", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};
