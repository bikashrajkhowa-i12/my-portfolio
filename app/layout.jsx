import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import { ContextProvider } from "@/context/AppContext";
import { Toaster } from "@/components/ui/sonner";

const inter = localFont({
  src: [
    {
      path: "../public/fonts/inter/InterVariable.ttf",
      style: "normal",
    },
  ],
  variable: "--font-inter",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "rgba(248, 250, 252, 0.7)",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "rgba(15, 23, 42, 0.45)",
    },
  ],
};

export const metadata = {
  metadataBase: new URL("https://bikashrajkhowa.vercel.app"),
  title: {
    default: "Bikash Rajkhowa — Software Engineer",
    template: "%s | Bikash Rajkhowa",
  },
  description:
    "Portfolio of Bikash Rajkhowa — building fast, accessible web apps with Next.js",
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Bikash Rajkhowa" }],
  creator: "Bikash Rajkhowa",
  publisher: "Bikash Rajkhowa",
  alternates: {
    canonical: "https://bikashrajkhowa.vercel.app",
  },
  openGraph: {
    type: "website",
    url: "https://bikashrajkhowa.vercel.app",
    title: "Bikash Rajkhowa — Software Engineer",
    description:
      "See projects, experience, and how I build production-grade web apps.",
    siteName: "Bikash Rajkhowa — Portfolio",
    images: [
      {
        url: "/projects/portfolio/1.jpg",
        width: 1200,
        height: 630,
        alt: "Preview of Bikash Rajkhowa’s portfolio",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bikash Rajkhowa — Portfolio",
    description: "Selected projects and experience.",
    images: ["/projects/portfolio/1.jpg"],
    creator: "@_bikashrajkhowa",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Bikash Rajkhowa",
              url: "https://bikashrajkhowa.vercel.app",
              sameAs: [
                "https://github.com/bikashrajkhowa-i12",
                "https://www.linkedin.com/in/bikash-rajkhowa-857a191a6/",
              ],
              jobTitle:
                "Software Engineer - (React, Nextjs, Tailwindcss, Nodejs, Express, Mongo, PG, AWS)",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster
          toastOptions={{
            className: "backdrop-blur-sm",
          }}
        />
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
