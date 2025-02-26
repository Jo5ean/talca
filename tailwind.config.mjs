/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,ts,jsx,tsx,vue,svelte}"],
	theme: {
	  extend: {
		colors: {
		  primary: "#F36500",    // Naranja principal (Pantone 1585 C)
		  secondary: "#FFFFFF",  // Blanco secundario (Pantone White 000C)
		  tertiary: "#333333",   // Gris oscuro terciario (No especificado en la imagen)
			blue: "#0439AC", // Azul (Pantone 293 C)
			red: "#E1251B", // Rojo (Pantone 485 C)
			orange: "#F36500", // Naranja (Pantone 1585 C)
				yellow: "#FFD43E", // Amarillo (Pantone 108 C)
				green: "#80CD00", // Verde (Pantone 376 C)
			},
		},
	},
	plugins: [],
};
