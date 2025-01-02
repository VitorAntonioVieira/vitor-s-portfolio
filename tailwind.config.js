/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        modak: ["Modak", "sans-serif"],
        petrona: ["Petrona", "sans-serif"],
      },
      colors: {
        mainRed: "#FA3939",
        secondRed: "#F16464",
        mainYellow: "#FFE449",
        mainGreen: "#35992B",
        mainBlue: "#10DFC7",
        secondBlue: "#09796C",
        mainPurple: "#AB10DF"
      },
      width: {
        container: "100vw",
      },
      height: {
        full: "100vh",
      }
    },
  },
  plugins: [],
}

