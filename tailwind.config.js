/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        13: 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        gray0: '#3F3F3F',
        gray1: '#BEBEBE',
        gray2: '#D9D9D9',
        gray3: '#EAEAEA',
        gray4: '#F9F9F9',
        myorange: '#F58115',
        myblue: '#0A6DE2',
        primary:"#6990F5",
        dark: '606060',
        red: '#FF0000',
        secondary: '#85A7FF',
      },
      fontSize: {
        title: '24px',
        subtitle: '18px',
        body: '14px',
        light: '12px',
        btn: '10px',
      },
      backgroundImage: {
        gradient:
          'linear-gradient(to right, #1D1D1D 0%, #4D4D4D 70%, transparent 95% )',
        smashgradient: 'linear-gradient(90deg, #1D1D1D 51.99%, rgba(77, 77, 77, 0.75) 79.02%, rgba(217, 217, 217, 0.00) 96.49%)',
        imagegradient: 'linear-gradient(270deg, rgba(0, 0, 0, 0.00) 22.59%, rgba(0, 0, 0, 0.20) 112.81%), url(${SmashImage}), lightgray 50% / cover no-repeat',
      },
      
    },
  },
  plugins: [],
};
