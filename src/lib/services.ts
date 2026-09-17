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

import heroSanitarios from "@/assets/servicios/sanitarios/portada.jpeg";
import heroSanitarios2 from "@/assets/servicios/sanitarios/sanitario1.jpeg";
import heroSanitarios3 from "@/assets/servicios/sanitarios/sanitario2.jpg";
import heroSanitarios4 from "@/assets/servicios/sanitarios/lavamano1.jpeg";
import heroSanitarios5 from "@/assets/servicios/sanitarios/lavamano2.jpg";
import heroSanitarios6 from "@/assets/servicios/sanitarios/lavamano3.jpeg";
import heroSanitarios7 from "@/assets/servicios/sanitarios/ducha1.jpg";
import heroSanitarios8 from "@/assets/servicios/sanitarios/ducha2.jpg";
import heroTransporte from "@/assets/servicios/transporte/portada.jpeg";
import heroTransporte2 from "@/assets/servicios/transporte/transporte1.jpeg";
import heroTransporte3 from "@/assets/servicios/transporte/transporte2.jpeg";
import heroTransporte4 from "@/assets/servicios/transporte/transporte3.jpeg";
import heroTransporte5 from "@/assets/servicios/transporte/transporte42.png";
import heroTransporte6 from "@/assets/servicios/transporte/transporte5.png";
import heroResiduos from "@/assets/servicios/residuos/hero.png";
import heroResiduos2 from "@/assets/servicios/residuos/residuos1.jpeg";
import heroResiduos3 from "@/assets/servicios/residuos/residuos2.jpeg";
import heroValorizacion from "@/assets/servicios/valorizacion/hero.png";
import heroValorizacion2 from "@/assets/servicios/valorizacion/valorizacion1.jpeg";
import heroEquipos from "@/assets/servicios/equipos/hero.png";
import heroEquipos2 from "@/assets/servicios/equipos/equipo1.png";
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
			[heroSanitarios2, heroSanitarios3], // Sanitario 1 y 2
			[heroSanitarios4, heroSanitarios5, heroSanitarios6], // Lavamanos 1, 2 y 3
			[heroSanitarios7, heroSanitarios8], // Ducha 1 y 2
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
	equipos: { key: "equipos", icon: Sparkles, slug: "equipos", heroImages: [heroEquipos, heroEquipos2] },
	ambiental: { key: "ambiental", icon: Leaf, slug: "gestion-ambiental", heroImages: [heroAmbiental, heroAmbiental2, heroAmbiental3, heroAmbiental4] },
	seguridad: { key: "seguridad", icon: Shield, slug: "seguridad-y-salud-ocupacional", heroImages: [heroSeguridad, heroSeguridad2, heroSeguridad3, heroSeguridad4] },
	ingenieria: { key: "ingenieria", icon: Building2, slug: "ingenieria-y-arquitectura", heroImages: [heroIngenieria, heroIngenieria2, heroIngenieria3, heroIngenieria4] },
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
