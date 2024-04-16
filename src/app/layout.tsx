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
      <body className={`${inter.className} relative container flex flex-col items-center justify-center m-auto px-2 h-screen`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
