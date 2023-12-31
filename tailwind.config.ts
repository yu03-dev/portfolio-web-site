import type { Config } from "tailwindcss";
import withMT from "@material-tailwind/react/utils/withMT";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        body: "#050505",
        "selected-text": "#A3A3FF",
        theme: "#5c318c",
        secondary: "#9191A4",
        badge: "#3F3F51",
        inputBorder: "#565666",
        input: "#2A2A33",
      },
    },
  },
  plugins: [],
};
export default withMT(config);
