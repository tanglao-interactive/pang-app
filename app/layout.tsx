import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pang App | Clearer operations for modern teams",
  description:
    "Pang App is a subscription-based software platform by Tanglao, Corp, built to help teams work with more clarity and consistency."
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
