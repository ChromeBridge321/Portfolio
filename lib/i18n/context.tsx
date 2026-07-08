"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import es from "./es.json";
import en from "./en.json";

type Locale = "es" | "en";

interface I18nContextValue {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: (key: string) => string;
}

const translations: Record<Locale, Record<string, unknown>> = { es, en };

function getNestedValue(obj: Record<string, unknown>, path: string): string {
    const keys = path.split(".");
    let current: unknown = obj;
    for (const key of keys) {
        if (typeof current !== "object" || current === null) return path;
        current = (current as Record<string, unknown>)[key];
    }
    return typeof current === "string" ? current : path;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>("es");

    useEffect(() => {
        const saved = localStorage.getItem("locale") as Locale | null;
        if (saved && (saved === "es" || saved === "en")) {
            setLocaleState(saved);
            document.documentElement.lang = saved;
        }
    }, []);

    const setLocale = (newLocale: Locale) => {
        setLocaleState(newLocale);
        localStorage.setItem("locale", newLocale);
        document.documentElement.lang = newLocale;
    };

    const t = (key: string): string => {
        return getNestedValue(translations[locale] as Record<string, unknown>, key);
    };

    return (
        <I18nContext.Provider value={{ locale, setLocale, t }}>
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
