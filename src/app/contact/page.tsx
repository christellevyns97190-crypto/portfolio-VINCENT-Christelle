"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Merci pour votre message ! (Ceci est une démo)");
  };

  return (
    <div className="container mx-auto px-6 py-12 max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-moi</h1>
        <p className="text-foreground/60">Une question ou un projet ? N&apos;hésitez pas à m&apos;écrire.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="glass p-8 md:p-12 rounded-3xl"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="nom" className="text-sm font-medium">Nom</label>
              <input 
                type="text" 
                id="nom" 
                required
                className="w-full bg-white/5 border border-border/40 rounded-xl px-4 py-3 focus:outline-none focus:border-turquoise transition-colors"
                placeholder="Votre nom"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="prenom" className="text-sm font-medium">Prénom</label>
              <input 
                type="text" 
                id="prenom" 
                required
                className="w-full bg-white/5 border border-border/40 rounded-xl px-4 py-3 focus:outline-none focus:border-turquoise transition-colors"
                placeholder="Votre prénom"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input 
              type="email" 
              id="email" 
              required
              className="w-full bg-white/5 border border-border/40 rounded-xl px-4 py-3 focus:outline-none focus:border-turquoise transition-colors"
              placeholder="votre@email.com"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="sujet" className="text-sm font-medium">Sujet</label>
            <input 
              type="text" 
              id="sujet" 
              required
              className="w-full bg-white/5 border border-border/40 rounded-xl px-4 py-3 focus:outline-none focus:border-turquoise transition-colors"
              placeholder="Objet de votre message"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <textarea 
              id="message" 
              required
              rows={5}
              className="w-full bg-white/5 border border-border/40 rounded-xl px-4 py-3 focus:outline-none focus:border-turquoise transition-colors resize-none"
              placeholder="Comment puis-je vous aider ?"
            />
          </div>
          <button 
            type="submit"
            className="w-full glass py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-turquoise/10 transition-colors"
          >
            Envoyer le message <Send size={18} />
          </button>
          <p className="text-sm text-center text-foreground/40 mt-4">
            Je vous répondrai dans les plus brefs délais.
          </p>
        </form>
      </motion.div>
    </div>
  );
}
