import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "hashBox - Hash Generator",
  description:
    "Generate hashes, GUIDs and much more! A complete dev-friend app!",
  icons: ["favicon.ico"],
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
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body id="container" className={`${inter.className} dark:bg-gray-900`}>
        <Header />
        <div className="flex flex-row w-full">
          <div className="flex flex-col items-start lg:w-40"></div>
          <div className="flex flex-col w-full py-10 mx-5 text-gray-700 lg:px-16">
            {children}
            <Analytics/>
          </div>
          <div className="flex flex-col items-end lg:w-40"></div>
        </div>
      </body>
    </html>
  );
}
