const config = {
    title: "SW Tucumán Aventuras | El Cadillal | San Javier",
    site_name: "swaventuras",
    description: "SW Tucumán Aventuras ofrece turismo activo en la naturaleza, con compromiso ambiental y experiencias únicas, promoviendo sostenibilidad y cuidado del entorno.",
    image: "/logos/imagotipo-blend.PNG",
    theme_color: "#E26128",
    keywords: "turismo activo, experiencias únicas, naturaleza, cuidado del medio ambiente, uso responsable, sostenibilidad, aventuras, SW Tucumán, servicios en la naturaleza, compromiso ambiental",
    author: "@swaventuras",
    email: "soporte@swaventuras.com",
    IS_PRODUCTION: Boolean(Number(import.meta.env.IS_PRODUCTION ?? 0)),
    AUTORIZATION: {
        USER: import.meta.env.AUTH_BASIC_USER,
        PASSWORD: import.meta.env.AUTH_BASIC_PW,
    },
    MAILER: {
        CONTACT_USER: import.meta.env.MAILER_CONTACT_USER,
    },
    URL: {
        WEB: 'https://tucumanaventuras.com.ar/',
        MAILER: import.meta.env.MAILER_API_URL,
    },
}
export default config;