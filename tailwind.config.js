/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    //custom plugin added for scrollbar
    // function ({addUtilities}) {
    //   const newUtilities = {
    //     ".no-scrollbar::-webkit-scrollbar":{
    //       display : "none",
    //     },
    //     ".no-scrollbar" : {
    //       "-ms-overflow-style":"none",
    //       "scrollbar-width":"none",
    //     },
    //   };
    // addUtilities(newUtilities);
    // }
  ],
}