import type { Metadata } from "next";
import "./globals.scss";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Ovo } from "next/font/google";

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"], // pesos desejados
  variable: "--font-ovo", // cria uma variável CSS
});

export const metadata: Metadata = {
  title: "Portifólio Hugo",
  description: "Primeira task do módulo de React VS16",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={ovo.variable}>
      <body className="layout">
        <Header />
        <main className="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
