"use client";
import Image from "next/image";
import davidImage from "../assets/david.jpeg";
import { AutoStoriesOutlined } from "@mui/icons-material";
import { TerminalOutlined } from "@mui/icons-material";
import { ArrowForward } from "@mui/icons-material";
import Link from "next/link";
import BreakP from "@/components/breakpoints/breakpoint";
import { useI18n } from "@/lib/i18n/context";

export default function Home() {
  const { t } = useI18n();

  return (
    <div className="w-full md:flex md:justify-center md:items-start animate-fade-in-up">
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
            <h3 className="text-primary font-semibold mb-4 text-xl lg:text-2xl xl:text-3xl">{t("home.rol")}</h3>
            <p className="mb-6 text-base text-neutral-20 leading-relaxed lg:hidden">{t("home.introMd")}</p>
            <p className="mb-4 text-lg text-neutral-20 leading-relaxed hidden lg:block">{t("home.introDesktop")}</p>
            <p className="mb-6 text-lg text-neutral-20 leading-relaxed hidden lg:block">{t("home.introDesktop2")}</p>
            <div className="w-full flex justify-start items-center">
              <Link className="bg-primary text-white active:bg-primary-70 hover:bg-primary-80 group/link px-10 py-3 lg:text-base lg:px-12 lg:py-3 rounded-none flex justify-center items-center transition-all duration-300" href="/proyectos">
                {t("home.verProyectos")} <span className="transition-all duration-300 group-hover/link:translate-x-1 ps-2"><ArrowForward className="text-white" fontSize="small" /></span>
              </Link>
            </div>
          </div>
        </div>
      </div>


      <div className="w-full md:hidden animate-fade-in-up">
        {/* Mobile */}
        {/* foto de mi */}
        <div className="p-4 pb-0 flex justify-center items-center">
          <Image
            className="rounded-2xl w-60 h-60 sm:w-80 sm:h-80 object-cover"
            src={davidImage}
            alt="DG"
          />
        </div>
        {/* seccion sobre mi */}
        <div className="w-full px-6 my-6 sm:px-12 md:px-16">
          <div className="w-full text-center py-2">
            <h3 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-primary">{t("home.introMobile")}</h3>
          </div>
        </div>

        {/* seccion historias */}
        <div className="p-6 m-4 bg-neutral-95 rounded-2xl sm:mx-12 sm:my-6 sm:p-8">
          <div className="flex w-full justify-start items-center mb-3">
            <AutoStoriesOutlined className="text-primary me-2" />
            <h3 className="font-bold text-primary text-base sm:text-lg">{t("home.miHistoria")}</h3>
          </div>
          <p className="text-neutral-20 text-start text-sm sm:text-base md:text-lg">
            {t("home.historia")}
          </p>
        </div>

        {/* seccion de tecnologias */}
        <div className="p-6 m-4 h-fit bg-neutral-95 rounded-2xl items-center justify-center flex flex-col sm:mx-12 sm:my-6 sm:p-8">
          <div className="flex w-full justify-start items-center mb-3">
            <TerminalOutlined className="me-2 text-primary" />
            <h3 className="font-bold text-primary text-base sm:text-lg">{t("home.tecnologias")}</h3>
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
            {t("home.listoParaVer")}
          </h3>
          <div className="my-3">
            <Link className="text-white active:bg-primary-70 hover:bg-primary-80 rounded-lg px-6 py-2 text-sm sm:text-base transition-all duration-100" href="/proyectos">
              {t("home.verProyectosBtn")} <ArrowForward className="text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
}
