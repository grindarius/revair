const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,js,jsx,vue}'
  ],
  theme: {
    purge: [],
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans Thai', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'pale-yellow': '#B47EDE',
        'pale-gray': '#37393e',
        'yellow-hover': '#FFCA28',
        'gray-hover': '#777668',
        'red-disabled': '#8B183C'
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ]
}
