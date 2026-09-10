"use client";

import ArrowForward from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import Link from "next/link";
import { proyectos } from "@/DB/proyectos";
import { useI18n } from "@/lib/i18n/context";

export default function Proyectos() {
    const { t } = useI18n();

    return (
        <div className="relative isolate overflow-hidden bg-neutral-100 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
            <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-primary-10/70 blur-3xl" />
            <div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-32 h-80 w-80 rounded-full bg-tertiary-95/80 blur-3xl" />

            <div className="relative mx-auto w-full max-w-6xl">
                <header className="mb-12 grid gap-7 animate-materialize sm:mb-16 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:items-end md:gap-12">
                    <div>
                        <div className="mb-5 flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-secondary-40">
                            <span className="flex h-8 min-w-8 items-center justify-center rounded-full bg-primary text-[0.65rem] text-white shadow-sm">01</span>
                            <span className="h-px w-12 bg-neutral-90" />
                            <span>TRABAJOS</span>
                        </div>
                        <h1 id="proyectos-title" className="max-w-xl text-[clamp(2.75rem,6vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.055em] text-primary [font-optical-sizing:auto]">
                            {t("proyectos.titulo")}
                            <span className="block text-secondary-60">/ archivo.</span>
                        </h1>
                    </div>
                    <p className="max-w-2xl text-lg leading-relaxed text-secondary-30 sm:text-xl">
                        {t("proyectos.subtitulo")}
                    </p>
                </header>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {proyectos.map((proyecto, index) => {
                        const tieneImagen = proyecto.imageUrl !== "/";
                        const esProyectoEnDesarrollo = "enDesarrollo" in proyecto && proyecto.enDesarrollo === true;
                        const numero = String(index + 1).padStart(2, "0");

                        return (
                            <article
                                key={proyecto.id}
                                aria-labelledby={`proyecto-${proyecto.id}-title`}
                                className="apple-lift group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/80 bg-white shadow-[0_18px_45px_-32px_rgba(31,41,55,0.6)] transition-[box-shadow,transform] duration-500 hover:-translate-y-1 hover:shadow-[0_24px_55px_-28px_rgba(31,41,55,0.45)] animate-materialize motion-reduce:transition-none"
                                style={{ animationDelay: `${index * 70}ms` }}
                            >
                                <div className={`relative aspect-[16/10] overflow-hidden ${tieneImagen ? "bg-neutral-95" : "bg-primary"}`}>
                                    {tieneImagen ? (
                                        <>
                                            <Image
                                                className="object-cover object-top transition-transform duration-700 motion-safe:group-hover:scale-[1.045] motion-reduce:transition-none"
                                                src={proyecto.imageUrl}
                                                alt={proyecto.nombre}
                                                fill
                                                priority={index === 0}
                                                sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) 50vw, 33vw"
                                            />
                                            <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-primary/70 via-primary/5 to-transparent opacity-80" />
                                        </>
                                    ) : (
                                        <>
                                            <div aria-hidden="true" className="absolute -right-12 -top-16 h-64 w-64 rounded-full border border-white/10" />
                                            <div aria-hidden="true" className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full border border-tertiary-90/20" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="text-[7rem] font-semibold leading-none tracking-[-0.08em] text-white/10 sm:text-[9rem]">{numero}</span>
                                            </div>
                                        </>
                                    )}
                                    <span className={`absolute left-4 top-4 flex h-9 min-w-9 items-center justify-center rounded-full px-2 text-xs font-bold shadow-sm backdrop-blur-md sm:left-5 sm:top-5 ${tieneImagen ? "bg-white/90 text-primary" : "border border-white/20 bg-white/10 text-white"}`}>
                                        {numero}
                                    </span>
                                    {tieneImagen && esProyectoEnDesarrollo && (
                                        <span className="absolute right-4 top-4 rounded-full border border-white/80 bg-white/90 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-primary shadow-sm backdrop-blur-md sm:right-5 sm:top-5">
                                            {t("proyectos.enDesarrollo")}
                                        </span>
                                    )}
                                    {!tieneImagen && (
                                        <span className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/80 backdrop-blur-md sm:bottom-5 sm:left-5">
                                            {t("proyectos.enDesarrollo")}
                                        </span>
                                    )}
                                </div>

                                <div className="flex flex-1 flex-col p-5 sm:p-7">
                                    <div className="mb-6 flex flex-wrap gap-2">
                                        {proyecto.tecnologias.map((tecnologia) => (
                                            <span key={tecnologia} className="rounded-full bg-neutral-95 px-3 py-1.5 text-[0.68rem] font-bold tracking-wide text-secondary-40">
                                                {tecnologia}
                                            </span>
                                        ))}
                                    </div>

                                    <h2 id={`proyecto-${proyecto.id}-title`} className="mb-3 max-w-xl text-2xl font-semibold leading-tight tracking-[-0.03em] text-primary sm:text-3xl">
                                        {proyecto.nombre}
                                    </h2>
                                    <p className="max-w-2xl flex-1 text-sm leading-relaxed text-secondary-30 sm:text-base">
                                        {t(proyecto.translationKey)}
                                    </p>

                                    {proyecto.url && (
                                        <Link
                                            className="group/link mt-7 inline-flex min-h-11 w-fit items-center gap-2 rounded-full border border-primary/15 px-4 text-sm font-bold text-primary transition-[background-color,border-color,transform] duration-300 hover:border-primary hover:bg-primary hover:text-white active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none"
                                            href={proyecto.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {t("proyectos.verProyecto")}
                                            <ArrowForward aria-hidden="true" className="transition-transform duration-300 group-hover/link:translate-x-1 motion-reduce:transition-none" fontSize="small" />
                                        </Link>
                                    )}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
