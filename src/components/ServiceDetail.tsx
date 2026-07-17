"use client";

import { useI18n } from "@/lib/i18n/context";
import { servicesData, serviceKeys, type ServiceKey } from "@/lib/services";
import Link from "next/link";
import { motion } from "framer-motion";
import {
	ArrowRight,
	Phone,
	CheckCircle2,
	ChevronRight,
	Shield,
	Award,
	Clock,
	Users,
} from "lucide-react";

const WHATSAPP_NUMBER = "51948078337";

interface Props {
	slug: string;
}

export default function ServiceDetail({ slug }: Props) {
	const { locale, t } = useI18n();
	const service = Object.values(servicesData).find((s) => s.slug === slug);

	if (!service) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-center">
					<h1 className="text-3xl font-bold text-dark mb-4">Servicio no encontrado</h1>
					<Link href="/#servicios" className="text-primary hover:underline">
						Volver a servicios
					</Link>
				</div>
			</div>
		);
	}

	const serviceKey = service.key as keyof typeof t.serviceDetail.items;
	const detail = t.serviceDetail.items[serviceKey];
	const Icon = service.icon;

	const otherServices = serviceKeys
		.filter((k) => k !== service.key)
		.map((k) => ({
			key: k,
			icon: servicesData[k].icon,
			slug: servicesData[k].slug,
			title: t.services.items[k].title,
			description: t.services.items[k].description,
		}));

	const whatsappMessage =
		locale === "es"
			? `Hola, me interesa el servicio de ${detail.title}.`
			: `Hello, I'm interested in the ${detail.title} service.`;

	return (
		<>
			{/* Hero */}
			<section className="relative bg-dark py-28 overflow-hidden">
				<div className="absolute inset-0 opacity-10">
					<div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
					<div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
				</div>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<Link
							href="/#servicios"
							className="inline-flex items-center gap-2 text-white/60 hover:text-primary text-sm mb-8 transition-colors"
						>
							<ChevronRight size={14} className="rotate-180" />
							{t.serviceDetail.ctaSection.volver}
						</Link>

						<div className="flex flex-col md:flex-row md:items-center gap-8">
							<div className="flex-1">
								<span className="text-primary font-semibold text-sm uppercase tracking-wider">
									{t.serviceDetail.hero.badge}
								</span>
								<h1 className="font-heading font-extrabold text-4xl md:text-5xl text-white mt-3 mb-6">
									{detail.title}
								</h1>
								<p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl">
									{detail.heroDescription}
								</p>
								<div className="flex flex-wrap gap-4">
									<a
										href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`}
										target="_blank"
										rel="noopener noreferrer"
										className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 inline-flex items-center gap-2 group"
									>
										<Phone size={18} />
										{t.serviceDetail.hero.cta}
										<ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
									</a>
								</div>
							</div>

							<div className="w-24 h-24 md:w-32 md:h-32 bg-primary/20 rounded-3xl flex items-center justify-center shrink-0 border border-primary/30">
								<Icon className="w-12 h-12 md:w-16 md:h-16 text-primary" />
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Trust Bar */}
			<section className="bg-white border-b border-soft-green">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-soft-green">
						{[
							{ icon: Shield, label: "ISO 14001", sub: locale === "es" ? "Certificación Ambiental" : "Environmental Certification" },
							{ icon: Award, label: "ISO 45001", sub: locale === "es" ? "Seguridad y Salud" : "Health & Safety" },
							{ icon: Clock, label: "+10 Años", sub: locale === "es" ? "De Experiencia" : "Experience" },
							{ icon: Users, label: "+50", sub: locale === "es" ? "Clientes Activos" : "Active Clients" },
						].map((item, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2 + i * 0.1 }}
								className="flex items-center gap-3 py-6 px-4 md:px-6"
							>
								<div className="w-10 h-10 bg-soft-green rounded-lg flex items-center justify-center shrink-0">
									<item.icon className="w-5 h-5 text-primary" />
								</div>
								<div>
									<p className="font-heading font-bold text-dark text-sm">{item.label}</p>
									<p className="text-gray text-xs">{item.sub}</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Features */}
			<section className="py-24 bg-background">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="mb-16"
					>
						<span className="text-primary font-semibold text-sm uppercase tracking-wider">
							{t.serviceDetail.features.badge}
						</span>
						<h2 className="font-heading font-extrabold text-3xl md:text-4xl text-dark mt-3">
							{t.serviceDetail.features.title}
						</h2>
					</motion.div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{detail.features.map((feature: string, i: number) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.08, duration: 0.5 }}
								className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-soft-green hover:border-primary transition-colors duration-300"
							>
								<CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
								<p className="text-dark text-sm leading-relaxed">{feature}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Benefits */}
			<section className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="mb-16"
					>
						<span className="text-primary font-semibold text-sm uppercase tracking-wider">
							{t.serviceDetail.benefits.badge}
						</span>
						<h2 className="font-heading font-extrabold text-3xl md:text-4xl text-dark mt-3">
							{t.serviceDetail.benefits.title}
						</h2>
					</motion.div>

					<div className="grid md:grid-cols-2 gap-6">
						{detail.benefits.map((benefit: string, i: number) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.1, duration: 0.5 }}
								className="flex items-center gap-4 p-5 bg-background rounded-xl border border-soft-green"
							>
								<div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0">
									<span className="text-white font-heading font-bold text-sm">{i + 1}</span>
								</div>
								<p className="text-dark font-medium">{benefit}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Process */}
			<section className="py-24 bg-background">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="text-center mb-16"
					>
						<span className="text-primary font-semibold text-sm uppercase tracking-wider">
							{t.serviceDetail.process.badge}
						</span>
						<h2 className="font-heading font-extrabold text-3xl md:text-4xl text-dark mt-3 mb-4">
							{t.serviceDetail.process.title}
						</h2>
					</motion.div>

					<div className="relative">
						<div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-soft-green hidden lg:block" />

						<div className="space-y-12 lg:space-y-0">
							{detail.process.map((step: { title: string; description: string }, index: number) => (
								<motion.div
									key={index}
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
												{locale === "es" ? "Paso" : "Step"} {String(index + 1).padStart(2, "0")}
											</span>
										</div>
										<h3 className="font-heading font-bold text-xl text-dark mb-2">
											{step.title}
										</h3>
										<p className="text-gray leading-relaxed">{step.description}</p>
									</div>

									<div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 bg-white border-4 border-primary rounded-full items-center justify-center z-10">
										<span className="text-primary font-heading font-bold text-lg">{index + 1}</span>
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

			{/* CTA Section */}
			<section className="py-24 bg-dark relative overflow-hidden">
				<div className="absolute inset-0 opacity-10">
					<div className="absolute top-10 right-20 w-64 h-64 bg-primary rounded-full blur-3xl" />
					<div className="absolute bottom-10 left-20 w-80 h-80 bg-primary rounded-full blur-3xl" />
				</div>
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<span className="text-primary font-semibold text-sm uppercase tracking-wider">
							{t.serviceDetail.ctaSection.badge}
						</span>
						<h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white mt-3 mb-6">
							{t.serviceDetail.ctaSection.title}
						</h2>
						<p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
							{t.serviceDetail.ctaSection.description}
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a
								href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`}
								target="_blank"
								rel="noopener noreferrer"
								className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 inline-flex items-center justify-center gap-2 group"
							>
								<Phone size={18} />
								{t.serviceDetail.ctaSection.whatsapp}
								<ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
							</a>
							<Link
								href="/#contacto"
								className="border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2"
							>
								{t.serviceDetail.ctaSection.form}
							</Link>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Other Services */}
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
							{t.serviceDetail.otherServices.badge}
						</span>
						<h2 className="font-heading font-extrabold text-3xl md:text-4xl text-dark mt-3 mb-4">
							{t.serviceDetail.otherServices.title}
						</h2>
					</motion.div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						{otherServices.map((s, i) => {
							const SIcon = s.icon;
							return (
								<motion.div
									key={s.key}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: i * 0.08, duration: 0.5 }}
								>
									<Link
										href={`/servicios/${s.slug}`}
										className="group block p-6 bg-background rounded-2xl border border-soft-green hover:border-primary transition-all duration-300 hover-lift h-full"
									>
										<div className="w-14 h-14 bg-soft-green group-hover:bg-primary rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
											<SIcon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
										</div>
										<h3 className="font-heading font-bold text-lg text-dark mb-2">
											{s.title}
										</h3>
										<p className="text-gray text-sm leading-relaxed mb-4 line-clamp-2">
											{s.description}
										</p>
										<span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
											{t.serviceDetail.otherServices.verDetalle} <ArrowRight size={16} />
										</span>
									</Link>
								</motion.div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
}
