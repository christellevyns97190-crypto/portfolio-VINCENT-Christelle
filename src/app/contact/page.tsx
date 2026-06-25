"use client";

import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "@/i18n/I18nProvider";

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ nom: '', prenom: '', email: '', sujet: '', message: '' });
  const { t } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData();
    formData.append('nom', form.nom);
    formData.append('prenom', form.prenom);
    formData.append('email', form.email);
    formData.append('sujet', form.sujet);
    formData.append('message', form.message);

    const res = await fetch('https://formspree.io/f/mlgyjova', {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' },
    });

    if (res.ok) {
      setStatus('success');
      setForm({ nom: '', prenom: '', email: '', sujet: '', message: '' });
    } else {
      setStatus('error');
    }
  };

  return (
    <div className="container mx-auto px-5 py-10 md:py-12 max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("contact.title")}</h1>
        <p className="text-foreground/60">{t("contact.subtitle")}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="glass p-5 md:p-12 rounded-3xl"
      >
        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center gap-4 py-12 text-center"
          >
            <CheckCircle size={56} className="text-[#FFE0E7]" aria-hidden="true" />
            <h2 className="text-2xl font-bold">{t("contact.successTitle")}</h2>
            <p className="text-foreground/60">{t("contact.successText")}</p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-4 px-6 py-2 rounded-xl border border-[#FFE0E7]/40 text-[#FFE0E7] hover:bg-[#FFE0E7]/10 transition-colors"
              aria-label={t("contact.sendAnother")}
            >
              {t("contact.sendAnother")}
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="nom" className="text-sm font-medium">{t("contact.nom")}</label>
                <input
                  type="text"
                  id="nom"
                  required
                  value={form.nom}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-border/40 rounded-xl px-4 py-3 focus:outline-none focus:border-[#FFE0E7] transition-colors"
                  placeholder={t("contact.nomPlaceholder")}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="prenom" className="text-sm font-medium">{t("contact.prenom")}</label>
                <input
                  type="text"
                  id="prenom"
                  required
                  value={form.prenom}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-border/40 rounded-xl px-4 py-3 focus:outline-none focus:border-[#FFE0E7] transition-colors"
                  placeholder={t("contact.prenomPlaceholder")}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">{t("contact.email")}</label>
              <input
                type="email"
                id="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full bg-white/5 border border-border/40 rounded-xl px-4 py-3 focus:outline-none focus:border-[#FFE0E7] transition-colors"
                placeholder={t("contact.emailPlaceholder")}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="sujet" className="text-sm font-medium">{t("contact.sujet")}</label>
              <input
                type="text"
                id="sujet"
                required
                value={form.sujet}
                onChange={handleChange}
                className="w-full bg-white/5 border border-border/40 rounded-xl px-4 py-3 focus:outline-none focus:border-[#FFE0E7] transition-colors"
                placeholder={t("contact.sujetPlaceholder")}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">{t("contact.message")}</label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full bg-white/5 border border-border/40 rounded-xl px-4 py-3 focus:outline-none focus:border-[#FFE0E7] transition-colors resize-none"
                placeholder={t("contact.messagePlaceholder")}
              />
            </div>

            {status === 'error' && (
              <div className="flex items-center gap-2 text-red-400 text-sm">
                <AlertCircle size={16} aria-hidden="true" />
                <span>{t("contact.error")}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 bg-[#FFE0E7]/10 border border-[#FFE0E7]/40 text-[#FFE0E7] hover:bg-[#FFE0E7]/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label={status === 'loading' ? t("contact.sending") : t("contact.send")}
            >
              {status === 'loading' ? t("contact.sending") : <>{t("contact.send")} <Send size={18} aria-hidden="true" /></>}
            </button>
            <p className="text-sm text-center text-foreground/40 mt-4">
              {t("contact.footerHint")}
            </p>
          </form>
        )}
      </motion.div>
    </div>
  );
}
