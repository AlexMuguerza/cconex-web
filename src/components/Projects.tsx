"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { whatsappLink } from "@/lib/whatsapp";

import proyectoTratamientoMinero from "@/assets/proyecto-tratamiento-minero.png";
import proyectoCentroComercialVerde from "@/assets/proyecto-centro-comercial-verde.png";
import proyectoPlantaIndustrialEco from "@/assets/proyecto-planta-industrial-eco.png";
import proyectoEstudioImpactoAmbiental from "@/assets/proyecto-estudio-impacto--ambiental.png";
import proyectoSeguridadMineraIntegral from "@/assets/proyecto-seguridad-minera-integral.png";
import proyectoOficinasCorporativas from "@/assets/proyecto-oficinas-corporativas.png";

const categories = ["Todos", "Minería", "Construcción", "Industria", "Ambiental"];

const projects = [
	{
		id: 1,
		title: "Planta de Tratamiento Minero",
		category: "Minería",
		description: "Implementación de sistema de tratamiento de aguas residuales para operación minera.",
		image: proyectoTratamientoMinero,
		message: "Hola, me interesa el proyecto de Planta de Tratamiento Minero.",
	},
	{
		id: 2,
		title: "Centro Comercial Verde",
		category: "Construcción",
		description: "Certificación LEED y gestión de residuos para centro comercial sostenible.",
		image: proyectoCentroComercialVerde,
		message: "Hola, me interesa el proyecto de Centro Comercial Verde.",
	},
	{
		id: 3,
		title: "Planta Industrial Eco",
		category: "Industria",
		description: "Implementación de producción limpia y economía circular en planta manufacturera.",
		image: proyectoPlantaIndustrialEco,
		message: "Hola, me interesa el proyecto de Planta Industrial Eco.",
	},
	{
		id: 4,
		title: "Estudio de Impacto Ambiental",
		category: "Ambiental",
		description: "EIA para proyecto de infraestructura vial de alto impacto nacional.",
		image: proyectoEstudioImpactoAmbiental,
		message: "Hola, me interesa el proyecto de Estudio de Impacto Ambiental.",
	},
	{
		id: 5,
		title: "Seguridad Minera Integral",
		category: "Minería",
		description: "Implementación de SGSST y planes de emergencia para mina subterránea.",
		image: proyectoSeguridadMineraIntegral,
		message: "Hola, me interesa el proyecto de Seguridad Minera Integral.",
	},
	{
		id: 6,
		title: "Oficinas Corporativas",
		category: "Construcción",
		description: "Diseño y ejecución de sistemas integrados de gestión para edificio corporativo.",
		image: proyectoOficinasCorporativas,
		message: "Hola, me interesa el proyecto de Oficinas Corporativas.",
	},
];

export default function Projects() {
	const [activeCategory, setActiveCategory] = useState("Todos");

	const filteredProjects =
		activeCategory === "Todos"
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
						Portafolio
					</span>
					<h2 className="font-heading font-extrabold text-3xl md:text-4xl text-dark mt-3 mb-4">
						Proyectos Destacados
					</h2>
					<p className="text-gray text-lg max-w-2xl mx-auto">
						Resultados que hablan por nosotros
					</p>
				</motion.div>

				<div className="flex flex-wrap justify-center gap-3 mb-12">
					{categories.map((category) => (
						<button
							key={category}
							onClick={() => setActiveCategory(category)}
							className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-200 ${
								activeCategory === category
									? "bg-primary text-white shadow-lg shadow-primary/25"
									: "bg-white text-gray border border-soft-green hover:border-primary hover:text-primary"
							}`}
						>
							{category}
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
											href={whatsappLink(project.message)}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-2 text-white"
										>
											<ExternalLink size={16} />
											<span className="text-sm font-medium">Ver proyecto</span>
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
