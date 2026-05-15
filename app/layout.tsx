import type { Metadata } from "next";
import { Inter, Fraunces, Geist_Mono, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-cursive",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hello. Rishabh Balabomma here, applying for the operator seat.",
  description:
    "A working note from Rishabh Balabomma. The journey, what shipped, why, what I would build first, the honest read, and coffee.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${geistMono.variable} ${caveat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
