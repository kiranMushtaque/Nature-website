


// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://naturewater.com.pk"),

  title: {
    default: "Nature Water | Pure Bottled Water in Pakistan",
    template: "%s | Nature Water",
  },
  description:
    "Purity in Every Drop — Trusted for 25 Years. Premium mineral water delivered across Karachi and Pakistan.",
  keywords:
    "nature water, mineral water pakistan, pure bottled water, karachi water delivery, premium water, healthy water, mineral water karachi",

  //  FAVICON
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon-64x64.png",
        sizes: "64x64",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  // Google Search Console Verification
  verification: {
    google: "MsXR74ZYPPhaXe3bGKp75rrbthZhZCqn0iZkN_nOUDI",
  },

  // Open Graph / Facebook
  openGraph: {
    title: "Nature Water | Pure Bottled Water",
    description: "Purity in Every Drop — Trusted for 25 Years",
    url: "https://naturewater.com.pk",
    siteName: "Nature Water",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nature Water - Pure Mineral Water Pakistan",
      },
    ],
    locale: "en_PK",
    type: "website",
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Nature Water | Pure Bottled Water",
    description: "Purity in Every Drop — Trusted for 25 Years",
    images: ["/og-image.jpg"],
  },

  // Additional SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} font-sans scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

