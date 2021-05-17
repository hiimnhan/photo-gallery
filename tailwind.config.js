module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'noto-serif': ['"Noto Serif"', 'serif'],
      },
      colors: {
        primary: '#efb6b2',
        secondary: '#4e4e4e',
        error: '#ff4a4a',
      },
      spacing: {
        half: '50%',
      },
      maxWidth: {
        '150/100': '150%',
        '60/100': '60%',
        '80/100': '80%',
      },
      maxHeight: {
        '80/100': '80%',
      },
      boxShadow: {
        custom: '3px 5px 7px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
