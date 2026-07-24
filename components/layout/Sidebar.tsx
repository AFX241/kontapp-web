"use client";

import Link from "next/link";
import { Home, Calculator, Landmark, Briefcase } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r bg-white p-6">
      <h2 className="mb-8 text-2xl font-bold text-blue-600">
        KontApp
      </h2>

      <nav className="space-y-6">

        <div>
          <Link
            href="/"
            className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-slate-100"
          >
            <Home size={18} />
            Dashboard
          </Link>
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase text-slate-500">
            Calculadoras
          </p>

          <Link
            href="/calculadora-igv"
            className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-slate-100"
          >
            <Calculator size={18} />
            IGV
          </Link>
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase text-slate-500">
            SUNAT
          </p>

          <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-400">
            <Landmark size={18} />
            Validar RUC
          </a>
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase text-slate-500">
            Laboral
          </p>

          <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-400">
            <Briefcase size={18} />
            Quinta Categoría
          </a>
        </div>

      </nav>
    </aside>
  );
}