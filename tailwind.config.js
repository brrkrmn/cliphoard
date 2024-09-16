/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      foreground: {
        black: "#202124",
        gray: "#80868b",
        blue: "#1a73e8",
        white: "#fff"
      },
      background: {
        gray: "#f5f6f7",
        white: "#fff",
        blue: "#1a73e8",
        sky: "#e8f0fe"
      },
      border: {
        blue: "#185abc",
      },
      blue: "#1a73e8",
      green: "#1e8e3e",
      yellow: "#f9ab00",
      red: "#EA3323",
    },
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(52,131,246,1) 10%, rgba(52,168,83,1) 30%, rgba(245,183,64,1) 60%, rgba(233,51,35,1) 90%)',
      },
    },
  },
  plugins: [],
}

