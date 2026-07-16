"use client";

import { motion } from "framer-motion";
import { Search, ClipboardCheck, FileText, Wrench, CheckCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

const icons = [Search, ClipboardCheck, FileText, Wrench, CheckCircle];

export default function HowWeWork() {
	const { t } = useI18n();

	const stepKeys = ["diagnostico", "inspeccion", "propuesta", "ejecucion", "entrega"] as const;

	const steps = stepKeys.map((key, index) => ({
		key,
		icon: icons[index],
		title: t.howWeWork.steps[key].title,
		description: t.howWeWork.steps[key].description,
		number: String(index + 1).padStart(2, "0"),
	}));

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
						{t.howWeWork.badge}
					</span>
					<h2 className="font-heading font-extrabold text-3xl md:text-4xl text-dark mt-3 mb-4">
						{t.howWeWork.title}
					</h2>
					<p className="text-gray text-lg max-w-2xl mx-auto">
						{t.howWeWork.description}
					</p>
				</motion.div>

				<div className="relative">
					<div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-soft-green hidden lg:block" />

					<div className="space-y-12 lg:space-y-0">
						{steps.map((step, index) => (
							<motion.div
								key={step.key}
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
											{t.howWeWork.paso} {step.number}
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
