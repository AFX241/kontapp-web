import {
  Calculator,
  Wallet,
  Landmark,
  Receipt,
  Gift,
  Briefcase,
  DollarSign,
} from "lucide-react";

export const toolCategories = [
  {
    title: "📊 Calculadoras",
    tools: [
      {
        title: "Calculadora IGV",
        description: "Calcula montos con y sin IGV.",
        href: "/calculadora-igv",
        icon: Calculator,
      },
     {
  title: "Quinta Categoría",
  description: "Calcula la retención de renta de quinta categoría.",
  href: "/quinta-categoria",
  icon: Wallet,
},
    ],
  },

  {
    title: "🏛 SUNAT",
    tools: [
      {
        title: "Validar RUC",
        description: "Consulta empresas.",
        href: "#",
        icon: Landmark,
        disabled: true,
      },
      {
        title: "Tipo de Cambio",
        description: "Consulta SUNAT.",
        href: "#",
        icon: DollarSign,
        disabled: true,
      },
    ],
  },

  {
    title: "💼 Laboral",
    tools: [
      {
        title: "CTS",
        description: "Calculadora CTS.",
        href: "#",
        icon: Receipt,
        disabled: true,
      },
      {
        title: "Gratificación",
        description: "Calculadora Gratificación.",
        href: "#",
        icon: Gift,
        disabled: true,
      },
      {
        title: "Liquidación",
        description: "Beneficios laborales.",
        href: "#",
        icon: Briefcase,
        disabled: true,
      },
    ],
  },
];