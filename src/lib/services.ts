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

import heroSanitarios from "@/assets/servicios/hero-sanitarios.png";
import heroTransporte from "@/assets/servicios/hero-transporte.png";
import heroResiduos from "@/assets/servicios/hero-residuos.png";
import heroValorizacion from "@/assets/servicios/hero-valorizacion.png";
import heroEquipos from "@/assets/servicios/hero-equipos.png";
import heroAmbiental from "@/assets/servicios/hero-ambiental.png";
import heroSeguridad from "@/assets/servicios/hero-seguridad.png";
import heroIngenieria from "@/assets/servicios/hero-ingenieria.png";

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
	heroImage: StaticImageData;
}

export const servicesData: Record<ServiceKey, ServiceMeta> = {
	sanitarios: { key: "sanitarios", icon: Droplets, slug: "sanitarios-portatiles", heroImage: heroSanitarios },
	transporte: { key: "transporte", icon: Truck, slug: "transporte-y-logistica-de-residuos", heroImage: heroTransporte },
	residuos: { key: "residuos", icon: Trash2, slug: "gestion-de-residuos", heroImage: heroResiduos },
	valorizacion: { key: "valorizacion", icon: Recycle, slug: "valorizacion-de-residuos", heroImage: heroValorizacion },
	equipos: { key: "equipos", icon: Sparkles, slug: "equipos", heroImage: heroEquipos },
	ambiental: { key: "ambiental", icon: Leaf, slug: "gestion-ambiental", heroImage: heroAmbiental },
	seguridad: { key: "seguridad", icon: Shield, slug: "seguridad-y-salud-ocupacional", heroImage: heroSeguridad },
	ingenieria: { key: "ingenieria", icon: Building2, slug: "ingenieria-y-arquitectura", heroImage: heroIngenieria },
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
