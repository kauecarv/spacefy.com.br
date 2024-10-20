import type { Metadata } from "next";
import "./globals.css";
import NavbarComponent from "./components/navbar/NavbarComponent";
import WhatsAppButton from "./components/Whatsapp";

export const metadata: Metadata = {
  title: "Spacefy - Soluções Digitais",
  description:
    "Explorando novos horizontes digitais. Inove com tecnologia de ponta e leve sua visão além do esperado com a Spacefy.",
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
  keywords: ["spacefy", "soluções digitais"],
  openGraph: {
    title: "Spacefy - Soluções Digitais",
    siteName: "Spacefy - Solução Rápida e Eficaz",
    url: "https://spacefy.com.br",
    locale: "pt_BR",
    description:
      "Explorando novos horizontes digitais. Inove com tecnologia de ponta e leve sua visão além do esperado com a Spacefy.",
    images: ["/logo/website-banner.png"],
  },
  twitter: {
    title: "Spacefy - Soluções Digitais",
   description:
      "Explorando novos horizontes digitais. Inove com tecnologia de ponta e leve sua visão além do esperado com a Spacefy.",
    card: "summary_large_image",
    images: ["/logo/website-banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <NavbarComponent />

        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
