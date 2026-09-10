import type { StaticImageData } from "next/image"
import calculadoraImg from "@/assets/proyectos/calculadora.webp"
import garagemeet from "@/assets/proyectos/garagemeet.webp"
import poelmc from "@/assets/proyectos/poelmc.webp"
import topologix from "@/assets/proyectos/topologix.webp"
import reporteador from "@/assets/proyectos/reporteador.webp"
import infaadep from '@/assets/proyectos/infaadep.webp';

type Proyecto = {
    id: number
    nombre: string
    translationKey: string
    tecnologias: string[]
    imageUrl: StaticImageData | string | null
    url: string
    estado?: string
}

export const proyectos: Proyecto[] = [
    {
        id: 1,
        nombre: "POELMC",
        translationKey: "proyectos.data.poelmc",
        tecnologias: ["Angular", "Tailwind"],
        imageUrl: poelmc,
        url: "https://poelm.villahermosa.gob.mx/"
    },
    {
        id: 2,
        nombre: "CALCULADORA ESTADISTICA",
        translationKey: "proyectos.data.calculadora",
        tecnologias: ["Laravel", "HTML", "CSS"],
        imageUrl: calculadoraImg,
        url: "https://calculadoras-de-estadistica-plataforma.onrender.com/"
    },
    {
        id: 3,
        nombre: "TOPOLOGIX",
        translationKey: "proyectos.data.topologix",
        tecnologias: ["JavaScript", "HTML", "CSS"],
        imageUrl: topologix,
        url: "https://topologix.onrender.com/welcome.html"
    },
    {
        id: 4,
        nombre: "REPORTEADOR MTC",
        translationKey: "proyectos.data.reporteador",
        tecnologias: ["Angular", "Laravel","Tailwind"],
        imageUrl: reporteador,
        url: ""
    },
    {
        id: 5,
        nombre: "GARAGEMEET",
        translationKey: "proyectos.data.garagemeet",
        tecnologias: ["Angular", "Laravel", "Tailwind"],
        imageUrl: garagemeet,
        url: ""
    },
    {
        id: 6,
        nombre: "INFAADEP RRHH",
        translationKey: "proyectos.data.infaadep",
        tecnologias: ["Angular", "Tailwind"],
        imageUrl: infaadep,
        url: "",
        estado: "desarrollo"
    }
]
