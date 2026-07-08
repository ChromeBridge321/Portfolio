"use client"
import { useState, useEffect } from "react"
import { PhotoCamera, SportsEsports, Coffee, ChevronLeft, ChevronRight, Movie } from "@mui/icons-material"
import HeadsetIcon from '@mui/icons-material/Headset';
import Image from "next/image"
import img1 from "@/assets/hobbies/img1.avif"
import img2 from "@/assets/hobbies/img2.avif"
import img4 from "@/assets/hobbies/img4.avif"
import img6 from "@/assets/hobbies/img6.avif"
import img7 from "@/assets/hobbies/img7.avif"
import img8 from "@/assets/hobbies/img8.avif"
import img9 from "@/assets/hobbies/img9.avif"
import gaming from "@/assets/hobbies/gaming.avif"
import musica from "@/assets/hobbies/musica.avif"
import { useI18n } from "@/lib/i18n/context"

const carouselImages = [
    { src: img1, alt: "Fotografía 1" },
    { src: img2, alt: "Fotografía 2" },
    { src: img4, alt: "Fotografía 3" },
    { src: img6, alt: "Fotografía 4" },
    { src: img7, alt: "Fotografía 5" },
    { src: img8, alt: "Fotografía 6" },
    { src: img9, alt: "Fotografía 7" },
]

function PhotoCarousel() {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % carouselImages.length)
        }, 4000)
        return () => clearInterval(timer)
    }, [])

    const prev = () => setCurrent((c) => (c - 1 + carouselImages.length) % carouselImages.length)
    const next = () => setCurrent((c) => (c + 1) % carouselImages.length)

    return (
        <div className="relative w-full h-100 overflow-hidden group">
            {carouselImages.map((img, i) => (
                <div
                    key={i}
                    className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
                >
                    <Image
                        className="w-full h-full object-cover"
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 66vw"
                    />
                </div>
            ))}
            <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
            >
                <ChevronLeft />
            </button>
            <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
            >
                <ChevronRight />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {carouselImages.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${i === current ? "bg-white" : "bg-white/40"}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default function Hobbies() {
    const { t } = useI18n();

    return (
        <div className="min-h-screen px-6 py-16 max-w-6xl mx-auto overflow-hidden">
            <header className="mb-16 text-center animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
                    {t("hobbies.titulo")}
                </h1>
                <p className="text-lg text-secondary-30 max-w-2xl mx-auto">
                    {t("hobbies.subtitulo")}
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <div className="md:col-span-8 group">
                    <div className="tonal-card h-full rounded-xl overflow-hidden flex flex-col">
                        <PhotoCarousel />
                        <div className="p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <PhotoCamera className="text-primary" />
                                <span className="text-sm font-medium text-secondary-40 uppercase tracking-widest">{t("hobbies.fotografia")}</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-4">{t("hobbies.capturando")}</h3>
                            <p className="text-base text-secondary-30 mb-4 leading-relaxed">
                                {t("hobbies.fotografiaDesc")}
                            </p>
                            <div className="flex gap-2">
                                <span className="px-3 py-1 bg-neutral-95 text-secondary-30 rounded-full text-xs font-medium">{t("hobbies.composicion")}</span>
                                <span className="px-3 py-1 bg-neutral-95 text-secondary-30 rounded-full text-xs font-medium">{t("hobbies.luzNatural")}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-4 flex flex-col gap-6">
                    <div className="tonal-card flex-1 rounded-xl p-6 flex flex-col justify-center items-center text-center">
                        <div className="flex items-center gap-2 mb-4">
                            <SportsEsports className="text-primary" />
                            <span className="text-sm font-medium text-secondary-40 uppercase tracking-widest">{t("hobbies.gaming")}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-primary mb-2">{t("hobbies.jugarParaGanar")}</h3>
                        <p className="text-base text-secondary-30">
                            {t("hobbies.gamingDesc")}
                        </p>
                    </div>
                    <div className="relative rounded-xl overflow-hidden h-75 group">
                        <Image
                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                            src={gaming}
                            alt="Accesorios Gamer"
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </div>
                </div>

                <div className="md:col-span-8 group">
                    <div className="tonal-card h-full rounded-xl flex flex-col md:flex-row overflow-hidden">
                        <div className="p-6 flex-1 flex flex-col justify-center">
                            <div className="flex items-center gap-2 mb-4">
                                <HeadsetIcon className="text-primary" />
                                <span className="text-sm font-medium text-secondary-40 uppercase tracking-widest">{t("hobbies.ritual")}</span>
                            </div>
                            <h3 className="text-xl font-semibold text-primary mb-2">{t("hobbies.culturaMusica")}</h3>
                            <p className="text-base text-secondary-30">
                                {t("hobbies.musicaDesc")}
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                            <Image
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                src={musica}
                                alt="Audifonos"
                                width={400}
                                height={256}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>

                <div className="md:col-span-4 group ">
                    <div className="tonal-card h-full rounded-xl p-6 text-center flex justify-center items-center flex-col">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Movie className="text-primary" />
                            <span className="text-sm font-medium text-secondary-40 uppercase tracking-widest">{t("hobbies.seriesPeliculas")}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-primary mb-2">{t("hobbies.historiasInspiran")}</h3>
                        <p className="text-base text-secondary-30">
                            {t("hobbies.seriesDesc")}
                        </p>
                    </div>
                </div>
            </div>

            <div className="my-16 flex justify-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="w-16 h-px bg-neutral-90"></div>
            </div>

            <section className="text-center max-w-xl mx-auto italic text-secondary-40 text-lg animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                &quot;{t("hobbies.citaFinal")}&quot;
            </section>
        </div>
    )
}
