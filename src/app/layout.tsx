import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from '@/redux/providers'
import header from '../../public/assets/header.png'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-mainFontFamily ${inter.className}`} suppressHydrationWarning={true}>
        <div className="fixed flex justify-center h-20 w-full bg-white" style={{zIndex: 2}}>
          <div className="relative flex items-center">         
             <img
            src={header.src}
            alt="Picture of the author"
          />
          </div>
        </div>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}