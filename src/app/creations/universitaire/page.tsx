"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslation } from "@/i18n/I18nProvider";

const UE_LIST = [
  { id: "concevoir",    icon: "✏️", bg: "linear-gradient(135deg, #f82f8b, #05ffe1, #f82f8b)" },
  { id: "exprimer",     icon: "🎨", bg: "linear-gradient(135deg, #05ffe1, #f82f8b, #05ffe1)" },
  { id: "entreprendre", icon: "💼", bg: "linear-gradient(135deg, #f82f8b, #05ffe1, #111)" },
  { id: "developper",   icon: "💻", bg: "linear-gradient(135deg, #05ffe1, #111, #f82f8b)" },
  { id: "apprehender",  icon: "🔍", bg: "linear-gradient(135deg, #111, #f82f8b, #05ffe1)" },
];

export default function UniversitairePage() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-5 py-10 md:py-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-12"
      >
        <Link href="/#creations" className="text-foreground/40 hover:text-[#FFE0E7] flex items-center gap-2 transition-colors mb-6 group">
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" /> {t("univ.back")}
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">{t("univ.title")}</h1>
        <p className="text-base md:text-xl text-foreground/50">{t("univ.desc")}</p>
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
              <div
                className="group relative rounded-2xl border border-white/10 p-8 h-full flex flex-col justify-between transition-all duration-500 cursor-pointer overflow-hidden"
                style={{
                  animation: `border-glow 4s ease-in-out infinite`,
                  animationDelay: `${index * -1.2}s`,
                }}
              >
                {/* Animated gradient background */}
                <div
                  className="absolute inset-0 opacity-50 ue-card"
                  style={{
                    backgroundImage: ue.bg,
                    animationDelay: `${index * -1.2}s`,
                  }}
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/20" />
                {/* Content */}
                <div className="relative z-10">
                  <span className="text-4xl mb-4 block">{ue.icon}</span>
                  <h2 className="text-2xl font-bold text-white mb-3">{t(`ue.${ue.id}`)}</h2>
                  <p className="text-white/60 text-sm leading-relaxed">{t(`ue.${ue.id}.desc`)}</p>
                </div>
                <div className="relative z-10 mt-6 flex items-center gap-2 text-[#FFE0E7]/70 text-sm font-medium group-hover:gap-3 transition-all">
                  {t("univ.voir")} <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}