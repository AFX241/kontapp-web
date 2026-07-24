export function formatoMoneda(valor: number) {
  return new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
    minimumFractionDigits: 2,
  }).format(valor);
}

export function formatoNumero(valor: number) {
  return new Intl.NumberFormat("es-PE").format(valor);
}