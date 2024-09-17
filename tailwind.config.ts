import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		colors: {
			primary: '#D8DBE2',  // Azul personalizado
			secondary: '#9333EA',  // Púrpura personalizado
			neutral: '#415A77',  // Color neutral 
			accent: '#E4D6A7',  // Color de acento
			dark: '#001219',  // negro oscuro
			light: '#F3F4F6',  // Gris claro
		  },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
