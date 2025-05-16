import "./globals.scss";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Ovo } from "next/font/google";

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata = {
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
        <GoogleOAuthProvider clientId="87036932809-p6nnu1aarqtedt1p0la20njctidvvo3i.apps.googleusercontent.com">
          <Header />
          <main className="content">{children}</main>
          <Footer />
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
