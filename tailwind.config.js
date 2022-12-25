/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./public/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    //"./src/components/*.{js,jsx,ts,tsx}",
    //"./src/pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        myGridColumn: "repeat(2,minmax(0,464px))",
      },
      gridTemplateRows: {
        myGridRow: "repeat(7,minmax(0,max-content))",
      },
      fontFamily: {
        // myButton: ['"Secular One"', ...defaultTheme.fontFamily.sans],
      },

      backgroundImage: {
        fisrstRadialGradient:
          "radial-gradient(ellipse 130% 110% at bottom,#ffffff 45%,#47a1ff 78%,#0a53ac 100%);",
        secondRadialGradient:
          "radial-gradient(ellipse 130% 110% at bottom,#ffffff 40%,#ba52f5 60%,#9908e8 100%);",
        contactUsLinearGradient:
          "linear-gradient(0deg, #FD267A -0.61%, #FF7854 99.76%);",
        hoverContactUsLinearGradient:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08)), linear-gradient(0deg, #FD267A -0.61%, #FF7854 99.76%);",
      },
      boxShadow: {
        myShadow: "0 2px 6px 0px rgb(101,110,123,0.8)",
        mainPageNavBoxShadow:
          "0 0 4px 0 rgb(0 0 0 / 15%),0 4px 10px 0 rgb(0 0 0 / 10%);",
        contactUsBoxShadow: "-2px 2px 4px rgb(0 0 0 / 10%);",
        hovercontactUsBoxShadow: "-2px 2px 4px rgb(0 0 0 / 10%);",
      },
      colors: {
        "nav-item-color": "#505965",
        "tinder-color": "#21262e",
        "myButton-background": "#111418",
        "nav-navigation-hover-color": "#d6002f",
        "colse-svg-color": "#7c8591",
        "li-background-color": "#f0f2f4",
      },
      columns: {
        "4xs": "14rem",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
        center: true,
      },
      // backgroundImage: {
      //   "svg-for-summary": ` url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><linearGradient id='gradient'><stop offset='10%' stop-color='%23F00'/><stop offset='90%' stop-color='%23fcc'/> </linearGradient><rect fill='url(%23gradient)' x='0' y='0' width='100%' height='100%'/></svg>")`,
      // },
    },
  },
  plugins: [],
};
