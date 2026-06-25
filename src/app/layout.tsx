import type { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { I18nProvider } from "@/i18n/I18nProvider";
import { ThemeProvider } from "@/theme/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "600"],
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
        <head>
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-6NKJ876Y87"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6NKJ876Y87');
            `}
          </Script>
        </head>
        <body
              className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} antialiased font-sans`}
            >
            <ThemeProvider>
            <I18nProvider>
            <Navbar />
            <main className="min-h-screen pt-32 relative z-10">
              {children}
            </main>
            <Footer />
            </I18nProvider>
            </ThemeProvider>
          </body>
      </html>
    );
}
