/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/dashboard.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "Arial", "sans-serif"],
      },
      animation: {
        spin: "spin 7s linear infinite",
        wiggle: "wiggle 2s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#3ABFF8",
          secondary: "#F8FAFC",
        },
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: "#38BDF8",
          "base-100": "#0F172A",
          secondary: "#1E293B",
          "base-content": "#FFFFFF",
        },
      },
      "light",
      "dark",
    ],
  },
  plugins: [require("daisyui")],
};
