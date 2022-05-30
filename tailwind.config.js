module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        Cameracessoriestheme: {
          primary: "rgb(134 25 143)",
          secondary: "rgb(12 74 110)",
          accent: "rgb(8 145 178)",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
