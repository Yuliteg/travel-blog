import { Poppins } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export async function generateMetadata() {
  return {
    title: "Secret Europe",
    description:
      "Discover the hidden gems of Europe. From the best places to eat, to the most beautiful hikes, to the most unique experiences, Secret Europe has you covered.",
    icons: {
      // TODO Fix in prod
      icon: "/logo.svg"
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
        <div className="flex min-h-screen flex-col">
          <Header />

          <main className="w-full flex-1">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
