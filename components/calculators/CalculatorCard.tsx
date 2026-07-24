import { LucideIcon } from "lucide-react";

interface CalculatorCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  color?: string;
}

export default function CalculatorCard({
  title,
  value,
  icon: Icon,
  color = "bg-white",
}: CalculatorCardProps) {
  return (
    <div className={`${color} rounded-2xl border border-slate-200 p-6 shadow-sm`}>
      <div className="mb-4 flex items-center gap-3">
        <div className="rounded-xl bg-white/70 p-3">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>

        <h3 className="font-semibold">{title}</h3>
      </div>

      <p className="text-5xl font-bold whitespace-nowrap">
  {value}
</p>
    </div>
  );
}