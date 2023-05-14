/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['satoshi'],
        medium: ['satoshi'],
        semibold: ['satoshi'],
        bold: ['satoshi'],
        extrabold: ['satoshi'],
        black: ['satoshi'],
      },

      fontSize: {
        'display-l': ['4.768rem', { fontWeight: '700' }],
        display: ['3.815rem', { fontWeight: '700' }],
        'heading-01': ['3.052rem', { fontWeight: '700' }],
        'heading-02': ['2.441rem', { fontWeight: '700' }],
        'heading-03': ['1.953rem', { fontWeight: '700' }],
        'heading-04': ['1.563rem', { fontWeight: '700' }],
        'heading-05': ['1.25rem', { fontWeight: '700' }],
        'heading-06': ['1rem', { fontWeight: '700' }],
        body: ['1rem', { fontWeight: '400' }],
        small: ['0.8rem', { fontWeight: '400' }],
        smallest: ['0.6rem', { fontWeight: '400' }],

        'display-x-mobile': ['4.3rem', { fontWeight: '700' }],
        'display-l-mobile': ['3.583rem', { fontWeight: '700' }],
        'display-mobile': ['2.986rem', { fontWeight: '700' }],
        'heading-01-mobile': ['2.488rem', { fontWeight: '700' }],
        'heading-02-mobile': ['2.074rem', { fontWeight: '700' }],
        'heading-03-mobile': ['1.728rem', { fontWeight: '700' }],
        'heading-04-mobile': ['1.44rem', { fontWeight: '700' }],
        'heading-05-mobile': ['1.2rem', { fontWeight: '700' }],
        'heading-06-mobile': ['0.833rem', { fontWeight: '700' }],
        'body-mobile': ['0.833rem', { fontWeight: '400' }],
        'small-mobile': ['0.694rem', { fontWeight: '400' }],
        'smallest-mobile': ['0.579rem', { fontWeight: '400' }],
      },

      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#FAF9F6',
        black: '#141414',
        'light-green': '#EAF89B',
        'primary-green': '#D1F812',
        'dark-green': '#9CB719',
        'gray-4': '#495057',
        'gray-3': '#ACB5BD',
        'gray-2': '#DDE2E5',
        'gray-1': '#F5F5F5',
      },

      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
}
