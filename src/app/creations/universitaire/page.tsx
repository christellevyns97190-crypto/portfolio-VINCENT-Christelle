"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const UE_LIST = [
  {
    id: "concevoir",
    label: "UE Concevoir",
    description: "Analyse, modélisation et conception de projets numériques et communicationnels.",
    icon: "✏️",
    color: "from-[#FFE0E7]/20 to-[#FFE0E7]/5",
    border: "border-[#FFE0E7]/30",
    hover: "hover:border-[#FFE0E7]/60",
  },
  {
    id: "exprimer",
    label: "UE Exprimer",
    description: "Création graphique, identité visuelle, expression artistique et multimédia.",
    icon: "🎨",
    color: "from-pink-300/20 to-pink-200/5",
    border: "border-pink-300/30",
    hover: "hover:border-pink-300/60",
  },
  {
    id: "entreprendre",
    label: "UE Entreprendre",
    description: "Stratégie, gestion de projet, entrepreneuriat et communication professionnelle.",
    icon: "💼",
    color: "from-fuchsia-300/20 to-fuchsia-200/5",
    border: "border-fuchsia-300/30",
    hover: "hover:border-fuchsia-300/60",
  },
  {
    id: "developper",
    label: "UE Développer",
    description: "Développement web, intégration, programmation et solutions numériques.",
    icon: "💻",
    color: "from-purple-300/20 to-purple-200/5",
    border: "border-purple-300/30",
    hover: "hover:border-purple-300/60",
  },
  {
    id: "apprehender",
    label: "UE Comprendre",
    description: "Analyser un besoin, un contexte, une cible.",
    icon: "🔍",
    color: "from-violet-300/20 to-violet-200/5",
    border: "border-violet-300/30",
    hover: "hover:border-violet-300/60",
  },
];

export default function UniversitairePage() {
  return (
    <div className="container mx-auto px-5 py-10 md:py-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-12"
      >
        <Link href="/#creations" className="text-foreground/40 hover:text-[#FFE0E7] flex items-center gap-2 transition-colors mb-6 group">
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" /> Retour aux catégories
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">Universitaire</h1>
        <p className="text-base md:text-xl text-foreground/50">Travaux réalisés durant mon cursus BUT MMI</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {UE_LIST.map((ue, index) => (
          <motion.div
            key={ue.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: [0, -8 - (index % 3) * 3, 0],
            }}
            transition={{
              opacity: { duration: 0.5, delay: index * 0.1 },
              y: {
                delay: index * 0.15,
                duration: 3 + index * 0.4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              },
            }}
            whileHover={{ scale: 1.04, y: -12 }}
          >
            <Link href={`/creations/universitaire/${ue.id}`}>
              <div className={`group rounded-2xl border ${ue.border} ${ue.hover} bg-gradient-to-br ${ue.color} p-8 h-full flex flex-col justify-between transition-colors duration-300 cursor-pointer`}>
                <div>
                  <span className="text-4xl mb-4 block">{ue.icon}</span>
                  <h2 className="text-2xl font-bold text-white mb-3">{ue.label}</h2>
                  <p className="text-foreground/50 text-sm leading-relaxed">{ue.description}</p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-[#FFE0E7]/70 text-sm font-medium group-hover:gap-3 transition-all">
                  Voir les créations <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
