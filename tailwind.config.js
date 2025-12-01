/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "sbw-sand": "var(--sbw-sand)",
        "sbw-deep": "var(--sbw-deep)",
        "sbw-sunrise": "var(--sbw-sunrise)",
        "sbw-sunrise-light": "var(--sbw-sunrise-light)",
        "sbw-aqua": "var(--sbw-aqua)",
        "sbw-sky": "var(--sbw-sky)"
      }
    }
  },
  plugins: []
};
