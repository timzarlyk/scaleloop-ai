import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Коммерческое предложение для Shin-Line",
  description:
    "Цифровая и операционная трансформация пищевого производства — коммерческое предложение ScaleLoop.ai для Shin-Line.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function ShinLineKpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
