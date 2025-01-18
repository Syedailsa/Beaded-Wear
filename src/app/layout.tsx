import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/header";
import Footer from "@/components/layout/footer";

const font = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Beaded Wear",
  description: "Wear Your Story, One Bead at a Time. Discover Handcrafted Beaded Bracelets That Speak Your Style!"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        {/* <Header/> */}
        {children}
        <Footer/>
      </body>
    </html>
  );
}
