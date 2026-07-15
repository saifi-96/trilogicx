import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Trilogicx | Innovating Digital Solutions",
    template: "%s | Trilogicx",
  },
  description: "Trilogicx is a premier software development agency providing cutting-edge digital solutions, web applications, enterprise software, and AI integration.",
  keywords: [
    "trilogicx",
    "trilogic",
    "trilogics",
    "software development agency",
    "web development",
    "mobile app development",
    "AI solutions",
    "enterprise software",
    "tech agency Islamabad",
    "digital solutions",
  ],
  authors: [{ name: "Trilogicx Team" }],
  creator: "Trilogicx",
  metadataBase: new URL("https://trilogicx.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://trilogicx.com",
    title: "Trilogicx | Innovating Digital Solutions",
    description: "Premier software development agency specializing in cutting-edge digital solutions, web apps, and AI integration.",
    siteName: "Trilogicx",
    images: [
      {
        url: "/linkedin-logo.png",
        width: 512,
        height: 512,
        alt: "Trilogicx Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trilogicx | Innovating Digital Solutions",
    description: "Premier software development agency specializing in cutting-edge digital solutions, web apps, and AI integration.",
    images: ["/linkedin-logo.png"],
    creator: "@trilogicx",
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Trilogicx",
  alternateName: ["Trilogic", "Trilogics"],
  url: "https://trilogicx.com",
  logo: "https://trilogicx.com/linkedin-logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+92 311 9606735",
    contactType: "customer service",
    email: "info@trilogicx.com",
    areaServed: "Worldwide",
    availableLanguage: "en"
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "House 790, Street 43-c, Phase 4-A, Ghouri Town",
    addressLocality: "Islamabad",
    addressCountry: "PK"
  },
  sameAs: [
    "https://linkedin.com/company/trilogicx",
    "https://github.com/saifi-96/trilogicx"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
