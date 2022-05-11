module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        craftDark: '#222222',
        craftLight: '#ffffff',
      },
      fontSize: {
        craftHeading: '15pt',
        craftBody: '13pt',
        craftSmall: '11pt',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
