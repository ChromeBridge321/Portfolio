"use client";

import { useI18n } from "@/lib/i18n/context";

export default function Footer() {
    const { t } = useI18n();

    return (
        <footer className="bg-neutral-95 border-t border-neutral-90">
            <div className="flex flex-col md:flex-row justify-between items-center py-8 px-6 max-w-6xl mx-auto">
                <span className="text-xs font-medium text-secondary-30">{t("footer.derechos")}</span>
                <div className="flex gap-8 mt-4 md:mt-0">
                    <a className="text-secondary-40 text-xs font-medium opacity-80 hover:opacity-100 hover:text-primary transition-colors" href="https://github.com/ChromeBridge321" target="_blank" rel="noopener noreferrer">Github</a>
                    <a className="text-secondary-40 text-xs font-medium opacity-80 hover:opacity-100 hover:text-primary transition-colors" href="https://www.linkedin.com/in/david-garcia-jeronimo-ba01a1336" target="_blank" rel="noopener noreferrer">Linkedin</a>
                    <a className="text-secondary-40 text-xs font-medium opacity-80 hover:opacity-100 hover:text-primary transition-colors" href="mailto:davidgarcia2809@gmail.com">Mail</a>
                </div>
            </div>
        </footer>
    )
}
