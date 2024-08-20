/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './index.html',
    './src/**/*.js',
    // Add other paths to your templates or components here
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
      '3xl': '1600px',
      '4xl': '1920px'
    },

    extend: {
      colors: {
        darkGray: 'hsl(0, 0%, 55%)',
        veryDarkGray: 'hsl(0, 0%, 41%)'
      },
      fontFamily: {
        'sans': ['Alata', 'Helvetica', 'Arial', 'sans-serif'],
        'josefin-sans': ['Josefin Sans', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          marginLeft:'auto',
          marginRight:'auto',
          '@screen sm': {
            maxWidth: 'calc(100% - 60px)',
          },
          '@screen md': {
            maxWidth: 'calc(100% - 60px)',
          },
          '@screen lg': {
            maxWidth: '1155px',
          }
          
        }
      })
    }
  ],
};

