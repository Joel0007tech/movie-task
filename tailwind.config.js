/** @type {import('tailwindcss').Config} */
export default {
  content: [ './index.html',
  "./src/**/*.{jsx,js}"],
  theme: {
    screens:{
    '2xl':{'max':'1535px'},
    'xl':{'max':'1279px'},
    'lg':{'max':'1023px'},
    'md':{'max':'767px'},
    'sm':{'max':'428px'},
   },
    extend: {},
  },
  plugins: [],
}