/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A81EF',
        secondary: '#3DDC97',
        'lavender-accent': '#D6E4FF',
        'card-accent': '#F8F6F2',
      },
      backgroundImage: {
        'main': "url('./assets/bg-main-20op.PNG')",
      },
      fontFamily: {
        'bona-nova': ["Bona Nova", "serif"],
        'noto-sans': ["Noto Sans", "sans-serif"]
      },
      dropShadow: {
        'glow-green': [
          "0 0px 20px rgba(61, 220, 151, 1)",
          "0 0px 35px rgba(61, 220, 151, 0.5)"
        ],
        '4xl': [
          '0 0px 20px rgba(0, 0, 0, 0.65)',
          '0 0px 100px rgba(0, 0, 0, 0.50)'
        ],
      }
    },
  },
  plugins: [],
}

