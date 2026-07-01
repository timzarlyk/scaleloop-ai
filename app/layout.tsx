import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteChrome from "@/components/SiteChrome";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://scaleloop.ai"),
  title: {
    default: "scaleloop.ai — Софт для роста, контроля и прозрачности бизнеса",
    template: "%s · scaleloop.ai",
  },
  description:
    "scaleloop.ai создаёт CRM, ERP/MES-модули, BI-дашборды и AI-решения, которые соединяют продажи, производство, склад, качество и аналитику в один управляемый контур.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  keywords: [
    "CRM",
    "ERP",
    "MES",
    "BI дашборды",
    "AI аналитика",
    "Traceability",
    "HACCP",
    "интеграция 1С",
    "цифровизация производства",
  ],
  openGraph: {
    title: "scaleloop.ai — Цифровые системы для управляемого роста бизнеса",
    description:
      "Находим, где бизнес теряет деньги в процессах, и создаём цифровую систему, которая закрывает эту потерю.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-base text-ink">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
