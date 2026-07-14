"use client";

import Link from "next/link";
import Image from "next/image";
import { Globe, Link2, Share2, MessageCircle, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo-sin-fondo.png";

const footerLinks = {
	services: [
		{ name: "Gestión de Residuos", href: "#" },
		{ name: "Consultoría Ambiental", href: "#" },
		{ name: "Seguridad Industrial", href: "#" },
		{ name: "Sistemas Integrados ISO", href: "#" },
		{ name: "Torres de Iluminación", href: "#" },
		{ name: "Baños Químicos", href: "#" },
	],
	company: [
		{ name: "Nosotros", href: "#nosotros" },
		{ name: "Proyectos", href: "#proyectos" },
		{ name: "Clientes", href: "#clientes" },
		{ name: "Certificaciones", href: "#" },
		{ name: "Blog", href: "#" },
		{ name: "Contacto", href: "#contacto" },
	],
};

const socials = [
	{ icon: Globe, href: "#", label: "Facebook" },
	{ icon: Link2, href: "#", label: "LinkedIn" },
	{ icon: Share2, href: "#", label: "Instagram" },
	{ icon: MessageCircle, href: "#", label: "Twitter" },
];

export default function Footer() {
	return (
		<footer className="bg-dark pt-20 pb-8">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
					<div>
						<Link href="/" className="flex items-center gap-2 mb-6">
							<Image
								src={logo}
								alt="CCONEX Logo"
								width={48}
								height={48}
								className="h-10 w-auto"
							/>
							
						</Link>
						<p className="text-gray text-sm leading-relaxed mb-6">
							Soluciones Integrales en Ingeniería, Consultoría Ambiental y Seguridad
							Industrial. Más de 10 años de experiencia respaldando proyectos en todo
							el Perú.
						</p>
						<div className="flex gap-3">
							{socials.map((social) => (
								<a
									key={social.label}
									href={social.href}
									aria-label={social.label}
									className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray hover:bg-primary hover:text-white transition-all duration-200"
								>
									<social.icon size={18} />
								</a>
							))}
						</div>
					</div>

					<div>
						<h3 className="font-heading font-bold text-white mb-6">Servicios</h3>
						<ul className="space-y-3">
							{footerLinks.services.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className="text-gray text-sm hover:text-primary transition-colors inline-flex items-center gap-1 group"
									>
										{link.name}
										<ArrowUpRight
											size={14}
											className="opacity-0 group-hover:opacity-100 transition-opacity"
										/>
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="font-heading font-bold text-white mb-6">Empresa</h3>
						<ul className="space-y-3">
							{footerLinks.company.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className="text-gray text-sm hover:text-primary transition-colors inline-flex items-center gap-1 group"
									>
										{link.name}
										<ArrowUpRight
											size={14}
											className="opacity-0 group-hover:opacity-100 transition-opacity"
										/>
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="font-heading font-bold text-white mb-6">Contacto</h3>
						<div className="space-y-4 text-gray text-sm">
							<p>
								<span className="text-white font-medium">Dirección:</span>
								<br />
								Av. Principal 123, San Isidro, Lima
							</p>
							<p>
								<span className="text-white font-medium">Teléfono:</span>
								<br />
								+51 (01) 123-4567
							</p>
							<p>
								<span className="text-white font-medium">Email:</span>
								<br />
								info@cconex.com.pe
							</p>
							<p>
								<span className="text-white font-medium">Horario:</span>
								<br />
								Lun - Vie: 8:00 AM - 6:00 PM
							</p>
						</div>
					</div>
				</div>

				<div className="border-t border-white/10 pt-8">
					<div className="flex flex-col md:flex-row items-center justify-between gap-4">
						<p className="text-gray text-sm">
							© {new Date().getFullYear()} CCONEX Constructores & Consultores. Todos los
							derechos reservados.
						</p>
						<div className="flex gap-6 text-sm text-gray">
							<Link href="#" className="hover:text-primary transition-colors">
								Política de Privacidad
							</Link>
							<Link href="#" className="hover:text-primary transition-colors">
								Términos y Condiciones
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
