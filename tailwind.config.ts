import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainYellow: "#FFE000",
        lightMainGreen: "#5DBB83",
        lightGreen: "#C0F3CB",
        mintWhite: "#F2F9F3",
        mintGreen: "#E7FFD8",
      },
      backgroundImage: {
        mainGreen:
          "linear-gradient(to right, #41b36f, #41b36f 99%, #41b36f 96%, #41b36f 92%, #41b36f 85%, #41b36f 77%, #41b36f 67%, #41b36f 56%, #41b36f 44%, #41b36f 33%, #41b36f, 23%, #41b36f 15%, #41b36f 8%, #41b36f 4%, #41b36f 1%, #41b36f 0%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
