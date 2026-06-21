"use client";

import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";
import { useTranslation } from "@/i18n/I18nProvider";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="py-12 border-t border-border/40">
      <div className="container mx-auto px-6 flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <a 
              href="https://www.instagram.com/serenitys_artwork?igsh=ZXJ6MHZ6aTNxaDlp&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-rose hover:text-turquoise transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/christelle-vincent-50b0152bb/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-rose hover:text-turquoise transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        
        <Link 
          href="/mentions-legales"
          className="text-sm text-foreground/40 hover:text-foreground/60 transition-colors"
        >
          {t("footer.copyright")}
        </Link>
      </div>
    </footer>
  );
}
