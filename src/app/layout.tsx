import type { Metadata, Viewport } from "next";
import "./globals.css";
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
    images: ["/logo/website-banner.png"],
  },
  twitter: {
    title: "Spacefy | Transformação Digital",
    description:
      "Desenvolvemos soluções digitais inovadoras que transformam negócios. Expertise em tecnologia de ponta para resultados extraordinários.",
    card: "summary_large_image",
    images: ["/logo/website-banner.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${poppins.variable} ${dmsans.variable}`}>
      <body className={`${poppins.variable} ${dmsans.variable}`}>
        <NavbarComponent />
        {children}
        <ScrollToTop />
        <WhatsAppButton />
      </body>
    </html>
  );
}
