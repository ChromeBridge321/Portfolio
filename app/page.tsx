"use client";
import Image from "next/image";
import davidImage from "../assets/david.jpeg";
import { AutoStoriesOutlined } from "@mui/icons-material";
import { TerminalOutlined } from "@mui/icons-material";
import { ArrowForward } from "@mui/icons-material";
import Link from "next/link";
import BreakP from "@/components/breakpoints/breakpoint";
export default function Home() {
  return (
    <div className="w-full md:flex md:justify-center md:items-start">
      {/* Desktop */}
      <div className="hidden md:block w-268 mx-8 xl:mx-0">
        {/* Acerca de mi */}
        <div className="flex flex-row-reverse justify-center items-center gap-12 lg:gap-16">
          <div className="py-4 flex justify-center items-center shrink-0">
            <Image
              className="rounded-2xl w-56 h-56 md:w-74 md:h-74 xl:w-80 xl:h-80 object-cover"
              src={davidImage}
              alt="DG"
            />
          </div>
          <div className="py-4 flex flex-col justify-center">
            <h3 className="text-primary font-semibold mb-4 text-xl lg:text-2xl xl:text-3xl">DESARROLLADOR FULL-STACK <BreakP /> </h3>
            <p className="mb-6 text-base text-neutral-20 leading-relaxed lg:hidden">Soy David, desarrollador Full-Stack con más de dos años de experiencia en Laravel, Angular y tecnologías cloud. Me apasiona transformar ideas en soluciones de software escalables y de alta calidad.</p>
            <p className="mb-4 text-lg text-neutral-20 leading-relaxed hidden lg:block">Hola, soy David, desarrollador Full-Stack con más de dos años de experiencia en el desarrollo de aplicaciones con Laravel, Angular y tecnologías de despliegue en la nube. Me apasiona transformar ideas en soluciones de software y participar en todo el ciclo de desarrollo, desde la planeación hasta la puesta en producción.</p>
            <p className="mb-6 text-lg text-neutral-20 leading-relaxed hidden lg:block">He colaborado en proyectos para los sectores público y privado, fortaleciendo mis habilidades técnicas y mi enfoque en la creación de aplicaciones escalables, eficientes y de alta calidad. Siempre busco aprender nuevas tecnologías y asumir desafíos que impulsen mi crecimiento profesional.</p>
            <div className="w-full flex justify-start items-center">
              <Link className="bg-primary text-white active:bg-primary-70 hover:bg-primary-80 group/link px-10 py-3 lg:text-base lg:px-12 lg:py-3 rounded-none flex justify-center items-center transition-all duration-300" href="/proyectos">
                Ver Proyectos <span className="transition-all duration-300 group-hover/link:translate-x-1 ps-2"><ArrowForward className="text-white" fontSize="small"/></span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      {/* foto de mi */}
      <div className="p-4 flex justify-center items-center md:hidden">
        <Image
          className="rounded-2xl w-40 h-40 sm:w-56 sm:h-56 object-cover"
          src={davidImage}
          alt="DG"
        />
      </div>
      <div className="w-full md:hidden">
        {/* seccion sobre mi */}
        <div className="w-full px-6 my-6 sm:px-12 md:px-16">
          <div className="w-full text-center py-2">
            <h3 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-primary">Hola soy David, soy un Desarrollador Full-Stack apasionado por la claridad.</h3>
          </div>
          <div className="w-full text-center">
            <p className="text-center text-sm sm:text-base md:text-lg text-neutral-20">Transformo ideas complejas en soluciones digitales elegantes y eficientes. Mi enfoque se basa en la transparencia técnica y el minimalismo funcional.</p>
          </div>
        </div>

        {/* seccion historias */}
        <div className="p-6 m-4 bg-neutral-95 rounded-2xl sm:mx-12 sm:my-6 sm:p-8">
          <div className="flex w-full justify-start items-center mb-3">
            <AutoStoriesOutlined className="text-primary me-2" />
            <h3 className="font-bold text-primary text-base sm:text-lg">Mi Historia</h3>
          </div>
          <p className="text-neutral-20 text-start text-sm sm:text-base md:text-lg">
            Con poco más de 2 años de experiencia, me he especializado en construir arquitecturas escalables. Creo que el código no solo debe funcionar, sino que debe ser una obra de ingeniería legible y mantenible para el futuro.
          </p>
        </div>

        {/* seccion de tecnologias */}
        <div className="p-6 m-4 h-fit bg-neutral-95 rounded-2xl items-center justify-center flex flex-col sm:mx-12 sm:my-6 sm:p-8">
          <div className="flex w-full justify-start items-center mb-3">
            <TerminalOutlined className="me-2 text-primary" />
            <h3 className="font-bold text-primary text-base sm:text-lg">Tecnologías</h3>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="text-secondary-40 font-semibold border-neutral-90 rounded-full px-3 py-1 text-xs sm:text-sm bg-neutral-90">TypeScript</span>
            <span className="text-secondary-40 font-semibold border-neutral-90 rounded-full px-3 py-1 text-xs sm:text-sm bg-neutral-90">Angular</span>
            <span className="text-secondary-40 font-semibold border-neutral-90 rounded-full px-3 py-1 text-xs sm:text-sm bg-neutral-90">HTML</span>
            <span className="text-secondary-40 font-semibold border-neutral-90 rounded-full px-3 py-1 text-xs sm:text-sm bg-neutral-90">CSS</span>
            <span className="text-secondary-40 font-semibold border-neutral-90 rounded-full px-3 py-1 text-xs sm:text-sm bg-neutral-90">Tailwind CSS</span>
            <span className="text-secondary-40 font-semibold border-neutral-90 rounded-full px-3 py-1 text-xs sm:text-sm bg-neutral-90">Next.js</span>
            <span className="text-secondary-40 font-semibold border-neutral-90 rounded-full px-3 py-1 text-xs sm:text-sm bg-neutral-90">PHP</span>
            <span className="text-secondary-40 font-semibold border-neutral-90 rounded-full px-3 py-1 text-xs sm:text-sm bg-neutral-90">Laravel</span>
            <span className="text-secondary-40 font-semibold border-neutral-90 rounded-full px-3 py-1 text-xs sm:text-sm bg-neutral-90">PostgreSQL</span>
            <span className="text-secondary-40 font-semibold border-neutral-90 rounded-full px-3 py-1 text-xs sm:text-sm bg-neutral-90">SQL Server</span>
            <span className="text-secondary-40 font-semibold border-neutral-90 rounded-full px-3 py-1 text-xs sm:text-sm bg-neutral-90">MySQL</span>
          </div>
        </div>

        {/* seccion proyectos */}
        <div className="p-6 m-4 bg-primary rounded-2xl sm:mx-12 sm:my-6 sm:p-8">
          <h3 className="text-white text-lg sm:text-xl font-bold">
            ¿Listo para ver mi trabajo en acción?
          </h3>
          <div className="my-3">
            <Link className="text-white active:bg-primary-70 hover:bg-primary-80 rounded-lg px-6 py-2 text-sm sm:text-base transition-all duration-100" href="/proyectos">
              VER PROYECTOS <ArrowForward className="text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
}