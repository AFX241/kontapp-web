import { CONFIG } from "./config";

export const UIT = CONFIG.UIT;

export interface QuintaInput {
  sueldo: number;
  gratificaciones: number;
  bonificacion: number;
  asignacionFamiliar: boolean;
  horasExtras: number;
  bonos: number;
  mesIngreso: number;
  mesCalculo: number;
}

export interface QuintaResultado {
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
}

export function calcularImpuesto(rentaNeta: number): number {
  let impuesto = 0;
  let restante = rentaNeta;

  const escalas = [
    { limite: 5 * UIT, tasa: 0.08 },
    { limite: 15 * UIT, tasa: 0.14 },
    { limite: 15 * UIT, tasa: 0.17 },
    { limite: 10 * UIT, tasa: 0.20 },
    { limite: Infinity, tasa: 0.30 },
  ];

  for (const escala of escalas) {
    const monto = Math.min(restante, escala.limite);

    if (monto <= 0) break;

    impuesto += monto * escala.tasa;
    restante -= monto;
  }

  return impuesto;
}

/**
 * Meses pendientes para distribuir la retención.
 * Enero = 12
 * Febrero = 11
 * ...
 * Diciembre = 1
 */
function obtenerMesesPendientes(mesCalculo: number): number {
  return Math.max(13 - mesCalculo, 1);
}

export function calcularQuinta(data: QuintaInput): QuintaResultado {
  const asignacion = data.asignacionFamiliar
    ? CONFIG.ASIGNACION_FAMILIAR
    : 0;

  // Meses trabajados desde el ingreso
  const mesesTrabajados = 13 - data.mesIngreso;

  // Remuneración mensual computable
  const sueldoTotal =
    data.sueldo +
    asignacion +
    data.horasExtras +
    data.bonos;

  // Total de sueldos del año
  const ingresoSueldos =
    sueldoTotal * mesesTrabajados;

  // Gratificaciones
  const ingresoGrati =
    data.sueldo * data.gratificaciones;

  // Bonificación extraordinaria
  const ingresoBono =
    ingresoGrati * (data.bonificacion / 100);

  // Ingreso anual proyectado
  const ingresoAnual =
    ingresoSueldos +
    ingresoGrati +
    ingresoBono;

  // Renta neta
  const deduccionUIT = UIT * 7;

  const rentaNeta = Math.max(
    ingresoAnual - deduccionUIT,
    0
  );

  // Impuesto anual
  const impuesto = calcularImpuesto(rentaNeta);

  // Meses restantes para distribuir la retención
  const mesesPendientes = obtenerMesesPendientes(
    data.mesCalculo
  );

  // Retención mensual proyectada
  const retencionMensual =
    impuesto / mesesPendientes;

  return {
    ingresoSueldos,
    ingresoGrati,
    ingresoBono,
    asignacionFamiliar: asignacion * mesesTrabajados,
    horasExtras: data.horasExtras * mesesTrabajados,
    bonos: data.bonos * mesesTrabajados,
    ingresoAnual,
    deduccionUIT,
    rentaNeta,
    impuesto,
    retencionMensual,
  };
}