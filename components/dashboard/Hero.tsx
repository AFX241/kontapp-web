import { Search } from "lucide-react";

interface HeroProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export default function Hero({
  search,
  onSearchChange,
}: HeroProps) {
  return (
    <section className="py-20 text-center">
      <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
        Bienvenido a KontApp
      </h1>

      <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
        Tu centro de herramientas contables para empresas,
        emprendedores y contadores.
      </p>

      <div className="relative mx-auto mt-10 max-w-xl">
        <Search className="absolute left-4 top-4 h-5 w-5 text-slate-400" />

        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Buscar una herramienta..."
          className="w-full rounded-xl border border-slate-300 py-4 pl-12 pr-4 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600"
        />
      </div>
    </section>
  );
}