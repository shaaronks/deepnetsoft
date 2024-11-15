import type { Metadata } from "next";
import { connectToDB } from "./lib/db";
import { Oswald, Kelly_Slab, Lato } from 'next/font/google'
import "./globals.css";
const oswald = Oswald({ subsets: ['latin'] })
const kelly = Kelly_Slab({subsets: ["latin"], weight: ["400"]});
const lato = Lato({subsets: ["latin"], weight: ["400"]});
export const metadata: Metadata = {
  title: "Deep Net Soft",
  description: "Test Website for Deep Net Soft",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  connectToDB()
  return (
    <html lang="en">
      <body
        className={`${oswald.className} ${lato.className} ${kelly.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
