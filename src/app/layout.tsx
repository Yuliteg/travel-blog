import { Poppins } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export async function generateMetadata() {
  return {
    title: "Flavor Palette",
    description:
      "Explore a world of flavors, discover handcrafted recipes, and let the aroma of our passion for cooking fill your kitchen.",
    icons: {
      icon: "/recipe/logo.svg"
    }
  };
}

export default function SiteLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${poppins.className} flex h-full min-h-screen flex-col tracking-tighter`}
      >
        <div className="flex min-h-screen flex-col bg-[#F0EBE1]">
          <Header />
          <main className="mx-auto w-11/12 flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
