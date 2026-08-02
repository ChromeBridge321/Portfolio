"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n/context";

const sectionIds = ["inicio", "proyectos", "tecnologias", "hobbies", "contacto"] as const;

type SectionId = (typeof sectionIds)[number];

export default function Navbar() {
    const pathname = usePathname();
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

    const toggleLocale = () => {
        setLocale(locale === "es" ? "en" : "es");
    };

    return (
        <nav className="w-full border-b border-gray-200 bg-white py-2 z-50 sticky top-0 flex flex-col md:flex-row justify-center items-center px-8 xl:px-0 mb-8">
            
            {/* Top bar */}
            <div className="flex justify-between items-center w-full md:w-268">
                
                <h1 className="text-primary font-bold text-3xl">
                    DG
                </h1>

                {/* Mobile button */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>

                {/* Desktop menu */}
                <ul className="hidden md:flex justify-center items-center">
                    {items.map((item) => {
                        const isActive = currentSection === item.id;

                        return (
                        <li
                            key={item.name}
                            className={`
                                py-2 mx-4 lg:mx-6 cursor-pointer transition-all duration-200 text-center text-primary
                                ${isActive
                                    ? "border-b-2 border-primary font-bold"
                                    : "border-b-2 border-transparent hover:border-primary hover:font-bold active:border-primary active:font-bold"
                                }
                            `}
                        >
                            <Link href={item.href} aria-current={isActive ? "location" : undefined}>
                                {item.name}
                            </Link>
                        </li>
                        );
                    })}
                </ul>

                {/* Desktop actions */}
                <div className="hidden md:flex items-center gap-3">
                    <button
                        onClick={toggleLocale}
                        className="border px-3 py-2 text-sm font-medium hover:bg-primary hover:text-white active:bg-primary-70 active:text-white transition-all duration-300"
                    >
                        {locale === "es" ? "EN" : "ES"}
                    </button>
                    <a
                        href={locale === "es"
                            ? "https://github.com/ChromeBridge321/Portfolio/releases/download/CV/DavidCV.pdf"
                            : "https://github.com/ChromeBridge321/Portfolio/releases/download/Resume/DavidResume.pdf"
                        }
                        download
                        className="border px-6 py-2 hover:bg-primary hover:text-white active:bg-primary-70 active:text-white transition-all duration-300 text-center"
                    >
                        {t("nav.resume")}
                    </a>
                </div>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden absolute top-full left-0 w-full max-h-[80vh] bg-white border-b border-gray-200 shadow-lg flex flex-col items-start gap-1 py-2 px-8 z-50 overflow-y-auto">
                    {items.map((item) => {
                        const isActive = currentSection === item.id;

                        return (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className={`w-full py-3 border-b border-gray-200 text-left ${
                                isActive ? "font-bold text-primary" : "text-secondary-40"
                            }`}
                            aria-current={isActive ? "location" : undefined}
                        >
                            {item.name}
                        </Link>
                        );
                    })}

                    <div className="flex w-full gap-2 mt-2">
                        <button
                            onClick={toggleLocale}
                            className="border px-4 py-3 flex-1 text-left active:bg-primary active:text-white transition-all duration-100"
                        >
                            {locale === "es" ? "English" : "Español"}
                        </button>
                        <a
                            href={locale === "es"
                                ? "https://github.com/ChromeBridge321/Portfolio/releases/download/CV/DavidCV.pdf"
                                : "https://github.com/ChromeBridge321/Portfolio/releases/download/Resume/DavidResume.pdf"
                            }
                            download
                            className="border px-4 py-3 flex-1 text-left active:bg-primary active:text-white transition-all duration-100"
                        >
                            {t("nav.resume")}
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
