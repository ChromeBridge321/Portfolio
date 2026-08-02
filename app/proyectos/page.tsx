"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowForward } from "@mui/icons-material"
import { proyectos } from "@/DB/proyectos"
import { useI18n } from "@/lib/i18n/context"

export default function Proyectos() {
    const { t } = useI18n()

    return (
        <div className="relative min-h-screen overflow-hidden py-16 sm:py-20">
            <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-8 xl:px-0">
                <header className="mx-auto mb-14 max-w-2xl text-center animate-fade-in-up motion-reduce:animate-none sm:mb-16">
                    <div aria-hidden="true" className="mb-5 flex items-center justify-center gap-3 text-xs font-bold tracking-[0.22em] text-secondary-40">
                        <span className="h-px w-8 bg-neutral-90" />
                        01 — {String(proyectos.length).padStart(2, "0")}
                        <span className="h-px w-8 bg-neutral-90" />
                    </div>
                    <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary md:text-5xl">
                        {t("proyectos.titulo")}
                    </h1>
                    <p className="text-lg leading-relaxed text-secondary-30">
                        {t("proyectos.subtitulo")}
                    </p>
                </header>

                <div className="grid grid-cols-1 gap-6 animate-fade-in-up motion-reduce:animate-none md:grid-cols-2 lg:grid-cols-12" style={{ animationDelay: "0.1s" }}>
                    {proyectos.map((proyecto, index) => {
                        const esAmplio = index === 0 || index === 3 || index === 4
                        const tieneImagen = proyecto.imageUrl !== "/"
                        const numero = String(index + 1).padStart(2, "0")

                        return (
                            <article
                                key={proyecto.id}
                                className={`group flex h-full flex-col overflow-hidden rounded-xl border border-neutral-90 bg-white transition-all duration-300 hover:-translate-y-1 e hover:shadow-lg hover:shadow-neutral-90/60 ${esAmplio ? "lg:col-span-7" : "lg:col-span-5"}`}
                            >
                                <div className="relative aspect-[16/9] overflow-hidden bg-neutral-95">
                                    {tieneImagen ? (
                                        <>
                                            <Image
                                                className="object-cover object-top transition-transform duration-700 motion-safe:group-hover:scale-[1.03] motion-reduce:transition-none"
                                                src={proyecto.imageUrl}
                                                alt={proyecto.nombre}
                                                fill
                                                sizes="(max-width: 767px) calc(100vw - 3rem), (max-width: 1023px) 50vw, 58vw"
                                            />
                                            <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-primary/20 via-transparent to-transparent opacity-60" />
                                            <span className="absolute left-4 top-4 flex h-9 min-w-9 items-center justify-center rounded-full bg-white/90 px-2 text-xs font-bold text-primary shadow-sm backdrop-blur-sm sm:left-5 sm:top-5">
                                                {numero}
                                            </span>
                                        </>
                                    ) : (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden text-center">
                                            <span aria-hidden="true" className="absolute -bottom-20 -right-16 h-56 w-56 rounded-full border border-neutral-90" />
                                            <span aria-hidden="true" className="absolute -bottom-8 -right-4 h-32 w-32 rounded-full border border-neutral-90" />
                                            <span className="relative text-7xl font-bold tracking-tighter text-neutral-90 sm:text-8xl">
                                                {numero}
                                            </span>
                                            <span className="relative mt-2 text-xs font-bold uppercase tracking-[0.2em] text-secondary-40">
                                                {t("proyectos.enDesarrollo")}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <div className="flex flex-1 flex-col p-6 sm:p-7">
                                    <div className="mb-5 flex flex-wrap gap-2">
                                        {proyecto.tecnologias.map((tecnologia) => (
                                            <span
                                                key={tecnologia}
                                                className="rounded-full bg-neutral-95 px-3 py-1 text-xs font-semibold text-secondary-40"
                                            >
                                                {tecnologia}
                                            </span>
                                        ))}
                                    </div>

                                    <h2 className="mb-3 text-2xl font-bold tracking-tight text-primary sm:text-3xl">
                                        {proyecto.nombre}
                                    </h2>
                                    <p className="max-w-2xl flex-1 text-base leading-relaxed text-secondary-30">
                                        {t(proyecto.translationKey)}
                                    </p>

                                    {proyecto.url && (
                                        <Link
                                            className="group/link mt-7 inline-flex w-fit items-center gap-2 border-b border-primary pb-1 text-sm font-bold text-primary transition-colors hover:text-primary-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                                            href={proyecto.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {t("proyectos.verProyecto")}
                                            <ArrowForward
                                                aria-hidden="true"
                                                className="transition-transform duration-300 group-hover/link:translate-x-1 motion-reduce:transition-none"
                                                fontSize="small"
                                            />
                                        </Link>
                                    )}
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
