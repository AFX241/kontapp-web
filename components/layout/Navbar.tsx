import Link from "next/link";
import { Calculator } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Calculator className="h-7 w-7 text-blue-600" />
          <span className="text-xl font-bold text-slate-800">
            KontApp
          </span>
        </Link>

        <nav className="hidden gap-8 md:flex">
          <Link href="/">Inicio</Link>
          <Link href="/">Herramientas</Link>
          <Link href="/">SUNAT</Link>
          <Link href="/">Recursos</Link>
        </nav>

        <button className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
          Iniciar sesión
        </button>
      </div>
    </header>
  );
}