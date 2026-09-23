import {
	Droplets,
	Truck,
	Trash2,
	Recycle,
	Sparkles,
	Leaf,
	Shield,
	Building2,
} from "lucide-react";
import type { StaticImageData } from "next/image";

import heroSanitarios from "@/assets/servicios/sanitarios/portada.webp";
import heroSanitarios2 from "@/assets/servicios/sanitarios/sanitario1.webp";
import heroSanitarios3 from "@/assets/servicios/sanitarios/sanitario2.webp";
import heroSanitarios4 from "@/assets/servicios/sanitarios/sanitario3.webp";
import heroSanitarios5 from "@/assets/servicios/sanitarios/sanitario4.webp";
import heroSanitarios6 from "@/assets/servicios/sanitarios/lavamano1.webp";
import heroSanitarios7 from "@/assets/servicios/sanitarios/lavamano2.webp";
import heroSanitarios8 from "@/assets/servicios/sanitarios/lavamano3.webp";
import heroSanitarios9 from "@/assets/servicios/sanitarios/ducha1.webp";
import heroSanitarios10 from "@/assets/servicios/sanitarios/ducha2.webp";
import heroTransporte from "@/assets/servicios/transporte/portada.webp";
import heroTransporte2 from "@/assets/servicios/transporte/transporte1.webp";
import heroTransporte3 from "@/assets/servicios/transporte/transporte2.webp";
import heroTransporte4 from "@/assets/servicios/transporte/transporte3.webp";
import heroTransporte5 from "@/assets/servicios/transporte/transporte42.webp";
import heroTransporte6 from "@/assets/servicios/transporte/transporte5.webp";
import heroResiduos from "@/assets/servicios/residuos/hero.png";
import heroResiduos2 from "@/assets/servicios/residuos/residuos1.jpeg";
import heroResiduos3 from "@/assets/servicios/residuos/residuos2.jpeg";
import heroValorizacion from "@/assets/servicios/valorizacion/hero.png";
import heroValorizacion2 from "@/assets/servicios/valorizacion/valorizacion1.jpeg";
import heroEquipos from "@/assets/servicios/equipos/hero.png";
import heroEquipos2 from "@/assets/servicios/equipos/equipo1.png";
import heroEquipos3 from "@/assets/servicios/equipos/equipo2.jpeg";
import heroEquipos4 from "@/assets/servicios/equipos/equipo3.jpeg";
import heroAmbiental from "@/assets/servicios/ambiental/hero.png";
import heroAmbiental2 from "@/assets/servicios/ambiental/hero-2.png";
import heroAmbiental3 from "@/assets/servicios/ambiental/hero-3.png";
import heroAmbiental4 from "@/assets/servicios/ambiental/hero-4.jpg";
import heroSeguridad from "@/assets/servicios/seguridad/hero.png";
import heroSeguridad2 from "@/assets/servicios/seguridad/hero-2.png";
import heroSeguridad3 from "@/assets/servicios/seguridad/hero-3.png";
import heroSeguridad4 from "@/assets/servicios/seguridad/hero-4.png";
import heroIngenieria from "@/assets/servicios/ingenieria/hero.png";
import heroIngenieria2 from "@/assets/servicios/ingenieria/hero-2.png";
import heroIngenieria3 from "@/assets/servicios/ingenieria/hero-3.png";
import heroIngenieria4 from "@/assets/servicios/ingenieria/hero-4.png";
import heroConfiguracion from "@/assets/servicios/ambiental/configurando.jpg";

export type ServiceKey =
	| "sanitarios"
	| "transporte"
	| "residuos"
	| "valorizacion"
	| "equipos"
	| "ambiental"
	| "seguridad"
	| "ingenieria";

export interface ServiceMeta {
	key: ServiceKey;
	icon: React.ComponentType<{ className?: string }>;
	slug: string;
	heroImages: StaticImageData[];
	offeringImages?: StaticImageData[][];
}

export const servicesData: Record<ServiceKey, ServiceMeta> = {
	sanitarios: {
		key: "sanitarios",
		icon: Droplets,
		slug: "sanitarios-portatiles",
		heroImages: [heroSanitarios, heroSanitarios2, heroSanitarios3, heroSanitarios4],
		offeringImages: [
			[heroSanitarios2, heroSanitarios, heroSanitarios4, heroSanitarios5], // Sanitario 1 y 2
			[heroSanitarios6, heroSanitarios7, heroSanitarios8], // Lavamanos 1, 2 y 3
			[heroSanitarios9, heroSanitarios10], // Ducha 1 y 2
		],
	},
	transporte: {
		key: "transporte",
		icon: Truck,
		slug: "transporte-y-logistica-de-residuos",
		heroImages: [heroTransporte, heroTransporte2, heroTransporte3, heroTransporte4],
		offeringImages: [
			[heroTransporte2], // Succión
			[heroTransporte3, heroTransporte4], // Residuos industriales y peligrosos
			[heroTransporte5, heroTransporte6], // Construcción y Demolición
		],
	},
	residuos: {
		key: "residuos",
		icon: Trash2,
		slug: "gestion-de-residuos",
		heroImages: [heroResiduos],
		offeringImages: [
			[heroResiduos2, heroResiduos3], // Manejo Integral de Residuos In-House
		],
	},
	valorizacion: { key: "valorizacion", icon: Recycle, slug: "valorizacion-de-residuos", heroImages: [heroValorizacion, heroValorizacion2] },
	equipos: {
		key: "equipos",
		icon: Sparkles,
		slug: "equipos",
		heroImages: [heroEquipos, heroEquipos2, heroEquipos3, heroEquipos4],
		offeringImages: [
			[heroEquipos2, heroEquipos3, heroEquipos4], // Torres de Iluminación
		],
	},
	ambiental: { key: "ambiental", icon: Leaf, slug: "gestion-ambiental", heroImages: [heroAmbiental, heroConfiguracion, heroConfiguracion, heroConfiguracion] },
	seguridad: { key: "seguridad", icon: Shield, slug: "seguridad-y-salud-ocupacional", heroImages: [heroSeguridad, heroConfiguracion, heroConfiguracion, heroConfiguracion] },
	ingenieria: { key: "ingenieria", icon: Building2, slug: "ingenieria-y-arquitectura", heroImages: [heroIngenieria, heroConfiguracion, heroConfiguracion, heroConfiguracion] },
};

export const serviceKeys: ServiceKey[] = [
	"sanitarios",
	"transporte",
	"residuos",
	"valorizacion",
	"equipos",
	"ambiental",
	"seguridad",
	"ingenieria",
];

export function getServiceByKey(key: string): ServiceMeta | undefined {
	return servicesData[key as ServiceKey];
}

export function getServiceBySlug(slug: string): ServiceMeta | undefined {
	return Object.values(servicesData).find((s) => s.slug === slug);
}
