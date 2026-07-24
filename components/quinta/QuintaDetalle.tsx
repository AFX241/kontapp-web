import { formatoMoneda } from "../../lib/format";

interface QuintaDetalleProps {
  detalle: {
    ingresoSueldos: number;
    ingresoGrati: number;
    ingresoBono: number;
    asignacionFamiliar: number;
    horasExtras: number;
    bonos: number;
    ingresoAnual: number;
    deduccionUIT: number;
    rentaNeta: number;
    impuesto: number;
    retencionMensual: number;
  };
}

export default function QuintaDetalle({
  detalle,
}: QuintaDetalleProps) {
  const moneda = (valor: number) =>
    new Intl.NumberFormat("es-PE", {
      style: "currency",
      currency: "PEN",
    }).format(valor);

  const filas = [
    ["Sueldos", detalle.ingresoSueldos],
    ["Gratificaciones", detalle.ingresoGrati],
    ["Bonificación Extraordinaria", detalle.ingresoBono],
    ["Asignación Familiar", detalle.asignacionFamiliar],
    ["Horas Extras", detalle.horasExtras],
    ["Bonos / Comisiones", detalle.bonos],
    ["Ingreso Bruto Anual", detalle.ingresoAnual],
    ["Deducción 7 UIT", detalle.deduccionUIT],
    ["Renta Neta", detalle.rentaNeta],
    ["Impuesto", detalle.impuesto],
    ["Retención Mensual", detalle.retencionMensual],
  ];

  return (
    <div className="mt-10 rounded-2xl border bg-white shadow-sm">
      <table className="w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-4 text-left">Concepto</th>
            <th className="p-4 text-right">Monto</th>
          </tr>
        </thead>

        <tbody>
          {filas.map(([concepto, monto]) => (
            <tr
              key={String(concepto)}
              className="border-t"
            >
              <td className="p-4">{concepto}</td>

              <td className="p-4 text-right font-semibold">
                {moneda(Number(monto))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}