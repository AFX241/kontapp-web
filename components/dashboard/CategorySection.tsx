import ToolCard from "../cards/ToolCard";

interface Tool {
  title: string;
  description: string;
  href: string;
  icon: any;
  disabled?: boolean;
}

interface Props {
  title: string;
  tools: Tool[];
}

export default function CategorySection({ title, tools }: Props) {
  return (
    <section className="mb-16">
      <h2 className="mb-6 text-2xl font-bold text-slate-800">
        {title}
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard
            key={tool.title}
            {...tool}
          />
        ))}
      </div>
    </section>
  );
}