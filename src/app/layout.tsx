import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "hashBox - Hash Generator",
  description:
    "Generate hashes, GUIDs and much more! A complete dev-friend app!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2418822760151879"
        strategy="lazyOnload"
        crossOrigin="anonymous"
      />
      <body className={inter.className}>
        <Header />
        <div className="flex flex-row">
          <div className="flex flex-col items-start w-40"></div>
          <div className="flex flex-col w-full">
            {children}
          </div>
          <div className="flex flex-col items-end m-5  w-40"></div>
        </div>
      </body>
    </html>
  );
}
