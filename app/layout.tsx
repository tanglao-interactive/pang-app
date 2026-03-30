import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pang App | Planning and intake software for modern teams",
  description:
    "Pang App is a software platform by Tanglao, Corp featuring products like Pang Daily Planner and Pang Intake for teams that need clearer planning, intake, and day-to-day execution."
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
