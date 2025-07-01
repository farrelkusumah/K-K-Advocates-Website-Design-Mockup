import type { Config } from "tailwindcss"
import defaultConfig from "shadcn/ui/tailwind.config"

const config: Config = {
  ...defaultConfig,
  content: [
    ...defaultConfig.content,
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    ...defaultConfig.theme,
    extend: {
      ...defaultConfig.theme.extend,
      colors: {
        ...defaultConfig.theme.extend.colors,
        primary: {
          ...defaultConfig.theme.extend.colors.primary,
          50: "#f0f9f4",
          100: "#dcf2e4",
          200: "#bce5cd",
          300: "#8dd1a8",
          400: "#57b67c",
          500: "#339e5a",
          600: "#1f7a3f", // Main green
          700: "#1a6235",
          800: "#174f2c",
          900: "#144125",
          950: "#0a2414",
        },
        secondary: {
          ...defaultConfig.theme.extend.colors.secondary,
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        tertiary: {
          50: "#fefefe",
          100: "#fdfdfd",
          200: "#fafafa",
          300: "#f5f5f5",
          400: "#e5e5e5",
          500: "#d4d4d4",
          600: "#a3a3a3",
          700: "#737373",
          800: "#525252",
          900: "#404040",
          950: "#262626",
        },
        accent: {
          ...defaultConfig.theme.extend.colors.accent,
          50: "#fef7f0",
          100: "#fdeee0",
          200: "#fad9c1",
          300: "#f6be97",
          400: "#f0976b",
          500: "#eb7549",
          600: "#dc5a2f",
          700: "#b74426",
          800: "#923725",
          900: "#762f22",
          950: "#401610",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [...defaultConfig.plugins, require("tailwindcss-animate")],
}

export default config
