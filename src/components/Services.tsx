"use client";

import { motion } from "framer-motion";
import { Trash2, Truck, Droplets, Recycle, Leaf, Sparkles, TreePine, Shield, Award, Sun, ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

const services = [
	{
		icon: Trash2,
		title: "Gestión de Residuos",
		description: "Soluciones integrales para la gestión responsable de residuos sólidos, cumpliendo con la normativa ambiental vigente.",
		message: "Hola, me interesa el servicio de Gestión de Residuos.",
	},
	{
		icon: Truck,
		title: "Recolección y Transporte",
		description: "Servicio especializado de recolección y transporte de residuos con vehículos certificados y personal capacitado.",
		message: "Hola, me interesa el servicio de Recolección y Transporte.",
	},
	{
		icon: Droplets,
		title: "Baños Químicos",
		description: "Alquiler de baños químicos para obras y proyectos con mantenimiento regular y cumplimiento sanitario.",
		message: "Hola, me interesa el servicio de Baños Químicos.",
	},
	{
		icon: Recycle,
		title: "Economía Circular",
		description: "Implementación de modelos de economía circular para maximizar la valorización de residuos y minimizar impactos.",
		message: "Hola, me interesa el servicio de Economía Circular.",
	},
	{
		icon: Leaf,
		title: "Valorización de Residuos",
		description: "Transformación de residuos en materias primas o productos con valor económico y ambiental.",
		message: "Hola, me interesa el servicio de Valorización de Residuos.",
	},
	{
		icon: Sparkles,
		title: "Producción Limpia",
		description: "Implementación de prácticas de producción limpia para optimizar recursos y reducir generación de residuos.",
		message: "Hola, me interesa el servicio de Producción Limpia.",
	},
	{
		icon: TreePine,
		title: "Consultoría Ambiental",
		description: "Estudios de Impacto Ambiental, DIA, ITS, permisos, auditorías y participación ciudadana.",
		message: "Hola, me interesa el servicio de Consultoría Ambiental.",
	},
	{
		icon: Shield,
		title: "Seguridad Industrial",
		description: "SGSST, Ley 29783, auditorías SUNAFIL, capacitaciones y planes de emergencia.",
		message: "Hola, me interesa el servicio de Seguridad Industrial.",
	},
	{
		icon: Award,
		title: "Sistemas Integrados ISO",
		description: "Implementación y certificación ISO 9001, 14001, 45001, 37001, 39001 y 50001.",
		message: "Hola, me interesa el servicio de Sistemas Integrados ISO.",
	},
	{
		icon: Sun,
		title: "Torres de Iluminación",
		description: "Alquiler de torres de iluminación para proyectos de construcción y minería con alta potencia.",
		message: "Hola, me interesa el servicio de Torres de Iluminación.",
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.08,
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

export default function Services() {
	return (
		<section id="servicios" className="py-24 bg-background">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<span className="text-primary font-semibold text-sm uppercase tracking-wider">
						Servicios
					</span>
					<h2 className="font-heading font-extrabold text-3xl md:text-4xl text-dark mt-3 mb-4">
						Nuestros Servicios
					</h2>
					<p className="text-gray text-lg max-w-2xl mx-auto">
						Soluciones técnicas especializadas para cada necesidad
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
				>
					{services.map((service) => (
						<motion.div
							key={service.title}
							variants={itemVariants}
							className="group p-6 bg-white rounded-2xl border border-soft-green hover:border-primary transition-all duration-300 hover-lift"
						>
							<div className="w-14 h-14 bg-soft-green group-hover:bg-primary rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
								<service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
							</div>
							<h3 className="font-heading font-bold text-lg text-dark mb-2">
								{service.title}
							</h3>
							<p className="text-gray text-sm leading-relaxed mb-4">
								{service.description}
							</p>
							<a
								href={whatsappLink(service.message)}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all"
							>
								Ver más <ArrowRight size={16} />
							</a>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
