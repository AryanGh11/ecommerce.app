/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        "on-background": "var(--on-background)",
        primary: "var(--primary)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
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
          "--primary": "#0ACF83",
          "--foreground": "#000000",
          "--accent": "#FFC120",
        },
        dark: {
          "--background": "#101010",
          "--on-background": "#000000",
          "--primary": "#0ACF83",
          "--foreground": "#FFFFFF",
          "--accent": "#FFC120",
        },
      },
    ],
  },
};
