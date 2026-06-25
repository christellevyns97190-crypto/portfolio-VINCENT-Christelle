"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import Link from "next/link";
import { useTranslation } from "@/i18n/I18nProvider";

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group"
        >
          {project.externalUrl ? (
            <a href={project.externalUrl} target="_blank" rel="noopener noreferrer">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium px-4 py-2 glass rounded-full text-xs md:text-sm">{t("grid.voirSite")}</span>
                </div>
              </div>
              <div className="mt-2 md:mt-3">
                <h3 className="text-xs md:text-sm font-bold group-hover:text-turquoise transition-colors leading-tight">{project.title}</h3>
                <p className="text-foreground/60 text-[11px] md:text-xs mt-1 leading-snug">{project.description}</p>
              </div>
            </a>
          ) : (
            <Link href={`/creations/projet/${project.id}`}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted">
                {project.videoUrl ? (
                  <video
                    src={project.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    aria-label={project.title}
                  />
                ) : project.imageUrl.endsWith('.pdf') && project.pdfCover !== false ? (
                  <div className="relative w-full h-full overflow-hidden bg-muted">
                    <iframe
                      src={`${project.imageUrl}#page=1&toolbar=0&navpanes=0&scrollbar=0&zoom=130`}
                      className="absolute w-[130%] h-[130%] -top-[15%] -left-[15%] pointer-events-none"
                      title={project.title}
                    />
                  </div>
                ) : project.imageUrl.endsWith('.pdf') ? (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-rose/20 to-turquoise/20">
                    <div className="text-center">
                      <svg className="w-10 h-10 md:w-14 md:h-14 mx-auto mb-2 text-rose" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      <span className="text-[10px] md:text-xs text-foreground/50">PDF</span>
                    </div>
                  </div>
                ) : (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium px-4 py-2 glass rounded-full text-xs md:text-sm">{t("grid.voirProjet")}</span>
                </div>
              </div>
              <div className="mt-2 md:mt-3">
                <h3 className="text-xs md:text-sm font-bold group-hover:text-turquoise transition-colors leading-tight">{project.title}</h3>
                <p className="text-foreground/60 text-[11px] md:text-xs mt-1 leading-snug">{project.description}</p>
              </div>
            </Link>
          )}
        </motion.div>
      ))}
    </div>
  );
}
