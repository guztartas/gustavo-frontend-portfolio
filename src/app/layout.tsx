import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Syne({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gustavo Tartas | Senior Frontend & Fullstack Engineer",
  description:
    "Portfolio of Gustavo Tartas: enterprise e-commerce frontend specialist focused on Next.js, performance, architecture, and product impact.",
  openGraph: {
    title: "Gustavo Tartas | Senior Frontend & Fullstack Engineer",
    description:
      "Enterprise e-commerce frontend portfolio with production-grade Next.js, UI detail, and performance mindset.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeScript = `
    (() => {
      const THEME_KEY = "gt-theme";
      const LOCALE_KEY = "gt-locale";
      const storedTheme = window.localStorage.getItem(THEME_KEY);
      const preferredTheme = storedTheme === "light" || storedTheme === "dark" || storedTheme === "system" ? storedTheme : "system";
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      const resolvedTheme = preferredTheme === "system" ? systemTheme : preferredTheme;
      document.documentElement.dataset.theme = resolvedTheme;
      document.documentElement.dataset.themePreference = preferredTheme;
      const storedLocale = window.localStorage.getItem(LOCALE_KEY);
      const browserLocale = window.navigator.language.toLowerCase().startsWith("pt") ? "pt-BR" : "en-US";
      const resolvedLocale = storedLocale === "pt-BR" || storedLocale === "en-US" ? storedLocale : browserLocale;
      document.documentElement.lang = resolvedLocale;
    })();
  `;

  return (
    <html lang="en-US" suppressHydrationWarning>
      <head>
        <Script id="theme-and-locale-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
      </head>
      <body className={`${bodyFont.variable} ${displayFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
