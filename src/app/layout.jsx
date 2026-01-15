import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Super Tech | Modern Tech Store",
  description:
    "Super Tech is a modern technology store showcasing the latest laptops, gadgets, and accessories with detailed product listings.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <Navbar></Navbar>
        </header>
        <main>
          {children}
        </main>
        <Footer></Footer>
        <Toaster></Toaster>
      </body>
    </html>
  );
}
