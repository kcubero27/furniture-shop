module.exports = {
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require("tailwindcss-grid")({
      grids: [2],
      gaps: {
        32: "8rem",
      },
      autoMinWidths: {
        "16": "4rem",
        "24": "6rem",
        "300px": "300px",
      },
      variants: ["responsive"],
    }),
  ],
}
