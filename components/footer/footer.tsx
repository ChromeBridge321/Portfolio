export default function Footer() {
    return (
        <footer className="bg-neutral-95 border-t border-neutral-90">
            <div className="flex flex-col md:flex-row justify-between items-center py-8 px-6 max-w-6xl mx-auto">
                <span className="text-xs font-medium text-secondary-30">© 2024 Developer Portfolio. All rights reserved.</span>
                <div className="flex gap-8 mt-4 md:mt-0">
                    <a className="text-secondary-40 text-xs font-medium opacity-80 hover:opacity-100 hover:text-primary transition-colors" href="https://github.com/ChromeBridge321">Github</a>
                    <a className="text-secondary-40 text-xs font-medium opacity-80 hover:opacity-100 hover:text-primary transition-colors" href="https://www.linkedin.com/in/david-garcia-jeronimo-ba01a1336">Linkedin</a>
                    <a className="text-secondary-40 text-xs font-medium opacity-80 hover:opacity-100 hover:text-primary transition-colors" href="#">Mail</a>
                </div>
            </div>
        </footer>
    )
}