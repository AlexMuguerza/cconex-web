const WHATSAPP_PHONE = "51948078337";

export function whatsappLink(message: string): string {
	return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
