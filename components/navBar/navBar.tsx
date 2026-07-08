"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useI18n } from "@/lib/i18n/context";

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const { locale, setLocale, t } = useI18n();

    const items = [
        { name: t("nav.sobreMi"), href: "/" },
        { name: t("nav.proyectos"), href: "/proyectos" },
        { name: t("nav.tecnologias"), href: "/tecnologias" },
        { name: t("nav.hobbies"), href: "/hobbies" },
        { name: t("nav.contacto"), href: "/contacto" },
    ];

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
                    {items.map((item) => (
                        <li
                            key={item.name}
                            className={`
                                py-2 mx-4 lg:mx-6 cursor-pointer transition-all duration-200 text-center text-primary
                                ${pathname === item.href
                                    ? "border-b-2 border-primary font-bold"
                                    : "border-b-2 border-transparent hover:border-primary hover:font-bold active:border-primary active:font-bold"
                                }
                            `}
                        >
                            <Link href={item.href}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop actions */}
                <div className="hidden md:flex items-center gap-3">
                    <button
                        onClick={toggleLocale}
                        className="border px-3 py-2 text-sm font-medium hover:bg-primary hover:text-white active:bg-primary-70 active:text-white transition-all duration-300"
                    >
                        {locale === "es" ? "EN" : "ES"}
                    </button>
                    <button className="border px-6 py-2 hover:bg-primary hover:text-white active:bg-primary-70 active:text-white transition-all duration-300">
                        {t("nav.resume")}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden absolute top-full left-0 w-full max-h-[80vh] bg-white border-b border-gray-200 shadow-lg flex flex-col items-start gap-1 py-2 px-8 z-50 overflow-y-auto">
                    {items.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className={`w-full py-3 border-b border-gray-200 text-left ${
                                pathname === item.href
                                    ? "font-bold"
                                    : ""
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}

                    <div className="flex w-full gap-2 mt-2">
                        <button
                            onClick={toggleLocale}
                            className="border px-4 py-3 flex-1 text-left active:bg-primary active:text-white transition-all duration-100"
                        >
                            {locale === "es" ? "English" : "Español"}
                        </button>
                        <button className="border px-4 py-3 flex-1 text-left active:bg-primary active:text-white transition-all duration-100">
                            {t("nav.resume")}
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
