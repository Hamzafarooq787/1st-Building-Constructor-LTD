import type { Metadata } from "next";
import {
  Inter,
  Montserrat,
  Dancing_Script,
  Space_Grotesk,
  Work_Sans,
  Newsreader,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-dancing",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-work-sans",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic", "normal"],
  variable: "--font-newsreader",
  display: "swap",
});

export const metadata: Metadata = {
  title: "1st Building Contractors Ltd | Build on Trust",
  description:
    "1st Building Contractors Ltd delivers premier new builds, extensions, loft conversions, structural works and groundworks across London and the Home Counties.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} ${dancingScript.variable} ${spaceGrotesk.variable} ${workSans.variable} ${newsreader.variable}`}
    >
      <body className="font-sans text-gray-800 antialiased bg-white selection:bg-brand-maroon selection:text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
