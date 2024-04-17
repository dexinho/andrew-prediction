import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrew prediction",
  description: "App for predicting future orders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} relative container m-auto p-4 h-screen`}
      >
        <Navbar />
        <main
          className="relative top-16 pb-4 flex items-center justify-center"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
