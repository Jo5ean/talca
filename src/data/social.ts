import type { Social } from "@/types/social";
import Facebook from "@/components/icons/Facebook.astro";
import Instagram from "@/components/icons/Instagram.astro";
import Whatsapp from "@/components/icons/Whatsapp.astro";


export const socials: Social[] = [
    {
        name: "Facebook",
        url: "https://www.facebook.com/SWTucumanAventuras",
        icon: Facebook,
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/sw_tucuman_aventuras/?hl=es",
        icon: Instagram,
    },
    {
        name: "WhatsApp",
        url: "https://api.whatsapp.com/send/?phone=543816528031",
        icon: Whatsapp,
    },
];