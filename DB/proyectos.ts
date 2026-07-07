import calculadoraImg from "@/assets/proyectos/calculadora.jpg"
import garagemeet from "@/assets/proyectos/garagemeet.png"
import poelmc from "@/assets/proyectos/poelmc.jpg"
import topologix from "@/assets/proyectos/topologix.jpg"
import reporteador from "@/assets/proyectos/reporteador.jpg"

export const proyectos = [
    {
        id: 1,
        nombre: "POELMC",
        descripcion: "Plataforma para la consulta de uso de suelo dentro del municipio de Centro del estado de Tabasco, México.",
        tecnologias: ["Angular", "Tailwind"],
        imageUrl: poelmc,
        url: "https://poelm.villahermosa.gob.mx/"
    },
    {
        id: 2,
        nombre: "CALCULADORA ESTADISTICA",
        descripcion: "Proyecto escolar con distintas calculadoras estadisticas desde Cuartiles hasta graficas de Pareto",
        tecnologias: ["Laravel", "HTML", "CSS"],
        imageUrl: calculadoraImg,
        url: "https://calculadoras-de-estadistica-plataforma.onrender.com/"
    },
    {
        id: 3,
        nombre: "TOPOLOGIX",
        descripcion: "Proyecto escolar que consiste en un Port Digital del juego de mesa TOPOLOGIX de Djeco",
        tecnologias: ["JavaScript", "HTML", "CSS"],
        imageUrl: topologix,
        url: "https://topologix.onrender.com/welcome.html"
    },
    {
        id: 4,
        nombre: "REPORTEADOR MTC",
        descripcion: "Plataforma para la consulta y descarga de reporte operativos de Motocompresores de pozos petroleros para la toma de deciciones estrategicas",
        tecnologias: ["Angular", "Laravel","Tailwind"],
        imageUrl: reporteador,
        url: ""
    },
    {
        id: 5,
        nombre: "GARAGEMEET",
        descripcion: "Plataforma para la gestion de talleres mecanicos con integracion de Stripe para pagos online, suscripciones y envio de correos",
        tecnologias: ["Angular", "Laravel", "Tailwind"],
        imageUrl: garagemeet,
        url: ""
    },
    {
        id: 6,
        nombre: "INFAADEP RRHH",
        descripcion: "Plataforma para la administracion de recursos humanos, adminisracion de personal, vacantes, bolsa de trabajo, entrevistas, entre otras funciones",
        tecnologias: ["Angular", "Tailwind"],
        imageUrl: "/",
        url: ""
    }
]