import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
	variable: "--font-heading",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
	variable: "--font-body",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: {
		default: "CCONEX Constructores & Consultores | Ingeniería, Medio Ambiente y Seguridad Industrial",
		template: "%s | CCONEX",
	},
	description:
		"Soluciones Integrales en Ingeniería, Consultoría Ambiental y Seguridad Industrial. Gestión de residuos, permisos ambientales, SGSST, ISO 9001, 14001, 45001 y más. Más de 10 años de experiencia en el Perú.",
	keywords: [
		"consultoría ambiental",
		"seguridad industrial",
		"gestión de residuos",
		"ISO 9001",
		"ISO 14001",
		"ISO 45001",
		"SGSST",
		"SUNAFIL",
		"ingeniería",
		"Perú",
		"minería",
		"construcción",
		"economía circular",
		"producción limpia",
		"torres de iluminación",
		"baños químicos",
		"auditoría ambiental",
		"EIA",
		"DIA",
	],
	authors: [{ name: "CCONEX Constructores & Consultores" }],
	creator: "CCONEX Constructores & Consultores",
	publisher: "CCONEX Constructores & Consultores",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL("https://cconex.com.pe"),
	openGraph: {
		type: "website",
		locale: "es_PE",
		url: "https://cconex.com.pe",
		siteName: "CCONEX Constructores & Consultores",
		title: "CCONEX Constructores & Consultores | Ingeniería, Medio Ambiente y Seguridad Industrial",
		description:
			"Soluciones Integrales en Ingeniería, Consultoría Ambiental y Seguridad Industrial. Gestión de residuos, permisos ambientales, SGSST, ISO y más.",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "CCONEX Constructores & Consultores",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "CCONEX Constructores & Consultores",
		description:
			"Soluciones Integrales en Ingeniería, Consultoría Ambiental y Seguridad Industrial.",
		images: ["/og-image.png"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: {
		icon: "/favicon.png",
		shortcut: "/favicon.png",
		apple: "/favicon.png",
	},
	verification: {
		// google: "YOUR_GOOGLE_VERIFICATION_CODE",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<head>
				<link rel="icon" href="/favicon.png" type="image/png" />
				<link rel="apple-touch-icon" href="/favicon.png" />
				<meta name="theme-color" content="#58A93A" />
			</head>
			<body className={`${montserrat.variable} ${inter.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
