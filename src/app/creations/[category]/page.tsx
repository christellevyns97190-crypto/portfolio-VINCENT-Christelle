"use client";

import { use } from "react";
import { projects, categories } from "@/data/projects";
import ProjectGrid from "@/components/ui/ProjectGrid";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

const UE_LIST = [
  {
    id: "concevoir",
    label: "UE Concevoir",
    description: "Analyse, modélisation et conception de projets numériques.",
    color: "from-rose-200/20 to-rose-300/10",
    border: "border-rose-300/30",
  },
  {
    id: "exprimer",
    label: "UE Exprimer",
    description: "Création graphique, identité visuelle et expression artistique.",
    color: "from-pink-200/20 to-pink-300/10",
    border: "border-pink-300/30",
  },
  {
    id: "entreprendre",
    label: "UE Entreprendre",
    description: "Stratégie, gestion de projet et esprit entrepreneurial.",
    color: "from-fuchsia-200/20 to-fuchsia-300/10",
    border: "border-fuchsia-300/30",
  },
  {
    id: "developper",
    label: "UE Développer",
    description: "Développement web, intégration et programmation.",
    color: "from-purple-200/20 to-purple-300/10",
    border: "border-purple-300/30",
  },
  {
    id: "apprehender",
    label: "UE Comprendre",
    description: "Analyser un besoin, un contexte, une cible.",
    color: "from-violet-200/20 to-violet-300/10",
    border: "border-violet-300/30",
  },
];

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category: categoryId } = use(params);

  if (categoryId === "universitaire") {
    notFound();
  }

  const category = categories.find(c => c.id === categoryId);
  if (!category) {
    notFound();
  }

  const categoryProjects = projects.filter(p => p.category === categoryId);
  const isUniversitaire = categoryId === "universitaire";

  return (
    <div className="container mx-auto px-5 py-10 md:py-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-12"
      >
        <Link href="/#creations" className="text-foreground/40 hover:text-turquoise flex items-center gap-2 transition-colors mb-6 group">
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" /> Retour aux catégories
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">{category.name}</h1>
        <p className="text-base md:text-xl text-foreground/60">{category.description}</p>
      </motion.div>

      {isUniversitaire ? (
        <div className="space-y-16">
          {UE_LIST.map((ue, ueIndex) => {
            const ueProjects = categoryProjects.filter(p => p.subCategory === ue.id);
            return (
              <motion.div
                key={ue.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: ueIndex * 0.1 }}
              >
                <div className={`rounded-2xl border ${ue.border} bg-gradient-to-br ${ue.color} p-6 mb-6`}>
                  <h2 className="text-2xl font-bold text-white mb-1">{ue.label}</h2>
                  <p className="text-foreground/50 text-sm">{ue.description}</p>
                </div>

                {ueProjects.length > 0 ? (
                  <ProjectGrid projects={ueProjects} />
                ) : (
                  <div className="rounded-xl border border-white/10 bg-white/5 p-10 text-center text-foreground/30 text-sm italic">
                    Projets à venir...
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      ) : (
        <ProjectGrid projects={categoryProjects} />
      )}
    </div>
  );
}
