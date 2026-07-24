"use client";

import { useState } from "react";
import {
  Calculator,
  Copy,
  Receipt,
  RotateCcw,
  Wallet,
} from "lucide-react";

import CalculatorCard from "../../components/calculators/CalculatorCard";
import { CONFIG } from "../../lib/config";

export default function CalculadoraIGV() {
  const [modo, setModo] = useState<"con" | "sin">("con");
  const [monto, setMonto] = useState("");

  const [tasaIGV, setTasaIGV] = useState(
    CONFIG.TASAS_IGV[0].valor
  );

  const [tasaPersonalizada, setTasaPersonalizada] = useState("18");

  const valor = Number(monto) || 0;

  const tasa =
    tasaIGV === -1
      ? Number(tasaPersonalizada) || 0
      : tasaIGV;

  const porcentaje = tasa / 100;

  let subtotal = 0;
  let igv = 0;
  let total = 0;

  if (modo === "con") {
    total = valor;
    subtotal = total / (1 + porcentaje);
    igv = total - subtotal;
  } else {
    subtotal = valor;
    igv = subtotal * porcentaje;
    total = subtotal + igv;
  }

  const limpiar = () => {
    setMonto("");
    setTasaIGV(CONFIG.TASAS_IGV[0].valor);
    setTasaPersonalizada("18");
  };

  const copiar = async () => {
    const texto = `Base Imponible: S/ ${subtotal.toFixed(2)}
IGV (${tasa}%): S/ ${igv.toFixed(2)}
Total: S/ ${total.toFixed(2)}`;

    try {
      await navigator.clipboard.writeText(texto);
      alert("Resultados copiados.");
    } catch {
      alert("No se pudo copiar.");
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-lg">

        <h1 className="text-4xl font-bold text-slate-900">
          Calculadora de IGV
        </h1>

        <p className="mt-2 text-slate-500">
          Calcula montos con cualquier tasa de IGV.
        </p>

        {/* Tasa */}
        <div className="mt-8">
          <label className="mb-2 block font-medium">
            Tasa de IGV
          </label>

          <select
            value={tasaIGV}
            onChange={(e) =>
              setTasaIGV(Number(e.target.value))
            }
            className="w-full rounded-xl border border-slate-300 p-4"
          >
            {CONFIG.TASAS_IGV.map((item) => (
              <option
                key={item.valor}
                value={item.valor}
              >
                {item.nombre}
              </option>
            ))}
          </select>

          {tasaIGV === -1 && (
            <div className="mt-4">
              <label className="mb-2 block font-medium">
                Tasa personalizada (%)
              </label>

              <input
                type="number"
                step="0.01"
                value={tasaPersonalizada}
                onChange={(e) =>
                  setTasaPersonalizada(e.target.value)
                }
                className="w-full rounded-xl border border-slate-300 p-4"
                placeholder="Ejemplo: 15"
              />
            </div>
          )}
        </div>

        {/* Tipo */}
        <div className="mt-8">
          <label className="mb-2 block font-medium">
            Tipo de cálculo
          </label>

          <select
            value={modo}
            onChange={(e) =>
              setModo(e.target.value as "con" | "sin")
            }
            className="w-full rounded-xl border border-slate-300 p-4"
          >
            <option value="con">Monto con IGV</option>
            <option value="sin">Monto sin IGV</option>
          </select>
        </div>

        {/* Monto */}
        <div className="mt-8">
          <label className="mb-2 block font-medium">
            {modo === "con"
              ? "Monto con IGV"
              : "Monto sin IGV"}
          </label>

          <input
            type="number"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            placeholder="0.00"
            className="w-full rounded-xl border border-slate-300 px-5 py-4 text-xl"
          />
        </div>

        {/* Botones */}
        <div className="mt-8 flex gap-4">

          <button
            onClick={copiar}
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
          >
            <Copy size={18} />
            Copiar
          </button>

          <button
            onClick={limpiar}
            className="flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 hover:bg-slate-100"
          >
            <RotateCcw size={18} />
            Limpiar
          </button>

        </div>

        {/* Resultados */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">

          <CalculatorCard
            title="Base Imponible"
            value={`S/ ${subtotal.toFixed(2)}`}
            icon={Receipt}
          />

          <CalculatorCard
            title={`IGV (${tasa}%)`}
            value={`S/ ${igv.toFixed(2)}`}
            icon={Calculator}
            color="bg-blue-50"
          />

          <CalculatorCard
            title="Total"
            value={`S/ ${total.toFixed(2)}`}
            icon={Wallet}
            color="bg-emerald-50"
          />

        </div>

      </div>
    </main>
  );

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

}