"use client";

import ChevronLeftRounded from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRounded from "@mui/icons-material/ChevronRightRounded";
import HeadsetOutlined from "@mui/icons-material/HeadsetOutlined";
import MovieOutlined from "@mui/icons-material/MovieOutlined";
import PhotoCameraOutlined from "@mui/icons-material/PhotoCameraOutlined";
import SportsEsportsOutlined from "@mui/icons-material/SportsEsportsOutlined";
import Image from "next/image";
import { useEffect, useState } from "react";
import img1 from "@/assets/hobbies/img1.webp";
import img2 from "@/assets/hobbies/img2.webp";
import img4 from "@/assets/hobbies/img4.webp";
import img6 from "@/assets/hobbies/img6.webp";
import img7 from "@/assets/hobbies/img7.webp";
import img8 from "@/assets/hobbies/img8.webp";
import img9 from "@/assets/hobbies/img9.webp";
import gaming from "@/assets/hobbies/gaming.webp";
import musica from "@/assets/hobbies/musica.webp";
import { useI18n } from "@/lib/i18n/context";

const carouselImages = [
    { src: img1, alt: "Fotografía personal 1" },
    { src: img2, alt: "Fotografía personal 2" },
    { src: img4, alt: "Fotografía personal 3" },
    { src: img6, alt: "Fotografía personal 4" },
    { src: img7, alt: "Fotografía personal 5" },
    { src: img8, alt: "Fotografía personal 6" },
    { src: img9, alt: "Fotografía personal 7" },
];

function PhotoCarousel() {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const { locale } = useI18n();

    useEffect(() => {
        if (isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        const timer = window.setInterval(() => {
            setCurrent((previous) => (previous + 1) % carouselImages.length);
        }, 4500);

        return () => window.clearInterval(timer);
    }, [isPaused]);

    const previous = () => setCurrent((currentImage) => (currentImage - 1 + carouselImages.length) % carouselImages.length);
    const next = () => setCurrent((currentImage) => (currentImage + 1) % carouselImages.length);
    const photoWord = locale === "es" ? "fotografía" : "photo";
    const carouselLabel = locale === "es" ? "Galería de fotografía" : "Photography gallery";
    const previousLabel = locale === "es" ? "Fotografía anterior" : "Previous photo";
    const nextLabel = locale === "es" ? "Siguiente fotografía" : "Next photo";

    return (
        <div
            className="group relative h-[22rem] overflow-hidden bg-primary sm:h-[29rem]"
            role="region"
            aria-label={carouselLabel}
            onFocus={() => setIsPaused(true)}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {carouselImages.map((image, index) => (
                <div
                    key={image.alt}
                    className={`absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none ${index === current ? "opacity-100" : "opacity-0"}`}
                    aria-hidden={index !== current}
                >
                    <Image
                        className="h-full w-full object-cover transition-transform duration-[4500ms] motion-safe:scale-[1.02] motion-safe:group-hover:scale-[1.05] motion-reduce:transition-none motion-reduce:transform-none"
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) 66vw, 720px"
                    />
                </div>
            ))}
            <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-primary/80 via-transparent to-primary/5" />

            <div className="absolute inset-x-4 top-4 flex items-start justify-between sm:inset-x-5 sm:top-5">
                <span className="rounded-full border border-white/20 bg-primary/45 px-3 py-1.5 text-[0.65rem] font-bold tracking-[0.18em] text-white backdrop-blur-md">
                    {String(current + 1).padStart(2, "0")} / {String(carouselImages.length).padStart(2, "0")}
                </span>
                <span className="rounded-full border border-white/20 bg-primary/45 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white/80 backdrop-blur-md">
                    {photoWord}
                </span>
            </div>

            <button
                type="button"
                onClick={previous}
                aria-label={previousLabel}
                className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-primary/55 text-white opacity-100 shadow-lg backdrop-blur-md transition-[background-color,opacity,transform] duration-200 hover:bg-primary/80 active:scale-[0.94] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100 motion-reduce:transition-none"
            >
                <ChevronLeftRounded aria-hidden="true" />
            </button>
            <button
                type="button"
                onClick={next}
                aria-label={nextLabel}
                className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-primary/55 text-white opacity-100 shadow-lg backdrop-blur-md transition-[background-color,opacity,transform] duration-200 hover:bg-primary/80 active:scale-[0.94] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100 motion-reduce:transition-none"
            >
                <ChevronRightRounded aria-hidden="true" />
            </button>

            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center rounded-full border border-white/15 bg-primary/45 px-1 backdrop-blur-md sm:bottom-5" role="tablist" aria-label={carouselLabel}>
                {carouselImages.map((image, index) => (
                    <button
                        key={image.alt}
                        type="button"
                        role="tab"
                        aria-selected={index === current}
                        aria-label={`${photoWord} ${index + 1}`}
                        onClick={() => setCurrent(index)}
                        className="flex h-9 w-8 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white"
                    >
                        <span aria-hidden="true" className={`h-1.5 rounded-full transition-[background-color,width] duration-300 ${index === current ? "w-5 bg-white" : "w-1.5 bg-white/45"}`} />
                    </button>
                ))}
            </div>
        </div>
    );
}

export default function Hobbies() {
    const { t } = useI18n();

    return (
        <div className="relative isolate overflow-hidden bg-neutral-100 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
            <div aria-hidden="true" className="pointer-events-none absolute -right-28 top-24 h-72 w-72 rounded-full bg-tertiary-95/80 blur-3xl" />
            <div aria-hidden="true" className="pointer-events-none absolute -left-24 bottom-24 h-80 w-80 rounded-full bg-primary-10/70 blur-3xl" />

            <div className="relative mx-auto w-full max-w-6xl">
                <header className="mb-12 grid gap-7 animate-materialize sm:mb-16 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:items-end md:gap-12">
                    <div>
                        <div className="mb-5 flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-secondary-40">
                            <span className="flex h-8 min-w-8 items-center justify-center rounded-full bg-primary text-[0.65rem] text-white shadow-sm">04</span>
                            <span className="h-px w-12 bg-neutral-90" />
                            <span>RITUALES</span>
                        </div>
                        <h1 id="hobbies-title" className="max-w-xl text-[clamp(2.75rem,6vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.055em] text-primary [font-optical-sizing:auto]">
                            {t("hobbies.titulo")}
                        </h1>
                    </div>
                    <p className="max-w-2xl text-lg leading-relaxed text-secondary-30 sm:text-xl">
                        {t("hobbies.subtitulo")}
                    </p>
                </header>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
                    <article className="group overflow-hidden rounded-[1.75rem] border border-white/80 bg-white shadow-[0_22px_55px_-34px_rgba(31,41,55,0.55)] md:col-span-8">
                        <PhotoCarousel />
                        <div className="p-6 sm:p-8">
                            <div className="flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-sm">
                                    <PhotoCameraOutlined aria-hidden="true" fontSize="small" />
                                </span>
                                <div>
                                    <p className="text-[0.62rem] font-bold tracking-[0.2em] text-secondary-50">01</p>
                                    <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-primary">{t("hobbies.fotografia")}</h2>
                                </div>
                            </div>
                            <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-primary sm:text-3xl">{t("hobbies.capturando")}</h3>
                            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-secondary-30 sm:text-base">
                                {t("hobbies.fotografiaDesc")}
                            </p>
                            <div className="mt-5 flex flex-wrap gap-2">
                                <span className="rounded-full bg-neutral-95 px-3 py-1.5 text-xs font-semibold text-secondary-40">{t("hobbies.composicion")}</span>
                                <span className="rounded-full bg-neutral-95 px-3 py-1.5 text-xs font-semibold text-secondary-40">{t("hobbies.luzNatural")}</span>
                            </div>
                        </div>
                    </article>

                    <div className="grid gap-5 md:col-span-4 md:grid-rows-[minmax(0,1fr)_minmax(15rem,0.85fr)]">
                        <article className="relative isolate flex min-h-64 flex-col justify-between overflow-hidden rounded-[1.75rem] bg-primary p-6 text-white sm:p-8">
                            <div aria-hidden="true" className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full border border-tertiary-90/20" />
                            <div className="relative">
                                <div className="flex items-center justify-between gap-3">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-tertiary-90">
                                        <SportsEsportsOutlined aria-hidden="true" />
                                    </span>
                                    <span className="text-[0.62rem] font-bold tracking-[0.2em] text-white/50">02</span>
                                </div>
                                <h2 className="mt-8 text-2xl font-semibold tracking-[-0.03em]">{t("hobbies.jugarParaGanar")}</h2>
                                <p className="mt-3 text-sm leading-relaxed text-white/70">{t("hobbies.gamingDesc")}</p>
                            </div>
                            <p className="relative mt-8 text-xs font-bold uppercase tracking-[0.18em] text-tertiary-90">{t("hobbies.gaming")}</p>
                        </article>

                        <div className="group relative min-h-64 overflow-hidden rounded-[1.75rem] bg-primary">
                            <Image
                                className="h-full w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.05] motion-reduce:transition-none"
                                src={gaming}
                                alt="Accesorios gamer"
                                fill
                                sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) 33vw, 360px"
                            />
                            <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-primary/75 via-transparent to-transparent" />
                        </div>
                    </div>

                    <article className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-white/80 bg-white shadow-[0_18px_45px_-32px_rgba(31,41,55,0.5)] md:col-span-8 md:flex-row">
                        <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
                            <div className="flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-95 text-primary">
                                    <HeadsetOutlined aria-hidden="true" />
                                </span>
                                <div>
                                    <p className="text-[0.62rem] font-bold tracking-[0.2em] text-secondary-50">03</p>
                                    <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-primary">{t("hobbies.ritual")}</h2>
                                </div>
                            </div>
                            <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-primary">{t("hobbies.culturaMusica")}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-secondary-30 sm:text-base">{t("hobbies.musicaDesc")}</p>
                        </div>
                        <div className="relative min-h-64 overflow-hidden sm:min-w-[42%]">
                            <Image
                                className="h-full w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.05] motion-reduce:transition-none"
                                src={musica}
                                alt="Audífonos"
                                fill
                                sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) 42vw, 420px"
                            />
                        </div>
                    </article>

                    <article className="flex min-h-64 flex-col justify-center rounded-[1.75rem] bg-tertiary-95 p-6 sm:p-8 md:col-span-4">
                        <div className="flex items-center justify-between gap-3">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                                <MovieOutlined aria-hidden="true" />
                            </span>
                            <span className="text-[0.62rem] font-bold tracking-[0.2em] text-secondary-50">04</span>
                        </div>
                        <h2 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-primary">{t("hobbies.historiasInspiran")}</h2>
                        <p className="mt-3 text-sm leading-relaxed text-secondary-30">{t("hobbies.seriesDesc")}</p>
                        <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-secondary-40">{t("hobbies.seriesPeliculas")}</p>
                    </article>
                </div>

                <div className="mx-auto mt-16 max-w-2xl border-t border-neutral-90 pt-8 text-center animate-materialize" style={{ animationDelay: "180ms" }}>
                    <p className="text-lg leading-relaxed tracking-[-0.01em] text-secondary-40 sm:text-xl">
                        &quot;{t("hobbies.citaFinal")}&quot;
                    </p>
                </div>
            </div>
        </div>
    );
}
