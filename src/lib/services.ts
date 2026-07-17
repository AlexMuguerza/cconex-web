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
}

export const servicesData: Record<ServiceKey, ServiceMeta> = {
	sanitarios: { key: "sanitarios", icon: Droplets, slug: "sanitarios-portatiles" },
	transporte: { key: "transporte", icon: Truck, slug: "transporte-y-logistica-de-residuos" },
	residuos: { key: "residuos", icon: Trash2, slug: "gestion-de-residuos" },
	valorizacion: { key: "valorizacion", icon: Recycle, slug: "valorizacion-de-residuos" },
	equipos: { key: "equipos", icon: Sparkles, slug: "equipos" },
	ambiental: { key: "ambiental", icon: Leaf, slug: "gestion-ambiental" },
	seguridad: { key: "seguridad", icon: Shield, slug: "seguridad-y-salud-ocupacional" },
	ingenieria: { key: "ingenieria", icon: Building2, slug: "ingenieria-y-arquitectura" },
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
