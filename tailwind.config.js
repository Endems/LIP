/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Garante que o Tailwind processe todos os arquivos html e ts
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#1E3A8A', // Azul escuro
      }
    },
  },
  plugins: [],
}
