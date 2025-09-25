import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
// next-seo is not used in App Router layout; using metadata API instead
import "./globals.css";
import { Toaster } from "@/components/ui/Toast";

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zuit Up — Elevate your workflow",
  description: "Zuit Up is a modern toolkit to elevate your workflow.",
  metadataBase: new URL("https://zuitup.example.com"),
  openGraph: {
    type: "website",
    siteName: "Zuit Up",
    url: "https://zuitup.example.com",
    title: "Zuit Up — Elevate your workflow",
    description: "Zuit Up is a modern toolkit to elevate your workflow.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Toaster>
          {children}
        </Toaster>
      </body>
    </html>
  );
}
