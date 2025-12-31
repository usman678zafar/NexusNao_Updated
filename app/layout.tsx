import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Nexusnao',
    default: 'Nexus Nao • Enterprise Software & E Commerce Solutions',
  },
  description: 'Nexusnao delivers custom software, AI solutions, and digital transformation services for global enterprises. Book a discovery call today.',
  keywords: ['Custom Software', 'AI Solutions', 'Web Development', 'Enterprise', 'B2B'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nexusnao.com',
    siteName: 'Nexusnao',
    images: [
      {
        url: 'https://nexusnao.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nexusnao - Building the Future',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nexusnao',
    creator: '@nexusnao',
  },
  robots: {
    follow: true,
  },
  icons: {
    icon: '/logo2.png',
    apple: '/logo2.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 selection:bg-violet-500/30`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Nexus Nao',
              url: 'https://nexusnao.com',
              logo: 'https://nexusnao.com/logo2.png',
              sameAs: [
                'https://twitter.com/nexusnao',
                'https://linkedin.com/company/nexusnao'
              ]
            })
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
