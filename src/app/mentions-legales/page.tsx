"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/I18nProvider";

export default function MentionsLegales() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-6 py-24 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass p-12 rounded-3xl"
      >
        <h1 className="text-3xl font-bold mb-12">{t("legal.title")}</h1>

        <div className="space-y-12 text-foreground/80">
          <section>
            <h2 className="text-xl font-bold mb-4 text-turquoise">{t("legal.identity")}</h2>
            <div className="space-y-2">
              <p><strong>{t("legal.name")} :</strong> Christelle VINCENT</p>
              <p><strong>{t("legal.status")} :</strong> {t("legal.statusValue")}</p>
              <p><strong>{t("legal.location")} :</strong> Guadeloupe</p>
              <p><strong>{t("legal.email")} :</strong> contact@christellevincent.fr</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-turquoise">{t("legal.intellectual")}</h2>
            <p className="leading-relaxed">{t("legal.intellectualText")}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-turquoise">{t("legal.hosting")}</h2>
            <p>{t("legal.hostingText")}</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}