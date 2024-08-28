import { Poppins } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import "../globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: "700" });

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
        className={`${poppins.className} tracking-tighter flex flex-col h-full min-h-screen`}
      >
        <div className="bg-[#F0EBE1] flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 container mx-10 py-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
