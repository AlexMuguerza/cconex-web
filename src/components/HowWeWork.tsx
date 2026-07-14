"use client";

import { motion } from "framer-motion";
import { Search, ClipboardCheck, FileText, Wrench, CheckCircle } from "lucide-react";

const steps = [
	{
		icon: Search,
		title: "Diagnóstico",
		description: "Evaluación inicial del proyecto para identificar necesidades, requisitos normativos y alcance del trabajo.",
		number: "01",
	},
	{
		icon: ClipboardCheck,
		title: "Inspección Técnica",
		description: "Visita técnica al sitio para recopilar información detallada del estado actual y condiciones específicas.",
		number: "02",
	},
	{
		icon: FileText,
		title: "Propuesta",
		description: "Elaboración de propuesta técnica y económica detallada con cronograma y alcance definido.",
		number: "03",
	},
	{
		icon: Wrench,
		title: "Ejecución",
		description: "Desarrollo del proyecto con supervisiones periódicas, control de calidad y reportes de avance.",
		number: "04",
	},
	{
		icon: CheckCircle,
		title: "Entrega y Seguimiento",
		description: "Entrega de resultados, documentación y seguimiento post-proyecto para garantizar el cumplimiento continuo.",
		number: "05",
	},
];

export default function HowWeWork() {
	return (
		<section className="py-24 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<span className="text-primary font-semibold text-sm uppercase tracking-wider">
						Proceso
					</span>
					<h2 className="font-heading font-extrabold text-3xl md:text-4xl text-dark mt-3 mb-4">
						Cómo Trabajamos
					</h2>
					<p className="text-gray text-lg max-w-2xl mx-auto">
						Un proceso estructurado que garantiza resultados de calidad
					</p>
				</motion.div>

				<div className="relative">
					<div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-soft-green hidden lg:block" />

					<div className="space-y-12 lg:space-y-0">
						{steps.map((step, index) => (
							<motion.div
								key={step.title}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1, duration: 0.5 }}
								className={`relative lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center ${
									index % 2 === 0 ? "" : "lg:text-right"
								}`}
							>
								<div
									className={`${
										index % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:order-2 lg:pl-12"
									}`}
								>
									<div
										className={`inline-flex items-center gap-3 bg-soft-green rounded-full px-4 py-2 mb-4 ${
											index % 2 === 0 ? "lg:flex-row-reverse" : ""
										}`}
									>
										<span className="text-primary font-heading font-bold text-sm">
											Paso {step.number}
										</span>
									</div>
									<h3 className="font-heading font-bold text-xl text-dark mb-2">
										{step.title}
									</h3>
									<p className="text-gray leading-relaxed">
										{step.description}
									</p>
								</div>

								<div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 bg-white border-4 border-primary rounded-full items-center justify-center z-10">
									<step.icon className="w-6 h-6 text-primary" />
								</div>

								<div
									className={`${
										index % 2 === 0 ? "lg:order-2 lg:pl-12" : "lg:pr-12"
									} hidden lg:block`}
								/>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
