"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { whatsappLink } from "@/lib/whatsapp";
import logo from "@/assets/logo-sin-fondo.png";

const WHATSAPP_LINK = whatsappLink("Hola, me interesa solicitar una cotización de sus servicios.");

const navLinks = [
	{ name: "Inicio", href: "#inicio" },
	{ name: "Nosotros", href: "#nosotros" },
	{ name: "Sectores", href: "#sectores" },
	{ name: "Servicios", href: "#servicios" },
	{ name: "Proyectos", href: "#proyectos" },
	{ name: "Clientes", href: "#clientes" },
	{ name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileOpen, setIsMobileOpen] = useState(false);
	const isGlass = isScrolled || isMobileOpen;

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isGlass ? "glass shadow-lg py-3" : "bg-transparent py-3"
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between">
					<Link href="/" className="flex items-center gap-2">
						<Image
							src={logo}
							alt="CCONEX Logo"
							width={48}
							height={48}
							className="h-10 w-auto"
							priority
						/>
						
					</Link>

					<div className="hidden lg:flex items-center gap-8">
						{navLinks.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								className={`font-medium hover:text-primary transition-colors duration-200 text-sm ${isGlass ? "text-gray" : "text-white"}`}
							>
								{link.name}
							</Link>
						))}
					</div>

					<div className="hidden lg:block">
						<a
							href={WHATSAPP_LINK}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
						>
							Solicitar Cotización
						</a>
					</div>

					<button
						onClick={() => setIsMobileOpen(!isMobileOpen)}
						className={`lg:hidden p-2 transition-colors duration-200 ${isGlass ? "text-dark" : "text-white"}`}
					>
						{isMobileOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</div>

			<AnimatePresence>
				{isMobileOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className="lg:hidden bg-white/90 backdrop-blur-md border-t border-soft-green"
					>
						<div className="px-4 py-6 space-y-4">
							{navLinks.map((link) => (
								<Link
									key={link.name}
									href={link.href}
									onClick={() => setIsMobileOpen(false)}
									className="block text-gray font-medium hover:text-primary transition-colors"
								>
									{link.name}
								</Link>
							))}
							<a
								href={WHATSAPP_LINK}
								target="_blank"
								rel="noopener noreferrer"
								onClick={() => setIsMobileOpen(false)}
								className="block bg-primary text-white text-center font-semibold px-6 py-3 rounded-lg"
							>
								Solicitar Cotización
							</a>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.nav>
	);
}
