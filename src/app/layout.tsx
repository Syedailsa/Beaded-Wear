import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/header";
import Footer from "@/components/layout/footer";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "react-hot-toast";

const font = Space_Grotesk({ subsets: ["latin"] })
const backGround = ''

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
        className={`${font.className} ${backGround} `}
      >
        <CartProvider>
          <Header/>
          <div>
            {children} 
          </div>
          <Toaster           position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#a3d29c',
              color: '#000000',
            },
          }} />
        </CartProvider>  
        <Footer/>
      </body>
    </html>
  );
}
