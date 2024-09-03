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
        grey: "var(--grey)",
        "grey-light": "var(--grey-light)",
        "grey-light2": "var(--grey-light2)",
        "grey-dark": "var(--grey-dark)",
      },
      fontFamily: {
        // inter fonts
        "inter-normal": ["inter-normal", "sans"],
        "inter-thin": ["inter-thin", "sans"],
        "inter-medium": ["inter-medium", "sans"],
        "inter-bold": ["inter-bold", "sans"],
        "inter-extra-bold": ["inter-extra-bold", "sans"],
      },
      fontSize: {
        base: "14px",
        sm: "12px",
        xs: "10px",
        "2xs": "8px",
      },
      borderWidth: {
        1: "1px",
      },
      backdropBlur: {
        xs: "2px",
      },
      gap: {
        "1/2": "2px",
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
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
          "--grey": "#BABABA",
          "--grey-light": "#F6F6F6",
          "--grey-light2": "#F3F3F3",
          "--grey-dark": "#7F7F7F",
        },
        dark: {
          "--background": "#101010",
          "--on-background": "#000000",
          "--on-background2": "#000000",
          "--primary": "#0ACF83",
          "--foreground": "#FFFFFF",
          "--accent": "#FFC120",
          "--grey": "#BABABA",
          "--grey-light": "#F6F6F6",
          "--grey-light2": "#F3F3F3",
          "--grey-dark": "#7F7F7F",
        },
      },
    ],
  },
};
