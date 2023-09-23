/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/index.html",
    "src/app/app.component.html",
    "src/app/hero/hero.component.html",
    "src/app/nav/nav.component.html",
    "src/app/about/about.component.html",
    "src/app/footer/footer.component.html",
    "src/app/gallery-home/gallery-home.component.html",
    "src/app/info/info.component.html",
    "src/app/menu-home/menu-home.component.html",
    "src/app/gallery-main/gallery-main.component.html",
    "src/app/landing/landing.component.html",
    "src/app/menu-full/menu-full.component.html",
  ],
  theme: {
    extend: {
      width: {
        "90vw": "90vw",
      },
      height: {
        "90vh": "90vh",
      },
      screens: {
        xs: "430px",
      },
    },
  },
  plugins: [],
  fontFamily: {
    customFont: ["Cabin"],
  },
};
