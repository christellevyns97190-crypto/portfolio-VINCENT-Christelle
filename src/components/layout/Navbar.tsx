"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const navItems = [
    { name: "Accueil", path: "/" },
    { name: "Créations", path: "/#creations" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="glass px-4 md:px-6 py-2 rounded-full flex gap-4 md:gap-8 items-center"
        >
          <Link href="/" className="flex items-center">
            <img src="/logo.webp" alt="Logo" className="h-7 md:h-10 w-auto hover:scale-110 transition-transform" />
          </Link>
          <div className="h-4 w-px bg-foreground/20 mx-1" />

          {/* Desktop nav */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`text-sm font-medium transition-colors hover:text-turquoise ${
                  pathname === item.path ? "text-turquoise" : "text-foreground/80"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-8 h-8 text-foreground/80 hover:text-turquoise transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.div>
      </nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 md:hidden"
            style={{ background: "rgba(10,10,18,0.97)", backdropFilter: "blur(18px)" }}
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className={`text-3xl font-bold tracking-wide transition-colors hover:text-turquoise ${
                    pathname === item.path ? "text-turquoise" : "text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
