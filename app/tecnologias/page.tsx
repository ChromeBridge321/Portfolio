"use client";

import Api from "@mui/icons-material/Api";
import Architecture from "@mui/icons-material/Architecture";
import CloudDone from "@mui/icons-material/CloudDone";
import Code from "@mui/icons-material/Code";
import Css from "@mui/icons-material/Css";
import DataObject from "@mui/icons-material/DataObject";
import Devices from "@mui/icons-material/Devices";
import Draw from "@mui/icons-material/Draw";
import Javascript from "@mui/icons-material/Javascript";
import Storage from "@mui/icons-material/Storage";
import Terminal from "@mui/icons-material/Terminal";
import TrendingUp from "@mui/icons-material/TrendingUp";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useI18n } from "@/lib/i18n/context";

function TechCard({ icon, label }: { icon: React.ReactNode; label: string }) {
    return (
        <li className="apple-lift group flex min-h-28 flex-col justify-between rounded-2xl border border-neutral-90 bg-white p-4 shadow-sm transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-primary/15 hover:shadow-lg hover:shadow-primary/5 motion-reduce:transition-none">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-primary transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none">
                {icon}
            </span>
            <span className="mt-5 text-sm font-semibold tracking-[-0.01em] text-secondary-40 group-hover:text-primary">{label}</span>
        </li>
    );
}

function TechCardHorizontal({ icon, label }: { icon: React.ReactNode; label: string }) {
    return (
        <li className="apple-lift group flex min-h-16 items-center gap-3 rounded-2xl border border-neutral-90 bg-white p-4 shadow-sm transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-primary/15 hover:shadow-md motion-reduce:transition-none">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-neutral-95 text-secondary-40 transition-colors group-hover:bg-primary group-hover:text-white">
                {icon}
            </span>
            <span className="text-sm font-semibold text-secondary-40 group-hover:text-primary">{label}</span>
        </li>
    );
}

function ToolCard({ icon, label, progress }: { icon: React.ReactNode; label: string; progress: number }) {
    return (
        <li className="apple-lift rounded-2xl border border-neutral-90 bg-white p-4 shadow-sm transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-primary/15 hover:shadow-md motion-reduce:transition-none">
            <div className="flex items-center justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary">{icon}</span>
                    <span className="truncate text-sm font-semibold text-primary">{label}</span>
                </div>
                <span className="text-xs font-bold tracking-wide text-secondary-50">{progress}%</span>
            </div>
            <div
                className="mt-4 h-1.5 overflow-hidden rounded-full bg-neutral-90"
                role="meter"
                aria-label={`${label}: ${progress}%`}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={progress}
            >
                <div className="h-full rounded-full bg-primary" style={{ width: `${progress}%` }} />
            </div>
        </li>
    );
}

export default function Tecnologias() {
    const { t } = useI18n();

    return (
        <div className="relative isolate overflow-hidden bg-neutral-100 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
            <div aria-hidden="true" className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-primary-10/70 blur-3xl" />
            <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-tertiary-95/70 blur-3xl" />

            <div className="relative mx-auto w-full max-w-6xl">
                <header className="mb-12 grid gap-7 animate-materialize sm:mb-16 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:items-end md:gap-12">
                    <div>
                        <div className="mb-5 flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-secondary-40">
                            <span className="flex h-8 min-w-8 items-center justify-center rounded-full bg-primary text-[0.65rem] text-white shadow-sm">03</span>
                            <span className="h-px w-12 bg-neutral-90" />
                            <span>TECNOLOGÍAS</span>
                        </div>
                        <h1 id="tecnologias-title" className="max-w-[10ch] text-[clamp(2.75rem,6vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.055em] text-primary [font-optical-sizing:auto]">
                            {t("tecnologias.titulo")}
                        </h1>
                    </div>
                    <p className="max-w-2xl text-lg leading-relaxed text-secondary-30 sm:text-xl">
                        {t("tecnologias.subtitulo")}
                    </p>
                </header>

                <div className="apple-material grid grid-cols-1 gap-3 rounded-[2rem] border border-white/80 bg-white/65 p-3 shadow-[0_24px_80px_-36px_rgba(31,41,55,0.4)] backdrop-blur-xl md:grid-cols-12">
                    <section className="rounded-[1.5rem] bg-white p-6 sm:p-8 md:col-span-8" aria-labelledby="frontend-title">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                            <div className="flex items-center gap-3">
                                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-white shadow-sm">
                                    <Devices aria-hidden="true" />
                                </span>
                                <div>
                                    <p className="text-[0.62rem] font-bold tracking-[0.2em] text-secondary-50">01</p>
                                    <h2 id="frontend-title" className="text-xl font-semibold tracking-[-0.03em] text-primary sm:text-2xl">{t("tecnologias.frontend")}</h2>
                                </div>
                            </div>
                            <span className="w-fit rounded-full bg-primary/5 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                                {t("tecnologias.intermedio")}
                            </span>
                        </div>
                        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4" aria-label={t("tecnologias.frontend")}>
                            <TechCard icon={<Javascript aria-hidden="true" />} label="JavaScript" />
                            <TechCard icon={<Code aria-hidden="true" />} label="TypeScript" />
                            <TechCard icon={<DataObject aria-hidden="true" />} label="Angular" />
                            <TechCard icon={<Css aria-hidden="true" />} label="Tailwind CSS" />
                        </ul>
                        <p className="mt-7 max-w-2xl text-sm leading-relaxed text-secondary-30 sm:text-base">
                            {t("tecnologias.frontendDesc")}
                        </p>
                    </section>

                    <section className="relative isolate flex min-h-80 flex-col justify-between overflow-hidden rounded-[1.5rem] bg-primary p-6 text-white sm:p-8 md:col-span-4" aria-labelledby="explorando-title">
                        <div aria-hidden="true" className="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-tertiary-90/20" />
                        <div aria-hidden="true" className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-tertiary-90/15 blur-3xl" />
                        <div className="relative">
                            <div className="mb-5 flex items-center justify-between gap-4">
                                <span className="text-[0.62rem] font-bold tracking-[0.2em] text-white/55">02</span>
                                <TrendingUp aria-hidden="true" className="text-tertiary-90" />
                            </div>
                            <h2 id="explorando-title" className="max-w-xs text-2xl font-semibold leading-tight tracking-[-0.03em]">{t("tecnologias.explorandoAhora")}</h2>
                            <div className="mt-6 flex flex-wrap gap-2">
                                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white">Next.js</span>
                                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white">Spring Boot</span>
                                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white">Docker</span>
                            </div>
                        </div>
                        <div className="relative mt-12">
                            <p className="max-w-sm text-sm leading-relaxed text-white/75">
                                {t("tecnologias.explorandoDesc")}
                            </p>
                            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-white">
                                <span className="h-1.5 w-1.5 rounded-full bg-tertiary-90" />
                                {t("tecnologias.crecimiento")}
                            </div>
                        </div>
                    </section>

                    <section className="rounded-[1.5rem] bg-neutral-95 p-6 sm:p-8 md:col-span-6" aria-labelledby="backend-title">
                        <div className="flex items-center gap-3">
                            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-90 bg-white text-primary shadow-sm">
                                <Storage aria-hidden="true" />
                            </span>
                            <div>
                                <p className="text-[0.62rem] font-bold tracking-[0.2em] text-secondary-50">03</p>
                                <h2 id="backend-title" className="text-xl font-semibold tracking-[-0.03em] text-primary sm:text-2xl">{t("tecnologias.backend")}</h2>
                            </div>
                        </div>
                        <ul className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3" aria-label={t("tecnologias.backend")}>
                            <TechCardHorizontal icon={<Terminal aria-hidden="true" fontSize="small" />} label="Laravel" />
                            <TechCardHorizontal icon={<CloudDone aria-hidden="true" fontSize="small" />} label="AWS" />
                            <TechCardHorizontal icon={<Api aria-hidden="true" fontSize="small" />} label="REST" />
                            <TechCardHorizontal icon={<Storage aria-hidden="true" fontSize="small" />} label="PostgreSQL" />
                            <TechCardHorizontal icon={<Storage aria-hidden="true" fontSize="small" />} label="SQL Server" />
                            <TechCardHorizontal icon={<Storage aria-hidden="true" fontSize="small" />} label="MariaDB" />
                        </ul>
                    </section>

                    <section className="rounded-[1.5rem] bg-neutral-95 p-6 sm:p-8 md:col-span-6" aria-labelledby="tools-title">
                        <div className="flex items-center gap-3">
                            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-90 bg-white text-primary shadow-sm">
                                <Architecture aria-hidden="true" />
                            </span>
                            <div>
                                <p className="text-[0.62rem] font-bold tracking-[0.2em] text-secondary-50">04</p>
                                <h2 id="tools-title" className="text-xl font-semibold tracking-[-0.03em] text-primary sm:text-2xl">{t("tecnologias.herramientas")}</h2>
                            </div>
                        </div>
                        <ul className="mt-7 space-y-3" aria-label={t("tecnologias.herramientas")}>
                            <ToolCard icon={<Draw aria-hidden="true" fontSize="small" />} label="Figma & UI/UX Design" progress={40} />
                            <ToolCard icon={<GitHubIcon aria-hidden="true" fontSize="small" />} label="Git - GitHub" progress={45} />
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}
