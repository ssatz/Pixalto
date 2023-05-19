/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        primary:{"100":"#f6f8fb", "600":"#4649ff"}
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

