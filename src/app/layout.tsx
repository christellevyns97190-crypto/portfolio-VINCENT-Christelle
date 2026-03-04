import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
          className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-background`}
        >
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-[5%] left-[-10%] w-[50rem] h-[50rem] rounded-full bg-rose/40 blur-[120px]" />
              <div className="absolute bottom-[10%] right-[-10%] w-[60rem] h-[60rem] rounded-full bg-rose/30 blur-[150px]" />
              <div className="absolute top-[30%] right-[5%] w-[40rem] h-[40rem] rounded-full bg-rose/25 blur-[130px]" />
              <div className="absolute top-[60%] left-[10%] w-[35rem] h-[35rem] rounded-full bg-turquoise/15 blur-[120px]" />
            </div>
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
