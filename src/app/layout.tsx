import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { TRPCReactProvider } from "~/trpc/react";
import { ThemeWrapper } from "./_components/quark/theme-wrapper";
import { ResponsiveIndicator } from "./_components/atom/responsive-ind";
import { NavbarMobile, NavbarProvider } from "./_components/navbar/navbar-mobile";
import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";
import { ENV } from "~/lib/constants";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: "Soumyadip Moni",
  description: "Portfolio of Soumyadip Moni",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: 'Soumyadip',
    description: 'Soumyadip Moni personal website',
    url: ENV.NEXT_PUBLIC_WEBSITE_URL,
    siteName: 'Soumyadip',
    locale: 'en_US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    title: 'Soumyadip',
    card: 'summary_large_image'
  },
  verification: {
    google: ENV.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-mono`}>
        <ThemeWrapper
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main>
            <TRPCReactProvider>
              <NavbarProvider>
                <Navbar/>
                <NavbarMobile/>
              </NavbarProvider>
              {children}
              <Footer/>
            </TRPCReactProvider>
          </main>
        </ThemeWrapper>
        <ResponsiveIndicator />
        {process.env.NODE_ENV === 'production' && <Analytics /> && <SpeedInsights/>}
      </body>
    </html>
  );
}
