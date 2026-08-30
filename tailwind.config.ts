import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./context/**/*.{ts,tsx}"],
  theme: { extend: { colors: { cream: "#f1eee6", charcoal: "#414242", sky: "#3cb3f9", orange: "#f9904e", coral: "#f96a66", card: "#ffffff", mint: "#dff4e9" }, boxShadow: { soft: "0 14px 40px rgba(65,66,66,.08)" }, borderRadius: { "2xl": "1.25rem" } } },
  plugins: []
};
export default config;
