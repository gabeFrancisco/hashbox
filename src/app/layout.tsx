import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Script from "next/script";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HashLab - Generate Hashes, GUIDs, Base64, and Bcrypt!",
  description:
    "HashLab is an online tool for generating hashes, GUIDs, Base64 encodings, and Bcrypt hashes. With a simple and intuitive interface, it streamlines hash creation for security and software development applications.",
  keywords: [
    "HashLab",
    "hash generator",
    "Bcrypt generator",
    "GUID generator",
    "Base64 encoder",
    "online tool",
    "hash creation",
    "security",
    "hashes online",
    "hash tool",
  ],
  icons: ["favicon.ico"],
  alternates: {
    canonical: './',
}
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body id="container" className={`${inter.className} dark:bg-gray-900`}>
        <Header />
        <div className="flex flex-row w-full">
          <div className="flex flex-col items-start lg:w-40"></div>
          <div className="flex flex-col w-full py-10 mx-5 text-gray-700 lg:px-16">
            {children}
            <Analytics />
          </div>
          <div className="flex flex-col items-end lg:w-40"></div>
        </div>
      </body>
    </html>
  );
}
