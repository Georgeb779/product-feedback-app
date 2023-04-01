/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#4661e6",
        "secondary-blue": "#373F68",
        "light-blue": "#f2f4ff",
        "snow-white": "#ffffff",
        "off-white": "#f7f8fd",
        "deep-orange": "#f49f85",
        "sky-blue": "#AD1FEA",
        "steel-blue": "#647196",
        "bright-blue": "#62bcfa",
        "dark-blue": "#3a4374",
        "shade-blue":'#8C92B3',
      }
    }
  },

  plugins: []
};
