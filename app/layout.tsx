import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const display = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://skalefitness.com"),
  title: {
    default: "Skale Fitness Unlimited | Premium Gyms in Chennai",
    template: "%s | Skale Fitness",
  },
  description:
    "Skale Fitness Unlimited is a Chennai-first fitness chain with expert coaching, strength zones, cardio, group classes, and personal training.",
  openGraph: {
    title: "Skale Fitness Unlimited",
    description:
      "Premium strength, cardio, personal training, and group fitness across Chennai.",
    images: [
      "https://skalefitness.com/wp-content/uploads/2024/08/Group-427321739-2-scaled.webp",
    ],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
