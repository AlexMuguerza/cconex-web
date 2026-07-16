"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Shield, Award, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18n/context";
import heroHorizontal1 from "@/assets/hero/hero-horizontal-conlogo.png";
import heroHorizontal2 from "@/assets/hero/hero-horizontal2-conlogo.png";
import heroVertical from "@/assets/hero/hero-vertical.png";
import heroChica from "@/assets/hero/hero-chica.png";

const horizontalImages = [heroHorizontal1, heroHorizontal2];

const trustBadges = [
	{ icon: Shield, label: "ISO 14001" },
	{ icon: Award, label: "ISO 45001" },
	{ icon: Clock, label: "+10 Años" },
];

export default function Hero() {
	const { locale, t } = useI18n();
	const [currentImage, setCurrentImage] = useState(0);
	const [imagesLoaded, setImagesLoaded] = useState(false);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentImage((prev) => (prev + 1) % horizontalImages.length);
		}, 3000);
		return () => clearInterval(timer);
	}, []);

	useEffect(() => {
		const loadImages = async () => {
			const promises = horizontalImages.map(
				(src) =>
					new Promise<void>((resolve) => {
						const img = new window.Image();
						img.onload = () => resolve();
						img.onerror = () => resolve();
						img.src = src.src;
					})
			);
			await Promise.all(promises);
			setImagesLoaded(true);
		};
		loadImages();
	}, []);

	const whatsappMessage = locale === "es"
		? "Hola, me interesa solicitar una cotización de sus servicios."
		: "Hello, I'm interested in requesting a quote for your services.";
	const WHATSAPP_LINK = `https://wa.me/51947609227?text=${encodeURIComponent(whatsappMessage)}`;

	return (
		<section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
			{horizontalImages.map((img, index) => (
				<Image
					key={index}
					src={img}
					alt="CCONEX - Ingeniería y Consultoría Ambiental"
					fill
					className={`object-cover hidden lg:block transition-opacity duration-1000 ${
						!imagesLoaded ? "opacity-100" : index === currentImage ? "opacity-100" : "opacity-0"
					}`}
					priority
					sizes="(min-width: 1024px) 100vw, 0px"
				/>
			))}
			<Image
				src={heroVertical}
				alt="CCONEX - Ingeniería y Consultoría Ambiental"
				fill
				className="object-cover lg:hidden"
				priority
				sizes="(max-width: 1024px) 100vw, 0px"
			/>
			<div className="absolute inset-0 bg-linear-to-br from-dark via-dark/70 to-dark/60" />

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
					>
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 }}
							className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6"
						>
							<span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
							<span className="text-primary text-sm font-medium">
								{t.hero.badge}
							</span>
						</motion.div>

						<h1 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
							{t.hero.title1}{" "}
							<span className="gradient-text">{t.hero.title2}</span>{" "}
							{t.hero.title3}{" "}
							<span className="gradient-text">{t.hero.title4}</span>
						</h1>

						<p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed">
							{t.hero.description}
						</p>

						<div className="flex flex-col sm:flex-row gap-4 mb-8">
							<a
								href={WHATSAPP_LINK}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark"
							>
								{t.hero.cta}
								<ArrowRight
									size={18}
									className="group-hover:translate-x-1 transition-transform"
								/>
							</a>
							<Link
								href="#servicios"
								className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-dark"
							>
								<Play size={18} />
								{t.hero.cta2}
							</Link>
						</div>

						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 }}
							className="flex flex-wrap gap-4"
						>
							{trustBadges.map((badge) => (
								<div
									key={badge.label}
									className="flex items-center gap-2 text-white/70 text-sm"
								>
									<badge.icon size={16} className="text-primary" />
									<span>{badge.label}</span>
								</div>
							))}
						</motion.div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 60 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
						className="hidden lg:flex justify-end"
					>
						<div
							className="relative w-full max-w-lg h-[500px]"
							style={{
								maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
								WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
							}}
						>
							<Image
								src={heroChica}
								alt="CCONEX - Ingeniería y Consultoría Ambiental"
								fill
								loading="eager"
								className="object-contain"
								sizes="(min-width: 1024px) 512px, 0px"
							/>
						</div>
					</motion.div>
				</div>
			</div>

			<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
		</section>
	);
}
