"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Eye } from "lucide-react";
import { categories } from "@/data/projects";
import { useRef } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Home() {
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 flex flex-col items-center"
          >
            <h1 className="flex flex-col items-center">
                  <span className="block overflow-hidden pb-2">
                    <motion.span
                      className="block text-3xl md:text-5xl font-sans font-medium uppercase tracking-widest text-foreground"
                      initial={{ y: "100%" }}
                      animate={{ y: [0, -7, 0] }}
                      transition={{
                        y: {
                          delay: 1,
                          duration: 3.5,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "easeInOut",
                        }
                      }}
                    >
                      VINCENT
                    </motion.span>
                  </span>
                  <span className="block overflow-hidden">
                    <motion.span
                      className="block text-3xl md:text-5xl font-sans font-medium uppercase tracking-widest text-foreground"
                      initial={{ y: "100%" }}
                      animate={{ y: [0, -7, 0] }}
                      transition={{
                        y: {
                          delay: 1.2,
                          duration: 3.5,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "easeInOut",
                        }
                      }}
                    >
                      CHRISTELLE
                    </motion.span>
                  </span>
              <motion.span 
                className="block text-2xl md:text-3xl text-turquoise font-light tracking-[0.3em] mt-4"
                initial={{ opacity: 0, letterSpacing: "0.5em" }}
                animate={{ opacity: 1, letterSpacing: "0.3em" }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Etudiante BUT3 MMI
              </motion.span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/60 font-light max-w-2xl mx-auto pt-4">
              Bachelor universitaire - métiers du multimédia et de l'internet
            </p>
            <p className="text-lg text-foreground/40 mt-8 italic">
              Bienvenue sur mon portfolio.
            </p>
          </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row gap-6"
        >
          <Link href="#creations" className="glass px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-turquoise/10 transition-colors">
            Voir mes projets <ArrowRight size={18} />
          </Link>
          <Link href="/contact" className="glass px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-rose/10 transition-colors">
            Me contacter
          </Link>
        </motion.div>
      </section>

      {/* Presentation Section with Parallax */}
      <section ref={parallaxRef} className="relative py-32 px-6 w-full overflow-hidden flex justify-center">
        {/* Parallax Background */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0 -z-10 h-[140%] w-full"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
            style={{ backgroundImage: "url('/parallax-bg.png')" }}
          />
            {/* Overlay to ensure readability */}
            <div className="absolute inset-0 bg-background/60" />
          </motion.div>

          <motion.div 
            {...fadeIn}
            className="glass p-8 md:p-12 rounded-3xl border border-foreground/10 shadow-2xl max-w-4xl w-full"
          >
          <h2 className="text-3xl font-bold mb-6 text-turquoise">À propos de moi</h2>
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              
              Je suis <strong>Christelle VINCENT</strong>, étudiante en deuxième année d&apos;MMI en Guadeloupe. 
              Passionnée par la créativité, la musique et le bien-être physique et mental.
            </p>
            <p>
              J’ai toujours été attirée par le montage photo et vidéo, l’art de créer, l’esthétique des choses. 
              J’aime exprimer ma créativité, c&apos;est pour cela qu&apos;aujourd&apos;hui je choisis le métier du Design digital.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.02 }}
              href="/CV_Christelle_VINCENT.pdf"
              download
              className="glass inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium border border-rose bg-rose/60 hover:bg-rose/80 transition-colors"
            >
              <Download size={18} /> Télécharger mon CV (PDF)
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              href="/CV_Christelle_VINCENT.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium border border-white/20 bg-white/10 hover:bg-white/20 transition-colors text-white"
            >
              <Eye size={18} /> Visualiser mon CV
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Creations Section */}
      <section id="creations" className="py-24 px-6 max-w-6xl w-full">
        <motion.div 
          {...fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-rose">Mes Créations</h2>
          <p className="text-foreground/60">Découvrez mon univers à travers différentes catégories.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Link href={category.path} className="group block h-full">
                <div className="relative overflow-hidden rounded-2xl h-64 flex flex-col justify-end p-8 border border-border/40 hover:border-turquoise/40 transition-all bg-white/5 shadow-sm group-hover:shadow-md">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-turquoise transition-colors z-10">
                    {category.name}
                  </h3>
                  <p className="text-foreground/60 mt-2 text-sm z-10">
                    {category.description}
                  </p>
                  <div className="mt-4 flex items-center text-turquoise text-sm font-medium opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 z-10">
                    Découvrir <ArrowRight size={14} className="ml-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
