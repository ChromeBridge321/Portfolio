"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowForward, AutoStoriesOutlined, TerminalOutlined } from "@mui/icons-material";
import Contacto from "@/app/contacto/page";
import Hobbies from "@/app/hobbies/page";
import Proyectos from "@/app/proyectos/page";
import Tecnologias from "@/app/tecnologias/page";
import { useI18n } from "@/lib/i18n/context";
import davidImage from "../assets/david.jpeg";

export default function Home() {
  const { t } = useI18n();

  return (
    <>
      <section id="inicio" className="relative isolate w-full scroll-mt-24 overflow-hidden bg-neutral-100 animate-fade-in-up motion-reduce:animate-none">
        <div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-[40%] bg-neutral-95 md:block" />

        <div className="relative mx-auto grid w-full max-w-6xl items-start gap-10 px-6 pb-6 pt-8 sm:px-10 md:grid-cols-[minmax(0,1.1fr)_minmax(17.5rem,0.9fr)] md:gap-10 md:px-8 md:pb-7 md:pt-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.8fr)] lg:gap-14 xl:px-0 xl:pt-12">
          <div className="order-2 self-center md:order-1 md:self-start">
            <div className="mb-5 flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-10 bg-primary" />
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary sm:text-sm">
                {t("home.rol")}
              </p>
            </div>

            <h1 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-primary sm:text-4xl md:text-3xl lg:text-4xl">
              <span className="md:hidden">{t("home.introMobile")}</span>
              <span className="hidden md:inline">{t("home.introMd")}</span>
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                className="group/link inline-flex min-h-12 items-center justify-center bg-primary px-7 py-3 text-sm font-bold tracking-wide text-white transition-colors duration-300 hover:bg-primary-80 active:bg-primary-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:px-9"
                href="#proyectos"
              >
                <span className="md:hidden">{t("home.verProyectosBtn")}</span>
                <span className="hidden md:inline">{t("home.verProyectos")}</span>
                <ArrowForward aria-hidden="true" className="ms-2 transition-transform duration-300 group-hover/link:translate-x-1 motion-reduce:transition-none" fontSize="small" />
              </Link>
              <Link
                className="inline-flex min-h-12 items-center border-b border-primary px-1 text-sm font-bold text-primary transition-colors hover:text-primary-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                href="#contacto"
              >
                {t("nav.contacto")}
              </Link>
            </div>
          </div>

          <div className="relative order-1 mx-auto w-full max-w-sm self-start md:order-2 md:mx-0 md:ml-auto md:max-w-[280px] lg:max-w-[320px] xl:max-w-[360px]">
            <div aria-hidden="true" className="absolute -inset-3 translate-x-4 translate-y-4 rounded-2xl bg-tertiary-90 sm:translate-x-5 sm:translate-y-5" />
            <div className="relative overflow-hidden rounded-2xl border border-neutral-90 bg-white p-2">
              <Image
                className="aspect-[4/5] w-full rounded-xl object-cover"
                src={davidImage}
                alt="David García, desarrollador Full-Stack"
                sizes="(max-width: 767px) calc(100vw - 3rem), (max-width: 1023px) 280px, (max-width: 1279px) 320px, 360px"
                placeholder="blur"
                priority
              />
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-6 pb-6 sm:px-10 md:px-8 xl:px-0">
          <div className="grid overflow-hidden border-y border-neutral-90 bg-white md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
            <article className="border-l-2 border-primary bg-neutral-95 px-5 py-5 sm:px-6">
              <div className="mb-3 flex items-center gap-2 text-primary">
                <AutoStoriesOutlined aria-hidden="true" fontSize="small" />
                <h2 className="text-sm font-bold uppercase tracking-wider">{t("home.miHistoria")}</h2>
              </div>
              <p className="text-sm leading-relaxed text-neutral-20">
                {t("home.historia")}
              </p>
            </article>

            <article className="border-t border-neutral-90 px-5 py-5 sm:px-6 md:border-l md:border-t-0">
              <div className="mb-4 flex items-center gap-2 text-primary">
                <TerminalOutlined aria-hidden="true" fontSize="small" />
                <h2 className="text-sm font-bold uppercase tracking-wider">{t("home.tecnologias")}</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {["TypeScript", "Angular", "Next.js", "Tailwind CSS", "Laravel", "PostgreSQL"].map((tecnologia) => (
                  <span key={tecnologia} className="rounded-full bg-neutral-95 px-3 py-1 text-xs font-semibold text-secondary-40">
                    {tecnologia}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="proyectos" className="scroll-mt-24">
        <Proyectos />
      </section>
      <section id="tecnologias" className="scroll-mt-24">
        <Tecnologias />
      </section>
      <section id="hobbies" className="scroll-mt-24">
        <Hobbies />
      </section>
      <section id="contacto" className="scroll-mt-24">
        <Contacto />
      </section>
    </>
  );
}
