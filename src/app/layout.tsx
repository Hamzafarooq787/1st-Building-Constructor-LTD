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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.1st-bc.com";
const siteTitle = "1st Building Contractors Ltd | Build on Trust";
const siteDescription =
  "1st Building Contractors Ltd delivers premier new builds, extensions, loft conversions, structural works and groundworks across London and the Home Counties.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  icons: {
    icon: "/images/1st-building-contractors-site-icon-256x256.png",
    shortcut: "/images/1st-building-contractors-site-icon-256x256.png",
    apple: "/images/1st-building-contractors-site-icon-256x256.png",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "1st Building Contractors Ltd",
    images: [
      {
        url: "/images/1st-building-contractors-open-graph-1200x630.webp",
        width: 1200,
        height: 630,
        alt: "1st Building Contractors Ltd",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/1st-building-contractors-open-graph-1200x630.webp"],
  },
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
