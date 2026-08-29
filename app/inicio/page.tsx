"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowForward, AutoStoriesOutlined, TerminalOutlined } from "@mui/icons-material";
import { useI18n } from "@/lib/i18n/context";
import davidImage from "../../assets/david.jpeg";

const technologies = ["TypeScript", "Angular", "Next.js", "Tailwind CSS", "Laravel", "PostgreSQL"];

export default function Inicio() {
  const { t } = useI18n();

  return (
    <section
      id="inicio"
      aria-labelledby="inicio-title"
      aria-describedby="inicio-description"
      className="relative isolate overflow-hidden bg-neutral-100 px-4 pb-8 pt-4 scroll-mt-24 sm:px-6 sm:pb-12 sm:pt-8 lg:px-8 lg:pb-16 lg:pt-12"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-tertiary-90/70 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute left-1/3 top-0 h-56 w-56 rounded-full bg-primary-10/70 blur-3xl" />

      <div className="mx-auto w-full max-w-6xl">
        <div className="apple-material relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/70 shadow-[0_24px_80px_-36px_rgba(31,41,55,0.45)] backdrop-blur-2xl animate-materialize">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/80 via-white/20 to-tertiary-95/60" />

          <div className="relative grid lg:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.92fr)]">
            <div className="flex min-w-0 flex-col p-6 sm:p-10 lg:p-14">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span aria-hidden="true" className="h-px w-8 bg-primary sm:w-10" />
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-primary sm:text-xs">
                    {t("home.rol")}
                  </p>
                </div>
                <span className="hidden rounded-full border border-primary/10 bg-white/60 px-3 py-1.5 text-[0.65rem] font-bold tracking-[0.18em] text-secondary-40 sm:inline-flex">
                  01 / 04
                </span>
              </div>

              <div className="mt-12 max-w-2xl animate-materialize" style={{ animationDelay: "100ms" }}>
                <p className="mb-3 text-sm font-semibold tracking-[0.12em] text-secondary-40">
                  {t("nav.sobreMi")}
                </p>
                <h1
                  id="inicio-title"
                  className="max-w-xl text-[clamp(3.25rem,8vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-primary [font-optical-sizing:auto]"
                >
                  David
                  <span className="block text-secondary-60">García.</span>
                </h1>
                <p id="inicio-description" className="mt-8 max-w-xl text-lg leading-relaxed tracking-[-0.01em] text-secondary-30 sm:text-xl">
                  <span className="md:hidden">{t("home.introMobile")}</span>
                  <span className="hidden md:inline">{t("home.introMd")}</span>
                </p>
                <p className="mt-5 hidden max-w-xl text-base leading-relaxed text-secondary-40 lg:block">
                  {t("home.introDesktop2")}
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-3 animate-materialize" style={{ animationDelay: "180ms" }}>
                <Link
                  className="group/link inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold tracking-wide text-white shadow-lg shadow-primary/15 transition-[background-color,box-shadow,transform] duration-300 hover:bg-primary-80 hover:shadow-xl hover:shadow-primary/20 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none"
                  href="#proyectos"
                >
                  <span className="md:hidden">{t("home.verProyectosBtn")}</span>
                  <span className="hidden md:inline">{t("home.verProyectos")}</span>
                  <ArrowForward aria-hidden="true" className="transition-transform duration-300 group-hover/link:translate-x-1 motion-reduce:transition-none" fontSize="small" />
                </Link>
                <Link
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-primary/15 bg-white/55 px-6 py-3.5 text-sm font-bold text-primary transition-[background-color,border-color,transform] duration-300 hover:border-primary/30 hover:bg-white active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none"
                  href="#contacto"
                >
                  {t("nav.contacto")}
                </Link>
              </div>

              <div className="mt-12 flex items-center gap-3 text-xs font-semibold tracking-wide text-secondary-50 sm:mt-auto sm:pt-16">
                <span className="h-1.5 w-1.5 rounded-full bg-tertiary-60" />
                <span>{t("contacto.disponibleRemoto")}</span>
              </div>
            </div>

            <div className="relative p-4 pt-0 sm:p-6 sm:pt-0 lg:p-8 lg:pl-0">
              <div className="absolute inset-x-10 bottom-8 top-8 rounded-[1.75rem] bg-tertiary-90/80 blur-2xl sm:inset-x-14 sm:bottom-12 sm:top-12" />
              <div className="group relative min-h-[26rem] overflow-hidden rounded-[1.5rem] bg-primary shadow-2xl shadow-primary/20 sm:min-h-[34rem] lg:min-h-[40rem] animate-materialize" style={{ animationDelay: "220ms" }}>
                <Image
                  className="h-full w-full object-cover object-center transition-transform duration-700 motion-safe:group-hover:scale-[1.04] motion-reduce:transition-none"
                  src={davidImage}
                  alt="David García, desarrollador Full-Stack"
                  fill
                  sizes="(max-width: 1023px) calc(100vw - 3rem), (max-width: 1279px) 430px, 500px"
                  placeholder="blur"
                  priority
                />
                <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-primary via-primary/10 to-transparent opacity-85" />

                <div className="apple-overlay-material absolute inset-x-4 bottom-4 rounded-2xl border border-white/20 bg-primary/65 p-4 text-white backdrop-blur-xl sm:inset-x-5 sm:bottom-5 sm:p-5">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-white/60">David García</p>
                      <p className="mt-1 text-sm font-semibold tracking-wide text-white">Frontend · Backend · UI</p>
                    </div>
                    <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xs font-bold tracking-[0.15em] text-white">
                      DG
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative grid border-t border-neutral-90/80 bg-white/45 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <article className="p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-sm">
                  <AutoStoriesOutlined aria-hidden="true" fontSize="small" />
                </span>
                <div>
                  <p className="text-[0.62rem] font-bold tracking-[0.2em] text-secondary-50">01</p>
                  <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-primary">{t("home.miHistoria")}</h2>
                </div>
              </div>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-neutral-20 sm:text-base">
                {t("home.historia")}
              </p>
            </article>

            <aside aria-label={t("home.tecnologias")} className="border-t border-neutral-90/80 p-6 sm:p-8 md:border-l md:border-t-0">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/10 bg-white text-primary shadow-sm">
                  <TerminalOutlined aria-hidden="true" fontSize="small" />
                </span>
                <div>
                  <p className="text-[0.62rem] font-bold tracking-[0.2em] text-secondary-50">02</p>
                  <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-primary">{t("home.tecnologias")}</h2>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {technologies.map((technology, index) => (
                  <span
                    key={technology}
                    className="inline-flex items-center gap-2 rounded-full border border-neutral-90 bg-white px-3 py-2 text-xs font-semibold text-secondary-40 shadow-sm transition-[border-color,box-shadow,transform,color] duration-300 hover:-translate-y-0.5 transition-all hover:border-primary/20 hover:text-primary hover:shadow-md motion-reduce:transition-none"
                  >
                    <span aria-hidden="true" className="text-[0.6rem] font-bold text-secondary-60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {technology}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
