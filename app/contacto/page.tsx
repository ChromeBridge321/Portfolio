"use client";
import { useState } from "react";
import { MailOutlined, LocationOnOutlined, CodeOutlined, WorkOutlined, MapOutlined, CheckCircleOutlined, SendOutlined } from "@mui/icons-material";

export default function Contacto() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("https://formspree.io/f/mjgqdweo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
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
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto animate-fade-in-up">
        {/* Header */}
        <div className="text-center mb-20 mt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Hablemos.</h1>
          <p className="text-lg text-secondary-40 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente o simplemente quieres saludar? Estoy siempre abierto a discutir nuevas oportunidades y colaboraciones técnicas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Information & Socials */}
          <div className="lg:col-span-5 space-y-10">
            {/* Info Card */}
            <div className="tonal-card p-8 rounded-xl">
              <h2 className="text-lg font-semibold text-primary mb-6">Información de contacto</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-secondary-90 flex items-center justify-center text-primary transition-transform group-hover:scale-110">
                    <MailOutlined />
                  </div>
                  <div>
                    <p className="text-xs text-secondary-40 uppercase tracking-wider font-medium">Email</p>
                    <p className="text-base text-primary font-medium">davidgarcia2809@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-secondary-90 flex items-center justify-center text-primary transition-transform group-hover:scale-110">
                    <LocationOnOutlined />
                  </div>
                  <div>
                    <p className="text-xs text-secondary-40 uppercase tracking-wider font-medium">Ubicación</p>
                    <p className="text-base text-primary font-medium">Estado de México</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Card */}
            <div className="tonal-card p-8 rounded-xl">
              <h2 className="text-lg font-semibold text-primary mb-6">Perfiles Sociales</h2>
              <div className="flex gap-4">
                <a className="flex-1 flex flex-col items-center justify-center p-4 border border-neutral-90 rounded-lg hover:border-primary transition-colors group" href="https://github.com/ChromeBridge321" target="_blank" rel="noopener noreferrer">
                  <CodeOutlined className="text-2xl text-secondary-40 group-hover:text-primary mb-2" />
                  <span className="text-sm text-secondary-40 group-hover:text-primary font-medium">GitHub</span>
                </a>
                <a className="flex-1 flex flex-col items-center justify-center p-4 border border-neutral-90 rounded-lg hover:border-primary transition-colors group" href="https://www.linkedin.com/in/davidgj01a1336" target="_blank" rel="noopener noreferrer">
                  <WorkOutlined className="text-2xl text-secondary-40 group-hover:text-primary mb-2" />
                  <span className="text-sm text-secondary-40 group-hover:text-primary font-medium">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="relative h-48 rounded-xl overflow-hidden border border-neutral-90">
              <div className="absolute inset-0 bg-secondary-90/20 flex items-center justify-center">
                <MapOutlined className="text-primary/20 text-[80px]!" />
              </div>
              <div className="absolute bottom-4 left-4 bg-white px-4 py-1 rounded-full shadow-sm text-xs font-medium text-primary">
                Disponible para proyectos remotos
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-white border border-neutral-90 rounded-xl p-8">
            {!formSubmitted ? (
              <form className="space-y-10" onSubmit={handleSubmit}>
                <div className="space-y-10">
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm text-secondary-40 font-medium" htmlFor="name">Nombre Completo</label>
                    <input
                      className="border-b border-neutral-90 bg-transparent py-2 text-base focus:outline-none focus:border-primary transition-colors"
                      id="name"
                      name="name"
                      placeholder="Tu nombre"
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm text-secondary-40 font-medium" htmlFor="email">Correo Electrónico</label>
                    <input
                      className="border-b border-neutral-90 bg-transparent py-2 text-base focus:outline-none focus:border-primary transition-colors"
                      id="email"
                      name="email"
                      placeholder="nombre@ejemplo.com"
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm text-secondary-40 font-medium" htmlFor="message">Mensaje</label>
                    <textarea
                      className="border-b border-neutral-90 bg-transparent py-2 text-base focus:outline-none focus:border-primary transition-colors resize-none"
                      id="message"
                      name="message"
                      placeholder="¿En qué puedo ayudarte?"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                </div>
                <div className="pt-4">
                  <button
                    className="w-full md:w-auto px-12 py-4 bg-primary text-white text-lg font-semibold rounded-lg cursor-pointer active:scale-95 transition-all hover:bg-primary-80 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    type="submit"
                    disabled={sending}
                  >
                    {sending ? "Enviando..." : "Enviar Mensaje"}
                    <SendOutlined />
                  </button>
                </div>
              </form>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in-up">
                <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-6">
                  <CheckCircleOutlined className="text-primary text-4xl" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">¡Mensaje Enviado!</h3>
                <p className="text-base text-secondary-40 max-w-sm">
                  Gracias por contactar. Te responderé lo antes posible, normalmente en menos de 24 horas.
                </p>
                <button
                  className="mt-8 text-primary text-sm font-medium border-b border-primary pb-1 hover:opacity-70 transition-opacity"
                  onClick={resetForm}
                >
                  Enviar otro mensaje
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
