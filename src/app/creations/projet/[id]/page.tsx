"use client";

import { use } from "react";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { id } = use(params);
  const project = projects.find(p => p.id === id);

  if (!project) notFound();

  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-8"
      >
        <Link
          href={`/creations/${project.category}`}
          className="text-foreground/40 hover:text-turquoise flex items-center gap-2 transition-colors group"
        >
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          Retour aux projets
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="rounded-2xl overflow-hidden bg-muted mb-8 flex items-center justify-center">
          {project.videoUrl ? (
            <video
              src={project.videoUrl}
              autoPlay
              loop
              muted
              playsInline
              controls
              className="w-full object-contain max-h-[80vh]"
            />
          ) : (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full object-contain max-h-[80vh]"
            />
          )}
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-3">{project.title}</h1>
        <div className="flex gap-2 mb-6">
          <span className="px-3 py-1 bg-turquoise/10 text-turquoise text-xs font-bold rounded-full uppercase tracking-wider">
            {project.category}
          </span>
        </div>
        <p className="text-foreground/70 leading-relaxed text-lg">{project.fullDescription}</p>
      </motion.div>
    </div>
  );
}
