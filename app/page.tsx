"use client";

import Navbar from "../components/layout/Navbar";
import Hero from "../components/dashboard/Hero";
import Stats from "../components/dashboard/Stats";
import CategorySection from "../components/dashboard/CategorySection";
import { toolCategories } from "./data/tools";
import { useState } from "react";

function normalize(text: string) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export default function Home() {
  
  const [search, setSearch] = useState("");

  const filteredCategories = toolCategories
  .map((category) => ({
    ...category,
    tools: category.tools.filter((tool) => {
  const text = normalize(`${tool.title} ${tool.description}`);
  return text.includes(normalize(search));
}),
  }))
  .filter((category) => category.tools.length > 0);

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6">
        <Hero
  search={search}
  onSearchChange={setSearch}
/>

        <Stats />

        {filteredCategories.length > 0 ? (
  filteredCategories.map((category) => (
    <CategorySection
      key={category.title}
      title={category.title}
      tools={category.tools}
    />
  ))
) : (
  <div className="py-20 text-center">
    <h2 className="text-2xl font-semibold text-slate-700">
      No se encontraron herramientas
    </h2>

    <p className="mt-2 text-slate-500">
      Intenta con otro término de búsqueda.
    </p>
  </div>
)}
      </div>
    </main>
  );
}