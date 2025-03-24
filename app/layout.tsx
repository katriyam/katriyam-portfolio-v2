import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NavigationMenu } from "@/components/nav-menu";
import { Footer } from "@/components/footer-section";

export const metadata: Metadata = {
  title: "Katriyam",
  description: "Grow your business with Katriyam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavigationMenu />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
