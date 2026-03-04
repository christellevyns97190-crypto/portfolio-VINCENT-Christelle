"use client";

import { motion } from "framer-motion";

export default function MentionsLegales() {
  return (
    <div className="container mx-auto px-6 py-24 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass p-12 rounded-3xl"
      >
        <h1 className="text-3xl font-bold mb-12">Mentions légales & Copyright</h1>
        
        <div className="space-y-12 text-foreground/80">
          <section>
            <h2 className="text-xl font-bold mb-4 text-turquoise">Identité</h2>
            <div className="space-y-2">
              <p><strong>Nom :</strong> Christelle VINCENT</p>
              <p><strong>Statut :</strong> Étudiante MMI (Métiers du Multimédia et de l&apos;Internet)</p>
              <p><strong>Localisation :</strong> Guadeloupe</p>
              <p><strong>Email :</strong> contact@christellevincent.fr</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-turquoise">Propriété Intellectuelle</h2>
            <p className="leading-relaxed">
              Tout le contenu du site est protégé par le droit d’auteur. 
              Toute reproduction ou utilisation sans autorisation est interdite.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-turquoise">Hébergement</h2>
            <p>Ce site est un portfolio étudiant réalisé à des fins pédagogiques.</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
