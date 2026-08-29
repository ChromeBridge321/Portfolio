"use client";

import CloseRounded from "@mui/icons-material/CloseRounded";
import DownloadRounded from "@mui/icons-material/DownloadRounded";
import LanguageRounded from "@mui/icons-material/LanguageRounded";
import MenuRounded from "@mui/icons-material/MenuRounded";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n/context";

const sectionIds = ["inicio", "proyectos", "tecnologias", "hobbies", "contacto"] as const;

type SectionId = (typeof sectionIds)[number];

export default function Navbar() {
    const pathname = usePathname() ?? "/";
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<SectionId>("inicio");
    const { locale, setLocale, t } = useI18n();

    const items = [
        { id: "inicio" as const, name: t("nav.sobreMi"), href: "/#inicio" },
        { id: "proyectos" as const, name: t("nav.proyectos"), href: "/#proyectos" },
        { id: "tecnologias" as const, name: t("nav.tecnologias"), href: "/#tecnologias" },
        { id: "hobbies" as const, name: t("nav.hobbies"), href: "/#hobbies" },
        { id: "contacto" as const, name: t("nav.contacto"), href: "/#contacto" },
    ];
    const routeSection = pathname.slice(1) as SectionId;
    const currentSection = pathname === "/" || !sectionIds.includes(routeSection)
        ? activeSection
        : routeSection;
    const resumeUrl = locale === "es"
        ? "https://github.com/ChromeBridge321/Portfolio/releases/download/CV/DavidCV.pdf"
        : "https://github.com/ChromeBridge321/Portfolio/releases/download/Resume/DavidResume.pdf";

    useEffect(() => {
        if (pathname !== "/") {
            return;
        }

        const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter((section): section is HTMLElement => section !== null);

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top))[0];

                if (visibleSection) {
                    setActiveSection(visibleSection.target.id as SectionId);
                }
            },
            { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [pathname]);

    useEffect(() => {
        if (!open) {
            return;
        }

        const closeWithEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setOpen(false);
            }
        };

        document.addEventListener("keydown", closeWithEscape);

        return () => document.removeEventListener("keydown", closeWithEscape);
    }, [open]);

    const toggleLocale = () => {
        setLocale(locale === "es" ? "en" : "es");
    };

    const toggleMenu = () => {
        setOpen((isOpen) => !isOpen);
    };

    const menuButtonLabel = open
        ? locale === "es" ? "Cerrar menú" : "Close menu"
        : locale === "es" ? "Abrir menú" : "Open menu";

    const localeButtonLabel = locale === "es" ? "Cambiar a inglés" : "Switch to Spanish";

    return (
        <nav
            aria-label={locale === "es" ? "Navegación principal" : "Main navigation"}
            className="sticky top-0 z-50 mb-3 w-full px-4 pt-3 sm:px-6 lg:px-8"
        >
            <div className="relative mx-auto w-full max-w-6xl">
                <div className="apple-material flex min-h-16 items-center justify-between gap-4 rounded-full border border-white/80 bg-white/70 px-3 shadow-[0_16px_45px_-28px_rgba(31,41,55,0.55)] backdrop-blur-xl sm:px-4">
                    <Link
                        href="/#inicio"
                        aria-label="David García"
                        className="group flex min-h-12 shrink-0 items-center gap-2 rounded-full px-1.5 pr-3 text-primary transition-colors hover:bg-white/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none"
                    >
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-xs font-bold tracking-[0.16em] text-white shadow-sm transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none">
                            DG
                        </span>
                        <span className="hidden text-sm font-bold tracking-[-0.02em] sm:inline">David García</span>
                    </Link>

                    <ul className="hidden items-center gap-1 rounded-full bg-primary/5 p-1 md:flex">
                        {items.map((item) => {
                            const isActive = currentSection === item.id;

                            return (
                                <li key={item.id}>
                                    <Link
                                        href={item.href}
                                        aria-current={isActive ? "location" : undefined}
                                        className={`inline-flex min-h-10 items-center rounded-full px-3.5 text-sm font-semibold transition-[background-color,box-shadow,color,transform] duration-300 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none ${isActive
                                            ? "bg-primary text-white shadow-md shadow-primary/15"
                                            : "text-secondary-40 hover:bg-white/80 hover:text-primary"
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="hidden items-center gap-2 md:flex">
                        <button
                            type="button"
                            onClick={toggleLocale}
                            aria-label={localeButtonLabel}
                            className="inline-flex min-h-11 min-w-11 items-center justify-center gap-1.5 rounded-full border border-primary/10 bg-white/60 px-3 text-xs font-bold tracking-wide text-secondary-40 transition-[background-color,color,transform] duration-300 hover:bg-primary hover:text-white active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none"
                        >
                            <LanguageRounded aria-hidden="true" sx={{ fontSize: 17 }} />
                            {locale === "es" ? "EN" : "ES"}
                        </button>
                        <a
                            href={resumeUrl}
                            download
                            aria-label={t("nav.resume")}
                            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-4 text-sm font-bold text-white shadow-sm transition-[background-color,box-shadow,transform] duration-300 hover:bg-primary-80 hover:shadow-md active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none"
                        >
                            <DownloadRounded aria-hidden="true" sx={{ fontSize: 17 }} />
                            {t("nav.resume")}
                        </a>
                    </div>

                    <button
                        type="button"
                        onClick={toggleMenu}
                        aria-label={menuButtonLabel}
                        aria-expanded={open}
                        aria-controls="mobile-navigation"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-sm transition-[background-color,transform] duration-300 hover:bg-primary-80 active:scale-[0.95] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:hidden motion-reduce:transition-none"
                    >
                        {open ? <CloseRounded aria-hidden="true" /> : <MenuRounded aria-hidden="true" />}
                    </button>
                </div>

                {open && (
                    <div
                        id="mobile-navigation"
                        className="apple-material absolute inset-x-0 top-[calc(100%+0.5rem)] overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/80 p-2 shadow-[0_20px_55px_-25px_rgba(31,41,55,0.5)] backdrop-blur-xl animate-materialize"
                    >
                        <ul className="grid gap-1">
                            {items.map((item) => {
                                const isActive = currentSection === item.id;

                                return (
                                    <li key={item.id}>
                                        <Link
                                            href={item.href}
                                            onClick={() => setOpen(false)}
                                            aria-current={isActive ? "location" : undefined}
                                            className={`flex min-h-12 items-center rounded-xl px-4 text-sm font-semibold transition-[background-color,color,transform] duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary motion-reduce:transition-none ${isActive
                                                ? "bg-primary text-white shadow-sm"
                                                : "text-secondary-30 hover:bg-white hover:text-primary"
                                                }`}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="mt-2 grid grid-cols-[auto_1fr] gap-2 border-t border-neutral-90/80 pt-2">
                            <button
                                type="button"
                                onClick={toggleLocale}
                                aria-label={localeButtonLabel}
                                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-primary/10 bg-white px-4 text-sm font-bold text-secondary-40 transition-[background-color,color,transform] duration-200 hover:bg-primary hover:text-white active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary motion-reduce:transition-none"
                            >
                                <LanguageRounded aria-hidden="true" sx={{ fontSize: 18 }} />
                                {locale === "es" ? "EN" : "ES"}
                            </button>
                            <a
                                href={resumeUrl}
                                download
                                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-bold text-white transition-[background-color,transform] duration-200 hover:bg-primary-80 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary motion-reduce:transition-none"
                            >
                                <DownloadRounded aria-hidden="true" sx={{ fontSize: 18 }} />
                                {t("nav.resume")}
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
