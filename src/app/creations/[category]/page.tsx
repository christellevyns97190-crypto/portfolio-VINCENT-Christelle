"use client";

import { use } from "react";
import { projects, categories } from "@/data/projects";
import ProjectGrid from "@/components/ui/ProjectGrid";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { useTranslation } from "@/i18n/I18nProvider";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category: categoryId } = use(params);
  const { t } = useTranslation();

  if (categoryId === "universitaire") {
    notFound();
  }

  const category = categories.find(c => c.id === categoryId);
  if (!category) {
    notFound();
  }

  const categoryProjects = projects.filter(p => p.category === categoryId);

  return (
    <div className="container mx-auto px-5 py-10 md:py-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-12"
      >
        <Link href="/#creations" className="text-foreground/40 hover:text-turquoise flex items-center gap-2 transition-colors mb-6 group">
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" /> {t("category.back")}
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">{t(`cat.${category.id}`)}</h1>
        <p className="text-base md:text-xl text-foreground/60">{t(`cat.${category.id}.desc`)}</p>
      </motion.div>

      <ProjectGrid projects={categoryProjects} />
    </div>
  );
}