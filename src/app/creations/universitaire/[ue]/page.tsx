"use client";

import { use } from "react";
import { projects } from "@/data/projects";
import ProjectGrid from "@/components/ui/ProjectGrid";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { useTranslation } from "@/i18n/I18nProvider";

const UE_META: Record<string, { icon: string }> = {
  concevoir: { icon: "✏️" },
  exprimer: { icon: "🎨" },
  entreprendre: { icon: "💼" },
  developper: { icon: "💻" },
  apprehender: { icon: "🔍" },
};

interface UEPageProps {
  params: Promise<{ ue: string }>;
}

export default function UEPage({ params }: UEPageProps) {
  const { ue } = use(params);
  const { t } = useTranslation();
  const meta = UE_META[ue];
  if (!meta) notFound();

  const ueProjects = projects.filter(
    p => p.category === "universitaire" && p.subCategory === ue
  );

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-12"
      >
        <Link
          href="/creations/universitaire"
          className="text-foreground/40 hover:text-[#FFE0E7] flex items-center gap-2 transition-colors mb-6 group"
        >
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          {t("ue.back")}
        </Link>
        <div className="flex items-center gap-4 mb-3">
          <span className="text-4xl">{meta.icon}</span>
          <h1 className="text-4xl md:text-5xl font-bold">{t(`ue.${ue}`)}</h1>
        </div>
        <p className="text-xl text-foreground/50">{t(`ue.${ue}.desc`)}</p>
      </motion.div>

      {ueProjects.length > 0 ? (
        <ProjectGrid projects={ueProjects} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-16 text-center"
        >
          <p className="text-foreground/30 text-lg italic">{t("ue.upcoming")}</p>
          <p className="text-foreground/20 text-sm mt-2">{t("ue.upcomingSub")}</p>
        </motion.div>
      )}
    </div>
  );
}