"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useI18n } from "@/lib/i18n/context";
import logo from "@/assets/logo-sin-fondo.png";

export default function Navbar() {
	const { locale, setLocale, t } = useI18n();
	const pathname = usePathname();
	const isHome = pathname === "/";
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileOpen, setIsMobileOpen] = useState(false);
	const isGlass = isScrolled || isMobileOpen;

	const navLinks = [
		{ name: t.nav.inicio, href: "#inicio" },
		{ name: t.nav.nosotros, href: "#nosotros" },
		{ name: t.nav.servicios, href: "#servicios" },
		{ name: t.nav.clientes, href: "#clientes" },
		{ name: t.nav.sectores, href: "#sectores" },
		{ name: t.nav.contacto, href: "#contacto" },
	];

	const getLinkHref = (hash: string) => {
		if (isHome) return hash;
		return `/${hash}`;
	};

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleLocale = () => {
		setLocale(locale === "es" ? "en" : "es");
	};

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
								href={getLinkHref(link.href)}
								className={`font-medium hover:text-primary transition-colors duration-200 text-sm ${isGlass ? "text-gray" : "text-white"}`}
							>
								{link.name}
							</Link>
						))}
					</div>

					<div className="hidden lg:flex items-center gap-3">
						<button
							onClick={toggleLocale}
							className={`flex items-center gap-1.5 px-3 py-2 rounded-full transition-all duration-200 hover:bg-white/10 ${isGlass ? "text-dark" : "text-white"}`}
						>
							<Globe className="w-4 h-4" />
							<span className="text-sm font-medium">
								{/* {locale === "es" ? t.lang.es : t.lang.en} */}
								español / inglés
							</span>
						</button>

						<a
							href="tel:+51948078337"
							className={`flex items-center gap-3 px-4 py-2 rounded-full transition-all duration-200 hover:bg-white/10 ${isGlass ? "text-dark" : "text-white"}`}
						>
							<span className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
								<Phone className="w-5 h-5 text-white" />
							</span>
							<span className="text-sm font-medium leading-tight">
								{t.nav.contactanos}<br />
								<span className="font-bold">948 078 337</span>
							</span>
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
									href={getLinkHref(link.href)}
									onClick={() => setIsMobileOpen(false)}
									className="block text-gray font-medium hover:text-primary transition-colors"
								>
									{link.name}
								</Link>
							))}
							<div className="pt-4 border-t border-soft-green">
								<button
									onClick={toggleLocale}
									className="flex items-center gap-2 text-gray font-medium hover:text-primary transition-colors"
								>
									<Globe className="w-4 h-4" />
									{locale === "es" ? "English" : "Español"}
								</button>
							</div>
							<a
								href="tel:+51948078337"
								onClick={() => setIsMobileOpen(false)}
								className="flex items-center gap-3 px-4 py-3 bg-background rounded-xl"
							>
								<span className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0">
									<Phone className="w-5 h-5 text-white" />
								</span>
								<span className="text-sm font-medium text-dark leading-tight">
									{t.nav.contactanos}<br />
									<span className="font-bold">948 078 337</span>
								</span>
							</a>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.nav>
	);
}
