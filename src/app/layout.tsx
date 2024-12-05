import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import NavbarComponent from "./components/navbar/NavbarComponent";
import WhatsAppButton from "./components/Whatsapp";
import { DM_Sans, Poppins } from "next/font/google";
import ScrollToTop from "./components/ScrollToTop";

const dmsans = DM_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-dmsans', 
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-poppins', 
});

export const viewport: Viewport = {
  themeColor: "#4F46E5",
}

export const metadata: Metadata = {
  title: "Spacefy — Transformação Digital",
  description:
    "Desenvolvemos soluções digitais inovadoras que transformam negócios. Expertise em tecnologia de ponta para resultados extraordinários.",
  alternates: {
    canonical: "https://spacefy.com.br/",
  },
  authors: [
    { name: "Maciel, Amaral, Fabricio", url: "https://spacefy.com.br" },
  ],
  robots: {
    index: true,
    follow: true,
  },
  keywords: ["spacefy", "soluções digitais", "desenvolvimento web", "transformação digital", "tecnologia empresarial"],
  openGraph: {
    title: "Spacefy — Transformação Digital",
    siteName: "Spacefy | Excelência em Tecnologia",
    url: "https://spacefy.com.br",
    locale: "pt_BR",
    description:
      "Desenvolvemos soluções digitais inovadoras que transformam negócios. Expertise em tecnologia de ponta para resultados extraordinários.",
    images: [{
      url: 'https://spacefy.com.br/logo/website-banner.png',
      width: 1200,
      height: 630,
      alt: 'Spacefy - Transformação Digital',
      type: 'image/png',
      secureUrl: 'https://spacefy.com.br/logo/website-banner.png',
    }],
    type: 'website',
  },
  twitter: {
    title: "Spacefy | Transformação Digital",
    description:
      "Desenvolvemos soluções digitais inovadoras que transformam negócios. Expertise em tecnologia de ponta para resultados extraordinários.",
    card: "summary_large_image",
    images: [{
      url: 'https://spacefy.com.br/logo/website-banner.png',
      width: 1200,
      height: 630,
      alt: 'Spacefy - Transformação Digital',
    }],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${poppins.variable} ${dmsans.variable}`}>
      <head>
        <meta property="og:image:secure_url" content="https://spacefy.com.br/logo/website-banner.png" />
      </head>
      <body className={`${poppins.variable} ${dmsans.variable}`}>
        <NavbarComponent />
        {children}
        <ScrollToTop />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
