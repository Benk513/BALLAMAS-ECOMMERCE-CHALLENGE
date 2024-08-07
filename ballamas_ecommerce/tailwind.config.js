/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    container: {
      center:true,
     padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        
      },
    },

    fontFamily: {
      'display' : ['Archivo']
    },
    extend: {
      colors: {
       'b-white':'#FFF',
       'b-light-gray':'#E5E5E5',
       'b-gray':'#C3C3C3 ',
       'b-dark-gray':'#7E7E7E',
       'b-black':'#1D1D1D',
       'b-green':'#2D5C43',
       'b-purple':'#393158',
       'b-ocean':'#2A5259',
       'b-olive':'#706947',        
      }

    },
  },
  plugins: [],
}