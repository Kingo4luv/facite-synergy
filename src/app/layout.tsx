import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TawkTo } from "@/components/ui";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Facite Synergy | Real Estate, Roofing & Survey Services in Nigeria",
  description:
    "Leading real estate, roofing solutions, and property survey services in Nigeria. Quality land sales, professional roofing installations, and certified surveying services across Lagos, Abuja, and beyond.",
  keywords:
    "real estate Nigeria, roofing services, property survey, land sales, roofing installation, property surveying, Lagos real estate, Abuja properties, Nigeria construction, roof tiles Nigeria, land survey Abuja, property investment Lagos",
  authors: [{ name: "Facite Synergy" }],
  creator: "Facite Synergy",
  publisher: "Facite Synergy",
  category: "Business Services",
  classification: "Real Estate & Construction Services",
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
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" },
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
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Section-specific meta descriptions */}
        <meta name="description:services" content="Professional real estate services, premium roofing solutions, and certified property survey services across Nigeria. Expert land sales, roof installations, and surveying." />
        <meta name="description:about" content="Trusted Nigerian real estate and roofing company committed to quality, integrity, and customer satisfaction. Expert team with in-depth industry knowledge." />
        <meta name="description:contact" content="Contact Facite Synergy for real estate, roofing, and survey services. Offices in Abuja and Enugu. Professional consultation and free quotes available." />
        
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
        
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Facite Synergy",
              "description": "Leading real estate, roofing solutions, and property survey services in Nigeria",
              "url": "https://facitesynergy.com",
              "logo": "https://facitesynergy.com/facite-synergy-logo.png",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+234-703-604-1395",
                  "contactType": "customer service",
                  "areaServed": "Nigeria",
                  "availableLanguage": "English"
                }
              ],
              "address": [
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Abuja",
                  "addressRegion": "FCT",
                  "addressCountry": "Nigeria",
                  "streetAddress": "No. 24 Ebitu Ukiwe St. Jabi, Beta Foundation Plaza Jabi, Suite 313B Second Floor"
                },
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Enugu",
                  "addressRegion": "Enugu State",
                  "addressCountry": "Nigeria",
                  "streetAddress": "71 More House by Denten Street, Ogui Road"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/facitesynergy",
                "https://www.instagram.com/facitesynergy",
                "https://twitter.com/facitesynergy"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Real Estate and Construction Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Real Estate Services",
                      "description": "Quality land sales and property investment opportunities across Nigeria"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Roofing Solutions",
                      "description": "Professional roofing installations with durable, high-quality materials"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Property Survey Services",
                      "description": "Accurate land and property survey reports for legal and planning purposes"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
        <TawkTo />
      </body>
    </html>
  );
}
