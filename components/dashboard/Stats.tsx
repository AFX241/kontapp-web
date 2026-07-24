import {
  Calculator,
  Clock3,
  CheckCircle2,
  LayoutGrid,
} from "lucide-react";

const stats = [
  {
    title: "Herramientas",
    value: "6",
    icon: LayoutGrid,
  },
  {
    title: "Calculadoras",
    value: "2",
    icon: Calculator,
  },
  {
    title: "Próximamente",
    value: "4",
    icon: Clock3,
  },
  {
    title: "Disponibles",
    value: "2",
    icon: CheckCircle2,
  },
];

export default function Stats() {
  return (
    <section className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
        >
          <item.icon className="mb-4 h-8 w-8 text-blue-600" />

          <h3 className="text-3xl font-bold">{item.value}</h3>

          <p className="mt-2 text-slate-500">{item.title}</p>
        </div>
      ))}
    </section>
  );
}