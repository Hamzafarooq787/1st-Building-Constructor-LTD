import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "1st Building Constructor LTD",
  description: "Website for 1st Building Constructor LTD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
