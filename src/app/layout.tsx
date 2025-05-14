import type { Metadata } from "next";
import "./globals.scss";
import Header from "@/components/header/Header";
import NavBar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

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
    <html lang="pt-BR">
      <body className="layout">
        <Header />
        <NavBar />
        <main className="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
