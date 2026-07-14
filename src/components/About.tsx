"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

const values = [
	{
		icon: Target,
		title: "Misión",
		description: "Brindar soluciones técnicas integrales en ingeniería, medio ambiente y seguridad industrial, garantizando el cumplimiento normativo y la satisfacción de nuestros clientes.",
	},
	{
		icon: Eye,
		title: "Visión",
		description: "Ser la consultora líder en el Perú, reconocida por nuestra excelencia técnica, compromiso ambiental y contribución al desarrollo sostenible del país.",
	},
	{
		icon: Heart,
		title: "Valores",
		description: "Puntualidad, Compromiso y Empatía. Estos principios guían cada proyecto y relación con nuestros clientes y comunidades.",
	},
];

export default function About() {
	return (
		<section id="nosotros" className="py-24 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<span className="text-primary font-semibold text-sm uppercase tracking-wider">
							Nosotros
						</span>
						<h2 className="font-heading font-extrabold text-3xl md:text-4xl text-dark mt-3 mb-6">
							Experiencia y Compromiso con la Excelencia
						</h2>
						<p className="text-gray text-lg leading-relaxed mb-8">
							CCONEX Constructores & Consultores es una empresa peruana con más de
							10 años de experiencia brindando soluciones técnicas integrales a los
							sectores de minería, construcción, industria e infraestructura.
						</p>
						<p className="text-gray leading-relaxed">
							Nuestro equipo multidisciplinario de ingenieros y especialistas
							garantiza el cumplimiento normativo y la calidad en cada proyecto,
							respaldados por certificaciones ISO y una sólida trayectoria en el
							mercado nacional.
						</p>

						<div className="mt-8 grid grid-cols-3 gap-4">
							<div className="text-center p-4 bg-soft-green rounded-xl">
								<div className="text-3xl font-heading font-extrabold text-primary">
									+10
								</div>
								<div className="text-gray text-sm mt-1">Años de Experiencia</div>
							</div>
							<div className="text-center p-4 bg-soft-green rounded-xl">
								<div className="text-3xl font-heading font-extrabold text-primary">
									+100
								</div>
								<div className="text-gray text-sm mt-1">Proyectos</div>
							</div>
							<div className="text-center p-4 bg-soft-green rounded-xl">
								<div className="text-3xl font-heading font-extrabold text-primary">
									+50
								</div>
								<div className="text-gray text-sm mt-1">Clientes</div>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					 className="relative"
					>
						<div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl" />
						<div className="relative space-y-6">
							{values.map((value, index) => (
								<motion.div
									key={value.title}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.3 + index * 0.1 }}
								 className="p-6 bg-background rounded-2xl border border-soft-green hover-lift"
								>
									<div className="flex items-start gap-4">
										<div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
											<value.icon className="w-6 h-6 text-primary" />
										</div>
										<div>
											<h3 className="font-heading font-bold text-lg text-dark mb-2">
												{value.title}
											</h3>
											<p className="text-gray text-sm leading-relaxed">
												{value.description}
											</p>
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
