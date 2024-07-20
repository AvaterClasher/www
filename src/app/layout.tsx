import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { TRPCReactProvider } from "~/trpc/react";
import { ThemeWrapper } from "./_components/quark/theme-wrapper";
import { ResponsiveIndicator } from "./_components/atom/responsive-ind";
import { NavbarMobile, NavbarProvider } from "./_components/navbar/navbar-mobile";
import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";

export const metadata = {
  title: "Soumyadip Moni",
  description: "Portfolio of Soumyadip Moni",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
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
      </body>
    </html>
  );
}
