"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useI18n } from "@/lib/i18n/context";
import edificaciones from "@/assets/clientes/edificaciones.png";
import ferp from "@/assets/clientes/ferp.png";
import entel from "@/assets/clientes/entel.png";

const clientLogos = [
	{ name: "Edificaciones", logo: edificaciones },
	{ name: "FERP", logo: ferp },
	{ name: "Entel", logo: entel },
];

export default function Clients() {
	const { t } = useI18n();

	return (
		<section id="clientes" className="py-24 bg-background">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="text-center lg:text-left"
					>
						<span className="text-primary font-semibold text-sm uppercase tracking-wider">
							{t.clients.badge}
						</span>
						<h2 className="font-heading font-extrabold text-3xl md:text-4xl text-dark mt-3 mb-4">
							{t.clients.title}
						</h2>
						<p className="text-gray text-lg">
							{t.clients.description}
						</p>
					</motion.div>

					<div className="relative overflow-hidden">
						<div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
						<div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />

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
							className="flex gap-8 items-center whitespace-nowrap"
						>
							{[...clientLogos, ...clientLogos].map((client, index) => (
							<div
								key={`${client.name}-${index}`}
								className="flex-shrink-0 w-36 h-16 bg-white rounded-xl border border-soft-green flex items-center justify-center hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer grayscale hover:grayscale-0 p-3"
							>
								<div className="relative w-full h-full">
									<Image
										src={client.logo}
										alt={client.name}
										fill
										className="object-contain"
										sizes="144px"
									/>
								</div>
							</div>
							))}
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}
