"use client";

import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border/40">
      <div className="container mx-auto px-6 flex flex-col items-center gap-6">
        <div className="flex gap-6">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-turquoise transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-turquoise transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>
        
        <Link 
          href="/mentions-legales"
          className="text-sm text-foreground/40 hover:text-foreground/60 transition-colors"
        >
          © 2026 Christelle VINCENT
        </Link>
      </div>
    </footer>
  );
}
