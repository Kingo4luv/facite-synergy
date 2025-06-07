import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Facite Synergy | Real Estate, Roofing & Survey Services in Nigeria",
  description:
    "Leading real estate, roofing solutions, and property survey services in Nigeria. Quality land sales, professional roofing installations, and certified surveying services across Lagos, Abuja, and beyond.",
  keywords:
    "real estate Nigeria, roofing services, property survey, land sales, roofing installation, property surveying, Lagos real estate, Abuja properties, Nigeria construction",
  authors: [{ name: "Facite Synergy" }],
  creator: "Facite Synergy",
  publisher: "Facite Synergy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://facitesynergy.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Facite Synergy | Real Estate, Roofing & Survey Services",
    description:
      "Leading real estate, roofing solutions, and property survey services in Nigeria. Quality land sales, professional roofing installations, and certified surveying services.",
    url: "https://facitesynergy.com",
    siteName: "Facite Synergy",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Facite Synergy - Real Estate, Roofing & Survey Services",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Facite Synergy | Real Estate, Roofing & Survey Services",
    description:
      "Leading real estate, roofing solutions, and property survey services in Nigeria.",
    images: ["/preview.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    // Add other verification codes as needed
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
