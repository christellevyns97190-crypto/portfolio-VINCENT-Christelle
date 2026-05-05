"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import Link from "next/link";

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group"
        >
          <Link href={`/creations/projet/${project.id}`}>
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
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
