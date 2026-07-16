"use client";

import { motion } from "framer-motion";
import { HardHat, Building2, Factory, Zap, ShoppingBag, Landmark, Network, Cog } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

const icons = {
	mineria: HardHat,
	construccion: Building2,
	industria: Factory,
	energia: Zap,
	retail: ShoppingBag,
	publico: Landmark,
	infraestructura: Network,
	manufactura: Cog,
};

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
	const { t } = useI18n();

	const sectorKeys = ["mineria", "construccion", "industria", "energia", "retail", "publico", "infraestructura", "manufactura"] as const;

	const sectors = sectorKeys.map((key) => ({
		key,
		icon: icons[key],
		name: t.sectors.items[key].name,
		description: t.sectors.items[key].description,
	}));

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
						{t.sectors.badge}
					</span>
					<h2 className="font-heading font-extrabold text-3xl md:text-4xl text-dark mt-3 mb-4">
						{t.sectors.title}
					</h2>
					<p className="text-gray text-lg max-w-2xl mx-auto">
						{t.sectors.description}
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
							key={sector.key}
							variants={itemVariants}
							className="group p-6 rounded-2xl border border-soft-green bg-background hover:bg-primary hover:border-primary transition-colors duration-300 hover-lift cursor-pointer"
						>
							<div className="w-14 h-14 bg-soft-green group-hover:bg-white rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
								<sector.icon className="w-7 h-7 text-primary group-hover:text-primary transition-colors duration-300" />
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
