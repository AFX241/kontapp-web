import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ToolLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function ToolLayout({
  title,
  description,
  children,
}: ToolLayoutProps) {
  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-5xl px-6">

        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-blue-600 hover:underline"
        >
          <ArrowLeft size={18} />
          Volver al Dashboard
        </Link>

        <h1 className="text-4xl font-bold text-slate-900">
          {title}
        </h1>

        <p className="mt-2 text-slate-500">
          {description}
        </p>

        <div className="mt-8">
          {children}
        </div>

      </div>
    </main>
  );
}