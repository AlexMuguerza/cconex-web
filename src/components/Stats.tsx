"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, FolderOpen, Weight, Clock } from "lucide-react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
	const [count, setCount] = useState(0);
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (isInView) {
			let start = 0;
			const duration = 2000;
			const increment = target / (duration / 16);
			const timer = setInterval(() => {
				start += increment;
				if (start >= target) {
					setCount(target);
					clearInterval(timer);
				} else {
					setCount(Math.floor(start));
				}
			}, 16);
			return () => clearInterval(timer);
		}
	}, [isInView, target]);

	return (
		<span ref={ref}>
			{count}
			{suffix}
		</span>
	);
}

const stats = [
	{
		icon: Users,
		target: 50,
		suffix: "+",
		label: "Clientes Satisfechos",
		description: "Empresas que confían en nosotros",
	},
	{
		icon: FolderOpen,
		target: 100,
		suffix: "+",
		label: "Proyectos Completados",
		description: "Exitosamente entregados",
	},
	{
		icon: Weight,
		target: 50000,
		suffix: "+",
		label: "Toneladas Gestionadas",
		description: "De residuos procesados",
	},
	{
		icon: Clock,
		target: 10,
		suffix: "+",
		label: "Años de Experiencia",
		description: "De trayectoria profesional",
	},
];

export default function Stats() {
	return (
		<section className="py-24 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{stats.map((stat, index) => (
						<motion.div
							key={stat.label}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="text-center p-8 bg-background rounded-2xl border border-soft-green hover-lift"
						>
							<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
								<stat.icon className="w-8 h-8 text-primary" />
							</div>
							<div className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-2">
								<AnimatedCounter target={stat.target} suffix={stat.suffix} />
							</div>
							<h3 className="font-heading font-bold text-lg text-dark mb-1">
								{stat.label}
							</h3>
							<p className="text-gray text-sm">{stat.description}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
