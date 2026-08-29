"use client";

import Contacto from "@/app/contacto/page";
import Hobbies from "@/app/hobbies/page";
import Inicio from "@/app/inicio/page";
import Proyectos from "@/app/proyectos/page";
import Tecnologias from "@/app/tecnologias/page";

export default function Home() {
  return (
    <>
      <Inicio />

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
