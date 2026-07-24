import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface ToolCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  disabled?: boolean;
}

export default function ToolCard({
  title,
  description,
  href,
  icon: Icon,
  disabled = false,
}: ToolCardProps) {
  const content = (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 inline-flex rounded-xl bg-blue-100 p-3">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>

      <h3 className="text-lg font-semibold text-slate-800">
        {title}
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        {description}
      </p>

      {disabled && (
        <span className="mt-4 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
          Próximamente
        </span>
      )}
    </div>
  );

  if (disabled) return content;

  return <Link href={href}>{content}</Link>;
}