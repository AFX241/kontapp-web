"use client";

import { useMemo, useState } from "react";
import QuintaForm from "../../components/quinta/QuintaForm";
import QuintaResultados from "../../components/quinta/QuintaResultados";
import QuintaDetalle from "../../components/quinta/QuintaDetalle";
import { calcularQuinta } from "../../lib/calcularQuinta";

export default function QuintaCategoria() {
  const [sueldo, setSueldo] = useState("");
  const [gratificaciones, setGratificaciones] = useState("2");
  const [bonificacion, setBonificacion] = useState("9");
  const [asignacion, setAsignacion] = useState("no");

  const [horasExtras, setHorasExtras] = useState("");
  const [bonos, setBonos] = useState("");

  const [mesIngreso, setMesIngreso] = useState(1);

  const [mesCalculo, setMesCalculo] = useState(
    new Date().getMonth() + 1
  );

  const resultado = useMemo(() => {
    return calcularQuinta({
      sueldo: Number(sueldo) || 0,
      gratificaciones: Number(gratificaciones),
      bonificacion: Number(bonificacion),
      asignacionFamiliar: asignacion === "si",
      horasExtras: Number(horasExtras) || 0,
      bonos: Number(bonos) || 0,
      mesIngreso,
      mesCalculo,
    });
  }, [
    sueldo,
    gratificaciones,
    bonificacion,
    asignacion,
    horasExtras,
    bonos,
    mesIngreso,
    mesCalculo,
  ]);

  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white p-10 shadow-xl">

        <h1 className="text-4xl font-bold text-slate-900">
          Calculadora Quinta Categoría
        </h1>

        <p className="mt-2 text-slate-500">
          Proyección anual de ingresos.
        </p>

        <QuintaForm
          sueldo={sueldo}
          setSueldo={setSueldo}
          gratificaciones={gratificaciones}
          setGratificaciones={setGratificaciones}
          bonificacion={bonificacion}
          setBonificacion={setBonificacion}
          asignacion={asignacion}
          setAsignacion={setAsignacion}
          horasExtras={horasExtras}
          setHorasExtras={setHorasExtras}
          bonos={bonos}
          setBonos={setBonos}
          mesIngreso={mesIngreso}
          setMesIngreso={setMesIngreso}
          mesCalculo={mesCalculo}
          setMesCalculo={setMesCalculo}
        />

        <QuintaResultados
          ingresoAnual={resultado.ingresoAnual}
          rentaNeta={resultado.rentaNeta}
          impuesto={resultado.impuesto}
          retencionMensual={resultado.retencionMensual}
        />

        <QuintaDetalle detalle={resultado} />

      </div>
    </main>
  );
}