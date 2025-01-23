/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: "Poppins",
    },
    screens: {
      xxs: "400px",
      xs: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        navyBlue: "#000080",
      },
      backgroundImage :{
        heroBg:"url('/images/hero-bg.jpg')"
      }
    },
  },
  plugins: [],
};
