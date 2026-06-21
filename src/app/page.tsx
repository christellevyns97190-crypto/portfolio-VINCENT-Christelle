"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Eye } from "lucide-react";
import { categories } from "@/data/projects";
import { useRef } from "react";
import { useTranslation } from "@/i18n/I18nProvider";
const softwareIcons = [
  { src: "/softwares/photoshop.png", name: "Photoshop" },
  { src: "/softwares/canva.png", name: "Canva" },
  { src: "/softwares/capcut.png", name: "CapCut" },
  { src: "/softwares/davinci-resolve.png", name: "DaVinci Resolve" },
  { src: "/softwares/illustrator.png", name: "Illustrator" },
  { src: "/softwares/final-cut-pro.png", name: "Final Cut Pro" },
  { src: "/softwares/visual-studio-code.png", name: "VS Code" },
];

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
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative min-h-[100svh] md:min-h-[80vh] flex flex-col justify-center items-center text-center px-5 md:px-6 overflow-hidden w-full pt-20 md:pt-0">
        {/* Cheetah background */}
        <div className="absolute inset-0 -z-10 hero-bg" />
        {/* Vignette */}
        <div className="absolute inset-0 -z-10 pointer-events-none hero-vignette" />

        {/* Stickers — desktop only */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          {[
            { src:"/s-camera.png",  h:160, top:"4%",  left:"11%",  rot:-12, dur:4.2, dy:12 },
            { src:"/s-bag.png",     h:170, top:"7%",  right:"14%", rot:10,  dur:5.1, dy:10 },
            { src:"/s-coffee.png",  h:185, top:"29%", left:"1%",   rot:-3,  dur:6.0, dy:14 },
            { src:"/s-donut.png",   h:165, top:"43%", left:"15%",  rot:8,   dur:4.7, dy:11 },
            { src:"/s-cup.png",     h:190, top:"28%", right:"2%",  rot:-6,  dur:5.5, dy:13 },
            { src:"/s-laptop.png",  h:175, top:"69%", left:"2%",   rot:5,   dur:4.9, dy:10 },
            { src:"/s-diamond.png", h:120, top:"49%", right:"20%", rot:-5,  dur:3.8, dy:8  },
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
          {/* Phone sticker cliquable */}
          <Link href="/contact" style={{ position:"absolute", top:"65%", right:"6%", pointerEvents:"auto", display:"block" }}>
            <motion.img
              src="/s-phone.png"
              alt="Me contacter"
              style={{ height:"165px", width:"auto", cursor:"pointer" }}
              animate={{
                y: [0, -12, 0],
                rotate: [14, 17, 14],
                filter: [
                  "drop-shadow(0 0 0px rgba(255,20,147,0))",
                  "drop-shadow(0 0 5px rgba(255,20,147,0.5))",
                  "drop-shadow(0 0 10px rgba(255,20,147,0.8))",
                  "drop-shadow(0 0 16px rgba(255,20,147,1))",
                  "drop-shadow(0 0 10px rgba(255,20,147,0.8))",
                  "drop-shadow(0 0 5px rgba(255,20,147,0.5))",
                  "drop-shadow(0 0 0px rgba(255,20,147,0))",
                ],
              }}
              transition={{
                y: { duration: 5.3, repeat: Infinity, ease: "easeInOut", delay: 7 * 0.4 },
                rotate: { duration: 5.3, repeat: Infinity, ease: "easeInOut", delay: 7 * 0.4 },
                filter: { duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.93 }}
            />
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 md:space-y-6 flex flex-col items-center"
        >
          <h1 className="flex flex-col items-center gap-1 md:gap-2">
            <motion.span
              className="block text-center font-sans font-extrabold uppercase tracking-widest hero-name"
              style={{ fontSize: "clamp(1.8rem, 7vw, 3.8rem)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              VINCENT CHRISTELLE
            </motion.span>
            <motion.span
              className="block text-center hero-subtitle"
              style={{
                fontFamily: "var(--font-dancing-script)",
                fontSize: "clamp(1.8rem, 7.5vw, 4rem)",
                fontWeight: 400,
                letterSpacing: "0.04em",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t("home.subtitle")}
            </motion.span>
          </h1>
          <p className="text-foreground/40 mt-4 italic" style={{ fontSize: "clamp(1rem, 4vw, 1.5rem)" }}>
            {t("home.welcome")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 md:gap-6 w-full max-w-xs sm:max-w-none sm:w-auto"
        >
          <Link href="#creations" className="glass px-6 py-3 md:px-8 md:py-4 rounded-full font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:bg-rose/10 hover:text-rose hover:[box-shadow:0_0_18px_4px_rgba(255,20,147,0.6),0_0_40px_10px_rgba(255,20,147,0.3)] text-sm md:text-base">
            {t("home.voirProjets")} <ArrowRight size={18} />
          </Link>
          <Link href="/contact" className="glass px-6 py-3 md:px-8 md:py-4 rounded-full font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:bg-rose/10 hover:text-rose hover:[box-shadow:0_0_18px_4px_rgba(255,20,147,0.6),0_0_40px_10px_rgba(255,20,147,0.3)] text-sm md:text-base">
            {t("home.meContacter")}
          </Link>
        </motion.div>
      </section>

      {/* Presentation Section with Parallax */}
      <section ref={parallaxRef} className="relative py-16 md:py-32 px-5 w-full overflow-hidden flex justify-center">
        {/* Parallax Background */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 -z-10 h-[140%] w-full"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
            style={{ backgroundImage: "url('/parallax-bg.png')" }}
          />
          <div className="absolute inset-0 bg-background/60" />
        </motion.div>

        <motion.div
          {...fadeIn}
          className="glass p-6 md:p-12 rounded-3xl border border-foreground/10 shadow-2xl max-w-5xl w-full flex flex-col md:flex-row gap-6 md:gap-10 items-center"
        >
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-turquoise">{t("home.aboutTitle")}</h2>
            <div className="space-y-4 text-base md:text-lg text-foreground/80 leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: t("home.aboutP1") }} />
              <p>{t("home.aboutP2")}</p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.02 }}
                href="/CV_Christelle_VINCENT.pdf"
                download
                className="glass inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-xl font-medium border border-rose bg-rose/60 hover:bg-rose/80 transition-colors text-sm md:text-base"
              >
                <Download size={16} /> {t("home.downloadCV")}
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                href="/CV_Christelle_VINCENT.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-view-cv glass inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-xl font-medium border border-white/20 bg-white/10 hover:bg-white/20 transition-colors text-sm md:text-base"
              >
                <Eye size={16} /> {t("home.viewCV")}
              </motion.a>
            </div>
          </div>

          </motion.div>
      </section>

      {/* Software Skills Section — Infinite Scroll */}
      <section className="w-full py-16 md:py-24 overflow-hidden">
        <div className="relative">
          <div className="software-track mx-auto">
            {/* First set */}
            {softwareIcons.map((s, i) => (
              <div key={`a-${i}`} className="flex flex-col items-center gap-3 shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                  <img
                    src={s.src}
                    alt={s.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm text-foreground/60 font-medium whitespace-nowrap">{s.name}</span>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {softwareIcons.map((s, i) => (
              <div key={`b-${i}`} className="flex flex-col items-center gap-2 shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                  <img
                    src={s.src}
                    alt={s.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm text-foreground/60 font-medium whitespace-nowrap">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Figurine Section */}
      <section className="w-full py-16 md:py-24 px-5 flex justify-center">
        <Link href="/creations/universitaire" className="block">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center cursor-pointer"
          >
            {/* Figurine */}
            <video
              src="/figurine.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-40 md:w-56 h-auto object-contain drop-shadow-lg rounded-2xl"
            />
          </motion.div>
        </Link>
      </section>

      {/* Creations Section */}
      <section id="creations" className="py-16 md:py-24 px-5 max-w-6xl w-full">
        <motion.div
          {...fadeIn}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="creations-title text-3xl md:text-4xl font-bold mb-3">{t("home.creationsTitle")}</h2>
          <p className="text-foreground/60 text-sm md:text-base">{t("home.creationsDesc")}</p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12">
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
                <div className="relative overflow-hidden rounded-2xl w-full md:w-80 h-64 md:h-80 flex flex-col justify-end p-6 md:p-8 border border-border/40 hover:border-turquoise/40 transition-all bg-white/5 shadow-sm group-hover:shadow-md">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground group-hover:text-turquoise transition-colors z-10">
                    {t(`cat.${category.id}`)}
                  </h3>
                  <p className="text-foreground/60 mt-2 text-base md:text-lg z-10">
                    {t(`cat.${category.id}.desc`)}
                  </p>
                  <div className="mt-4 flex items-center text-turquoise text-base md:text-lg font-medium opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 z-10">
                    {t("home.decouvrir")} <ArrowRight size={18} className="ml-1" />
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
