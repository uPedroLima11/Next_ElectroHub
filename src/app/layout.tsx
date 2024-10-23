import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "ElectroHub",
  description: "Loja de Eletronicos ElectroHub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="pt-br">
      <body className="bg-[#d6d4d4]">


        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
