"use client";

import { useEffect } from "react";
import { I18nProvider } from "@/lib/i18n/context";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return <I18nProvider>{children}</I18nProvider>;
}
