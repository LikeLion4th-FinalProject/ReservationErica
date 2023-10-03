/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        13: "repeat(13, minmax(0, 1fr))",
      },
      colors: {
        gray0: "#3F3F3F",
        gray1: "#BEBEBE",
        gray2: "#D9D9D9",
        gray3: "#EAEAEA",
        gray4: "#F9F9F9",
        dark: "606060",
        red: "#FF0000",
        primary: "#0038FF",
      },
      fontSize: {
        title: "24px",
        subtitle: "18px",
        body: "14px",
        light: "12px",
        btn: "10px",
      },
      backgroundImage: {
        gradient:
          "linear-gradient(to right, #1D1D1D 0%, #4D4D4D 70%, transparent 95% )",
      },
    },
  },
  plugins: [],
};
