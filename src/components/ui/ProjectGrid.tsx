"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projects";
import { X } from "lucide-react";

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
              {project.videoUrl ? (
                <video
                  src={project.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              )}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-medium px-6 py-2 glass rounded-full">Voir le projet</span>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold group-hover:text-turquoise transition-colors">{project.title}</h3>
              <p className="text-foreground/60 text-sm mt-1">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-background/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 z-10 p-2 bg-background/50 hover:bg-background rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
                {selectedProject.videoUrl ? (
                  <video
                    src={selectedProject.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    className="w-full object-contain max-h-[70vh]"
                  />
                ) : (
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="w-full object-contain max-h-[70vh]"
                  />
                )}
              </div>
              <div className="p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{selectedProject.title}</h2>
                <div className="flex gap-2 mb-8">
                  <span className="px-3 py-1 bg-turquoise/10 text-turquoise text-xs font-bold rounded-full uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/80 leading-relaxed">
                  <p>{selectedProject.fullDescription}</p>
                </div>
                <div className="mt-12">
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="glass px-8 py-3 rounded-full font-medium hover:bg-turquoise/10 transition-colors"
                  >
                    Retour à la galerie
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
