"use client";

import { motion } from "framer-motion";

const clients = [
	{ name: "Grupo México", logo: "GM" },
		{ name: "Southern Copper", logo: "SC" },
		{ name: "Antamina", logo: "AN" },
		{ name: "Volcán", logo: "VL" },
		{ name: "Cerro Verde", logo: "CV" },
		{ name: "La Oroya", logo: "LO" },
		{ name: "Socabón", logo: "SO" },
		{ name: "Rio Tinto", logo: "RT" },
		{ name: "BHP", logo: "BH" },
		{ name: "Anglo American", logo: "AA" },
];

export default function Clients() {
	return (
		<section id="clientes" className="py-24 bg-background">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<span className="text-primary font-semibold text-sm uppercase tracking-wider">
						Confianza
					</span>
					<h2 className="font-heading font-extrabold text-3xl md:text-4xl text-dark mt-3 mb-4">
						Empresas que Confían en Nosotros
					</h2>
					<p className="text-gray text-lg max-w-2xl mx-auto">
						Más de 50 empresas líderes nos respaldan
					</p>
				</motion.div>
			</div>

			<div className="relative overflow-hidden">
				<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
				<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

				<motion.div
					animate={{ x: ["0%", "-50%"] }}
					transition={{
						x: {
							repeat: Infinity,
							repeatType: "loop",
							duration: 30,
							ease: "linear",
						},
					}}
					className="flex gap-12 items-center whitespace-nowrap"
				>
					{[...clients, ...clients].map((client, index) => (
						<div
							key={`${client.name}-${index}`}
						 className="flex-shrink-0 w-40 h-20 bg-white rounded-xl border border-soft-green flex items-center justify-center hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer grayscale hover:grayscale-0"
						>
							<span className="font-heading font-bold text-xl text-gray hover:text-primary transition-colors">
								{client.logo}
							</span>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
