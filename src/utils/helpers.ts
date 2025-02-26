import { Notyf } from 'notyf';

export const formatName = (name: string) => {
    return encodeURIComponent(
        name
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replaceAll(" ", "-")
            .replaceAll("/", "-")
            .replaceAll("?", "-")
            .replaceAll("&", "-")
            .replaceAll("=", "-")
            .replaceAll("%", "-")
            .replaceAll("#", "-")
            .replaceAll("$", "-")
            .replaceAll("@", "-")
            .replaceAll("`", "-")
            .replaceAll("\\", "-")
            .replaceAll(":", "-")
            .replaceAll(";", "-")
            .replaceAll("'", "-")
            .replaceAll('"', "-")
            .replaceAll(",", "-")
            .replaceAll(".", "-")
            .replaceAll("á", "a")
            .replaceAll("é", "e")
            .replaceAll("í", "i")
            .replaceAll("ó", "o")
            .replaceAll("ú", "u")
            .replaceAll("ñ", "n")
            .replaceAll("Á", "a")
            .replaceAll("É", "e")
            .replaceAll("Í", "i")
            .replaceAll("Ó", "o")
            .replaceAll("Ú", "u")
            .replaceAll("Ñ", "n")
    );
};



export const openSidebar = () => {
    const mobileMenu = document.getElementById("mobileMenu") as HTMLDivElement;
    const contactSidebar = document.getElementById("contactSidebar");
    const sidebarOverlay = document.getElementById("sidebarOverlay");
    contactSidebar?.classList.remove("translate-x-full");
    sidebarOverlay?.classList.remove("opacity-0", "pointer-events-none");
    document.body.style.overflow = "hidden";
    // Si estamos en móvil, cerrar el menú móvil también
    mobileMenu?.classList.add("hidden");
    mobileMenu?.classList.remove("menu-enter");
};


// Definimos los tipos permitidos para el tipo de mensaje
type MessageType = 'success' | 'error';

/**
 * Función para mostrar un mensaje utilizando Toastr.
 * @param message - El mensaje que se mostrará.
 * @param type - El tipo de mensaje: 'success', 'error'.
 */
export function message({ message, type }: { message: string, type: MessageType }): void {
    const notyf = new Notyf({
        position: { x: 'center', y: 'bottom' },
        duration: 3000,
        dismissible: true,
        ripple: true,
        types: [
            {
                type: 'error',
                background: '#EF4444',
                dismissible: true
            },
            {
                type: 'success',
                background: '#10B981',
                dismissible: true
            }
        ]
    });

    switch (type) {
        case 'success':
            notyf.success(message);
            break;
        case 'error':
            notyf.error(message);
            break;
        default:
            throw new Error(`Tipo de mensaje no válido: ${type}`);
    }
}
