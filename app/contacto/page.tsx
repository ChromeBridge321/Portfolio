"use client";

import CheckCircleOutlined from "@mui/icons-material/CheckCircleOutlined";
import CodeOutlined from "@mui/icons-material/CodeOutlined";
import LocationOnOutlined from "@mui/icons-material/LocationOnOutlined";
import MailOutlined from "@mui/icons-material/MailOutlined";
import MapOutlined from "@mui/icons-material/MapOutlined";
import SendRounded from "@mui/icons-material/SendRounded";
import WorkOutlined from "@mui/icons-material/WorkOutlined";
import { useState } from "react";
import { useI18n } from "@/lib/i18n/context";

export default function Contacto() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { t, locale } = useI18n();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    try {
      const response = await fetch("https://formspree.io/f/mjgqdweo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      }
    } finally {
      setSending(false);
    }
  };

  const resetForm = () => {
    setFormSubmitted(false);
  };

  return (
    <div className="relative isolate overflow-hidden bg-neutral-100 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-tertiary-95/80 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-primary-10/70 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl">
        <header className="mb-12 max-w-3xl animate-materialize sm:mb-16">
          <div className="mb-5 flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-secondary-40">
            <span className="flex h-8 min-w-8 items-center justify-center rounded-full bg-primary text-[0.65rem] text-white shadow-sm">05</span>
            <span className="h-px w-12 bg-neutral-90" />
            <span>CONTACTO</span>
          </div>
          <h1 id="contacto-title" className="max-w-2xl text-[clamp(2.75rem,6vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.055em] text-primary [font-optical-sizing:auto]">
            {t("contacto.titulo")}
          </h1>
          <p id="contacto-description" className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary-30 sm:text-xl">
            {t("contacto.subtitulo")}
          </p>
        </header>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
          <aside className="relative isolate overflow-hidden rounded-[2rem] bg-primary p-6 text-white shadow-[0_24px_70px_-36px_rgba(31,41,55,0.8)] sm:p-8 lg:p-10" aria-labelledby="contact-info-title">
            <div aria-hidden="true" className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-tertiary-90/15" />
            <div aria-hidden="true" className="absolute -bottom-20 -left-12 h-56 w-56 rounded-full bg-tertiary-90/10 blur-3xl" />

            <div className="relative flex min-h-full flex-col">
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-tertiary-90" />
                  {t("contacto.disponibleRemoto")}
                </span>
                <span className="text-[0.65rem] font-bold tracking-[0.2em] text-white/45">01 / 02</span>
              </div>

              <div className="mt-16">
                <h2 id="contact-info-title" className="max-w-sm text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                  {t("contacto.infoContacto")}
                </h2>
                <div className="mt-10 space-y-6">
                  <a
                    href="mailto:davidgarcia2809@gmail.com"
                    className="apple-lift group flex items-start gap-4 rounded-2xl border border-white/10 p-4 transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-tertiary-90">
                      <MailOutlined aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-bold uppercase tracking-[0.18em] text-white/50">Email</span>
                      <span className="mt-1 block break-all text-sm font-semibold text-white sm:text-base">davidgarcia2809@gmail.com</span>
                    </span>
                  </a>
                  <div className="flex items-start gap-4 rounded-2xl border border-white/10 p-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-tertiary-90">
                      <LocationOnOutlined aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-[0.18em] text-white/50">{t("contacto.ubicacion")}</span>
                      <span className="mt-1 block text-sm font-semibold text-white sm:text-base">{t("contacto.estadoMexico")}</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-12 sm:mt-auto sm:pt-20">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">{t("contacto.perfilesSociales")}</p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <a
                    className="apple-lift group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 text-sm font-semibold text-white transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
                    href="https://github.com/ChromeBridge321"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CodeOutlined aria-hidden="true" fontSize="small" />
                    GitHub
                  </a>
                  <a
                    className="apple-lift group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 text-sm font-semibold text-white transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
                    href="https://www.linkedin.com/in/davidgj01a1336"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WorkOutlined aria-hidden="true" fontSize="small" />
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="relative mt-6 min-h-32 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4">
                <MapOutlined aria-hidden="true" className="absolute -bottom-6 -right-4 text-[8rem]! text-white/10" />
                <p className="relative max-w-[12rem] text-sm font-semibold leading-relaxed text-white/75">
                  {locale === "es" ? "Conectemos ideas y construyamos algo útil." : "Let’s connect ideas and build something useful."}
                </p>
              </div>
            </div>
          </aside>

          <div className="apple-material rounded-[2rem] border border-white/80 bg-white/75 p-6 shadow-[0_24px_80px_-36px_rgba(31,41,55,0.45)] backdrop-blur-xl sm:p-8 lg:p-10">
            {!formSubmitted ? (
              <form className="flex h-full flex-col" onSubmit={handleSubmit} aria-describedby="contacto-description">
                <div className="flex items-start justify-between gap-4 border-b border-neutral-90/80 pb-6">
                  <div>
                    <p className="text-[0.65rem] font-bold tracking-[0.2em] text-secondary-50">02 / 02</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-primary sm:text-3xl">{t("contacto.enviarMensaje")}</h2>
                  </div>
                  <SendRounded aria-hidden="true" className="text-primary" />
                </div>

                <div className="mt-8 grid gap-7">
                  <div className="grid gap-2">
                    <label className="text-sm font-semibold text-primary" htmlFor="name">{t("contacto.nombreCompleto")}</label>
                    <input
                      className="min-h-12 rounded-xl border border-neutral-90 bg-white/70 px-4 text-base text-primary outline-none transition-[border-color,box-shadow,background-color] placeholder:text-secondary-60 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                      id="name"
                      name="name"
                      placeholder={t("contacto.tuNombre")}
                      required
                      autoComplete="name"
                      type="text"
                      value={formData.name}
                      onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-semibold text-primary" htmlFor="email">{t("contacto.correoElectronico")}</label>
                    <input
                      className="min-h-12 rounded-xl border border-neutral-90 bg-white/70 px-4 text-base text-primary outline-none transition-[border-color,box-shadow,background-color] placeholder:text-secondary-60 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                      id="email"
                      name="email"
                      placeholder="nombre@ejemplo.com"
                      required
                      autoComplete="email"
                      type="email"
                      value={formData.email}
                      onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-semibold text-primary" htmlFor="message">{t("contacto.mensaje")}</label>
                    <textarea
                      className="min-h-36 resize-y rounded-xl border border-neutral-90 bg-white/70 px-4 py-3 text-base leading-relaxed text-primary outline-none transition-[border-color,box-shadow,background-color] placeholder:text-secondary-60 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                      id="message"
                      name="message"
                      placeholder={t("contacto.placeholderMensaje")}
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                    />
                  </div>
                </div>

                <div className="mt-auto pt-8">
                  <button
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/15 transition-[background-color,box-shadow,transform] duration-300 hover:bg-primary-80 hover:shadow-xl hover:shadow-primary/20 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none sm:w-auto"
                    type="submit"
                    disabled={sending}
                    aria-busy={sending}
                  >
                    {sending ? t("contacto.enviando") : t("contacto.enviarMensaje")}
                    <SendRounded aria-hidden="true" fontSize="small" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="flex h-full min-h-[30rem] flex-col items-center justify-center text-center animate-materialize" role="status" aria-live="polite">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/15">
                  <CheckCircleOutlined aria-hidden="true" className="text-3xl" />
                </span>
                <h2 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-primary">{t("contacto.mensajeEnviado")}</h2>
                <p className="mt-4 max-w-sm text-base leading-relaxed text-secondary-40">{t("contacto.graciasContactar")}</p>
                <button
                  type="button"
                  className="mt-8 inline-flex min-h-11 items-center rounded-full border border-primary/15 px-5 text-sm font-bold text-primary transition-[background-color,border-color,transform] duration-300 hover:border-primary hover:bg-primary hover:text-white active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none"
                  onClick={resetForm}
                >
                  {t("contacto.enviarOtro")}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
