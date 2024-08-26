import { Inter } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function SiteLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col h-full min-h-screen`}>
        <div className="bg-[#F0EBE1] flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 container mx-10 py-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
