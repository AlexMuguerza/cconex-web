"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import es from "./locales/es.json";
import en from "./locales/en.json";

type Locale = "es" | "en";
type Translations = typeof es;

interface I18nContextType {
	locale: Locale;
	setLocale: (locale: Locale) => void;
	t: Translations;
}

const translations: Record<Locale, Translations> = { es, en };

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
	const [locale, setLocaleState] = useState<Locale>("es");

	useEffect(() => {
		const saved = localStorage.getItem("locale") as Locale;
		if (saved && (saved === "es" || saved === "en")) {
			setLocaleState(saved);
		}
	}, []);

	const setLocale = (newLocale: Locale) => {
		setLocaleState(newLocale);
		localStorage.setItem("locale", newLocale);
	};

	return (
		<I18nContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
			{children}
		</I18nContext.Provider>
	);
}

export function useI18n() {
	const context = useContext(I18nContext);
	if (!context) {
		throw new Error("useI18n must be used within an I18nProvider");
	}
	return context;
}
