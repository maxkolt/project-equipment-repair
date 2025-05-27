/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    "text-center",
    "text-xl",
    "font-bold",
    "flex",
    "items-center",
    "justify-between",
    "bg-red-500",
    "bg-blue-500",
    "text-white",
    "rounded",
    "p-4"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
