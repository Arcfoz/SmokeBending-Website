/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/dashboard.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "Arial", "sans-serif"],
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
