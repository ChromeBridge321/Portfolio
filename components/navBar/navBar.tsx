"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const items = [
        { name: "Sobre Mi", href: "/" },
        { name: "Proyectos", href: "/proyectos" },
        { name: "Tecnologias", href: "/tecnologias" },
        { name: "Hobbies", href: "/hobbies" },
        { name: "Contacto", href: "/contacto" },
    ];

    return (
        <nav className="w-full border-b border-gray-200 bg-white px-6 md:px-12 lg:px-14 xl:px-24 py-2 sticky z-50 top-0">
            
            {/* Top bar */}
            <div className="flex justify-between items-center">
                
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

                {/* Resume desktop */}
                <div className="hidden md:block">
                    <button className="border px-6 py-2 hover:bg-primary hover:text-white active:bg-primary-70 active:text-white transition-all duration-300">
                        Resume
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden mt-4 flex flex-col items-start gap-3">
                    {items.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className={`w-full py-2 border-b ${
                                pathname === item.href
                                    ? "font-bold"
                                    : ""
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}

                    <button className="mt-2 border px-4 py-2 w-full active:bg-primary active:text-white transition-all duration-100">
                        Resume
                    </button>
                </div>
            )}
        </nav>
    );
}