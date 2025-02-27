const config = {
    title: "Talca | Bebidas Naturales y Refrescantes",
    site_name: "Talca",
    description: "Talca ofrece bebidas naturales, refrescantes y sostenibles, con ingredientes de alta calidad y un compromiso con el medio ambiente.",
    image: "/logos/imagotipo-blend.PNG",
    theme_color: "#E1251B",
    keywords: "bebidas naturales, refrescantes, Talca, sostenibilidad, compromiso ambiental, productos saludables, hidratación",
    author: "@talca",
    email: "soporte@talca.com",
    IS_PRODUCTION: Boolean(Number(import.meta.env.IS_PRODUCTION ?? 0)),
    AUTORIZATION: {
        USER: import.meta.env.AUTH_BASIC_USER,
        PASSWORD: import.meta.env.AUTH_BASIC_PW,
    },
    MAILER: {
        CONTACT_USER: import.meta.env.MAILER_CONTACT_USER,
    },
    URL: {
        WEB: 'https://www.talca.com.ar/', 
        MAILER: import.meta.env.MAILER_API_URL,
    },
    TYPOGRAPHY: {
        HEADERS: "Panton Black Caps",
        PARAGRAPHS: "Gotham Family Font",
        SOCIAL_MEDIA: "Montserrat Medium, Bold, Black"
    }
}
export default config;