import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "../styles/globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/Footer";
import GlobalEnquiryPopup from "@/components/GlobalEnquiryPopup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  ),
  title: {
    default: "Multi-site Blog System",
    template: "%s | Multi-site Blog System",
  },
  description: "Reusable Next.js 14 blog template with Prisma, TipTap, and an admin console.",
  openGraph: {
    title: "Multi-site Blog System",
    description: "Reusable Next.js 14 blog template with Prisma, TipTap, and an admin console.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Multi-site Blog System",
    description: "Reusable Next.js 14 blog template with Prisma, TipTap, and an admin console.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* performance hints to reduce render-blocking */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="preconnect" href="https://nidads.com" />
        {/* tailwind is compiled via PostCSS; no CDN script needed */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} app-shell`}>
        <Navbar/>
        {children}
        <Footer/>
        <GlobalEnquiryPopup />
      </body>
    </html>
  );
}
