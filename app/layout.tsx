import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pang-app.com"),
  title: "Pang App | Planning and intake software for modern teams",
  description:
    "Pang App is a software platform by Tanglao, Corp featuring products like Pang Daily Planner, Pang Intake, and Pang DB for teams that need clearer planning, intake, and day-to-day execution."
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
