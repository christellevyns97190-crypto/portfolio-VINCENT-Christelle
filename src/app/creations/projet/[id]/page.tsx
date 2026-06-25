"use client";

import { use } from "react";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { useTranslation } from "@/i18n/I18nProvider";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { id } = use(params);
  const project = projects.find(p => p.id === id);
  const { t } = useTranslation();

  if (!project) notFound();

  return (
    <div className="container mx-auto px-5 py-10 md:py-12 pb-20 md:pb-32 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-8"
      >
        <Link
          href={`/creations/${project.category}`}
          className="text-foreground/40 hover:text-turquoise flex items-center gap-2 transition-colors group"
        >
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" aria-hidden="true" />
          {t("project.back")}
        </Link>
      </motion.div>

      {project.websiteUrl && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mb-6"
        >
          <a
            href={project.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold border border-turquoise bg-turquoise/10 text-turquoise hover:bg-turquoise/20 transition-all"
          >
            <ExternalLink size={18} aria-hidden="true" /> Accéder au site web
          </a>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {/* YouTube Embed */}
        {project.youtubeUrl ? (
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-foreground/70 mb-4">Vidéo</h2>
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-muted aspect-video">
              <iframe
                src={project.youtubeUrl}
                className="w-full h-full"
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        ) : project.pdfUrl ? (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground/70">PDF — Aperçu</h2>
              <a
                href={project.pdfUrl}
                download
                className="glass inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border border-rose bg-rose/40 hover:bg-rose/60 transition-colors"
              >
                <Download size={16} /> Télécharger le PDF
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-muted">
              <iframe
                src={project.pdfUrl}
                className="w-full h-[100vh]"
                title={project.title}
              />
            </div>
          </div>
        ) : project.videoUrl ? (
          <div className="rounded-2xl overflow-hidden bg-muted mb-8 flex items-center justify-center">
            <video
              src={project.videoUrl}
              autoPlay
              loop
              muted
              playsInline
              controls
              className="w-full object-contain max-h-[80vh]"
              aria-label={project.title}
            />
          </div>
        ) : (
          <div className="rounded-2xl overflow-hidden bg-muted mb-8 flex items-center justify-center">
            <img
              src={project.detailImageUrl ?? project.imageUrl}
              alt={project.title}
              className="w-full object-contain max-h-[80vh]"
            />
          </div>
        )}

        {/* Media Gallery */}
        {project.mediaGallery && project.mediaGallery.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-foreground/70 mb-4">Galerie</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.mediaGallery.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl overflow-hidden bg-muted aspect-[4/3]"
                >
                  {src.endsWith('.pdf') ? (
                    <iframe
                      src={src}
                      className="w-full h-full"
                      title={`${project.title} — ${i + 1}`}
                    />
                  ) : (
                    <img
                      src={src}
                      alt={`${project.title} — ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Title & Description */}
        <h1 className="text-3xl md:text-4xl font-bold mb-3">{project.title}</h1>
        <div className="flex gap-2 mb-6">
          <span className="px-3 py-1 bg-turquoise/10 text-turquoise text-xs font-bold rounded-full uppercase tracking-wider">
            {t(`cat.${project.category}`)}
          </span>
        </div>
        <p className="text-foreground/70 leading-relaxed text-lg">{project.fullDescription}</p>
      </motion.div>
    </div>
  );
}
