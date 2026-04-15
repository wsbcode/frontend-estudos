/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // Isso garante que ele procure classes em todos os arquivos da pasta src
   ],
   theme: {
      extend: {},
   },
   plugins: [],
};
