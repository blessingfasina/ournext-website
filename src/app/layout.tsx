import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { SiteFooter } from "@/components/SiteFooter";
import { SkipLink } from "@/components/SkipLink";
import "./globals.css";
import "./site.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ournext.uk"),
  title: {
    default: "OurNext — Shared care, quietly organised",
    template: "%s — OurNext",
  },
  description:
    "OurNext helps families organise care for someone they love — plans, asks for help, people, updates and private files.",
  icons: {
    icon: "/app-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={GeistSans.className}>
        <SkipLink />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
