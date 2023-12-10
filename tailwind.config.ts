import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFDFB",
        foreground: "#2F2615",
        grey: "#ECEFE8",
        "grey-dark": "#cdd5c3",
        "dark-green": "#383E31",
      },
      fontFamily: {
        sans: ["var(--roboto)"],
        serif: ["var(--italiana)"],
      },
    },
  },
  plugins: [],
};
export default config;
