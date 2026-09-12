"use client";

import { useI18n } from "@/lib/i18n/context";
import { servicesData, serviceKeys } from "@/lib/services";
import Link from "next/link";
import Image from "next/image";
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

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
	return (
		<svg
			className={className}
			fill="currentColor"
			viewBox="0 0 24 24"
			aria-hidden="true"
		>
			<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
		</svg>
	);
}

interface Offering {
	title: string;
	description: string;
	items: string[];
	benefit?: string;
}

interface Section {
	title: string;
	items: string[];
}

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

	// Extract offerings or fallback to sections/features
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const rawOfferings = (detail as any).offerings as Offering[] | undefined;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const rawSections = (detail as any).sections as Section[] | undefined;

	const offerings: Offering[] =
		rawOfferings && rawOfferings.length > 0
			? rawOfferings
			: rawSections && rawSections.length > 0
				? rawSections.map((s, idx) => ({
						title: s.title,
						description: detail.description,
						items: s.items,
						benefit: detail.benefits?.[idx],
					}))
				: [
						{
							title: detail.title,
							description: detail.heroDescription,
							items: detail.features,
							benefit: detail.benefits?.[0],
						},
					];

	return (
		<>
			{/* Hero with Single Fixed Background Image */}
			<section className="relative min-h-[36vh] md:min-h-[44vh] flex items-center justify-center overflow-hidden py-20 md:py-28 text-center">
				{/* Imagen única de fondo sin carrusel */}
				<div className="absolute inset-0">
					<Image
						src={service.heroImages[0]}
						alt={detail.title}
						fill
						className="object-cover"
						priority
						sizes="100vw"
					/>
				</div>

				{/* Overlay con degradado verde y oscuro profesional */}
				<div className="absolute inset-0 bg-linear-to-b from-[#0b1f13]/90 via-[#0d2818]/80 to-[#0b1f13]/90" />
				<div className="absolute inset-0 bg-primary/20 backdrop-brightness-75" />

				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
					<motion.div
						initial={{ opacity: 0, y: 15 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="flex flex-col items-center"
					>
						<Link
							href="/#servicios"
							className="inline-flex items-center gap-2 text-white/70 hover:text-white text-xs md:text-sm mb-6 transition-colors bg-white/10 hover:bg-white/20 px-3.5 py-1.5 rounded-full backdrop-blur-xs"
						>
							<ChevronRight size={14} className="rotate-180" />
							{t.serviceDetail.ctaSection.volver}
						</Link>

						<span className="text-white/80 text-xs md:text-sm font-semibold tracking-wider uppercase mb-2">
							{locale === "es" ? "Nuestros Servicios" : "Our Services"}
						</span>

						<h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
							{detail.title}
						</h1>
					</motion.div>
				</div>
			</section>

			{/* Sección Qué Ofrecemos con imágenes alternadas en zigzag */}
			<section id="que-ofrecemos" className="bg-white">
				{offerings.map((offering, index) => {
					const isEven = index % 2 === 0;
					// Map to remaining images: heroImages[1], heroImages[2], heroImages[3], etc.
					const imgIndex = (index % (service.heroImages.length - 1)) + 1;
					const offeringImage = service.heroImages[imgIndex] || service.heroImages[0];
					const offeringWhatsappMsg =
						locale === "es"
							? `Hola, me interesa cotizar el servicio de ${offering.title} (${detail.title}).`
							: `Hello, I'm interested in getting a quote for ${offering.title} (${detail.title}).`;

					return (
						<div
							key={index}
							className={`py-14 md:py-20 ${
								isEven ? "bg-white" : "bg-[#f4f9f4] border-y border-soft-green/40"
							}`}
						>
							<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
								<div className="grid md:grid-cols-2 gap-8 lg:gap-14 items-center">
									{/* Contenedor de Imagen */}
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.6 }}
										className={`w-full ${isEven ? "md:order-1" : "md:order-2"}`}
									>
										<div className="relative w-full aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-md border border-black/5">
											<Image
												src={offeringImage}
												alt={offering.title}
												fill
												className="object-cover transition-transform duration-500 hover:scale-105"
												sizes="(max-width: 768px) 100vw, 50vw"
											/>
										</div>
									</motion.div>

									{/* Contenedor de Texto */}
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.6, delay: 0.1 }}
										className={`w-full ${isEven ? "md:order-2" : "md:order-1"}`}
									>
										<h2 className="font-heading font-bold text-2xl md:text-3xl text-dark mb-4">
											{offering.title}
										</h2>

										<p className="text-gray text-base leading-relaxed mb-6">
											{offering.description}
										</p>

										{/* Lista de viñetas con Check */}
										<ul className="space-y-2.5 mb-6">
											{offering.items.map((item, i) => (
												<li key={i} className="flex items-start gap-2.5">
													<CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
													<span className="text-dark/90 text-sm md:text-base leading-snug">
														{item}
													</span>
												</li>
											))}
										</ul>

										{/* Beneficios del servicio */}
										{offering.benefit && (
											<p className="text-sm md:text-base mb-6 leading-relaxed">
												<span className="font-bold text-dark">
													{locale === "es" ? "Beneficios del servicio: " : "Service benefits: "}
												</span>
												<span className="text-gray">{offering.benefit}</span>
											</p>
										)}

										{/* Botón WhatsApp Cotizar servicio */}
										<div>
											<a
												href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(offeringWhatsappMsg)}`}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold text-sm px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 group"
											>
												<WhatsAppIcon className="w-4 h-4 text-white fill-current" />
												<span>{locale === "es" ? "Cotizar servicio" : "Request quote"}</span>
											</a>
										</div>
									</motion.div>
								</div>
							</div>
						</div>
					);
				})}
			</section>

			{/* Trust Bar */}
			<section className="bg-white border-y border-soft-green">
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
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.1 * i, duration: 0.4 }}
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
