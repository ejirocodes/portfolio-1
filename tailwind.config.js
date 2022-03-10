module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#111111",
        gray2: "#CCCCCC",
        gray4: "#666666",
        gray5: "#555555",
        gray3: "#999999",
      },
      backgroundImage: {
        "hero-article": "url('/img/ejiro-banner.png')",
      },
    },
  },
  variants: {
    textColor: ["group-hover"],
  },
  plugins: [],
};
