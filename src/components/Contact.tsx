"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		company: "",
		service: "",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission
	};

	return (
		<section id="contacto" className="py-24 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<span className="text-primary font-semibold text-sm uppercase tracking-wider">
						Contacto
					</span>
					<h2 className="font-heading font-extrabold text-3xl md:text-4xl text-dark mt-3 mb-4">
						Contáctanos
					</h2>
					<p className="text-gray text-lg max-w-2xl mx-auto">
						Estamos listos para atender tu proyecto
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-12">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="grid md:grid-cols-2 gap-6">
								<div>
									<label className="block text-sm font-medium text-dark mb-2">
										Nombre completo *
									</label>
									<input
										type="text"
										required
										value={formData.name}
										onChange={(e) =>
											setFormData({ ...formData, name: e.target.value })
										}
										className="w-full px-4 py-3 rounded-lg border border-soft-green focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-background"
										placeholder="Tu nombre"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-dark mb-2">
										Email *
									</label>
									<input
										type="email"
										required
										value={formData.email}
										onChange={(e) =>
											setFormData({ ...formData, email: e.target.value })
										}
										className="w-full px-4 py-3 rounded-lg border border-soft-green focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-background"
										placeholder="tu@email.com"
									/>
								</div>
							</div>

							<div className="grid md:grid-cols-2 gap-6">
								<div>
									<label className="block text-sm font-medium text-dark mb-2">
										Teléfono
									</label>
									<input
										type="tel"
										value={formData.phone}
										onChange={(e) =>
											setFormData({ ...formData, phone: e.target.value })
										}
										className="w-full px-4 py-3 rounded-lg border border-soft-green focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-background"
										placeholder="+51 999 999 999"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-dark mb-2">
										Empresa
									</label>
									<input
										type="text"
										value={formData.company}
										onChange={(e) =>
											setFormData({ ...formData, company: e.target.value })
										}
										className="w-full px-4 py-3 rounded-lg border border-soft-green focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-background"
										placeholder="Nombre de tu empresa"
									/>
								</div>
							</div>

							<div>
								<label className="block text-sm font-medium text-dark mb-2">
									Servicio de interés *
								</label>
								<select
									required
									value={formData.service}
									onChange={(e) =>
										setFormData({ ...formData, service: e.target.value })
									}
									className="w-full px-4 py-3 rounded-lg border border-soft-green focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-background"
								>
									<option value="">Selecciona un servicio</option>
									<option value="residuos">Gestión de Residuos</option>
									<option value="ambiental">Consultoría Ambiental</option>
									<option value="seguridad">Seguridad Industrial</option>
									<option value="iso">Sistemas Integrados ISO</option>
									<option value="torres">Torres de Iluminación</option>
									<option value="banos">Baños Químicos</option>
									<option value="otro">Otro</option>
								</select>
							</div>

							<div>
								<label className="block text-sm font-medium text-dark mb-2">
									Mensaje *
								</label>
								<textarea
									required
									rows={4}
									value={formData.message}
									onChange={(e) =>
										setFormData({ ...formData, message: e.target.value })
									}
									className="w-full px-4 py-3 rounded-lg border border-soft-green focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-background resize-none"
									placeholder="Cuéntanos sobre tu proyecto..."
								/>
							</div>

							<button
								type="submit"
								className="w-full bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2 group"
							>
								Enviar Mensaje
								<Send
									size={18}
									className="group-hover:translate-x-1 transition-transform"
								/>
							</button>
						</form>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					 className="space-y-8"
					>
						<div className="p-6 bg-background rounded-2xl border border-soft-green">
							<h3 className="font-heading font-bold text-lg text-dark mb-6">
								Información de Contacto
							</h3>

							<div className="space-y-4">
								<div className="flex items-start gap-4">
									<div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
										<Phone className="w-5 h-5 text-primary" />
									</div>
									<div>
										<h4 className="font-medium text-dark">Teléfono</h4>
										<p className="text-gray text-sm">+51 947 609 227</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
										<Mail className="w-5 h-5 text-primary" />
									</div>
									<div>
										<h4 className="font-medium text-dark">Email</h4>
										<p className="text-gray text-sm">info@cconex.com</p>
										<p className="text-gray text-sm">ventas@cconex.com</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
										<MapPin className="w-5 h-5 text-primary" />
									</div>
									<div>
										<h4 className="font-medium text-dark">Oficinas</h4>
										<p className="text-gray text-sm">
											Av. Principal 123, San Isidro, Lima
										</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
										<Clock className="w-5 h-5 text-primary" />
									</div>
									<div>
										<h4 className="font-medium text-dark">Horario</h4>
										<p className="text-gray text-sm">
											Lunes a Viernes: 8:00 AM - 6:00 PM
										</p>
										<p className="text-gray text-sm">
											Sábados: 8:00 AM - 1:00 PM
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="relative h-64 rounded-2xl overflow-hidden border border-soft-green">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.1234567890123!2d-77.03123456789012!3d-12.098765432109876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA1JzU1LjYiUyA3N8KwMDEnNDIuNiJX!5e0!3m2!1ses!2spe!4v1234567890123!5m2!1ses!2spe"
								width="100%"
								height="100%"
								style={{ border: 0 }}
								allowFullScreen
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								title="Ubicación CCONEX"
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
