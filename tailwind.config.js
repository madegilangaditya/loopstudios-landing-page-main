/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './index.html',
    './src/**/*.js',
    // Add other paths to your templates or components here
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#1E3A8A',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
  },
  plugins: [],
};

