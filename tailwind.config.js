/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      spacing: {
        '13': '3.125rem'
      },
      fontFamily: {
        'rubik': ["'Rubik Iso'", "cursive"]
      },
      borderRadius: {
        'xl': '0.625rem',
        '5xl': '4.5rem'
      },
    }
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
}

