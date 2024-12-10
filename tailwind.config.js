/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1154px',
      'xl': '1290px',
      '2xl': '1325px'
    },
    container: {
      center: true, 
      padding: {
        DEFAULT: '1rem',    
        sm: '1.5rem',           
        md: '2rem',          
        lg: '2.5rem',             
        xl: '1.5rem',      
      }
    },
    extend: {
      boxShadow: {
        'one': '0px 1px 34px 0px #0000000F', 
        'second': '0px 2px 6px 0px #0000001F',  
        'third': '0px 1px 6px 0px #0000001A', 
        'four': '0px 2px 2px 0px #00000040', 
      },
      
      backgroundImage: {
        'nav-drop': "url('/assets/images/nav-drop-bg.svg')", 
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],  
        'roboto': ['Roboto', 'sans-serif'],  
      },
      backgroundColor: {
        'first': '#F9F9F9',  
        'second': '#323D62',  
        'third': '#350453',  
      },
      borderColor: {
        'first' : '#E4E4E4', 
      },
      colors: {
        'first': '#1F0A11',  
        'second': '#575757',  
      },
    },
  },
  plugins: [],
}

