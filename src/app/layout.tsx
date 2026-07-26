import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Moonar | AI-Powered Engineering Software for Tyre Development",
    template: "%s | Moonar",
  },
  description: siteConfig.description,
  keywords: [
    "tyre engineering software",
    "tyre mould design",
    "tyre section design",
    "tyre performance prediction",
    "AI engineering software",
    "tyre manufacturing software",
  ],
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Moonar | AI-Powered Engineering Software for Tyre Development",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Moonar | AI-Powered Engineering Software for Tyre Development",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${inter.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-text-primary">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
