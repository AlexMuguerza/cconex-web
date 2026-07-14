const WHATSAPP_PHONE = "51947609227";

export function whatsappLink(message: string): string {
	return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
