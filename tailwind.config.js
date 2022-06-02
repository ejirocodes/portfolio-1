module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Tomato", "system-ui", "san-serif"],
      NeueMachina: ["NeueMachina"],
    },
    extend: {
      screens: {
        xsm: "500px",
        huge: "2500px",
      },
      colors: {
        dark: "#111111",
        gray2: "#CCCCCC",
        gray4: "#666666",
        gray5: "#555555",
        gray3: "#999999",
      },
      backgroundImage: {
        "hero-article":
          "url('https://res.cloudinary.com/ejiro/image/upload/f_auto/v1654206071/portfolio-site/ejiro-banner_jhyyrs.png')",
        "hero-quote":
          "url('https://res.cloudinary.com/ejiro/image/upload/f_auto/v1654206503/portfolio-site/banner-sec_zasvtn.png')",
      },
    },
  },
  variants: {
    textColor: ["group-hover"],
  },
  plugins: [],
};
