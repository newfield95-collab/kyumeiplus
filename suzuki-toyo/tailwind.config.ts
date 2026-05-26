import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 信頼感のある深い藍色（LIXIL寄りのコーポレートブルー）
        navy: {
          50: "#f1f5f9",
          100: "#e2ebf3",
          200: "#bfd2e3",
          500: "#2c6594",
          600: "#1f527c",
          700: "#173f60",
          800: "#0f2c44",
          900: "#0a1e2e",
        },
        // 職人らしさ・温かみの差し色（木のぬくもり）
        wood: {
          50: "#fbf6ee",
          100: "#f5e9d2",
          400: "#d2a35a",
          500: "#b9863c",
          600: "#946a2d",
        },
        // 清潔感の背景
        cream: "#f8f5ef",
        ink: "#1a1f25",
      },
      fontFamily: {
        sans: [
          "Noto Sans JP",
          "Hiragino Sans",
          "Hiragino Kaku Gothic ProN",
          "Yu Gothic",
          "Meiryo",
          "sans-serif",
        ],
        serif: ["Noto Serif JP", "Yu Mincho", "serif"],
      },
      boxShadow: {
        card: "0 8px 30px -10px rgba(15, 44, 68, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
