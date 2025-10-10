import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3A8DBC",
        accent: "#2C6F9B",
        darkBlue: "#1F4E6A",
        background: "#F5F7FA",
        text: "#0E141E",
        "secondary-text": "#5B636E",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
        heading: ["Poppins", "Montserrat", "sans-serif"],
        body: ["Lato", "Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
