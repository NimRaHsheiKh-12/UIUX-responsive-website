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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '780px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',  // Added the px unit here
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'], // Satoshi font added
      },
    },
  },
  plugins: [],
};

export default config;