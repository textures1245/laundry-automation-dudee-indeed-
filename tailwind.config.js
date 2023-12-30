/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './formkit.theme.ts'],
  theme: {
    extend: {
      cursor: {
        heart:
          'url(https://i.pinimg.com/originals/66/39/79/663979c8c0a71d04a807cca809aea15d.gif), pointer'
      }
    }
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
  daisyui: {
    themes: ['winter', 'night']
  }
}
