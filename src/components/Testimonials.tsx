"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

export default function Testimonials() {
	const { t } = useI18n();
	const [current, setCurrent] = useState(0);
	const [direction, setDirection] = useState(1);

	const testimonials = t.testimonials.items;

	const next = useCallback(() => {
		setDirection(1);
		setCurrent((prev) => (prev + 1) % testimonials.length);
	}, [testimonials.length]);

	const prev = useCallback(() => {
		setDirection(-1);
		setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
	}, [testimonials.length]);

	useEffect(() => {
		const timer = setInterval(next, 5000);
		return () => clearInterval(timer);
	}, [next]);

	const variants = {
		enter: (direction: number) => ({
			x: direction > 0 ? 100 : -100,
			opacity: 0,
			scale: 0.95,
		}),
		center: {
			x: 0,
			opacity: 1,
			scale: 1,
		},
		exit: (direction: number) => ({
			x: direction > 0 ? -100 : 100,
			opacity: 0,
			scale: 0.95,
		}),
	};

	return (
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
						{t.testimonials.badge}
					</span>
					<h2 className="font-heading font-extrabold text-3xl md:text-4xl text-dark mt-3 mb-4">
						{t.testimonials.title}
					</h2>
					<p className="text-gray text-lg max-w-2xl mx-auto">
						{t.testimonials.description}
					</p>
				</motion.div>

				<div className="relative max-w-4xl mx-auto">
					<div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl" />

					<div className="relative bg-white rounded-2xl p-8 md:p-12 border border-soft-green shadow-lg min-h-[320px] flex flex-col justify-center overflow-hidden">
						<Quote className="absolute top-6 left-6 w-12 h-12 text-primary/10" />

						<AnimatePresence mode="wait" custom={direction}>
							<motion.div
								key={current}
								custom={direction}
								variants={variants}
								initial="enter"
								animate="center"
								exit="exit"
								transition={{ duration: 0.4, ease: "easeInOut" }}
								className="relative z-10"
							>
								<div className="flex gap-1 mb-6">
									{Array.from({ length: testimonials[current].rating }).map((_, i) => (
										<motion.div
											key={i}
											initial={{ opacity: 0, scale: 0 }}
											animate={{ opacity: 1, scale: 1 }}
											transition={{ delay: 0.1 + i * 0.05 }}
										>
											<Star className="w-5 h-5 fill-primary text-primary" />
										</motion.div>
									))}
								</div>

								<p className="text-dark text-lg md:text-xl leading-relaxed mb-8 italic">
									&quot;{testimonials[current].content}&quot;
								</p>

								<div className="flex items-center gap-4">
									<motion.div
										initial={{ scale: 0 }}
										animate={{ scale: 1 }}
										transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
										className="w-12 h-12 bg-primary rounded-full flex items-center justify-center"
									>
										<span className="font-heading font-bold text-white text-lg">
											{testimonials[current].name.charAt(0)}
										</span>
									</motion.div>
									<div>
										<h4 className="font-heading font-bold text-dark">
											{testimonials[current].name}
										</h4>
										<p className="text-gray text-sm">
											{testimonials[current].role} - {testimonials[current].company}
										</p>
									</div>
								</div>
							</motion.div>
						</AnimatePresence>
					</div>

					<div className="flex items-center justify-center gap-4 mt-8">
						<button
							onClick={prev}
							className="w-12 h-12 rounded-full border border-soft-green bg-white hover:border-primary hover:text-primary hover:bg-primary/5 flex items-center justify-center transition-all"
						>
							<ChevronLeft size={20} />
						</button>
						<div className="flex gap-2">
							{testimonials.map((_, index) => (
								<button
									key={index}
									onClick={() => {
										setDirection(index > current ? 1 : -1);
										setCurrent(index);
									}}
									className={`h-2.5 rounded-full transition-all duration-300 ${
										index === current
											? "bg-primary w-8"
											: "bg-soft-green hover:bg-primary/50 w-2.5"
									}`}
								/>
							))}
						</div>
						<button
							onClick={next}
							className="w-12 h-12 rounded-full border border-soft-green bg-white hover:border-primary hover:text-primary hover:bg-primary/5 flex items-center justify-center transition-all"
						>
							<ChevronRight size={20} />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
