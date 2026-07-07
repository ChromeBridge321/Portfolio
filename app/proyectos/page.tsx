"use client"
import Image from "next/image"
import { proyectos } from "@/DB/proyectos"
import Link from "next/link"
import { ArrowForward } from "@mui/icons-material"
export default function Proyectos() {
    return (
        <div className="min-h-screen flex justify-center items- py-16">
            <div className=" w-268 mx-8 xl:mx-0">
                <header className="mb-16 text-center max-w-2xl mx-auto animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
                        <span className="underline">Pro</span>yectos
                    </h1>
                    <p className="text-lg text-secondary-30">Una selección curada de trabajos que demuestran mi enfoque técnico y atención al detalle. Cada pieza refleja un compromiso con la excelencia en el código.</p>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-6 justify-items-center animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                    {proyectos.map((proyecto) => (
                        <div key={proyecto.id} className={` my-2 rounded-xl md:rounded-none overflow-hidden w-full flex flex-col group transition-all duration-300 hover:-translate-y-2 shadow-sm shadow-neutral-80 hover:shadow-md xl:w-85 ${proyecto.imageUrl}`}>
                            <div className="relative">
                                <Image
                                    className={`w-full h-auto transform transition-transform duration-700 group-hover:scale-105 ${proyecto.imageUrl == "/" ? "hidden" : "block"}`}
                                    src={proyecto.imageUrl}
                                    alt={proyecto.nombre}
                                    width={800}
                                    height={192}
                                    quality={100}
                                />
                                <div className={`transform transition-transform duration-700 group-hover:scale-105 absolute inset-0 bg-black pointer-events-none opacity-10 ${proyecto.imageUrl == "/" ? "hidden" : "block"}`}></div>
                            </div>
                            <div className={`w-full min-h-40 sm:min-h-48 lg:min-h-62 xl:min-h-48 2xl:min-h-54 bg-neutral-90 text-neutral-40 text-center font-bold text-2xl sm:text-3xl lg:text-4xl justify-center items-center flex ${proyecto.imageUrl === "/" ? "flex" : "hidden"}`}>
                                <span className="transform transition-transform duration-700 group-hover:scale-110 cursor-default">En Desarrollo</span>
                            </div>
                            <div className="p-4 sm:p-6 flex flex-col flex-1 md:my-4">
                                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                                    {proyecto.tecnologias.map((tech, i) => (
                                        <span key={i} className="text-xs  text-secondary-40 font-medium rounded-full px-3 py-1 lg:px-sm lg:py-1  bg-neutral-90 cursor-default">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <h2 className="text-xl font-bold text-primary mb-1.5 sm:mb-2 cursor-default">{proyecto.nombre}</h2>
                                <p className="text-md text-secondary-40 mb-3 sm:mb-4 flex-1 cursor-default">{proyecto.descripcion}</p>
                            </div>
                            <div className="flex justify-start pb-4 sm:pb-5 px-4 sm:px-5">
                                <Link
                                    className={`py-1.5 sm:py-2 px-4 sm:px-6 text-sm sm:text-md group/link font-bold flex flex-row justify-center items-center ${proyecto.url === "" ? "hidden" : "block"}`} href={proyecto.url}>
                                    Ver Proyecto <span className="transition-all duration-300 group-hover/link:translate-x-1 ps-1"><ArrowForward fontSize="small" /></span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}