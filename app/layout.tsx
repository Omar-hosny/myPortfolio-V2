import type { Metadata } from "next";
import { Sora, Barlow, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Omar Hosny | Front-End Developer",
  description:
    "Front-End Developer with over 5 years of experience building responsive, high-performance, and accessible web applications using React, Next.js, and TypeScript.",
  keywords: [
    "Front-End Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Developer",
    "Portfolio",
    "Remote Developer",
    "Alexandria Egypt",
  ],
  authors: [{ name: "Omar Hosny" }],
  openGraph: {
    title: "Omar Hosny | Front-End Developer",
    description:
      "Front-End Developer building responsive, high-performance web applications with React, Next.js, and TypeScript.",
    url: "https://omarhosny.dev",
    siteName: "Omar Hosny",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omar Hosny | Front-End Developer",
    description:
      "Front-End Developer building responsive, high-performance web applications with React, Next.js, and TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Omar Hosny",
  url: "https://omarhosny.dev",
  jobTitle: "Front-End Developer",
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Front-End Development",
    "Web Accessibility",
    "Web Performance",
  ],
  email: "omarhosnydev@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Alexandria",
    addressCountry: "EG",
  },
  sameAs: [
    "https://github.com/Omar-hosny",
    "https://www.linkedin.com/in/omar-hosny72/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${sora.variable} ${barlow.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main-content"
            className="fixed -top-full left-4 z-[100] rounded-b-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all focus-visible:top-0 focus-visible:outline-none"
          >
            Skip to main content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
