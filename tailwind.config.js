/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9",
        secondary: "#22c55e",
        accent: "#f97316",
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0ea5e9",
          secondary: "#22c55e",
          accent: "#f97316",
          neutral: "#1f2937",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};