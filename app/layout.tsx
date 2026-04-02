import type { Metadata } from "next";
import Script from "next/script";
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
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-30T45VN1TL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-30T45VN1TL');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
