"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Accueil", path: "/" },
    { name: "Créations", path: "/#creations" },
    { name: "Contact", path: "/contact" },
  ];

  return (
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
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.path}
              className={`text-xs md:text-sm font-medium transition-colors hover:text-turquoise ${
                pathname === item.path ? "text-turquoise" : "text-foreground/80"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      </nav>
  );
}
