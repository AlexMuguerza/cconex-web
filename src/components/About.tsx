"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

export default function About() {
	const { t } = useI18n();

	const values = [
		{
			icon: Target,
			title: t.about.mision.title,
			description: t.about.mision.description,
		},
		{
			icon: Eye,
			title: t.about.vision.title,
			description: t.about.vision.description,
		},
		{
			icon: Heart,
			title: t.about.valores.title,
			description: t.about.valores.description,
		},
	];

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
							{t.about.badge}
						</span>
						<h2 className="font-heading font-extrabold text-3xl md:text-4xl text-dark mt-3 mb-6">
							{t.about.title}
						</h2>
						<p className="text-gray text-lg leading-relaxed mb-8">
							{t.about.description1}
						</p>
						<p className="text-gray leading-relaxed">
							{t.about.description2}
						</p>

						<div className="mt-8 grid grid-cols-3 gap-4">
							<div className="text-center p-4 bg-soft-green rounded-xl">
								<div className="text-3xl font-heading font-extrabold text-primary">
									+10
								</div>
								<div className="text-gray text-sm mt-1">{t.about.stats.experiencia}</div>
							</div>
							<div className="text-center p-4 bg-soft-green rounded-xl">
								<div className="text-3xl font-heading font-extrabold text-primary">
									+100
								</div>
								<div className="text-gray text-sm mt-1">{t.about.stats.proyectos}</div>
							</div>
							<div className="text-center p-4 bg-soft-green rounded-xl">
								<div className="text-3xl font-heading font-extrabold text-primary">
									+50
								</div>
								<div className="text-gray text-sm mt-1">{t.about.stats.clientes}</div>
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
