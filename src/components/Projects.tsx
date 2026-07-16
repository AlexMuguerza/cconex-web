"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n/context";

import proyectoTratamientoMinero from "@/assets/proyecto-tratamiento-minero.png";
import proyectoCentroComercialVerde from "@/assets/proyecto-centro-comercial-verde.png";
import proyectoPlantaIndustrialEco from "@/assets/proyecto-planta-industrial-eco.png";
import proyectoEstudioImpactoAmbiental from "@/assets/proyecto-estudio-impacto--ambiental.png";
import proyectoSeguridadMineraIntegral from "@/assets/proyecto-seguridad-minera-integral.png";
import proyectoOficinasCorporativas from "@/assets/proyecto-oficinas-corporativas.png";

const projectImages = {
	plantaTratamiento: proyectoTratamientoMinero,
	centroComercial: proyectoCentroComercialVerde,
	plantaIndustrial: proyectoPlantaIndustrialEco,
	estudioImpacto: proyectoEstudioImpactoAmbiental,
	seguridadMinera: proyectoSeguridadMineraIntegral,
	oficinasCorporativas: proyectoOficinasCorporativas,
};

export default function Projects() {
	const { locale, t } = useI18n();
	const [activeCategory, setActiveCategory] = useState("todos");

	const categoryKeys = ["todos", "mineria", "construccion", "industria", "ambiental"] as const;
	const categories = categoryKeys.map((key) => ({
		key,
		label: t.projects.categories[key],
	}));

	const projectKeys = ["plantaTratamiento", "centroComercial", "plantaIndustrial", "estudioImpacto", "seguridadMinera", "oficinasCorporativas"] as const;
	const categoryMap: Record<string, string> = {
		plantaTratamiento: "mineria",
		centroComercial: "construccion",
		plantaIndustrial: "industria",
		estudioImpacto: "ambiental",
		seguridadMinera: "mineria",
		oficinasCorporativas: "construccion",
	};

	const projects = projectKeys.map((key) => {
		const project = t.projects.items[key];
		const whatsappMessage = locale === "es"
			? `Hola, me interesa el proyecto de ${project.title}.`
			: `Hello, I'm interested in the ${project.title} project.`;
		return {
			id: key,
			title: project.title,
			category: categoryMap[key],
			description: project.description,
			image: projectImages[key],
			whatsappMessage,
		};
	});

	const filteredProjects =
		activeCategory === "todos"
			? projects
			: projects.filter((p) => p.category === activeCategory);

	return (
		<section id="proyectos" className="py-24 bg-background">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<span className="text-primary font-semibold text-sm uppercase tracking-wider">
						{t.projects.badge}
					</span>
					<h2 className="font-heading font-extrabold text-3xl md:text-4xl text-dark mt-3 mb-4">
						{t.projects.title}
					</h2>
					<p className="text-gray text-lg max-w-2xl mx-auto">
						{t.projects.description}
					</p>
				</motion.div>

				<div className="flex flex-wrap justify-center gap-3 mb-12">
					{categories.map((category) => (
						<button
							key={category.key}
							onClick={() => setActiveCategory(category.key)}
							className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-200 ${
								activeCategory === category.key
									? "bg-primary text-white shadow-lg shadow-primary/25"
									: "bg-white text-gray border border-soft-green hover:border-primary hover:text-primary"
							}`}
						>
							{category.label}
						</button>
					))}
				</div>

				<motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					<AnimatePresence mode="popLayout">
						{filteredProjects.map((project) => (
							<motion.div
								key={project.id}
								layout
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.9 }}
								transition={{ duration: 0.3 }}
								className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
							>
								<Image
									src={project.image}
									alt={project.title}
									fill
									className="object-cover transition-transform duration-500 group-hover:scale-110"
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
								<div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/60 transition-all duration-300" />

								<div className="absolute inset-0 p-6 flex flex-col justify-end">
									<span className="text-white/80 text-xs font-medium uppercase tracking-wider mb-2">
										{project.category}
									</span>
									<h3 className="font-heading font-bold text-xl text-white transition-all duration-300 group-hover:-translate-y-16">
										{project.title}
									</h3>
									<div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-300">
										<p className="text-white/80 text-sm mb-3">
											{project.description}
										</p>
										<a
											href={`https://wa.me/51947609227?text=${encodeURIComponent(project.whatsappMessage)}`}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-2 text-white"
										>
											<ExternalLink size={16} />
											<span className="text-sm font-medium">{t.projects.verProyecto}</span>
										</a>
									</div>
								</div>
							</motion.div>
						))}
					</AnimatePresence>
				</motion.div>
			</div>
		</section>
	);
}
