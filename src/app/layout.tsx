import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { TawkTo } from "@/components/ui";
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
        url: "https://facitesynergy.com/preview.png",
        width: 1536,
        height: 1024,
        alt: "Facite Synergy - Real Estate, Roofing & Survey Services",
        type: "image/png",
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
    images: ["https://facitesynergy.com/preview.png"],
    creator: "@facitesynergy",
    site: "@facitesynergy",
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
        
        {/* Additional Open Graph tags for better compatibility */}
        <meta property="og:image" content="https://facitesynergy.com/preview.png" />
        <meta property="og:image:width" content="1536" />
        <meta property="og:image:height" content="1024" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Facite Synergy - Real Estate, Roofing & Survey Services" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@facitesynergy" />
        <meta name="twitter:creator" content="@facitesynergy" />
        <meta name="twitter:image" content="https://facitesynergy.com/preview.png" />
        
        {/* WhatsApp specific tags */}
        <meta property="og:image:secure_url" content="https://facitesynergy.com/preview.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <TawkTo />
      </body>
    </html>
  );
}
