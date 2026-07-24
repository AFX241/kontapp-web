import { formatoMoneda } from "../../lib/format";

interface QuintaResultadosProps {
  ingresoAnual: number;
  rentaNeta: number;
  impuesto: number;
  retencionMensual: number;
}

export default function QuintaResultados({
  ingresoAnual,
  rentaNeta,
  impuesto,
  retencionMensual,
}: QuintaResultadosProps) {
  const formatoMoneda = (valor: number) =>
    new Intl.NumberFormat("es-PE", {
      style: "currency",
      currency: "PEN",
      minimumFractionDigits: 2,
    }).format(valor);

  const cards = [
    {
      titulo: "Ingreso Anual",
      valor: ingresoAnual,
      color: "bg-blue-50",
    },
    {
      titulo: "Renta Neta",
      valor: rentaNeta,
      color: "bg-emerald-50",
    },
    {
      titulo: "Impuesto Anual Estimado",
      valor: impuesto,
      color: "bg-amber-50",
    },
    {
      titulo: "Retención Mensual Estimada",
      valor: retencionMensual,
      color: "bg-purple-50",
    },
  ];

  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2">
      {cards.map((card) => (
        <div
          key={card.titulo}
          className={`${card.color} rounded-2xl p-8 shadow-sm`}
        >
          <p className="text-sm text-slate-500">
            {card.titulo}
          </p>

          <h2 className="mt-3 text-4xl font-bold whitespace-nowrap">
            {formatoMoneda(card.valor)}
          </h2>
        </div>
      ))}
    </div>
  );
}