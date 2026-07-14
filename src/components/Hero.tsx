"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, TrendingUp, Users, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { whatsappLink } from "@/lib/whatsapp";
import heroHorizontal from "@/assets/hero-horizontal.png";
import heroVertical from "@/assets/hero-vertical.png";

const WHATSAPP_LINK = whatsappLink("Hola, me interesa solicitar una cotización de sus servicios.");

const stats = [
	{ icon: TrendingUp, value: "+100", label: "Proyectos" },
	{ icon: Users, value: "+50", label: "Clientes" },
	{ icon: Clock, value: "+10", label: "Años" },
	{ icon: MapPin, value: "100%", label: "Cobertura Nacional" },
];

export default function Hero() {
	return (
		<section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
			<Image
				src={heroHorizontal}
				alt="CCONEX - Ingeniería y Consultoría Ambiental"
				fill
				className="object-cover hidden lg:block"
				priority
				sizes="100vw"
			/>
			<Image
				src={heroVertical}
				alt="CCONEX - Ingeniería y Consultoría Ambiental"
				fill
				className="object-cover lg:hidden"
				priority
				sizes="100vw"
			/>
			<div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/70 to-dark/60" />

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
					>
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 }}
							className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6"
						>
							<span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
							<span className="text-primary text-sm font-medium">
								Ingeniería & Consultoría de Alto Nivel
							</span>
						</motion.div>

						<h1 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
							Soluciones Integrales en{" "}
							<span className="gradient-text">Ingeniería,</span>{" "}
							Medio Ambiente y{" "}
							<span className="gradient-text">Seguridad Industrial</span>
						</h1>

						<p className="text-gray text-lg md:text-xl mb-8 leading-relaxed">
							Cumplimiento normativo y soporte técnico especializado para empresas
							de minería, construcción, industria e infraestructura.
						</p>

						<div className="flex flex-col sm:flex-row gap-4">
							<a
								href={WHATSAPP_LINK}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 group"
							>
								Solicitar Cotización
								<ArrowRight
									size={18}
									className="group-hover:translate-x-1 transition-transform"
								/>
							</a>
							<Link
								href="#servicios"
								className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 border border-white/20"
							>
								<Play size={18} />
								Ver Servicios
							</Link>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
						className="hidden lg:block"
					>
						<div className="relative">
							<div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-3xl" />
							<div className="relative glass-dark rounded-2xl p-8 border border-white/10">
								<div className="grid grid-cols-2 gap-6">
									{stats.map((stat, index) => (
										<motion.div
											key={stat.label}
											initial={{ opacity: 0, scale: 0.8 }}
											animate={{ opacity: 1, scale: 1 }}
											transition={{ delay: 0.5 + index * 0.1 }}
											className="text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
										>
											<stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
											<div className="text-3xl font-heading font-extrabold text-white mb-1">
												{stat.value}
											</div>
											<div className="text-gray text-sm">{stat.label}</div>
										</motion.div>
									))}
								</div>
							</div>
						</div>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.8, duration: 0.6 }}
					className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 lg:hidden"
				>
					{stats.map((stat) => (
						<div
							key={stat.label}
							className="text-center p-4 glass-dark rounded-xl border border-white/10"
						>
							<stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
							<div className="text-2xl font-heading font-extrabold text-white">
								{stat.value}
							</div>
							<div className="text-gray text-xs">{stat.label}</div>
						</div>
					))}
				</motion.div>
			</div>

			<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
		</section>
	);
}
