import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./constants/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        fill: {
          1: "rgba(255, 255, 255, 0.10)",
        },
        // bankGradient: "#0179FE",
        // indigo: {
        //   500: "#6172F3",
        //   700: "#3538CD",
        // },
        bankGradient: "#fa660a", 
        indigo: {
          500: "#fa660a",
          700: "#e65a09",
        },
        success: {
          25: "#F6FEF9",
          50: "#ECFDF3",
          100: "#D1FADF",
          600: "#039855",
          700: "#027A48",
          900: "#054F31",
        },
        pink: {
          25: "#FEF6FB",
          100: "#FCE7F6",
          500: "#EE46BC",
          600: "#DD2590",
          700: "#C11574",
          900: "#851651",
        },
        // blue: {
        //   25: "#F5FAFF",
        //   100: "#D1E9FF",
        //   500: "#2E90FA",
        //   600: "#1570EF",
        //   700: "#175CD3",
        //   900: "#194185",
        // },
        orange: {
          25: "#ffe8d6",  
          100: "#ffc299", 
          500: "#fa660a", 
          600: "#e65a09", 
          700: "#cc5008", 
          900: "#b34706", 
        },
        // sky: {
        //   1: "#F3F9FF",
        // },
        sky: {
          1: "#fff3e6",  
        },
        // black: {
        //   1: "#00214F",
        //   2: "#344054",
        // },
        black: {
          1: "#4f2a00", 
          2: "#544230",
        },
        // gray: {
        //   25: "#FCFCFD",
        //   200: "#EAECF0",
        //   300: "#D0D5DD",
        //   500: "#667085",
        //   600: "#475467",
        //   700: "#344054",
        //   900: "#101828",
        // },
        gray: {
          25: "#fcf4f0", 
          200: "#f2e0d7",
          300: "#e8cbbd",
          500: "#dba089",
          600: "#b6795f",
          700: "#8c5035",
          900: "#5a3018",
        },
      },
      backgroundImage: {
        // "bank-gradient": "linear-gradient(90deg, #0179FE 0%, #4893FF 100%)",
        "bank-gradient": "linear-gradient(90deg, #fa660a 0%, #ff9745 100%)",
        "gradient-mesh": "url('/icons/gradient-mesh.svg')",
        "bank-green-gradient":
          "linear-gradient(90deg, #01797A 0%, #489399 100%)",
      },
      boxShadow: {
        form: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        chart:
          "0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px 0px rgba(16, 24, 40, 0.06)",
        profile:
          "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
        creditCard: "8px 10px 16px 0px rgba(0, 0, 0, 0.05)",
      },
      fontFamily: {
        inter: "var(--font-inter)",
        "ibm-plex-serif": "var(--font-ibm-plex-serif)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
