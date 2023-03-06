/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "system-ui"],
        "san-francisco-pro-display": ["San Francisco Pro", "system-ui"],
        "san-francisco-pro-text": ["San Francisco Text", "system-ui"],
      },
    },
  },
  plugins: [],
};
