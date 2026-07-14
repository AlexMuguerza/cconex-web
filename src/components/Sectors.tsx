"use client";

import { motion } from "framer-motion";
import { HardHat, Building2, Factory, Zap, ShoppingBag, Landmark, Network, Cog } from "lucide-react";

const sectors = [
	{
		icon: HardHat,
		name: "Minería",
		description: "Gestión ambiental y seguridad para operaciones mineras. Cumplimiento de estándares internacionales y normativa nacional.",
	},
	{
		icon: Building2,
		name: "Construcción",
		description: "Consultoría técnica para obras civiles. Control de impacto ambiental y seguridad en obra.",
	},
	{
		icon: Factory,
		name: "Industria",
		description: "Sistemas integrados de gestión y producción limpia para plantas industriales.",
	},
	{
		icon: Zap,
		name: "Energía",
		description: "Estudios de impacto ambiental y permisos para proyectos energéticos.",
	},
	{
		icon: ShoppingBag,
		name: "Retail",
		description: "Gestión de residuos y cumplimiento normativo para centros comerciales y retail.",
	},
	{
		icon: Landmark,
		name: "Sector Público",
		description: "Consultoría para entidades gubernamentales. Estudios técnicos y participación ciudadana.",
	},
	{
		icon: Network,
		name: "Infraestructura",
		description: "Proyectos de infraestructura con enfoque sostenible y cumplimiento ambiental.",
	},
	{
		icon: Cog,
		name: "Manufactura",
		description: "Optimización de procesos y gestión de residuos industriales para el sector manufacturero.",
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: "easeOut" as const },
	},
};

export default function Sectors() {
	return (
		<section id="sectores" className="py-24 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<span className="text-primary font-semibold text-sm uppercase tracking-wider">
						Sectores
					</span>
					<h2 className="font-heading font-extrabold text-3xl md:text-4xl text-dark mt-3 mb-4">
						Sectores que Atendemos
					</h2>
					<p className="text-gray text-lg max-w-2xl mx-auto">
						Experiencia comprobada en los sectores más exigentes del Perú
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
				>
					{sectors.map((sector) => (
						<motion.div
							key={sector.name}
							variants={itemVariants}
							className="group p-6 rounded-2xl border border-soft-green bg-background hover:bg-primary hover:border-primary transition-all duration-300 hover-lift cursor-pointer"
						>
							<div className="w-14 h-14 bg-soft-green group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
								<sector.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
							</div>
							<h3 className="font-heading font-bold text-lg text-dark group-hover:text-white transition-colors mb-2">
								{sector.name}
							</h3>
							<p className="text-gray group-hover:text-white/80 text-sm leading-relaxed transition-colors">
								{sector.description}
							</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
