/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx,astro}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [{
  "mytheme": {
    "primary": "#570DF8",
    "secondary": "#F000B8",
    "accent": "#1DCDBC",
    "neutral": "#282728",
    "base-100": "#fbfbfb",
    "info": "#00A5CF",
    "success": "#419D78",
    "warning": "#FABC2A",
    "error": "#FF3A20"
  }
}],
  },
};