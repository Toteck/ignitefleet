import { colors } from "./src/styles/colors";
import { fontFamily } from "./src/styles/fontFamily";
import { fontSize } from "./src/styles/fontSize";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors,
      fontFamily,
      fontSize,
    },
  },
  plugins: [],
};
