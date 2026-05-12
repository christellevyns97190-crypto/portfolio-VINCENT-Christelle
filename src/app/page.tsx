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
      <section className="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden w-full">
        {/* Cheetah background */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "url('/blackchettahback2.png')",
            backgroundSize: "1400px auto",
            backgroundRepeat: "repeat",
            opacity: 0.75,
          }}
        />
        {/* Subtle vignette overlay for depth */}
        <div
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.55) 100%)" }}
        />

        {/* Stickers */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          {[
            { src:"/s-camera.png",  h:160, top:"4%",  left:"11%",  rot:-12, dur:4.2, dy:12 },
            { src:"/s-bag.png",     h:170, top:"7%",  right:"14%", rot:10,  dur:5.1, dy:10 },
            { src:"/s-coffee.png",  h:185, top:"29%", left:"1%",   rot:-3,  dur:6.0, dy:14 },
            { src:"/s-donut.png",   h:165, top:"43%", left:"15%",  rot:8,   dur:4.7, dy:11 },
            { src:"/s-cup.png",     h:190, top:"28%", right:"2%",  rot:-6,  dur:5.5, dy:13 },
            { src:"/s-laptop.png",  h:175, top:"69%", left:"2%",   rot:5,   dur:4.9, dy:10 },
            { src:"/s-diamond.png", h:120, top:"49%", right:"20%", rot:-5,  dur:3.8, dy:8  },
            { src:"/s-phone.png",   h:165, top:"65%", right:"6%",  rot:14,  dur:5.3, dy:12 },
          ].map((s, i) => (
            <motion.img
              key={s.src}
              src={s.src}
              alt=""
              style={{ position:"absolute", height:`${s.h}px`, width:"auto", top:s.top, left:(s as any).left, right:(s as any).right }}
              animate={{ y: [0, -s.dy, 0], rotate: [s.rot, s.rot + 3, s.rot] }}
              transition={{ duration: s.dur, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
            />
          ))}
        </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 flex flex-col items-center"
          >
            <h1 className="flex flex-col items-center gap-2">
              <motion.span
                className="block text-center font-sans font-medium uppercase tracking-widest text-foreground"
                style={{ fontSize: "clamp(1.9rem, 5.5vw, 3.8rem)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
              >
                VINCENT CHRISTELLE
              </motion.span>
              <motion.span
                className="block text-center text-turquoise"
                style={{
                  fontFamily: "var(--font-dancing-script)",
                  fontSize: "clamp(1.8rem, 5vw, 3.2rem)",
                  fontWeight: 400,
                  letterSpacing: "0.04em",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Graphiste Digital
              </motion.span>
            </h1>
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
          <Link href="#creations" className="glass px-8 py-4 rounded-full font-medium flex items-center gap-2 transition-all duration-300 hover:bg-rose/10 hover:text-rose hover:[box-shadow:0_0_18px_4px_rgba(255,20,147,0.6),0_0_40px_10px_rgba(255,20,147,0.3)]">
            Voir mes projets <ArrowRight size={18} />
          </Link>
          <Link href="/contact" className="glass px-8 py-4 rounded-full font-medium flex items-center gap-2 transition-all duration-300 hover:bg-rose/10 hover:text-rose hover:[box-shadow:0_0_18px_4px_rgba(255,20,147,0.6),0_0_40px_10px_rgba(255,20,147,0.3)]">
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
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
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
