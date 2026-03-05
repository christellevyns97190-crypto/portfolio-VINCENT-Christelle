import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Christelle VINCENT | Graphiste Digital",
  description: "Portfolio de Christelle VINCENT, étudiante en Design Digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
      <html lang="fr" className="scroll-smooth">
          <body
            className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased font-sans bg-white`}
          >
            <Navbar />
            <main className="min-h-screen pt-24 relative z-10">
              {children}
            </main>
            <Footer />
            <VisualEditsMessenger />
          </body>
      </html>
    );
}
