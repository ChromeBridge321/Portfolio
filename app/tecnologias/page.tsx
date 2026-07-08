"use client"
import {
    Devices, Javascript, Code, DataObject, Css,
    Terminal, Storage, CloudDone, Api, Contacts, Hub,
    Architecture, Draw, Animation, Gif, TrendingUp

} from "@mui/icons-material"
import GitHubIcon from '@mui/icons-material/GitHub';
import BreakP from "@/components/breakpoints/breakpoint";
import { useI18n } from "@/lib/i18n/context";

function TechCard({ icon, label }: { icon: React.ReactNode; label: string }) {
    return (
        <div className="tech-card bg-white border border-neutral-90 p-4 rounded-lg flex flex-col items-center gap-2 group">
            <div className="w-12 h-12 flex items-center justify-center text-primary bg-primary/5 rounded-md">
                <span className="text-3xl">{icon}</span>
            </div>
            <span className="text-sm font-medium text-secondary-40 group-hover:text-primary transition-colors">{label}</span>
        </div>
    )
}

function TechCardHorizontal({ icon, label }: { icon: React.ReactNode; label: string }) {
    return (
        <div className="tech-card bg-white border border-neutral-90 p-4 rounded-lg flex items-center gap-3">
            <span className="text-secondary-40">{icon}</span>
            <span className="text-sm font-medium text-secondary-40">{label}</span>
        </div>
    )
}

function ToolCard({ icon, label, progress }: { icon: React.ReactNode; label: string; progress: string }) {
    return (
        <div className="flex items-center justify-between p-4 bg-white border border-neutral-90 rounded-lg tech-card">
            <div className="flex items-center gap-3">
                <span className="text-primary">{icon}</span>
                <span className="text-sm font-medium">{label}</span>
            </div>
            <div className="w-32 h-1.5 bg-neutral-90 rounded-md overflow-hidden">
                <div className={`h-full bg-primary ${progress}`}></div>
            </div>
        </div>
    )
}

export default function Tecnologias() {
    const { t } = useI18n();

    return (
        <div className="min-h-screen px-6 py-16 max-w-6xl mx-auto overflow-hidden">
            <header className="mb-16 text-center max-w-2xl mx-auto animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
                    {t("tecnologias.titulo")}
                </h1>
                <p className="text-lg text-secondary-30">
                    {t("tecnologias.subtitulo")}
                </p>
                <BreakP/>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <div className="md:col-span-8 bg-neutral-95 border border-neutral-90 rounded-md p-6 flex flex-col gap-6">
                    <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between">
                        <h2 className="text-2xl lg:text-3xl font-semibold text-primary flex items-center flex-col justify-center text-center sm:flex-row sm:justify-normal gap-2">
                            <Devices className="text-primary" />
                            {t("tecnologias.frontend")}
                        </h2>
                        <span className="text-xs font-medium px-4 py-1 bg-primary/5 text-primary rounded-md uppercase tracking-wider">
                            {t("tecnologias.intermedio")}
                        </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <TechCard icon={<Javascript />} label="JavaScript" />
                        <TechCard icon={<Code />} label="TypeScript" />
                        <TechCard icon={<DataObject />} label="Angular" />
                        <TechCard icon={<Css />} label="Tailwind CSS" />
                    </div>
                    <p className="text-base text-secondary-30 mt-2">
                        {t("tecnologias.frontendDesc")}
                    </p>
                </div>

                <div className="md:col-span-4 bg-primary text-white rounded-md p-6 flex flex-col justify-between relative overflow-hidden group">
                    <div className="relative z-10">
                        <h2 className="text-xl font-semibold mb-4">{t("tecnologias.explorandoAhora")}</h2>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-4 py-1 bg-white/10 rounded-full text-xs font-medium">Next.JS</span>
                            <span className="px-4 py-1 bg-white/10 rounded-full text-xs font-medium">SpringBoot</span>
                            <span className="px-4 py-1 bg-white/10 rounded-full text-xs font-medium">Docker</span>
                        </div>
                    </div>
                    <div className="mt-8 relative z-10">
                        <p className="text-base opacity-80 mb-6">
                            {t("tecnologias.explorandoDesc")}
                        </p>
                        <div className="flex items-center gap-2 text-white text-sm font-medium">
                            <TrendingUp />
                            {t("tecnologias.crecimiento")}
                        </div>
                    </div>
                    <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-md blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                </div>

                <div className="md:col-span-6 bg-neutral-95 border border-neutral-90 rounded-md p-6 flex flex-col gap-6">
                    <h2 className="text-2xl md:text-3xl font-semibold text-primary flex items-center gap-2">
                        <Storage className="text-primary" />
                        {t("tecnologias.backend")}
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <TechCardHorizontal icon={<Terminal />} label="Laravel" />
                        <TechCardHorizontal icon={<CloudDone />} label="AWS" />
                        <TechCardHorizontal icon={<Api />} label="REST" />
                        <TechCardHorizontal icon={<Storage />} label="PostgreSQL" />
                        <TechCardHorizontal icon={<Storage />} label="SQLServer" />
                        <TechCardHorizontal icon={<Storage />} label="MariaDB" />
                    </div>
                </div>

                <div className="md:col-span-6 bg-neutral-95 border border-neutral-90 rounded-md p-6 flex flex-col gap-6">
                    <h2 className="text-2xl md:text-3xl font-semibold text-primary flex items-center gap-2">
                        <Architecture className="text-primary" />
                        {t("tecnologias.herramientas")}
                    </h2>
                    <div className="space-y-4">
                        <ToolCard icon={<Draw />} label="Figma & UI/UX Design" progress="w-2/5" />
                        <ToolCard icon={<GitHubIcon />} label="Git - GitHub" progress="w-[45%]" />
                    </div>
                </div>
            </div>

            <div className="mt-16 pt-8 border-t border-neutral-90 flex flex-col md:flex-row items-center justify-between gap-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <div>
                    <h3 className="text-xl font-semibold text-primary">{t("tecnologias.proyectoEnMente")}</h3>
                    <p className="text-base text-secondary-30">{t("tecnologias.hablemosDesc")}</p>
                </div>
                <button className="bg-primary text-white px-12 py-4 rounded-md text-sm font-medium transition-all hover:bg-primary/90 active:scale-95 shadow-sm">
                    {t("tecnologias.iniciarConversacion")}
                </button>
            </div>
        </div>
    )
}
