/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/**.jsx"],
  theme: {
    extend: {
      boxShadow: {
        'light': '1px 6px 8px rgba(131, 131, 131, 0.1)'
      }
    },
  },
  plugins: [],
}

