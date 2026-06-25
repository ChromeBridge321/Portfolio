import Image from "next/image";
import davidImage from "../assets/david.jpeg";
import { AutoStoriesOutlined } from "@mui/icons-material";
import { TerminalOutlined } from "@mui/icons-material";
import { ArrowForward } from "@mui/icons-material";
export default function Home() {
  return (
    <div className=" md:bg-cyan-100 lg:bg-green-100 xl:bg-fuchsia-100">

      {/* Desktop */}
      <div className="hidden md:block">
        <div className="p-4 flex justify-center items-center">
          <Image
            className="rounded-2xl h-52 w-52 sm:h-72 sm:w-72 md:rounded-none"
            src={davidImage}
            alt="DG"
          />
        </div>
        <div>
          <h3>Desarrollador Full-Stack</h3>
          <p>Hola, soy un desarrollador enfocado en la precisión técnica y la claridad visual. Mi trabajo consiste en transformar problemas complejos en interfaces intuitivas que priorizan la experiencia del usuario y la eficiencia del código.</p>
          <p>Con más de cinco años de experiencia en el ecosistema de JavaScript y arquitecturas en la nube, ayudo a empresas tecnológicas a escalar sus productos digitales con una visión minimalista y minimalista.</p>
        </div>
        <div>
          <button className="bg-primary text-white active:bg-primary-70 hover:bg-primary-80  rounded-2xl p-2 transition-all duration-100">Ver Proyectos <ArrowForward className="text-white hidden md:block" /></button>
        </div>

        <div>
          <button className="text-primary active:bg-primary-70 hover:bg-primary-80  rounded-2xl p-2 transition-all duration-100">Saber más</button>
        </div>
      </div>

      {/* Mobile */}
      {/* foto de mi*/}
      <div className="p-4 flex justify-center items-center md:hidden">
        <Image
          className="rounded-2xl h-52 w-52 sm:h-72 sm:w-72 md:rounded-none hidden md:block"
          src={davidImage}
          alt="DG"
        />
      </div>
      <div className="w-full md:hidden">
        {/* seccion sobre mi */}
        <div className="w-full px-8 my-6 sm:px-16">
          <div className="w-full text-center py-2">
            <h3 className="text-center text-2xl font-bold text-primary" >Hola soy David, soy un Desarrollador Full-Stack apasionado por la claridad.</h3>
          </div>
          <div className="w-full text-center">
            <p className="text-center text-neutral-20">Transformo ideas complejas en soluciones digitales elegantes y eficientes. Mi enfoque se basa en la transparencia técnica y el minimalismo funcional.</p>
          </div>
        </div>

        {/* seccion historias */}
        <div className="p-8 m-4 bg-neutral-95 rounded-2xl sm:mx-20 sm:my-6" >
          <div className="flex w-full justify-start items-center mb-3">
            <AutoStoriesOutlined className="text-primary me-2" />
            <h3 className="font-bold text-primary">
              Mi Historia
            </h3>
          </div>
          <p className="text-neutral-20 text-start">
            Con poco más de 2 años de experiencia, me he especializado en construir arquitecturas escalables. Creo que el código no solo debe funcionar, sino que debe ser una obra de ingeniería legible y mantenible para el futuro.
          </p>
        </div>

        {/* seccion de tecnologias */}
        <div className="p-8 m-4 h-fit bg-neutral-95 rounded-2xl items-center justify-center flex flex-col sm:mx-20 sm:my-6" >
          <div className="flex w-full justify-start items-center mb-3">
            <TerminalOutlined className="me-2 text-primary" />
            <h3 className=" font-bold text-primary">
              Tecnologias
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="text-secondary-40 font-semibold border-neutral-90 rounded-full px-4 py-1 bg-neutral-90">TypeScript</span>
            <span className="text-secondary-40 font-semibold border-neutral-90 rounded-full px-4 py-1 bg-neutral-90">Angular</span>
            <span className="text-secondary-40 font-semibold border-neutral-90 rounded-full px-4 py-1 bg-neutral-90">HTML</span>
            <span className="text-secondary-40 font-semibold border-neutral-90 rounded-full px-4 py-1 bg-neutral-90">CSS</span>
            <span className="text-secondary-40 font-semibold border-neutral-90 rounded-full px-4 py-1 bg-neutral-90">Tailwind CSS</span>
            <span className="text-secondary-40 font-semibold border-neutral-90 rounded-full px-4 py-1 bg-neutral-90">Next.js</span>
            <span className="text-secondary-40 font-semibold border-neutral-90 rounded-full px-4 py-1 bg-neutral-90">PHP</span>
            <span className="text-secondary-40 font-semibold border-neutral-90 rounded-full px-4 py-1 bg-neutral-90">Laravel</span>
            <span className="text-secondary-40 font-semibold border-neutral-90 rounded-full px-4 py-1 bg-neutral-90">PostgreSQL</span>
            <span className="text-secondary-40 font-semibold border-neutral-90 rounded-full px-4 py-1 bg-neutral-90">SQL Server</span>
            <span className="text-secondary-40 font-semibold border-neutral-90 rounded-full px-4 py-1 bg-neutral-90">MySQL</span>
          </div>
        </div>

        {/* seccion proyectos */}
        <div className="p-8 m-4 bg-primary rounded-2xl sm:mx-20 sm:my-6" >
          <h3 className="text-white text-xl font-bold">
            ¿Listo para ver mi trabajo en acción?
          </h3>
          <div className="my-2 ">
            <button className="text-white active:bg-primary-70 hover:bg-primary-80  rounded-2xl p-2 transition-all duration-100">VER PROYECTOS <ArrowForward className="text-white" /></button>
          </div>
        </div>
      </div>
    </div>

  );
}
