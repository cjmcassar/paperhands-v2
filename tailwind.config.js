/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { fontFamily: { roboto: "Roboto", inter: "Inter" } },
    colors: {
      gray: {
        "100": "#a7adb9",
        "200": "#a3a3a3",
        "300": "#2b303b",
        "400": "#1a1d23",
      },
    },
    fontSize: {
      xs: "8px",
      sm: "10px",
      base: "12px",
      lg: "15px",
      xl: "16px",
      "2xl": "25px",
    },
    screens: { lg: { max: "1200px" } },
  },
  corePlugins: { preflight: false },
};
