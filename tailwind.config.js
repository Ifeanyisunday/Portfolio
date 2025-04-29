/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // Tailwind will scan your files here
    ],
    theme: {
      extend: {
        keyframes: {
          slideIn: {
            "0%": { transform: "translateX(100%)" },
            "100%": { transform: "translateX(0)" },
          },
        },
        animation: {
          slideIn: "slideIn 0.6s ease-out forwards",
        },
      },
    },
    plugins: [],
  };