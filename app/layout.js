import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "MOU - Cosmetic Store",
  description:
    "MOU Cosmetic Store Online - Your Beauty Destination",
  icons: {
    icon: "/logo.svg",
  },
  keywords: "cosmetic, store, online, shopping, beauty, products, MOU",
  authors: [{ name: "Seif El-Din Mostafa", url: "01277379678" }],
  creator: "Seif El-Din Mostafa",
  openGraph: {
    title: "MOU Cosmetic Store",
    description:
      "MOU Cosmetic Store Online - Your Beauty Destination",
    url: "https://mou-cosmetics.com",
    siteName: "MOU Cosmetic Store",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased selection:bg-pink-100 selection:text-pink-600`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
