"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

export default function Certifications() {
	const { t } = useI18n();

	const certKeys = ["iso9001", "iso14001", "iso45001", "iso37001", "iso39001", "iso50001"] as const;
	const certCodes = ["ISO 9001", "ISO 14001", "ISO 45001", "ISO 37001", "ISO 39001", "ISO 50001"];

	const certifications = certKeys.map((key, index) => ({
		code: certCodes[index],
		name: t.certifications.items[key],
	}));

	return (
		<section className="py-24 bg-dark">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<span className="text-primary font-semibold text-sm uppercase tracking-wider">
						{t.certifications.badge}
					</span>
					<h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white mt-3 mb-4">
						{t.certifications.title}
					</h2>
					<p className="text-gray text-lg max-w-2xl mx-auto">
						{t.certifications.description}
					</p>
				</motion.div>

				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
					{certifications.map((cert, index) => (
						<motion.div
							key={cert.code}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="group p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary hover:bg-primary/10 transition-all duration-300 text-center hover-lift cursor-pointer"
						>
							<Award className="w-10 h-10 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
							<div className="font-heading font-bold text-lg text-white mb-1">
								{cert.code}
							</div>
							<div className="text-gray text-xs">{cert.name}</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
