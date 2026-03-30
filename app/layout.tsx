import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tanglao, Corp | Software products built to run",
  description:
    "Tanglao, Corp builds and operates subscription-based software products designed for modern teams."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
