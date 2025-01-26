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
        mainGreen: "#38A765",
        mintWhite: "#F2F9F3",
        mintGreen: "#E7FFD8",
      },
    },
  },
  plugins: [],
} satisfies Config;
