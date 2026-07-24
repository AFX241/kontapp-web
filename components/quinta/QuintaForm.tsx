import { MESES } from "../../lib/meses";

interface QuintaFormProps {
  sueldo: string;
  setSueldo: (value: string) => void;

  gratificaciones: string;
  setGratificaciones: (value: string) => void;

  bonificacion: string;
  setBonificacion: (value: string) => void;

  asignacion: string;
  setAsignacion: (value: string) => void;

  horasExtras: string;
  setHorasExtras: (value: string) => void;

  bonos: string;
  setBonos: (value: string) => void;

  mesIngreso: number;
  setMesIngreso: (value: number) => void;

mesCalculo: number;
setMesCalculo: (value: number) => void;

}

export default function QuintaForm({
  sueldo,
  setSueldo,
  gratificaciones,
  setGratificaciones,
  bonificacion,
  setBonificacion,
  asignacion,
  setAsignacion,
  horasExtras,
  setHorasExtras,
  bonos,
  setBonos,
  mesIngreso,
  setMesIngreso,
mesCalculo,
setMesCalculo,
}: QuintaFormProps) {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-3">

      {/* Sueldo */}
      <div>
        <label className="mb-2 block font-medium">
          Sueldo mensual
        </label>

        <input
          type="number"
          value={sueldo}
          onChange={(e) => setSueldo(e.target.value)}
          className="w-full rounded-xl border border-slate-300 p-4"
        />
      </div>

      {/* Gratificaciones */}
      <div>
        <label className="mb-2 block font-medium">
          Gratificaciones
        </label>

        <select
          value={gratificaciones}
          onChange={(e) => setGratificaciones(e.target.value)}
          className="w-full rounded-xl border border-slate-300 p-4"
        >
          <option value="2">2</option>
          <option value="1">1</option>
          <option value="0">0</option>
        </select>
      </div>

      {/* Bonificación */}
      <div>
        <label className="mb-2 block font-medium">
          Bonificación Extraordinaria
        </label>

        <select
          value={bonificacion}
          onChange={(e) => setBonificacion(e.target.value)}
          className="w-full rounded-xl border border-slate-300 p-4"
        >
          <option value="9">9 % (EsSalud)</option>
          <option value="6.75">6.75 % (EPS)</option>
          <option value="0">0 %</option>
        </select>
      </div>

      {/* Asignación Familiar */}
      <div>
        <label className="mb-2 block font-medium">
          Asignación Familiar
        </label>

        <select
          value={asignacion}
          onChange={(e) => setAsignacion(e.target.value)}
          className="w-full rounded-xl border border-slate-300 p-4"
        >
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Horas Extras */}
      <div>
        <label className="mb-2 block font-medium">
          Horas Extras (Promedio mensual)
        </label>

        <input
          type="number"
          value={horasExtras}
          onChange={(e) => setHorasExtras(e.target.value)}
          className="w-full rounded-xl border border-slate-300 p-4"
        />
      </div>

      {/* Bonos */}
      <div>
        <label className="mb-2 block font-medium">
          Bonos / Comisiones
        </label>

        <input
          type="number"
          value={bonos}
          onChange={(e) => setBonos(e.target.value)}
          className="w-full rounded-xl border border-slate-300 p-4"
        />
      </div>

      {/* Mes de ingreso */}
      <div>
        <label className="mb-2 block font-medium">
          Mes de ingreso
        </label>

        <select
          value={mesIngreso}
          onChange={(e) => setMesIngreso(Number(e.target.value))}
          className="w-full rounded-xl border border-slate-300 p-4"
        >
          {MESES.map((mes) => (
            <option key={mes.value} value={mes.value}>
              {mes.label}
            </option>
          ))}
        </select>
      </div>

      <div>
  <label className="mb-2 block font-medium">
    Mes de cálculo
  </label>

  <select
    value={mesCalculo}
    onChange={(e) => setMesCalculo(Number(e.target.value))}
    className="w-full rounded-xl border border-slate-300 p-4"
  >
    {MESES.map((mes) => (
      <option key={mes.value} value={mes.value}>
        {mes.label}
      </option>
    ))}
  </select>
</div>

    </div>
  );
}