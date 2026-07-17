import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ServiceDetail from "@/components/ServiceDetail";

interface Props {
	params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
	return [
		{ slug: "sanitarios-portatiles" },
		{ slug: "transporte-y-logistica-de-residuos" },
		{ slug: "gestion-de-residuos" },
		{ slug: "valorizacion-de-residuos" },
		{ slug: "equipos" },
		{ slug: "gestion-ambiental" },
		{ slug: "seguridad-y-salud-ocupacional" },
		{ slug: "ingenieria-y-arquitectura" },
	];
}

export default async function ServicePage({ params }: Props) {
	const { slug } = await params;

	return (
		<main className="min-h-screen">
			<Navbar />
			<ServiceDetail slug={slug} />
			<Footer />
			<FloatingWhatsApp />
		</main>
	);
}
