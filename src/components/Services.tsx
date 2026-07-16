"use client";

import { motion } from "framer-motion";
import { Trash2, Truck, Droplets, Recycle, Leaf, Sparkles, Building2, Shield, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

const icons = {
	sanitarios: Droplets,
	transporte: Truck,
	residuos: Trash2,
	valorizacion: Recycle,
	equipos: Sparkles,
	ambiental: Leaf,
	seguridad: Shield,
	ingenieria: Building2,
};

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
	const { locale, t } = useI18n();

	const serviceKeys = ["sanitarios", "transporte", "residuos", "valorizacion", "equipos", "ambiental", "seguridad", "ingenieria"] as const;

	const services = serviceKeys.map((key) => {
		const service = t.services.items[key];
		const whatsappMessage = locale === "es"
			? `Hola, me interesa el servicio de ${service.title}.`
			: `Hello, I'm interested in the ${service.title} service.`;
		return {
			key,
			icon: icons[key],
			title: service.title,
			description: service.description,
			whatsappMessage,
		};
	});

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
						{t.services.badge}
					</span>
					<h2 className="font-heading font-extrabold text-3xl md:text-4xl text-dark mt-3 mb-4">
						{t.services.title}
					</h2>
					<p className="text-gray text-lg max-w-2xl mx-auto">
						{t.services.description}
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
							key={service.key}
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
								href={`https://wa.me/51947609227?text=${encodeURIComponent(service.whatsappMessage)}`}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all"
							>
								{t.services.verMas} <ArrowRight size={16} />
							</a>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
