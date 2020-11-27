const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        standalone: { raw: '(display-mode: standalone)' },
      },
      spacing: {
        22: '5.5rem',
      },
    },
  },
  variants: {
    extend: {
      accessibility: ['responsive', 'focus-within', 'focus'],
      gap: ['responsive'],
      gridColumn: ['responsive'],
      gridColumnEnd: ['responsive'],
      gridColumnStart: ['responsive'],
      gridRow: ['responsive'],
      gridRowEnd: ['responsive'],
      gridRowStart: ['responsive'],
      gridTemplateColumns: ['responsive'],
      gridTemplateRows: ['responsive'],
    },
  },
  plugins: [],
}
