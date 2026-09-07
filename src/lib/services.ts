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

import heroSanitarios from "@/assets/servicios/sanitarios/hero.png";
import heroSanitarios2 from "@/assets/servicios/sanitarios/hero-2.png";
import heroSanitarios3 from "@/assets/servicios/sanitarios/hero-3.png";
import heroSanitarios4 from "@/assets/servicios/sanitarios/hero-4.png";
import heroTransporte from "@/assets/servicios/transporte/hero.png";
import heroTransporte2 from "@/assets/servicios/transporte/hero-2.png";
import heroTransporte3 from "@/assets/servicios/transporte/hero-3.png";
import heroTransporte4 from "@/assets/servicios/transporte/hero-4.png";
import heroResiduos from "@/assets/servicios/residuos/hero.png";
import heroResiduos2 from "@/assets/servicios/residuos/hero-2.png";
import heroResiduos3 from "@/assets/servicios/residuos/hero-3.png";
import heroResiduos4 from "@/assets/servicios/residuos/hero-4.png";
import heroValorizacion from "@/assets/servicios/valorizacion/hero.png";
import heroValorizacion2 from "@/assets/servicios/valorizacion/hero-2.png";
import heroValorizacion3 from "@/assets/servicios/valorizacion/hero-3.png";
import heroValorizacion4 from "@/assets/servicios/valorizacion/hero-4.png";
import heroEquipos from "@/assets/servicios/equipos/hero.png";
import heroEquipos2 from "@/assets/servicios/equipos/hero-2.png";
import heroEquipos3 from "@/assets/servicios/equipos/hero-3.png";
import heroEquipos4 from "@/assets/servicios/equipos/hero-4.png";
import heroAmbiental from "@/assets/servicios/ambiental/hero.png";
import heroAmbiental2 from "@/assets/servicios/ambiental/hero-2.jpg";
import heroAmbiental3 from "@/assets/servicios/ambiental/hero-3.jpg";
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
}

export const servicesData: Record<ServiceKey, ServiceMeta> = {
	sanitarios: { key: "sanitarios", icon: Droplets, slug: "sanitarios-portatiles", heroImages: [heroSanitarios, heroSanitarios2, heroSanitarios3, heroSanitarios4] },
	transporte: { key: "transporte", icon: Truck, slug: "transporte-y-logistica-de-residuos", heroImages: [heroTransporte, heroTransporte2, heroTransporte3, heroTransporte4] },
	residuos: { key: "residuos", icon: Trash2, slug: "gestion-de-residuos", heroImages: [heroResiduos, heroResiduos2, heroResiduos3, heroResiduos4] },
	valorizacion: { key: "valorizacion", icon: Recycle, slug: "valorizacion-de-residuos", heroImages: [heroValorizacion, heroValorizacion2, heroValorizacion3, heroValorizacion4] },
	equipos: { key: "equipos", icon: Sparkles, slug: "equipos", heroImages: [heroEquipos, heroEquipos2, heroEquipos3, heroEquipos4] },
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
