/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        "on-background": "var(--on-background)",
        "on-background2": "var(--on-background2)",
        primary: "var(--primary)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
      },
      fontFamily: {
        // inter fonts
        "inter-normal": ["inter-normal", "sans"],
        "inter-thin": ["inter-thin", "sans"],
        "inter-medium": ["inter-medium", "sans"],
        "inter-bold": ["inter-bold", "sans"],
        "inter-extra-bold": ["inter-extra-bold", "sans"],
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "--background": "#F6F6F6",
          "--on-background": "#FFFFFF",
          "--on-background2": "#BABABA",
          "--primary": "#0ACF83",
          "--foreground": "#000000",
          "--accent": "#FFC120",
        },
        dark: {
          "--background": "#101010",
          "--on-background": "#000000",
          "--on-background2": "#000000",
          "--primary": "#0ACF83",
          "--foreground": "#FFFFFF",
          "--accent": "#FFC120",
        },
      },
    ],
  },
};
